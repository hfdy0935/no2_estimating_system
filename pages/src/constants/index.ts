// 用户名/仓库名
export const REPO_FULL_NAME = 'hfdy0935/no2_estimating_system'


/** 研究区数据经纬度边界 */
export const ChinaRect = {
    minlon: 73,
    minlat: 3,
    maxlon: 136,
    maxlat: 54
} as const

export const raw_base_url = `https://raw.githubusercontent.com/${REPO_FULL_NAME}/main/`


/** 近地面NO2色条带配置 */
export const ColorbarConfig = {
    colors: [
        '#6D9F00',
        '#92B800',
        '#C8DB00',
        '#FFFC00',
        '#FFB000',
        '#FF6200',
        '#FF2200',
    ],
    domain: [0, 90] as [number, number],
    positions: [0, 15, 30, 45, 60, 75, 90]
}
