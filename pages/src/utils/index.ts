import { raw_base_url, REPO_FULL_NAME } from "@/constants";
import type { GitHubTreeResp } from "@/types";
import {
    FolderOutline, ImageOutline
} from '@vicons/ionicons5'
import { asyncBufferFromUrl, parquetReadObjects, type AsyncBuffer } from 'hyparquet'
import { compressors } from 'hyparquet-compressors'
import { NEllipsis, NIcon, type MenuOption } from 'naive-ui'
import _ from 'lodash-es'

export const isTopLevel = (path: string) => !path.includes('/')
export const isParquet = (path: string) => path.endsWith('.parquet')
export function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}
export const isFolder = (item: GitHubTreeResp['tree'][number]) => item.type === 'tree'

/**
 * GitHub扁平目录树转为层级，返回shared目录下的数据
 * @param tree 
 * @returns 
 */
export const flatTree2MenuOption = (tree: GitHubTreeResp['tree']): MenuOption[] => {
    const map = new Map<string, MenuOption>()
    // 文件夹
    const genNode = (path: string, children: MenuOption[] = []) => {
        return {
            key: path,
            label: () => h(NEllipsis, null, { default: () => path.includes('/') ? path.split('/').slice(-1)[0] : path }),
            icon: renderIcon(FolderOutline),
            children
        }
    }
    const estimateTifNode = genNode('shared/estimate/tif')
    const reconstructTifNode = genNode('shared/reconstruct/tif')
    map.set('shared/estimate/tif', estimateTifNode)
    map.set('shared/reconstruct/tif', reconstructTifNode)
    const estimateNode = genNode('shared/estimate', [estimateTifNode])
    const reconstructNode = genNode('shared/reconstruct', [reconstructTifNode])
    map.set('shared/estimate', estimateNode)
    map.set('shared/reconstruct', reconstructNode)
    map.set('shared', genNode('shared', [estimateNode, reconstructNode]))
    // y/ymd/xxx.tif
    const estimateItems = tree.filter(el => el.path.startsWith('shared/estimate/tif/'))
    const reconstructItems = tree.filter(el => el.path.startsWith('shared/reconstruct/tif/'))
    for (const item of [...estimateItems, ...reconstructItems]) {
        const node = {
            key: item.path,
            label: () => h(NEllipsis, null, { default: () => isTopLevel('/') ? item.path : item.path.split('/').slice(-1)[0] }),
            icon: isFolder(item) ? renderIcon(FolderOutline) : renderIcon(ImageOutline),
            children: isFolder(item) ? [] : undefined,
            extra: isFolder(item) ? undefined : `  ${((item.size ?? 0) / 1024 / 1024).toFixed(2)}MB`
        }
        map.set(item.path, node)
        const parent = map.get(item.path.split('/').slice(0, -1).join('/'))
        if (parent) {
            parent.children?.push(node)
        }
    }
    return map.get('shared')?.children ?? []
}


/**
 * 从路径提取文件名
 * @param path 
 * @returns 
 */
export const extractFilename = (path: string): string => {
    return isTopLevel(path) ? path : path.split('/').slice(-1)[0]!
}


/** 请求并解析parquet */
export const fetchAndParseParquet = async (path: string) => {
    const file: AsyncBuffer = await asyncBufferFromUrl({ url: `${raw_base_url}${path}` })
    const data = await parquetReadObjects({ file, compressors })
    // 原来是object[]，按照时间分组解析
    const sortedData = _.sortBy(data, 'time')
    const groupedObj = _.groupBy(sortedData, 'time')
    return _.values(groupedObj)
}