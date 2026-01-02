<template>
    <div class="box">
        <n-empty v-if="Object.keys(data).length === 0" :show-icon="false" description="暂无数据"></n-empty>
        <div v-else ref="container"></div>
    </div>
</template>

<script setup lang="ts">
import { Chart } from '@antv/g2';
import type { RawHourlyDataItem } from './types';


/** {ymd[h]: RawHourlyDataItem} */
const { data } = defineProps<{ data: Record<string, object[]> }>()
/** 用于展示的每时数据 */
interface HourlyDataItem {
    hour: number
    source: '观测值' | '估算值'
    NO2: number
}
const hourlyData = computed<HourlyDataItem[]>(() => {
    const tmp = [...Object.values(data)].reduce((p, c) => [...p, ...c], []) as RawHourlyDataItem[]
    return tmp.reduce((p, c) => {
        return [...p, { hour: +c.time.slice(-2), NO2: +c.est_no2.toFixed(2), source: '估算值' }, { hour: +c.time.slice(-2), NO2: +c.cnemc_no2.toFixed(2), source: '观测值' }]
    }, [] as HourlyDataItem[])
})
const chart = shallowRef<Chart>()
const container = useTemplateRef('container')
watch([container, hourlyData], ([container, data]) => {
    if (!container || !data.length) return
    chart.value?.destroy()
    chart.value = new Chart({
        container,
        autoFit: true,
        width: 560,
        height: 300
    })
    chart.value
        .data(hourlyData.value)
        .encode('x', 'hour')
        .encode('y', 'NO2')
        .encode('color', 'source')
        .axis('x', {
            line: true,
            title: 'Hour'
        }).axis(
            'y', {
            line: true,
            title: 'NO2 (ug/m^3)',
        }).scale('y', {
            domain: [0, 40]
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
</script>
<style scoped>
.box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>