import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { MenuOption } from 'naive-ui'
import { extractFilename } from '@/utils'

export enum MenuType {
  DAILY = 'daily',
  HOURLUY = 'hourly'
}


export const useMenuStore = defineStore('menu', () => {
  /** 每日选项数组 */
  const dailyMenuOptions = ref<MenuOption[]>([])
  /** 每小时选项数组 */
  const hourlyMenuOptions = ref<MenuOption[]>([])
  /** 当前选项类型 */
  const selectedMenuType = ref<MenuType>(MenuType.DAILY)
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
    dailyMenuOptions, hourlyMenuOptions, selectedMenuType,
    selectedMenuOption, selectedFilename, collapsed
  }
})
