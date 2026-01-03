<template>
    <div ref="container" class="container">
        <h3>图例</h3>
        <h4>
            <NO2></NO2> (ug/m<sup>3</sup>)
        </h4>
        <div v-for="(grade, idx) in grades" :key="grade" class="item">
            <div class="block" :style="{ background: colors[idx] }"></div>
            {{ grade }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMapStore } from '@/stores/map';
import { Control } from '@antv/l7';
import { storeToRefs } from 'pinia';
import NO2 from '@/components/no2.vue'
const grades = ['0 - 15', '15 - 30', '30 - 45', '45 - 60', '60 - 75', '75 - 90', '> 90'].reverse()
const colors = [
    '#6D9F00',
    '#92B800',
    '#C8DB00',
    '#FFFC00',
    '#FFB000',
    '#FF6200',
    '#FF2200',
].reverse()
const containerRef = useTemplateRef('container')

const { scene, basemapLayer } = storeToRefs(useMapStore())

watch([basemapLayer, scene, containerRef], () => {
    if (!basemapLayer.value || !scene.value || !containerRef.value) return
    const legend = new Control({
        position: 'bottomleft'
    })
    legend.onAdd = () => containerRef.value!
    scene.value.addControl(legend)
})
</script>

<style scoped>
.container {
    background-color: #fff;
    padding: 12px;
    border-radius: 3px;
    user-select: none;
    text-align: center;

    h4 {
        margin-bottom: 4px;
    }

    .item {
        display: flex;
        align-items: center;

        .block {
            width: 28px;
            height: 18px;
            margin-right: 8px;
        }
    }
}
</style>