from contextlib import contextmanager
from datetime import datetime
import datetime as dt_pkg
from functools import lru_cache
import json
import logging
import os
from pathlib import Path
import time
from typing import Self
import pandas as pd
from fastparquet import write as write_parquet
from zoneinfo import ZoneInfo
from src.constant import SHARED_DIR, ChinaRect, RESOLUTION
import numpy as np
import rasterio
from rasterio.transform import from_origin
from src.types import Maybe, Number

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)


class PathUtil:
    def __init__(self):
        self.ds = Path(SHARED_DIR, "data_source")
        self.rec = Path(SHARED_DIR, "reconstruct")
        self.est = Path(SHARED_DIR, 'estimate')

    def ensure_path_exist(self, path: Path):
        """确保目录 or 文件夹所在的目录 存在"""
        path1 = os.path.dirname(path)
        # 当前目录
        if len(path1) == 0:
            return
        # 递归创建，已存在不报错
        os.makedirs(path1, exist_ok=True)

    def relative2logpath(self, path: Path) -> Path:
        """相对路径转为日志显示的路径，从`shared`开始，移除前面的`../`

        Args:
            path (Path): _description_

        Raises:
            ValueError: _description_

        Returns:
            Path: _description_
        """
        return Path(*path.parts[1:])

    # ------------------------------------ ds ------------------------------------ #F
    def under_ds(self, path: Path) -> Path:
        """拼接在shared/data_source之后的路径

        Args:
            path (Path): shared/data_source之后的路径

        Returns:
            Path: 完整路径
        """
        return self.ds / path

    def get_yymd_path_under_ds(
        self,
        pre: list[str | Path],
        dt: datetime,
        extension: str = 'parquet',
        midpath: str = '',
    ) -> Path:
        """拼接在`shared/data_source/xxx/xxx/`之后的路径，末尾满足`year/[{midpath}/]ymd.{extension}`格式

        Args:
            pre (list[str | Path]): 前缀列表，每一级路径分开，即上面的xxx/xxx
            dt (datetime): _description_
            extension (str): 文件扩展名，默认parquet
            midpath (str): 在y和ymd之间的部分

        Returns:
            Path: 完整路径
        """
        return self.under_ds(
            Path(*pre, f"{dt.year}", midpath, f"{time_util.dt2ymd(dt)}.{extension}")
        )

    def exists_under_ds(self, path: Path) -> bool:
        """shared/data_source/{path}路径是否存在

        Args:
            path (Path): _description_

        Returns:
            bool: _description_
        """
        return self.under_ds(path).exists()

    # ------------------------------------ rec ----------------------------------- #F
    def under_rec(self, path: Path) -> Path:
        """拼接在shared/reconstruct之后的路径

        Args:
            path (Path): shared/reconstruct之后的路径

        Returns:
            Path: 完整路径
        """
        return self.rec / path

    def get_yymd_path_under_rec(
        self, pre: list[str | Path], dt: datetime, extension: str = 'parquet'
    ) -> Path:
        """拼接在`shared/reconstruct/xxx/xxx/`之后的路径，末尾满足`year/ymd.{extension}`格式

        Args:
            pre (str): 前缀列表，每一级路径分开，即上面的xxx/xxx
            dt (datetime): _description_
            extension (str): 文件扩展名，默认parquet

        Returns:
            Path: 完整路径
        """
        return self.under_rec(
            Path(*pre, f"{dt.year}", f"{time_util.dt2ymd(dt)}.{extension}")
        )

    # ------------------------------------ est ----------------------------------- #F
    def under_est(self, path: Path) -> Path:
        """拼接在shared/estimate之后的路径

        Args:
            path (Path): shared/estimate之后的路径

        Returns:
            Path: 完整路径
        """
        return self.est / path

    def get_yymd_path_under_est(
        self, pre: list[str | Path], dt: datetime, extension: str = 'parquet'
    ) -> Path:
        """拼接在`shared/estimate/xxx/xxx/`之后的路径，末尾满足`year/ymd.{extension}`格式

        Args:
            pre (str): 前缀列表，每一级路径分开，即上面的xxx/xxx
            dt (datetime): _description_
            extension (str): 文件扩展名，默认parquet

        Returns:
            Path: 完整路径
        """
        return self.under_est(
            Path(*pre, f"{dt.year}", f"{time_util.dt2ymd(dt)}.{extension}")
        )


path_util = PathUtil()


class ParquetUtil:

    def save(self, df: pd.DataFrame, path: Path) -> Self:
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

    def append(self, df: pd.DataFrame, path: Path) -> Self:
        """追加

        Args:
            df (pd.DataFrame): dataframe
            path (Path):

        Returns:
            Self: _description_
        """
        if not path.exists():
            self.save(df, path)
        else:
            write_parquet(filename=str(path), data=df, compression="zstd", append=True)
        return self


parquet_util = ParquetUtil()


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

    def df2grid(
        self, df: pd.DataFrame, value_column: str, fill_value: Number = -9999
    ) -> np.ndarray:
        """DatFrame => grid

        Args:
            df (pd.DataFrame): _description_

        Returns:
            np.ndarray: _description_
        """
        # 网格，纬度 => 纵向， 经度 => 横向
        lat_nums = int((ChinaRect.maxlat - ChinaRect.minlat) / RESOLUTION) + 1
        lon_nums = int((ChinaRect.maxlon - ChinaRect.minlon) / RESOLUTION) + 1
        grid_data = np.zeros([lat_nums, lon_nums])
        grid_data.fill(fill_value)
        # df记录的np.ndarray，每一行是lat_idx、lon_idx、value_column
        # 别用astype(int) !!!
        lat_idx = ((df.lat - ChinaRect.minlat) / RESOLUTION).round(0)
        lon_idx = ((df.lon - ChinaRect.minlon) / RESOLUTION).round(0)
        obs_idx_no2_arr = np.array(
            pd.concat([lat_idx, lon_idx, df[value_column]], axis=1)
        )
        # 填充到grid_data中
        grid_data[
            lat_nums - 1 - obs_idx_no2_arr[:, 0].astype(int),
            obs_idx_no2_arr[:, 1].astype(int),
        ] = obs_idx_no2_arr[:, 2]
        return grid_data

    def grid2df_with_fill_value(
        self, grid: np.ndarray, value_column: str
    ) -> pd.DataFrame:
        """grid => pd.DataFrame

        Args:
            grid (np.ndarray): lats*lons
            value_column (str): _description_

        Returns:
            pd.DataFrame: _description_
        """
        lat_idx = np.arange(
            ChinaRect.maxlat,
            stop=ChinaRect.minlat - 0.01,
            step=-RESOLUTION,
            dtype=np.float64,
        )
        lon_idx = np.arange(
            ChinaRect.minlon,
            stop=ChinaRect.maxlon + 0.01,
            step=RESOLUTION,
            dtype=np.float64,
        )
        lon_grid, lat_grid = np.meshgrid(lon_idx, lat_idx)  # 先横后竖
        r, c = np.where(grid == grid)
        df = pd.DataFrame(
            {"lon": lon_grid[r, c], "lat": lat_grid[r, c], value_column: grid[r, c]}
        )
        return df

    def grid2df(
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
        df = self.grid2df_with_fill_value(grid=grid, value_column=value_column)
        return df[df[value_column] != fill_value]

    def df2tif2save(self, df: pd.DataFrame, value_column: str, savepath: Path):
        """df转为tiff并保存

        Args:
            df (pd.DataFrame): _description_
            value_column (str): _description_
            savepath (Path): _description_
        """
        data_array = self.df2grid(df=df, value_column=value_column, fill_value=np.nan)
        # ------------------- 2. 定义TIFF元数据 -------------------
        width = data_array.shape[1]
        height = data_array.shape[0]
        crs = rasterio.crs.CRS.from_epsg(4326)  # type: ignore
        # 地理变换
        transform = from_origin(
            west=ChinaRect.minlon,
            north=ChinaRect.maxlat,
            xsize=RESOLUTION,
            ysize=RESOLUTION,
        )
        path_util.ensure_path_exist(savepath)
        with rasterio.open(
            savepath,
            'w',
            driver='GTiff',
            height=height,
            width=width,
            count=1,  # 波段数（单波段）
            dtype=data_array.dtype,  # 数据类型（与数组一致）
            crs=crs,
            transform=transform,
            nodata=np.nan,  # 标记缺失值
        ) as dst:
            dst.write(data_array, 1)  # 将数组写入第1波段

    def read_era5(self, dt: datetime) -> pd.DataFrame:
        """读取era5的所有部分"""
        era5_part1 = pd.read_parquet(
            path_util.get_yymd_path_under_ds(['era5'], dt, midpath='part1')
        )
        era5_part2 = pd.read_parquet(
            path_util.get_yymd_path_under_ds(['era5'], dt, midpath='part2')
        )
        era5_part3 = pd.read_parquet(
            path_util.get_yymd_path_under_ds(['era5'], dt, midpath='part3')
        )
        era5_part4 = pd.read_parquet(
            path_util.get_yymd_path_under_ds(['era5'], dt, midpath='part4')
        )
        return pd.concat([era5_part1, era5_part2, era5_part3, era5_part4], axis=1)

    def read_est(self, start: datetime, end: datetime) -> list[pd.DataFrame]:
        """读取估算结果

        Args:
            start (datetime): _description_
            end (datetime): _description_

        Raises:
            ValueError: _description_

        Returns:
            list[pd.DataFrame]: _description_
        """
        start_year = start.year
        end_year = end.year
        # TODO


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

    def ymdh2dt(self, ymdh: str) -> datetime:
        return datetime.strptime(ymdh, "%Y%m%d%H")

    def ymdhm2dt(self, ymdhm: str) -> datetime:
        return datetime.strptime(ymdhm, "%Y%m%d%H%M")

    def ymdhms2dt(self, ymdhms: str) -> datetime:
        return datetime.strptime(ymdhms, "%Y%m%d%H%M%S")

    def beijing_now(self):
        return datetime.now(tz=ZoneInfo("Asia/Shanghai"))

    def utc_now(self):
        return datetime.now(tz=dt_pkg.timezone.utc)


time_util = TimeUtil()


class ResampleUtil:
    """重采样工具"""

    def interpolate_resample(
        self, df: pd.DataFrame, columns: list[str], resolution: float = RESOLUTION
    ) -> pd.DataFrame:
        """通过**双线性插值**提高空间分辨率，适用于**整个研究区都有数据**的情况，**要求df中时间一致或没有时间列**

        Args:
            df (pd.DataFrame): _description_
            columns (list[str]): 要采样的列名列表
            resolution (float, optional): 目标空间分辨率. Defaults to RESOLUTION.

        Returns:
            pd.DataFrame: _description_
        """
        from scipy.interpolate import LinearNDInterpolator

        # 1. 提取插值所需的坐标（x=lon, y=lat）
        points = df[["lon", "lat"]].values
        # 2. 构建目标经纬度网格
        target_lons = np.arange(
            np.floor(ChinaRect.minlon / resolution) * resolution,
            np.ceil(ChinaRect.maxlon / resolution) * resolution + resolution,
            resolution,
        )
        target_lats = np.arange(
            np.floor(ChinaRect.minlat / resolution) * resolution,
            np.ceil(ChinaRect.maxlat / resolution) * resolution + resolution,
            resolution,
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

    def grid_divide_resample(
        self, df: pd.DataFrame, columns: list[str], resolution: float = RESOLUTION
    ):
        """通过**网格划分**提高空间分辨率，适用于整个研究区数据不全的情况，插值完再过滤，**df中有时间的话要求一致

        Args:
            df (pd.DataFrame): _description_
            columns (list[str]): 要采样的列名列表
            resolution (float, optional): 目标空间分辨率. Defaults to RESOLUTION.

        Returns:
            _type_: _description_
        """
        # 1. 左下顶点 (lon向下取整, lat向下取整)
        df_lb = df.copy()
        df_lb["lon"] = (df_lb.lon // resolution) * resolution
        df_lb["lat"] = (df_lb.lat // resolution) * resolution

        # 2. 左上顶点 (lon向下取整, lat向上取整)
        df_lt = df.copy()
        df_lt["lon"] = (df_lt.lon // resolution) * resolution
        df_lt["lat"] = np.ceil(df_lt.lat / resolution) * resolution

        # 3. 右下顶点 (lon向上取整, lat向下取整)
        df_rb = df.copy()
        df_rb["lon"] = np.ceil(df_rb.lon / resolution) * resolution
        df_rb["lat"] = (df_rb.lat // resolution) * resolution

        # 4. 右上顶点 (lon向上取整, lat向上取整)
        df_rt = df.copy()
        df_rt["lon"] = np.ceil(df_rt.lon / resolution) * resolution
        df_rt["lat"] = np.ceil(df_rt.lat / resolution) * resolution

        # 合并4个顶点df
        df_concat = pd.concat([df_lb, df_lt, df_rb, df_rt], ignore_index=True)
        # 修正浮点精度
        df_util.format_columns(df_concat, ["lon", "lat"])
        groupby_columns = (
            ["lon", "lat", "time"] if "time" in df.columns else ["lon", "lat"]
        )
        grid_mean = df_concat.groupby(groupby_columns, as_index=False)[columns].mean()
        return grid_mean


resample_util = ResampleUtil()


def fill_with_residual_softnorm(
    obs, pre, fill_value=-9999, sigma=8, k=32, epsilon=RESOLUTION  # ★ 柔性归一化常数
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

    def log(self, msg: str):
        """写入日志"""
        data: list = self.get()
        data.append(msg)
        json.dump(
            data,
            open(self.path, 'w', encoding='utf-8'),
            indent=4,
            ensure_ascii=False,
        )

    @contextmanager
    def log_with_time(self, msg: str):
        """记录当前时间和耗时"""
        start = time.time()
        yield
        end = time.time()
        self.log(f'[{time_util.dt2ymdhm()}] {msg} {end - start:.2f}s')

    def get(self) -> list:
        _data = open(self.path, 'r', encoding='utf-8').read() or '[]'
        return json.loads(_data)

    @property
    @lru_cache
    def range(self) -> list[datetime]:
        """获取开始和结束时间"""
        ls = self.get()
        if len(ls) == 0:
            return []
        return [time_util.ymd2dt(ls[0]), time_util.ymd2dt(ls[-1])]

    @property
    @lru_cache
    def start(self):
        r = self.range
        if len(r) == 0:
            return None
        return r[0]

    @property
    @lru_cache
    def end(self):
        r = self.range
        if len(r) == 0:
            return None
        return r[-1]

    @property
    @lru_cache
    def empty(self):
        return len(self.get()) == 0


# 近地面no2估算结果日志，包含ymd日期数组
est_no2_util = DataRecordUtil(path_util.under_est(Path('surface_no2_record.json')))
# 每次运行都会记录的日志
shared_data_util = DataRecordUtil(Path(SHARED_DIR, 'data_record.json'))
