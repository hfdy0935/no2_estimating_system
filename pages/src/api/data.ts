import type { GitHubTreeResp } from "@/types"
import { raw_base_url, REPO_FULL_NAME } from "@/constants";
import axios from "axios"

export const getRepoTree = () => {
    // return axios.get<GitHubTreeResp>(`https://api.github.com/repos/${REPO_FULL_NAME}/git/trees/main`, {
    //     params: {
    //         recursive: 1
    //     },
    //     timeout: 5000
    // })

    // mock
    return Promise.resolve({
        status: 200,
        data: {
            "sha": "dca462c6d4b08ca5b672cd9fb1b757cd4ae79a30",
            "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/dca462c6d4b08ca5b672cd9fb1b757cd4ae79a30",
            "tree": [
                {
                    "path": ".github",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "15604b1492d0ab43ae5815b76a22c48c7c60f288",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/15604b1492d0ab43ae5815b76a22c48c7c60f288"
                },
                {
                    "path": ".github/workflows",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "4ad96375ad3b5622c05c766abea3504acf1538e1",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/4ad96375ad3b5622c05c766abea3504acf1538e1"
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
                    "path": ".github/workflows/pages.yml",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "78203827e96c90756fcf6ef3dcfab7f5c23a6744",
                    "size": 1554,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/78203827e96c90756fcf6ef3dcfab7f5c23a6744"
                },
                {
                    "path": ".gitignore",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "edcc6258ee3e3f6c493091606aa5d0747c1e161e",
                    "size": 384,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/edcc6258ee3e3f6c493091606aa5d0747c1e161e"
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
                    "sha": "fcb84299da0d36f5085f7f620addbdb048a73568",
                    "size": 2791,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fcb84299da0d36f5085f7f620addbdb048a73568"
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
                    "sha": "03cba6bb6729db6f778146640f508f45585b6fe9",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/03cba6bb6729db6f778146640f508f45585b6fe9"
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
                    "sha": "cbbbf536aca1be85476a697a523469b3744f75f5",
                    "size": 2446,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cbbbf536aca1be85476a697a523469b3744f75f5"
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
                    "sha": "cfe955505aa9fffd1ab7518cd8a34d09fb33be80",
                    "size": 1559,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cfe955505aa9fffd1ab7518cd8a34d09fb33be80"
                },
                {
                    "path": "pages/pnpm-lock.yaml",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "62959385f464fd460a4bfb70891c1f325de36c0c",
                    "size": 163661,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/62959385f464fd460a4bfb70891c1f325de36c0c"
                },
                {
                    "path": "pages/public",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "cd217ac517655eb20b7f46dbc672ea944e116e9f",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/cd217ac517655eb20b7f46dbc672ea944e116e9f"
                },
                {
                    "path": "pages/public/cnemc.png",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d1de836ac1b1171d9931b4804aed8a325ad6d419",
                    "size": 25793,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d1de836ac1b1171d9931b4804aed8a325ad6d419"
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
                    "sha": "afbe8f1194efe5188044a47432bdeff2f4887a83",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/afbe8f1194efe5188044a47432bdeff2f4887a83"
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
                    "sha": "af859dfd9aff24067deb697e361e76f0e7dd44bd",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/af859dfd9aff24067deb697e361e76f0e7dd44bd"
                },
                {
                    "path": "pages/src/api/data.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cd63d0a4981c828a8dc360e6017d93d1888c8c57",
                    "size": 232666,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cd63d0a4981c828a8dc360e6017d93d1888c8c57"
                },
                {
                    "path": "pages/src/constants",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "56d6f563400cab2edc7d39955fa980e308cac879",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/56d6f563400cab2edc7d39955fa980e308cac879"
                },
                {
                    "path": "pages/src/constants/index.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "90861b35b31559827bbc15b48f41eade53bf5b1f",
                    "size": 317,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/90861b35b31559827bbc15b48f41eade53bf5b1f"
                },
                {
                    "path": "pages/src/layout",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "3681f854c26ac69d63ff7e8b3cb403f95fb0b96e",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/3681f854c26ac69d63ff7e8b3cb403f95fb0b96e"
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
                    "sha": "1e725402c8cc6f42927faa0dee85a4d5b94cc45f",
                    "size": 1392,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1e725402c8cc6f42927faa0dee85a4d5b94cc45f"
                },
                {
                    "path": "pages/src/layout/right-map",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "ae24e108ba6608f0313544bff5bbd140d68049ca",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/ae24e108ba6608f0313544bff5bbd140d68049ca"
                },
                {
                    "path": "pages/src/layout/right-map/index.vue",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f8d12b11a779c966ae0001e5bbf12ed1cec4eff3",
                    "size": 3989,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f8d12b11a779c966ae0001e5bbf12ed1cec4eff3"
                },
                {
                    "path": "pages/src/layout/right-map/map-tools",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "a3a899d85ab6ccdbc908bf201422456599d3f657",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/a3a899d85ab6ccdbc908bf201422456599d3f657"
                },
                {
                    "path": "pages/src/layout/right-map/map-tools/calc.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
                    "size": 0,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"
                },
                {
                    "path": "pages/src/layout/right-map/map-tools/controllers-tools.vue",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c4179beedda96039562661542f9ea809602cc0d6",
                    "size": 701,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c4179beedda96039562661542f9ea809602cc0d6"
                },
                {
                    "path": "pages/src/layout/right-map/map-tools/index.vue",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7916aad67e4942704930389f6be9fbf7f15294b6",
                    "size": 490,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7916aad67e4942704930389f6be9fbf7f15294b6"
                },
                {
                    "path": "pages/src/layout/right-map/map-tools/statistic-tool.vue",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4137892cb58227af6af20ca72cdea78112b5d7f8",
                    "size": 6120,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4137892cb58227af6af20ca72cdea78112b5d7f8"
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
                    "sha": "2743dfdf3697dbeecac8abfb1d881ddef1e0f5bf",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/2743dfdf3697dbeecac8abfb1d881ddef1e0f5bf"
                },
                {
                    "path": "pages/src/stores/map.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bac442b9d40e343db189964fe05189b6204d7993",
                    "size": 881,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bac442b9d40e343db189964fe05189b6204d7993"
                },
                {
                    "path": "pages/src/stores/menu.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3f2a8197e3cae1fc846a26e519dc95a199af48c4",
                    "size": 600,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3f2a8197e3cae1fc846a26e519dc95a199af48c4"
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
                    "sha": "dea36508fa91be4e1e82ce1f16414f45d733bc85",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/dea36508fa91be4e1e82ce1f16414f45d733bc85"
                },
                {
                    "path": "pages/src/utils/index.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f7a73d5fb615850b3dafecfbd3032ad0f9e888fd",
                    "size": 3407,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f7a73d5fb615850b3dafecfbd3032ad0f9e888fd"
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
                    "sha": "ab81d8309b8f4af6dc741a62cfd0dcb005cb90b5",
                    "size": 953,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ab81d8309b8f4af6dc741a62cfd0dcb005cb90b5"
                },
                {
                    "path": "shared",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "796fc342a94bd6a1e3e59d7850a99d521b1bf97f",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/796fc342a94bd6a1e3e59d7850a99d521b1bf97f"
                },
                {
                    "path": "shared/data_record.json",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ae9b65c171c622a7831e0264c169645a4300e33d",
                    "size": 287,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ae9b65c171c622a7831e0264c169645a4300e33d"
                },
                {
                    "path": "shared/data_source",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "9aee9a00e7ae96744b5f19d31c85b7f063884396",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/9aee9a00e7ae96744b5f19d31c85b7f063884396"
                },
                {
                    "path": "shared/data_source/cnemc",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "1ba94dcc23e38d810e882f8819f86690e399faf9",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/1ba94dcc23e38d810e882f8819f86690e399faf9"
                },
                {
                    "path": "shared/data_source/cnemc/2025",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "5d076b6e6e22084ac0f953157f7a81c8c123a945",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/5d076b6e6e22084ac0f953157f7a81c8c123a945"
                },
                {
                    "path": "shared/data_source/cnemc/2025/20251228.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "54992577c64d6ccd8d947b882d48925f76229f95",
                    "size": 127105,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/54992577c64d6ccd8d947b882d48925f76229f95"
                },
                {
                    "path": "shared/data_source/cnemc/2025/20251229.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "69dd68ff01bd45a0b5a2e9a997363556ea48022d",
                    "size": 115435,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/69dd68ff01bd45a0b5a2e9a997363556ea48022d"
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
                    "sha": "db393e631f0e3379b64256b0e7ae71b3ee6b1c79",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/db393e631f0e3379b64256b0e7ae71b3ee6b1c79"
                },
                {
                    "path": "shared/data_source/geoscf/2025",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "0984dcaedb46c9af9eb26702ccb5e7c90666308a",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/0984dcaedb46c9af9eb26702ccb5e7c90666308a"
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
                    "path": "shared/data_source/geoscf/2025/20251224.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f2c8ea61cb5b09400b2ee75811cd1a50b8c77d70",
                    "size": 18445971,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f2c8ea61cb5b09400b2ee75811cd1a50b8c77d70"
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
                    "sha": "8e84807c2a34320bf95e2591c8ad9859e6a7343f",
                    "size": 997,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8e84807c2a34320bf95e2591c8ad9859e6a7343f"
                },
                {
                    "path": "shared/estimate",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "52143e65ffd0b95001c8364f0730ca072663d8b0",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/52143e65ffd0b95001c8364f0730ca072663d8b0"
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
                    "sha": "6dfebbbddcc0528ccbf10896cd2419eaa5facd4b",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/6dfebbbddcc0528ccbf10896cd2419eaa5facd4b"
                },
                {
                    "path": "shared/estimate/pq/2025",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "d5a725321d5060f7684f236ea470ab6f1419575b",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/d5a725321d5060f7684f236ea470ab6f1419575b"
                },
                {
                    "path": "shared/estimate/pq/2025/20251218.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "512bcfb51318f35d0197b0d0d0321d0974bb26f9",
                    "size": 15459789,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/512bcfb51318f35d0197b0d0d0321d0974bb26f9"
                },
                {
                    "path": "shared/estimate/pq/2025/20251219.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e8119c5800450bd291f17557a91bc413c3e72cfd",
                    "size": 15578152,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e8119c5800450bd291f17557a91bc413c3e72cfd"
                },
                {
                    "path": "shared/estimate/pq/2025/20251220.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "061e65bf09aeb7cbb8ce895cd46e755136a13ddb",
                    "size": 15480084,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/061e65bf09aeb7cbb8ce895cd46e755136a13ddb"
                },
                {
                    "path": "shared/estimate/surface_no2_record.json",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3bc71e41eda615b806480052117f91fcab4846ae",
                    "size": 50,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3bc71e41eda615b806480052117f91fcab4846ae"
                },
                {
                    "path": "shared/estimate/tif",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "023dddbd572e44d5416069cf0c1ee58c41641273",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/023dddbd572e44d5416069cf0c1ee58c41641273"
                },
                {
                    "path": "shared/estimate/tif/2025",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "47306091e53021e4f7977ad9fe0b68bf54e0d944",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/47306091e53021e4f7977ad9fe0b68bf54e0d944"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "a5389539844c58271b24472c0d75bac7cb5944f4",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/a5389539844c58271b24472c0d75bac7cb5944f4"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121800.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4845ca26a16dee33145d50df5d0fad5ed7f93e3b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4845ca26a16dee33145d50df5d0fad5ed7f93e3b"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121801.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "757ea899f0cee2af9e82d4cd31c1d9a3a11ecced",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/757ea899f0cee2af9e82d4cd31c1d9a3a11ecced"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121802.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d539eb429a863f3b8bcbf27dfe777fdf3b2cad78",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d539eb429a863f3b8bcbf27dfe777fdf3b2cad78"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121803.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "392d08736ec85b9735e0f344afb93ae39726c1bf",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/392d08736ec85b9735e0f344afb93ae39726c1bf"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121804.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7245dbc0eeda76386a1aa9639ba3da792e4d14ea",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7245dbc0eeda76386a1aa9639ba3da792e4d14ea"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121805.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4994453d60080397aa339c69eb818677ea3441e8",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4994453d60080397aa339c69eb818677ea3441e8"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121806.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c2182afb24c53c8661e890f5a02fa18182f76a70",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c2182afb24c53c8661e890f5a02fa18182f76a70"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121807.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3c839d2d8e94d8e061d43a9ff59674d43613cb88",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3c839d2d8e94d8e061d43a9ff59674d43613cb88"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121808.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6dabcc84229d4c698f57df0af0fb374e26ce0bce",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6dabcc84229d4c698f57df0af0fb374e26ce0bce"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121809.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a93f0dcaa3c20cd5c215f593a9ccecbee21219ee",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a93f0dcaa3c20cd5c215f593a9ccecbee21219ee"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121810.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4448c70476cde471144deb53edd2ff632a633ca4",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4448c70476cde471144deb53edd2ff632a633ca4"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121811.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e642eb14360479fa9bc8c57d2236112da2513f41",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e642eb14360479fa9bc8c57d2236112da2513f41"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121812.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "776381ca5e2c4a4be230c5039b09de7b2acdc3e1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/776381ca5e2c4a4be230c5039b09de7b2acdc3e1"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121813.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "38e84aef0c463df1f2cf975c94e53db5a518ade8",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/38e84aef0c463df1f2cf975c94e53db5a518ade8"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121814.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2bce3718f19e87cd26216363b48e688c038a62ec",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2bce3718f19e87cd26216363b48e688c038a62ec"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121815.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "83d83e0839e90349cd648f6226f7442e7d599ab5",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/83d83e0839e90349cd648f6226f7442e7d599ab5"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121816.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "07a577d96e192cd2b6b6cfc939afb36d295df111",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/07a577d96e192cd2b6b6cfc939afb36d295df111"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121817.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "13adb1e3d0164bd3e1e1b0141dee49e385fe42d2",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/13adb1e3d0164bd3e1e1b0141dee49e385fe42d2"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121818.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ed60dbff0394cc983aa816a93a1ba2cfe50eca23",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ed60dbff0394cc983aa816a93a1ba2cfe50eca23"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121819.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b0ab3767a8c85e1c3610ec7d766e6e24b7aec0e9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b0ab3767a8c85e1c3610ec7d766e6e24b7aec0e9"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121820.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5735c68eef6963af6f0f9ea9aa24c4f0434291b1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5735c68eef6963af6f0f9ea9aa24c4f0434291b1"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121821.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1b04f11c59d3ecc588727cc7305f1efbe34c7d02",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1b04f11c59d3ecc588727cc7305f1efbe34c7d02"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121822.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7e14543847e944874cb48ab854697ec33cb49a24",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7e14543847e944874cb48ab854697ec33cb49a24"
                },
                {
                    "path": "shared/estimate/tif/2025/20251218/2025121823.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "58f646f48ec0af5dc5f77b411ef71ff7d6da0da5",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/58f646f48ec0af5dc5f77b411ef71ff7d6da0da5"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "f509c55161285f136b51c8bfc5f4b6568f900487",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/f509c55161285f136b51c8bfc5f4b6568f900487"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121900.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fce8af6ad4bcc1e2889d1ae014d0d4aeeda6921e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fce8af6ad4bcc1e2889d1ae014d0d4aeeda6921e"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121901.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "36fc2f3d94b58e9e9a41b4acfebee06b5b0a987e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/36fc2f3d94b58e9e9a41b4acfebee06b5b0a987e"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121902.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "38cfa4e2642f71b258c412e386dec69eb769a53d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/38cfa4e2642f71b258c412e386dec69eb769a53d"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121903.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "686c1015065cae274da9912daa6adf8c3883580e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/686c1015065cae274da9912daa6adf8c3883580e"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121904.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "09050776ddf0c4319203bb6a0852bad20a600027",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/09050776ddf0c4319203bb6a0852bad20a600027"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121905.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "56e797fa36576ed9da55b06e2aa7ec6d661c9bc1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/56e797fa36576ed9da55b06e2aa7ec6d661c9bc1"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121906.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3368e10e0f01fc3b32396a6b4f3000287378fe07",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3368e10e0f01fc3b32396a6b4f3000287378fe07"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121907.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "07f2bb83dd3dcd3a03eddef42afc724650a43a58",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/07f2bb83dd3dcd3a03eddef42afc724650a43a58"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121908.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b38e248ca8b3286b27e3842a69cd027b67ef36ea",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b38e248ca8b3286b27e3842a69cd027b67ef36ea"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121909.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "90dd3299bfc7637650f837699b1819b10fa2070d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/90dd3299bfc7637650f837699b1819b10fa2070d"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121910.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a7e14e9076dd811f453c3b75760d4f283180cccc",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a7e14e9076dd811f453c3b75760d4f283180cccc"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121911.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f75e18f55caf1aacca8a979d6f3f080dcf07b259",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f75e18f55caf1aacca8a979d6f3f080dcf07b259"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121912.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f60386479ca511cc29509212ccaa4db38644f555",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f60386479ca511cc29509212ccaa4db38644f555"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121913.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "86510479c166929e1e59f6af7cdf6cc62370a8c1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/86510479c166929e1e59f6af7cdf6cc62370a8c1"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121914.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c0cb39df1be06d2ed42f5f040297579ecc851710",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c0cb39df1be06d2ed42f5f040297579ecc851710"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121915.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d3a943424c09aa243c1131aedaba683ecbb1702f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d3a943424c09aa243c1131aedaba683ecbb1702f"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121916.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b9b25a7fc1e65e10c78ed507cff0c0c446294d68",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b9b25a7fc1e65e10c78ed507cff0c0c446294d68"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121917.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d065535b42beaf42b3562b0fdb1829ac0671144d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d065535b42beaf42b3562b0fdb1829ac0671144d"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121918.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9b8abecc97a4d10726da0db0e727961e2c260668",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9b8abecc97a4d10726da0db0e727961e2c260668"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121919.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7bcb6f2aa78ded8cc5a936df3596133d9b48aade",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7bcb6f2aa78ded8cc5a936df3596133d9b48aade"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121920.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "99f86daeaf5f30e187f8e7f5a70330166819edd6",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/99f86daeaf5f30e187f8e7f5a70330166819edd6"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121921.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "244382e6b47dd42d0581c4be79fa1b125fc61037",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/244382e6b47dd42d0581c4be79fa1b125fc61037"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121922.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f03b3d1a8b2eea9197a8de1c515337e3f5f216b3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f03b3d1a8b2eea9197a8de1c515337e3f5f216b3"
                },
                {
                    "path": "shared/estimate/tif/2025/20251219/2025121923.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "be04b5c5c85d800399bda3fc8c8df39d734f8ae3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/be04b5c5c85d800399bda3fc8c8df39d734f8ae3"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "03c20b1f30651f57a56665f30c4e093f44f12ca3",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/03c20b1f30651f57a56665f30c4e093f44f12ca3"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122000.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "740cac1821c9aab48840cb76ea98cb636278bd43",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/740cac1821c9aab48840cb76ea98cb636278bd43"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122001.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "52675e92ded69ba8645dfcb4e865e68a2e36932e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/52675e92ded69ba8645dfcb4e865e68a2e36932e"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122002.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "18e15a3e8b585eaf9209860e58a5acc8c2e4ed09",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/18e15a3e8b585eaf9209860e58a5acc8c2e4ed09"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122003.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6946c35302ddf1af885c8245606f39234e098157",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6946c35302ddf1af885c8245606f39234e098157"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122004.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "69cd4881a121e78da37dc91ebe62ab829f1d8306",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/69cd4881a121e78da37dc91ebe62ab829f1d8306"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122005.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6e0e2e23c901723a58f2c258dfeaa8682f47d1f0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6e0e2e23c901723a58f2c258dfeaa8682f47d1f0"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122006.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "85065f6098e6fe9e86ee166169d523a317674f3e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/85065f6098e6fe9e86ee166169d523a317674f3e"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122007.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "096ec90602968eda14e5b6ce419178f445a0ef4e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/096ec90602968eda14e5b6ce419178f445a0ef4e"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122008.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7f354c644736d6d4f190b45c33919cde025f672e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7f354c644736d6d4f190b45c33919cde025f672e"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122009.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2e3d2d3402282cddf10960b1f83d66949b4b33a9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2e3d2d3402282cddf10960b1f83d66949b4b33a9"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122010.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5b4412e3c5704ff55277d84b0427697a1b84c63b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5b4412e3c5704ff55277d84b0427697a1b84c63b"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122011.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5c89cf95d8db75b63e813b2dc7c355b0be7f8671",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5c89cf95d8db75b63e813b2dc7c355b0be7f8671"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122012.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "736abd6c53fb771abdec9d6b0b4f713362400ed6",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/736abd6c53fb771abdec9d6b0b4f713362400ed6"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122013.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a59a7b58cc0f54d948ac1c29b1c530c38a21fa50",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a59a7b58cc0f54d948ac1c29b1c530c38a21fa50"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122014.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "91bfd06e92d638b8498240df901b8e31f36c1829",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/91bfd06e92d638b8498240df901b8e31f36c1829"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122015.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d42c4a7605a23423c62aea19a8bb8586028567bd",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d42c4a7605a23423c62aea19a8bb8586028567bd"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122016.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ee4acba163602319eb4f8deea0846cc0cdcef15b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ee4acba163602319eb4f8deea0846cc0cdcef15b"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122017.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c8641b48d226fe0c0bc59fe11690c3f2672a3f8f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c8641b48d226fe0c0bc59fe11690c3f2672a3f8f"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122018.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "842c5b2b48b805ad4620651f5c22f8ba4ccf83f3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/842c5b2b48b805ad4620651f5c22f8ba4ccf83f3"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122019.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2b9f8b1060bd065b09a776db9c4d602a678bc373",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2b9f8b1060bd065b09a776db9c4d602a678bc373"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122020.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c0145f26cb9eba5c02ff1f230ff9cc929504a3b4",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c0145f26cb9eba5c02ff1f230ff9cc929504a3b4"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122021.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "49ddcb0a13780be7e7820f6803921acebfb53d52",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/49ddcb0a13780be7e7820f6803921acebfb53d52"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122022.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1a9d1c2dbed56e50d6a44ede14bb5e86ac64065f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1a9d1c2dbed56e50d6a44ede14bb5e86ac64065f"
                },
                {
                    "path": "shared/estimate/tif/2025/20251220/2025122023.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "730105d8e2c6fa7060f39b4ab2c41405213557e0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/730105d8e2c6fa7060f39b4ab2c41405213557e0"
                },
                {
                    "path": "shared/reconstruct",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "9430a496e8aed178c2a11a56355f7246ed11ccc8",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/9430a496e8aed178c2a11a56355f7246ed11ccc8"
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
                    "sha": "74888ca4ccf097241223e77766c40416b3d368de",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/74888ca4ccf097241223e77766c40416b3d368de"
                },
                {
                    "path": "shared/reconstruct/pq/2025",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "09e4f0fcb1223f4056faa83612f78930ebc3bd98",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/09e4f0fcb1223f4056faa83612f78930ebc3bd98"
                },
                {
                    "path": "shared/reconstruct/pq/2025/20251218.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e4d19ef897e3ce12a6544a7c35cd9870843e2f80",
                    "size": 17469087,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e4d19ef897e3ce12a6544a7c35cd9870843e2f80"
                },
                {
                    "path": "shared/reconstruct/pq/2025/20251219.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b868c148cddf7ebcb14c5ed294495c29fb1eb564",
                    "size": 17468656,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b868c148cddf7ebcb14c5ed294495c29fb1eb564"
                },
                {
                    "path": "shared/reconstruct/pq/2025/20251220.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "72ee38b93e84e4a56ec364f38da564387d3d1b44",
                    "size": 17888833,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/72ee38b93e84e4a56ec364f38da564387d3d1b44"
                },
                {
                    "path": "shared/reconstruct/tif",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "41b5e5492ed7172a08ea68f6cb4f10589644124d",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/41b5e5492ed7172a08ea68f6cb4f10589644124d"
                },
                {
                    "path": "shared/reconstruct/tif/2025",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "2b76f7b01f210095499de419334f1164de4a8707",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/2b76f7b01f210095499de419334f1164de4a8707"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "b0018df55296f54e6486a70de433d418ebd32fb7",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/b0018df55296f54e6486a70de433d418ebd32fb7"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121800.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5d0569859389a6b632d7a9a0e25399303a67bb4f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5d0569859389a6b632d7a9a0e25399303a67bb4f"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121801.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "28276751c45fda88637e4bb2edb9342912d21b18",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/28276751c45fda88637e4bb2edb9342912d21b18"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121802.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0226a601b79dea20452e839afcce5bc7eef289be",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0226a601b79dea20452e839afcce5bc7eef289be"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121803.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fb3316e63d39cdd3d0089e7627d52c0297027631",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fb3316e63d39cdd3d0089e7627d52c0297027631"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121804.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "631cae1ff1179b266af1f2e90d637234ef8124f7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/631cae1ff1179b266af1f2e90d637234ef8124f7"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121805.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "38142280064535dbade50ff7910750ca1ee608f3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/38142280064535dbade50ff7910750ca1ee608f3"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121806.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e918c6923cdb0d6e10eb7b0dc1702d817e81d904",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e918c6923cdb0d6e10eb7b0dc1702d817e81d904"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121807.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "04931c3617a74e6a5d349b9c41387ef1a05d398d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/04931c3617a74e6a5d349b9c41387ef1a05d398d"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121808.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "50173b28c7cc0e4a23cbeb9397c92913e088d393",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/50173b28c7cc0e4a23cbeb9397c92913e088d393"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121809.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b10aa2c8b4aeff82b4e57b8df0cf1d235b0fbebd",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b10aa2c8b4aeff82b4e57b8df0cf1d235b0fbebd"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121810.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "322a6e8ee417e391a202d98cf2539f2d114fca06",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/322a6e8ee417e391a202d98cf2539f2d114fca06"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121811.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "813517db9ca8e42f68cd1b8d9aab16a2ef5b7bab",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/813517db9ca8e42f68cd1b8d9aab16a2ef5b7bab"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121812.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "60c5c5eae4a0160abc9e1f2465dda75167818076",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/60c5c5eae4a0160abc9e1f2465dda75167818076"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121813.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2a384e27ba138735682ee782fe5ca1f6cd9700d6",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2a384e27ba138735682ee782fe5ca1f6cd9700d6"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121814.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fb85cec39d7ad7741650dd5b8cb6807c2c618943",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fb85cec39d7ad7741650dd5b8cb6807c2c618943"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121815.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5e3732d4e898837e6650070888046e3b27e12748",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5e3732d4e898837e6650070888046e3b27e12748"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121816.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e404ef2ceed7515ace03329fdcc33a8c4f34169d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e404ef2ceed7515ace03329fdcc33a8c4f34169d"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121817.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "387decc3ee3ff28317a4857705541272850772cf",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/387decc3ee3ff28317a4857705541272850772cf"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121818.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "882522973b0155f1c38ff9946ece20dd884493af",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/882522973b0155f1c38ff9946ece20dd884493af"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121819.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "539939be2dee15c3208dfdf42732cc935265bc71",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/539939be2dee15c3208dfdf42732cc935265bc71"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121820.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2ca3b318172e4e8f13f2e71a388851ff65282289",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2ca3b318172e4e8f13f2e71a388851ff65282289"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121821.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5e07ce6e6870d82690eba8e82b435c08acb5706f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5e07ce6e6870d82690eba8e82b435c08acb5706f"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121822.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c34adbe7059324e0f8553fbb303964470688571d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c34adbe7059324e0f8553fbb303964470688571d"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251218/2025121823.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a12eae8943216960c8945541ce2816c474b676e8",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a12eae8943216960c8945541ce2816c474b676e8"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "6b4da94c900ca4151ea694e460ce23bedbe03f57",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/6b4da94c900ca4151ea694e460ce23bedbe03f57"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121900.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "657686652161dd436c42065b11659525119138cd",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/657686652161dd436c42065b11659525119138cd"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121901.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "064ac7c26313dbd5ed748918d5ad1d1d89baa75d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/064ac7c26313dbd5ed748918d5ad1d1d89baa75d"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121902.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "51d82ba146bdb4ce50cd4ee1eb14ee06b78fa629",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/51d82ba146bdb4ce50cd4ee1eb14ee06b78fa629"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121903.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e6e8582e49244b9234fd3b84cbc54213f2dd7621",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e6e8582e49244b9234fd3b84cbc54213f2dd7621"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121904.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c55600c5ce738ec729b8cd0f67cbf48b8b902df8",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c55600c5ce738ec729b8cd0f67cbf48b8b902df8"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121905.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5e7c833009afac611a782d0f5bd02111ba4dfbe6",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5e7c833009afac611a782d0f5bd02111ba4dfbe6"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121906.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "61f797fd9f08461de7cce6abafee4fc536737bff",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/61f797fd9f08461de7cce6abafee4fc536737bff"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121907.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7708dfe6e8eb39f99d996c04ce57a734d9fad4de",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7708dfe6e8eb39f99d996c04ce57a734d9fad4de"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121908.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a3f0dbeb80f39fe7d8dcac545e2db835ccf7e6ca",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a3f0dbeb80f39fe7d8dcac545e2db835ccf7e6ca"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121909.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8b1a0674998a31f59c377a298abbe4bbc157509a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8b1a0674998a31f59c377a298abbe4bbc157509a"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121910.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0feeec6b5fe1a3e81c1a87776658b2bc403a8d34",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0feeec6b5fe1a3e81c1a87776658b2bc403a8d34"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121911.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "90634efaab26e3ed42b2efbfe00207c25aead01e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/90634efaab26e3ed42b2efbfe00207c25aead01e"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121912.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e2a2f6264d30c2fcfdd71e32b83fb5941e7f60a2",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e2a2f6264d30c2fcfdd71e32b83fb5941e7f60a2"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121913.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d59519ca6ef7571cf4fd75538aed5ae69a30dea1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d59519ca6ef7571cf4fd75538aed5ae69a30dea1"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121914.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "61956abfb0cdba599c41e24e47c7a4655db084c9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/61956abfb0cdba599c41e24e47c7a4655db084c9"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121915.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "84cc64589fa1b9281ae60bf7b4946fa7ee3aa800",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/84cc64589fa1b9281ae60bf7b4946fa7ee3aa800"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121916.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ecaff1e4747f28c067e14ded55643b989384c626",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ecaff1e4747f28c067e14ded55643b989384c626"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121917.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d03e4248ddf0ec97e0864b4dab8fdb5cd80b59ea",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d03e4248ddf0ec97e0864b4dab8fdb5cd80b59ea"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121918.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "59a6cb56f4fa20b26dfdb1f566ccd0f59feb3224",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/59a6cb56f4fa20b26dfdb1f566ccd0f59feb3224"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121919.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0ba50acbe78d75284f890a904e8277b673542158",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0ba50acbe78d75284f890a904e8277b673542158"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121920.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a6636ed9b152b0ef4e5f37d6d2349d18d4c9d910",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a6636ed9b152b0ef4e5f37d6d2349d18d4c9d910"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121921.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cd44df780101a97e1d1fb5066559bfb1d9aa4740",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cd44df780101a97e1d1fb5066559bfb1d9aa4740"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121922.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "aaf89be88727615060b6be3648c1eb6e5bd19aff",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/aaf89be88727615060b6be3648c1eb6e5bd19aff"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251219/2025121923.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0ee1da637976c7393fc583ee35a57bc1cc867a7e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0ee1da637976c7393fc583ee35a57bc1cc867a7e"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "21800a05a8096a117f930fd4c27e06e1a72a10d3",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/21800a05a8096a117f930fd4c27e06e1a72a10d3"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122000.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3565d4ac0daeda67afefa1066e13bd4662c5b961",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3565d4ac0daeda67afefa1066e13bd4662c5b961"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122001.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "24f7cf0953b8b630930b02caba920640e0886238",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/24f7cf0953b8b630930b02caba920640e0886238"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122002.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3c6432173ef7b7910d9d702c4547675816db8147",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3c6432173ef7b7910d9d702c4547675816db8147"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122003.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f43da18a4f0cfa5d7ba8cddffddd9eb07eb8839e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f43da18a4f0cfa5d7ba8cddffddd9eb07eb8839e"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122004.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "875849e64ee64076c7e21af9274e502ade4a1f65",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/875849e64ee64076c7e21af9274e502ade4a1f65"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122005.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e36b8de4f7d6c6528ef7eb41e618bbe33200bab6",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e36b8de4f7d6c6528ef7eb41e618bbe33200bab6"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122006.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f35f1b8aa71f74f4c3b4b9b2261e41424bf1af2e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f35f1b8aa71f74f4c3b4b9b2261e41424bf1af2e"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122007.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5768dd8cd62504f495d8aaa272c9d95e7e84838a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5768dd8cd62504f495d8aaa272c9d95e7e84838a"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122008.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0fe2fd7d11011ae782cabf3e9e86367637cbf54e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0fe2fd7d11011ae782cabf3e9e86367637cbf54e"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122009.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8d3c1f202a6b1497aff70898798c76e6ea9dad9c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8d3c1f202a6b1497aff70898798c76e6ea9dad9c"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122010.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1159febffe51bfb4a09e052ad97468f9b4494ca0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1159febffe51bfb4a09e052ad97468f9b4494ca0"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122011.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "77deffbff8b850b0dbbf2c6fe9e612ae6e35d2a3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/77deffbff8b850b0dbbf2c6fe9e612ae6e35d2a3"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122012.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7983ac59867a47825ec9ce0f43ef59fffc689706",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7983ac59867a47825ec9ce0f43ef59fffc689706"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122013.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "588f613142b90688816b4d167b86c5b983d9aaf2",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/588f613142b90688816b4d167b86c5b983d9aaf2"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122014.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8e93e6e88f1d17637b7e5551450449316bde7b35",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8e93e6e88f1d17637b7e5551450449316bde7b35"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122015.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4159d838d8db6fa4b0c8ff4af3580fe8d00d633b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4159d838d8db6fa4b0c8ff4af3580fe8d00d633b"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122016.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b1dc087d18c46e4c42f0aa5d962c587b70c8305c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b1dc087d18c46e4c42f0aa5d962c587b70c8305c"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122017.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "59e8a61c425a646ad949c6cfd4b0a7f1bd684340",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/59e8a61c425a646ad949c6cfd4b0a7f1bd684340"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122018.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e2bd369854350c55b300b2e22a403da2b55009ec",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e2bd369854350c55b300b2e22a403da2b55009ec"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122019.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2861fa99783541f8fbc504cde455e1ab65e9d2f2",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2861fa99783541f8fbc504cde455e1ab65e9d2f2"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122020.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "51fa72d1b28ceb35f1ad44ee39e061afb1ac386e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/51fa72d1b28ceb35f1ad44ee39e061afb1ac386e"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122021.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "61fea9e1515c064a7bc642da5a878b9f50ad809d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/61fea9e1515c064a7bc642da5a878b9f50ad809d"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122022.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "47cfccf34aa3fb00f73cff00bb7f876b7e758eb1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/47cfccf34aa3fb00f73cff00bb7f876b7e758eb1"
                },
                {
                    "path": "shared/reconstruct/tif/2025/20251220/2025122023.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "50474d675c2f4d33e3b204058b7f23c9b6db511f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/50474d675c2f4d33e3b204058b7f23c9b6db511f"
                },
                {
                    "path": "task",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "0f75276b1ad205cbb2cf0b540687914caa0ea6ab",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/0f75276b1ad205cbb2cf0b540687914caa0ea6ab"
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
                    "sha": "71305432095f4b8895667b881c9dd76b491d214e",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/71305432095f4b8895667b881c9dd76b491d214e"
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
                    "sha": "2fd42eb96761985e82b1b91ca07eceeb38d94992",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/2fd42eb96761985e82b1b91ca07eceeb38d94992"
                },
                {
                    "path": "task/src/modules/downloader",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "62147a2a7c69cfbb07b6f7bb0b436936571934c7",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/62147a2a7c69cfbb07b6f7bb0b436936571934c7"
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
                    "sha": "4f021463e121d654be34d12fb1c45b17a519f95d",
                    "size": 5366,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4f021463e121d654be34d12fb1c45b17a519f95d"
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
                    "sha": "41eacea51023ac876556c1a513a9d10187600423",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/41eacea51023ac876556c1a513a9d10187600423"
                },
                {
                    "path": "task/src/modules/estimator/main.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "85d446485207ad6477c716bb8197b57d0ca6ad4d",
                    "size": 5394,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/85d446485207ad6477c716bb8197b57d0ca6ad4d"
                },
                {
                    "path": "task/src/modules/issuehandler",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "e6fce3c224a8d1f1841bd2885668c53c4d0298c8",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/e6fce3c224a8d1f1841bd2885668c53c4d0298c8"
                },
                {
                    "path": "task/src/modules/issuehandler/main.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0b1fcd9beba19bfb22ef9de9aee85e9558f893b3",
                    "size": 10417,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0b1fcd9beba19bfb22ef9de9aee85e9558f893b3"
                },
                {
                    "path": "task/src/modules/reconstructor",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "12d8f53cb916069a7d5232215a95006b04bd0f4b",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/12d8f53cb916069a7d5232215a95006b04bd0f4b"
                },
                {
                    "path": "task/src/modules/reconstructor/main.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6a24b33c9485efc85c99710e8f5d9cf4ed92723c",
                    "size": 7786,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6a24b33c9485efc85c99710e8f5d9cf4ed92723c"
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
                    "sha": "bbd1f7be348ef198418a7da9d92d34b59800224a",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/bbd1f7be348ef198418a7da9d92d34b59800224a"
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
                    "sha": "2e1b4d53ef948fedd1653f6fdb8e87a3f98fdc62",
                    "size": 20562,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2e1b4d53ef948fedd1653f6fdb8e87a3f98fdc62"
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
    baseURL: raw_base_url,
    timeout: 10000,
})

export const getRawFile = (path: string) => {
    return githubRawFileApi.get(path)
}