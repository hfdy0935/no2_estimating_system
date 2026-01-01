<template>
    <n-popover trigger="hover" placement="right">
        <template #trigger>
            <n-float-button>
                <n-icon color="deepskyblue">
                    <img src="/statistic.svg" alt="" width="20">
                </n-icon>
            </n-float-button>
        </template>
        <n-card style="width: 300px" :bordered="false" title="统计结果">
            <n-alert v-if="!selectedMenuOption" title="" type="warning">
                请选择要展示的数据
            </n-alert>
            <template v-else>
                111
            </template>
        </n-card>
    </n-popover>
</template>

<script setup lang="ts">
import { MenuType, useMenuStore } from '@/stores/menu';
import { storeToRefs } from 'pinia';;
// import { useMapStore } from '@/stores/map';
import { fetchAndParseParquet } from '@/utils';

const message = useMessage()


const { selectedMenuOption, selectedFilename, selectedMenuType } = storeToRefs(useMenuStore())
// const { scene, loading, cnemcData } = storeToRefs(useMapStore())


interface HourlyCnemcEstType {
    time: string,
    est_no2: number,
    cnemc_no2: number
}
interface MatchCnemcEstDataType extends HourlyCnemcEstType {
    lon: number
    lat: number
    area: string
    position_name: string
    station_code: string
    quality: string
    beijing_time: string
}
const hourlyCnemcEstData = ref<HourlyCnemcEstType[]>([])
const matchCnemcEstData = ref<MatchCnemcEstDataType[]>([])
watch(selectedMenuOption, async () => {
    if (!selectedMenuOption.value) return
    const ymd = selectedFilename.value.slice(0, 8)
    const year = ymd.slice(0, 4)
    try {
        const [hourlyCnemcEst, matchEncmeEst] = await Promise.all([
            fetchAndParseParquet(`shared/estimate/stat/${year}/${ymd}/hourly_cnemc_est.parquet`),
            fetchAndParseParquet(`shared/estimate/stat/${year}/${ymd}/match_cnemc_est.parquet`)
        ])
        hourlyCnemcEstData.value = [...Object.values(hourlyCnemcEst)].reduce((p, c) => [...p, c], []) as HourlyCnemcEstType[]
        const maybeYmdh = selectedFilename.value.slice(0, 10)
        matchCnemcEstData.value = (selectedMenuType.value === MenuType.DAILY ? [...Object.values(matchEncmeEst)] : matchEncmeEst[maybeYmdh]) as MatchCnemcEstDataType[]

    } catch {
        message.error(`统计数据加载失败，数据不存在或出现错误，请稍后再试是否存在或重试或联系作者`, { keepAliveOnHover: true })
    }
})
</script>
