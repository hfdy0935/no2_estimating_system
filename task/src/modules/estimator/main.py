from datetime import datetime
import logging
from pathlib import Path
from catboost import CatBoostRegressor
import pandas as pd
from scipy.spatial import cKDTree  # type: ignore
from src.utils.light import (
    time_util,
    parquet_util,
    path_util,
    df_util,
    est_no2_util,
)
from src.constant import EST_MODEL_PATH

logger = logging.getLogger()


class Estimator:
    """估算近地面no2"""

    def __init__(self, model_path: Path, dt: datetime):
        self.model = CatBoostRegressor()
        self.model.load_model(model_path)
        self.dt = dt
        self.ymd = time_util.dt2ymd(dt)
        self.dem = pd.read_parquet(path_util.under_ds(Path("dem", "dem.parquet")))
        # 自变量列名
        self.x_columns = [
            'u10',
            'v10',
            'd2m',
            't2m',
            'sp',
            'blh',
            'tcw',
            'night_light',
            'dem',
            'ndvi',
            'rec_no2',
            'hour',
            'doy',
            'dow',
        ]
        # 预测结果列名
        self.y_column = "est_no2"
        # 保存的预测结果中的列名
        self.y_columns = ["lon", "lat", "time", self.y_column]

    def log(self, msg: str, dt_str: str = ''):
        logger.info(f'{dt_str or self.ymd} Estimate {msg}')

    def _load_x_data(self):
        rec = pd.read_parquet(path_util.get_yymd_path_under_rec(['pq'], self.dt))
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
            rec.merge(right=era5, on=["lon", "lat", "time"])
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
        # 2. 估算
        self.log("开始估算")
        raw_time = df.time
        # 由于之前训练模型的时候用的no2柱浓度列名是pred1_no2，这里重命名一下
        df[self.y_column] = self.model.predict(
            data=df[self.x_columns].rename(columns={'rec_no2': 'pred1_no2'})
        )
        # 3.处理结果
        df = df[self.y_columns]
        df["time"] = raw_time
        df_util.format_columns(df=df, columns=[self.y_column])
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
        """估算

        Args:
            df (pd.DataFrame): 估算的est_no2
        """
        # 1. 估算
        pred = self._predict()
        # 2. 负值替换成最接近的正值
        pred = self._n2np(pred)
        # 3. 保存parquet
        savepath = path_util.get_yymd_path_under_est(['pq'], self.dt)
        parquet_util.save(df=pred, path=savepath)
        self.log(f"估算成功，parquet已保存至{path_util.relative2logpath(savepath)}")
        # 4. 保存tif
        savepath = path_util.get_yymd_path_under_est(['tif'], self.dt, extension='tif')
        df_util.df2tif2save(df=pred, value_column=self.y_column, savepath=savepath)
        self.log(f"估算成功，tif已保存至{path_util.relative2logpath(savepath)}")
        est_no2_util.log(msg=self.ymd)


def estimate_no2(dt: datetime):
    ymd = time_util.dt2ymd(dt)
    logger.info('=' * 120)
    logger.info(f'{ymd} Estimate 准备估算')
    # 确保该天的数据都存在
    if not path_util.get_yymd_path_under_rec(['pq'], dt).exists():
        logger.info(f"{ymd} Estimate NO2柱浓度未准备好，跳过")
        return
    if not path_util.get_yymd_path_under_ds(['era5'], dt, midpath='part1').exists():
        logger.info(f"{ymd} Estimate ERA5未准备好，跳过")
        return
    reconstroctor = Estimator(EST_MODEL_PATH, dt)
    reconstroctor.run()
