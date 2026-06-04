from concurrent.futures import Future, ThreadPoolExecutor
from contextlib import contextmanager
from datetime import datetime, timedelta
import datetime as dt_pkg
from functools import lru_cache
import json
import logging
import os
from pathlib import Path
import time
from typing import Any, Callable, Final, Literal, Self
import pandas as pd
from fastparquet import write as write_parquet
from zoneinfo import ZoneInfo
from src.constant import SHARED_DIR, ChinaRect, SPATIAL_RESOLUTION
from scipy.spatial import cKDTree  # type: ignore
import numpy as np
import rasterio
from rasterio.transform import from_origin
from src.types import Maybe, Number
from rasterio.io import MemoryFile
from rasterio.warp import calculate_default_transform, reproject, Resampling
import warnings

warnings.filterwarnings(
    'ignore', message="Could not parse column 'adcode' as JSON; leaving as string"
)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger()


class PathUtil:
    def __init__(self):
        self.ds = SHARED_DIR / 'data_source'
        """原始数据的路径"""
        self.rec = SHARED_DIR / 'reconstruct'
        """重建结果的路径"""
        self.est = SHARED_DIR / 'estimate'
        """估算结果的路径"""

    def ensure_path_exist(self, path: Path):
        """确保目录 or 文件夹所在的目录 存在"""
        dirname = os.path.dirname(path)
        if len(dirname) == 0:
            return
        os.makedirs(dirname, exist_ok=True)

    def rel2abs(self, path: Path) -> Path:
        """相对路径转为绝对路径，从`shared`开始

        Args:
            path (Path): _description_

        Returns:
            Path: _description_
        """
        return Path(*path.parts[1:])

    # ------------------------------------ ds ------------------------------------ #F
    def gen_pq_path_under_ds(
        self,
        pre: list[str | Path],
        dt: datetime,
    ) -> Path:
        """拼接为路径`../shared/data_source/{*pre}/{year}/{ymd}.parquet`

        Args:
            pre (list[str | Path]): 前缀列表，每一级路径分开
            dt (datetime): _description_

        Returns:
            Path: 完整路径
        """
        return self.ds / Path(*pre) / str(dt.year) / f'{time_util.dt2ymd(dt)}.parquet'

    # ------------------------------------ rec ----------------------------------- #F
    def gen_pq_path_under_rec(self, pre: list[str | Path], dt: datetime) -> Path:
        """拼接为路径`../shared/reconstruct/{*pre}/{year}/{ymd}.parquet`

        Args:
            pre (list[str | Path]): 前缀列表，每一级路径分开
            dt (datetime): _description_

        Returns:
            Path: 完整路径
        """
        return self.rec / Path(*pre) / f'{dt.year}' / f'{time_util.dt2ymd(dt)}.parquet'

    # ------------------------------------ est ----------------------------------- #
    def gen_tif_path_under_est(self, pre: list[str | Path], dt: datetime) -> Path:
        """拼接为路径`../shared/estimate/{*pre}/{year}/{ymd}.tif`

        Args:
            pre (list[str | Path]): 前缀列表，每一级路径分开
            dt (datetime): _description_

        Returns:
            Path: 完整路径
        """
        return self.est / Path(*pre) / f'{dt.year}' / f'{time_util.dt2ymd(dt)}.tif'

    # ---------------------------------- remove ---------------------------------- #
    def remove(self, path: Path):
        if not path.exists():
            return False
        os.remove(path)
        return True


path_util = PathUtil()


class DataFrameUtil:
    def format_columns(self, df: pd.DataFrame, columns: list[str], n: int = 2):
        """保留df的columns精度至n位小数

        Args:
            df (pd.DataFrame): _description_
            columns (list[str]): _description_
            n (int, optional): _description_. Defaults to 2.

        Returns:
            _type_: _description_
        """
        df[columns] = df[columns].astype(np.float64).round(n)
        return self

    def to_grid(
        self, df: pd.DataFrame, value_column: str, fill_value: Number = -9999
    ) -> np.ndarray:
        """pd.DatFrame => grid

        Args:
            df (pd.DataFrame): _description_

        Returns:
            np.ndarray: _description_
        """
        # 网格，纬度 => 纵向， 经度 => 横向
        lat_nums = int((ChinaRect.maxlat - ChinaRect.minlat) / SPATIAL_RESOLUTION) + 1
        lon_nums = int((ChinaRect.maxlon - ChinaRect.minlon) / SPATIAL_RESOLUTION) + 1
        grid_data = np.zeros([lat_nums, lon_nums])
        grid_data.fill(fill_value)
        # df记录的np.ndarray，每一行是lat_idx、lon_idx、value_column
        # 别用astype(int) !!!
        lat_idx = ((df.lat - ChinaRect.minlat) / SPATIAL_RESOLUTION).round(0)
        lon_idx = ((df.lon - ChinaRect.minlon) / SPATIAL_RESOLUTION).round(0)
        obs_idx_no2_arr = np.array(
            pd.concat([lat_idx, lon_idx, df[value_column]], axis=1)
        )
        # 填充到grid_data中
        grid_data[
            lat_nums - 1 - obs_idx_no2_arr[:, 0].astype(int),
            obs_idx_no2_arr[:, 1].astype(int),
        ] = obs_idx_no2_arr[:, 2]
        return grid_data

    def from_grid(
        self, grid: np.ndarray, value_column: str, fill_value: Number = -9999
    ) -> pd.DataFrame:
        """grid => pd.DataFrame

        Args:
            grid (np.ndarray): lats*lons
            value_column (str): _description_
            fill_value (Number, optional): _description_. Defaults to -9999.

        Returns:
            pd.DataFrame: _description_
        """
        lat_idx = np.arange(
            ChinaRect.maxlat,
            stop=ChinaRect.minlat - 0.01,
            step=-SPATIAL_RESOLUTION,
            dtype=np.float64,
        )
        lon_idx = np.arange(
            ChinaRect.minlon,
            stop=ChinaRect.maxlon + 0.01,
            step=SPATIAL_RESOLUTION,
            dtype=np.float64,
        )
        lon_grid, lat_grid = np.meshgrid(lon_idx, lat_idx)  # 先横后竖
        r, c = np.where(grid == grid)
        df = pd.DataFrame(
            {"lon": lon_grid[r, c], "lat": lat_grid[r, c], value_column: grid[r, c]}
        )
        return df[df[value_column] != fill_value]

    def save_as_tif(self, df: pd.DataFrame, value_column: str, savepath: Path):
        """df转为tiff，4326转为3857并保存，便于在antv l7显示

        >>> 要求这里的df是一个时刻的，作为一个tif保存，只有一个波段

        Args:
            df (pd.DataFrame): _description_
            value_column (str): _description_
            savepath (Path): _description_
        """
        data_array = self.to_grid(df=df, value_column=value_column, fill_value=np.nan)
        height, width = data_array.shape
        crs = rasterio.crs.CRS.from_epsg(4326)  # type: ignore
        # 地理变换
        transform = from_origin(
            west=df.lon.min(),
            north=df.lat.max(),
            xsize=SPATIAL_RESOLUTION,
            ysize=SPATIAL_RESOLUTION,
        )
        path_util.ensure_path_exist(savepath)
        # 投影转换
        with MemoryFile() as memfile:
            with memfile.open(
                driver='GTiff',
                height=height,
                width=width,
                count=1,
                dtype=data_array.dtype,
                crs=crs,
                transform=transform,
                nodata=np.nan,
            ) as dst_mem:
                dst_mem.write(data_array, 1)
                # 计算3857投影参数
                dst_crs = rasterio.crs.CRS.from_epsg(3857)  # type: ignore
                transform_3857, width_3857, height_3857 = calculate_default_transform(
                    dst_mem.crs, dst_crs, dst_mem.width, dst_mem.height, *dst_mem.bounds
                )
                data_3857 = np.empty((height_3857, width_3857), dtype=data_array.dtype)  # type: ignore
                data_3857.fill(np.nan)
                # 内存中执行重投影
                reproject(
                    source=rasterio.band(dst_mem, 1),
                    destination=data_3857,
                    src_transform=dst_mem.transform,
                    src_crs=dst_mem.crs,
                    dst_transform=transform_3857,
                    dst_crs=dst_crs,
                    resampling=Resampling.bilinear,
                    src_nodata=np.nan,
                    dst_nodata=np.nan,
                )
            with rasterio.open(
                savepath,
                'w',
                driver='GTiff',
                height=height_3857,
                width=width_3857,
                count=1,
                dtype=data_3857.dtype,
                crs=dst_crs,
                transform=transform_3857,
                nodata=np.nan,
            ) as dst_3857:
                dst_3857.write(data_3857, 1)

    def save_parquet(self, df: pd.DataFrame, path: Path) -> Self:
        """写入

        Args:
            df (pd.DataFrame): dataframe
            path (Path):

        Returns:
            _type_: _description_
        """
        path_util.ensure_path_exist(path)
        df.to_parquet(path=path, index=False, compression="zstd")
        return self

    def append_parquet(self, df: pd.DataFrame, path: Path) -> Self:
        """追加

        Args:
            df (pd.DataFrame): dataframe
            path (Path):

        Returns:
            Self: _description_
        """
        if not path.exists():
            self.save_parquet(df, path)
        else:
            write_parquet(filename=str(path), data=df, compression="zstd", append=True)
        return self

    def add_temporal_columns(self, df: pd.DataFrame) -> pd.DataFrame:
        """
        # 添加时间列，hour, day, month
        """
        df['hour'] = df['time'].str[-2:].astype(int)
        df['day'] = pd.to_datetime(df['time'], format='%Y%m%d%H').dt.day_of_year
        df['month'] = pd.to_datetime(df['time'], format='%Y%m%d%H').dt.month
        return df

    def n2np(self, df: pd.DataFrame, column: str) -> pd.DataFrame:
        """negative to nearest positive

        Args:
            df (pd.DataFrame): _description_

        Returns:
            pd.DataFrame: _description_
        """
        df['time'] = df.time.astype(int)
        positive = df[df[column] > 0]
        negative = df[df[column] < 0]
        # 构建KDTree（默认用经纬度作为空间坐标）
        pos_coords = positive[['lon', 'lat', 'time']].values
        kdtree = cKDTree(pos_coords)
        # 查找负值样本最近的正值样本索引
        neg_coords = negative[['lon', 'lat', 'time']].values
        _, nearest_idx = kdtree.query(neg_coords, k=1)
        # 提取最近正值并替换
        nearest_vals = positive.iloc[nearest_idx][column].values
        df.loc[negative.index, column] = nearest_vals
        df['time'] = df.time.astype(str)
        return df

    era5_parts: Final[list[str]] = [f'part{i}' for i in range(1, 5)]

    def read_era5(self, dt: datetime):
        return pd.concat(
            [
                pd.read_parquet(path_util.gen_pq_path_under_ds(['era5', part], dt))
                for part in self.era5_parts
            ],
            axis=1,
        )

    def save_era5(self, df: pd.DataFrame):
        dt = time_util.ymd2dt(df.time.tolist()[0][:8])
        self.save_parquet(
            df[['lon', 'lat', 'time', 'u10', 'v10']],
            path_util.gen_pq_path_under_ds(['era5', 'part1'], dt),
        )
        self.save_parquet(
            df[['d2m', 't2m']],
            path_util.gen_pq_path_under_ds(['era5', 'part2'], dt),
        )
        self.save_parquet(
            df[['sp']],
            path_util.gen_pq_path_under_ds(['era5', 'part3'], dt),
        )
        self.save_parquet(
            df[['blh', 'tcw']],
            path_util.gen_pq_path_under_ds(['era5', 'part4'], dt),
        )


df_util = DataFrameUtil()


class TimeUtil:
    def dt2ymd(self, dt: Maybe[datetime] = None) -> str:
        dt = dt or self.utc_now()
        return dt.strftime("%Y%m%d")

    def dt2ymdh(self, dt: Maybe[datetime] = None) -> str:
        dt = dt or self.utc_now()
        return dt.strftime("%Y%m%d%H")

    def dt2ymdhm(self, dt: Maybe[datetime] = None):
        dt = dt or self.utc_now()
        return dt.strftime("%Y%m%d%H%M")

    def ymd2dt(self, ymd: str):
        return datetime.strptime(ymd, "%Y%m%d")
        return datetime.strptime(ymdhms, "%Y%m%d%H%M%S")

    def beijing_now(self):
        return datetime.now(tz=ZoneInfo("Asia/Shanghai"))

    def utc_now(self):
        return datetime.now(tz=dt_pkg.timezone.utc)


time_util = TimeUtil()


class ResampleUtil:
    """重采样工具"""

    def interpolate_resample(
        self,
        df: pd.DataFrame,
        columns: list[str],
        SPATIAL_RESOLUTION: float = SPATIAL_RESOLUTION,
    ) -> pd.DataFrame:
        """通过**双线性插值**提高空间分辨率，适用于**整个研究区都有数据**的情况，**要求df中时间一致或没有时间列**

        Args:
            df (pd.DataFrame): _description_
            columns (list[str]): 要采样的列名列表
            SPATIAL_RESOLUTION (float, optional): 目标空间分辨率. Defaults to SPATIAL_RESOLUTION.

        Returns:
            pd.DataFrame: _description_
        """
        from scipy.interpolate import LinearNDInterpolator

        # 1. 提取插值所需的坐标（x=lon, y=lat）
        points = df[["lon", "lat"]].values
        # 2. 构建目标经纬度网格
        target_lons = np.arange(
            np.floor(ChinaRect.minlon / SPATIAL_RESOLUTION) * SPATIAL_RESOLUTION,
            np.ceil(ChinaRect.maxlon / SPATIAL_RESOLUTION) * SPATIAL_RESOLUTION
            + SPATIAL_RESOLUTION,
            SPATIAL_RESOLUTION,
        )
        target_lats = np.arange(
            np.floor(ChinaRect.minlat / SPATIAL_RESOLUTION) * SPATIAL_RESOLUTION,
            np.ceil(ChinaRect.maxlat / SPATIAL_RESOLUTION) * SPATIAL_RESOLUTION
            + SPATIAL_RESOLUTION,
            SPATIAL_RESOLUTION,
        )
        lon_mesh, lat_mesh = np.meshgrid(target_lons, target_lats)
        # 3. 创建一个空的列表来存储每一列插值后的数据
        interpolated_data = {
            "lon": lon_mesh.flatten(),
            "lat": lat_mesh.flatten(),
        }
        if "time" in df.columns:
            interpolated_data["time"] = df.time.values[0]
        # 4. 对每列进行插值处理
        for column in columns:
            interp_func = LinearNDInterpolator(
                points=points,
                values=df[column].values,
                fill_value=np.nan,  # 缺失填充 NaN
            )
            target_values = interp_func(lon_mesh, lat_mesh)
            interpolated_data[column] = target_values.flatten()
        # 5. 转换为 DataFrame，过滤无效值（NaN）
        df_interpolated = pd.DataFrame(interpolated_data).dropna(subset=columns)
        return df_interpolated

    def grid_divide_resample_v1(
        self,
        df: pd.DataFrame,
        columns: list[str],
        resolution: float = SPATIAL_RESOLUTION,
    ):
        # 1. 左下顶点 (lon向下取整, lat向下取整)
        df_lb = df.copy()
        df_lb['lon'] = (df_lb.lon // resolution) * resolution
        df_lb['lat'] = (df_lb.lat // resolution) * resolution

        # 2. 左上顶点 (lon向下取整, lat向上取整)
        df_lt = df.copy()
        df_lt['lon'] = (df_lt.lon // resolution) * resolution
        df_lt['lat'] = np.ceil(df_lt.lat / resolution) * resolution  # 修正：np.ceil()

        # 3. 右下顶点 (lon向上取整, lat向下取整)
        df_rb = df.copy()
        df_rb['lon'] = np.ceil(df_rb.lon / resolution) * resolution  # 修正：np.ceil()
        df_rb['lat'] = (df_rb.lat // resolution) * resolution

        # 4. 右上顶点 (lon向上取整, lat向上取整)
        df_rt = df.copy()
        df_rt['lon'] = np.ceil(df_rt.lon / resolution) * resolution  # 修正：np.ceil()
        df_rt['lat'] = np.ceil(df_rt.lat / resolution) * resolution  # 修正：np.ceil()

        # 合并4个顶点DF
        df_concat = pd.concat([df_lb, df_lt, df_rb, df_rt], ignore_index=True)
        # 修正浮点精度（和你原有逻辑一致：astype+round(2)）
        df_concat['lon'] = df_concat['lon'].astype(np.float64).round(2)
        df_concat['lat'] = df_concat['lat'].astype(np.float64).round(2)

        groupby_columns = (
            ['lon', 'lat', 'time'] if 'time' in df.columns else ['lon', 'lat']
        )
        grid_mean = df_concat.groupby(groupby_columns, as_index=False)[columns].mean()
        return grid_mean

    def grid_divide_resample_v2(
        self,
        df: pd.DataFrame,
        columns: list[str],
        resolution: float = SPATIAL_RESOLUTION,
    ):
        """网格划分，df中有时间的话要求一致

        Args:
            df (pd.DataFrame): _description_
            columns (list[str]): 要采样的列名列表
            resolution (float, optional): 目标空间分辨率. Defaults to SPATIAL_RESOLUTION.

        Returns:
            _type_: _description_
        """
        df['lon'] = (df.lon / resolution).round() * resolution
        df['lat'] = (df.lat / resolution).round() * resolution
        df_util.format_columns(df, ['lon', 'lat'])
        groupby_columns = ['lon', 'lat']
        if 'time' in df.columns:
            groupby_columns.append('time')
        if 'beijing_time' in df.columns:
            groupby_columns.append('beijing_time')
        grid_mean = df.groupby(groupby_columns, as_index=False)[columns].mean()
        return grid_mean


resample_util = ResampleUtil()


def fill_with_residual_softnorm(
    obs,
    pre,
    fill_value=-9999,
    sigma=8,
    k=32,
    epsilon=SPATIAL_RESOLUTION,  # ★ 柔性归一化常数
):
    """
    使用高斯加权残差外推 + 柔性归一化，平滑补偿有效观测周边区域，
    避免边界带（halo effect）。
    """
    from scipy.spatial import cKDTree  # type: ignore

    H, W = obs.shape

    # 1. 有效观测掩膜
    mask_obs = obs != fill_value
    if mask_obs.sum() < 3:
        raise ValueError("有效观测点不足。")
    if mask_obs.sum() < k:
        k = mask_obs.sum()

    # 2. 计算残差
    residual = np.zeros_like(pre, dtype=np.float64)
    residual[mask_obs] = obs[mask_obs] - pre[mask_obs]

    # 3. KD-tree for有效点
    ys, xs = np.where(mask_obs)
    coord_obs = np.vstack((ys, xs)).T
    r_obs = residual[ys, xs]  # 有gems的地区的残差
    tree = cKDTree(coord_obs)

    # 4. 全图坐标
    gy, gx = np.indices((H, W))
    coord_all = np.vstack((gy.ravel(), gx.ravel())).T

    # 5. 查询 k 个最近邻
    # 对所有点，查找gems观测值中离他最近的k个点
    dists, idxs = tree.query(coord_all, k=k)
    if k == 1:
        dists = dists[:, None]
        idxs = idxs[:, None]

    # 6. 高斯权重，反距离
    weights = np.exp(-(dists**2) / (2 * sigma**2))

    # ---- ★ 方案 A：柔性归一化（避免边界） ----
    # 公式：r_est = (Σ w_i r_i) / (Σ w_i + ε)
    # ε 是柔化因子，避免权重为0导致突然变成0（边界）
    weighted_sum = np.sum(weights * r_obs[idxs], axis=1)
    weight_norm = np.sum(weights, axis=1) + epsilon

    r_est_flat = weighted_sum / weight_norm
    residual_est = r_est_flat.reshape(H, W)

    # 7. 最终输出：缺失值加补偿a
    filled_corrected = pre.copy()
    filled_corrected[~mask_obs] += residual_est[~mask_obs]

    # 保留有效观测
    filled_corrected[mask_obs] = obs[mask_obs]
    # 校正值、残差、obs区域掩膜
    return filled_corrected, residual_est, mask_obs


class DataRecordUtil:
    def __init__(self, path: Path) -> None:
        self.path = path

    def append(self, msg: str):
        """追加"""
        json.dump(
            [*self.get_raw(), msg],
            open(self.path, 'w', encoding='utf-8'),
            indent=4,
            ensure_ascii=False,
        )

    def replace(self, msg: Any):
        """替换"""
        json.dump(
            msg,
            open(self.path, 'w', encoding='utf-8'),
            indent=4,
            ensure_ascii=False,
        )

    @contextmanager
    def write_with_duration(self, msg: str):
        """记录当前时间和耗时"""
        start = time.time()
        yield
        end = time.time()
        self.append(
            f'[{time_util.dt2ymdhm(time_util.beijing_now())}] {msg} {(end - start):.2f}s'
        )

    def get_raw(self) -> list:
        _data = open(self.path, 'r', encoding='utf-8').read() or '[]'
        return json.loads(_data)


class EstRecordUtil(DataRecordUtil):
    @property
    @lru_cache
    def available_dts(self) -> list[datetime]:
        """获取可获得est结果的时间ymd列表"""
        ls = self.get_raw()
        if len(ls) == 0:
            return []
        start = time_util.ymd2dt(ls[0])
        end = time_util.ymd2dt(ls[-1])
        res = []
        while start <= end:
            res.append(start)
            start += timedelta(days=1)
        return res

    @property
    @lru_cache
    def dt_start(self):
        r = self.available_dts
        return r[0] if len(r) > 0 else None

    @property
    @lru_cache
    def dt_end(self):
        r = self.available_dts
        return r[-1] if len(r) > 0 else None

    @property
    @lru_cache
    def is_empty(self):
        return len(self.get_raw()) == 0


est_record_util = EstRecordUtil(path_util.est / 'est_no2_record.json')
"""近地面no2估算结果记录，包含ymd日期数组"""

data_record_util = DataRecordUtil(SHARED_DIR / 'data_record.json')
"""每次运行都会记录的日志"""


def run_in_thread_pool[R](
    tasks: list[Callable[..., R]],
    argss: list[list[Any]],
    max_workers: int = 4,
    # 每个任务的回调，接收res, *args参数
    each_callback: Callable = lambda *_: ...,
):
    """_summary_

    Yields:
        _type_: _description_
    """
    futures: list[Future[R]] = []
    with ThreadPoolExecutor(max_workers) as executor:
        for task, args in zip(tasks, argss):
            future = executor.submit(task, *args)
            futures.append(future)
    ans: list[R] = []
    for i, future in enumerate(futures):
        res: R = future.result()
        each_callback(res, *argss[i])
        ans.append(res)
    return ans


class ColorString:
    def color_text(
        self, text: str, color: Literal['green', 'red', 'blue', 'yellow', 'purple']
    ):
        COLOR_CODES = {
            "green": "\033[92m",
            "red": "\033[91m",
            "blue": "\033[94m",
            "yellow": "\033[93m",
            "purple": "\033[95m",
            "reset": "\033[0m",  # 重置颜色，避免后续文本持续上色
        }
        color_code = COLOR_CODES.get(color.lower(), COLOR_CODES["green"])
        # 拼接颜色码和文本，最后重置颜色
        return f"{color_code}{text}{COLOR_CODES['reset']}"

    def red(self, text: str):
        return self.color_text(text, 'red')

    def green(self, text: str):
        return self.color_text(text, 'green')

    def blue(self, text: str):
        return self.color_text(text, 'blue')

    def yellow(self, text: str):
        return self.color_text(text, 'yellow')

    def purple(self, text: str):
        return self.color_text(text, 'purple')


cs = ColorString()
