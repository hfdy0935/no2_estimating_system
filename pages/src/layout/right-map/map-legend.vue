<template>
    <div ref="legend-container" class="legend-container">
        <h3>图例</h3>
        <h4>
            <NO2></NO2> (ug/m<sup>3</sup>)
        </h4>
        <div class="content">
            <div v-for="(grade, idx) in grades" :key="grade" class="item">
                <div class="color-block" :style="{ background: ColorbarConfig.colors[idx] }">
                </div>
                {{ grade }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMapStore } from '@/stores/map';
import { Control } from '@antv/l7';
import { storeToRefs } from 'pinia';
import NO2 from '@/components/no2.vue'
import { ColorbarConfig } from '@/constants';
import '../../../node_modules/.pnpm/@antv+l7-component@2.25.4/node_modules/@antv/l7-component/es/css/index.less'

const grades = ColorbarConfig.positions.reduce((p, c, i) => [...p, i === 0 ? '' : `${ColorbarConfig.positions[i - 1]} - ${c}`], [] as string[]).slice(1)
grades.push(`> ${ColorbarConfig.positions[ColorbarConfig.positions.length - 1]}`)
const containerRef = useTemplateRef('legend-container')

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
.legend-container {
    background-color: #fff;
    padding: 18px;
    border-radius: 3px;
    user-select: none;
    text-align: center;

    h4 {
        margin-bottom: 4px;
    }

    .content {
        display: flex;
        flex-direction: column-reverse;

        .item {
            display: flex;
            align-items: center;

            .color-block {
                width: 28px;
                height: 18px;
                margin-right: 8px;
            }
        }
    }
}
</style>