<template>
    <n-layout-sider bordered collapse-mode="width" :collapsed-width="0" :width="240" :collapsed show-trigger
        style="max-height:100vh;padding: 10px;" :native-scrollbar="false" @collapse="collapsed = true"
        @expand="collapsed = false">
        <n-spin :show="loading" description="正在获取数据目录">
            <n-tabs type="segment" animated>
                <n-tab-pane :name="MenuType.DAILY" tab="每天">
                    <n-menu v-if="dailyMenuOptions.length" v-model:value="activeKey" :collapsed :collapsed-width="96"
                        :collapsed-icon-size="22" :indent="14" :options="dailyMenuOptions"
                        @update-value="(value: string & number & (string | number), option: MenuOption) => selectedMenuOption = option" />
                    <n-empty v-else description="暂无数据" :show-icon="false" style="padding-top: 240px;">
                        <template #extra>
                            <n-button size="small" @click="openRepo">
                                去GitHub仓库看看
                                <template #icon><img src="/github.com_.png" alt="" width="20"></template>
                            </n-button>
                        </template>
                    </n-empty>
                </n-tab-pane>
                <n-tab-pane :name="MenuType.HOURLUY" tab="每时">
                    <n-menu v-if="hourlyMenuOptions.length" v-model:value="activeKey" :collapsed :collapsed-width="96"
                        :collapsed-icon-size="22" :indent="14" :options="hourlyMenuOptions"
                        @update-value="(value, option) => selectedMenuOption = option" />
                    <n-empty v-else description="暂无数据" :show-icon="false" style="padding-top: 240px;">
                        <template #extra>
                            <n-button size="small" @click="openRepo">
                                去GitHub仓库看看
                                <template #icon><img src="/github.com_.png" alt="" width="20"></template>
                            </n-button>
                        </template>
                    </n-empty>
                </n-tab-pane>
            </n-tabs>
        </n-spin>
    </n-layout-sider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getRepoTree } from '@/api/data'
import { extractEstNO2MenuOptions } from '@/utils'
import { MenuType, useMenuStore } from '@/stores/menu'
import { storeToRefs } from 'pinia'
import { AxiosError } from 'axios'
import type { MenuOption } from 'naive-ui'

defineOptions({
    name: 'MapLeftMenu'
})

const message = useMessage()

const activeKey = ref<string | null>(null)
const { collapsed, dailyMenuOptions, hourlyMenuOptions, selectedMenuOption, loading } = storeToRefs(useMenuStore())
watchEffect(async () => {
    try {
        loading.value = true
        const resp = await getRepoTree()
        const res = extractEstNO2MenuOptions(resp.data.tree)
        dailyMenuOptions.value = res.daily
        hourlyMenuOptions.value = res.hourly
    } catch (err) {
        if (err instanceof AxiosError && err.status === 403) {
            message.error('请求数据目录太频繁，已达到GitHub的限制，请稍后再试')
        } else
            message.error('获取GitHub目录失败，请稍后重试或联系作者')
    } finally {
        loading.value = false
    }
})

const openRepo = () => {
    window.open('https://github.com/hfdy0935/no2_estimating_system', '_blank')
}
</script>

<style scoped>
.switch {
    width: 96px;
    height: 24px;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>