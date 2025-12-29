import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Scene } from '@antv/l7'

export const useMapStore = defineStore('map', () => {
    const scene = ref<Scene>()
    const loading = ref(false)
    return { scene, loading }
})
