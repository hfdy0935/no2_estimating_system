import type { GitHubFolderItem } from "@/types"
import { githubFileApi } from "@/utils/requests"

export const getFolderInfo = (path: string = '') => {
    return githubFileApi.get<GitHubFolderItem[]>(path)
}