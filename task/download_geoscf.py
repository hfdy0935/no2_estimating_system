from datetime import datetime, timedelta
from src.modules.downloader.geoscf import download_geoscf
from src.utils.light import time_util
import sys


def run_period(s: datetime, e: datetime):
    while s <= e:
        download_geoscf(s)
        s += timedelta(days=1)


if __name__ == "__main__":
    dt = time_util.utc_now()
    args = sys.argv
    if len(args) == 1:
        # 没有指定时间，默认当前
        run_period(dt, dt)
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
