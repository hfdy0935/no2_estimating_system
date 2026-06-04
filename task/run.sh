# 下载数据
python download_era5.py 20260510 &
python download_gems.py 20260510 &
python download_geoscf.py 20260510 &
wait
# 重建TCDNO2
python rec_no2.py 20260510
# 估算近地面NO2
python est_no2.py 20260510
