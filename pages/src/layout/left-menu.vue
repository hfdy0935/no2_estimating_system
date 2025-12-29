<template>
    <n-layout-sider bordered collapse-mode="width" :collapsed-width="96" :width="260" :collapsed show-trigger
        style="max-height:100vh" :native-scrollbar="false" @collapse="collapsed = true" @expand="collapsed = false">
        <n-menu v-model:value="activeKey" :collapsed :collapsed-width="96" :collapsed-icon-size="22" :indent="14"
            :options="menuOptions" @update-value="(value, option) => mapStore.selectedMenuOption = option" />
    </n-layout-sider>
</template>

<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { ref } from 'vue'
import { getRepoTree } from '@/api/data'
import { flatTree2MenuOption } from '@/utils'
import { useMenuStore } from '@/stores/menu'
import { storeToRefs } from 'pinia'

defineOptions({
    name: 'MapLeftMenu'
})

const message = useMessage()

const activeKey = ref<string | null>(null)
const menuOptions = ref<MenuOption[]>([])
const { collapsed } = storeToRefs(useMenuStore())
const mapStore = useMenuStore()
watchEffect(async () => {
    const resp = await getRepoTree()
    if (resp.status !== 200) {
        message.error('获取GitHub目录失败，请稍后重试或联系作者')
        return
    }
    menuOptions.value = flatTree2MenuOption(resp.data.tree)
})


</script>

<style scoped>
.switch {
    width: 96px;
    height: 24px;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>