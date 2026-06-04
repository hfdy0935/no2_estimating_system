from datetime import datetime, timedelta
import sys
from src.modules.downloader.era5 import ERA5Downloader, download_era5
from src.modules.reconstructor.main import reconstruct_no2
from src.modules.estimator.main import estimate_no2
from src.modules.deleter.main import deleter
from src.utils.light import time_util


def run_period(s: datetime, e: datetime):
    while s <= e:
        dt = download_era5(dt=s)
        reconstruct_no2(dt=dt)
        estimate_no2(dt=dt)
        s += timedelta(days=1)
        deleter.run(dt=dt - deleter.del_max_interval)


if __name__ == "__main__":
    dt = time_util.utc_now()
    args = sys.argv
    if len(args) == 1:
        # 没有指定时间，默认当前能获取到的最新数据
        run_period(dt + ERA5Downloader.diff, dt + ERA5Downloader.diff)
    elif len(args) == 2:
        # 指定时刻
        try:
            dt = time_util.ymd2dt(sys.argv[1])
            run_period(dt, dt)
        except Exception as e:
            raise ValueError(f'运行出错: {e}')
    elif len(args) == 3:
        # 指定时段
        try:
            s = time_util.ymd2dt(sys.argv[1])
            e = time_util.ymd2dt(sys.argv[2])
            run_period(s, e)
        except Exception as e:
            raise ValueError(f'运行出错: {e}')
    else:
        raise ValueError('参数错误')

# era5下载完成即可触发重建和估算流程
