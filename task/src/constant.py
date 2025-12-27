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


SHARED_DIR: Final[str] = os.path.join('..', 'shared')
"""
公共目录相对启动文件的路径
"""

# geojson位置
CHINA_GEOJSON_PATH: Final[Path] = Path(
    SHARED_DIR, 'data_source', 'geojson', 'china.geojson'
)
WORLD_GEOJSON_PATH: Final[Path] = Path(
    SHARED_DIR, 'data_source', 'geojson', 'world.geojson'
)

# 模型位置
REC_MODEL_PATH: Final[Path] = Path(SHARED_DIR, 'reconstruct', 'model', 'model.cbm')
EST_MODEL_PATH: Final[Path] = Path(SHARED_DIR, 'estimate', 'model', 'model.cbm')


# 空间分辨率
RESOLUTION: Final[float] = 0.05


# issue自动回复白名单
IssueWhiteUsernameList = ['hfdy0935']
