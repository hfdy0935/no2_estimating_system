from src.modules.downloader.geoscf import download_geoscf
from src.utils.light import shared_data_util

if __name__ == '__main__':
    with shared_data_util.log_with_time('GEOS-CF'):
        download_geoscf()
