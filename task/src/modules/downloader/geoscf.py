from datetime import datetime, timedelta
from typing import Final, cast
import ee
import geemap
import numpy as np
import pandas as pd
from src.utils.light import time_util, parquet_util, path_util, df_util, resample_util
from src.utils.heavy import filter_util
from src.modules.downloader.basic import GEEDownloader
from src.types import Maybe


class GEOSCFDownloader(GEEDownloader):
    """下载GEOS-CF

    **数据**
    >>> 更新：每天更新至1.5天前，但前几天的数据不全
    >>> 链接：https://developers.google.com/earth-engine/datasets/catalog/NASA_GEOS-CF_v1_rpl_tavg1hr?hl=zh_cn


    **下载**
    >>> 频率：每天
    >>> 时间：utc_day-5

    Returns:
        _type_: _description_
    """

    def __init__(self, dt: datetime):
        super().__init__()
        self.gee_no2_column: Final[str] = 'TROPCOL_NO2'
        self.no2_column: Final[str] = 'geoscf_no2'
        self.dt = self._dt2available(dt)
        self.ymd = time_util.dt2ymd(self.dt)

    def log(self, msg: str, dt_str: str = ''):
        self.logger.info(f'{dt_str or self.ymd} GEOS-CF {msg}')

    def _dt2available(self, dt: datetime) -> datetime:
        """转换dt为有数据的最新整天时间

        Args:
            dt (datetime): _description_

        Returns:
            datetime: _description_
        """
        dt = dt.replace(hour=0, minute=0, second=0, microsecond=0)
        return dt - timedelta(days=5)

    def _handle_geoscf(self, image: ee.image.Image, dt: datetime) -> pd.DataFrame:
        """处理某一小时的geoscf image，转为dataframe

        Args:
            image (ee.image.Image): _description_
            dt (datetime): 当前时刻

        Returns:
            pd.DataFrame: _description_
        """
        # 1. 数据数组，(h,w,1)
        data = geemap.ee_to_numpy(
            image, region=self.china_rect_region
        )  # scale，可在GEE上重采样，为了下快点先用默认比例，下到本地再重采样
        # 2. 组装经纬度
        # 手动计算边界，因为下载的和理论的有点不一样
        bound = self.compute_image_bound(image)
        height, width, _ = data.shape
        lats = np.linspace(bound.maxlat, bound.minlat, height)
        lons = np.linspace(bound.minlon, bound.maxlon, width)
        lon_grid, lat_grid = np.meshgrid(lons, lats)
        # 3. 拼接df
        flat_lon = lon_grid.flatten()
        flat_lat = lat_grid.flatten()
        flat_no2 = data.flatten()
        df = pd.DataFrame(
            {
                'lon': flat_lon,
                'lat': flat_lat,
                'time': time_util.dt2ymdh(dt),
                self.no2_column: flat_no2,
            }
        )
        # 4. 插值过滤
        df = resample_util.interpolate_resample(df=df, columns=[self.no2_column])
        df = filter_util.filter_china(df=df, cache_key='post_resample')
        df = filter_util.filter_small_island(df=df)
        (
            df_util.format_columns(
                df=df, columns=[self.no2_column], n=3
            ).format_columns(df=df, columns=['lon', 'lat'])
        )
        return df

    def download(self):
        self.logger.info('=' * 120)
        self.log('准备查询')
        savepath = path_util.get_yymd_path_under_ds(['geoscf'], self.dt)
        # 1. 如果已下载
        if savepath.exists():
            self.log('已下载，跳过')
            return
        # 2. 查询
        geoscf: ee.imagecollection.ImageCollection = (
            ee.imagecollection.ImageCollection('NASA/GEOS-CF/v1/rpl/tavg1hr')
            .filterDate(self.dt, self.dt + timedelta(days=1))
            .select(self.gee_no2_column)
            .map(self.clip)
        )
        # 3. 处理
        total = cast(int, geoscf.size().getInfo())
        self.log(f'查询成功，共{total}条数据，开始下载')
        geoscf_ls = geoscf.toList(total)
        df_ls: list[pd.DataFrame] = []
        for i in range(total):  # 0-23
            image = ee.image.Image(geoscf_ls.get(i))
            current = self.dt + timedelta(hours=i)
            df_ls.append(self._handle_geoscf(image, current))
            self.log('处理完毕', dt_str=time_util.dt2ymdh(current))
        if len(df_ls) == 0:
            self.log('无符合要求的数据，本次流程结束')
            return
        # 4. 保存
        df = pd.concat(df_ls)
        parquet_util.save(df, savepath)
        self.log(f'下载成功，已保存至{path_util.relative2logpath(savepath)}')


def download_geoscf(dt: Maybe[datetime] = None):
    downloader = GEOSCFDownloader(dt=dt or time_util.utc_now())
    downloader.download()
