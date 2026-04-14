import type { GitHubTreeResp } from "../../shared/frontend/types.ts"
import { SERVER_URL } from "../../shared/frontend/constants.ts"
import type { Request, Response } from "express";
import fs from 'node:fs'
import path from "node:path";

const repoInfo: GitHubTreeResp = {
    sha: "a269cc53fefdcdda5a5395611aecb749c641cc6f",
    url: "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/a269cc53fefdcdda5a5395611aecb749c641cc6f",
    tree: [],
    truncated: false
}

const getdirInfoArrRecursive = (dir: string) => {
    const ans: fs.Dirent<string>[] = []
    const dirArr = fs.readdirSync(dir, { withFileTypes: true })
    for (const dir of dirArr) {
        ans.push(dir)
        if (dir.isDirectory()) {
            ans.push(...getdirInfoArrRecursive(path.resolve(dir.parentPath, dir.name)))
        }
    }
    return ans
}

const getLocalData: () => GitHubTreeResp['tree'] = () => {
    const dailyInfoArr = getdirInfoArrRecursive('../shared/estimate/daily_tif')
    const hourlyInfoArr = getdirInfoArrRecursive('../shared/estimate/hourly_tif')
    return [...dailyInfoArr, ...hourlyInfoArr].map(el => {
        /** path从shared开始 */
        const path = el.parentPath.slice(el.parentPath.indexOf('shared')).replace(/\\\\/g, '/').replace(/\\/g, '/') + '/' + el.name
        return {
            path,
            mode: '10644',
            type: el.isDirectory() ? 'tree' : 'blob',
            sha: 'unknown',
            size: 0,
            url: `${SERVER_URL.URL}/static/${path}`
        }
    })
}


export const getGitHubTree = (req: Request, res: Response) => {
    console.log(`[log] host = ${req.host}, time = ${Date.now()} 请求数据目录`);
    res.json({
        ...repoInfo,
        tree: getLocalData()
    })
}