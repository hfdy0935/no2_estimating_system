<template>
    <n-popover trigger="hover" placement="right">
        <template #trigger>
            <n-float-button>
                <n-icon color="deepskyblue">
                    <time-outline></time-outline>
                </n-icon>
            </n-float-button>
        </template>
        <n-card style="width: 300px;">
            <n-alert v-if="!selectedMenuOption" title="" type="warning">
                请先在左侧菜单选择要展示的数据
            </n-alert>
            <template v-else>
                <n-form label-placement="left">
                    <n-form-item label="选择时间">
                        <n-select v-model:value="selectedBandIdx" :options />
                    </n-form-item>
                </n-form>
            </template>
        </n-card>
    </n-popover>
</template>

<script setup lang="ts">
import { useMapStore } from '@/stores/map';
import { useMenuStore } from '@/stores/menu';
import {
    TimeOutline
} from '@vicons/ionicons5'
import { storeToRefs } from 'pinia';



const { selectedMenuOption } = storeToRefs(useMenuStore())
const { selectedBandIdx, curData } = storeToRefs(useMapStore())
const options = computed(() => {
    if (!curData.value) return []
    return Array.from({ length: curData.value.length }, (_, i) => ({ label: `${i}`, value: i }))
})

</script>

<style scoped></style>