from datetime import datetime, timedelta
import logging
import os
import requests
import numpy as np
import pandas as pd

from src.types import Maybe
from src.utils.light import (
    time_util,
    parquet_util,
    path_util,
    df_util,
    resample_util,
)


logger = logging.getLogger()


class CNEMCDownloader:
    """下载CNEMC数据，以北京时间保存

    >>> 参考github cnemc仓库的cicd流程
    >>> 每小时下载前一天中没下载过的，考虑缺失没发布的情况
    """

    def __init__(self):
        # 获取历史数据的url
        self.base_url = (
            'https://air.cnemc.cn:18007/HourChangesPublish/GetAQIHistoryByConditionHis'
        )
        self.no2_column = 'cnemc_no2'
        self.session = requests.session()

    def log(self, dt_str: str, msg: str):
        logger.info(f'{dt_str} CNEMC {msg}')

    def _format_dt(self, dt: datetime):
        """dt转为cnemc http接口请求体字符串格式"""
        return dt.strftime('%Y-%m-%d %H:00:00')

    def _handle_cnemc(self, data: list[dict]) -> pd.DataFrame:
        """从请求结果提取cnemc为dataframe

        Args:
            data (list[dict]): _description_

        Returns:
            pd.DataFrame: _description_
        """
        df = pd.DataFrame(data)
        df = pd.DataFrame(
            data={
                'lon': df['Longitude'].astype(np.float64).round(2),
                'lat': df['Latitude'].astype(np.float64).round(2),
                'time': (
                    df['TimePointStr']
                    .str.replace("年", "")
                    .str.replace("月", "")
                    .str.replace("日", "")
                    .str.replace("时", "")
                    .str.replace(' ', '')
                ),
                'area': df['Area'],
                'position_name': df['PositionName'],
                'station_code': df['StationCode'],
                'quality': df['Quality'],
                self.no2_column: pd.to_numeric(df['NO2'], errors='coerce'),
            }
        )
        df = df[df[self.no2_column].notna()]
        df = df[df[self.no2_column] > 0]
        # 划分网格，只看结果不训练，不用划分
        # df = resample_util.grid_divide_resample(df=df, columns=[self.no2_column])
        (
            df_util.format_columns(
                df=df, columns=[self.no2_column], n=3
            ).format_columns(df=df, columns=['lon', 'lat'])
        )
        return df

    def download_one(self, dt: datetime) -> pd.DataFrame:
        """下载某一时刻的数据

        Args:
            dt (datetime): 北京时间.
        """
        # 1. 开始下载
        resp = self.session.post(
            url=self.base_url,
            data={
                'date': self._format_dt(dt),
            },
        )
        data = resp.json()
        # 如果没有数据
        if len(data) == 0:
            return pd.DataFrame()
        return self._handle_cnemc(data)

    def download(self, dt: datetime):
        """下载前面24h的cnemc数据，排除已下载的小时"""
        logger.info('=' * 120)
        self.log(time_util.dt2ymdh(dt), '准备获取之前24h内的数据')
        # 已有的dt str, ymdh
        cur_dts: list[str] = []
        # 今天已有的
        cur_path = path_util.get_yymd_path_under_ds(
            [
                'cnemc',
            ],
            dt,
        )
        if os.path.exists(cur_path):
            df = pd.read_parquet(cur_path)
            cur_dts.extend(list(df.time.unique()))
        # 昨天已有的
        pre_path = path_util.get_yymd_path_under_ds(
            [
                'cnemc',
            ],
            dt - timedelta(days=1),
        )
        if os.path.exists(pre_path):
            df = pd.read_parquet(pre_path)
            cur_dts.extend(list(df.time.unique()))
        # 结果df列表
        df_ls: list[pd.DataFrame] = []
        # 排除已有的小时
        for hour in range(24):
            pre_dt = dt - timedelta(hours=hour)
            if time_util.dt2ymdh(pre_dt) in cur_dts:
                self.log(time_util.dt2ymdh(pre_dt), '已下载，跳过')
                continue
            df_ls.append(self.download_one(dt=pre_dt))
            self.log(time_util.dt2ymdh(pre_dt), '下载成功')
        if len(df_ls) == 0:
            self.log(time_util.dt2ymdh(dt), '无符合要求的数据，本次流程结束')
            return
        df = pd.concat(df_ls)
        if df.empty:
            self.log(time_util.dt2ymdh(dt), '无符合要求的数据，本次流程结束')
            return
        # 根据天分组保存为utc
        df['time'] = (
            pd.to_datetime(df['time'], format='%Y%m%d%H')
            .dt.tz_localize('Asia/Shanghai')
            .dt.tz_convert('UTC')
            .dt.strftime('%Y%m%d%H')
        )
        for ymd, group in df.groupby(df['time'].str[:-2]):
            savepath = path_util.get_yymd_path_under_ds(
                ['cnemc'], dt=time_util.ymd2dt(ymd)
            )
            parquet_util.append(df=group, path=savepath)
            self.log(
                ymd, f'下载成功，utc已保存至{path_util.relative2logpath(savepath)}'
            )


def download_cnemc(dt: Maybe[datetime] = None):
    downloader = CNEMCDownloader()
    downloader.download(dt or time_util.beijing_now())
