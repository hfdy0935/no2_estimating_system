import { SERVER_URL } from "../shared/frontend/constants.ts"
import express, { type Express } from 'express'
import { getGitHubTree } from './src/repodir.ts'
import cors from 'cors'

const installEndpoint = (app: Express) => {
    app
        .use(cors())
        .get('/', (req, res) => {
            res.end(req.headers['user-agent'])
        })
        .get('/repoinfo', getGitHubTree)
        .use('/static/shared', express.static('../shared'))
}


function main() {
    const app = express()
    installEndpoint(app)
    app.listen(SERVER_URL.PORT, () => {
        console.log(`服务器已启动，正在监听端口${SERVER_URL.PORT}...`)
        console.log(`可访问地址：${SERVER_URL.URL}`)
    })
}

main()
