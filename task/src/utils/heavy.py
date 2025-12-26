from typing import Sequence, cast
import pandas as pd

from scipy import stats
from src.constant import CHINA_GEOJSON_PATH, WORLD_GEOJSON_PATH, ChinaRect
import numpy as np
from shapely.geometry import Point
import geopandas as gpd
from mpl_toolkits.axes_grid1.inset_locator import inset_axes
import matplotlib.colors as mcolors
from matplotlib import pyplot as plt
from matplotlib import axes
import matplotlib.ticker as ticker
from sklearn.metrics import mean_squared_error, mean_absolute_error
from scipy.stats import pearsonr


class FilterUtil:
    """过滤研究区工具"""

    def __init__(self) -> None:
        self.china_geojson = gpd.read_file(CHINA_GEOJSON_PATH)
        self.world_geojson = gpd.read_file(WORLD_GEOJSON_PATH)

    def filter_rect(self, df: pd.DataFrame, padding: int = 0) -> pd.DataFrame:
        """过滤矩形边界，往外填充padding

        Args:
            df (pd.DataFrame): _description_
            padding (int, optional): 留出的填充长度，便于后续重采样时用到. Defaults to 0.
        """
        return df[
            (df.lon >= ChinaRect.minlon - padding)
            & (df.lon <= ChinaRect.maxlon + padding)
            & (df.lat >= ChinaRect.minlat - padding)
            & (df.lat <= ChinaRect.maxlat + padding)
        ]

    filter_china_land_cache: dict[str, pd.Series | None] = {}
    """判断点是否在china区域的结果缓存，这里geoscf的网格是规则的，**所以才用缓存**，key是缓存的唯一标识"""

    def filter_china(
        self, df: pd.DataFrame, cache_key: str | None = None
    ) -> pd.DataFrame:
        """过滤研究区

        Args:
            df (pd.DataFrame): _description_
            cache_key (str | None, optional): None表示不使用缓存. Defaults to None.

        Returns:
            pd.DataFrame: _description_
        """
        ori_columns = df.columns
        # cahce_key不为None，表示要使用缓存
        if cache_key is not None:
            cur_cache = self.filter_china_land_cache.get(cache_key)
            # 有缓存
            if cur_cache is not None:
                df = pd.concat([df, cur_cache.rename("is_in_china")], axis=1)
                df = df[df["is_in_china"]]
                return df[ori_columns]
        # 没有缓存 or 不使用缓存
        geometry = [Point(xy) for xy in zip(df.lon, df.lat)]
        df = gpd.GeoDataFrame(data=df, geometry=geometry, crs=self.china_geojson.crs)
        df = gpd.sjoin(
            df, self.china_geojson, how="left", predicate="within", rsuffix="_china"
        )
        # 没有匹配上的（等于nan的）就是不在研究区的
        df["is_in_china"] = ~df["index__china"].isna()
        # 是否缓存
        if cache_key is not None:
            self.filter_china_land_cache[cache_key] = df["is_in_china"].copy()
        # 过滤
        df = df[df["is_in_china"]]
        return df[ori_columns]

    def filter_small_island(self, df: pd.DataFrame):
        """过滤九段线和小岛屿"""
        return df[
            (df.lat > 18)
            & ((df.lon < 112) | (df.lat > 19.8))
            & ((df.lon < 115) | (df.lat > 21.7))
            & (((df.lon < 119) | (df.lon > 120)) | (df.lat > 24))
            & ((df.lon < 121.4) | (df.lat > 22.5))
            & ((df.lon < 121.5) | (df.lat > 22.7))
        ]

    filter_world_land_cache: dict[str, pd.Series | None] = {}
    """判断点是否在世界陆地区域的结果缓存，这里geoscf的网格是规则的，**所以才用缓存**，key是缓存的唯一标识"""

    def filter_world_land(
        self, df: pd.DataFrame, cache_key: str | None = None
    ) -> pd.DataFrame:
        """过滤研究区

        Args:
            df (pd.DataFrame): _description_
            cache_key (str | None, optional): None表示不使用缓存. Defaults to None.

        Returns:
            pd.DataFrame: _description_
        """
        ori_columns = df.columns
        if cache_key is not None:
            cur_cache = self.filter_world_land_cache.get(cache_key)
            # 有缓存
            if cur_cache is not None:
                df = pd.concat([df, cur_cache.rename("is_in_world_land")], axis=1)
                df = df[df["is_in_world_land"]]
                return df[ori_columns]
        # 没有缓存 or 不使用缓存
        geometry = [Point(xy) for xy in zip(df.lon, df.lat)]
        df = gpd.GeoDataFrame(data=df, geometry=geometry, crs=self.world_geojson.crs)
        df = gpd.sjoin(
            df,
            self.world_geojson,
            how="left",
            predicate="within",
            rsuffix="_world_land",
        )
        # 没有匹配上的（等于nan的）就是不在研究区的
        df["is_in_world_land"] = ~df["index__world_land"].isna()
        # 是否缓存
        if cache_key is not None:
            self.filter_world_land_cache[cache_key] = df["is_in_world_land"].copy()
        # 过滤
        df = df[df["is_in_world_land"]]
        return df[ori_columns]


filter_util = FilterUtil()


# 默认colorbar
green_yellow_red_colors = [
    '#5F9600',
    '#639800',
    '#6D9F00',
    '#76A500',
    '#80AB00',
    '#88B100',
    '#92B800',
    '#9BBE00',
    '#A3C200',
    '#ADC900',
    '#B6CF00',
    '#C0D500',
    '#C8DB00',
    '#D2E200',
    '#DBE800',
    '#E5EE00',
    '#EEF400',
    '#F8FA00',
    '#FFFC00',
    '#FFF000',
    '#FFE200',
    '#FFD800',
    '#FFCA00',
    '#FFBE00',
    '#FFB000',
    '#FFA400',
    '#FF9600',
    '#FF8A00',
    '#FF7C00',
    '#FF7000',
    '#FF6200',
    '#FF5600',
    '#FF4900',
    '#FF3C00',
    '#FF3200',
    '#FF2400',
    '#FF2200',
]

blue_yellow_red_colors = [
    '#1700B9',
    '#2A00B9',
    '#312DC8',
    '#3A42D3',
    '#445BE0',
    '#4B77E9',
    '#5597F4',
    '#5BB6FC',
    '#63D3FC',
    '#75E4E4',
    '#86EAC2',
    '#97ECAB',
    '#ACEF95',
    '#C0F17E',
    '#CFF264',
    '#E4F34A',
    '#F5F22D',
    '#FFF100',
    '#FFE200',
    '#FDCB00',
    '#EFAF00',
    '#E69500',
    '#DB7700',
    '#D36005',
    '#CB4604',
    '#C92A0D',
]

# 创建自定义colormap


class default_cmap:
    green = mcolors.LinearSegmentedColormap.from_list(
        'custom_ozone', green_yellow_red_colors
    )
    bule = mcolors.LinearSegmentedColormap.from_list(
        'custom_ozone', blue_yellow_red_colors
    )


class PlotUtil:
    """画图工具"""

    def __init__(self) -> None:
        self.china_geojson = gpd.read_file(CHINA_GEOJSON_PATH)
        self.world_geojson = gpd.read_file(WORLD_GEOJSON_PATH)

    def _add_south_china_sea_inset(
        self,
        ax,
        df,
        value_column,
        cmap,
        vmin: float | int | None = None,
        vmax: float | int | None = None,
        s: float | None = 0.1,
        show_edge: bool = True,
    ):
        """
        在主图右下角添加南海诸岛附图
        参数：
            ax: 主图的 Axes 对象
            df: 完整数据集（含南海诸岛数据）
            value_column: 绘图数值列（如 'pred1_no2'）
            cmap: 颜色映射（与主图一致）
            vmin
            vmax: 数值上限（与主图一致，保证颜色条统一）
            s: 散点大小（与主图一致）
        """
        # 1. 定义南海诸岛的经纬度范围（规范范围）
        scs_lon_min, scs_lon_max = 105, 122  # 南海经度范围
        scs_lat_min, scs_lat_max = 1, 23  # 南海纬度范

        # 3. 创建嵌入子图（右下角，宽度为主体1/4，高度为主体1/3，偏移量调整）
        inset_ax = inset_axes(
            ax,
            width="70%",  # 附图宽度占主图的25%
            height="80%",  # 附图高度占主图的30%
            loc="lower right",  # 位置：右下角
            bbox_to_anchor=(0.8, 0, 0.2, 0.35),
            bbox_transform=ax.transAxes,  # 基于主图坐标系
        )
        inset_ax.set_facecolor("#BDE7FE")
        self.world_geojson.plot(
            ax=inset_ax,
            color="white",
            edgecolor="1",
        )
        self.china_geojson.plot(
            ax=inset_ax,
            color="#eee",
            edgecolor="0.7",
        )

        # 4. 绘制南海诸岛散点图（与主图样式一致）
        inset_ax.scatter(
            df["lon"],
            df["lat"],
            c=df[value_column],
            s=s,
            cmap=cmap,
            vmin=vmin,
            vmax=vmax,
        )

        # 去掉所有刻度和标签（关键需求）
        inset_ax.set_xticks([])  # 隐藏x轴刻度
        inset_ax.set_yticks([])  # 隐藏y轴刻度
        inset_ax.set_xlabel("")  # 去掉x轴标签
        inset_ax.set_ylabel("")  # 去掉y轴标签

        # 5. 附图样式调整（简洁为主，匹配主图）
        inset_ax.set_xlim(scs_lon_min, scs_lon_max)
        inset_ax.set_ylim(scs_lat_min, scs_lat_max)

        # 边界
        if show_edge:
            self.plot_china_province_edge(ax=inset_ax)

        return inset_ax

    def plot_world_basemap(self, ax: axes.Axes | None = None):
        """显示世界底图"""
        if ax is None:
            _, ax = plt.subplots(figsize=(8, 4))
        self.world_geojson.plot(
            ax=ax,
            color="white",
            edgecolor="1",
        )
        ax.set_xlim(72, 137)
        ax.set_ylim(16, 55)
        ax.grid(False)
        ax.set_facecolor("#BDE7FE")
        return ax

    def plot_china_basemap(self, ax: axes.Axes | None = None):
        """显示研究区"""
        ax = self.plot_world_basemap(ax=ax)
        self.china_geojson.plot(ax=ax, color='#eee', edgecolor='black')
        # ax.set_axis_off()  # 可选：关闭坐标轴显示
        ax.grid(False)
        return ax

    def plot_china_province_edge(self, ax: axes.Axes):
        self.china_geojson.plot(
            ax=ax,
            facecolor='none',
            edgecolor="black",
            alpha=1,
            linewidth=0.1,
        )

    def plot_china_scatter(
        self,
        df: pd.DataFrame,
        value_column: str,
        ax: axes.Axes | None = None,
        cmap: str | mcolors.LinearSegmentedColormap = 'green',
        s: int | float | None = None,
        colorbar_label: str = "",
        vmax: float | int | None = None,
        vmin: float | int | None = None,
        show_attach_fig: bool = True,
        show_edge: bool = True,
    ):
        """画研究区 底图 + 散点图

        Args:
            df (pd.DataFrame): _description_
            value_column (str): _description_
            ax (axes.Axes | None, optional): _description_. Defaults to None.
            cmap (str): _description_. Defaults to 'green'.
            s (int | float | None, optional): 点大小. Defaults to None.
            colorbar_label (str, optional): 色条带的label. Defaults to default_cmap.
            vmax (float | int | None, optional): 显示的最大值. Defaults to None.
            vmin (float | int | None, optional): 显示的最小值. Defaults to None.
            show_attach_fig (bool): 是否显示附图
            show_edge (bool): 是否显示边界
        """
        ax = self.plot_china_basemap(ax=ax)
        if cmap == 'green':
            cmap = default_cmap.green
        vmax = df[value_column].max() if vmax is None else vmax
        sc = ax.scatter(
            df.lon, df.lat, c=df[value_column], cmap=cmap, vmin=vmin, vmax=vmax, s=s
        )
        cbar = plt.colorbar(sc, ax=ax, orientation="vertical")
        cbar.set_label(colorbar_label)

        if show_edge:
            self.plot_china_province_edge(ax=ax)

        if show_attach_fig:
            # 调用函数添加附图
            self._add_south_china_sea_inset(
                ax=ax,
                df=df,
                value_column=value_column,
                cmap=cmap,
                vmin=vmin,
                vmax=vmax,
                s=None if s is None else s / 100,
                show_edge=show_edge,
            )
        return ax

    def plot_density_scatter(
        self,
        x: Sequence[float],
        y: Sequence[float],
        ax: axes.Axes | None = None,
        axes_max: int | None = None,
        grid_size: int = 1,
        s: float | int | None = None,
        xlabel: str = "",
        ylabel: str = "",
        order: str = "",
        vmax: float | int | None = None,
        colorbar_tick_power_10n: bool = True,
    ):
        """_summary_

        Args:
                x (Sequence[float]): _description_
                y (Sequence[float]): _description_
                ax (Axes| Nonw): ax
                axes_max (int | None, optional): 刻度最大值. Defaults to None.
                grid_size (int, optional): 聚合的网格大小. Defaults to 1.
                s (float | int | None, optional): 散点大小. Defaults to None.
                xlabel (str, optional): _description_. Defaults to ''.
                ylabel (str, optional): _description_. Defaults to ''.
                order (str, optional): 右下角的序号. Defaults to ''.
                vmax
                axes_max
                colorbar_tick_power_10n (bool): 色条带刻度是否用科学计数法，默认True

        Returns:
                _type_: ax
        """
        point_num = len(x)
        # 1. 定义网格边界。为了确保所有数据点都被包含，右边界多加一个grid_size
        max_x_y = axes_max or int(max(max(x), max(y)))
        x_bins = np.arange(0, max_x_y + grid_size, grid_size)
        y_bins = np.arange(0, max_x_y + grid_size, grid_size)
        # 2. 使用 numpy.histogram2d 统计每个网格内的点数量
        counts, _, _ = np.histogram2d(x, y, bins=[x_bins, y_bins])
        counts = counts.T
        # 3. 准备热力图的坐标中心
        x_centers = (x_bins[:-1] + x_bins[1:]) / 2
        y_centers = (y_bins[:-1] + y_bins[1:]) / 2
        # 创建网格坐标
        X, Y = np.meshgrid(x_centers, y_centers)
        # 将 counts 展平以匹配散点图的数据格式
        Z = counts.ravel()
        # 4. 开始可视化
        if ax is None:
            _, ax = plt.subplots()
        # 使用散点图，颜色表示密度（点数）
        # 过滤掉点数为0的网格，避免在图上显示
        mask = Z > 0
        scatter = ax.scatter(
            X.ravel()[mask],
            Y.ravel()[mask],
            c=Z[mask],
            norm=(
                mcolors.LogNorm(vmin=10**0, vmax=vmax)
                if colorbar_tick_power_10n
                else None
            ),
            cmap="viridis",
            vmax=None if colorbar_tick_power_10n else vmax,
            s=s,
        )
        cbar = plt.colorbar(scatter, ax=ax)

        def log_tick_formatter(val, pos=None):
            return f"$10^{{{int(np.log10(val))}}}$"

        # 设置 colorbar 的刻度位置和格式
        if colorbar_tick_power_10n:
            cbar.ax.yaxis.set_major_formatter(ticker.FuncFormatter(log_tick_formatter))
            # 指定 colorbar 刻度的具体位置
            cbar.ax.yaxis.set_major_locator(
                ticker.FixedLocator([10**i for i in range(7)])
            )  # 从 10^0 到 10^6

        # 使用ax设置坐标轴范围、标签和标题
        ax.set_xlim(0, max_x_y)
        ax.set_ylim(0, max_x_y)
        # 指标
        MSE = mean_squared_error(x, y)
        RMSE = np.power(MSE, 0.5)
        R2 = pearsonr(x, y).statistic  # type: ignore
        MAE = mean_absolute_error(x, y)
        slope, intercept, r_value, p_value, std_err = stats.linregress(x, y)
        k = cast(float, slope)
        b = cast(float, intercept)

        xx = np.arange(0, max_x_y, grid_size)
        yy = [i * k + b for i in xx]
        # 直线
        ax.plot(
            xx,
            yy,
            "red",
            lw=1.5,
            label=f"$y={round(k, 2)}x{'+' if b > 0 else ''}{round(b, 2)}$",
        )
        ax.plot(
            [0, max_x_y], [0, max_x_y], "black", lw=1.5, linestyle="--", label="$y=x$"
        )
        # 指标
        ax.text(
            max_x_y * 0.05,
            max_x_y * 0.92,
            "$N=%d$" % point_num,
            horizontalalignment="left",
            fontsize=12,
        )
        ax.text(
            max_x_y * 0.05,
            max_x_y * 0.86,
            "$R^2=%.2f$" % R2,
            horizontalalignment="left",
            fontsize=12,
        )
        ax.text(
            max_x_y * 0.05,
            max_x_y * 0.80,
            "$MAE=%.2f$" % MAE,
            horizontalalignment="left",
            fontsize=12,
        )
        ax.text(
            max_x_y * 0.05,
            max_x_y * 0.74,
            "$RMSE=%.2f$" % RMSE,
            horizontalalignment="left",
            fontsize=12,
        )
        ax.set_xlabel(xlabel, fontsize=12)
        ax.set_ylabel(ylabel, fontsize=12)
        ax.tick_params(labelsize=12)
        # 序号
        if order:
            ax.text(max_x_y * 0.9, max_x_y * 0.05, order, fontsize=20)
        # colorbar的label
        ax.text(max_x_y * 1.03, max_x_y * 1.03, "Density", fontsize=12)
        ax.set_xticks(list(range(0, max_x_y, 20)))
        ax.set_yticks(list(range(0, max_x_y, 20)))
        ax.legend(
            loc="upper left", bbox_to_anchor=(0.35, 1), frameon=False, fontsize=12
        )

        return ax

    def plot_normal_scatter(
        self,
        x: Sequence[float],
        y: Sequence[float],
        ax: axes.Axes | None = None,
        axes_max: int | None = None,
        s: float | int | None = None,
        xlabel: str = "",
        ylabel: str = "",
        order: str = "",
        vmax: float | int | None = None,
    ):
        """_summary_

        Args:
                x (Sequence[float]): _description_
                y (Sequence[float]): _description_
                ax (Axes| Nonw): ax
                axes_max (int | None, optional): 刻度最大值. Defaults to None.
                s (float | int | None, optional): 散点大小. Defaults to None.
                xlabel (str, optional): _description_. Defaults to ''.
                ylabel (str, optional): _description_. Defaults to ''.
                order (str, optional): 右下角的序号. Defaults to ''.
                vmax
                axes_max

        Returns:
                _type_: ax
        """
        point_num = len(x)
        # 1. 定义网格边界。为了确保所有数据点都被包含，右边界多加一个grid_size
        max_x_y = axes_max or int(max(max(x), max(y)))
        # 4. 开始可视化
        if ax is None:
            _, ax = plt.subplots()
        scatter = ax.scatter(
            x,
            y,
            norm=mcolors.LogNorm(vmin=10**0, vmax=vmax),
            cmap="viridis",
            s=s,
        )
        # 使用ax设置坐标轴范围、标签和标题
        ax.set_xlim(0, max_x_y)
        ax.set_ylim(0, max_x_y)
        # 指标
        MSE = mean_squared_error(x, y)
        RMSE = np.power(MSE, 0.5)
        R2 = pearsonr(x, y).statistic  # type: ignore
        MAE = mean_absolute_error(x, y)
        slope, intercept, r_value, p_value, std_err = stats.linregress(x, y)
        k = cast(float, slope)
        b = cast(float, intercept)

        xx = np.arange(0, max_x_y, 1)
        yy = [i * k + b for i in xx]
        # 直线
        ax.plot(
            xx,
            yy,
            "red",
            lw=1.5,
            label=f"$y={round(k, 2)}x{'+' if b > 0 else ''}{round(b, 2)}$",
        )
        ax.plot(
            [0, max_x_y], [0, max_x_y], "black", lw=1.5, linestyle="--", label="$y=x$"
        )
        # 指标
        ax.text(
            max_x_y * 0.05,
            max_x_y * 0.92,
            "$N=%d$" % point_num,
            horizontalalignment="left",
            fontsize=12,
        )
        ax.text(
            max_x_y * 0.05,
            max_x_y * 0.86,
            "$R^2=%.2f$" % R2,
            horizontalalignment="left",
            fontsize=12,
        )
        ax.text(
            max_x_y * 0.05,
            max_x_y * 0.80,
            "$MAE=%.2f$" % MAE,
            horizontalalignment="left",
            fontsize=12,
        )
        ax.text(
            max_x_y * 0.05,
            max_x_y * 0.74,
            "$RMSE=%.2f$" % RMSE,
            horizontalalignment="left",
            fontsize=12,
        )
        ax.set_xlabel(xlabel, fontsize=12)
        ax.set_ylabel(ylabel, fontsize=12)
        ax.tick_params(labelsize=12)
        # 序号
        if order:
            ax.text(max_x_y * 0.9, max_x_y * 0.05, order, fontsize=20)
        ax.set_xticks(list(range(0, max_x_y, 20)))
        ax.set_yticks(list(range(0, max_x_y, 20)))
        ax.legend(
            loc="upper left", bbox_to_anchor=(0.35, 1), frameon=False, fontsize=12
        )

        return ax


plot_util = PlotUtil()
