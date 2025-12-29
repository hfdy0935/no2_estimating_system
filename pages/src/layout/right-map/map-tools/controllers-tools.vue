<template>
    <template></template>
</template>

<script setup lang="ts">
import { useMapStore } from '@/stores/map';
import { Scale, Zoom } from '@antv/l7';
import { storeToRefs } from 'pinia';

const { scene } = storeToRefs(useMapStore())

watchEffect(() => {
    const s = scene.value
    if (!s) return
    s.on('loaded', () => {
        const zoom = new Zoom({
            zoomInTitle: '放大',
            zoomOutTitle: '缩小',
            position: 'topleft'
        });
        s.addControl(zoom);
        const scale = new Scale({
            zoomInTitle: '放大',
            zoomOutTitle: '缩小',
        });
        s.addControl(scale);
    });

})
</script>

<style scoped></style>