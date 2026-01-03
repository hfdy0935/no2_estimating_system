<template>
    <n-spin :show="loading.length > 0" description="加载中...">
        <div class="container">
            <map-legend></map-legend>
            <map-tools></map-tools>
            <div id="map" ref="mapEl"></div>
        </div>
    </n-spin>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { Scene, RasterLayer, Zoom, Scale } from '@antv/l7';
import { useMapStore } from '@/stores/map';
import { Map as L7Map } from '@antv/l7-maps';
import * as GeoTIFF from 'geotiff'
import { useMenuStore } from '@/stores/menu';
import { ChinaRect, ColorbarConfig, raw_base_url } from '@/constants';
import MapTools from './map-tools/index.vue';
import MapLegend from './map-legend.vue';


defineOptions({
    name: 'MapRender'
})
const mapEL = useTemplateRef('mapEl')
const { scene, loading, basemapLayer, estNo2Layer } = storeToRefs(useMapStore())
const { selectedMenuOption, selectedMenuType } = storeToRefs(useMenuStore())
const message = useMessage()

/** 请求tif，解析，添加到scene */
const handleTif = async () => {
    if (!scene.value) return
    const path = selectedMenuOption.value?.key
    if (!path) return
    try {
        loading.value.push(0)
        const response = await fetch(`${raw_base_url}/shared/estimate/${selectedMenuType.value}_tif/${path}`);
        const arrayBuffer = await response.arrayBuffer();
        const tiff = await GeoTIFF.fromArrayBuffer(arrayBuffer);
        const image = await tiff.getImage();
        const width = image.getWidth();
        const height = image.getHeight();
        const tiffData = (await image.readRasters())
        // 如果没有，就先创建
        if (!estNo2Layer.value) {
            estNo2Layer.value = new RasterLayer({ zIndex: 1, autoFit: true })
            estNo2Layer.value.style({
                domain: ColorbarConfig.domain,
                rampColors: {
                    type: 'linear',
                    colors: ColorbarConfig.colors,
                    positions: ColorbarConfig.positions,
                },
            })
            // 设置图层数据，默认只有一个波段
            estNo2Layer.value.source(tiffData[0], {
                parser: {
                    type: 'raster',
                    width,
                    height,
                    extent: [ChinaRect.minlon, ChinaRect.minlat, ChinaRect.maxlon, ChinaRect.maxlat],
                }
            })
            scene.value?.addLayer(estNo2Layer.value)
        } else estNo2Layer.value.setData(tiffData[0])
    } catch {
        message.error(`${path}加载失败，数据不存在或出现错误，请验证数据是否存在或重试或联系作者`, { keepAliveOnHover: true })
    } finally {
        loading.value.pop()
    }
}

watch(selectedMenuOption, () => {
    handleTif()
})

/** 加载地图 */
watchEffect(() => {
    if (!mapEL.value) return
    scene.value = new Scene({
        id: mapEL.value,
        map: new L7Map({
            zoom: 3.3,
            minZoom: 0,
            maxZoom: 18,
            center: [120, 32]
        }),
        logoVisible: false
    });
    scene.value.on('loaded', () => {
        const layer = new RasterLayer({
            zIndex: 0
        });
        layer.source(
            'https://webrd0{1-3}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
            {
                parser: {
                    type: 'rasterTile',
                    tileSize: 256,
                    minZoom: 2,
                    maxZoom: 18,
                },
            },
        );
        basemapLayer.value = layer
        if (!scene.value) return
        scene.value.addLayer(layer)
        // 控件
        scene.value.addControl(new Scale({
            position: 'leftbottom'
        }))
        scene.value.addControl(new Zoom({
            position: 'leftcenter',
        }))
    })
})
</script>

<style scoped>
.container {
    margin-left: 12px;
    overflow: hidden;

}

#map {
    width: 100vw;
    height: 100vh;
    position: relative;
}
</style>