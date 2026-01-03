import { defineStore, storeToRefs } from 'pinia'
import { LayerPopup, PointLayer, type PolygonLayer, type RasterLayer, type Scene } from '@antv/l7'
import { MenuType, useMenuStore } from './menu'
import { fetchAndParseParquet } from '@/utils'
import type { MessageApiInjection } from 'naive-ui/es/message/src/MessageProvider'
import type { IMapCnemcItem, ITableCnemcItem } from '@/types'
import { ColorbarConfig } from '@/constants'

export const useMapStore = defineStore('map', () => {
    const scene = shallowRef<Scene>()
    const loading = ref<number[]>([])
    /** 底图图层 */
    const basemapLayer = shallowRef<RasterLayer | null>()
    /** 显示est_no2 tif数据的图层 */
    const estNo2Layer = shallowRef<RasterLayer | null>()
    /** 显示省边界的图层 */
    const provinceLayer = shallowRef<PolygonLayer | null>()
    /** 显示cnemc_no2 的图层 */
    const cnemcLayer = shallowRef<PointLayer | null>()
    /** cnemc数据 */
    const cnemcData = shallowRef<Record<string, object[]>>({})
    /** 当前csv中要展示的cnemc点的数据，每天/每小时，每个点都要展示，不取均值 */
    const tableCnemcData = computed<ITableCnemcItem[]>(() => {
        if (selectedMenuType.value === MenuType.DAILY) {
            let arr: Omit<ITableCnemcItem, 'index'>[] = []
            for (const el of Object.values(cnemcData.value)) {
                arr = arr.concat(el as Omit<ITableCnemcItem, 'index'>[])
            }
            return arr.map((el, i) => ({ ...el, index: i + 1 }))
        }
        const ymdh = selectedFilename.value.slice(0, 10)
        return (cnemcData.value[ymdh]?.map((el, i) => ({ ...el, index: i + 1 })) ?? []) as ITableCnemcItem[]
    })
    /** 当前地图上要展示的cnemc的数据，每天的话要取均值  */
    const mapCnemcData = computed<IMapCnemcItem[]>(() => {
        // 日均值
        if (selectedMenuType.value === MenuType.DAILY) {
            // 按照经纬度分组求均值
            const map = new Map<string, ITableCnemcItem[]>()
            for (const el of tableCnemcData.value) {
                const key = `${el.lon}-${el.lat}`
                if (!map.has(key)) map.set(key, [])
                map.get(key)!.push(el)
            }
            const ans: IMapCnemcItem[] = []
            for (const el of map.values()) {
                const mean = el.reduce((p: number, c: ITableCnemcItem) => p + c.cnemc_no2, 0) / el.length
                ans.push({
                    lon: el[0]!.lon,
                    lat: el[0]!.lat,
                    cnemc_no2: mean,
                    area: el[0]!.area,
                    station_code: el[0]!.station_code,
                    position_name: el[0]!.position_name,
                    quality: [...new Set(el.map(e => e.quality))]
                })
            }
            return ans
        }
        // 选中的小时的具体数值
        return tableCnemcData.value.map(({ lon, lat, cnemc_no2, area, station_code, position_name, quality }) => ({ lon, lat, cnemc_no2, area, station_code, position_name, quality: [quality] }))
    })
    const { selectedFilename, selectedMenuType } = storeToRefs(useMenuStore())
    const fetchCnemc = async (message?: MessageApiInjection) => {
        const year = selectedFilename.value.slice(0, 4)
        const ymd = selectedFilename.value.slice(0, 8)
        const cnemcPath = `shared/data_source/cnemc/${year}/${ymd}.parquet`
        try {
            loading.value.push(0)
            cnemcData.value = await fetchAndParseParquet(cnemcPath)
        } catch {
            message?.error(`${cnemcPath}加载失败，数据不存在或出现错误，请验证数据是否存在或重试或联系作者`, { keepAliveOnHover: true })
        } finally {
            loading.value.pop()
        }
    }
    const handleCnemcLayer = async () => {
        if (!cnemcLayer.value) {
            cnemcLayer.value = new PointLayer({ zIndex: 3 })
            cnemcLayer.value.shape('circle')
                .source(mapCnemcData.value, {
                    parser: {
                        type: 'json',
                        x: 'lon',
                        y: 'lat'
                    }
                }).color(
                    'cnemc_no2',
                    ColorbarConfig.colors
                ).style({
                    stroke: '#000',
                    strokeWidth: 0.5,
                    domain: ColorbarConfig.domain,
                    rampColors: {
                        type: 'linear',
                        colors: ColorbarConfig.colors,
                        positions: ColorbarConfig.positions,
                    },
                }).size(3)
            // 悬浮提示
            const layerPopup = new LayerPopup({
                items: [
                    {
                        layer: cnemcLayer.value,
                        fields: [
                            {
                                field: '位置',
                                formatValue: (_, { lon, lat }) => `${lon}°E &nbsp; ${lat}°N`
                            },
                            {
                                field: 'NO2',
                                formatValue: (_, { cnemc_no2 }) => `${cnemc_no2.toFixed(2)} ug/m^3`
                            },
                            {
                                field: '地区',
                                formatValue: (_, { area }) => `${area}`
                            },
                            {
                                field: '站点',
                                formatValue: (_, { position_name, station_code }) => `${station_code} &nbsp; ${position_name}`
                            },
                            {
                                field: '质量',
                                formatValue: (_, { quality }) => `${quality}`
                            },
                        ],
                    },
                ],
                trigger: 'hover',
            });
            scene.value?.addPopup(layerPopup);
            scene.value?.addLayer(cnemcLayer.value)
        } else cnemcLayer.value.setData(mapCnemcData.value)
    }
    return { scene, loading, basemapLayer, estNo2Layer, provinceLayer, cnemcLayer, cnemcData, tableCnemcData, fetchCnemc, handleCnemcLayer }
})
