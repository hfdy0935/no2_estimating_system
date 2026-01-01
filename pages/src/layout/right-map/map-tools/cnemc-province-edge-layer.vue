<template>
    <n-popover trigger="hover" placement="right">
        <template #trigger>
            <n-float-button>
                <n-icon color="deepskyblue">
                    <img src="/layers.svg" alt="" width="20">
                </n-icon>
            </n-float-button>
        </template>
        <n-card style="width: 300px" :bordered="false" title="图层管理">
            <n-alert v-if="!selectedMenuOption" title="" type="warning">
                请选择要展示的数据
            </n-alert>
            <template v-else>
                <n-form label-placement="left">
                    <n-form-item label="CNEMC&nbsp;&nbsp;">
                        <n-switch v-model:value="showCnemc"></n-switch>
                    </n-form-item>
                </n-form>
                <n-form label-placement="left">
                    <n-form-item label="省边界  &emsp;">
                        <n-switch v-model:value="showProvinceEdge"></n-switch>
                    </n-form-item>
                </n-form>
            </template>
        </n-card>
    </n-popover>
</template>

<script setup lang="ts">
import { MenuType, useMenuStore } from '@/stores/menu';
import { storeToRefs } from 'pinia';
import { HeatmapLayer, PolygonLayer } from '@antv/l7';
import { useMapStore } from '@/stores/map';
import { fetchAndParseParquet } from '@/utils';

const message = useMessage()

const { selectedMenuOption, selectedMenuType, selectedFilename } = storeToRefs(useMenuStore())
const { scene, loading, provinceLayer, cnemcLayer, cnemcData } = storeToRefs(useMapStore())

// region显示cnemc
const showCnemc = ref(false)

const handleCnemc = async () => {
    const year = selectedFilename.value.slice(0, 4)
    const ymd = selectedFilename.value.slice(0, 8)
    const maybeYmdh = selectedFilename.value.slice(0, 10)
    const cnemcPath = `shared/data_source/cnemc/${year}/${ymd}.parquet`
    try {
        loading.value = true
        const _data = await fetchAndParseParquet(cnemcPath)
        cnemcData.value = _data
        // 根据选中的是天还是小时
        const data = selectedMenuType.value === MenuType.DAILY ? [...Object.values(_data)] : _data[maybeYmdh]
        if (!cnemcLayer.value) {
            //  TODO需要看一下单位怎么统一
            cnemcLayer.value = new HeatmapLayer({ zIndex: 3 }).shape('circle')
            cnemcLayer.value.source(data, {
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
        } else cnemcLayer.value.setData(data)
        console.log(data)
    } catch {
        message.error(`${cnemcPath}加载失败，数据不存在或出现错误，请验证数据是否存在或重试或联系作者`, { keepAliveOnHover: true })
    } finally {
        loading.value = false
    }
}

const shouldReFetchCnemc = ref(false)
/** 监听切换数据 */
watch([selectedMenuOption], () => {
    // 如果不显示cnemc，则打开时需要重新请求否则和tif一起请求了
    if (!showCnemc.value) {
        shouldReFetchCnemc.value = true
        return
    }
    handleCnemc()
}, {
    immediate: true
})

/** 监听cnemc是否显示开关 */
watch(showCnemc, val => {
    if (val) {
        if (!cnemcLayer.value || shouldReFetchCnemc.value) {
            handleCnemc()
            shouldReFetchCnemc.value = false
        } else {
            cnemcLayer.value?.show()
        }
    }
    else cnemcLayer.value?.hide()
}, {
    immediate: true
})

// endregion

// region 省边界
const showProvinceEdge = ref(false)
watch(showProvinceEdge, async val => {
    if (!val) {
        provinceLayer.value?.hide()
        return
    }
    if (provinceLayer.value) {
        provinceLayer.value.show()
        return
    }
    try {
        loading.value = true
        const url1 =
            'https://mdn.alipayobjects.com/antforest/afts/file/A*vaL-R4SU18IAAAAAgCAAAAgAerd2AQ/original_2025-11-14.json';
        const result = await fetch(url1);
        const data = await result.json();
        provinceLayer.value = new PolygonLayer({
            autoFit: true, zIndex: 2
        })
        provinceLayer.value.source({
            type: 'FeatureCollection',
            features: data.features,
        })
            .color('#000000')
            .shape('line')
            .size(0.5)
            .style({
                opacity: 1,
            });
        scene.value?.addLayer(provinceLayer.value);
    } catch {
        message.error('获取省边界失败')
    } finally {
        loading.value = false
    }
})

// endregion
</script>
