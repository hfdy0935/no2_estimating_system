<template>
    <n-layout-sider bordered collapse-mode="width" :collapsed-width="96" :width="300" :collapsed show-trigger
        style="max-height:100vh" :native-scrollbar="false" @collapse="collapsed = true" @expand="collapsed = false">
        <n-menu v-model:value="activeKey" :collapsed :collapsed-width="96" :collapsed-icon-size="22" :indent="14"
            :options @update-value="(value, option) => selectedMenuOption = option" />
    </n-layout-sider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getRepoTree } from '@/api/data'
import { extractEstNO2MenuOptions } from '@/utils'
import { useMenuStore } from '@/stores/menu'
import { storeToRefs } from 'pinia'

defineOptions({
    name: 'MapLeftMenu'
})

const message = useMessage()

const activeKey = ref<string | null>(null)
const { collapsed, totalMenuOptions, selectedMenuType, selectedMenuOption } = storeToRefs(useMenuStore())
/** 当前选项数组 */
const options = computed(() => {
    return totalMenuOptions.value?.[selectedMenuType.value] ?? []
})
watchEffect(async () => {
    const resp = await getRepoTree()
    if (resp.status !== 200) {
        message.error('获取GitHub目录失败，请稍后重试或联系作者')
        return
    }
    totalMenuOptions.value = extractEstNO2MenuOptions(resp.data.tree)
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