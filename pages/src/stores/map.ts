import { defineStore, storeToRefs } from 'pinia'
import { HeatmapLayer, type PolygonLayer, type RasterLayer, type Scene } from '@antv/l7'
import { MenuType, useMenuStore } from './menu'
import { fetchAndParseParquet } from '@/utils'
import type { MessageApiInjection } from 'naive-ui/es/message/src/MessageProvider'
import type { ICnemcItem } from '@/layout/right-map/map-tools/types'

export const useMapStore = defineStore('map', () => {
    const scene = shallowRef<Scene>()
    const loading = shallowRef(false)
    /** 底图图层 */
    const basemapLayer = shallowRef<RasterLayer | null>()
    /** 显示est_no2 tif数据的图层 */
    const estNo2Layer = shallowRef<RasterLayer | null>()
    /** 显示省边界的图层 */
    const provinceLayer = shallowRef<PolygonLayer | null>()
    /** 显示cnemc_no2 的图层 */
    const cnemcLayer = shallowRef<HeatmapLayer | null>()
    /** cnemc数据 */
    const cnemcData = shallowRef<Record<string, object[]>>({})
    /** 当前要展示的cnemc数据 */
    const showedCnemcData = computed<ICnemcItem[]>(() => {
        let arr: Omit<ICnemcItem, 'index'>[] = []
        for (const el of Object.values(cnemcData.value)) {
            arr = arr.concat(el as Omit<ICnemcItem, 'index'>[])
        }
        // 选中的是每天
        if (selectedMenuType.value === MenuType.DAILY) return arr.map((el, i) => ({ ...el, index: i + 1 }))
        const ymdh = selectedFilename.value.slice(0, 10)
        return cnemcData.value[ymdh]!.map((el, i) => ({ ...el, index: i + 1 })) as ICnemcItem[]
    })
    const { selectedFilename, selectedMenuType } = storeToRefs(useMenuStore())
    const fetchCnemc = async (message?: MessageApiInjection) => {
        const year = selectedFilename.value.slice(0, 4)
        const ymd = selectedFilename.value.slice(0, 8)
        const cnemcPath = `shared/data_source/cnemc/${year}/${ymd}.parquet`
        try {
            loading.value = true
            cnemcData.value = await fetchAndParseParquet(cnemcPath)
        } catch {
            message?.error(`${cnemcPath}加载失败，数据不存在或出现错误，请验证数据是否存在或重试或联系作者`, { keepAliveOnHover: true })
        } finally {
            loading.value = false
        }
    }
    const handleCnemcLayer = async () => {
        loading.value = true
        if (!cnemcLayer.value) {
            //  TODO需要看一下单位怎么统一
            cnemcLayer.value = new HeatmapLayer({ zIndex: 3 }).shape('circle')
            cnemcLayer.value.source(showedCnemcData.value, {
                parser: {
                    type: 'json',
                    x: 'lon',
                    y: 'lat'
                },
                transforms: [
                    {
                        type: 'grid',
                        size: 20000,
                        field: 'cnemc_no2'
                    }
                ]
            }).color(
                'count',
                ['#d7191c', '#fdae61', '#ffffbf', '#a6d96a'].reverse()
            )
            scene.value?.addLayer(cnemcLayer.value)
        } else cnemcLayer.value.setData(showedCnemcData.value)
        loading.value = false
    }
    return { scene, loading, basemapLayer, estNo2Layer, provinceLayer, cnemcLayer, cnemcData, showedCnemcData, fetchCnemc, handleCnemcLayer }
})
