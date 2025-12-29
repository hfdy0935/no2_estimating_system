import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ILayer, Scene } from '@antv/l7'

export const useMapStore = defineStore('map', () => {
    const scene = ref<Scene>()
    const loading = ref(false)
    /** 当前显示的数据图层，来自parquet或者tif，只有一个 */
    const curDataLayer = ref<ILayer>()
    /** 移除数据图层 */
    const removeCurDataLayer = () => {
        if (curDataLayer.value)
            scene.value?.removeLayer(curDataLayer.value)
    }
    // 打开的tif数据
    const curData = ref<Float64Array[]>([])
    // 数据宽高
    const curDataInfo = ref<{
        width: number, height: number
    }>({ width: 0, height: 0 })
    // 当前选中的波段索引
    const selectedBandIdx = ref<number>(0)
    return { scene, loading, curDataLayer, removeCurDataLayer, curData, curDataInfo, selectedBandIdx }
})
