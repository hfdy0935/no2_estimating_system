from src.modules.downloader.gems import download_gems
from src.utils.light import shared_data_util

if __name__ == '__main__':
    with shared_data_util.log_with_time('GEMS'):
        download_gems()
