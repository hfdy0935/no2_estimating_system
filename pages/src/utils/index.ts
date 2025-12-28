import type { GitHubFolderItem } from "@/types";

export const isMenuItemFolder = (item: GitHubFolderItem) => item.type == 'dir'
export const isMenuItemDisable = (item: GitHubFolderItem) => !isMenuItemFolder(item) && !item.name.endsWith('.parquet') && !item.name.endsWith('.tif')