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



export interface Metric {
    N: number
    R2: string,
    MAE: string,
    RMSE: string
}