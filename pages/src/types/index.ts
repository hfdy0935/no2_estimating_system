
export interface GitHubFolderItem {
    download_url: string | null
    git_url: string
    html_url: string
    name: string
    path: string
    size: number
    type: 'dir' | 'file'
    url: string
    _links: {
        git: string
        gtml: string
        self: string
    }
}