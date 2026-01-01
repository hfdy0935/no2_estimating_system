from datetime import datetime, timedelta
from typing import cast
import ee
import geemap
import numpy as np
import pandas as pd
from src.modules.downloader.basic import GEEDownloader
from src.utils.light import time_util, path_util, df_util, resample_util
from src.utils.heavy import filter_util
from src.types import Maybe


class ERA5Downloader(GEEDownloader):
    """下载ERA5，官网上太慢了，换成GEE

    >>> 一天的era5数据太大，拆成三个存

    **数据**
    >>> 更新：25号只能下载到18号的
    >>> 链接：https://developers.google.com/earth-engine/datasets/catalog/ECMWF_ERA5_HOURLY?hl=zh-cn%2F%3Fq%3DERA5+Hourly+-+ECMWF+Climate+Reanalysis#bands


    **下载**
    >>> 频率：每天
    >>> 时间：utc_day-7
    """

    diff = timedelta(days=-7)

    def __init__(self, dt: datetime):
        super().__init__()
        # gee中的波段名
        self.gee_era5_columns = [
            'u_component_of_wind_10m',
            'v_component_of_wind_10m',
            'dewpoint_temperature_2m',
            'temperature_2m',
            'surface_pressure',
            'boundary_layer_height',
            'total_column_water',
        ]
        # 最终df中的列名
        self.era5_columns = [
            'u10',
            'v10',
            'd2m',
            't2m',
            'sp',
            'blh',
            'tcw',
        ]
        # df列名和gee列名映射
        self.gee_era5_columns_map = {
            'u_component_of_wind_10m': 'u10',
            'v_component_of_wind_10m': 'v10',
            'dewpoint_temperature_2m': 'd2m',
            'temperature_2m': 't2m',
            'surface_pressure': 'sp',
            'boundary_layer_height': 'blh',
            'total_column_water': 'tcw',
        }
        self.dt = self._dt2available(dt)
        self.ymd = time_util.dt2ymd(self.dt)
        # 拆分成4部分存
        self.era5_columns_part1 = ['lon', 'lat', 'time', 'u10', 'v10']
        self.era5_columns_part2 = ['d2m', 't2m']
        self.era5_columns_part3 = ['sp', 'tcw']
        self.era5_columns_part4 = ['blh']

    def log(self, msg: str, dt_str: str = ''):
        self.logger.info(f'{dt_str or self.ymd} ERA5 {msg}')

    def _dt2available(self, dt: datetime) -> datetime:
        """转换dt为有数据的最新整天时间

        Returns:
            datetime: _description_
        """
        dt = dt.replace(hour=0, minute=0, second=0, microsecond=0)
        return dt + self.diff

    def _handle_era5(self, image: ee.image.Image, dt: datetime) -> pd.DataFrame:
        """处理某一小时的era5 image，转为dataframe

        Args:
            image (ee.image.Image): _description_
            dt (datetime): 当前时刻

        Returns:
            pd.DataFrame: _description_
        """
        # (h,w,len(self.self.gee_era5_columns))
        data = geemap.ee_to_numpy(
            image, region=self.china_rect_region
        )  # scale，可在GEE上重采样，为了下快点先用默认比例，下到本地再重采样
        # 手动计算边界，因为下载的和理论的有点不一样
        bound = self.compute_image_bound(image)
        height, width, _ = data.shape
        lats = np.linspace(bound.maxlat, bound.minlat, height)
        lons = np.linspace(bound.minlon, bound.maxlon, width)
        lon_grid, lat_grid = np.meshgrid(lons, lats)
        flat_lon = lon_grid.flatten()
        flat_lat = lat_grid.flatten()
        df = pd.DataFrame(
            {
                'lon': flat_lon,
                'lat': flat_lat,
                'time': time_util.dt2ymdh(dt),
                **{
                    self.gee_era5_columns_map[col]: data[:, :, idx].flatten()
                    for idx, col in enumerate(self.gee_era5_columns)
                },
            }
        )
        # 原始空间分辨率较低，插值
        df = resample_util.interpolate_resample(df=df, columns=self.era5_columns)
        df = filter_util.filter_china(df=df, cache_key='post_resample')
        df = filter_util.filter_small_island(df=df)
        # sp缩小1e3
        df['sp'] /= 1e3
        df_util.format_columns(df=df, columns=['lon', 'lat', *self.era5_columns])
        return df

    def download(self):
        self.logger.info('=' * 120)
        self.log('准备查询')
        savepath1 = path_util.get_yymd_path_under_ds(['era5'], self.dt, midpath='part1')
        savepath2 = path_util.get_yymd_path_under_ds(['era5'], self.dt, midpath='part2')
        savepath3 = path_util.get_yymd_path_under_ds(['era5'], self.dt, midpath='part3')
        savepath4 = path_util.get_yymd_path_under_ds(['era5'], self.dt, midpath='part4')
        # 1. 如果已下载，判断一个就行了
        if savepath1.exists():
            self.log('已下载，跳过')
            return
        # 2. 查询
        geoscf: ee.imagecollection.ImageCollection = (
            ee.imagecollection.ImageCollection('ECMWF/ERA5/HOURLY')
            .filterDate(self.dt, self.dt + timedelta(days=1))
            .select(self.gee_era5_columns)
            .map(self.clip)
        )
        # 3. 处理
        total = cast(int, geoscf.size().getInfo())
        self.log(f'查询成功，共{total}条，开始下载')
        geoscf_ls = geoscf.toList(total)
        df_ls: list[pd.DataFrame] = []
        for i in range(total):  # 0-23
            image = ee.image.Image(geoscf_ls.get(i))
            current = self.dt + timedelta(hours=i)
            df_ls.append(self._handle_era5(image, current))
            self.log('处理完毕', dt_str=time_util.dt2ymdh(current))
        if len(df_ls) == 0:
            self.log('无符合要求的数据，本次流程结束')
            return
        # 4. 保存
        df = pd.concat(df_ls)
        # 分开存
        df_util.save_parquet(df[self.era5_columns_part1], savepath1)
        df_util.save_parquet(df[self.era5_columns_part2], savepath2)
        df_util.save_parquet(df[self.era5_columns_part3], savepath3)
        df_util.save_parquet(df[self.era5_columns_part4], savepath4)
        self.log(
            f'下载成功，已保存至{path_util.relative2logpath(savepath1)}、{path_util.relative2logpath(savepath2)}、{path_util.relative2logpath(savepath3)}、{path_util.relative2logpath(savepath4)}'
        )


def download_era5(dt: Maybe[datetime] = None) -> datetime:
    """下载era5，作为数据下载的最后一站

    Args:
        dt (Maybe[datetime], optional): _description_. Defaults to None.

    Returns:
        datetime: 当前era5下载的时间，用于后续的重建和估算
    """
    downloader = ERA5Downloader(dt=dt or time_util.utc_now())
    downloader.download()
    return downloader.dt
