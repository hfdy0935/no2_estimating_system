import type { MenuOption } from "naive-ui"

export interface GitHubTreeResp {
    sha: string
    url: string
    tree: {
        path: string
        mode: string
        type: 'tree' | 'blob'
        sha: string
        size?: number
        url: string
    }[]
    truncated: boolean
}

export interface TotalMenuOptions {
    daily: MenuOption[],
    hourly: MenuOption[]
}