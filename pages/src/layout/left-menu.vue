<template>
    <n-space vertical>
        <n-layout has-sider>
            <n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="240" :collapsed="collapsed"
                show-trigger @collapse="collapsed = true" @expand="collapsed = false">
                <n-menu v-model:value="activeKey" :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="22"
                    :options="menuOptions" />
            </n-layout-sider>
            <n-layout>
                <span>内容</span>
            </n-layout>
        </n-layout>
    </n-space>
</template>

<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import type { Component } from 'vue'
import {
    FolderOpen, DocumentText
} from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { h, ref } from 'vue'
import { getFolderInfo } from '@/api/data'
import type { GitHubFolderItem } from '@/types'
import { isMenuItemDisable, isMenuItemFolder } from '@/utils'


defineOptions({
    name: 'MapLeftMenu'
})
function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}
const message = useMessage()

const folderData = ref<GitHubFolderItem[]>([])
const menuOptions = ref<MenuOption[]>([])
watchEffect(async () => {
    const resp = await getFolderInfo()
    if (resp.status !== 200) {
        message.error('获取GitHub目录失败，请重试或联系作者')
        return
    }
    folderData.value = resp.data
    // 如果原来是空的
    if (menuOptions.value.length === 0) {
        menuOptions.value = resp.data.map(item => {
            return {
                label: item.name,
                key: item.path,
                disabled: isMenuItemDisable(item),
                icon: isMenuItemFolder(item) ? renderIcon(FolderOpen) : renderIcon(DocumentText),
            }
        })
    }
})



const activeKey = ref<string | null>(null)
const collapsed = ref(true)
</script>