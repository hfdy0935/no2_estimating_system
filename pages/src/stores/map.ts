import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ILayer, Scene } from '@antv/l7'

export const useMapStore = defineStore('map', () => {
    const scene = ref<Scene>()
    // 格式化后每个时间点的数据，{ymdh: data}
    const formattedData = ref<Record<string, object>>({})
    // 选中的时间
    const selectedTime = ref<string>('')
    const loading = ref(false)
    /** 当前显示的数据图层，来自parquet或者tif，只有一个 */
    const curDataLayer = ref<ILayer>()
    /** 移除数据图层 */
    const removeCurDataLayer = () => {
        if (curDataLayer.value)
            scene.value?.removeLayer(curDataLayer.value)
    }
    /** 数据列名 */
    const columns = ref<string[]>([])
    return { scene, formattedData, selectedTime, loading, curDataLayer, removeCurDataLayer, columns }
})
