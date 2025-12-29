<template>
    <n-popover trigger="hover" placement="right">
        <template #trigger>
            <n-float-button>
                <n-icon color="deepskyblue">
                    <img src="/cnemc.png" alt="" width="20">
                </n-icon>
            </n-float-button>
        </template>
        <n-card style="width: 300px;">
            <n-alert v-if="!selectedMenuOption" title="" type="warning">
                请先在左侧菜单选择要展示的数据
            </n-alert>
            <n-form v-else label-placement="left">
                <n-form-item label="显示CNEMC">
                    <n-switch v-model:value="showCnemc"></n-switch>
                </n-form-item>
            </n-form>
        </n-card>
    </n-popover>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/stores/menu';
import { storeToRefs } from 'pinia';
import { HeatmapLayer, Source, type ILayer } from '@antv/l7';
import { useMapStore } from '@/stores/map';
import { fetchAndParseParquet } from '@/utils';

const message = useMessage()
/** 显示cnemc的开关 */
const showCnemc = ref(false)
const { selectedMenuOption, selectedFilename } = storeToRefs(useMenuStore())
const { scene, loading, selectedBandIdx } = storeToRefs(useMapStore())
const cnemcData = ref<object[]>([])
const selectedData = ref<object>([])
const cnemcLayer = ref<ILayer>()

/** 更新图层数据为最新选中时间 */
const updateLayerData = (layer?: ILayer) => {
    selectedData.value = cnemcData.value[selectedBandIdx.value]!
    layer?.setSource(new Source(selectedData.value, {
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
    }))
}

/** 移除当前图层 */
const removeCnemcLayer = () => {
    if (cnemcLayer.value) {
        scene.value?.removeLayer(cnemcLayer.value)
    }
}
/** 选中波段改变时修改图层数据 */
watch(selectedBandIdx, () => updateLayerData(cnemcLayer.value))
/** 切换数据时且展示cnemc时，请求parquet，创建新图层，添加数据，移除原图层，添加到scene */
const handleParquet = async (path: string) => {
    cnemcData.value = await fetchAndParseParquet(path as string)
    // 新图层
    const layer = new HeatmapLayer({}).shape('circle')
        .color(
            'count',
            [
                '#8C1EB2',
                '#8C1EB2',
                '#DA05AA',
                '#F0051A',
                '#FF2A3C',
                '#FF4818',
                '#FF4818',
                '#FF8B18',
                '#F77B00',
                '#ED9909',
                '#ECC357',
                '#EDE59C',
            ].reverse(),
        )
    updateLayerData(layer)
    // 移除旧图层
    removeCnemcLayer()
    // 添加新图层
    scene.value?.addLayer(layer)
    cnemcLayer.value = layer
}


const fetchCNEMC = async () => {
    const path = selectedMenuOption.value?.key
    const year = selectedFilename.value.split('.')[0]?.slice(0, 4)
    const cnemcPath = `shared/data_source/cnemc/${year}/${selectedFilename.value}`
    if (!path) return
    try {
        loading.value = true
        await handleParquet(cnemcPath)
    } catch {
        message.error(`${cnemcPath}加载失败，数据不存在或出现错误，请验证数据是否存在或重试或联系作者`, { keepAliveOnHover: true })
        showCnemc.value = false
    } finally {
        loading.value = false
    }
}

watch([selectedMenuOption], () => {
    if (!showCnemc.value) return
    fetchCNEMC()
}, {
    immediate: true
})


watch(showCnemc, val => {
    // 关闭
    if (!val) {
        // 移除图层
        removeCnemcLayer()
    } else {
        // 如果之前有图层，只添加数据
        if (cnemcLayer.value) {
            updateLayerData(cnemcLayer.value)
        } else {
            // 之前没图层，需要请求数据
            fetchCNEMC()
        }
    }
})

</script>
