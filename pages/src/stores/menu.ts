import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { MenuOption } from 'naive-ui'
import { extractFilename } from '@/utils'
import type { TotalMenuOptions } from '@/types'




export const useMenuStore = defineStore('menu', () => {
  /** 总选项 */
  const totalMenuOptions = ref<TotalMenuOptions>()
  /** 当前选项类型 */
  const selectedMenuType = ref<keyof TotalMenuOptions>('daily')
  /** 选中的选项 */
  const selectedMenuOption = ref<MenuOption>()
  /** 选中的文件名，文件名需要重新计算，因为label可能是渲染函数 */
  const selectedFilename = computed(() => {
    const path = (selectedMenuOption.value?.key ?? '') as string
    return extractFilename(path)
  })
  /** 左侧菜单是否折叠 */
  const collapsed = ref(false)

  return {
    totalMenuOptions, selectedMenuType,
    selectedMenuOption, selectedFilename, collapsed
  }
})
