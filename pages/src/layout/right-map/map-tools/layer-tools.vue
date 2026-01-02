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
import { useMenuStore } from '@/stores/menu';
import { storeToRefs } from 'pinia';
import { PolygonLayer } from '@antv/l7';
import { useMapStore } from '@/stores/map';

const message = useMessage()

const { selectedMenuOption } = storeToRefs(useMenuStore())
const { scene, loading, provinceLayer, cnemcLayer } = storeToRefs(useMapStore())
const { handleCnemcLayer, fetchCnemc } = useMapStore()
// region显示cnemc
const showCnemc = ref(false)

/** 监听切换数据 */
watch([selectedMenuOption], () => {
    fetchCnemc(message)
    if (showCnemc.value) {
        handleCnemcLayer()
    }
})

/** 监听cnemc是否显示开关 */
watch(showCnemc, val => {
    if (val) {
        handleCnemcLayer()
        cnemcLayer.value?.show()
    }
    else cnemcLayer.value?.hide()
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
