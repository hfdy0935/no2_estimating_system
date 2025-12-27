from abc import ABC, abstractmethod
from datetime import datetime
from io import BytesIO
import json
import logging
from typing import Literal
import pandas as pd
import requests
from netCDF4 import Dataset
from src.config import SecretConfig
from src.types import Maybe
from src.utils.light import time_util, resample_util, df_util, path_util, parquet_util
from src.utils.heavy import filter_util


logger = logging.getLogger()


class GEMSFetcherType(ABC):
    """请求GEMS数据时间和值的抽象类"""

    @abstractmethod
    def get_obs_params(self, dt: datetime) -> list[tuple[str, dict]]:
        """发送请求获取dt一天内的所有观测参数：时间+请求体额外参数

        Args:
            dt (datetime): _description_

        Returns:
             list[tuple[str, dict]]: (时刻列表具体到分钟, 数据信息)
        """
        ...

    @abstractmethod
    def fetch_data(self, ymdhm: str, params: dict) -> BytesIO:
        """下载单个时刻的gems数据

        Args:
            ymdhm (str): 需要具体到分钟
            params (dict): 之前获取请求时间的结果

        Returns:
            BytesIO: 响应内容
        """
        ...


class GEMSKeyFetcher(GEMSFetcherType):
    """使用带key的链接请求GEMS数据"""

    def __init__(self):
        # 请求数据的url
        self.data_url = 'https://nesc.nier.go.kr:38032/api/GK2/L2/NO2/data/getFileItem.do?date={yyyymmddhhmm}&key={key}'
        # 查询观测时间的url，时间左闭右闭
        self.obs_time_url = 'https://nesc.nier.go.kr:38032/api/GK2/L2/NO2/data/getFileDateList.do?sDate={start}&eDate={end}&format=json&key={key}'
        self.session = requests.session()

    def get_obs_params(self, dt: datetime) -> list[tuple[datetime, dict]]:
        start = dt.replace(hour=0, minute=0, second=0)
        end = dt.replace(hour=23, minute=59, second=59)
        url = self.obs_time_url.format(
            start=time_util.dt2ymdh(start),
            end=time_util.dt2ymdh(end),
            key=SecretConfig.gems_api_key,
        )
        resp = self.session.get(url)
        data = resp.json().get('list', [])
        # 例子
        # {
        #     'list': [
        #         {'item': '20251225054500'},
        #         {'item': '20251225034500'}
        #     ]
        # }
        res = [(t['item'][:-2], {}) for t in data]
        return res

    def fetch_data(self, ymdhm: str, _: dict) -> BytesIO:
        url = self.data_url.format(yyyymmddhhmm=ymdhm, key=SecretConfig.gems_api_key)
        resp = self.session.get(url)
        nc_buffer = BytesIO(resp.content)
        return nc_buffer


class GEMSBrowserFetcher(GEMSFetcherType):
    """使用浏览器中的https链接请求GEMS数据"""

    def __init__(self):
        # 请求数据的url
        self.data_url = 'https://nesc.nier.go.kr/en/svc/image/dwld.do'
        # 查询观测时间的url，时间左闭右闭
        self.obs_time_url = 'https://nesc.nier.go.kr/en/data/search/listData.do'
        self.session = requests.session()
        self.headers = headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36',
            'Origin': 'https://nesc.nier.go.kr',
            'Referer': 'https://nesc.nier.go.kr/en/html/datasvc/data.do?pageIndex=1&outputInnb=64&atrb=NO2_Trop',
            'Content-Type': 'application/json',
        }

    def get_obs_params(self, dt: datetime) -> list[tuple[str, dict]]:
        start = dt.replace(hour=0, minute=0, second=0)
        end = dt.replace(hour=23, minute=59, second=59)
        data = {
            "outputInnb": "64",
            "reqstSe": "01",
            "beginDt": time_util.dt2ymdhm(start),
            "endDt": time_util.dt2ymdhm(end),
            "tz": "UTC",
            "svcSe": "03",
            "keyword": {},
            "area": None,
        }
        resp = self.session.get(
            self.obs_time_url, data=json.dumps(data), headers=self.headers
        )
        data = resp.json().get('data', [])
        res = [(item['obsrBeginDt'], item) for item in data]
        # 例子
        # {
        #     'result': 'ok',
        #     'resultType': 'data',
        #     'data': [
        #         {
        #             'fileName': 'GK2_GEMS_L2_20251226_0345_NO2_FC_DPRO_ORI.nc',
        #             'outputInnb': 64,
        #             'fileSz': 281754984,
        #             'fileCo': 1,
        #             'reqstSe': '01',
        #             'obsrBeginDt': '202512260345',
        #             'obsrEndDt': '202512260345',
        #             'kwrdParamtrValue': {'area': 'FC'},
        #         }
        #     ],
        # }
        return res

    def fetch_data(self, ymdhm: str, params: dict) -> BytesIO:
        data = {
            "outputInnb": params['outputInnb'],
            "date": ymdhm,
            "keyword": params['kwrdParamtrValue'],
            "svcSe": "03",
            "passSvc": "",
        }
        resp = self.session.get(
            self.data_url, data=json.dumps(data), headers=self.headers
        )
        nc_buffer = BytesIO(resp.content)
        return nc_buffer


class GEMSDownloader:
    """下载GEMS

    **数据**
    >>> 每天大约utc 00:45-05:45有数据，加工需要一个多小时

    **下载**
    >>> 频率：每天，暂定utc 12:00请求
    >>> 过程：先查询观测时间，再根据时间下载
    """

    def __init__(self, dt: datetime, fetcher: Literal['key', 'browser'] = 'browser'):
        self.logger = logging.getLogger()
        self.fetcher: GEMSFetcherType = (
            GEMSKeyFetcher() if fetcher == 'key' else GEMSBrowserFetcher()
        )
        self.no2_column = 'gems_no2'
        self.dt = dt
        self.ymd = time_util.dt2ymd(dt)

    def log(self, msg: str, dt_str: str = ''):
        self.logger.info(f'{dt_str or self.ymd} GEMS {msg}')

    def _read_gems(self, buffer: BytesIO, ymdh: str) -> pd.DataFrame:
        """读取+处理GEMS数据

        Args:
            buffer (BytesIO):
            ymdh (str): 时间

        Returns:
            pd.DataFrame: _description_
        """
        # 1. 读取数据
        nc_file = Dataset("in_memory_nc", mode="r", memory=buffer.getvalue())
        lat = nc_file.groups['Geolocation Fields'].variables['Latitude'][:].flatten()
        lon = nc_file.groups['Geolocation Fields'].variables['Longitude'][:].flatten()
        # units: molecules cm-2
        no2 = (
            nc_file.groups['Data Fields'].variables['ColumnAmountNO2Trop'][:].flatten()
        )
        # 精度指标
        cloud = nc_file.groups['Data Fields'].variables['CloudFraction'][:].flatten()
        sza = (
            nc_file.groups['Geolocation Fields']
            .variables['SolarZenithAngle'][:]
            .flatten()
        )
        vza = (
            nc_file.groups['Geolocation Fields']
            .variables['ViewingZenithAngle'][:]
            .flatten()
        )
        # 2. 拼接df、预处理
        df = pd.DataFrame(
            {
                'lat': lat,
                'lon': lon,
                self.no2_column: no2,
                'cloud': cloud,
                'sza': sza,
                'vza': vza,
            }
        )
        # 去除无效值（NaN）
        df = df.dropna(subset=['lon', 'lat', self.no2_column, 'cloud', 'sza', 'vza'])
        # 官网文档建议使用cloud<0.3 && sza<70 && vza<70
        df = df[(df.cloud < 0.3) & (df.sza < 70) & (df.vza < 70)]
        # molecules/cm^2 => 1e15 molecules/cm^2
        df[self.no2_column] = df[self.no2_column] / 1e15
        # no2正常范围
        df = df[(df[self.no2_column] > 0) & (df[self.no2_column] < 200)]
        # 时间列
        df['time'] = ymdh
        df = df[['lon', 'lat', 'time', self.no2_column]]
        # 3. 重采样、裁剪
        # 范围缩小再重采样，减少耗时
        df = filter_util.filter_rect(df=df, padding=1)
        df = resample_util.grid_divide_resample(df=df, columns=[self.no2_column])
        df = filter_util.filter_china(df=df).reset_index(drop=True)
        (
            df_util.format_columns(df=df, columns=['lon', 'lat']).format_columns(
                df=df, columns=[self.no2_column], n=3
            )
        )
        return df

    def download(self):
        self.logger.info('=' * 120)
        self.log('准备查询')
        savepath = path_util.get_yymd_path_under_ds(['gems'], self.dt)
        # 1. 如果已下载
        if savepath.exists():
            self.log('已下载，跳过')
            return
        # 2. 查询这一天有多少数据
        params: list[tuple[str, dict]] = self.fetcher.get_obs_params(self.dt)
        self.log(f'查询成功，共{len(params)}条，开始下载')
        # 3. 分别请求
        df_ls: list[pd.DataFrame] = []
        for cur, item in params:
            df_ls.append(self._read_gems(self.fetcher.fetch_data(cur, item), cur[:-2]))
            self.log('处理完毕', cur[:-2])  # xxx_min=>xxx_hour
        if len(df_ls) == 0:
            self.log('无符合要求的数据，本次流程结束')
            return
        # 4. 保存
        df = pd.concat(df_ls)
        parquet_util.save(df=df, path=savepath)
        self.log(f'下载成功，已保存至{path_util.relative2logpath(savepath)}')


def download_gems(dt: Maybe[datetime] = None):
    downloader = GEMSDownloader(dt=dt or time_util.utc_now(), fetcher='browser')
    downloader.download()
