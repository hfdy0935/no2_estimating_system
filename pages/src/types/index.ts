/** 精度指标 */
export interface Metric {
    N: number
    R2: string,
    MAE: string,
    RMSE: string
}

/** 原始每小时数据 */
export interface RawHourlyDataItem {
    time: string,
    est_no2: number,
    cnemc_no2: number
}
/** 地图中显示的单条cnemc */
export interface IMapCnemcItem {
    lon: number
    lat: number
    cnemc_no2: number
    area: string
    station_code: string
    position_name: string
    quality: string[]
}
/** 表格中显示的单条cnemc */
export interface ITableCnemcItem extends Omit<IMapCnemcItem, 'quality'> {
    quality: string
    beijing_time: string
    time: string
    /** 前端加的 */
    index: number
}

