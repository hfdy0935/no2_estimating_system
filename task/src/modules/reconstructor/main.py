from datetime import datetime
import json
import logging
from pathlib import Path
from typing import cast
import numpy as np
from catboost import CatBoostRegressor
import pandas as pd
from scipy.spatial import cKDTree  # type: ignore
from src.utils.light import (
    fill_with_residual_softnorm,
    time_util,
    parquet_util,
    path_util,
    df_util,
)
from src.constant import REC_MODEL_PATH

logger = logging.getLogger()


class Reconstructor:
    """重建no2柱浓度"""

    def __init__(self, model_path: Path, dt: datetime):
        self.model = CatBoostRegressor()
        self.model.load_model(model_path)
        self.dt = dt
        self.ymd = time_util.dt2ymd(dt)
        self.dem = pd.read_parquet(path_util.under_ds(Path("dem", "dem.parquet")))
        # 自变量列名
        self.x_columns = [
            "u10",
            "v10",
            "d2m",
            "t2m",
            "sp",
            "blh",
            "tcw",
            "night_light",
            "dem",
            "ndvi",
            "geoscf_no2",
            "hour",
            "doy",
            "dow",
        ]
        # 预测结果列名
        self.y_column = "rec_no2"
        # 保存的预测结果中的列名
        self.y_columns = ["lon", "lat", "time", self.y_column]

    def log(self, msg: str, dt_str: str = ''):
        logger.info(f'{dt_str or self.ymd} Reconstruct {msg}')

    def _load_x_data(self):
        geoscf = pd.read_parquet(path_util.get_yymd_path_under_ds(['geoscf'], self.dt))
        era5 = df_util.read_era5(dt=self.dt)
        ndvi = pd.read_parquet(
            path_util.under_ds(
                Path("ndvi", f"{self.dt.month:02d}{self.dt.day:02d}.parquet")
            )
        )
        night_light = pd.read_parquet(
            path_util.under_ds(Path("night_light", f"{self.dt.month:02d}.parquet"))
        )
        # 拼接
        df = (
            geoscf.merge(right=era5, on=["lon", "lat", "time"])
            .merge(right=ndvi, on=["lon", "lat"])
            .merge(right=night_light, on=["lon", "lat"])
            .merge(right=self.dem, on=["lon", "lat"])
        )
        df["hour"] = df["time"].str[-2:].astype(int)
        df["doy"] = pd.to_datetime(df["time"], format="%Y%m%d%H").dt.day_of_year
        df["dow"] = pd.to_datetime(df["time"], format="%Y%m%d%H").dt.dayofweek
        return df

    def _predict(self):
        # 1. 加载数据
        self.log("开始加载数据")
        df = self._load_x_data()
        # 2. 预测
        self.log("开始预测")
        raw_time = df.time
        df[self.y_column] = self.model.predict(data=df[self.x_columns])
        # 3.处理结果
        df = df[self.y_columns]
        df["time"] = raw_time
        df_util.format_columns(df=df, columns=[self.y_column])
        self.log("预测成功")
        return df

    def _n2np(self, df: pd.DataFrame) -> pd.DataFrame:
        """negative to nearest positive

        Args:
            df (pd.DataFrame): _description_

        Returns:
            pd.DataFrame: _description_
        """
        df.time = df.time.astype(int)
        positive = df[df[self.y_column] > 0]
        negative = df[df[self.y_column] < 0]
        # 构建KDTree（默认用经纬度作为空间坐标）
        pos_coords = positive[["lon", "lat", 'time']].values
        kdtree = cKDTree(pos_coords)
        # 查找负值样本最近的正值样本索引
        neg_coords = negative[["lon", "lat", 'time']].values
        _, nearest_idx = kdtree.query(neg_coords, k=1)
        # 提取最近正值并替换
        nearest_vals = positive.iloc[nearest_idx][self.y_column].values
        df.loc[negative.index, self.y_column] = nearest_vals
        df.time = df.time.astype(str)
        return df

    def run(self):
        """重建

        Args:
            df (pd.DataFrame): 预测的rec_no2
        """
        # 1. 重建、加载gems
        pred = self._predict()
        self.log('开始重建')
        gems_path = path_util.get_yymd_path_under_ds(['gems'], self.dt)
        # gems存在才校正
        if gems_path.exists():
            gems = pd.read_parquet(path_util.get_yymd_path_under_ds(['gems'], self.dt))
            # 2. 对每个小时的残差计算均值
            fill_value = -9999  # 填充值
            r_df_ls: list[pd.DataFrame] = []  # 每个小时每个点的残差df列表
            for _time, gems1 in gems.groupby("time"):
                pred1 = pred[pred["time"] == _time]
                # 删除gems1有但pred1没有的
                tmp1 = gems1.merge(right=pred1, on=["lon", "lat", "time"], how="outer")
                gems1 = tmp1[
                    (tmp1[self.y_column].notna()) & (tmp1["gems_no2"].notna())
                ][["lon", "lat", "time", "gems_no2"]]
                if len(gems1) < 3:
                    continue
                # 转为网格
                gems1_grid = df_util.df2grid(
                    df=gems1, value_column="gems_no2", fill_value=fill_value
                )
                pred1_grid = df_util.df2grid(
                    df=pred1, value_column=self.y_column, fill_value=fill_value
                )
                # 计算残差
                _, r, mask = fill_with_residual_softnorm(
                    obs=gems1_grid, pre=pred1_grid, fill_value=fill_value
                )
                grid = np.where(mask, r, fill_value)
                r_df_ls.append(
                    df_util.grid2df(grid=grid, value_column="r", fill_value=fill_value)
                )
            # 3. 计算每个点的残差均值
            r_df = pd.DataFrame(
                pd.concat(r_df_ls).groupby(["lon", "lat"], as_index=False)["r"].mean()
            )
            df_util.format_columns(df=r_df, columns=["lon", 'lat'])
            # 4. 添加到原始预测值上
            pred = pred.merge(right=r_df, on=["lon", "lat"], how="left")
            pred['r'] = pred['r'].fillna(0)  # 没有残差 => 0
            pred[self.y_column] += pred["r"]
            pred.drop(columns=["r"], inplace=True)
            # 5. 负值替换成最接近的正值
            pred = self._n2np(pred)
        else:
            # 保存未校正信息
            record: list[str] = json.load(
                open(path_util.under_rec(Path('lack_gems.json')))
            )
            record.append(self.ymd)
            json.dump(record, open(path_util.under_rec(Path('lack_gems.json'))))
        df_util.format_columns(df=pred, columns=[self.y_column], n=3)
        # 6. 保存parquet
        savepath = path_util.get_yymd_path_under_rec(['pq'], self.dt)
        parquet_util.save(df=pred, path=savepath)
        self.log(f"重建成功，parquet已保存至{path_util.relative2logpath(savepath)}")
        # 7. 保存tif
        for time_str, group in pred.groupby('time'):
            time_str = cast(str, time_str)
            savepath = Path(
                path_util.under_rec(Path('tif')),
                time_str[:4],
                time_str[:8],
                f'{time_str}.tif',
            )
            df_util.df2tif2save(df=group, value_column=self.y_column, savepath=savepath)
        self.log(f"重建成功，tif已保存至{savepath.parent}/")


def reconstruct_no2(dt: datetime):
    ymd = time_util.dt2ymd(dt)
    logger.info('=' * 120)
    logger.info(f'{ymd} Reconstruct 准备重建')
    # 确保该天的数据都存在
    if not path_util.get_yymd_path_under_ds(['geoscf'], dt).exists():
        logger.info(f"{ymd} Reconstruct GEOS-CF未准备好，跳过")
        return
    if not path_util.get_yymd_path_under_ds(['era5'], dt, midpath='part1').exists():
        logger.info(f"{ymd} Reconstruct ERA5未准备好，跳过")
        return
    reconstroctor = Reconstructor(REC_MODEL_PATH, dt)
    reconstroctor.run()
