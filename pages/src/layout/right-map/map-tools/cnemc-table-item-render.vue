<template>
    <n-tag :type="tagType" :bordered="false">{{ quality }}</n-tag>
</template>

<script setup lang="ts">

const { quality } = defineProps<{
    quality: string
}>()

const tagType = computed(() => {
    switch (quality) {
        case '优':
            return 'success'
        case '良':
        case '轻度污染':
            return 'info'
        case '中度污染':
            return 'warning'
        case '重度污染':
        case '严重污染':
            return 'error'
        default:
            return 'default'
    }
})
</script>

<style scoped></style>