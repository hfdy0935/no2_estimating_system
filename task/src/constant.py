from dataclasses import dataclass
import os
from pathlib import Path
from typing import Final

from src.types import Number


@dataclass(frozen=True)
class RectBound:
    minlon: Number
    maxlon: Number
    minlat: Number
    maxlat: Number


ChinaRect = RectBound(minlon=73, maxlon=136, minlat=3, maxlat=54)
"""研究区经纬度范围"""


SHARED_DIR: Final[Path] = Path(os.path.join('..', 'shared'))
"""
公共目录相对于脚本运行文件的路径
"""


CHINA_GEOJSON_PATH: Final[Path] = (
    SHARED_DIR / 'data_source' / 'geojson' / 'china.geojson'
)
WORLD_GEOJSON_PATH: Final[Path] = (
    SHARED_DIR / 'data_source' / 'geojson' / 'world.geojson'
)

# 模型位置
REC_MODEL_PATH: Final[Path] = SHARED_DIR / 'reconstruct' / 'model' / 'rec_model.cbm'
EST_MODEL_PATH: Final[Path] = SHARED_DIR / 'estimate' / 'model' / 'huber_model.cbm'


# 目标空间分辨率
SPATIAL_RESOLUTION: Final[float] = 0.05


# issue自动回复白名单
IssueUsernameWhiteList: Final[list[str]] = ['hfdy0935']
