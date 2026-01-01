import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { HeatmapLayer, PolygonLayer, RasterLayer, Scene } from '@antv/l7'

export const useMapStore = defineStore('map', () => {
    const scene = ref<Scene>()
    const loading = ref(false)
    /** 显示est_no2 tif数据的图层 */
    const estNo2Layer = ref<RasterLayer | null>()
    /** 显示省边界的图层 */
    const provinceEdgeLayer = ref<PolygonLayer | null>()
    /** 显示cnemc_no2 的图层 */
    const cnemcLayer = ref<HeatmapLayer | null>()
    return { scene, loading, estNo2Layer, provinceEdgeLayer, cnemcLayer }
})
