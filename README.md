# 近地面时空无缝$NO_2$实时估算系统


## 1. 📁`shared`共享数据目录

包括原始数据、重建结果、估算结果

## 2. ⏰`task`定时任务

| 数据      | cron       | 描述          | 时段            | 分辨率&覆盖范围         | 保存位置                                                   |
| --------- | ---------- | ------------- | --------------- | ----------------------- | ---------------------------------------------------------- |
| `geoscf`  | 0 9 * * *  | utc每天9:00   | 5天前           | 1h, 0.05°; 24h, china   | `shared/data_source/geoscf/{year}/{ymd}.parquet`           |
| `era5`    | 0 10 * * * | utc每天10:00  | 7天前           | 1h, 0.05°; 24h, china   | `shared/data_source/era5/{year}/{part[1-4]}/{ymd}.parquet` |
| `gems`    | 0 12 * * * | utc每天12:00  | 当天            | 1h, 0.05°; ~0-6h, china | `shared/data_source/gems/{year}/{ymd}.parquet`             |
| `cnemc`   | 40 * * * * | 每小时40分    | 前24h(查漏补缺) | 1h, station; 24h, china | `shared/data_source/cnemc/{year}/{ymd}.parquet`            |
| `rec_no2` | /          | 跟随`era5`    | 7天前           | 1h, 0.05°; 24h, china   | `shared/reconstruct/rec/{year}/{ymd}.parquet`              |
| `est_no2` | /          | 跟随`rec_no2` | 7天前           | 1h, 0.05°; 24h, china   | `shared/estimate/(pq)\|(df)/{year}/{ymd}.parquet`          |

> 20251218、20251219、20251220三天测试数据已准备好，后续等自动请求


## 3. 📈前端展示

**思路**：通过Github静态文件url获取结果，显示
**拟采用的技术栈**：`Vue`生态、`Antv L7`、`Leaflet`


还没写...

## 4. 设想的流程

监听`issue`，提取邮箱和数据范围，触发action，打包数据发送至该邮箱

## 5. 其他

以下均使用github secret（仓库级）
1. GEMS的`api-key`
2. GEE的认证文件和
3. `git push`的token，名为`GITHUB_TOKEN`，actions流程中会自动生成，不用配置
4. 邮箱`SMTP`的验证码
