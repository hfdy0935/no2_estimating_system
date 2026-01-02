<template>
    <n-popover trigger="hover" placement="right" display-directive="show">
        <template #trigger>
            <n-float-button>
                <n-icon color="deepskyblue">
                    <img src="/statistic.svg" alt="" width="20">
                </n-icon>
            </n-float-button>
        </template>
        <n-card style="width: 600px;padding: 0;" :bordered="false">
            <template #header>
                {{ formatDatetimeStr(selectedFilename.slice(0, 8)) }}
                (UTC) 近地面<NO2></NO2>统计结果
            </template>
            <n-alert v-if="!selectedMenuOption" title="" type="warning">
                请选择要展示的数据
            </n-alert>
            <template v-else>
                <n-collapse>
                    <n-collapse-item
                        :title="(`${selectedMenuType === MenuType.DAILY ? '' : (selectedFilename.slice(8, 10) + ':00 ')}`) + '散点图'"
                        name="1">
                        <matched-plot :data="matchedData"></matched-plot>
                    </n-collapse-item>
                    <n-collapse-item title="每小时均值" name="2">
                        <hourly-plot :data="hourlyData"></hourly-plot>
                    </n-collapse-item>
                    <n-collapse-item
                        :title="(`${selectedMenuType === MenuType.DAILY ? '' : (selectedFilename.slice(8, 10) + ':00 ')}`) + 'CNEMC原始数据'"
                        name="3">
                        <cnemc-table></cnemc-table>
                    </n-collapse-item>
                </n-collapse>
            </template>
        </n-card>
    </n-popover>
</template>

<script setup lang="ts">
import { MenuType, useMenuStore } from '@/stores/menu';
import { storeToRefs } from 'pinia';;
import { fetchAndParseParquet, formatDatetimeStr } from '@/utils';
import HourlyPlot from './hourly-plot.vue';
import MatchedPlot from './matched-plot.vue';
import NO2 from '@/components/no2.vue';
import CnemcTable from './cnemc-table.vue';


const message = useMessage()
const { selectedMenuOption, selectedFilename, selectedMenuType } = storeToRefs(useMenuStore())


const hourlyData = shallowRef<Record<string, object[]>>({})
const matchedData = shallowRef<Record<string, object[]>>({})
watch(selectedMenuOption, async () => {
    if (!selectedMenuOption.value) return
    const ymd = selectedFilename.value.slice(0, 8)
    const year = ymd.slice(0, 4)
    try {
        const [hourlyCnemcEst, matchEncmeEst] = await Promise.all([
            fetchAndParseParquet(`shared/estimate/stat/${year}/${ymd}/hourly_cnemc_est.parquet`),
            fetchAndParseParquet(`shared/estimate/stat/${year}/${ymd}/match_cnemc_est.parquet`)
        ])
        hourlyData.value = hourlyCnemcEst
        matchedData.value = matchEncmeEst
    } catch {
        message.error(`统计数据加载失败，数据不存在或出现错误，请稍后再试是否存在或重试或联系作者`, { keepAliveOnHover: true })
    }
})
</script>
