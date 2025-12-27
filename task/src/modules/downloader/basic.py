import logging
from pathlib import Path
from typing import cast, final
import ee

from src.constant import ChinaRect, RectBound
from task.src.config import SecretConfig


def init_ee_credentials():
    if SecretConfig.gee_credentials is None:
        raise RuntimeError(
            '环境变量缺少GEE_CREDENTIALS，格式为json字符串，来源：GEE初次浏览器认证之后生成在~/.config/earthengine/credentials'
        )
    # 写入
    path = Path.home() / '.config' / 'earthengine' / 'credentials'
    path.mkdir(parents=True, exist_ok=True)
    with open(path, 'w') as f:
        f.write(SecretConfig.gee_credentials)
    ee.Authenticate()
    ee.Initialize(
        project='ee-hfdy09354121794',
    )


class GEEDownloader:

    def __init__(self):
        self.logger = logging.getLogger()
        init_ee_credentials()
        # 研究区
        self.china_rect = ChinaRect
        self.china_rect_region = ee.geometry.Geometry.Rectangle(
            coords=(
                ChinaRect.minlon,
                ChinaRect.minlat,
                ChinaRect.maxlon,
                ChinaRect.maxlat,
            )
        )

    @final
    def clip(self, image: ee.image.Image):
        """裁剪image

        Args:
            image (ee.image.Image): _description_

        Returns:
            _type_: _description_
        """
        return image.clip(self.china_rect_region)

    @final
    def compute_image_bound(self, image: ee.image.Image) -> RectBound:
        """计算影像边界，有些情况下下载的数据范围不是self.china_rect

        >>> 给原始数据分配经纬度时用到

        Args:
            image (ee.image.Image): _description_

        Returns:
            RectBound: _description_
        """
        bounds = cast(dict, image.geometry().bounds().getInfo())['coordinates'][0]
        min_lon = min([p[0] for p in bounds])
        max_lon = max([p[0] for p in bounds])
        min_lat = min([p[1] for p in bounds])
        max_lat = max([p[1] for p in bounds])
        return RectBound(min_lon, max_lon, min_lat, max_lat)
