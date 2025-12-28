import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { MenuOption } from 'naive-ui'
import { extractFilename } from '@/utils'

export const useMenuStore = defineStore('menu', () => {
  const selectedMenuOption = ref<MenuOption | null>(null)
  /** 文件名需要重新计算，因为label可能是渲染函数 */
  const selectedFilename = computed(() => {
    const path = selectedMenuOption.value?.key
    if (!path) return ''
    return extractFilename(path as string)
  })

  return {
    selectedMenuOption, selectedFilename
  }
})
