from datetime import datetime, timedelta
from io import BytesIO
from queue import Queue
import threading
from typing import cast
from warnings import deprecated
import ee
import geemap
from netCDF4 import Dataset
import numpy as np
import pandas as pd
import requests
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
from src.modules.downloader.basic import GEEDownloader
from src.types import Maybe


@deprecated('GEE不更新了，暂时弃用')
class GEOSCFDownloader(GEEDownloader):
    """下载GEOS-CF

    **数据**
    >>> 更新：每天更新至1.5天前，但前几天的数据不全
    >>> 链接：https://developers.google.com/earth-engine/datasets/catalog/NASA_GEOS-CF_v1_rpl_tavg1hr?hl=zh_cn


    **下载**
    >>> 频率：每天
    >>> 时间：utc_day-5
    """

    diff = timedelta(days=-5)

    def __init__(self, dt: datetime):
        super().__init__()
        self.gee_no2_column = 'TROPCOL_NO2'
        self.local_no2_column = 'geoscf_no2'
        self.dt = dt.replace(hour=0, minute=0, second=0, microsecond=0) + self.diff
        self.ymd = time_util.dt2ymd(self.dt)

    def log(self, msg: str, dt_str: str = ''):
        logger.info(f'{dt_str or self.ymd}的GEOS-CF {msg}')

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
                self.local_no2_column: flat_no2,
            }
        )
        # 4. 插值过滤
        df = resample_util.interpolate_resample(df=df, columns=[self.local_no2_column])
        df = filter_util.filter_china(df=df, cache_key='post_resample')
        df = filter_util.filter_small_island(df=df)
        (
            df_util.format_columns(
                df=df, columns=[self.local_no2_column], n=3
            ).format_columns(df=df, columns=['lon', 'lat'])
        )
        return df

    def download(self):
        logger.info(cs.blue('=' * 50 + ' GEOS-CF ' + '=' * 50))
        self.log('准备查询')
        savepath = path_util.gen_pq_path_under_ds(['geoscf'], self.dt)
        # 1. 如果已下载
        if savepath.exists():
            self.log(cs.yellow('已下载，跳过'))
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
            self.log(cs.yellow('无符合要求的数据，本次流程结束'))
            return
        # 4. 保存
        df = pd.concat(df_ls)
        df_util.save_parquet(df, savepath)
        self.log(cs.green(f'下载成功，已保存至{path_util.rel2abs(savepath)}'))


class NewGEOSCFDownloader(GEEDownloader):
    """下载GEOS-CF

    **数据**
    >>> 更新：每天更新当天 + 后面5天的
    >>> 链接：https://portal.nccs.nasa.gov/datashare/gmao/geos-cf/v2/ana


    **下载**
    >>> 频率：每天
    >>> 时间：utc-2
    """

    diff = timedelta(days=-2)

    def __init__(self, dt: datetime):
        super().__init__()
        self.gee_no2_column = 'TropCol_NO2'
        self.local_no2_column = 'geoscf_no2'
        self.dt = dt.replace(hour=0, minute=0, second=0, microsecond=0) + self.diff
        self.ymd = time_util.dt2ymd(self.dt)
        # self.base_url = 'https://portal.nccs.nasa.gov/datashare/gmao/geos-cf/v2/forecast/Y{execute_year}/M{execute_month}/D{execute_day}/GEOS.cf.fcst.xgc_tavg_1hr_glo_L1440x721_slv.{execute_ymd}_09z%2B{target_ymd}_{target_hm}z.R0.nc4'
        # 官网的v2/forecast突然没了...，换个数据源
        self.base_url = 'https://portal.nccs.nasa.gov/datashare/gmao/geos-cf/v2/ana/Y{target_year}/M{target_month}/D{target_day}/GEOS.cf.ana.xgc_tavg_1hr_glo_L1440x721_slv.{target_ymd}_{target_hm}z.R0.nc4'
        self.session = requests.Session()
        self.request_timeout = 1200  # s
        self.max_retries: int = 10
        self.max_workers: int = 6
        self.lock = threading.Lock()

    def log(self, msg: str, dt_str: str = ''):
        logger.info(f'[GEOS-CF] {dt_str or self.ymd} {msg}')

    def _handle_geoscf(self, nc_file: Dataset, dt: datetime) -> pd.DataFrame:
        """提取某一小时的Dataset，转为dataframe

        Args:
            nc_file (Dataset): _description_
            dt (datetime): 当前数据时刻

        Returns:
            pd.DataFrame: _description_
        """
        # 1. 提取
        lons = nc_file['lon'][:]
        lats = nc_file['lat'][:]
        no2 = nc_file['TropCol_NO2'][:][0]
        # 2. 组装
        lon_grid, lat_grid = np.meshgrid(lons, lats)
        del lons
        del lats
        df = pd.DataFrame(
            data={
                'lon': lon_grid.data.flatten(),  # type: ignore
                'lat': lat_grid.data.flatten(),  # type: ignore
                'time': time_util.dt2ymdh(dt),
                self.local_no2_column: no2.data.flatten(),
            }
        )
        # 3. 插值过滤
        df = filter_util.filter_china(df=df, cache_key='pre_resample')
        df = resample_util.interpolate_resample(df=df, columns=[self.local_no2_column])
        df = filter_util.filter_china(df=df, cache_key='post_resample')
        df = filter_util.filter_small_island(df=df)
        (
            df_util.format_columns(
                df=df, columns=[self.local_no2_column], n=3
            ).format_columns(df=df, columns=['lon', 'lat'])
        )
        return df

    def _format_url(self, url: str, target_dt: datetime):
        """根据目标时间格式化url"""
        dt_str = time_util.dt2ymd(target_dt)
        return url.format(
            target_year=dt_str[:4],
            target_month=dt_str[4:6],
            target_day=dt_str[-2:],
            target_ymd=dt_str,
            target_hm=time_util.dt2ymdhm(target_dt)[-4:-2] + '30',
        )

    def _download_task(self, target_dt: datetime, queue: Queue[pd.DataFrame]):
        for retry in range(self.max_retries):
            try:
                print(self._format_url(url=self.base_url, target_dt=target_dt))
                resp = self.session.get(
                    self._format_url(url=self.base_url, target_dt=target_dt),
                    # timeout=self.request_timeout
                )
                break
            except Exception as e:
                self.log(
                    f'[GEOS-CF] 第{retry+1}次尝试: {e}',
                    dt_str=time_util.dt2ymdh(target_dt),
                )
                resp = None
        if resp:
            nc_buffer = BytesIO(resp.content)
            nc_file = Dataset('in_memory_nc', mode='r', memory=nc_buffer.getvalue())
            with self.lock:
                queue.put(self._handle_geoscf(nc_file=nc_file, dt=target_dt))
                nc_file.close()
            self.log('下载成功', dt_str=time_util.dt2ymdh(target_dt))
        else:
            self.log(cs.red('下载失败'), dt_str=time_util.dt2ymdh(target_dt))

    def download(self):
        logger.info(
            cs.blue('=' * 50 + time_util.dt2ymd(self.dt) + ' GEOS-CF ' + '=' * 50)
        )
        savepath = path_util.gen_pq_path_under_ds(['geoscf'], self.dt)
        # 1. 如果已下载
        if savepath.exists():
            logger.info(cs.yellow('[GEOS-CF] 已下载，跳过'))
            return
        # 2. 下载
        df_queue: Queue[pd.DataFrame] = Queue()
        # execute_dt = self.dt + self.diff
        # tasks: list[Callable] = []
        # argss: list[list[Any]] = []
        logger.info('[GEOS-CF] 开始下载')
        for i in range(24):
            # tasks.append(self._download_task)
            target_dt = self.dt + timedelta(hours=i)
            self._download_task(target_dt, df_queue)
            # argss.append([target_dt, df_queue, execute_dt])
        # run_in_thread_pool(tasks=tasks, argss=argss)
        # 3. 保存
        if df_queue.empty():
            logger.info(cs.yellow('[GEOS-CF] 暂无数据，跳过'))
            return
        df_ls: list[pd.DataFrame] = []
        while not df_queue.empty():
            df_ls.append(df_queue.get())
        df = pd.concat(df_ls)
        df_util.save_parquet(df, savepath)
        logger.info(
            cs.green(f'[GEOS-CF]  √ 下载成功，已保存至{path_util.rel2abs(savepath)}')
        )


def download_geoscf(dt: Maybe[datetime] = None):
    with data_record_util.write_with_duration('GEOS-CF'):
        downloader = NewGEOSCFDownloader(dt=dt or time_util.utc_now())
        downloader.download()
