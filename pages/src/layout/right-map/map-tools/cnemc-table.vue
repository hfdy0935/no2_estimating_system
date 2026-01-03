<template>
    <n-button v-if="tableCnemcData.length" type="success" style="margin: 10px;" size="small"
        @click="downloadAsCsv">下载为csv</n-button>
    <n-data-table :columns :data="tableCnemcData" :max-height="400" virtual-scroll size="small" bordered ref="table"
        :scroll-x="600" />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMapStore } from '@/stores/map';
import type { DataTableColumns } from 'naive-ui';
import CnemcTableItemRender from './cnemc-table-item-render.vue';
import type { ITableCnemcItem } from '@/types';
import { useMenuStore } from '@/stores/menu';

const { selectedFilename } = storeToRefs(useMenuStore())
const { tableCnemcData } = storeToRefs(useMapStore())

const columns: DataTableColumns<ITableCnemcItem> = [
    { title: '序号', key: 'index', width: 64 },
    { title: '经度', key: 'lon', width: 64 },
    { title: '纬度', key: 'lat', width: 64 },
    { title: '北京时间', key: 'beijing_time', width: 100 },
    { title: 'UTC', key: 'time', width: 100 },
    { title: '观测值', key: 'cnemc_no2', width: 64 },
    { title: '质量', key: 'quality', width: 100, render: (row: ITableCnemcItem) => h(CnemcTableItemRender, { quality: row.quality }) },
    { title: '地区', key: 'area', width: 64 },
    { title: '地点', key: 'position_name', width: 64 },
    { title: '编号', key: 'station_code', width: 64 }
].map(el => ({ ...el, align: 'center' }))
const tableRef = useTemplateRef('table')

const downloadAsCsv = () => {
    tableRef.value?.downloadCsv({ fileName: selectedFilename.value.split('.')[0] + '.csv' })
}
</script>
