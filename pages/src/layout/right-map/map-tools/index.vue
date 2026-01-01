<template>
    <div class="box">
        <n-flex vertical>
            <n-float-button-group shape="square" position="relative">
                <cnemc-province-edge-layer></cnemc-province-edge-layer>
                <statistic-tool></statistic-tool>
            </n-float-button-group>
        </n-flex>
    </div>
</template>

<script setup lang="ts">
import CnemcProvinceEdgeLayer from './cnemc-province-edge-layer.vue';
import StatisticTool from './statistic-tool.vue';
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