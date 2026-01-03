<template>
    <div class="box">
        <div class="item">位置：{{ lon }}°E, {{ lat }}°N</div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div>
</template>

<script setup lang="ts">
import type { IMapCnemcItem } from '@/types';

defineProps<IMapCnemcItem>()
</script>

<style scoped>
.box {
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .item {}
}
</style>