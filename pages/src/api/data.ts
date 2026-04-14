import type { GitHubTreeResp } from "../../../shared/frontend/types"
import { SERVER_URL } from "../../../shared/frontend/constants"
import { REPO_FULL_NAME } from "@/constants";
import axios from "axios"

// /** GitHub api tree获取结果 */
// export interface GitHubTreeResp {
//     sha: string;
//     url: string;
//     tree: {
//         path: string;
//         mode: string;
//         type: 'tree' | 'blob';
//         sha: string;
//         size?: number;
//         url: string;
//     }[];
//     truncated: boolean;
// }
// export const SERVER_URL = {
//     URL: "http://localhost:3000",
//     HOST: "localhost",
//     PORT: 3000
// };


export const getRepoTree = () => {
    if (import.meta.env.PROD) {
        return axios.get<GitHubTreeResp>(`https://api.github.com/repos/${REPO_FULL_NAME}/git/trees/main`, {
            params: {
                recursive: 1
            },
            timeout: 10000
        })
    }
    return axios.get<GitHubTreeResp>(`${SERVER_URL.URL}/repoinfo`, {
        timeout: 10000
    })
}