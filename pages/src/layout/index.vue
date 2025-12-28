<template>
    <n-space vertical>
        <n-layout has-sider>
            <left-menu />
            <right-map />
        </n-layout>
    </n-space>

</template>

<script setup lang="ts">
import leftMenu from './left-menu.vue';
import RightMap from './right-map/index.vue'
defineOptions({
    name: 'MapLayout'
})
</script>

<style scoped></style>