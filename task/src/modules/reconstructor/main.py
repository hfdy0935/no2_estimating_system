from datetime import datetime
from pathlib import Path
from typing import cast
from catboost import CatBoostRegressor
import pandas as pd
from src.utils.light import (
    fill_with_residual_softnorm,
    time_util,
    path_util,
    df_util,
    logger,
    data_record_util,
    cs,
)
from src.constant import REC_MODEL_PATH
from src.modules.downloader.gems import GEMSDownloader


class Reconstructor:
    """重建no2柱浓度"""

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
            'night_light',
            'dem',
            'ndvi',
            'geoscf_no2',
            'hour',
            'day',
            'month',
        ]
        # 列名
        self.pred_y_column = 'pred_no2'
        self.rec_y_column = 'rec_no2'
        self.rec_y_columns = ['lon', 'lat', 'time', self.rec_y_column]

    def log(self, msg: str, dt_str: str = ''):
        logger.info(f'{dt_str or self.ymd} {msg}')

    def _prepare_data(self):
        geoscf = pd.read_parquet(path_util.gen_pq_path_under_ds(['geoscf'], self.dt))
        era5 = df_util.read_era5(self.dt)
        ndvi = pd.read_parquet(
            path_util.ds / 'ndvi' / f'{self.dt.month:02d}{self.dt.day:02d}.parquet'
        )
        night_light = pd.read_parquet(
            path_util.ds / 'night_light' / f'{self.dt.month:02d}.parquet'
        )
        df = (
            geoscf.merge(right=era5, on=['lon', 'lat', 'time'])
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
        # 2. 预测
        logger.info('开始预测')
        raw_time = df.time
        df[self.pred_y_column] = self.model.predict(data=df[self.x_columns])
        # 3.处理结果
        df['time'] = raw_time
        df_util.format_columns(df=df, columns=[self.pred_y_column])
        logger.info('预测成功')
        return df

    def _calc_today_residual(self, gems: pd.DataFrame, pred: pd.DataFrame):
        """计算这天每个点在GEMS观测时段每个小时需要补偿的残差"""
        res_df_ls: list[pd.DataFrame] = []
        for time_, pred_1 in pred.groupby('time'):
            gems_1 = gems[gems['time'] == time_]
            if len(gems_1) < 3:
                continue
            # 删除gems_1有但pred_1没有的
            tmp1 = gems_1.merge(right=pred_1, on=['lon', 'lat', 'time'], how='outer')
            gems_1 = tmp1[
                (tmp1[self.pred_y_column].notna())
                & (tmp1[GEMSDownloader.no2_column].notna())
            ][['lon', 'lat', 'time', GEMSDownloader.no2_column]]
            obs_grid = df_util.to_grid(
                df=gems_1, value_column=GEMSDownloader.no2_column
            )
            pre_grid = df_util.to_grid(df=pred_1, value_column=self.pred_y_column)
            _, residual_est, _, *_ = fill_with_residual_softnorm(
                obs=obs_grid, pre=pre_grid, k=32
            )
            res_df = df_util.from_grid(grid=residual_est, value_column='r')
            res_df['time'] = time_
            res_df_ls.append(res_df)
        res_df = pd.concat(res_df_ls)
        df_util.format_columns(df=res_df, columns=['lon', 'lat'])
        return res_df

    def run(self):
        """重建

        Args:
            df (pd.DataFrame): 预测的rec_no2
        """
        logger.info(cs.blue('=' * 50 + self.ymd + ' reconstruct ' + '=' * 50))
        # 1. 预测
        pred = self._predict()
        logger.info('开始重建')
        gems_path = path_util.gen_pq_path_under_ds(['gems'], self.dt)
        # gems存在才校正
        if gems_path.exists():
            gems = pd.read_parquet(gems_path)
            gems_times = set(gems.time.unique())
            # 2. 计算残差
            # 这天每个点观测时段的残差
            logger.info('开始计算残差')
            res = self._calc_today_residual(gems=gems, pred=pred)
            # 这天每个点的平均残差
            mean_res = cast(
                pd.DataFrame, res.groupby(['lon', 'lat'], as_index=False).r.mean()
            )
            # 3. 校正
            logger.info('开始校正')
            pred = (
                pred.merge(right=gems, on=['lon', 'lat', 'time'], how='left')
                .merge(
                    right=res.rename(columns={'r': 'hourly_r'}),
                    on=['lon', 'lat', 'time'],
                    how='left',
                )
                .merge(
                    right=mean_res.rename(columns={'r': 'mean_r'}),
                    on=['lon', 'lat'],
                    how='left',
                )
            )
            # 3.1. 在GEMS观测时段内，有GEMS，直接替换
            pred['init_rec_no2'] = pred[self.pred_y_column].copy()
            pred.loc[pred[GEMSDownloader.no2_column].notna(), 'init_rec_no2'] = pred[
                GEMSDownloader.no2_column
            ]
            # 3.2. 在GEMS观测时段内，无GEMS，直接加res
            pred[self.rec_y_column] = pred['init_rec_no2'].copy()
            pred.loc[
                (pred.time.isin(gems_times)) & (pred[GEMSDownloader.no2_column].isna()),
                self.rec_y_column,
            ] += pred.hourly_r
            # 3.3. 不在GEMS观测时段内，加mean_res
            pred.loc[~pred.time.isin(gems_times), self.rec_y_column] += pred.mean_r
            pred = df_util.n2np(pred, self.rec_y_column)
        df_util.format_columns(df=pred, columns=[self.rec_y_column], n=3)
        # 6. 保存parquet
        savepath = path_util.gen_pq_path_under_rec(['pq'], self.dt)
        df_util.save_parquet(df=pred[self.rec_y_columns], path=savepath)
        logger.info(
            cs.green(f'  √ 重建成功，parquet已保存至{path_util.rel2abs(savepath)}')
        )


def reconstruct_no2(dt: datetime = datetime.now()):
    ymd = time_util.dt2ymd(dt)
    # 确保该天的数据都存在
    if not path_util.gen_pq_path_under_ds(['geoscf'], dt).exists():
        logger.info(cs.yellow(f'{ymd}的Reconstruct GEOS-CF未准备好，跳过'))
        return
    if not path_util.gen_pq_path_under_ds(['era5', 'part1'], dt).exists():
        logger.info(cs.yellow(f'{ymd}的Reconstruct ERA5未准备好，跳过'))
        return
    if not path_util.gen_pq_path_under_ds(['gems'], dt).exists():
        logger.info(cs.yellow(f'{ymd}的Reconstruct GEMS未准备好，跳过'))
        return
    with data_record_util.write_with_duration('Reconstruct'):
        reconstroctor = Reconstructor(REC_MODEL_PATH, dt)
        reconstroctor.run()
