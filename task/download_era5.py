from datetime import timedelta
import sys
from src.modules.downloader.era5 import download_era5
from src.modules.reconstructor.main import reconstruct_no2
from src.modules.estimator.main import estimate_no2

from src.utils.light import time_util


if __name__ == '__main__':
    dt = time_util.utc_now()
    args = sys.argv
    if len(args) > 1:
        try:
            dt = time_util.ymd2dt(sys.argv[1])
        except:
            raise ValueError('解析时间出错')
    dt = download_era5(dt=dt + timedelta(days=7))
    reconstruct_no2(dt=dt)
    estimate_no2(dt=dt)


# gems: today
# geoscf: today-5
# era5: today-7
# cnemc: today hourly

# era5下载完成即可触发重建和估算流程
