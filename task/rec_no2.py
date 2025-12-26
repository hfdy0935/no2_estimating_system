import sys
from src.modules.reconstructor.main import reconstruct_no2
from src.utils.light import time_util

if __name__ == "__main__":
    dt = time_util.utc_now()
    args = sys.argv
    if len(args) > 1:
        try:
            dt = time_util.ymd2dt(sys.argv[1])
        except:
            raise ValueError('解析时间出错')
    reconstruct_no2(dt)
