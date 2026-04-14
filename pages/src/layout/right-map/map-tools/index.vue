<template>
    <div class="box">
        <n-flex vertical>
            <n-float-button-group shape="square" position="relative">
                <layer-tools></layer-tools>
                <plot-tools></plot-tools>
            </n-float-button-group>
        </n-flex>
    </div>
</template>

<script setup lang="ts">

import LayerTools from './layer-tools.vue';
import PlotTools from './plot-tools.vue';
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