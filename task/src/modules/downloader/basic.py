import logging
from pathlib import Path
from typing import cast, final
import ee
from ee.oauth import get_credentials_path

from src.constant import ChinaRect, RectBound
from src.config import SecretConfig


def init_ee_credentials():
    if SecretConfig.is_github_actions:
        if SecretConfig.gee_credentials is None:
            raise RuntimeError(
                f'环境变量缺少GEE_CREDENTIALS，可以在GEE初次浏览器认证之后的{get_credentials_path()}中获取'
            )
        # 写入
        path = Path(get_credentials_path())
        path.parent.mkdir(parents=True, exist_ok=True)
        with open(path, 'w') as f:
            f.write(SecretConfig.gee_credentials)
    # 初始化
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
    def clip(self, image: ee.image.Image) -> ee.image.Image:
        """裁剪image

        Args:
            image (ee.image.Image): _description_

        Returns:
            ee.image.Image: _description_
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
