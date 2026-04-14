from datetime import datetime
from pathlib import Path
from typing import cast
from catboost import CatBoostRegressor
import pandas as pd
from src.utils.light import (
    time_util,
    path_util,
    df_util,
    est_record_util,
    resample_util,
    logger,
    data_record_util,
    cs,
)
from src.constant import EST_MODEL_PATH
from src.modules.downloader.cnemc import CNEMCDownloader


class Estimator:
    """估算近地面no2"""

    def __init__(self, model_path: Path, dt: datetime):
        self.model = CatBoostRegressor()
        self.model.load_model(model_path)
        self.dt = dt
        self.ymd = time_util.dt2ymd(dt)
        self.dem = pd.read_parquet(path_util.ds / 'dem' / 'dem.parquet')
        # 自变量列名
        self.x_columns = [
            'u10',
            'v10',
            'd2m',
            't2m',
            'sp',
            'blh',
            'tcw',
            # 'night_light',
            'dem',
            'ndvi',
            'rec_no2',
            'hour',
            'day',
            'month',
        ]
        # 预测结果列名
        self.y_column = 'est_no2'
        # 保存的预测结果中的列名
        self.y_columns = ['lon', 'lat', 'time', self.y_column]
        # 保存parquet的文件路径
        self.parquet_savepath = (
            path_util.est / 'pq' / f'{self.dt.year}' / f'{self.ymd}.parquet'
        )

    def log(self, msg: str, dt_str: str = ''):
        logger.info(f'{dt_str or self.ymd} {msg}')

    def _prepare_data(self):
        rec = pd.read_parquet(path_util.gen_pq_path_under_rec(['pq'], self.dt))
        era5 = df_util.read_era5(self.dt)
        ndvi = pd.read_parquet(
            path_util.ds / 'ndvi' / f'{self.dt.month:02d}{self.dt.day:02d}.parquet'
        )
        night_light = pd.read_parquet(
            path_util.ds / 'night_light' / f'{self.dt.month:02d}.parquet'
        )
        # 拼接
        df = (
            rec.merge(right=era5, on=['lon', 'lat', 'time'])
            .merge(right=ndvi, on=['lon', 'lat'])
            .merge(right=night_light, on=['lon', 'lat'])
            .merge(right=self.dem, on=['lon', 'lat'])
        )
        df_util.add_temporal_columns(df=df)
        return df

    def _predict(self):
        # 1. 加载数据
        logger.info('开始加载数据')
        df = self._prepare_data()
        # 2. 估算
        logger.info('开始估算')
        raw_time = df.time
        df[self.y_column] = self.model.predict(data=df[self.x_columns])
        # 3.处理结果
        df = df[self.y_columns]
        df['time'] = raw_time
        df_util.format_columns(df=df, columns=[self.y_column], n=3)
        return df

    def _save_stat(self, est: pd.DataFrame):
        """保存统计结果"""
        savedir = path_util.est / 'stat' / f'{self.dt.year}' / self.ymd
        # 1. 估算结果和cnemc匹配 => 散点图
        cnemc = pd.read_parquet(
            path_util.ds / 'cnemc' / f'{self.dt.year}' / f'{self.ymd}.parquet'
        )
        cnemc = resample_util.grid_divide_resample_v2(
            df=cnemc, columns=[CNEMCDownloader.no2_column]
        )
        merged = cnemc.merge(right=est, on=['lon', 'lat', 'time'])[
            [*self.y_columns, 'beijing_time', CNEMCDownloader.no2_column]
        ]
        df_util.save_parquet(
            df=merged,
            path=savedir / 'match_cnemc_est.parquet',
        )
        # 2. est和cnemc的时均值 => 折线图
        hourly_df = merged.groupby('time', as_index=False)[
            [self.y_column, CNEMCDownloader.no2_column]
        ].mean()
        df_util.save_parquet(df=hourly_df, path=savedir / 'hourly_cnemc_est.parquet')
        logger.info(
            cs.green(f'  √ 估算成功，统计结果已保存至{path_util.rel2abs(savedir)}/')
        )

    def run(self):
        """估算

        Args:
            df (pd.DataFrame): 估算的est_no2
        """
        logger.info(cs.blue('=' * 50 + self.ymd + ' estimate ' + '=' * 50))
        # 1. 估算
        pred = self._predict()
        # 2. 负值替换成最接近的正值
        pred = df_util.n2np(pred, column=self.y_column)
        # 3. 保存parquet
        df_util.save_parquet(df=pred, path=self.parquet_savepath)
        logger.info(
            cs.green(
                f'  √ 估算成功，parquet已保存至{path_util.rel2abs(self.parquet_savepath)}'
            )
        )
        # 4. 保存每天和每小时的tif
        # daily
        mean_est = cast(
            pd.DataFrame,
            pred.groupby(['lon', 'lat'], as_index=False)[self.y_column].mean(),
        )
        savepath = path_util.gen_tif_path_under_est(['daily_tif'], self.dt)
        df_util.save_as_tif(df=mean_est, value_column=self.y_column, savepath=savepath)
        logger.info(
            cs.green(f'  √ 估算成功，daily tif已保存至{path_util.rel2abs(savepath)}')
        )
        # hourly
        savedir = path_util.est / 'hourly_tif' / f'{self.dt.year}' / self.ymd
        for time_str, group in pred.groupby('time'):
            time_str = cast(str, time_str)
            # tif/y/ymd/ymdh.tif
            savepath = savedir / f'{time_str}.tif'
            df_util.save_as_tif(df=group, value_column=self.y_column, savepath=savepath)
        logger.info(
            cs.green(f'  √ 估算成功，hourly tif已保存至{path_util.rel2abs(savedir)}/')
        )
        # 5. 数据记录
        est_record_util.write(self.ymd)
        # 6. 保存统计结果
        self._save_stat(est=pred)


def estimate_no2(dt: datetime):
    ymd = time_util.dt2ymd(dt)
    # 确保该天的数据都存在
    if not path_util.gen_pq_path_under_rec(['pq'], dt).exists():
        logger.info(cs.yellow(f'{ymd}的Estimate NO2柱浓度未准备好，跳过'))
        return
    if not path_util.gen_pq_path_under_ds(['era5', 'part1'], dt).exists():
        logger.info(cs.yellow(f'{ymd}的Estimate ERA5未准备好，跳过'))
        return
    with data_record_util.write_with_duration('Estimate'):
        reconstroctor = Estimator(EST_MODEL_PATH, dt)
        reconstroctor.run()
