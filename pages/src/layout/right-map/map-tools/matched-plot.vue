<template>
    <n-empty v-if="Object.keys(data).length === 0" :show-icon="false" description="暂无数据"></n-empty>
    <template v-else>
        <n-data-table :columns :data="[metrics]" :bordered="false" />
        <div ref="container"></div>
    </template>
</template>

<script setup lang="ts">
import { Chart } from '@antv/g2';
import type { RawHourlyDataItem } from './types';
import { storeToRefs } from 'pinia';
import { MenuType, useMenuStore } from '@/stores/menu';
import * as _ from 'lodash-es'
import { calculateMetrics } from '@/utils';
import type { DataTableColumns } from 'naive-ui';
import type { Metric } from '@/types';
import NO2 from '@/components/no2.vue';

const { selectedFilename, selectedMenuType } = storeToRefs(useMenuStore())

interface MatchCnemcEstDataType extends RawHourlyDataItem {
    lon: number
    lat: number
    area: string
    position_name: string
    station_code: string
    quality: string
    beijing_time: string
}

const { data } = defineProps<{ data: Record<string, object[]> }>()
const message = useMessage()
/** 匹配的数据 */
const matchedData = computed<MatchCnemcEstDataType[]>(() => {
    let arr: MatchCnemcEstDataType[] = []
    for (const el of Object.values(data)) {
        arr = arr.concat(el as MatchCnemcEstDataType[])
    }
    // 选中的是每天
    if (selectedMenuType.value === MenuType.DAILY) return arr
    const ymdh = selectedFilename.value.slice(0, 10)
    return data[ymdh] as MatchCnemcEstDataType[]
})
/** 精度指标 */
const metrics = computed<Metric>(() => {
    const cnemc = [], est = []
    for (const { cnemc_no2, est_no2 } of matchedData.value) {
        cnemc.push(cnemc_no2)
        est.push(est_no2)
    }
    return calculateMetrics(cnemc, est)
})
/** 精度数据表格列名 */
const columns: DataTableColumns<Metric> = [
    { title: 'N', key: 'N' }, {
        title: () => h(NO2), key: 'R2'
    }, { title: 'MAE', key: 'MAE' }, { title: 'RMSE', key: 'RMSE' }
]
const chart = shallowRef<Chart>()
const container = useTemplateRef('container')
watch([container, matchedData], ([container, data]) => {
    if (!container || !data.length) return
    chart.value?.destroy()
    chart.value = new Chart({
        container,
        autoFit: true,
        width: 320,
        height: 320
    })
    if (matchedData.value.length > 3000) {
        message.warning('点数量>3000，为保证用户体验，随机取3000个点展示，不影响精度指标')
    }
    chart.value
        .point()
        .data(_.sampleSize(matchedData.value, 3000))
        .encode('x', 'cnemc_no2')
        .encode('y', 'est_no2')
        .encode('size', 1)
        .encode('shape', 'circle')
        .axis('x', {
            line: true,
            title: '观测值 (ug/m^3)'
        }).axis(
            'y', {
            line: true,
            title: '估算值 (ug/m^3)'
        }).scale({
            x: { domain: [0, 120] },
            y: { domain: [0, 120] }
        }).tooltip({
            title: '',
            items: [
                (d) => ({
                    name: '观测值',
                    value: d.cnemc_no2.toFixed(2),
                }),
                (d) => ({
                    name: '估算值',
                    value: d.est_no2.toFixed(2),
                })
            ],
        })
    // 1:1折线图
    chart.value
        .line().
        data([{ x: 0, y: 0 }, { x: 120, y: 120 }])
        .encode('x', 'x')
        .encode('y', 'y')
        .encode('color', 'red')
        .tooltip(false)
    chart.value.render()
})
onUnmounted(() => {
    chart.value?.destroy()
})

</script>
