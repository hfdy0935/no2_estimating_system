<template>
    <n-spin :show="loading">
        <div class="container">
            <!-- <data-extract-board></data-extract-board> -->
            <div id="map" ref="mapEl"></div>
        </div>
    </n-spin>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { Scene, RasterLayer, PolygonLayer } from '@antv/l7';
import { useMapStore } from '@/stores/map';
import { Map as L7Map } from '@antv/l7-maps';
import { raw_base_url } from '@/utils';
import * as GeoTIFF from 'geotiff'
import { useMenuStore } from '@/stores/menu';

const mapEL = useTemplateRef('mapEl')
const { scene, loading, curDataLayer, columns } = storeToRefs(useMapStore())
const { removeCurDataLayer } = useMapStore()
const { selectedMenuOption } = storeToRefs(useMenuStore())

/** 请求tif，解析，添加到scene */
const handleTif = async () => {
    if (!scene.value) return
    const path = selectedMenuOption.value?.key
    if (!path) return

    const response = await fetch(`${raw_base_url}/${path}`);
    const arrayBuffer = await response.arrayBuffer();
    const tiff = await GeoTIFF.fromArrayBuffer(arrayBuffer);
    const image = await tiff.getImage();
    const width = image.getWidth();
    const height = image.getHeight();
    const tiffData = (await image.readRasters())
    // data
    const layer = new RasterLayer({
        autoFit: true,
    });
    layer.source(tiffData[0], {
        parser: {
            type: 'raster',
            width: width,
            height: height,
            extent: [72, -1, 137, 55],
        },
    }).style({
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
    removeCurDataLayer()
    scene.value?.addLayer(layer)
    curDataLayer.value = layer
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
    });

})
</script>

<style scoped>
.container {
    margin-left: 12px;
    overflow: hiden;
}

#map {
    width: 100vw;
    height: 100vh;
}
</style>