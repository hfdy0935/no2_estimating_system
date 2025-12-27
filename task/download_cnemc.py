from src.modules.downloader.cnemc import download_cnemc
from src.utils.light import shared_data_util

if __name__ == '__main__':
    with shared_data_util.log_with_time('CNEMC'):
        download_cnemc()
