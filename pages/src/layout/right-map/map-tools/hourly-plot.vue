<template>
    <div class="box">
        <n-empty v-if="Object.keys(data).length === 0" :show-icon="false" description="暂无数据"></n-empty>
        <template v-else>
            <div class="selector">
                <n-tabs type="segment" animated v-model:value="timeZoneType">
                    <n-tab-pane name="utc" tab="UTC"></n-tab-pane>
                    <n-tab-pane name="beijing" tab="北京时间"></n-tab-pane>
                </n-tabs>
            </div>
            <n-button type="info" @click="saveAsImage">保存为图片</n-button>
            <div ref="plot-container"></div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { Chart } from '@antv/g2';
import type { RawHourlyDataItem } from '@/types';
import { useMenuStore } from '@/stores/menu';
import { storeToRefs } from 'pinia';

/** {ymd[h]: RawHourlyDataItem} */
const { data } = defineProps<{ data: Record<string, object[]> }>()
const { selectedFilename } = storeToRefs(useMenuStore())
const message = useMessage()
/** utc or utc+8 */
const timeZoneType = ref<'utc' | 'beijing'>('utc')
/** 用于展示的每时数据 */
interface HourlyDataItem {
    hour: number
    source: '观测值' | '估算值'
    NO2: number
}
const hourlyData = computed<HourlyDataItem[]>(() => {
    const tmp = [...Object.values(data)].reduce((p, c) => [...p, ...c], []) as RawHourlyDataItem[]
    const res: HourlyDataItem[] = tmp.reduce((p, c) => {
        return [...p, { hour: +c.time.slice(-2), NO2: +c.est_no2.toFixed(2), source: '估算值' }, { hour: +c.time.slice(-2), NO2: +c.cnemc_no2.toFixed(2), source: '观测值' }]
    }, [] as HourlyDataItem[])
    if (timeZoneType.value === 'utc') return res
    res.forEach(el => {
        el.hour = (el.hour + 8) % 24
    })
    return [...res.slice(-16), ...res.slice(0, -16)]
})
const chart = shallowRef<Chart>()
const container = useTemplateRef('plot-container')
watch([container, hourlyData], ([container, hourlyData]) => {
    if (!container || !hourlyData.length) return
    chart.value?.destroy()
    chart.value = new Chart({
        container,
        autoFit: true,
        width: 560,
        height: 300
    })
    chart.value
        .data(hourlyData)
        .encode('x', 'hour')
        .encode('y', 'NO2')
        .encode('color', 'source')
        .axis('x', {
            line: true,
            title: '小时',
            lineStroke: 'black',
            tickStroke: 'black',
            labelStroke: 'black',
            titleFontSize: 16,
            labelFontSize: 14
        }).axis(
            'y', {
            line: true,
            title: 'NO2 (ug/m^3)',
            lineStroke: 'black',
            tickStroke: 'black',
            labelStroke: 'black',
            titleFontSize: 16,
            labelFontSize: 14
        }).scale('y', {
            domain: [0, 60]
        })
    chart.value.line().encode('shape', 'smooth').tooltip({
        title: d => `${d.hour}h`,
        items: [
            (d) => ({
                name: d.source,
                value: d.NO2.toFixed(2),
            })
        ],
    });
    chart.value.point().encode('shape', 'point').tooltip(false);
    chart.value.render()
})
const saveAsImage = async () => {
    const dataUrl = await chart.value?.getContext()?.canvas?.getContextService().toDataURL({
        type: 'image/png',
        encoderOptions: 0
    })
    if (!dataUrl) {
        message.error('保存失败')
        return
    }
    const a = document.createElement('a')
    a.href = dataUrl
    a.download = `${selectedFilename.value.slice(0, -4)}-hourly-plot.png`
    a.click()
    a.remove()
}

</script>
<style scoped>
.box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .selector {
        width: 100%;
    }
}
</style>