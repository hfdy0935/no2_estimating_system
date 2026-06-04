from datetime import datetime, timedelta
from pathlib import Path
import shutil
from typing import Final
from src.utils.light import path_util, df_util, time_util, est_record_util, logger, cs


class Deleter:

    def base_del(self, filepath: Path, del_blank_dir: bool = True):
        if not filepath.exists():
            return
        filepath.unlink()
        if del_blank_dir and not any(filepath.parent.iterdir()):
            filepath.parent.rmdir()

    def del_era5(self, dt: datetime):
        for part in df_util.era5_parts:
            path = path_util.gen_pq_path_under_ds(['era5', part], dt=dt)
            self.base_del(path)
        return self

    def del_gems(self, dt: datetime):
        path = path_util.gen_pq_path_under_ds(['gems'], dt=dt)
        self.base_del(path)
        return self

    def del_geoscf(self, dt: datetime):
        path = path_util.gen_pq_path_under_ds(['geoscf'], dt=dt)
        self.base_del(path)
        return self

    def del_rec(self, dt: datetime):
        path = path_util.gen_pq_path_under_rec(['rec'], dt=dt)
        self.base_del(path)
        return self

    def del_est(self, dt: datetime):
        # 1. daily tif
        path = path_util.gen_tif_path_under_est(['daily_tif'], dt=dt)
        self.base_del(path)
        # 2. hourly tif
        ymd = time_util.dt2ymd(dt)
        hourly_dir = path_util.est / 'hourly_tif' / f'{dt.year}' / ymd
        if hourly_dir.exists():
            shutil.rmtree(hourly_dir)
            # 判断年份目录是否为空
            if not any(hourly_dir.parent.iterdir()):
                hourly_dir.parent.rmdir()
        # 3. pq
        path = path_util.est / 'pq' / f'{dt.year}' / f'{ymd}.parquet'
        self.base_del(path)
        # 4. stat
        hourly_dir = path_util.est / 'stat' / f'{dt.year}' / ymd
        if hourly_dir.exists():
            shutil.rmtree(hourly_dir)
            # 判断年份目录是否为空
            if not any(hourly_dir.parent.iterdir()):
                hourly_dir.parent.rmdir()
        # 5. 移除record
        records = est_record_util.get_raw()
        records = [r for r in records if r != ymd]
        est_record_util.replace(records)
        return self

    def log(self, msg: str, dt_str: str):
        logger.info(f'{dt_str} {msg}')

    def run(self, dt: datetime):
        self.del_era5(dt).del_gems(dt).del_geoscf(dt).del_rec(dt).del_est(dt)
        self.log(cs.green('删除完成'), time_util.dt2ymd(dt))

    del_max_interval: Final[timedelta] = timedelta(days=60)
    """最多保留60天数据"""


deleter = Deleter()
