export interface RawHourlyDataItem {
    time: string,
    est_no2: number,
    cnemc_no2: number
}


export interface ICnemcItem {
    lon: number
    lat: number
    cnemc_no2: number
    area: string
    station_code: string
    beijing_time: string
    time: string
    position_name: string
    quality: string
    /** 前端加的 */
    index: number
}