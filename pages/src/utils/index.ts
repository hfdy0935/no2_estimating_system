import { raw_base_url } from "@/constants";
import type { GitHubTreeResp } from "@/types";
import {
    FolderOutline, ImageOutline
} from '@vicons/ionicons5'
import { asyncBufferFromUrl, parquetReadObjects, type AsyncBuffer } from 'hyparquet'
import { compressors } from 'hyparquet-compressors'
import { NEllipsis, NIcon, type MenuOption } from 'naive-ui'
import * as _ from 'lodash-es'

export const isTopLevel = (path: string) => !path.includes('/')
export const getParentDir = (path: string) => path.split('/').slice(0, -1).join('/')
export function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}
export const isDir = (item: GitHubTreeResp['tree'][number]) => item.type === 'tree'

/**
 * 从路径提取文件名
 * @param path 
 * @returns 
 */
export const extractFilename = (path: string): string => {
    return isTopLevel(path) ? path : path.split('/').slice(-1)[0]!
}


/**
 * githubTreeIytem构建menuOption
 * @param el 
 * @returns 
 */
const githubTreeItem2MenuOption = (el: GitHubTreeResp['tree'][number]): MenuOption => {
    return {
        key: el.path,
        label: () => h(NEllipsis, null, { default: () => extractFilename(el.path) }),
        icon: isDir(el) ? renderIcon(FolderOutline) : renderIcon(ImageOutline),
        children: isDir(el) ? [] : undefined
    }
}


/**
 * 从github目录树中提取每天和每小时的est_no2，拼装成MenuOption[]
 * @param tree 
 */
export const extractEstNO2MenuOptions = (tree: GitHubTreeResp['tree']): {
    daily: MenuOption[],
    hourly: MenuOption[]
} => {
    // 目录比它里面的子目录/子文件早出现
    // 用于快速查找父目录
    let map = new Map<string, MenuOption>()
    // 1. hourly
    const hourlyItems = tree.filter(el => el.path.startsWith('shared/estimate/hourly_tif/')).map(el => {
        el.path = el.path.replace('shared/estimate/hourly_tif/', '')
        return el
    })
    const hourlyMenuOptions: MenuOption[] = []
    for (const el of hourlyItems) {
        const item = githubTreeItem2MenuOption(el)
        const parent = map.get(getParentDir(el.path))
        if (parent) {
            parent.children?.push(item)
        } else {
            hourlyMenuOptions.push(item)
        }
        if (isDir(el)) {
            map.set(el.path, item)
        }
    }
    // 2. daily
    map = new Map<string, MenuOption>()
    const dailyItems = tree.filter(el => el.path.startsWith('shared/estimate/daily_tif/')).map(el => {
        el.path = el.path.replace('shared/estimate/daily_tif/', '')
        return el
    })
    const dailyMenuOptions: MenuOption[] = []
    for (const el of dailyItems) {
        const item = githubTreeItem2MenuOption(el)
        const parent = map.get(getParentDir(el.path))
        if (parent) {
            parent.children?.push(item)
        } else {
            dailyMenuOptions.push(item)
        }
        if (isDir(el)) map.set(el.path, item)
    }
    return {
        hourly: hourlyMenuOptions,
        daily: dailyMenuOptions
    }
}



/** 请求并解析parquet */
export const fetchAndParseParquet = async (path: string) => {
    const file: AsyncBuffer = await asyncBufferFromUrl({ url: `${raw_base_url}${path}` })
    const data = await parquetReadObjects({ file, compressors })
    // 原来是object[]，按照时间分组解析
    const sortedData = _.sortBy(data, 'time')
    const groupedObj = _.groupBy(sortedData, 'time')
    return groupedObj
}