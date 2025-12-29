<template>
    <div class="box">
        <n-flex vertical>
            <n-float-button-group shape="square" position="relative">
                <time-filter></time-filter>
            </n-float-button-group>
            <n-float-button-group shape="square" position="relative">
                <parquet-parser></parquet-parser>
            </n-float-button-group>
        </n-flex>
    </div>
</template>

<script setup lang="ts">
import ParquetParser from './parquet-parser.vue';
import TimeFilter from './time-filter.vue';
defineOptions({
    name: 'MapTools'
});

</script>

<style scoped>
.box {
    position: absolute;
    top: 12px;
    left: 24px;
    z-index: 100;
}
</style>