from src.modules.downloader.gems import download_gems
from src.utils.light import shared_data_util, time_util
import sys

if __name__ == '__main__':
    dt = time_util.utc_now()
    args = sys.argv
    if len(args) > 1:
        try:
            dt = time_util.ymd2dt(sys.argv[1])
        except:
            raise ValueError('解析时间出错')
    with shared_data_util.log_with_time('GEMS'):
        download_gems(dt=dt)
