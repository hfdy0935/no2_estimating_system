import logging
from typing import Final, cast, final
import ee

from src.constant import ChinaRect, RectBound
from src.config import secret_config

# region GEEDownloader


class GEEDownloader:

    def __init__(self):
        self.logger = logging.getLogger()
        # gee初始化
        ee.Authenticate()
        ee.Initialize(project='ee-hfdy09354121794',credentials=secret_config.gee_credentials)
        # 研究区
        self.china_rect: Final[RectBound] = ChinaRect
        self.china_rect_region: Final[ee.geometry.Geometry] = (
            ee.geometry.Geometry.Rectangle(
                coords=(
                    ChinaRect.minlon,
                    ChinaRect.minlat,
                    ChinaRect.maxlon,
                    ChinaRect.maxlat,
                )
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


# endregion
