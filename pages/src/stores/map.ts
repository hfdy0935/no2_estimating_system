import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { HeatmapLayer, PolygonLayer, RasterLayer, Scene } from '@antv/l7'

export const useMapStore = defineStore('map', () => {
    const scene = ref<Scene>()
    const loading = ref(false)
    /** 底图图层 */
    const basemapLayer = ref<RasterLayer | null>()
    /** 显示est_no2 tif数据的图层 */
    const estNo2Layer = ref<RasterLayer | null>()
    /** 显示省边界的图层 */
    const provinceLayer = ref<PolygonLayer | null>()
    /** 显示cnemc_no2 的图层 */
    const cnemcLayer = ref<HeatmapLayer | null>()
    /** cnemc数据 */
    const cnemcData = ref<Record<string, object[]>>({})
    return { scene, loading, basemapLayer, estNo2Layer, provinceLayer, cnemcLayer, cnemcData }
})
