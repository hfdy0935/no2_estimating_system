from datetime import datetime, timedelta
from typing import cast
import ee
import geemap
import numpy as np
import pandas as pd
from src.modules.downloader.basic import GEEDownloader
from src.utils.light import (
    time_util,
    path_util,
    df_util,
    resample_util,
    logger,
    data_record_util,
    cs,
)
from src.utils.heavy import filter_util
from src.types import Maybe


class ERA5Downloader(GEEDownloader):
    """下载ERA5，官网上太慢了，换成GEE

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
        self.gee_era5_columns = list(self.gee_era5_columns_map.keys())
        self.local_era5_columns = list(self.gee_era5_columns_map.values())
        self.dt = dt.replace(hour=0, minute=0, second=0, microsecond=0)
        self.ymd = time_util.dt2ymd(self.dt)

    def log(self, msg: str, dt_str: str = ''):
        logger.info(f'{dt_str or self.ymd} {msg}')

    def _handle_single_era5(self, image: ee.image.Image, dt: datetime) -> pd.DataFrame:
        """处理某一小时的era5 image，转为DataFrame

        Args:
            image (ee.image.Image): _description_
            dt (datetime): 当前时刻

        Returns:
            pd.DataFrame: _description_
        """
        # (h,w,len(self.gee_era5_columns_map))
        data = geemap.ee_to_numpy(
            image, region=self.china_rect_region
        )  # scale参数可在GEE上重采样，为了下快点先用默认比例，下到本地再重采样
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
                    col: data[:, :, idx].flatten()
                    for idx, col in enumerate(self.local_era5_columns)
                },
            }
        )
        # 插值
        df = resample_util.interpolate_resample(df=df, columns=self.local_era5_columns)
        # 每次的网格都一样，可以缓存判断结果
        df = filter_util.filter_china(df=df, cache_key='post_resample')
        df = filter_util.filter_small_island(df=df)
        # sp缩小1e3
        df['sp'] /= 1e3
        df_util.format_columns(df=df, columns=['lon', 'lat', *self.local_era5_columns])
        return df

    def download(self):
        logger.info(cs.blue('=' * 50 + time_util.dt2ymd(self.dt) + ' ERA5 ' + '=' * 50))
        # 1. 如果已下载
        if path_util.gen_pq_path_under_ds(['era5', 'part1'], self.dt).exists():
            logger.info(cs.yellow('已下载，跳过'))
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
        logger.info(f'查询成功，共{total}条数据，开始下载')
        geoscf_ls = geoscf.toList(total)
        df_ls: list[pd.DataFrame] = []
        for i in range(total):  # 0-23
            image = ee.image.Image(geoscf_ls.get(i))
            current = self.dt + timedelta(hours=i)
            df_ls.append(self._handle_single_era5(image, current))
            self.log('下载成功', dt_str=time_util.dt2ymdh(current))
        if len(df_ls) == 0:
            logger.info(cs.yellow('无符合要求的数据，本次流程结束'))
            return
        # 4. 保存
        df = pd.concat(df_ls)
        df_util.save_era5(df[['lon', 'lat', 'time', *self.local_era5_columns]])
        savepath = path_util.gen_pq_path_under_ds(['era5', '*'], self.dt)
        logger.info(cs.green(f'下载成功，已保存至{path_util.rel2abs(savepath)}'))


def download_era5(dt: Maybe[datetime] = None) -> datetime:
    """下载era5，作为数据下载的最后一站

    Args:
        dt (Maybe[datetime], optional): _description_. Defaults to None.

    Returns:
        datetime: 当前era5下载的时间，用于后续的重建和估算
    """
    with data_record_util.write_with_duration('ERA5'):
        downloader = ERA5Downloader(
            dt=dt or (time_util.utc_now() + ERA5Downloader.diff)
        )
        downloader.download()
        return downloader.dt
