<template>
    <n-spin :show="loading" description="加载中...">
        <div class="container">
            <map-tools></map-tools>
            <div id="map" ref="mapEl"></div>
        </div>
    </n-spin>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { Scene, RasterLayer, Source } from '@antv/l7';
import { useMapStore } from '@/stores/map';
import { Map as L7Map } from '@antv/l7-maps';
import * as GeoTIFF from 'geotiff'
import { useMenuStore } from '@/stores/menu';
import { ChinaRect, raw_base_url } from '@/constants';
import MapTools from './map-tools/index.vue';

defineOptions({
    name: 'MapRender'
})
const mapEL = useTemplateRef('mapEl')
const { scene, loading, curDataLayer, curData, selectedBandIdx, curDataInfo } = storeToRefs(useMapStore())
const { removeCurDataLayer } = useMapStore()
const { selectedMenuOption } = storeToRefs(useMenuStore())
const message = useMessage()

/** 根据选中的波段更新图层 */
const updateSelectBand = () => {
    curDataLayer.value?.setSource(new Source(curData.value[selectedBandIdx.value], {
        parser: {
            type: 'raster',
            width: curDataInfo.value.width,
            height: curDataInfo.value.height,
            extent: [ChinaRect.minlon, ChinaRect.minlat, ChinaRect.maxlon, ChinaRect.maxlat],
        }
    }))
}
watch(selectedBandIdx, () => {
    updateSelectBand()
})

/** 请求tif，解析，添加到scene */
const handleTif = async () => {
    if (!scene.value) return
    const path = selectedMenuOption.value?.key
    if (!path) return
    try {
        loading.value = true
        const response = await fetch(`${raw_base_url}/${path}`);
        const arrayBuffer = await response.arrayBuffer();
        const tiff = await GeoTIFF.fromArrayBuffer(arrayBuffer);
        const image = await tiff.getImage();
        const width = image.getWidth();
        const height = image.getHeight();
        curDataInfo.value = {
            width, height
        }
        const tiffData = (await image.readRasters())
        curData.value = tiffData as Float64Array[]
        // 移除旧的
        removeCurDataLayer()
        // 添加新的
        curDataLayer.value = new RasterLayer({ autoFit: true })
        // 更新图层数据
        updateSelectBand()
        // 更新图层样式
        curDataLayer.value.style({
            opacity: 1,
            clampLow: false,
            clampHigh: false,
            domain: [0, 100],
            rampColors: {
                type: 'linear',
                colors: ['#d7191c', '#fdae61', '#ffffbf', '#a6d96a'].reverse(),
                positions: [0, 25, 50, 75, 100],
            },
        })
        scene.value?.addLayer(curDataLayer.value)
    } catch {
        message.error(`${path}加载失败，数据不存在或出现错误，请验证数据是否存在或重试或联系作者`, { keepAliveOnHover: true })
    } finally {
        loading.value = false
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
        const layer = new RasterLayer();
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
        scene.value?.addLayer(layer);
        handleTif()
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