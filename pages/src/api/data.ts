import type { GitHubTreeResp } from "@/types"
import { REPO_FULL_NAME } from "@/constants";
import axios from "axios"

export const getRepoTree = () => {
    // return axios.get<GitHubTreeResp>(`https://api.github.com/repos/${REPO_FULL_NAME}/git/trees/main?recursive=1`, {
    //     params: {
    //         recursive: 1
    //     },
    //     timeout: 5000
    // })

    // mock
    return Promise.resolve({
        status: 200,
        data: {
            "sha": "86b9f9e47ae0057ed254869f1bbf2e7cfeb9f632",
            "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/86b9f9e47ae0057ed254869f1bbf2e7cfeb9f632",
            "tree": [
                {
                    "path": ".github",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "11d1d19b61dc7ae128af0502d0b6f2907163dbe4",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/11d1d19b61dc7ae128af0502d0b6f2907163dbe4"
                },
                {
                    "path": ".github/workflows",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "53402bb0f6ace79a6edf5fb1e54364a2bbbc52fc",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/53402bb0f6ace79a6edf5fb1e54364a2bbbc52fc"
                },
                {
                    "path": ".github/workflows/download_cnemc.yml",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7ca32f7068f252dc7671ac2dd88c9abda94e7559",
                    "size": 1215,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7ca32f7068f252dc7671ac2dd88c9abda94e7559"
                },
                {
                    "path": ".github/workflows/download_era5&rec&est.yml",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f7c570d5ad4ca64ea5a30d015f47f90e990b5d40",
                    "size": 1316,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f7c570d5ad4ca64ea5a30d015f47f90e990b5d40"
                },
                {
                    "path": ".github/workflows/download_gems.yml",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4de18acb0e8e845363c8930caade5c38e691712f",
                    "size": 1275,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4de18acb0e8e845363c8930caade5c38e691712f"
                },
                {
                    "path": ".github/workflows/download_geoscf.yml",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "021edb9e9c859109e2f5171447fa9a3dd504c8cf",
                    "size": 1290,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/021edb9e9c859109e2f5171447fa9a3dd504c8cf"
                },
                {
                    "path": ".github/workflows/issue.yml",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4b753f3faae57caf431f3f2aa581dc6d83056731",
                    "size": 929,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4b753f3faae57caf431f3f2aa581dc6d83056731"
                },
                {
                    "path": ".gitignore",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "76c4c4db5429772d6b57be12a6f9a31847ab9ba4",
                    "size": 381,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/76c4c4db5429772d6b57be12a6f9a31847ab9ba4"
                },
                {
                    "path": ".vscode",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "9f625da5026893fdf80663436fe383617685c930",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/9f625da5026893fdf80663436fe383617685c930"
                },
                {
                    "path": ".vscode/settings.json",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c08fd8804d6dceb3b996ac9d384076a419f13bfe",
                    "size": 147,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c08fd8804d6dceb3b996ac9d384076a419f13bfe"
                },
                {
                    "path": "README.md",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "107baabaf7ed7b69e709a58f1481a667865000a5",
                    "size": 2594,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/107baabaf7ed7b69e709a58f1481a667865000a5"
                },
                {
                    "path": "assets",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "57bf14dd721bed8e939bc7d4b6c87b0856f496df",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/57bf14dd721bed8e939bc7d4b6c87b0856f496df"
                },
                {
                    "path": "assets/image-1.png",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a9d42297bb5976e65de37ea8644880967ab95bf1",
                    "size": 178144,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a9d42297bb5976e65de37ea8644880967ab95bf1"
                },
                {
                    "path": "assets/image.png",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "28b10cf4b13bf0d2831ab139b1625c38799f19a9",
                    "size": 159260,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/28b10cf4b13bf0d2831ab139b1625c38799f19a9"
                },
                {
                    "path": "pages",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "27dc0001fb08f4659939d19a1dd5f896087c1dea",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/27dc0001fb08f4659939d19a1dd5f896087c1dea"
                },
                {
                    "path": "pages/.editorconfig",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3b510aa687ba5d3dbaec1b9c6989327f84261a21",
                    "size": 216,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3b510aa687ba5d3dbaec1b9c6989327f84261a21"
                },
                {
                    "path": "pages/.gitattributes",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6313b56c57848efce05faa7aa7e901ccfc2886ea",
                    "size": 19,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6313b56c57848efce05faa7aa7e901ccfc2886ea"
                },
                {
                    "path": "pages/.gitignore",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a3f7a5198f61d98256615940610af798e85aba0b",
                    "size": 368,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a3f7a5198f61d98256615940610af798e85aba0b"
                },
                {
                    "path": "pages/.prettierrc.json",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0d85bc5f7e75de1d6d37dee16421171579502439",
                    "size": 136,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0d85bc5f7e75de1d6d37dee16421171579502439"
                },
                {
                    "path": "pages/.vscode",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "34fff87e6fc3ae58f8f84a8b5660b81b809c2ff0",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/34fff87e6fc3ae58f8f84a8b5660b81b809c2ff0"
                },
                {
                    "path": "pages/.vscode/extensions.json",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "79375fd1e5e27f40fd5dfb901d050a1ebf0b4657",
                    "size": 142,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/79375fd1e5e27f40fd5dfb901d050a1ebf0b4657"
                },
                {
                    "path": "pages/README.md",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e367a14f79afe4df5d7902053048829457f3cf3e",
                    "size": 1427,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e367a14f79afe4df5d7902053048829457f3cf3e"
                },
                {
                    "path": "pages/auto-imports.d.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "341fc51a1ff8c110488ef813bac8eec735d1b322",
                    "size": 3865,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/341fc51a1ff8c110488ef813bac8eec735d1b322"
                },
                {
                    "path": "pages/components.d.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "72cdedda0d9f6b5ac0ea4d7546a1e80e63a92e57",
                    "size": 2278,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/72cdedda0d9f6b5ac0ea4d7546a1e80e63a92e57"
                },
                {
                    "path": "pages/env.d.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "11f02fe2a0061d6e6e1f271b21da95423b448b32",
                    "size": 38,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/11f02fe2a0061d6e6e1f271b21da95423b448b32"
                },
                {
                    "path": "pages/eslint.config.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b76924fe92e71234bb039aef0266ac36b6c6fdf8",
                    "size": 890,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b76924fe92e71234bb039aef0266ac36b6c6fdf8"
                },
                {
                    "path": "pages/index.html",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9e5fc8f06c69dd7697ad566f198ae6577fdc15b2",
                    "size": 329,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9e5fc8f06c69dd7697ad566f198ae6577fdc15b2"
                },
                {
                    "path": "pages/package.json",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "99b9b4c0a26c5850ee920bd8137b82211e0dc5c9",
                    "size": 1394,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/99b9b4c0a26c5850ee920bd8137b82211e0dc5c9"
                },
                {
                    "path": "pages/pnpm-lock.yaml",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3f0434340eedd77bef689cfe54d9b2c5183f7628",
                    "size": 162546,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3f0434340eedd77bef689cfe54d9b2c5183f7628"
                },
                {
                    "path": "pages/public",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "58599870745eba388fc97d64b5824085feb3c321",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/58599870745eba388fc97d64b5824085feb3c321"
                },
                {
                    "path": "pages/public/favicon.ico",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "df36fcfb72584e00488330b560ebcf34a41c64c2",
                    "size": 4286,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/df36fcfb72584e00488330b560ebcf34a41c64c2"
                },
                {
                    "path": "pages/src",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "374714852c95d50f95cbc9539ccccca69d9c9c93",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/374714852c95d50f95cbc9539ccccca69d9c9c93"
                },
                {
                    "path": "pages/src/App.vue",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6c5192ef8bee338fa4d7c877b7d185b1327e288a",
                    "size": 206,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6c5192ef8bee338fa4d7c877b7d185b1327e288a"
                },
                {
                    "path": "pages/src/api",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "ae6ebd81c089533866272e402ee1ff78fb0fce4a",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/ae6ebd81c089533866272e402ee1ff78fb0fce4a"
                },
                {
                    "path": "pages/src/api/data.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a854e6d5bd0f555d56df2f9aaa93234b061762b6",
                    "size": 227601,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a854e6d5bd0f555d56df2f9aaa93234b061762b6"
                },
                {
                    "path": "pages/src/constants",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "619aa990e73f7e93b7f1847375d65f341c758712",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/619aa990e73f7e93b7f1847375d65f341c758712"
                },
                {
                    "path": "pages/src/constants/index.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "af1fa6dc4466f39e0e8b4bc26aa2268724940d95",
                    "size": 85,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/af1fa6dc4466f39e0e8b4bc26aa2268724940d95"
                },
                {
                    "path": "pages/src/layout",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "e86d0e0d2cfcfbb95b1a098e5a9a3d5c4de7bd98",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/e86d0e0d2cfcfbb95b1a098e5a9a3d5c4de7bd98"
                },
                {
                    "path": "pages/src/layout/index.vue",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c52cf47585052b25fce5a49c4a7e2b5334cc9c10",
                    "size": 348,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c52cf47585052b25fce5a49c4a7e2b5334cc9c10"
                },
                {
                    "path": "pages/src/layout/left-menu.vue",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e5e60b15e3108c6aa23c5c91fd993d5f3d67fa51",
                    "size": 1331,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e5e60b15e3108c6aa23c5c91fd993d5f3d67fa51"
                },
                {
                    "path": "pages/src/layout/right-map",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "5c1a2f47e1d424d9852be02026d05b25b5f2b07f",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/5c1a2f47e1d424d9852be02026d05b25b5f2b07f"
                },
                {
                    "path": "pages/src/layout/right-map/index.vue",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f1e8b1442a9b797570302bf6524e9e62bdc6210e",
                    "size": 2996,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f1e8b1442a9b797570302bf6524e9e62bdc6210e"
                },
                {
                    "path": "pages/src/layout/right-map/t.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "145a099470070f04953faaea2c8f56f7712c1cdf",
                    "size": 2319,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/145a099470070f04953faaea2c8f56f7712c1cdf"
                },
                {
                    "path": "pages/src/main.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8999d8a4792489b4b9a5ef034cf7c1b2671669b9",
                    "size": 235,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8999d8a4792489b4b9a5ef034cf7c1b2671669b9"
                },
                {
                    "path": "pages/src/router",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "016538b17d33b7748f369913726b328b09df7946",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/016538b17d33b7748f369913726b328b09df7946"
                },
                {
                    "path": "pages/src/router/index.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a0b59669f4b242a0ff26e5068f252244475d899d",
                    "size": 292,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a0b59669f4b242a0ff26e5068f252244475d899d"
                },
                {
                    "path": "pages/src/stores",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "21345763131b1b121b90b0c522c4be72c341d8c6",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/21345763131b1b121b90b0c522c4be72c341d8c6"
                },
                {
                    "path": "pages/src/stores/map.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b27ef12d04fcda76f39007b3702f8b1b10961040",
                    "size": 855,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b27ef12d04fcda76f39007b3702f8b1b10961040"
                },
                {
                    "path": "pages/src/stores/menu.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2a6eab09913e24296c9d5a202adf32df471234d8",
                    "size": 558,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2a6eab09913e24296c9d5a202adf32df471234d8"
                },
                {
                    "path": "pages/src/style.css",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a068d890416a7c688b5dfd0af182e3873c5d41ae",
                    "size": 36,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a068d890416a7c688b5dfd0af182e3873c5d41ae"
                },
                {
                    "path": "pages/src/types",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "2020f162e3e0cf869c0798ad7e6020b8611fc010",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/2020f162e3e0cf869c0798ad7e6020b8611fc010"
                },
                {
                    "path": "pages/src/types/index.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "433fb48619c6f3cce7e1dad68713f0d7021f35de",
                    "size": 244,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/433fb48619c6f3cce7e1dad68713f0d7021f35de"
                },
                {
                    "path": "pages/src/utils",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "162af104e79e69f58fbfb82e5f0714d3d86fe900",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/162af104e79e69f58fbfb82e5f0714d3d86fe900"
                },
                {
                    "path": "pages/src/utils/index.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f0a97132156d8d97f2170dda3e67bb62506d01a9",
                    "size": 2890,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f0a97132156d8d97f2170dda3e67bb62506d01a9"
                },
                {
                    "path": "pages/src/views",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "ad01bfaaa6e5ccd77af59531fbdeb398edb40fe9",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/ad01bfaaa6e5ccd77af59531fbdeb398edb40fe9"
                },
                {
                    "path": "pages/src/views/dashboard",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "7e409d6e66e7dab228af27963b3e0757db060025",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/7e409d6e66e7dab228af27963b3e0757db060025"
                },
                {
                    "path": "pages/src/views/dashboard/index.vue",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1601607cb569b184b0a872cc3084263297ab247b",
                    "size": 143,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1601607cb569b184b0a872cc3084263297ab247b"
                },
                {
                    "path": "pages/tsconfig.app.json",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bf9ae26ce938afdad311faa8fa026e1a55fc21c3",
                    "size": 375,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bf9ae26ce938afdad311faa8fa026e1a55fc21c3"
                },
                {
                    "path": "pages/tsconfig.json",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8f5fb569f6e2133494588f56b9c714486f7de0c9",
                    "size": 138,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8f5fb569f6e2133494588f56b9c714486f7de0c9"
                },
                {
                    "path": "pages/tsconfig.node.json",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5d13ab272b6b7ab7fb6627ea82e30d67d2543d28",
                    "size": 424,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5d13ab272b6b7ab7fb6627ea82e30d67d2543d28"
                },
                {
                    "path": "pages/vite.config.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c41f51bf1e6cd185bb8ec82d833da36ff0b3ca67",
                    "size": 919,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c41f51bf1e6cd185bb8ec82d833da36ff0b3ca67"
                },
                {
                    "path": "shared",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "6d628c611a8b022ebc42cbfc30bb669cb660de92",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/6d628c611a8b022ebc42cbfc30bb669cb660de92"
                },
                {
                    "path": "shared/data_record.json",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9be0b09aba70082a70974d6362503215ee94f3c7",
                    "size": 702,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9be0b09aba70082a70974d6362503215ee94f3c7"
                },
                {
                    "path": "shared/data_source",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "b6169f05ff90a2de6c39d51702bf072df0a6f153",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/b6169f05ff90a2de6c39d51702bf072df0a6f153"
                },
                {
                    "path": "shared/data_source/cnemc",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "f5f0efc139d1e7c1ce12faf74decae3d4049e673",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/f5f0efc139d1e7c1ce12faf74decae3d4049e673"
                },
                {
                    "path": "shared/data_source/cnemc/2025",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "ea6ab08b322e076965b62c81ce90593c54b732a3",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/ea6ab08b322e076965b62c81ce90593c54b732a3"
                },
                {
                    "path": "shared/data_source/cnemc/2025/20251226.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8ad2c4358c979082aaa6af6ed6cdb15925baa761",
                    "size": 155466,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8ad2c4358c979082aaa6af6ed6cdb15925baa761"
                },
                {
                    "path": "shared/data_source/cnemc/2025/20251227.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "05e116ae6a83345a2042f32f334806cf6f425526",
                    "size": 339729,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/05e116ae6a83345a2042f32f334806cf6f425526"
                },
                {
                    "path": "shared/data_source/cnemc/2025/20251228.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bacd9b22e9d140959464b35b356141a1787a4f98",
                    "size": 332304,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bacd9b22e9d140959464b35b356141a1787a4f98"
                },
                {
                    "path": "shared/data_source/dem",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "578c260c6a2caac16ec43e1224f80e7f5c3f9f18",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/578c260c6a2caac16ec43e1224f80e7f5c3f9f18"
                },
                {
                    "path": "shared/data_source/dem/dem.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0894a88242d92a00b9bc4e9bf0d466fa3d91df81",
                    "size": 1637164,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0894a88242d92a00b9bc4e9bf0d466fa3d91df81"
                },
                {
                    "path": "shared/data_source/era5",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "14c5177aeec4679e748db6ec4f077233e55eaa21",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/14c5177aeec4679e748db6ec4f077233e55eaa21"
                },
                {
                    "path": "shared/data_source/era5/2025",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "c0c775f099400039d74fdbd9145c0d5c2728aa6e",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/c0c775f099400039d74fdbd9145c0d5c2728aa6e"
                },
                {
                    "path": "shared/data_source/era5/2025/part1",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "f98f3f549bc06c2110ef88e4946075daee22fcbc",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/f98f3f549bc06c2110ef88e4946075daee22fcbc"
                },
                {
                    "path": "shared/data_source/era5/2025/part1/20251218.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "12bb545950da07894e17626c80ec0bd98277b467",
                    "size": 26089329,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/12bb545950da07894e17626c80ec0bd98277b467"
                },
                {
                    "path": "shared/data_source/era5/2025/part1/20251219.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "31e72c484dfa539a5d9185770219a308b0b96844",
                    "size": 26168991,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/31e72c484dfa539a5d9185770219a308b0b96844"
                },
                {
                    "path": "shared/data_source/era5/2025/part1/20251220.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ab15b4ffc4e9595eb510e5417d3906a57debaddb",
                    "size": 26176131,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ab15b4ffc4e9595eb510e5417d3906a57debaddb"
                },
                {
                    "path": "shared/data_source/era5/2025/part1/20251221.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "74229b701f1eae45e3fdfa383bfaee8483154d5a",
                    "size": 26245783,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/74229b701f1eae45e3fdfa383bfaee8483154d5a"
                },
                {
                    "path": "shared/data_source/era5/2025/part2",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "9cc250fc2dd978f0c6d1edc7ce513e2858a797fd",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/9cc250fc2dd978f0c6d1edc7ce513e2858a797fd"
                },
                {
                    "path": "shared/data_source/era5/2025/part2/20251218.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e7b67cd4e96d58c95e0a0b1590867c44d8f1a084",
                    "size": 30235218,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e7b67cd4e96d58c95e0a0b1590867c44d8f1a084"
                },
                {
                    "path": "shared/data_source/era5/2025/part2/20251219.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bb79f5cdd009030e1f26e7599868328fe18e9a9c",
                    "size": 30273358,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bb79f5cdd009030e1f26e7599868328fe18e9a9c"
                },
                {
                    "path": "shared/data_source/era5/2025/part2/20251220.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ec9f0af01db2e1b87e3e033ec2fb7054d20cded5",
                    "size": 30193641,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ec9f0af01db2e1b87e3e033ec2fb7054d20cded5"
                },
                {
                    "path": "shared/data_source/era5/2025/part2/20251221.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "943602b930dba06a8f09ff3aa8c62ba6454f35a7",
                    "size": 30186050,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/943602b930dba06a8f09ff3aa8c62ba6454f35a7"
                },
                {
                    "path": "shared/data_source/era5/2025/part3",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "0deff35819500261850f31876fc6c59795eb2525",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/0deff35819500261850f31876fc6c59795eb2525"
                },
                {
                    "path": "shared/data_source/era5/2025/part3/20251218.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a68f7a1e5974051234614a5ecfcb1b26309e495e",
                    "size": 28125171,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a68f7a1e5974051234614a5ecfcb1b26309e495e"
                },
                {
                    "path": "shared/data_source/era5/2025/part3/20251219.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c1bce87130b73fcba804aa79fb83f10091cc566b",
                    "size": 28953507,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c1bce87130b73fcba804aa79fb83f10091cc566b"
                },
                {
                    "path": "shared/data_source/era5/2025/part3/20251220.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "99cfce7de09ee303691ce50c9761d8e38bddd9ef",
                    "size": 26518532,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/99cfce7de09ee303691ce50c9761d8e38bddd9ef"
                },
                {
                    "path": "shared/data_source/era5/2025/part3/20251221.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8493b103087e58a22e60cde5a7eaf53586eda542",
                    "size": 26552906,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8493b103087e58a22e60cde5a7eaf53586eda542"
                },
                {
                    "path": "shared/data_source/era5/2025/part4",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "0331fe759172d98cdeb81f2f35e6002daecdfb90",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/0331fe759172d98cdeb81f2f35e6002daecdfb90"
                },
                {
                    "path": "shared/data_source/era5/2025/part4/20251218.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "83ad0de2afbfdc223810f9263bd5402fc6b5a6cb",
                    "size": 24865602,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/83ad0de2afbfdc223810f9263bd5402fc6b5a6cb"
                },
                {
                    "path": "shared/data_source/era5/2025/part4/20251219.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8637ab8efbfc3db2c3b6f02c949233ce9bd9ee12",
                    "size": 26990043,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8637ab8efbfc3db2c3b6f02c949233ce9bd9ee12"
                },
                {
                    "path": "shared/data_source/era5/2025/part4/20251220.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ffe2dfc39f1c806076a5dbcc9c5a43452b0b1a45",
                    "size": 26734807,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ffe2dfc39f1c806076a5dbcc9c5a43452b0b1a45"
                },
                {
                    "path": "shared/data_source/era5/2025/part4/20251221.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a145d6eecbcfeb080e6e7f2b852d3682380710ed",
                    "size": 26377229,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a145d6eecbcfeb080e6e7f2b852d3682380710ed"
                },
                {
                    "path": "shared/data_source/gems",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "4bb1abcdc23dd4dd8208322d1e6fcedef1e721a5",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/4bb1abcdc23dd4dd8208322d1e6fcedef1e721a5"
                },
                {
                    "path": "shared/data_source/gems/2025",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "38245caf77701b5c287103397afc79a84b1b1866",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/38245caf77701b5c287103397afc79a84b1b1866"
                },
                {
                    "path": "shared/data_source/gems/2025/20251218.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0ffcb7d3cbfbe167d6105590e20652402fb8dd6f",
                    "size": 1573990,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0ffcb7d3cbfbe167d6105590e20652402fb8dd6f"
                },
                {
                    "path": "shared/data_source/gems/2025/20251219.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4b2a91dd5232f7d259faf97d7100363bdd3db41b",
                    "size": 1295205,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4b2a91dd5232f7d259faf97d7100363bdd3db41b"
                },
                {
                    "path": "shared/data_source/gems/2025/20251220.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "83feb27c8f4f595c0c65380f3ce6b3c6e0dc5b6f",
                    "size": 1195341,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/83feb27c8f4f595c0c65380f3ce6b3c6e0dc5b6f"
                },
                {
                    "path": "shared/data_source/gems/2025/20251228.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8523072739cfcb0d391c7c8e5946cfda57c8f458",
                    "size": 1786115,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8523072739cfcb0d391c7c8e5946cfda57c8f458"
                },
                {
                    "path": "shared/data_source/geojson",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "29de4ba101822fd4c4611eadbf4a020699abd208",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/29de4ba101822fd4c4611eadbf4a020699abd208"
                },
                {
                    "path": "shared/data_source/geojson/china.geojson",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3e7741d33036af7dd703d74df0f11ba89846daf2",
                    "size": 3729732,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3e7741d33036af7dd703d74df0f11ba89846daf2"
                },
                {
                    "path": "shared/data_source/geojson/world.geojson",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e2e1faf3b7ca6103531a72fbed6b291a731e3c50",
                    "size": 92181666,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e2e1faf3b7ca6103531a72fbed6b291a731e3c50"
                },
                {
                    "path": "shared/data_source/geoscf",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "f11cce9cd5f8459e013a609f8081a589806a484f",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/f11cce9cd5f8459e013a609f8081a589806a484f"
                },
                {
                    "path": "shared/data_source/geoscf/2025",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "219d882f996a202806fd695a290978952c626e5a",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/219d882f996a202806fd695a290978952c626e5a"
                },
                {
                    "path": "shared/data_source/geoscf/2025/20251218.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d3f997e1bea5a02a08f29e3c64a48296eccfb440",
                    "size": 18436750,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d3f997e1bea5a02a08f29e3c64a48296eccfb440"
                },
                {
                    "path": "shared/data_source/geoscf/2025/20251219.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e45660025e8a25accaf1c84448ae02353a7ed98f",
                    "size": 18429395,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e45660025e8a25accaf1c84448ae02353a7ed98f"
                },
                {
                    "path": "shared/data_source/geoscf/2025/20251220.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f57cebf520486eea4fe19d44fa7160f368293317",
                    "size": 18317828,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f57cebf520486eea4fe19d44fa7160f368293317"
                },
                {
                    "path": "shared/data_source/geoscf/2025/20251223.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7361bcc6de8ad82c16da54367602312ee3936b2b",
                    "size": 18553088,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7361bcc6de8ad82c16da54367602312ee3936b2b"
                },
                {
                    "path": "shared/data_source/ndvi",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "17512842d0649ef7e9f29a704d60161241650108",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/17512842d0649ef7e9f29a704d60161241650108"
                },
                {
                    "path": "shared/data_source/ndvi/0101.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "14c293e8228bb5ccef5ee4078ac61f738c2337ae",
                    "size": 330245,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/14c293e8228bb5ccef5ee4078ac61f738c2337ae"
                },
                {
                    "path": "shared/data_source/ndvi/0102.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "14c293e8228bb5ccef5ee4078ac61f738c2337ae",
                    "size": 330245,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/14c293e8228bb5ccef5ee4078ac61f738c2337ae"
                },
                {
                    "path": "shared/data_source/ndvi/0103.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "14c293e8228bb5ccef5ee4078ac61f738c2337ae",
                    "size": 330245,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/14c293e8228bb5ccef5ee4078ac61f738c2337ae"
                },
                {
                    "path": "shared/data_source/ndvi/0104.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "14c293e8228bb5ccef5ee4078ac61f738c2337ae",
                    "size": 330245,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/14c293e8228bb5ccef5ee4078ac61f738c2337ae"
                },
                {
                    "path": "shared/data_source/ndvi/0105.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "14c293e8228bb5ccef5ee4078ac61f738c2337ae",
                    "size": 330245,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/14c293e8228bb5ccef5ee4078ac61f738c2337ae"
                },
                {
                    "path": "shared/data_source/ndvi/0106.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "14c293e8228bb5ccef5ee4078ac61f738c2337ae",
                    "size": 330245,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/14c293e8228bb5ccef5ee4078ac61f738c2337ae"
                },
                {
                    "path": "shared/data_source/ndvi/0107.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "14c293e8228bb5ccef5ee4078ac61f738c2337ae",
                    "size": 330245,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/14c293e8228bb5ccef5ee4078ac61f738c2337ae"
                },
                {
                    "path": "shared/data_source/ndvi/0108.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "14c293e8228bb5ccef5ee4078ac61f738c2337ae",
                    "size": 330245,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/14c293e8228bb5ccef5ee4078ac61f738c2337ae"
                },
                {
                    "path": "shared/data_source/ndvi/0109.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "14c293e8228bb5ccef5ee4078ac61f738c2337ae",
                    "size": 330245,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/14c293e8228bb5ccef5ee4078ac61f738c2337ae"
                },
                {
                    "path": "shared/data_source/ndvi/0110.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "14c293e8228bb5ccef5ee4078ac61f738c2337ae",
                    "size": 330245,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/14c293e8228bb5ccef5ee4078ac61f738c2337ae"
                },
                {
                    "path": "shared/data_source/ndvi/0111.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "14c293e8228bb5ccef5ee4078ac61f738c2337ae",
                    "size": 330245,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/14c293e8228bb5ccef5ee4078ac61f738c2337ae"
                },
                {
                    "path": "shared/data_source/ndvi/0112.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "14c293e8228bb5ccef5ee4078ac61f738c2337ae",
                    "size": 330245,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/14c293e8228bb5ccef5ee4078ac61f738c2337ae"
                },
                {
                    "path": "shared/data_source/ndvi/0113.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "14c293e8228bb5ccef5ee4078ac61f738c2337ae",
                    "size": 330245,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/14c293e8228bb5ccef5ee4078ac61f738c2337ae"
                },
                {
                    "path": "shared/data_source/ndvi/0114.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "14c293e8228bb5ccef5ee4078ac61f738c2337ae",
                    "size": 330245,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/14c293e8228bb5ccef5ee4078ac61f738c2337ae"
                },
                {
                    "path": "shared/data_source/ndvi/0115.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "14c293e8228bb5ccef5ee4078ac61f738c2337ae",
                    "size": 330245,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/14c293e8228bb5ccef5ee4078ac61f738c2337ae"
                },
                {
                    "path": "shared/data_source/ndvi/0116.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "14c293e8228bb5ccef5ee4078ac61f738c2337ae",
                    "size": 330245,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/14c293e8228bb5ccef5ee4078ac61f738c2337ae"
                },
                {
                    "path": "shared/data_source/ndvi/0117.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a2f51c019e83381781707e5a2a0c51c9c499d6f3",
                    "size": 328921,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a2f51c019e83381781707e5a2a0c51c9c499d6f3"
                },
                {
                    "path": "shared/data_source/ndvi/0118.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a2f51c019e83381781707e5a2a0c51c9c499d6f3",
                    "size": 328921,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a2f51c019e83381781707e5a2a0c51c9c499d6f3"
                },
                {
                    "path": "shared/data_source/ndvi/0119.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a2f51c019e83381781707e5a2a0c51c9c499d6f3",
                    "size": 328921,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a2f51c019e83381781707e5a2a0c51c9c499d6f3"
                },
                {
                    "path": "shared/data_source/ndvi/0120.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a2f51c019e83381781707e5a2a0c51c9c499d6f3",
                    "size": 328921,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a2f51c019e83381781707e5a2a0c51c9c499d6f3"
                },
                {
                    "path": "shared/data_source/ndvi/0121.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a2f51c019e83381781707e5a2a0c51c9c499d6f3",
                    "size": 328921,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a2f51c019e83381781707e5a2a0c51c9c499d6f3"
                },
                {
                    "path": "shared/data_source/ndvi/0122.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a2f51c019e83381781707e5a2a0c51c9c499d6f3",
                    "size": 328921,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a2f51c019e83381781707e5a2a0c51c9c499d6f3"
                },
                {
                    "path": "shared/data_source/ndvi/0123.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a2f51c019e83381781707e5a2a0c51c9c499d6f3",
                    "size": 328921,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a2f51c019e83381781707e5a2a0c51c9c499d6f3"
                },
                {
                    "path": "shared/data_source/ndvi/0124.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a2f51c019e83381781707e5a2a0c51c9c499d6f3",
                    "size": 328921,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a2f51c019e83381781707e5a2a0c51c9c499d6f3"
                },
                {
                    "path": "shared/data_source/ndvi/0125.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a2f51c019e83381781707e5a2a0c51c9c499d6f3",
                    "size": 328921,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a2f51c019e83381781707e5a2a0c51c9c499d6f3"
                },
                {
                    "path": "shared/data_source/ndvi/0126.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a2f51c019e83381781707e5a2a0c51c9c499d6f3",
                    "size": 328921,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a2f51c019e83381781707e5a2a0c51c9c499d6f3"
                },
                {
                    "path": "shared/data_source/ndvi/0127.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a2f51c019e83381781707e5a2a0c51c9c499d6f3",
                    "size": 328921,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a2f51c019e83381781707e5a2a0c51c9c499d6f3"
                },
                {
                    "path": "shared/data_source/ndvi/0128.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a2f51c019e83381781707e5a2a0c51c9c499d6f3",
                    "size": 328921,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a2f51c019e83381781707e5a2a0c51c9c499d6f3"
                },
                {
                    "path": "shared/data_source/ndvi/0129.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a2f51c019e83381781707e5a2a0c51c9c499d6f3",
                    "size": 328921,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a2f51c019e83381781707e5a2a0c51c9c499d6f3"
                },
                {
                    "path": "shared/data_source/ndvi/0130.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a2f51c019e83381781707e5a2a0c51c9c499d6f3",
                    "size": 328921,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a2f51c019e83381781707e5a2a0c51c9c499d6f3"
                },
                {
                    "path": "shared/data_source/ndvi/0131.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a2f51c019e83381781707e5a2a0c51c9c499d6f3",
                    "size": 328921,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a2f51c019e83381781707e5a2a0c51c9c499d6f3"
                },
                {
                    "path": "shared/data_source/ndvi/0201.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a2f51c019e83381781707e5a2a0c51c9c499d6f3",
                    "size": 328921,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a2f51c019e83381781707e5a2a0c51c9c499d6f3"
                },
                {
                    "path": "shared/data_source/ndvi/0202.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b",
                    "size": 331212,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b"
                },
                {
                    "path": "shared/data_source/ndvi/0203.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b",
                    "size": 331212,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b"
                },
                {
                    "path": "shared/data_source/ndvi/0204.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b",
                    "size": 331212,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b"
                },
                {
                    "path": "shared/data_source/ndvi/0205.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b",
                    "size": 331212,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b"
                },
                {
                    "path": "shared/data_source/ndvi/0206.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b",
                    "size": 331212,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b"
                },
                {
                    "path": "shared/data_source/ndvi/0207.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b",
                    "size": 331212,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b"
                },
                {
                    "path": "shared/data_source/ndvi/0208.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b",
                    "size": 331212,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b"
                },
                {
                    "path": "shared/data_source/ndvi/0209.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b",
                    "size": 331212,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b"
                },
                {
                    "path": "shared/data_source/ndvi/0210.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b",
                    "size": 331212,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b"
                },
                {
                    "path": "shared/data_source/ndvi/0211.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b",
                    "size": 331212,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b"
                },
                {
                    "path": "shared/data_source/ndvi/0212.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b",
                    "size": 331212,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b"
                },
                {
                    "path": "shared/data_source/ndvi/0213.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b",
                    "size": 331212,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b"
                },
                {
                    "path": "shared/data_source/ndvi/0214.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b",
                    "size": 331212,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b"
                },
                {
                    "path": "shared/data_source/ndvi/0215.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b",
                    "size": 331212,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b"
                },
                {
                    "path": "shared/data_source/ndvi/0216.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b",
                    "size": 331212,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b"
                },
                {
                    "path": "shared/data_source/ndvi/0217.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b",
                    "size": 331212,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4dad2e40024f16af21cb99b70e1e4ce9d4fd6c1b"
                },
                {
                    "path": "shared/data_source/ndvi/0218.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "29e44b705f013257e528f8cadca15358ac7610e2",
                    "size": 328966,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/29e44b705f013257e528f8cadca15358ac7610e2"
                },
                {
                    "path": "shared/data_source/ndvi/0219.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "29e44b705f013257e528f8cadca15358ac7610e2",
                    "size": 328966,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/29e44b705f013257e528f8cadca15358ac7610e2"
                },
                {
                    "path": "shared/data_source/ndvi/0220.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "29e44b705f013257e528f8cadca15358ac7610e2",
                    "size": 328966,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/29e44b705f013257e528f8cadca15358ac7610e2"
                },
                {
                    "path": "shared/data_source/ndvi/0221.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "29e44b705f013257e528f8cadca15358ac7610e2",
                    "size": 328966,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/29e44b705f013257e528f8cadca15358ac7610e2"
                },
                {
                    "path": "shared/data_source/ndvi/0222.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "29e44b705f013257e528f8cadca15358ac7610e2",
                    "size": 328966,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/29e44b705f013257e528f8cadca15358ac7610e2"
                },
                {
                    "path": "shared/data_source/ndvi/0223.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "29e44b705f013257e528f8cadca15358ac7610e2",
                    "size": 328966,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/29e44b705f013257e528f8cadca15358ac7610e2"
                },
                {
                    "path": "shared/data_source/ndvi/0224.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "29e44b705f013257e528f8cadca15358ac7610e2",
                    "size": 328966,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/29e44b705f013257e528f8cadca15358ac7610e2"
                },
                {
                    "path": "shared/data_source/ndvi/0225.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "29e44b705f013257e528f8cadca15358ac7610e2",
                    "size": 328966,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/29e44b705f013257e528f8cadca15358ac7610e2"
                },
                {
                    "path": "shared/data_source/ndvi/0226.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "29e44b705f013257e528f8cadca15358ac7610e2",
                    "size": 328966,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/29e44b705f013257e528f8cadca15358ac7610e2"
                },
                {
                    "path": "shared/data_source/ndvi/0227.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "29e44b705f013257e528f8cadca15358ac7610e2",
                    "size": 328966,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/29e44b705f013257e528f8cadca15358ac7610e2"
                },
                {
                    "path": "shared/data_source/ndvi/0228.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "29e44b705f013257e528f8cadca15358ac7610e2",
                    "size": 328966,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/29e44b705f013257e528f8cadca15358ac7610e2"
                },
                {
                    "path": "shared/data_source/ndvi/0301.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "29e44b705f013257e528f8cadca15358ac7610e2",
                    "size": 328966,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/29e44b705f013257e528f8cadca15358ac7610e2"
                },
                {
                    "path": "shared/data_source/ndvi/0302.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "29e44b705f013257e528f8cadca15358ac7610e2",
                    "size": 328966,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/29e44b705f013257e528f8cadca15358ac7610e2"
                },
                {
                    "path": "shared/data_source/ndvi/0303.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "29e44b705f013257e528f8cadca15358ac7610e2",
                    "size": 328966,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/29e44b705f013257e528f8cadca15358ac7610e2"
                },
                {
                    "path": "shared/data_source/ndvi/0304.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "29e44b705f013257e528f8cadca15358ac7610e2",
                    "size": 328966,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/29e44b705f013257e528f8cadca15358ac7610e2"
                },
                {
                    "path": "shared/data_source/ndvi/0305.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "29e44b705f013257e528f8cadca15358ac7610e2",
                    "size": 328966,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/29e44b705f013257e528f8cadca15358ac7610e2"
                },
                {
                    "path": "shared/data_source/ndvi/0306.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "be700d5f329a4402b5c94d06864cff926ec55d7e",
                    "size": 329361,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/be700d5f329a4402b5c94d06864cff926ec55d7e"
                },
                {
                    "path": "shared/data_source/ndvi/0307.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "be700d5f329a4402b5c94d06864cff926ec55d7e",
                    "size": 329361,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/be700d5f329a4402b5c94d06864cff926ec55d7e"
                },
                {
                    "path": "shared/data_source/ndvi/0308.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "be700d5f329a4402b5c94d06864cff926ec55d7e",
                    "size": 329361,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/be700d5f329a4402b5c94d06864cff926ec55d7e"
                },
                {
                    "path": "shared/data_source/ndvi/0309.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "be700d5f329a4402b5c94d06864cff926ec55d7e",
                    "size": 329361,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/be700d5f329a4402b5c94d06864cff926ec55d7e"
                },
                {
                    "path": "shared/data_source/ndvi/0310.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "be700d5f329a4402b5c94d06864cff926ec55d7e",
                    "size": 329361,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/be700d5f329a4402b5c94d06864cff926ec55d7e"
                },
                {
                    "path": "shared/data_source/ndvi/0311.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "be700d5f329a4402b5c94d06864cff926ec55d7e",
                    "size": 329361,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/be700d5f329a4402b5c94d06864cff926ec55d7e"
                },
                {
                    "path": "shared/data_source/ndvi/0312.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "be700d5f329a4402b5c94d06864cff926ec55d7e",
                    "size": 329361,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/be700d5f329a4402b5c94d06864cff926ec55d7e"
                },
                {
                    "path": "shared/data_source/ndvi/0313.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "be700d5f329a4402b5c94d06864cff926ec55d7e",
                    "size": 329361,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/be700d5f329a4402b5c94d06864cff926ec55d7e"
                },
                {
                    "path": "shared/data_source/ndvi/0314.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "be700d5f329a4402b5c94d06864cff926ec55d7e",
                    "size": 329361,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/be700d5f329a4402b5c94d06864cff926ec55d7e"
                },
                {
                    "path": "shared/data_source/ndvi/0315.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "be700d5f329a4402b5c94d06864cff926ec55d7e",
                    "size": 329361,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/be700d5f329a4402b5c94d06864cff926ec55d7e"
                },
                {
                    "path": "shared/data_source/ndvi/0316.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "be700d5f329a4402b5c94d06864cff926ec55d7e",
                    "size": 329361,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/be700d5f329a4402b5c94d06864cff926ec55d7e"
                },
                {
                    "path": "shared/data_source/ndvi/0317.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "be700d5f329a4402b5c94d06864cff926ec55d7e",
                    "size": 329361,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/be700d5f329a4402b5c94d06864cff926ec55d7e"
                },
                {
                    "path": "shared/data_source/ndvi/0318.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "be700d5f329a4402b5c94d06864cff926ec55d7e",
                    "size": 329361,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/be700d5f329a4402b5c94d06864cff926ec55d7e"
                },
                {
                    "path": "shared/data_source/ndvi/0319.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "be700d5f329a4402b5c94d06864cff926ec55d7e",
                    "size": 329361,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/be700d5f329a4402b5c94d06864cff926ec55d7e"
                },
                {
                    "path": "shared/data_source/ndvi/0320.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "be700d5f329a4402b5c94d06864cff926ec55d7e",
                    "size": 329361,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/be700d5f329a4402b5c94d06864cff926ec55d7e"
                },
                {
                    "path": "shared/data_source/ndvi/0321.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "be700d5f329a4402b5c94d06864cff926ec55d7e",
                    "size": 329361,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/be700d5f329a4402b5c94d06864cff926ec55d7e"
                },
                {
                    "path": "shared/data_source/ndvi/0322.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c3f9ad72071f2a623a07fbca0df7adb94c8b6b10",
                    "size": 323380,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c3f9ad72071f2a623a07fbca0df7adb94c8b6b10"
                },
                {
                    "path": "shared/data_source/ndvi/0323.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c3f9ad72071f2a623a07fbca0df7adb94c8b6b10",
                    "size": 323380,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c3f9ad72071f2a623a07fbca0df7adb94c8b6b10"
                },
                {
                    "path": "shared/data_source/ndvi/0324.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c3f9ad72071f2a623a07fbca0df7adb94c8b6b10",
                    "size": 323380,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c3f9ad72071f2a623a07fbca0df7adb94c8b6b10"
                },
                {
                    "path": "shared/data_source/ndvi/0325.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c3f9ad72071f2a623a07fbca0df7adb94c8b6b10",
                    "size": 323380,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c3f9ad72071f2a623a07fbca0df7adb94c8b6b10"
                },
                {
                    "path": "shared/data_source/ndvi/0326.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c3f9ad72071f2a623a07fbca0df7adb94c8b6b10",
                    "size": 323380,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c3f9ad72071f2a623a07fbca0df7adb94c8b6b10"
                },
                {
                    "path": "shared/data_source/ndvi/0327.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c3f9ad72071f2a623a07fbca0df7adb94c8b6b10",
                    "size": 323380,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c3f9ad72071f2a623a07fbca0df7adb94c8b6b10"
                },
                {
                    "path": "shared/data_source/ndvi/0328.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c3f9ad72071f2a623a07fbca0df7adb94c8b6b10",
                    "size": 323380,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c3f9ad72071f2a623a07fbca0df7adb94c8b6b10"
                },
                {
                    "path": "shared/data_source/ndvi/0329.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c3f9ad72071f2a623a07fbca0df7adb94c8b6b10",
                    "size": 323380,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c3f9ad72071f2a623a07fbca0df7adb94c8b6b10"
                },
                {
                    "path": "shared/data_source/ndvi/0330.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c3f9ad72071f2a623a07fbca0df7adb94c8b6b10",
                    "size": 323380,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c3f9ad72071f2a623a07fbca0df7adb94c8b6b10"
                },
                {
                    "path": "shared/data_source/ndvi/0331.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c3f9ad72071f2a623a07fbca0df7adb94c8b6b10",
                    "size": 323380,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c3f9ad72071f2a623a07fbca0df7adb94c8b6b10"
                },
                {
                    "path": "shared/data_source/ndvi/0401.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c3f9ad72071f2a623a07fbca0df7adb94c8b6b10",
                    "size": 323380,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c3f9ad72071f2a623a07fbca0df7adb94c8b6b10"
                },
                {
                    "path": "shared/data_source/ndvi/0402.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c3f9ad72071f2a623a07fbca0df7adb94c8b6b10",
                    "size": 323380,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c3f9ad72071f2a623a07fbca0df7adb94c8b6b10"
                },
                {
                    "path": "shared/data_source/ndvi/0403.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c3f9ad72071f2a623a07fbca0df7adb94c8b6b10",
                    "size": 323380,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c3f9ad72071f2a623a07fbca0df7adb94c8b6b10"
                },
                {
                    "path": "shared/data_source/ndvi/0404.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c3f9ad72071f2a623a07fbca0df7adb94c8b6b10",
                    "size": 323380,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c3f9ad72071f2a623a07fbca0df7adb94c8b6b10"
                },
                {
                    "path": "shared/data_source/ndvi/0405.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c3f9ad72071f2a623a07fbca0df7adb94c8b6b10",
                    "size": 323380,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c3f9ad72071f2a623a07fbca0df7adb94c8b6b10"
                },
                {
                    "path": "shared/data_source/ndvi/0406.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c3f9ad72071f2a623a07fbca0df7adb94c8b6b10",
                    "size": 323380,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c3f9ad72071f2a623a07fbca0df7adb94c8b6b10"
                },
                {
                    "path": "shared/data_source/ndvi/0407.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "34341dc14f4ba04df361faf569cc25e999369c71",
                    "size": 329310,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/34341dc14f4ba04df361faf569cc25e999369c71"
                },
                {
                    "path": "shared/data_source/ndvi/0408.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "34341dc14f4ba04df361faf569cc25e999369c71",
                    "size": 329310,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/34341dc14f4ba04df361faf569cc25e999369c71"
                },
                {
                    "path": "shared/data_source/ndvi/0409.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "34341dc14f4ba04df361faf569cc25e999369c71",
                    "size": 329310,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/34341dc14f4ba04df361faf569cc25e999369c71"
                },
                {
                    "path": "shared/data_source/ndvi/0410.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "34341dc14f4ba04df361faf569cc25e999369c71",
                    "size": 329310,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/34341dc14f4ba04df361faf569cc25e999369c71"
                },
                {
                    "path": "shared/data_source/ndvi/0411.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "34341dc14f4ba04df361faf569cc25e999369c71",
                    "size": 329310,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/34341dc14f4ba04df361faf569cc25e999369c71"
                },
                {
                    "path": "shared/data_source/ndvi/0412.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "34341dc14f4ba04df361faf569cc25e999369c71",
                    "size": 329310,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/34341dc14f4ba04df361faf569cc25e999369c71"
                },
                {
                    "path": "shared/data_source/ndvi/0413.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "34341dc14f4ba04df361faf569cc25e999369c71",
                    "size": 329310,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/34341dc14f4ba04df361faf569cc25e999369c71"
                },
                {
                    "path": "shared/data_source/ndvi/0414.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "34341dc14f4ba04df361faf569cc25e999369c71",
                    "size": 329310,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/34341dc14f4ba04df361faf569cc25e999369c71"
                },
                {
                    "path": "shared/data_source/ndvi/0415.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "34341dc14f4ba04df361faf569cc25e999369c71",
                    "size": 329310,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/34341dc14f4ba04df361faf569cc25e999369c71"
                },
                {
                    "path": "shared/data_source/ndvi/0416.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "34341dc14f4ba04df361faf569cc25e999369c71",
                    "size": 329310,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/34341dc14f4ba04df361faf569cc25e999369c71"
                },
                {
                    "path": "shared/data_source/ndvi/0417.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "34341dc14f4ba04df361faf569cc25e999369c71",
                    "size": 329310,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/34341dc14f4ba04df361faf569cc25e999369c71"
                },
                {
                    "path": "shared/data_source/ndvi/0418.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "34341dc14f4ba04df361faf569cc25e999369c71",
                    "size": 329310,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/34341dc14f4ba04df361faf569cc25e999369c71"
                },
                {
                    "path": "shared/data_source/ndvi/0419.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "34341dc14f4ba04df361faf569cc25e999369c71",
                    "size": 329310,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/34341dc14f4ba04df361faf569cc25e999369c71"
                },
                {
                    "path": "shared/data_source/ndvi/0420.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "34341dc14f4ba04df361faf569cc25e999369c71",
                    "size": 329310,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/34341dc14f4ba04df361faf569cc25e999369c71"
                },
                {
                    "path": "shared/data_source/ndvi/0421.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "34341dc14f4ba04df361faf569cc25e999369c71",
                    "size": 329310,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/34341dc14f4ba04df361faf569cc25e999369c71"
                },
                {
                    "path": "shared/data_source/ndvi/0422.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "34341dc14f4ba04df361faf569cc25e999369c71",
                    "size": 329310,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/34341dc14f4ba04df361faf569cc25e999369c71"
                },
                {
                    "path": "shared/data_source/ndvi/0423.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "831ce7819d5c97d35dbea62a6831235306122e21",
                    "size": 330683,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/831ce7819d5c97d35dbea62a6831235306122e21"
                },
                {
                    "path": "shared/data_source/ndvi/0424.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "831ce7819d5c97d35dbea62a6831235306122e21",
                    "size": 330683,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/831ce7819d5c97d35dbea62a6831235306122e21"
                },
                {
                    "path": "shared/data_source/ndvi/0425.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "831ce7819d5c97d35dbea62a6831235306122e21",
                    "size": 330683,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/831ce7819d5c97d35dbea62a6831235306122e21"
                },
                {
                    "path": "shared/data_source/ndvi/0426.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "831ce7819d5c97d35dbea62a6831235306122e21",
                    "size": 330683,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/831ce7819d5c97d35dbea62a6831235306122e21"
                },
                {
                    "path": "shared/data_source/ndvi/0427.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "831ce7819d5c97d35dbea62a6831235306122e21",
                    "size": 330683,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/831ce7819d5c97d35dbea62a6831235306122e21"
                },
                {
                    "path": "shared/data_source/ndvi/0428.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "831ce7819d5c97d35dbea62a6831235306122e21",
                    "size": 330683,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/831ce7819d5c97d35dbea62a6831235306122e21"
                },
                {
                    "path": "shared/data_source/ndvi/0429.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "831ce7819d5c97d35dbea62a6831235306122e21",
                    "size": 330683,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/831ce7819d5c97d35dbea62a6831235306122e21"
                },
                {
                    "path": "shared/data_source/ndvi/0430.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "831ce7819d5c97d35dbea62a6831235306122e21",
                    "size": 330683,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/831ce7819d5c97d35dbea62a6831235306122e21"
                },
                {
                    "path": "shared/data_source/ndvi/0501.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "831ce7819d5c97d35dbea62a6831235306122e21",
                    "size": 330683,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/831ce7819d5c97d35dbea62a6831235306122e21"
                },
                {
                    "path": "shared/data_source/ndvi/0502.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "831ce7819d5c97d35dbea62a6831235306122e21",
                    "size": 330683,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/831ce7819d5c97d35dbea62a6831235306122e21"
                },
                {
                    "path": "shared/data_source/ndvi/0503.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "831ce7819d5c97d35dbea62a6831235306122e21",
                    "size": 330683,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/831ce7819d5c97d35dbea62a6831235306122e21"
                },
                {
                    "path": "shared/data_source/ndvi/0504.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "831ce7819d5c97d35dbea62a6831235306122e21",
                    "size": 330683,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/831ce7819d5c97d35dbea62a6831235306122e21"
                },
                {
                    "path": "shared/data_source/ndvi/0505.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "831ce7819d5c97d35dbea62a6831235306122e21",
                    "size": 330683,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/831ce7819d5c97d35dbea62a6831235306122e21"
                },
                {
                    "path": "shared/data_source/ndvi/0506.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "831ce7819d5c97d35dbea62a6831235306122e21",
                    "size": 330683,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/831ce7819d5c97d35dbea62a6831235306122e21"
                },
                {
                    "path": "shared/data_source/ndvi/0507.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "831ce7819d5c97d35dbea62a6831235306122e21",
                    "size": 330683,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/831ce7819d5c97d35dbea62a6831235306122e21"
                },
                {
                    "path": "shared/data_source/ndvi/0508.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "831ce7819d5c97d35dbea62a6831235306122e21",
                    "size": 330683,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/831ce7819d5c97d35dbea62a6831235306122e21"
                },
                {
                    "path": "shared/data_source/ndvi/0509.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f1eddb27aa486e7593e225068d9b6c42520cb8e5",
                    "size": 337821,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f1eddb27aa486e7593e225068d9b6c42520cb8e5"
                },
                {
                    "path": "shared/data_source/ndvi/0510.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f1eddb27aa486e7593e225068d9b6c42520cb8e5",
                    "size": 337821,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f1eddb27aa486e7593e225068d9b6c42520cb8e5"
                },
                {
                    "path": "shared/data_source/ndvi/0511.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f1eddb27aa486e7593e225068d9b6c42520cb8e5",
                    "size": 337821,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f1eddb27aa486e7593e225068d9b6c42520cb8e5"
                },
                {
                    "path": "shared/data_source/ndvi/0512.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f1eddb27aa486e7593e225068d9b6c42520cb8e5",
                    "size": 337821,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f1eddb27aa486e7593e225068d9b6c42520cb8e5"
                },
                {
                    "path": "shared/data_source/ndvi/0513.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f1eddb27aa486e7593e225068d9b6c42520cb8e5",
                    "size": 337821,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f1eddb27aa486e7593e225068d9b6c42520cb8e5"
                },
                {
                    "path": "shared/data_source/ndvi/0514.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f1eddb27aa486e7593e225068d9b6c42520cb8e5",
                    "size": 337821,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f1eddb27aa486e7593e225068d9b6c42520cb8e5"
                },
                {
                    "path": "shared/data_source/ndvi/0515.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f1eddb27aa486e7593e225068d9b6c42520cb8e5",
                    "size": 337821,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f1eddb27aa486e7593e225068d9b6c42520cb8e5"
                },
                {
                    "path": "shared/data_source/ndvi/0516.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f1eddb27aa486e7593e225068d9b6c42520cb8e5",
                    "size": 337821,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f1eddb27aa486e7593e225068d9b6c42520cb8e5"
                },
                {
                    "path": "shared/data_source/ndvi/0517.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f1eddb27aa486e7593e225068d9b6c42520cb8e5",
                    "size": 337821,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f1eddb27aa486e7593e225068d9b6c42520cb8e5"
                },
                {
                    "path": "shared/data_source/ndvi/0518.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f1eddb27aa486e7593e225068d9b6c42520cb8e5",
                    "size": 337821,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f1eddb27aa486e7593e225068d9b6c42520cb8e5"
                },
                {
                    "path": "shared/data_source/ndvi/0519.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f1eddb27aa486e7593e225068d9b6c42520cb8e5",
                    "size": 337821,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f1eddb27aa486e7593e225068d9b6c42520cb8e5"
                },
                {
                    "path": "shared/data_source/ndvi/0520.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f1eddb27aa486e7593e225068d9b6c42520cb8e5",
                    "size": 337821,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f1eddb27aa486e7593e225068d9b6c42520cb8e5"
                },
                {
                    "path": "shared/data_source/ndvi/0521.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f1eddb27aa486e7593e225068d9b6c42520cb8e5",
                    "size": 337821,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f1eddb27aa486e7593e225068d9b6c42520cb8e5"
                },
                {
                    "path": "shared/data_source/ndvi/0522.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f1eddb27aa486e7593e225068d9b6c42520cb8e5",
                    "size": 337821,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f1eddb27aa486e7593e225068d9b6c42520cb8e5"
                },
                {
                    "path": "shared/data_source/ndvi/0523.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f1eddb27aa486e7593e225068d9b6c42520cb8e5",
                    "size": 337821,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f1eddb27aa486e7593e225068d9b6c42520cb8e5"
                },
                {
                    "path": "shared/data_source/ndvi/0524.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f1eddb27aa486e7593e225068d9b6c42520cb8e5",
                    "size": 337821,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f1eddb27aa486e7593e225068d9b6c42520cb8e5"
                },
                {
                    "path": "shared/data_source/ndvi/0525.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "aab5e2aacadbf5bdd8214643b8281ff236b22297",
                    "size": 359849,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/aab5e2aacadbf5bdd8214643b8281ff236b22297"
                },
                {
                    "path": "shared/data_source/ndvi/0526.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "aab5e2aacadbf5bdd8214643b8281ff236b22297",
                    "size": 359849,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/aab5e2aacadbf5bdd8214643b8281ff236b22297"
                },
                {
                    "path": "shared/data_source/ndvi/0527.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "aab5e2aacadbf5bdd8214643b8281ff236b22297",
                    "size": 359849,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/aab5e2aacadbf5bdd8214643b8281ff236b22297"
                },
                {
                    "path": "shared/data_source/ndvi/0528.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "aab5e2aacadbf5bdd8214643b8281ff236b22297",
                    "size": 359849,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/aab5e2aacadbf5bdd8214643b8281ff236b22297"
                },
                {
                    "path": "shared/data_source/ndvi/0529.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "aab5e2aacadbf5bdd8214643b8281ff236b22297",
                    "size": 359849,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/aab5e2aacadbf5bdd8214643b8281ff236b22297"
                },
                {
                    "path": "shared/data_source/ndvi/0530.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "aab5e2aacadbf5bdd8214643b8281ff236b22297",
                    "size": 359849,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/aab5e2aacadbf5bdd8214643b8281ff236b22297"
                },
                {
                    "path": "shared/data_source/ndvi/0531.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "aab5e2aacadbf5bdd8214643b8281ff236b22297",
                    "size": 359849,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/aab5e2aacadbf5bdd8214643b8281ff236b22297"
                },
                {
                    "path": "shared/data_source/ndvi/0601.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "aab5e2aacadbf5bdd8214643b8281ff236b22297",
                    "size": 359849,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/aab5e2aacadbf5bdd8214643b8281ff236b22297"
                },
                {
                    "path": "shared/data_source/ndvi/0602.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "aab5e2aacadbf5bdd8214643b8281ff236b22297",
                    "size": 359849,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/aab5e2aacadbf5bdd8214643b8281ff236b22297"
                },
                {
                    "path": "shared/data_source/ndvi/0603.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "aab5e2aacadbf5bdd8214643b8281ff236b22297",
                    "size": 359849,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/aab5e2aacadbf5bdd8214643b8281ff236b22297"
                },
                {
                    "path": "shared/data_source/ndvi/0604.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "aab5e2aacadbf5bdd8214643b8281ff236b22297",
                    "size": 359849,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/aab5e2aacadbf5bdd8214643b8281ff236b22297"
                },
                {
                    "path": "shared/data_source/ndvi/0605.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "aab5e2aacadbf5bdd8214643b8281ff236b22297",
                    "size": 359849,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/aab5e2aacadbf5bdd8214643b8281ff236b22297"
                },
                {
                    "path": "shared/data_source/ndvi/0606.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "aab5e2aacadbf5bdd8214643b8281ff236b22297",
                    "size": 359849,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/aab5e2aacadbf5bdd8214643b8281ff236b22297"
                },
                {
                    "path": "shared/data_source/ndvi/0607.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "aab5e2aacadbf5bdd8214643b8281ff236b22297",
                    "size": 359849,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/aab5e2aacadbf5bdd8214643b8281ff236b22297"
                },
                {
                    "path": "shared/data_source/ndvi/0608.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "aab5e2aacadbf5bdd8214643b8281ff236b22297",
                    "size": 359849,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/aab5e2aacadbf5bdd8214643b8281ff236b22297"
                },
                {
                    "path": "shared/data_source/ndvi/0609.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "aab5e2aacadbf5bdd8214643b8281ff236b22297",
                    "size": 359849,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/aab5e2aacadbf5bdd8214643b8281ff236b22297"
                },
                {
                    "path": "shared/data_source/ndvi/0610.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc578a8a9c104fe64c369d09786543d7b93b02e7",
                    "size": 356468,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc578a8a9c104fe64c369d09786543d7b93b02e7"
                },
                {
                    "path": "shared/data_source/ndvi/0611.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc578a8a9c104fe64c369d09786543d7b93b02e7",
                    "size": 356468,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc578a8a9c104fe64c369d09786543d7b93b02e7"
                },
                {
                    "path": "shared/data_source/ndvi/0612.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc578a8a9c104fe64c369d09786543d7b93b02e7",
                    "size": 356468,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc578a8a9c104fe64c369d09786543d7b93b02e7"
                },
                {
                    "path": "shared/data_source/ndvi/0613.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc578a8a9c104fe64c369d09786543d7b93b02e7",
                    "size": 356468,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc578a8a9c104fe64c369d09786543d7b93b02e7"
                },
                {
                    "path": "shared/data_source/ndvi/0614.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc578a8a9c104fe64c369d09786543d7b93b02e7",
                    "size": 356468,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc578a8a9c104fe64c369d09786543d7b93b02e7"
                },
                {
                    "path": "shared/data_source/ndvi/0615.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc578a8a9c104fe64c369d09786543d7b93b02e7",
                    "size": 356468,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc578a8a9c104fe64c369d09786543d7b93b02e7"
                },
                {
                    "path": "shared/data_source/ndvi/0616.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc578a8a9c104fe64c369d09786543d7b93b02e7",
                    "size": 356468,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc578a8a9c104fe64c369d09786543d7b93b02e7"
                },
                {
                    "path": "shared/data_source/ndvi/0617.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc578a8a9c104fe64c369d09786543d7b93b02e7",
                    "size": 356468,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc578a8a9c104fe64c369d09786543d7b93b02e7"
                },
                {
                    "path": "shared/data_source/ndvi/0618.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc578a8a9c104fe64c369d09786543d7b93b02e7",
                    "size": 356468,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc578a8a9c104fe64c369d09786543d7b93b02e7"
                },
                {
                    "path": "shared/data_source/ndvi/0619.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc578a8a9c104fe64c369d09786543d7b93b02e7",
                    "size": 356468,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc578a8a9c104fe64c369d09786543d7b93b02e7"
                },
                {
                    "path": "shared/data_source/ndvi/0620.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc578a8a9c104fe64c369d09786543d7b93b02e7",
                    "size": 356468,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc578a8a9c104fe64c369d09786543d7b93b02e7"
                },
                {
                    "path": "shared/data_source/ndvi/0621.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc578a8a9c104fe64c369d09786543d7b93b02e7",
                    "size": 356468,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc578a8a9c104fe64c369d09786543d7b93b02e7"
                },
                {
                    "path": "shared/data_source/ndvi/0622.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc578a8a9c104fe64c369d09786543d7b93b02e7",
                    "size": 356468,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc578a8a9c104fe64c369d09786543d7b93b02e7"
                },
                {
                    "path": "shared/data_source/ndvi/0623.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc578a8a9c104fe64c369d09786543d7b93b02e7",
                    "size": 356468,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc578a8a9c104fe64c369d09786543d7b93b02e7"
                },
                {
                    "path": "shared/data_source/ndvi/0624.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc578a8a9c104fe64c369d09786543d7b93b02e7",
                    "size": 356468,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc578a8a9c104fe64c369d09786543d7b93b02e7"
                },
                {
                    "path": "shared/data_source/ndvi/0625.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc578a8a9c104fe64c369d09786543d7b93b02e7",
                    "size": 356468,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc578a8a9c104fe64c369d09786543d7b93b02e7"
                },
                {
                    "path": "shared/data_source/ndvi/0626.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6801da3770419fa5382b9290a24d6175ae034e7c",
                    "size": 357056,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6801da3770419fa5382b9290a24d6175ae034e7c"
                },
                {
                    "path": "shared/data_source/ndvi/0627.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6801da3770419fa5382b9290a24d6175ae034e7c",
                    "size": 357056,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6801da3770419fa5382b9290a24d6175ae034e7c"
                },
                {
                    "path": "shared/data_source/ndvi/0628.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6801da3770419fa5382b9290a24d6175ae034e7c",
                    "size": 357056,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6801da3770419fa5382b9290a24d6175ae034e7c"
                },
                {
                    "path": "shared/data_source/ndvi/0629.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6801da3770419fa5382b9290a24d6175ae034e7c",
                    "size": 357056,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6801da3770419fa5382b9290a24d6175ae034e7c"
                },
                {
                    "path": "shared/data_source/ndvi/0630.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6801da3770419fa5382b9290a24d6175ae034e7c",
                    "size": 357056,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6801da3770419fa5382b9290a24d6175ae034e7c"
                },
                {
                    "path": "shared/data_source/ndvi/0701.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6801da3770419fa5382b9290a24d6175ae034e7c",
                    "size": 357056,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6801da3770419fa5382b9290a24d6175ae034e7c"
                },
                {
                    "path": "shared/data_source/ndvi/0702.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6801da3770419fa5382b9290a24d6175ae034e7c",
                    "size": 357056,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6801da3770419fa5382b9290a24d6175ae034e7c"
                },
                {
                    "path": "shared/data_source/ndvi/0703.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6801da3770419fa5382b9290a24d6175ae034e7c",
                    "size": 357056,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6801da3770419fa5382b9290a24d6175ae034e7c"
                },
                {
                    "path": "shared/data_source/ndvi/0704.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6801da3770419fa5382b9290a24d6175ae034e7c",
                    "size": 357056,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6801da3770419fa5382b9290a24d6175ae034e7c"
                },
                {
                    "path": "shared/data_source/ndvi/0705.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6801da3770419fa5382b9290a24d6175ae034e7c",
                    "size": 357056,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6801da3770419fa5382b9290a24d6175ae034e7c"
                },
                {
                    "path": "shared/data_source/ndvi/0706.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6801da3770419fa5382b9290a24d6175ae034e7c",
                    "size": 357056,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6801da3770419fa5382b9290a24d6175ae034e7c"
                },
                {
                    "path": "shared/data_source/ndvi/0707.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6801da3770419fa5382b9290a24d6175ae034e7c",
                    "size": 357056,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6801da3770419fa5382b9290a24d6175ae034e7c"
                },
                {
                    "path": "shared/data_source/ndvi/0708.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6801da3770419fa5382b9290a24d6175ae034e7c",
                    "size": 357056,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6801da3770419fa5382b9290a24d6175ae034e7c"
                },
                {
                    "path": "shared/data_source/ndvi/0709.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6801da3770419fa5382b9290a24d6175ae034e7c",
                    "size": 357056,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6801da3770419fa5382b9290a24d6175ae034e7c"
                },
                {
                    "path": "shared/data_source/ndvi/0710.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6801da3770419fa5382b9290a24d6175ae034e7c",
                    "size": 357056,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6801da3770419fa5382b9290a24d6175ae034e7c"
                },
                {
                    "path": "shared/data_source/ndvi/0711.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6801da3770419fa5382b9290a24d6175ae034e7c",
                    "size": 357056,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6801da3770419fa5382b9290a24d6175ae034e7c"
                },
                {
                    "path": "shared/data_source/ndvi/0712.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8931cb631d2e74472f8ac39509425bbb29ac739a",
                    "size": 349869,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8931cb631d2e74472f8ac39509425bbb29ac739a"
                },
                {
                    "path": "shared/data_source/ndvi/0713.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8931cb631d2e74472f8ac39509425bbb29ac739a",
                    "size": 349869,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8931cb631d2e74472f8ac39509425bbb29ac739a"
                },
                {
                    "path": "shared/data_source/ndvi/0714.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8931cb631d2e74472f8ac39509425bbb29ac739a",
                    "size": 349869,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8931cb631d2e74472f8ac39509425bbb29ac739a"
                },
                {
                    "path": "shared/data_source/ndvi/0715.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8931cb631d2e74472f8ac39509425bbb29ac739a",
                    "size": 349869,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8931cb631d2e74472f8ac39509425bbb29ac739a"
                },
                {
                    "path": "shared/data_source/ndvi/0716.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8931cb631d2e74472f8ac39509425bbb29ac739a",
                    "size": 349869,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8931cb631d2e74472f8ac39509425bbb29ac739a"
                },
                {
                    "path": "shared/data_source/ndvi/0717.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8931cb631d2e74472f8ac39509425bbb29ac739a",
                    "size": 349869,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8931cb631d2e74472f8ac39509425bbb29ac739a"
                },
                {
                    "path": "shared/data_source/ndvi/0718.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8931cb631d2e74472f8ac39509425bbb29ac739a",
                    "size": 349869,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8931cb631d2e74472f8ac39509425bbb29ac739a"
                },
                {
                    "path": "shared/data_source/ndvi/0719.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8931cb631d2e74472f8ac39509425bbb29ac739a",
                    "size": 349869,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8931cb631d2e74472f8ac39509425bbb29ac739a"
                },
                {
                    "path": "shared/data_source/ndvi/0720.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8931cb631d2e74472f8ac39509425bbb29ac739a",
                    "size": 349869,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8931cb631d2e74472f8ac39509425bbb29ac739a"
                },
                {
                    "path": "shared/data_source/ndvi/0721.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8931cb631d2e74472f8ac39509425bbb29ac739a",
                    "size": 349869,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8931cb631d2e74472f8ac39509425bbb29ac739a"
                },
                {
                    "path": "shared/data_source/ndvi/0722.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8931cb631d2e74472f8ac39509425bbb29ac739a",
                    "size": 349869,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8931cb631d2e74472f8ac39509425bbb29ac739a"
                },
                {
                    "path": "shared/data_source/ndvi/0723.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8931cb631d2e74472f8ac39509425bbb29ac739a",
                    "size": 349869,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8931cb631d2e74472f8ac39509425bbb29ac739a"
                },
                {
                    "path": "shared/data_source/ndvi/0724.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8931cb631d2e74472f8ac39509425bbb29ac739a",
                    "size": 349869,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8931cb631d2e74472f8ac39509425bbb29ac739a"
                },
                {
                    "path": "shared/data_source/ndvi/0725.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8931cb631d2e74472f8ac39509425bbb29ac739a",
                    "size": 349869,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8931cb631d2e74472f8ac39509425bbb29ac739a"
                },
                {
                    "path": "shared/data_source/ndvi/0726.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8931cb631d2e74472f8ac39509425bbb29ac739a",
                    "size": 349869,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8931cb631d2e74472f8ac39509425bbb29ac739a"
                },
                {
                    "path": "shared/data_source/ndvi/0727.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8931cb631d2e74472f8ac39509425bbb29ac739a",
                    "size": 349869,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8931cb631d2e74472f8ac39509425bbb29ac739a"
                },
                {
                    "path": "shared/data_source/ndvi/0728.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "43fa14fff7312bebbfe1f4630b115bd87bc53934",
                    "size": 351016,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/43fa14fff7312bebbfe1f4630b115bd87bc53934"
                },
                {
                    "path": "shared/data_source/ndvi/0729.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "43fa14fff7312bebbfe1f4630b115bd87bc53934",
                    "size": 351016,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/43fa14fff7312bebbfe1f4630b115bd87bc53934"
                },
                {
                    "path": "shared/data_source/ndvi/0730.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "43fa14fff7312bebbfe1f4630b115bd87bc53934",
                    "size": 351016,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/43fa14fff7312bebbfe1f4630b115bd87bc53934"
                },
                {
                    "path": "shared/data_source/ndvi/0731.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "43fa14fff7312bebbfe1f4630b115bd87bc53934",
                    "size": 351016,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/43fa14fff7312bebbfe1f4630b115bd87bc53934"
                },
                {
                    "path": "shared/data_source/ndvi/0801.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "43fa14fff7312bebbfe1f4630b115bd87bc53934",
                    "size": 351016,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/43fa14fff7312bebbfe1f4630b115bd87bc53934"
                },
                {
                    "path": "shared/data_source/ndvi/0802.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "43fa14fff7312bebbfe1f4630b115bd87bc53934",
                    "size": 351016,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/43fa14fff7312bebbfe1f4630b115bd87bc53934"
                },
                {
                    "path": "shared/data_source/ndvi/0803.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "43fa14fff7312bebbfe1f4630b115bd87bc53934",
                    "size": 351016,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/43fa14fff7312bebbfe1f4630b115bd87bc53934"
                },
                {
                    "path": "shared/data_source/ndvi/0804.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "43fa14fff7312bebbfe1f4630b115bd87bc53934",
                    "size": 351016,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/43fa14fff7312bebbfe1f4630b115bd87bc53934"
                },
                {
                    "path": "shared/data_source/ndvi/0805.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "43fa14fff7312bebbfe1f4630b115bd87bc53934",
                    "size": 351016,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/43fa14fff7312bebbfe1f4630b115bd87bc53934"
                },
                {
                    "path": "shared/data_source/ndvi/0806.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "43fa14fff7312bebbfe1f4630b115bd87bc53934",
                    "size": 351016,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/43fa14fff7312bebbfe1f4630b115bd87bc53934"
                },
                {
                    "path": "shared/data_source/ndvi/0807.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "43fa14fff7312bebbfe1f4630b115bd87bc53934",
                    "size": 351016,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/43fa14fff7312bebbfe1f4630b115bd87bc53934"
                },
                {
                    "path": "shared/data_source/ndvi/0808.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "43fa14fff7312bebbfe1f4630b115bd87bc53934",
                    "size": 351016,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/43fa14fff7312bebbfe1f4630b115bd87bc53934"
                },
                {
                    "path": "shared/data_source/ndvi/0809.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "43fa14fff7312bebbfe1f4630b115bd87bc53934",
                    "size": 351016,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/43fa14fff7312bebbfe1f4630b115bd87bc53934"
                },
                {
                    "path": "shared/data_source/ndvi/0810.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "43fa14fff7312bebbfe1f4630b115bd87bc53934",
                    "size": 351016,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/43fa14fff7312bebbfe1f4630b115bd87bc53934"
                },
                {
                    "path": "shared/data_source/ndvi/0811.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "43fa14fff7312bebbfe1f4630b115bd87bc53934",
                    "size": 351016,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/43fa14fff7312bebbfe1f4630b115bd87bc53934"
                },
                {
                    "path": "shared/data_source/ndvi/0812.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "43fa14fff7312bebbfe1f4630b115bd87bc53934",
                    "size": 351016,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/43fa14fff7312bebbfe1f4630b115bd87bc53934"
                },
                {
                    "path": "shared/data_source/ndvi/0813.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4100866f97f5c69f0873e120a04c9a78192b6f5a",
                    "size": 350612,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4100866f97f5c69f0873e120a04c9a78192b6f5a"
                },
                {
                    "path": "shared/data_source/ndvi/0814.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4100866f97f5c69f0873e120a04c9a78192b6f5a",
                    "size": 350612,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4100866f97f5c69f0873e120a04c9a78192b6f5a"
                },
                {
                    "path": "shared/data_source/ndvi/0815.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4100866f97f5c69f0873e120a04c9a78192b6f5a",
                    "size": 350612,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4100866f97f5c69f0873e120a04c9a78192b6f5a"
                },
                {
                    "path": "shared/data_source/ndvi/0816.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4100866f97f5c69f0873e120a04c9a78192b6f5a",
                    "size": 350612,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4100866f97f5c69f0873e120a04c9a78192b6f5a"
                },
                {
                    "path": "shared/data_source/ndvi/0817.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4100866f97f5c69f0873e120a04c9a78192b6f5a",
                    "size": 350612,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4100866f97f5c69f0873e120a04c9a78192b6f5a"
                },
                {
                    "path": "shared/data_source/ndvi/0818.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4100866f97f5c69f0873e120a04c9a78192b6f5a",
                    "size": 350612,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4100866f97f5c69f0873e120a04c9a78192b6f5a"
                },
                {
                    "path": "shared/data_source/ndvi/0819.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4100866f97f5c69f0873e120a04c9a78192b6f5a",
                    "size": 350612,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4100866f97f5c69f0873e120a04c9a78192b6f5a"
                },
                {
                    "path": "shared/data_source/ndvi/0820.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4100866f97f5c69f0873e120a04c9a78192b6f5a",
                    "size": 350612,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4100866f97f5c69f0873e120a04c9a78192b6f5a"
                },
                {
                    "path": "shared/data_source/ndvi/0821.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4100866f97f5c69f0873e120a04c9a78192b6f5a",
                    "size": 350612,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4100866f97f5c69f0873e120a04c9a78192b6f5a"
                },
                {
                    "path": "shared/data_source/ndvi/0822.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4100866f97f5c69f0873e120a04c9a78192b6f5a",
                    "size": 350612,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4100866f97f5c69f0873e120a04c9a78192b6f5a"
                },
                {
                    "path": "shared/data_source/ndvi/0823.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4100866f97f5c69f0873e120a04c9a78192b6f5a",
                    "size": 350612,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4100866f97f5c69f0873e120a04c9a78192b6f5a"
                },
                {
                    "path": "shared/data_source/ndvi/0824.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4100866f97f5c69f0873e120a04c9a78192b6f5a",
                    "size": 350612,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4100866f97f5c69f0873e120a04c9a78192b6f5a"
                },
                {
                    "path": "shared/data_source/ndvi/0825.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4100866f97f5c69f0873e120a04c9a78192b6f5a",
                    "size": 350612,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4100866f97f5c69f0873e120a04c9a78192b6f5a"
                },
                {
                    "path": "shared/data_source/ndvi/0826.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4100866f97f5c69f0873e120a04c9a78192b6f5a",
                    "size": 350612,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4100866f97f5c69f0873e120a04c9a78192b6f5a"
                },
                {
                    "path": "shared/data_source/ndvi/0827.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4100866f97f5c69f0873e120a04c9a78192b6f5a",
                    "size": 350612,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4100866f97f5c69f0873e120a04c9a78192b6f5a"
                },
                {
                    "path": "shared/data_source/ndvi/0828.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4100866f97f5c69f0873e120a04c9a78192b6f5a",
                    "size": 350612,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4100866f97f5c69f0873e120a04c9a78192b6f5a"
                },
                {
                    "path": "shared/data_source/ndvi/0829.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0ce08e8cc08274ac70def0ade1f430ffe0f2eb75",
                    "size": 351938,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0ce08e8cc08274ac70def0ade1f430ffe0f2eb75"
                },
                {
                    "path": "shared/data_source/ndvi/0830.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0ce08e8cc08274ac70def0ade1f430ffe0f2eb75",
                    "size": 351938,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0ce08e8cc08274ac70def0ade1f430ffe0f2eb75"
                },
                {
                    "path": "shared/data_source/ndvi/0831.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0ce08e8cc08274ac70def0ade1f430ffe0f2eb75",
                    "size": 351938,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0ce08e8cc08274ac70def0ade1f430ffe0f2eb75"
                },
                {
                    "path": "shared/data_source/ndvi/0901.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0ce08e8cc08274ac70def0ade1f430ffe0f2eb75",
                    "size": 351938,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0ce08e8cc08274ac70def0ade1f430ffe0f2eb75"
                },
                {
                    "path": "shared/data_source/ndvi/0902.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0ce08e8cc08274ac70def0ade1f430ffe0f2eb75",
                    "size": 351938,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0ce08e8cc08274ac70def0ade1f430ffe0f2eb75"
                },
                {
                    "path": "shared/data_source/ndvi/0903.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0ce08e8cc08274ac70def0ade1f430ffe0f2eb75",
                    "size": 351938,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0ce08e8cc08274ac70def0ade1f430ffe0f2eb75"
                },
                {
                    "path": "shared/data_source/ndvi/0904.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0ce08e8cc08274ac70def0ade1f430ffe0f2eb75",
                    "size": 351938,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0ce08e8cc08274ac70def0ade1f430ffe0f2eb75"
                },
                {
                    "path": "shared/data_source/ndvi/0905.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0ce08e8cc08274ac70def0ade1f430ffe0f2eb75",
                    "size": 351938,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0ce08e8cc08274ac70def0ade1f430ffe0f2eb75"
                },
                {
                    "path": "shared/data_source/ndvi/0906.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0ce08e8cc08274ac70def0ade1f430ffe0f2eb75",
                    "size": 351938,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0ce08e8cc08274ac70def0ade1f430ffe0f2eb75"
                },
                {
                    "path": "shared/data_source/ndvi/0907.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0ce08e8cc08274ac70def0ade1f430ffe0f2eb75",
                    "size": 351938,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0ce08e8cc08274ac70def0ade1f430ffe0f2eb75"
                },
                {
                    "path": "shared/data_source/ndvi/0908.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0ce08e8cc08274ac70def0ade1f430ffe0f2eb75",
                    "size": 351938,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0ce08e8cc08274ac70def0ade1f430ffe0f2eb75"
                },
                {
                    "path": "shared/data_source/ndvi/0909.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0ce08e8cc08274ac70def0ade1f430ffe0f2eb75",
                    "size": 351938,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0ce08e8cc08274ac70def0ade1f430ffe0f2eb75"
                },
                {
                    "path": "shared/data_source/ndvi/0910.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0ce08e8cc08274ac70def0ade1f430ffe0f2eb75",
                    "size": 351938,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0ce08e8cc08274ac70def0ade1f430ffe0f2eb75"
                },
                {
                    "path": "shared/data_source/ndvi/0911.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0ce08e8cc08274ac70def0ade1f430ffe0f2eb75",
                    "size": 351938,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0ce08e8cc08274ac70def0ade1f430ffe0f2eb75"
                },
                {
                    "path": "shared/data_source/ndvi/0912.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0ce08e8cc08274ac70def0ade1f430ffe0f2eb75",
                    "size": 351938,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0ce08e8cc08274ac70def0ade1f430ffe0f2eb75"
                },
                {
                    "path": "shared/data_source/ndvi/0913.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0ce08e8cc08274ac70def0ade1f430ffe0f2eb75",
                    "size": 351938,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0ce08e8cc08274ac70def0ade1f430ffe0f2eb75"
                },
                {
                    "path": "shared/data_source/ndvi/0914.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fe38bd0f98d98571b9b1a607d2b32d8ce104cd50",
                    "size": 347404,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fe38bd0f98d98571b9b1a607d2b32d8ce104cd50"
                },
                {
                    "path": "shared/data_source/ndvi/0915.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fe38bd0f98d98571b9b1a607d2b32d8ce104cd50",
                    "size": 347404,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fe38bd0f98d98571b9b1a607d2b32d8ce104cd50"
                },
                {
                    "path": "shared/data_source/ndvi/0916.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fe38bd0f98d98571b9b1a607d2b32d8ce104cd50",
                    "size": 347404,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fe38bd0f98d98571b9b1a607d2b32d8ce104cd50"
                },
                {
                    "path": "shared/data_source/ndvi/0917.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fe38bd0f98d98571b9b1a607d2b32d8ce104cd50",
                    "size": 347404,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fe38bd0f98d98571b9b1a607d2b32d8ce104cd50"
                },
                {
                    "path": "shared/data_source/ndvi/0918.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fe38bd0f98d98571b9b1a607d2b32d8ce104cd50",
                    "size": 347404,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fe38bd0f98d98571b9b1a607d2b32d8ce104cd50"
                },
                {
                    "path": "shared/data_source/ndvi/0919.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fe38bd0f98d98571b9b1a607d2b32d8ce104cd50",
                    "size": 347404,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fe38bd0f98d98571b9b1a607d2b32d8ce104cd50"
                },
                {
                    "path": "shared/data_source/ndvi/0920.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fe38bd0f98d98571b9b1a607d2b32d8ce104cd50",
                    "size": 347404,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fe38bd0f98d98571b9b1a607d2b32d8ce104cd50"
                },
                {
                    "path": "shared/data_source/ndvi/0921.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fe38bd0f98d98571b9b1a607d2b32d8ce104cd50",
                    "size": 347404,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fe38bd0f98d98571b9b1a607d2b32d8ce104cd50"
                },
                {
                    "path": "shared/data_source/ndvi/0922.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fe38bd0f98d98571b9b1a607d2b32d8ce104cd50",
                    "size": 347404,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fe38bd0f98d98571b9b1a607d2b32d8ce104cd50"
                },
                {
                    "path": "shared/data_source/ndvi/0923.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fe38bd0f98d98571b9b1a607d2b32d8ce104cd50",
                    "size": 347404,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fe38bd0f98d98571b9b1a607d2b32d8ce104cd50"
                },
                {
                    "path": "shared/data_source/ndvi/0924.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fe38bd0f98d98571b9b1a607d2b32d8ce104cd50",
                    "size": 347404,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fe38bd0f98d98571b9b1a607d2b32d8ce104cd50"
                },
                {
                    "path": "shared/data_source/ndvi/0925.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fe38bd0f98d98571b9b1a607d2b32d8ce104cd50",
                    "size": 347404,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fe38bd0f98d98571b9b1a607d2b32d8ce104cd50"
                },
                {
                    "path": "shared/data_source/ndvi/0926.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fe38bd0f98d98571b9b1a607d2b32d8ce104cd50",
                    "size": 347404,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fe38bd0f98d98571b9b1a607d2b32d8ce104cd50"
                },
                {
                    "path": "shared/data_source/ndvi/0927.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fe38bd0f98d98571b9b1a607d2b32d8ce104cd50",
                    "size": 347404,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fe38bd0f98d98571b9b1a607d2b32d8ce104cd50"
                },
                {
                    "path": "shared/data_source/ndvi/0928.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fe38bd0f98d98571b9b1a607d2b32d8ce104cd50",
                    "size": 347404,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fe38bd0f98d98571b9b1a607d2b32d8ce104cd50"
                },
                {
                    "path": "shared/data_source/ndvi/0929.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fe38bd0f98d98571b9b1a607d2b32d8ce104cd50",
                    "size": 347404,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fe38bd0f98d98571b9b1a607d2b32d8ce104cd50"
                },
                {
                    "path": "shared/data_source/ndvi/0930.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7",
                    "size": 351740,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7"
                },
                {
                    "path": "shared/data_source/ndvi/1001.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7",
                    "size": 351740,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7"
                },
                {
                    "path": "shared/data_source/ndvi/1002.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7",
                    "size": 351740,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7"
                },
                {
                    "path": "shared/data_source/ndvi/1003.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7",
                    "size": 351740,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7"
                },
                {
                    "path": "shared/data_source/ndvi/1004.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7",
                    "size": 351740,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7"
                },
                {
                    "path": "shared/data_source/ndvi/1005.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7",
                    "size": 351740,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7"
                },
                {
                    "path": "shared/data_source/ndvi/1006.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7",
                    "size": 351740,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7"
                },
                {
                    "path": "shared/data_source/ndvi/1007.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7",
                    "size": 351740,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7"
                },
                {
                    "path": "shared/data_source/ndvi/1008.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7",
                    "size": 351740,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7"
                },
                {
                    "path": "shared/data_source/ndvi/1009.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7",
                    "size": 351740,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7"
                },
                {
                    "path": "shared/data_source/ndvi/1010.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7",
                    "size": 351740,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7"
                },
                {
                    "path": "shared/data_source/ndvi/1011.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7",
                    "size": 351740,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7"
                },
                {
                    "path": "shared/data_source/ndvi/1012.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7",
                    "size": 351740,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7"
                },
                {
                    "path": "shared/data_source/ndvi/1013.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7",
                    "size": 351740,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7"
                },
                {
                    "path": "shared/data_source/ndvi/1014.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7",
                    "size": 351740,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7"
                },
                {
                    "path": "shared/data_source/ndvi/1015.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7",
                    "size": 351740,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a55e8c3f2e379ca51b578b5bacd15d83cbf22ad7"
                },
                {
                    "path": "shared/data_source/ndvi/1016.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c04c936b71e0893ae30de32027411bfab7a8c1eb",
                    "size": 340080,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c04c936b71e0893ae30de32027411bfab7a8c1eb"
                },
                {
                    "path": "shared/data_source/ndvi/1017.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c04c936b71e0893ae30de32027411bfab7a8c1eb",
                    "size": 340080,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c04c936b71e0893ae30de32027411bfab7a8c1eb"
                },
                {
                    "path": "shared/data_source/ndvi/1018.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c04c936b71e0893ae30de32027411bfab7a8c1eb",
                    "size": 340080,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c04c936b71e0893ae30de32027411bfab7a8c1eb"
                },
                {
                    "path": "shared/data_source/ndvi/1019.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c04c936b71e0893ae30de32027411bfab7a8c1eb",
                    "size": 340080,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c04c936b71e0893ae30de32027411bfab7a8c1eb"
                },
                {
                    "path": "shared/data_source/ndvi/1020.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c04c936b71e0893ae30de32027411bfab7a8c1eb",
                    "size": 340080,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c04c936b71e0893ae30de32027411bfab7a8c1eb"
                },
                {
                    "path": "shared/data_source/ndvi/1021.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c04c936b71e0893ae30de32027411bfab7a8c1eb",
                    "size": 340080,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c04c936b71e0893ae30de32027411bfab7a8c1eb"
                },
                {
                    "path": "shared/data_source/ndvi/1022.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c04c936b71e0893ae30de32027411bfab7a8c1eb",
                    "size": 340080,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c04c936b71e0893ae30de32027411bfab7a8c1eb"
                },
                {
                    "path": "shared/data_source/ndvi/1023.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c04c936b71e0893ae30de32027411bfab7a8c1eb",
                    "size": 340080,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c04c936b71e0893ae30de32027411bfab7a8c1eb"
                },
                {
                    "path": "shared/data_source/ndvi/1024.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c04c936b71e0893ae30de32027411bfab7a8c1eb",
                    "size": 340080,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c04c936b71e0893ae30de32027411bfab7a8c1eb"
                },
                {
                    "path": "shared/data_source/ndvi/1025.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c04c936b71e0893ae30de32027411bfab7a8c1eb",
                    "size": 340080,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c04c936b71e0893ae30de32027411bfab7a8c1eb"
                },
                {
                    "path": "shared/data_source/ndvi/1026.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c04c936b71e0893ae30de32027411bfab7a8c1eb",
                    "size": 340080,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c04c936b71e0893ae30de32027411bfab7a8c1eb"
                },
                {
                    "path": "shared/data_source/ndvi/1027.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c04c936b71e0893ae30de32027411bfab7a8c1eb",
                    "size": 340080,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c04c936b71e0893ae30de32027411bfab7a8c1eb"
                },
                {
                    "path": "shared/data_source/ndvi/1028.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c04c936b71e0893ae30de32027411bfab7a8c1eb",
                    "size": 340080,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c04c936b71e0893ae30de32027411bfab7a8c1eb"
                },
                {
                    "path": "shared/data_source/ndvi/1029.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c04c936b71e0893ae30de32027411bfab7a8c1eb",
                    "size": 340080,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c04c936b71e0893ae30de32027411bfab7a8c1eb"
                },
                {
                    "path": "shared/data_source/ndvi/1030.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c04c936b71e0893ae30de32027411bfab7a8c1eb",
                    "size": 340080,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c04c936b71e0893ae30de32027411bfab7a8c1eb"
                },
                {
                    "path": "shared/data_source/ndvi/1031.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c04c936b71e0893ae30de32027411bfab7a8c1eb",
                    "size": 340080,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c04c936b71e0893ae30de32027411bfab7a8c1eb"
                },
                {
                    "path": "shared/data_source/ndvi/1101.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9ba1059fac36b4b6e77cf17c3e241fa5191d23f5",
                    "size": 341954,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9ba1059fac36b4b6e77cf17c3e241fa5191d23f5"
                },
                {
                    "path": "shared/data_source/ndvi/1102.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9ba1059fac36b4b6e77cf17c3e241fa5191d23f5",
                    "size": 341954,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9ba1059fac36b4b6e77cf17c3e241fa5191d23f5"
                },
                {
                    "path": "shared/data_source/ndvi/1103.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9ba1059fac36b4b6e77cf17c3e241fa5191d23f5",
                    "size": 341954,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9ba1059fac36b4b6e77cf17c3e241fa5191d23f5"
                },
                {
                    "path": "shared/data_source/ndvi/1104.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9ba1059fac36b4b6e77cf17c3e241fa5191d23f5",
                    "size": 341954,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9ba1059fac36b4b6e77cf17c3e241fa5191d23f5"
                },
                {
                    "path": "shared/data_source/ndvi/1105.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9ba1059fac36b4b6e77cf17c3e241fa5191d23f5",
                    "size": 341954,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9ba1059fac36b4b6e77cf17c3e241fa5191d23f5"
                },
                {
                    "path": "shared/data_source/ndvi/1106.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9ba1059fac36b4b6e77cf17c3e241fa5191d23f5",
                    "size": 341954,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9ba1059fac36b4b6e77cf17c3e241fa5191d23f5"
                },
                {
                    "path": "shared/data_source/ndvi/1107.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9ba1059fac36b4b6e77cf17c3e241fa5191d23f5",
                    "size": 341954,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9ba1059fac36b4b6e77cf17c3e241fa5191d23f5"
                },
                {
                    "path": "shared/data_source/ndvi/1108.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9ba1059fac36b4b6e77cf17c3e241fa5191d23f5",
                    "size": 341954,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9ba1059fac36b4b6e77cf17c3e241fa5191d23f5"
                },
                {
                    "path": "shared/data_source/ndvi/1109.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9ba1059fac36b4b6e77cf17c3e241fa5191d23f5",
                    "size": 341954,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9ba1059fac36b4b6e77cf17c3e241fa5191d23f5"
                },
                {
                    "path": "shared/data_source/ndvi/1110.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9ba1059fac36b4b6e77cf17c3e241fa5191d23f5",
                    "size": 341954,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9ba1059fac36b4b6e77cf17c3e241fa5191d23f5"
                },
                {
                    "path": "shared/data_source/ndvi/1111.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9ba1059fac36b4b6e77cf17c3e241fa5191d23f5",
                    "size": 341954,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9ba1059fac36b4b6e77cf17c3e241fa5191d23f5"
                },
                {
                    "path": "shared/data_source/ndvi/1112.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9ba1059fac36b4b6e77cf17c3e241fa5191d23f5",
                    "size": 341954,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9ba1059fac36b4b6e77cf17c3e241fa5191d23f5"
                },
                {
                    "path": "shared/data_source/ndvi/1113.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9ba1059fac36b4b6e77cf17c3e241fa5191d23f5",
                    "size": 341954,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9ba1059fac36b4b6e77cf17c3e241fa5191d23f5"
                },
                {
                    "path": "shared/data_source/ndvi/1114.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9ba1059fac36b4b6e77cf17c3e241fa5191d23f5",
                    "size": 341954,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9ba1059fac36b4b6e77cf17c3e241fa5191d23f5"
                },
                {
                    "path": "shared/data_source/ndvi/1115.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9ba1059fac36b4b6e77cf17c3e241fa5191d23f5",
                    "size": 341954,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9ba1059fac36b4b6e77cf17c3e241fa5191d23f5"
                },
                {
                    "path": "shared/data_source/ndvi/1116.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9ba1059fac36b4b6e77cf17c3e241fa5191d23f5",
                    "size": 341954,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9ba1059fac36b4b6e77cf17c3e241fa5191d23f5"
                },
                {
                    "path": "shared/data_source/ndvi/1117.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5e33e0442eef370250933b68907b3fb0596a87ab",
                    "size": 345240,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5e33e0442eef370250933b68907b3fb0596a87ab"
                },
                {
                    "path": "shared/data_source/ndvi/1118.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5e33e0442eef370250933b68907b3fb0596a87ab",
                    "size": 345240,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5e33e0442eef370250933b68907b3fb0596a87ab"
                },
                {
                    "path": "shared/data_source/ndvi/1119.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5e33e0442eef370250933b68907b3fb0596a87ab",
                    "size": 345240,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5e33e0442eef370250933b68907b3fb0596a87ab"
                },
                {
                    "path": "shared/data_source/ndvi/1120.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5e33e0442eef370250933b68907b3fb0596a87ab",
                    "size": 345240,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5e33e0442eef370250933b68907b3fb0596a87ab"
                },
                {
                    "path": "shared/data_source/ndvi/1121.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5e33e0442eef370250933b68907b3fb0596a87ab",
                    "size": 345240,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5e33e0442eef370250933b68907b3fb0596a87ab"
                },
                {
                    "path": "shared/data_source/ndvi/1122.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5e33e0442eef370250933b68907b3fb0596a87ab",
                    "size": 345240,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5e33e0442eef370250933b68907b3fb0596a87ab"
                },
                {
                    "path": "shared/data_source/ndvi/1123.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5e33e0442eef370250933b68907b3fb0596a87ab",
                    "size": 345240,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5e33e0442eef370250933b68907b3fb0596a87ab"
                },
                {
                    "path": "shared/data_source/ndvi/1124.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5e33e0442eef370250933b68907b3fb0596a87ab",
                    "size": 345240,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5e33e0442eef370250933b68907b3fb0596a87ab"
                },
                {
                    "path": "shared/data_source/ndvi/1125.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5e33e0442eef370250933b68907b3fb0596a87ab",
                    "size": 345240,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5e33e0442eef370250933b68907b3fb0596a87ab"
                },
                {
                    "path": "shared/data_source/ndvi/1126.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5e33e0442eef370250933b68907b3fb0596a87ab",
                    "size": 345240,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5e33e0442eef370250933b68907b3fb0596a87ab"
                },
                {
                    "path": "shared/data_source/ndvi/1127.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5e33e0442eef370250933b68907b3fb0596a87ab",
                    "size": 345240,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5e33e0442eef370250933b68907b3fb0596a87ab"
                },
                {
                    "path": "shared/data_source/ndvi/1128.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5e33e0442eef370250933b68907b3fb0596a87ab",
                    "size": 345240,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5e33e0442eef370250933b68907b3fb0596a87ab"
                },
                {
                    "path": "shared/data_source/ndvi/1129.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5e33e0442eef370250933b68907b3fb0596a87ab",
                    "size": 345240,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5e33e0442eef370250933b68907b3fb0596a87ab"
                },
                {
                    "path": "shared/data_source/ndvi/1130.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5e33e0442eef370250933b68907b3fb0596a87ab",
                    "size": 345240,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5e33e0442eef370250933b68907b3fb0596a87ab"
                },
                {
                    "path": "shared/data_source/ndvi/1201.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5e33e0442eef370250933b68907b3fb0596a87ab",
                    "size": 345240,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5e33e0442eef370250933b68907b3fb0596a87ab"
                },
                {
                    "path": "shared/data_source/ndvi/1202.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5e33e0442eef370250933b68907b3fb0596a87ab",
                    "size": 345240,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5e33e0442eef370250933b68907b3fb0596a87ab"
                },
                {
                    "path": "shared/data_source/ndvi/1203.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2b78c02436a9fac55e4d0032b8d17a4e05d77abe",
                    "size": 338928,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2b78c02436a9fac55e4d0032b8d17a4e05d77abe"
                },
                {
                    "path": "shared/data_source/ndvi/1204.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2b78c02436a9fac55e4d0032b8d17a4e05d77abe",
                    "size": 338928,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2b78c02436a9fac55e4d0032b8d17a4e05d77abe"
                },
                {
                    "path": "shared/data_source/ndvi/1205.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2b78c02436a9fac55e4d0032b8d17a4e05d77abe",
                    "size": 338928,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2b78c02436a9fac55e4d0032b8d17a4e05d77abe"
                },
                {
                    "path": "shared/data_source/ndvi/1206.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2b78c02436a9fac55e4d0032b8d17a4e05d77abe",
                    "size": 338928,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2b78c02436a9fac55e4d0032b8d17a4e05d77abe"
                },
                {
                    "path": "shared/data_source/ndvi/1207.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2b78c02436a9fac55e4d0032b8d17a4e05d77abe",
                    "size": 338928,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2b78c02436a9fac55e4d0032b8d17a4e05d77abe"
                },
                {
                    "path": "shared/data_source/ndvi/1208.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2b78c02436a9fac55e4d0032b8d17a4e05d77abe",
                    "size": 338928,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2b78c02436a9fac55e4d0032b8d17a4e05d77abe"
                },
                {
                    "path": "shared/data_source/ndvi/1209.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2b78c02436a9fac55e4d0032b8d17a4e05d77abe",
                    "size": 338928,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2b78c02436a9fac55e4d0032b8d17a4e05d77abe"
                },
                {
                    "path": "shared/data_source/ndvi/1210.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2b78c02436a9fac55e4d0032b8d17a4e05d77abe",
                    "size": 338928,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2b78c02436a9fac55e4d0032b8d17a4e05d77abe"
                },
                {
                    "path": "shared/data_source/ndvi/1211.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2b78c02436a9fac55e4d0032b8d17a4e05d77abe",
                    "size": 338928,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2b78c02436a9fac55e4d0032b8d17a4e05d77abe"
                },
                {
                    "path": "shared/data_source/ndvi/1212.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2b78c02436a9fac55e4d0032b8d17a4e05d77abe",
                    "size": 338928,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2b78c02436a9fac55e4d0032b8d17a4e05d77abe"
                },
                {
                    "path": "shared/data_source/ndvi/1213.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2b78c02436a9fac55e4d0032b8d17a4e05d77abe",
                    "size": 338928,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2b78c02436a9fac55e4d0032b8d17a4e05d77abe"
                },
                {
                    "path": "shared/data_source/ndvi/1214.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2b78c02436a9fac55e4d0032b8d17a4e05d77abe",
                    "size": 338928,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2b78c02436a9fac55e4d0032b8d17a4e05d77abe"
                },
                {
                    "path": "shared/data_source/ndvi/1215.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2b78c02436a9fac55e4d0032b8d17a4e05d77abe",
                    "size": 338928,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2b78c02436a9fac55e4d0032b8d17a4e05d77abe"
                },
                {
                    "path": "shared/data_source/ndvi/1216.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2b78c02436a9fac55e4d0032b8d17a4e05d77abe",
                    "size": 338928,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2b78c02436a9fac55e4d0032b8d17a4e05d77abe"
                },
                {
                    "path": "shared/data_source/ndvi/1217.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2b78c02436a9fac55e4d0032b8d17a4e05d77abe",
                    "size": 338928,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2b78c02436a9fac55e4d0032b8d17a4e05d77abe"
                },
                {
                    "path": "shared/data_source/ndvi/1218.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2b78c02436a9fac55e4d0032b8d17a4e05d77abe",
                    "size": 338928,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2b78c02436a9fac55e4d0032b8d17a4e05d77abe"
                },
                {
                    "path": "shared/data_source/ndvi/1219.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9053fa9989f580663c029477091aceed41350a05",
                    "size": 327454,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9053fa9989f580663c029477091aceed41350a05"
                },
                {
                    "path": "shared/data_source/ndvi/1220.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9053fa9989f580663c029477091aceed41350a05",
                    "size": 327454,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9053fa9989f580663c029477091aceed41350a05"
                },
                {
                    "path": "shared/data_source/ndvi/1221.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9053fa9989f580663c029477091aceed41350a05",
                    "size": 327454,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9053fa9989f580663c029477091aceed41350a05"
                },
                {
                    "path": "shared/data_source/ndvi/1222.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9053fa9989f580663c029477091aceed41350a05",
                    "size": 327454,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9053fa9989f580663c029477091aceed41350a05"
                },
                {
                    "path": "shared/data_source/ndvi/1223.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9053fa9989f580663c029477091aceed41350a05",
                    "size": 327454,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9053fa9989f580663c029477091aceed41350a05"
                },
                {
                    "path": "shared/data_source/ndvi/1224.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9053fa9989f580663c029477091aceed41350a05",
                    "size": 327454,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9053fa9989f580663c029477091aceed41350a05"
                },
                {
                    "path": "shared/data_source/ndvi/1225.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9053fa9989f580663c029477091aceed41350a05",
                    "size": 327454,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9053fa9989f580663c029477091aceed41350a05"
                },
                {
                    "path": "shared/data_source/ndvi/1226.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9053fa9989f580663c029477091aceed41350a05",
                    "size": 327454,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9053fa9989f580663c029477091aceed41350a05"
                },
                {
                    "path": "shared/data_source/ndvi/1227.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9053fa9989f580663c029477091aceed41350a05",
                    "size": 327454,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9053fa9989f580663c029477091aceed41350a05"
                },
                {
                    "path": "shared/data_source/ndvi/1228.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9053fa9989f580663c029477091aceed41350a05",
                    "size": 327454,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9053fa9989f580663c029477091aceed41350a05"
                },
                {
                    "path": "shared/data_source/ndvi/1229.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9053fa9989f580663c029477091aceed41350a05",
                    "size": 327454,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9053fa9989f580663c029477091aceed41350a05"
                },
                {
                    "path": "shared/data_source/ndvi/1230.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9053fa9989f580663c029477091aceed41350a05",
                    "size": 327454,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9053fa9989f580663c029477091aceed41350a05"
                },
                {
                    "path": "shared/data_source/ndvi/1231.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9053fa9989f580663c029477091aceed41350a05",
                    "size": 327454,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9053fa9989f580663c029477091aceed41350a05"
                },
                {
                    "path": "shared/data_source/night_light",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "88494be6d116f5416da344a4b7f36c13dc70c842",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/88494be6d116f5416da344a4b7f36c13dc70c842"
                },
                {
                    "path": "shared/data_source/night_light/01.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f55bd76f5b3007608db711c8975f8a15d23314a2",
                    "size": 416984,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f55bd76f5b3007608db711c8975f8a15d23314a2"
                },
                {
                    "path": "shared/data_source/night_light/02.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6ca29a99e0cbdac385fbc8a6d4811164389fd639",
                    "size": 381209,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6ca29a99e0cbdac385fbc8a6d4811164389fd639"
                },
                {
                    "path": "shared/data_source/night_light/03.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4f82fc0e0055ef203cb038b068c0c358998ae925",
                    "size": 393840,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4f82fc0e0055ef203cb038b068c0c358998ae925"
                },
                {
                    "path": "shared/data_source/night_light/04.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "55c7d6cafd2e025eec4ef4606e904491ff617260",
                    "size": 398002,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/55c7d6cafd2e025eec4ef4606e904491ff617260"
                },
                {
                    "path": "shared/data_source/night_light/05.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "db9741157805ee5bbf5ad4f0b68dc534da4b0f9c",
                    "size": 414669,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/db9741157805ee5bbf5ad4f0b68dc534da4b0f9c"
                },
                {
                    "path": "shared/data_source/night_light/06.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cd6830fc249c967d878d2fc1c0b8717e9e3e5f8a",
                    "size": 420790,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cd6830fc249c967d878d2fc1c0b8717e9e3e5f8a"
                },
                {
                    "path": "shared/data_source/night_light/07.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a7bde82ee980a6ff24e3e002521d4e1c54c283d9",
                    "size": 405777,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a7bde82ee980a6ff24e3e002521d4e1c54c283d9"
                },
                {
                    "path": "shared/data_source/night_light/08.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "51087dc1ad5c50d2250fc4b93238123fc0743d61",
                    "size": 396265,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/51087dc1ad5c50d2250fc4b93238123fc0743d61"
                },
                {
                    "path": "shared/data_source/night_light/09.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e4faab31a55e9add2a75a1c364cdbdfe66b147f0",
                    "size": 373188,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e4faab31a55e9add2a75a1c364cdbdfe66b147f0"
                },
                {
                    "path": "shared/data_source/night_light/10.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b284630119e17e712e2a1f216a0a4d3e791e3158",
                    "size": 401438,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b284630119e17e712e2a1f216a0a4d3e791e3158"
                },
                {
                    "path": "shared/data_source/night_light/11.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "75c4a947cf7cc930254521a6c9363c6395b7b29b",
                    "size": 415739,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/75c4a947cf7cc930254521a6c9363c6395b7b29b"
                },
                {
                    "path": "shared/data_source/night_light/12.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b5ae3aa66821685e4c99433a321fc0032fc64b72",
                    "size": 414435,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b5ae3aa66821685e4c99433a321fc0032fc64b72"
                },
                {
                    "path": "shared/email_template.html",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ceb50adccd62a51a42e9ccea2d188a224a5c1a39",
                    "size": 1005,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ceb50adccd62a51a42e9ccea2d188a224a5c1a39"
                },
                {
                    "path": "shared/estimate",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "3a5d033be8faf4bedf5052b7f3cdd36024e4a240",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/3a5d033be8faf4bedf5052b7f3cdd36024e4a240"
                },
                {
                    "path": "shared/estimate/model",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "c4d1a35e4fb0de9fb5e6cb7cba0ac8f19014d1dc",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/c4d1a35e4fb0de9fb5e6cb7cba0ac8f19014d1dc"
                },
                {
                    "path": "shared/estimate/model/model.cbm",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7cf963b60c7e02a070a7f04cce08ac6f91a5d8e0",
                    "size": 332864,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7cf963b60c7e02a070a7f04cce08ac6f91a5d8e0"
                },
                {
                    "path": "shared/estimate/pq",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "4d4c047a444a971ba768a11c1c3169618a7ae4ac",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/4d4c047a444a971ba768a11c1c3169618a7ae4ac"
                },
                {
                    "path": "shared/estimate/pq/2025",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "58778c1b068830b683b371e271e5e86294af5d5e",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/58778c1b068830b683b371e271e5e86294af5d5e"
                },
                {
                    "path": "shared/estimate/pq/2025/20251218.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d6009337a306563bd4bd308d8898e1f734e31851",
                    "size": 15459782,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d6009337a306563bd4bd308d8898e1f734e31851"
                },
                {
                    "path": "shared/estimate/pq/2025/20251219.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3b5933eea103b20b6c1cb648f44d7301bdfe25c5",
                    "size": 15578151,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3b5933eea103b20b6c1cb648f44d7301bdfe25c5"
                },
                {
                    "path": "shared/estimate/pq/2025/20251220.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2210f490a87f0b76836a4d7b30da24587db06f49",
                    "size": 15480709,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2210f490a87f0b76836a4d7b30da24587db06f49"
                },
                {
                    "path": "shared/estimate/surface_no2_record.json",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "27aa4502254611d1eb1603b423a918698f380896",
                    "size": 130,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/27aa4502254611d1eb1603b423a918698f380896"
                },
                {
                    "path": "shared/estimate/tif",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "bd17a7aa604ac826223e6339c1347134ce4294a8",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/bd17a7aa604ac826223e6339c1347134ce4294a8"
                },
                {
                    "path": "shared/estimate/tif/2025",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "42b1187ec638f42c456b105ab953f5293889320c",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/42b1187ec638f42c456b105ab953f5293889320c"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b2f84979caaaddf39f1a1d3e9688311091d16644",
                    "size": 10306352,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b2f84979caaaddf39f1a1d3e9688311091d16644"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "98d8898610fe935f1ffb498eabd82566b1364f0c",
                    "size": 10306352,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/98d8898610fe935f1ffb498eabd82566b1364f0c"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0b3a0abba6ad640df2bde686b5ad829d602b6730",
                    "size": 10306352,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0b3a0abba6ad640df2bde686b5ad829d602b6730"
                },
                {
                    "path": "shared/reconstruct",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "8fb9efd4a32d4d7fb25cf08926f20d509032196f",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/8fb9efd4a32d4d7fb25cf08926f20d509032196f"
                },
                {
                    "path": "shared/reconstruct/README.md",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "83b25c1c2b75c863bab2b75465f8e733856ef86e",
                    "size": 40,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/83b25c1c2b75c863bab2b75465f8e733856ef86e"
                },
                {
                    "path": "shared/reconstruct/model",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "fb1f0a220eefc2292531a4e71c5a383fa3be0c51",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/fb1f0a220eefc2292531a4e71c5a383fa3be0c51"
                },
                {
                    "path": "shared/reconstruct/model/model.cbm",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8189ea7046addcc07ed018874481aa1a7204dee8",
                    "size": 1121280,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8189ea7046addcc07ed018874481aa1a7204dee8"
                },
                {
                    "path": "shared/reconstruct/pq",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "af2a50dd7baf6d6b7e9f9553fc180358dd2a7b0b",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/af2a50dd7baf6d6b7e9f9553fc180358dd2a7b0b"
                },
                {
                    "path": "shared/reconstruct/pq/2025",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "dcc54dbe85dd93ed3cea77699176e370f1454bc5",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/dcc54dbe85dd93ed3cea77699176e370f1454bc5"
                },
                {
                    "path": "shared/reconstruct/pq/2025/20251218.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9b6663dab40bb6529124db3f8ccd5fe722bd325b",
                    "size": 49471162,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9b6663dab40bb6529124db3f8ccd5fe722bd325b"
                },
                {
                    "path": "shared/reconstruct/pq/2025/20251219.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "aa023903774abca97d677663f0035f52d64cafeb",
                    "size": 46873708,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/aa023903774abca97d677663f0035f52d64cafeb"
                },
                {
                    "path": "shared/reconstruct/pq/2025/20251220.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1ceae4f6dee3c9fbc902b29a1d5a2a6b3b335980",
                    "size": 46488143,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1ceae4f6dee3c9fbc902b29a1d5a2a6b3b335980"
                },
                {
                    "path": "shared/reconstruct/tif",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "5196c03e2602140d2eca42fdd79975c66e087304",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/5196c03e2602140d2eca42fdd79975c66e087304"
                },
                {
                    "path": "shared/reconstruct/tif/2025",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "441f057baf197bbf8a82d00d0727cadf4c8ac624",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/441f057baf197bbf8a82d00d0727cadf4c8ac624"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e7ca49160301f09bb91740531a5d14a8c7016fe2",
                    "size": 10306352,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e7ca49160301f09bb91740531a5d14a8c7016fe2"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "487c513431295149a2484237264a5c01875e0596",
                    "size": 10306352,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/487c513431295149a2484237264a5c01875e0596"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4bf57d74d48ccc1950c5f55e7499dce68d0dc4dd",
                    "size": 10306352,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4bf57d74d48ccc1950c5f55e7499dce68d0dc4dd"
                },
                {
                    "path": "task",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "589d642aa6fb7c46bfe5d38bd10995e0e5824280",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/589d642aa6fb7c46bfe5d38bd10995e0e5824280"
                },
                {
                    "path": "task/.python-version",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "24ee5b1be9961e38a503c8e764b7385dbb6ba124",
                    "size": 5,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/24ee5b1be9961e38a503c8e764b7385dbb6ba124"
                },
                {
                    "path": "task/README.md",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
                    "size": 0,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"
                },
                {
                    "path": "task/download_cnemc.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b9c795d410a83f1ff3444a970a8a21b8e17d7fe1",
                    "size": 204,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b9c795d410a83f1ff3444a970a8a21b8e17d7fe1"
                },
                {
                    "path": "task/download_era5.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cd60d9f1bc9e9543289596c727f06204ef3c10dd",
                    "size": 836,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cd60d9f1bc9e9543289596c727f06204ef3c10dd"
                },
                {
                    "path": "task/download_gems.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d53a555cf9d6bc72983453adb38f5f6d6af27077",
                    "size": 200,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d53a555cf9d6bc72983453adb38f5f6d6af27077"
                },
                {
                    "path": "task/download_geoscf.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "26567479a3ffaef55a324228b1b0372bbff050d0",
                    "size": 209,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/26567479a3ffaef55a324228b1b0372bbff050d0"
                },
                {
                    "path": "task/est_no2.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5171b04f4f30c816f01960321a82bc2be41bd2b6",
                    "size": 348,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5171b04f4f30c816f01960321a82bc2be41bd2b6"
                },
                {
                    "path": "task/handle_issue.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4c2ccde1909a1ceb299debfdf11ac8d25d9e3e65",
                    "size": 103,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4c2ccde1909a1ceb299debfdf11ac8d25d9e3e65"
                },
                {
                    "path": "task/pyproject.toml",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8e775fb3151485235d94d9493a0d9192a454cfde",
                    "size": 629,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8e775fb3151485235d94d9493a0d9192a454cfde"
                },
                {
                    "path": "task/rec_no2.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ea18df9d7821266b4645a47e508e93c21db8cdd9",
                    "size": 358,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ea18df9d7821266b4645a47e508e93c21db8cdd9"
                },
                {
                    "path": "task/src",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "95786023a075491f6d668d897944507886e24762",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/95786023a075491f6d668d897944507886e24762"
                },
                {
                    "path": "task/src/config.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "abfedaebc29ff4a02235bfe317adc903dbfcd648",
                    "size": 629,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/abfedaebc29ff4a02235bfe317adc903dbfcd648"
                },
                {
                    "path": "task/src/constant.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e7a409f10cb1ea79fc6be84a70c80c702b88f8d3",
                    "size": 934,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e7a409f10cb1ea79fc6be84a70c80c702b88f8d3"
                },
                {
                    "path": "task/src/modules",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "05a4aa14a44a564fb2e746456cc035944b985cd8",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/05a4aa14a44a564fb2e746456cc035944b985cd8"
                },
                {
                    "path": "task/src/modules/downloader",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "4aeb289ebacde2fb82da59ad9cb554366f9ea36d",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/4aeb289ebacde2fb82da59ad9cb554366f9ea36d"
                },
                {
                    "path": "task/src/modules/downloader/README.md",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0367483e96fea15721211cd3bb26a31b746c7af0",
                    "size": 237,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0367483e96fea15721211cd3bb26a31b746c7af0"
                },
                {
                    "path": "task/src/modules/downloader/basic.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "40a3ab78963ae193867225eb74072f910ae8546f",
                    "size": 2193,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/40a3ab78963ae193867225eb74072f910ae8546f"
                },
                {
                    "path": "task/src/modules/downloader/cnemc.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e4c0201a4499aac0d66ef57b8ebfa54ae450add1",
                    "size": 4757,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e4c0201a4499aac0d66ef57b8ebfa54ae450add1"
                },
                {
                    "path": "task/src/modules/downloader/era5.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "50e8811a88ff110cd6f69e640cb47ef13e079921",
                    "size": 6694,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/50e8811a88ff110cd6f69e640cb47ef13e079921"
                },
                {
                    "path": "task/src/modules/downloader/gems.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e5a2c040777a677998b3844c4acab14666ff26ef",
                    "size": 9511,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e5a2c040777a677998b3844c4acab14666ff26ef"
                },
                {
                    "path": "task/src/modules/downloader/geoscf.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "339623ec3882302274c6e2c857e05442729d04ca",
                    "size": 4588,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/339623ec3882302274c6e2c857e05442729d04ca"
                },
                {
                    "path": "task/src/modules/estimator",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "a29fea5a49263c088a218e175a55505638638e42",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/a29fea5a49263c088a218e175a55505638638e42"
                },
                {
                    "path": "task/src/modules/estimator/main.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9d4b13777e3b42103d25ee1e51c465ca7cd9c7f2",
                    "size": 5167,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9d4b13777e3b42103d25ee1e51c465ca7cd9c7f2"
                },
                {
                    "path": "task/src/modules/issuehandler",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "2201a9525f88d12bf16d87245a160167557064a6",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/2201a9525f88d12bf16d87245a160167557064a6"
                },
                {
                    "path": "task/src/modules/issuehandler/main.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fcb10deb3725801ca069fa013ec369f37b503490",
                    "size": 10209,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fcb10deb3725801ca069fa013ec369f37b503490"
                },
                {
                    "path": "task/src/modules/reconstructor",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "492497b36101ea62f18866d4e2ac103bb1e79415",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/492497b36101ea62f18866d4e2ac103bb1e79415"
                },
                {
                    "path": "task/src/modules/reconstructor/main.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f076134c958236fb62655970ca096812f0037e93",
                    "size": 7504,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f076134c958236fb62655970ca096812f0037e93"
                },
                {
                    "path": "task/src/types.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ba34d07b5b7e0e79d335b1e58476e285deb25baf",
                    "size": 53,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ba34d07b5b7e0e79d335b1e58476e285deb25baf"
                },
                {
                    "path": "task/src/utils",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "39b3bc86420861cd5342131da6afb497e4fd9688",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/39b3bc86420861cd5342131da6afb497e4fd9688"
                },
                {
                    "path": "task/src/utils/heavy.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "402f3481b95df8db8e5e92afa8e01ed30a22a16c",
                    "size": 20797,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/402f3481b95df8db8e5e92afa8e01ed30a22a16c"
                },
                {
                    "path": "task/src/utils/light.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a1dd2899dd71cd4a542c306768c72657928a0a39",
                    "size": 19403,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a1dd2899dd71cd4a542c306768c72657928a0a39"
                },
                {
                    "path": "task/uv.lock",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3eba3b5f87ab27adf3fd1fca8bc984e3f1b2c0fa",
                    "size": 444168,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3eba3b5f87ab27adf3fd1fca8bc984e3f1b2c0fa"
                }
            ],
            "truncated": false
        } as GitHubTreeResp
    })
}

const githubRawFileApi = axios.create({
    baseURL: `https://raw.githubusercontent.com/${REPO_FULL_NAME}/main/`,
    timeout: 10000,
})

export const getRawFile = (path: string) => {
    return githubRawFileApi.get(path)
}