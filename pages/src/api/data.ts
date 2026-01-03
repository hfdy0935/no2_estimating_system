import type { GitHubTreeResp } from "@/types"
import { raw_base_url, REPO_FULL_NAME } from "@/constants";
import axios from "axios"

export const getRepoTree = () => {
    if (import.meta.env.PROD) {
        return axios.get<GitHubTreeResp>(`https://api.github.com/repos/${REPO_FULL_NAME}/git/trees/main`, {
            params: {
                recursive: 1
            },
            timeout: 10000
        })
    }
    // 开发环境用mock数据，防止请求太频繁达到上限
    return Promise.resolve({
        status: 200,
        data: {
            "sha": "0cba79e774988abf7cb4c76c27e7dc5d066fb690",
            "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/0cba79e774988abf7cb4c76c27e7dc5d066fb690",
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
                    "sha": "b1f0e1dcc56ae71c917a8eb93fee82d33d044a35",
                    "size": 140,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b1f0e1dcc56ae71c917a8eb93fee82d33d044a35"
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
                    "sha": "5883daad19256906d6753dd83e1642c405803bae",
                    "size": 3440,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5883daad19256906d6753dd83e1642c405803bae"
                },
                {
                    "path": "assets",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "ca73626c7187645e4e93651d59bfd53c9afdfd1b",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/ca73626c7187645e4e93651d59bfd53c9afdfd1b"
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
                    "path": "assets/image-2.png",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "393ba6c4a6d217819c05e22e90cba0b24a55c40f",
                    "size": 97009,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/393ba6c4a6d217819c05e22e90cba0b24a55c40f"
                },
                {
                    "path": "pages",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "cc832c343634ef7fc6a4a580f8e6b6da552c2cea",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/cc832c343634ef7fc6a4a580f8e6b6da552c2cea"
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
                    "sha": "5e302f6069df33f9a5f0f0d7d7436d874d18cbe9",
                    "size": 3462,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5e302f6069df33f9a5f0f0d7d7436d874d18cbe9"
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
                    "sha": "7f6dfcfce83c15bac97a91bb3541da62af4682fa",
                    "size": 1610,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7f6dfcfce83c15bac97a91bb3541da62af4682fa"
                },
                {
                    "path": "pages/pnpm-lock.yaml",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1bcf1a7baaa01ac3df8be68f5fd27d9dd544f3ec",
                    "size": 181165,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1bcf1a7baaa01ac3df8be68f5fd27d9dd544f3ec"
                },
                {
                    "path": "pages/public",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "dd5a5475b6918df50d688f6e83398256fba91fcc",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/dd5a5475b6918df50d688f6e83398256fba91fcc"
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
                    "path": "pages/public/github.com_.png",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e8e29242e7070bc07ce238ed9291359651fa386b",
                    "size": 1499,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e8e29242e7070bc07ce238ed9291359651fa386b"
                },
                {
                    "path": "pages/public/layers.svg",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "141371199387ee65dde0294d363f6472123998af",
                    "size": 1508,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/141371199387ee65dde0294d363f6472123998af"
                },
                {
                    "path": "pages/public/statistic.svg",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "232d4e266f0f0a03a869ca97ad5e02f8e90394ae",
                    "size": 1724,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/232d4e266f0f0a03a869ca97ad5e02f8e90394ae"
                },
                {
                    "path": "pages/src",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "1ec38e5a99660ce9d9f61f17eae1d27dd5a66459",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/1ec38e5a99660ce9d9f61f17eae1d27dd5a66459"
                },
                {
                    "path": "pages/src/App.vue",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1e8ae893b53534ac8022dc68716c21da5f9e6ce5",
                    "size": 257,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1e8ae893b53534ac8022dc68716c21da5f9e6ce5"
                },
                {
                    "path": "pages/src/api",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "9c175f97c66ae9005a35a3f6db568f75735bc503",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/9c175f97c66ae9005a35a3f6db568f75735bc503"
                },
                {
                    "path": "pages/src/api/data.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1a349cac3a8894fb75e5faa16fcc13f62cf38d5c",
                    "size": 741473,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1a349cac3a8894fb75e5faa16fcc13f62cf38d5c"
                },
                {
                    "path": "pages/src/components",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "ea6b8781aa265973a49b4e77cbae515e07877b46",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/ea6b8781aa265973a49b4e77cbae515e07877b46"
                },
                {
                    "path": "pages/src/components/no2.vue",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "982cc65c695a31885f99c43c11fc60a5b5b17841",
                    "size": 116,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/982cc65c695a31885f99c43c11fc60a5b5b17841"
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
                    "sha": "f0768e0f8f81769a1aaed396778895d7109e7c8d",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/f0768e0f8f81769a1aaed396778895d7109e7c8d"
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
                    "sha": "c8ddbefce2430dd15871097e1a7d88aaa4f40dc9",
                    "size": 3048,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c8ddbefce2430dd15871097e1a7d88aaa4f40dc9"
                },
                {
                    "path": "pages/src/layout/right-map",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "a092cb9bd67f163f01045361fd84f4f0b6fa4f34",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/a092cb9bd67f163f01045361fd84f4f0b6fa4f34"
                },
                {
                    "path": "pages/src/layout/right-map/index.vue",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0a206a36290cf761c662dc04f61c88356bda9ae0",
                    "size": 3823,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0a206a36290cf761c662dc04f61c88356bda9ae0"
                },
                {
                    "path": "pages/src/layout/right-map/map-tools",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "eedec9aa34f6451c48f5330b528ee379310231de",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/eedec9aa34f6451c48f5330b528ee379310231de"
                },
                {
                    "path": "pages/src/layout/right-map/map-tools/cnemc-table-item-render.vue",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b787b021b3df807478a08a73f59b68c27f1e3f7d",
                    "size": 588,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b787b021b3df807478a08a73f59b68c27f1e3f7d"
                },
                {
                    "path": "pages/src/layout/right-map/map-tools/cnemc-table.vue",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c20c180a042a7ca69236eef14834a14c65a52e9e",
                    "size": 1620,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c20c180a042a7ca69236eef14834a14c65a52e9e"
                },
                {
                    "path": "pages/src/layout/right-map/map-tools/hourly-plot.vue",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cff25c573553d6e2fdc34093bc191fafe2d8989c",
                    "size": 1956,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cff25c573553d6e2fdc34093bc191fafe2d8989c"
                },
                {
                    "path": "pages/src/layout/right-map/map-tools/index.vue",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "32802e852d4c347b21f0f7fb82f8843181746eca",
                    "size": 563,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/32802e852d4c347b21f0f7fb82f8843181746eca"
                },
                {
                    "path": "pages/src/layout/right-map/map-tools/layer-tools.vue",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "53ebcce44b0ef9f4ef23f794df0512f77d85d476",
                    "size": 3005,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/53ebcce44b0ef9f4ef23f794df0512f77d85d476"
                },
                {
                    "path": "pages/src/layout/right-map/map-tools/matched-plot.vue",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "04c756a97eda16f8fefdea91c5859de6bd325f9c",
                    "size": 3610,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/04c756a97eda16f8fefdea91c5859de6bd325f9c"
                },
                {
                    "path": "pages/src/layout/right-map/map-tools/plot-tools.vue",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fce50917d4dc904a82639cc84193083f96bd9388",
                    "size": 3029,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fce50917d4dc904a82639cc84193083f96bd9388"
                },
                {
                    "path": "pages/src/layout/right-map/map-tools/types.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fbc77c42afa8776f345503ddba1541e9c9b52784",
                    "size": 359,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fbc77c42afa8776f345503ddba1541e9c9b52784"
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
                    "sha": "04cce7f08e773c713f6a2d6c69bd921ab764f4fc",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/04cce7f08e773c713f6a2d6c69bd921ab764f4fc"
                },
                {
                    "path": "pages/src/stores/map.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d87cb7a0ebb2f5212bc3b00fb29fe609bbb84caa",
                    "size": 3336,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d87cb7a0ebb2f5212bc3b00fb29fe609bbb84caa"
                },
                {
                    "path": "pages/src/stores/menu.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3425f1a1b26c154b0613575f33bdb0a167b6048d",
                    "size": 1104,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3425f1a1b26c154b0613575f33bdb0a167b6048d"
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
                    "sha": "8b2d224ca865404022de107b0e83b39dc55e810b",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/8b2d224ca865404022de107b0e83b39dc55e810b"
                },
                {
                    "path": "pages/src/types/index.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "37ada6ec9a43053de5693c6657b8d96f521e9278",
                    "size": 339,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/37ada6ec9a43053de5693c6657b8d96f521e9278"
                },
                {
                    "path": "pages/src/utils",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "864f510509ae6634095375680ff7fa84d9a067e5",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/864f510509ae6634095375680ff7fa84d9a067e5"
                },
                {
                    "path": "pages/src/utils/index.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "520f6ec868f734c124af73d90e718ece8585e0f0",
                    "size": 4681,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/520f6ec868f734c124af73d90e718ece8585e0f0"
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
                    "sha": "5abb6a937c835f4702043155d1a8a46297851eb1",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/5abb6a937c835f4702043155d1a8a46297851eb1"
                },
                {
                    "path": "shared/data_record.json",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5277c3c07ab0e5d5a69a53f2bc9fe45257b186a0",
                    "size": 36,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5277c3c07ab0e5d5a69a53f2bc9fe45257b186a0"
                },
                {
                    "path": "shared/data_source",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "c05d82ec01033548263acf5b5fe407fe3bde2437",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/c05d82ec01033548263acf5b5fe407fe3bde2437"
                },
                {
                    "path": "shared/data_source/cnemc",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "0d6f14ef5bfb7fb4a80023cf5e2152230ad5f817",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/0d6f14ef5bfb7fb4a80023cf5e2152230ad5f817"
                },
                {
                    "path": "shared/data_source/cnemc/2023",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "964c5aa19a19269938e561724b21f2b77bb43d7a",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/964c5aa19a19269938e561724b21f2b77bb43d7a"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231027.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a62825050efc48c15171b78dcb14e18e27c8648b",
                    "size": 131182,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a62825050efc48c15171b78dcb14e18e27c8648b"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231028.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "75902f02ccb139e7502ec2abee83a3141e10a48a",
                    "size": 121602,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/75902f02ccb139e7502ec2abee83a3141e10a48a"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231029.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a518eb61485089ac07aff8ed228ca00348c30341",
                    "size": 113775,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a518eb61485089ac07aff8ed228ca00348c30341"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231030.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "acbfb550c3d30890739fad9509b469ad47a204a8",
                    "size": 120292,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/acbfb550c3d30890739fad9509b469ad47a204a8"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231031.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "028bee4a1c75ac1504e387f3102d05b3bba4827b",
                    "size": 97580,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/028bee4a1c75ac1504e387f3102d05b3bba4827b"
                },
                {
                    "path": "shared/data_source/cnemc/2025",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "0ab012327b7d146eab9ea8dd750f3676ff399dc5",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/0ab012327b7d146eab9ea8dd750f3676ff399dc5"
                },
                {
                    "path": "shared/data_source/cnemc/2025/20251229.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8682ac391b7e2a038bbc3a1e93fa8c2608b4028f",
                    "size": 221880,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8682ac391b7e2a038bbc3a1e93fa8c2608b4028f"
                },
                {
                    "path": "shared/data_source/cnemc/2025/20251230.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f2153b74baaf4dcc3cb406c8c8930adc8cf368b2",
                    "size": 186621,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f2153b74baaf4dcc3cb406c8c8930adc8cf368b2"
                },
                {
                    "path": "shared/data_source/cnemc/2025/20251231.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7b91c742ed84a52beff5ec2aa3e30b50a66411db",
                    "size": 142830,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7b91c742ed84a52beff5ec2aa3e30b50a66411db"
                },
                {
                    "path": "shared/data_source/cnemc/2026",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "44d000001ca08c82ed3f46b134c1888c484fb78e",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/44d000001ca08c82ed3f46b134c1888c484fb78e"
                },
                {
                    "path": "shared/data_source/cnemc/2026/20260101.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "62a14497e637b61417561cbafd2ead59987908b4",
                    "size": 75545,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/62a14497e637b61417561cbafd2ead59987908b4"
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
                    "sha": "1d9b30998292d7e6ee797d05907db6af90ed8a41",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/1d9b30998292d7e6ee797d05907db6af90ed8a41"
                },
                {
                    "path": "shared/data_source/era5/2023",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "8b1ec67f5b4e86c282a7a686f8bb78174396d29f",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/8b1ec67f5b4e86c282a7a686f8bb78174396d29f"
                },
                {
                    "path": "shared/data_source/era5/2023/part1",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "100bc99d35177285da1fb59ce64fb0694709c525",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/100bc99d35177285da1fb59ce64fb0694709c525"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231027.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e58c83c948ddf654c943f5b83b7cf69e4c050e1e",
                    "size": 31494104,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e58c83c948ddf654c943f5b83b7cf69e4c050e1e"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231028.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2b12fb254286efbb1158433bd569b439c080ea55",
                    "size": 31463552,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2b12fb254286efbb1158433bd569b439c080ea55"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231029.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6bdc7549958c9e1376c8fc78279bbdf772c9fc4c",
                    "size": 31658434,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6bdc7549958c9e1376c8fc78279bbdf772c9fc4c"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231030.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b01e1adee3bfc12e6fae4e19c2d44f96826be32d",
                    "size": 31663834,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b01e1adee3bfc12e6fae4e19c2d44f96826be32d"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231031.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "67a5fe5784631b8328b51d76b273c24e8c8f9db1",
                    "size": 31865069,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/67a5fe5784631b8328b51d76b273c24e8c8f9db1"
                },
                {
                    "path": "shared/data_source/era5/2023/part2",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "27e9374fd862ee59d8967b875969a90a2bdc4957",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/27e9374fd862ee59d8967b875969a90a2bdc4957"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231027.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8833a1965ece2a44a7594ec452bc3945c25b6078",
                    "size": 37610702,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8833a1965ece2a44a7594ec452bc3945c25b6078"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231028.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5d7ea34f80b5079562b62161f53b0535dd2d6ee2",
                    "size": 37647246,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5d7ea34f80b5079562b62161f53b0535dd2d6ee2"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231029.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2cb5f4242e74484cb5957020fc381c0354177a14",
                    "size": 37634904,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2cb5f4242e74484cb5957020fc381c0354177a14"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231030.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "448fc65415422718e6d6ef26139fa46445d8c570",
                    "size": 37637980,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/448fc65415422718e6d6ef26139fa46445d8c570"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231031.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "50a7ad8598e7e423b1166ebb1d1657ace1fb5ec3",
                    "size": 37560827,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/50a7ad8598e7e423b1166ebb1d1657ace1fb5ec3"
                },
                {
                    "path": "shared/data_source/era5/2023/part3",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "d224b2e84956ed282902424352dcee34f50a6241",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/d224b2e84956ed282902424352dcee34f50a6241"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231027.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "904f8b0480fdb5072a762e3663649d4cc6eb951d",
                    "size": 35457096,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/904f8b0480fdb5072a762e3663649d4cc6eb951d"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231028.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "466054f7d6956bd59be9292b4b9eed4762ef3e37",
                    "size": 35534848,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/466054f7d6956bd59be9292b4b9eed4762ef3e37"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231029.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "606f70224a71f880a0aa4bf6da3cd85b45c0a038",
                    "size": 35734911,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/606f70224a71f880a0aa4bf6da3cd85b45c0a038"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231030.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "efbca0207eae4961ae1c38d1452eb031d552c5d5",
                    "size": 35691269,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/efbca0207eae4961ae1c38d1452eb031d552c5d5"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231031.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b94a9833649998819d165d81fcf7f4f8849a942a",
                    "size": 35654290,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b94a9833649998819d165d81fcf7f4f8849a942a"
                },
                {
                    "path": "shared/data_source/era5/2023/part4",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "885d29c6dc12353cee5922f39ab3bf9d1c4e72be",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/885d29c6dc12353cee5922f39ab3bf9d1c4e72be"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231027.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6397af90c2a04f9e10a4c960a8df1750acd5d7e7",
                    "size": 25748733,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6397af90c2a04f9e10a4c960a8df1750acd5d7e7"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231028.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ca92ec58df25bb6e6e507e9e590dbf8e57a23de2",
                    "size": 25571028,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ca92ec58df25bb6e6e507e9e590dbf8e57a23de2"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231029.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "abbd23a7f7f201820206463432455d9738ffca62",
                    "size": 25615206,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/abbd23a7f7f201820206463432455d9738ffca62"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231030.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0dc7bf2e9e778b4a632aad6e5f01a5de3de852a4",
                    "size": 25653581,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0dc7bf2e9e778b4a632aad6e5f01a5de3de852a4"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231031.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4512c965e51a7ac1b11bd29ac311007eb0f1aee4",
                    "size": 25886622,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4512c965e51a7ac1b11bd29ac311007eb0f1aee4"
                },
                {
                    "path": "shared/data_source/gems",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "49e25561863579ac1f99e016231cb0e5e865ef78",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/49e25561863579ac1f99e016231cb0e5e865ef78"
                },
                {
                    "path": "shared/data_source/gems/2023",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "a4b8bbfa6f05304936665b7863d4fc8146c9ed4e",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/a4b8bbfa6f05304936665b7863d4fc8146c9ed4e"
                },
                {
                    "path": "shared/data_source/gems/2023/20231027.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9f3a8794d213e45bad86c2f9632e4dcc700685d3",
                    "size": 2266541,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9f3a8794d213e45bad86c2f9632e4dcc700685d3"
                },
                {
                    "path": "shared/data_source/gems/2023/20231028.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cf9396ffe67f32caa907a1846fbe63001f6c47ff",
                    "size": 2535185,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cf9396ffe67f32caa907a1846fbe63001f6c47ff"
                },
                {
                    "path": "shared/data_source/gems/2023/20231029.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6156f65d47fe7b3f330025d0845ceafd9104b2d6",
                    "size": 2638092,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6156f65d47fe7b3f330025d0845ceafd9104b2d6"
                },
                {
                    "path": "shared/data_source/gems/2023/20231030.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ad577075263f232c72605f467421c54b8e3fd263",
                    "size": 2763779,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ad577075263f232c72605f467421c54b8e3fd263"
                },
                {
                    "path": "shared/data_source/gems/2023/20231031.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b7157196ae314a4c0612910b68b02f2b543bdd5d",
                    "size": 2037870,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b7157196ae314a4c0612910b68b02f2b543bdd5d"
                },
                {
                    "path": "shared/data_source/gems/2025",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "9caabc038b0ba860b8af1fdcfde8814513c80b82",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/9caabc038b0ba860b8af1fdcfde8814513c80b82"
                },
                {
                    "path": "shared/data_source/gems/2025/20251229.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a2da4a9c0fc37cca641774abab01494d185bf037",
                    "size": 1724662,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a2da4a9c0fc37cca641774abab01494d185bf037"
                },
                {
                    "path": "shared/data_source/gems/2025/20251230.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "629dbe99f0b8901d0c5867768b6788dacf255d51",
                    "size": 1198187,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/629dbe99f0b8901d0c5867768b6788dacf255d51"
                },
                {
                    "path": "shared/data_source/gems/2025/20251231.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c568ab12baf9d679517031d48006d75927696c5c",
                    "size": 1123776,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c568ab12baf9d679517031d48006d75927696c5c"
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
                    "sha": "8b34befad44107817a3d018450f938cf25b65a93",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/8b34befad44107817a3d018450f938cf25b65a93"
                },
                {
                    "path": "shared/data_source/geoscf/2023",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "ea58059db1bdfe6cb5cb25de75c9dcb6d0282df3",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/ea58059db1bdfe6cb5cb25de75c9dcb6d0282df3"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231027.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d154ad305686cc61ab2cf7f439f7912eac5b6f9f",
                    "size": 18191416,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d154ad305686cc61ab2cf7f439f7912eac5b6f9f"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231028.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9191086554d01ed21575c3552c7a7a4f658af3d4",
                    "size": 17889061,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9191086554d01ed21575c3552c7a7a4f658af3d4"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231029.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "635882f04e3898fa97248931ab8befba28a606df",
                    "size": 17699615,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/635882f04e3898fa97248931ab8befba28a606df"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231030.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ebe31f62f3b4962d39a29d507b337d0af37dd6ab",
                    "size": 17967769,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ebe31f62f3b4962d39a29d507b337d0af37dd6ab"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231031.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b88b29874c9181c26cceb27ebed688e202431c0b",
                    "size": 17839933,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b88b29874c9181c26cceb27ebed688e202431c0b"
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
                    "sha": "c51e4bd49bfd882c1f925c0c901d88e0ab789d7a",
                    "size": 987,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c51e4bd49bfd882c1f925c0c901d88e0ab789d7a"
                },
                {
                    "path": "shared/estimate",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "824352a1da0542167ebd205bb54affe346e33438",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/824352a1da0542167ebd205bb54affe346e33438"
                },
                {
                    "path": "shared/estimate/daily_tif",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "c4523fc741255c93967af29346a58250094266ea",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/c4523fc741255c93967af29346a58250094266ea"
                },
                {
                    "path": "shared/estimate/daily_tif/2023",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "086d4fc6d3756964632fd70869ceb3c104330ff1",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/086d4fc6d3756964632fd70869ceb3c104330ff1"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231027.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6422d9d4f03802d0ec2b8b5328733db7d9b0d27a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6422d9d4f03802d0ec2b8b5328733db7d9b0d27a"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231028.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "eb7d2782ddfa9980ff31efb72c8aa65f2b06f9de",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/eb7d2782ddfa9980ff31efb72c8aa65f2b06f9de"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231029.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "266b97dc7f8249beb77f4fe7b87d74f1de757bf5",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/266b97dc7f8249beb77f4fe7b87d74f1de757bf5"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231030.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b22cf2147edeb3bb48713621677f2e342b58b1db",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b22cf2147edeb3bb48713621677f2e342b58b1db"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231031.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cecc05d8745874eb16a4cca3ed40d6b2e7346a28",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cecc05d8745874eb16a4cca3ed40d6b2e7346a28"
                },
                {
                    "path": "shared/estimate/hourly_tif",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "0737daa691e8420ca8b2095fd111b9dfb90669d0",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/0737daa691e8420ca8b2095fd111b9dfb90669d0"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "e095f281b464f5cbcd9ba1593daa517da2f695b7",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/e095f281b464f5cbcd9ba1593daa517da2f695b7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "91d748f55df872bbe954da0b0c550c2be6b1a7bc",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/91d748f55df872bbe954da0b0c550c2be6b1a7bc"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102700.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "91c1dcc9f56112fa2270af52590008bdf7a31484",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/91c1dcc9f56112fa2270af52590008bdf7a31484"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102701.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f5240afdaa4201a18a9585b100c57c6da2016646",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f5240afdaa4201a18a9585b100c57c6da2016646"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102702.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0aabf78f74f790626a8081e945bcf529f2b25e1b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0aabf78f74f790626a8081e945bcf529f2b25e1b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102703.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "61ce94350492fbf3ed7619f5a10b9a15ca929297",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/61ce94350492fbf3ed7619f5a10b9a15ca929297"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102704.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f64a189782f0b02d524c7ba429fae4edd4a873b0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f64a189782f0b02d524c7ba429fae4edd4a873b0"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102705.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "00599b5ef5d00ddac222e1961ef2361985c57932",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/00599b5ef5d00ddac222e1961ef2361985c57932"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102706.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5d0bd80eef600853c3ce9f10f1ad5508412682d0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5d0bd80eef600853c3ce9f10f1ad5508412682d0"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102707.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f031efe43e54e0a663611f14dc9380aa1590b875",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f031efe43e54e0a663611f14dc9380aa1590b875"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102708.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "256f15d9cef0d74b944f3862c41b06dc99de7037",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/256f15d9cef0d74b944f3862c41b06dc99de7037"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102709.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "36ec053a09a59d0b5dd0819c4ad35db220d7fc97",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/36ec053a09a59d0b5dd0819c4ad35db220d7fc97"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102710.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "29c1d713c91b68b5a414f0f10e48ac4071c6e974",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/29c1d713c91b68b5a414f0f10e48ac4071c6e974"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102711.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f15c7ae014ee158b6d767ccd846474cdc2860ae5",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f15c7ae014ee158b6d767ccd846474cdc2860ae5"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102712.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0e499caa35ac449b04d895c4fbca1b1a8c926b06",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0e499caa35ac449b04d895c4fbca1b1a8c926b06"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102713.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d742fea86a8f82dcee4d0ed11b4df1dadfeab34d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d742fea86a8f82dcee4d0ed11b4df1dadfeab34d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102714.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a806da948147d232ca34b1e88337ca5db52f601e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a806da948147d232ca34b1e88337ca5db52f601e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102715.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7ede2f226f9af7ed75a7ef9be264e48c5cd0a2c7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7ede2f226f9af7ed75a7ef9be264e48c5cd0a2c7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102716.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9184f6c8e1417997954b67b3eb5cc444bf64cc56",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9184f6c8e1417997954b67b3eb5cc444bf64cc56"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102717.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ce107f81a3ea8bcccef77fea15ce310a02433823",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ce107f81a3ea8bcccef77fea15ce310a02433823"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102718.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7b7ee700bc3d01ecc61c3d607ba6ee538235dfe0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7b7ee700bc3d01ecc61c3d607ba6ee538235dfe0"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102719.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8d92b9ffd113f8616f79c5fe1b58c21ac8f2f424",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8d92b9ffd113f8616f79c5fe1b58c21ac8f2f424"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102720.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d95d78c1324d78950c61c3ee317d947376743a49",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d95d78c1324d78950c61c3ee317d947376743a49"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102721.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8c10d7867aed999feaa4859f26d420e41525a45e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8c10d7867aed999feaa4859f26d420e41525a45e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102722.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4453254ad232a78f9f76c389cac7afc4ca163235",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4453254ad232a78f9f76c389cac7afc4ca163235"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231027/2023102723.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "577643b86b700926dbea1527b8f9f58c15f861dc",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/577643b86b700926dbea1527b8f9f58c15f861dc"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "2ee0559cae3aefd83866e3c8735fe2c140850972",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/2ee0559cae3aefd83866e3c8735fe2c140850972"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102800.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "68b1e6d2f0799e635ca862b669aeb991326e5656",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/68b1e6d2f0799e635ca862b669aeb991326e5656"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102801.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5f5c04f3123a8636333343f4c658975578731e19",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5f5c04f3123a8636333343f4c658975578731e19"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102802.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5fd9ff87ef72db718ee972ed9f9ec82b43c7a11b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5fd9ff87ef72db718ee972ed9f9ec82b43c7a11b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102803.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "32f4fe05ffd21aad7226930205cf54e522154be4",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/32f4fe05ffd21aad7226930205cf54e522154be4"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102804.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7688708c754f43d0756d30cc7a25593edc726e1f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7688708c754f43d0756d30cc7a25593edc726e1f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102805.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1a9d3b21e3b9c1b112449d24f0985c3a20552182",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1a9d3b21e3b9c1b112449d24f0985c3a20552182"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102806.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8fa6fee50bbffa30b3ba1142900c874b88be2198",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8fa6fee50bbffa30b3ba1142900c874b88be2198"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102807.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "97d17b6afcf4fe58b281f2370ab7f897c9fffc1f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/97d17b6afcf4fe58b281f2370ab7f897c9fffc1f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102808.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "035504254e50d8074780a514855aa958fefc7327",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/035504254e50d8074780a514855aa958fefc7327"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102809.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "67b30a5b44a1645e4a906a8aa87ff7605cc30450",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/67b30a5b44a1645e4a906a8aa87ff7605cc30450"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102810.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9fdc592bfcedb78cf68eae8676f267498f70cb9c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9fdc592bfcedb78cf68eae8676f267498f70cb9c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102811.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ea324d566c8d1276eabf087e789d389a06a54629",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ea324d566c8d1276eabf087e789d389a06a54629"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102812.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c0bcf9de06ac85efd4a9db3af332f5722768abc2",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c0bcf9de06ac85efd4a9db3af332f5722768abc2"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102813.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "eae517fac91014f9cbb4ac6a72ebbd255f6a2d9b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/eae517fac91014f9cbb4ac6a72ebbd255f6a2d9b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102814.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a3bbc599f66b2cc09c5a41d09b705fea41781ce8",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a3bbc599f66b2cc09c5a41d09b705fea41781ce8"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102815.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bb15bb4d41803100acf9b0c9d1552596f62e6a8b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bb15bb4d41803100acf9b0c9d1552596f62e6a8b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102816.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3922e896527cca1ffc71b11b1e75a37004a99dcb",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3922e896527cca1ffc71b11b1e75a37004a99dcb"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102817.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "27029894ed431e733698bdec2a0bcb9e1dca68a2",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/27029894ed431e733698bdec2a0bcb9e1dca68a2"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102818.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "83faab094d68231eee116a81a362854cf84ca247",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/83faab094d68231eee116a81a362854cf84ca247"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102819.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1bd28869559fddba659094a463d9d4508394a0de",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1bd28869559fddba659094a463d9d4508394a0de"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102820.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c4bcbd5679f2a038b3048fab5bf5462cdacd2452",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c4bcbd5679f2a038b3048fab5bf5462cdacd2452"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102821.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d6cde6b0ba000cbe8a74753759bdf4a6e0b0f0f8",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d6cde6b0ba000cbe8a74753759bdf4a6e0b0f0f8"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102822.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "77270565a927f2bc0be7c5daaa852279edd42f42",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/77270565a927f2bc0be7c5daaa852279edd42f42"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231028/2023102823.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8702c70b29d00b68bf3a874707afb21e63d197fe",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8702c70b29d00b68bf3a874707afb21e63d197fe"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "c433151673222e1d2fe3ca4bfca29d6fb08da1da",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/c433151673222e1d2fe3ca4bfca29d6fb08da1da"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102900.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "725fc90dabce85b62b04251ccd4388fdf959956b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/725fc90dabce85b62b04251ccd4388fdf959956b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102901.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "982bd95cd1a1689e0d2f8838266b492e6249cdcb",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/982bd95cd1a1689e0d2f8838266b492e6249cdcb"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102902.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bf4819e65ce73d0e1a9a6982b9460828a1e1ab12",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bf4819e65ce73d0e1a9a6982b9460828a1e1ab12"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102903.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7062352f2363f0314c5a46066754336ee73ccf2d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7062352f2363f0314c5a46066754336ee73ccf2d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102904.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "39a1aa18767cb9a4f005c69533bd3678d2e9b7e6",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/39a1aa18767cb9a4f005c69533bd3678d2e9b7e6"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102905.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "50d0f858ab34cb69edc2e61b2f06119f9cf717f5",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/50d0f858ab34cb69edc2e61b2f06119f9cf717f5"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102906.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7c35a8db1b349f110182bd3a9d9c117e57d3dd7d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7c35a8db1b349f110182bd3a9d9c117e57d3dd7d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102907.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d8c2565684aea22d0727d0aa27d44897842e8dc9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d8c2565684aea22d0727d0aa27d44897842e8dc9"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102908.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f6f9fd7ef92d4d1d995f149e2acd6ecfde294ddf",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f6f9fd7ef92d4d1d995f149e2acd6ecfde294ddf"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102909.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6d80f31395dc0f52231655b9059aae379a24f315",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6d80f31395dc0f52231655b9059aae379a24f315"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102910.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cc26a8dcc7c85da051a98bcd96eaf9f3549452a6",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cc26a8dcc7c85da051a98bcd96eaf9f3549452a6"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102911.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0367ced4a23a4048405ef3b7c5f8b1a05163dd61",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0367ced4a23a4048405ef3b7c5f8b1a05163dd61"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102912.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "56d80707e0205c7e60eb73470af2398c291be7aa",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/56d80707e0205c7e60eb73470af2398c291be7aa"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102913.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "70fdb6feda82157e7a3c16a5c032b03ca52cfb8a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/70fdb6feda82157e7a3c16a5c032b03ca52cfb8a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102914.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4871056cfddc7a0e71668c19c0c57f1efcaea358",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4871056cfddc7a0e71668c19c0c57f1efcaea358"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102915.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cb885b67be83a13ae5eb9eefc552ceeb09ee915a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cb885b67be83a13ae5eb9eefc552ceeb09ee915a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102916.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9801dd600a1162c74ab0b82f4be6c4c79f18e951",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9801dd600a1162c74ab0b82f4be6c4c79f18e951"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102917.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bf76d5d065c36e2f8d630f2fc6f6696773241810",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bf76d5d065c36e2f8d630f2fc6f6696773241810"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102918.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7f156321595409c4b786dc8608d3aa995b8eb9ec",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7f156321595409c4b786dc8608d3aa995b8eb9ec"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102919.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "104c7ecf2334c61fc246f7d71aa0ccc98ac536f7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/104c7ecf2334c61fc246f7d71aa0ccc98ac536f7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102920.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b1e7d6ba998dec88c7b63d9e9ee9c6b77879fc20",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b1e7d6ba998dec88c7b63d9e9ee9c6b77879fc20"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102921.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "323119d9ef44c1cf12d2d986bae07d9aacb2be74",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/323119d9ef44c1cf12d2d986bae07d9aacb2be74"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102922.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ffea75402690d3c2408a8c76b4ab6ca735f96a37",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ffea75402690d3c2408a8c76b4ab6ca735f96a37"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231029/2023102923.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "13ea8cbb2654287fe1445a9e623001162a627e32",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/13ea8cbb2654287fe1445a9e623001162a627e32"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "daf8f25a5b6eb0611fb99897ed6da57e5cc9ec1f",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/daf8f25a5b6eb0611fb99897ed6da57e5cc9ec1f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103000.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "546af7ce92913f030d5d7efd0f1d2c55725bd086",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/546af7ce92913f030d5d7efd0f1d2c55725bd086"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103001.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e9b7ed5c2b19c751cbfc649c65e1663164fc48c6",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e9b7ed5c2b19c751cbfc649c65e1663164fc48c6"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103002.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "abe8f4aa385f1c21b39e632ae450b86744ed54f7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/abe8f4aa385f1c21b39e632ae450b86744ed54f7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103003.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "81f934bbaf8d62f675b0720414e2200ca605a813",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/81f934bbaf8d62f675b0720414e2200ca605a813"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103004.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f28082132d51e2756669cf69669cdaae9de16402",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f28082132d51e2756669cf69669cdaae9de16402"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103005.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "81b822ff2652a197cfb3658e8eb49259642eb943",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/81b822ff2652a197cfb3658e8eb49259642eb943"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103006.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "33278b6f6e4b241377787b9cd9f81ca6d757edb2",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/33278b6f6e4b241377787b9cd9f81ca6d757edb2"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103007.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "08058e19050c73555e9e2ea5395b4b443a44f052",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/08058e19050c73555e9e2ea5395b4b443a44f052"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103008.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9c348ffd27320745fd479f867d6255f6077fb021",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9c348ffd27320745fd479f867d6255f6077fb021"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103009.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "256068d100c26d050f6097e28a79abb2170bf48f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/256068d100c26d050f6097e28a79abb2170bf48f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103010.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5f7443b0fb70793e4b110068daed004c4e9a6a2a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5f7443b0fb70793e4b110068daed004c4e9a6a2a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103011.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2bfd17cf05ddbd6c5eebd4b92c427cb93fc3cf98",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2bfd17cf05ddbd6c5eebd4b92c427cb93fc3cf98"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103012.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "584ff925ffcdf254eb9a5e61957230e598c604ef",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/584ff925ffcdf254eb9a5e61957230e598c604ef"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103013.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e98dc5f67bad4db6c54b88562e8f001c5925fd4b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e98dc5f67bad4db6c54b88562e8f001c5925fd4b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103014.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d2ffc29e5f2c1b24540d14f61e7a4089e6999c4c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d2ffc29e5f2c1b24540d14f61e7a4089e6999c4c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103015.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d65d34a7c0844148f54595fbcae671cfb783cd4c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d65d34a7c0844148f54595fbcae671cfb783cd4c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103016.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "32915d0e4110af3d149081e4a773ebd84ec2f9c7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/32915d0e4110af3d149081e4a773ebd84ec2f9c7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103017.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e96ca5ea3185b8685fdb3eb394f997772427e30b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e96ca5ea3185b8685fdb3eb394f997772427e30b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103018.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3948c8e90632ff7025814b8ef1df24e0b2a5af87",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3948c8e90632ff7025814b8ef1df24e0b2a5af87"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103019.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fd8935c710be763b371e90b4dc206aa1dba3a39b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fd8935c710be763b371e90b4dc206aa1dba3a39b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103020.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5ded1c1132670a3d0db1cea139bfb7b6cc59b3e4",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5ded1c1132670a3d0db1cea139bfb7b6cc59b3e4"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103021.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc7b84d7612d7603dfc436ee7a9a87bb788fff2d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc7b84d7612d7603dfc436ee7a9a87bb788fff2d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103022.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c7366f888930b5312272510a5fdf3430114abc7e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c7366f888930b5312272510a5fdf3430114abc7e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231030/2023103023.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0b20097a7749765ce28f9e9d3c9db11be2388113",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0b20097a7749765ce28f9e9d3c9db11be2388113"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "1c1f071caaba3843b7511ea06147031b3553ce3c",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/1c1f071caaba3843b7511ea06147031b3553ce3c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103100.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7c8812d07db06aec09474374712e5b0244a89e73",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7c8812d07db06aec09474374712e5b0244a89e73"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103101.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2cfd0da998be34a76e15eccd5a6c9785e3f8fce7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2cfd0da998be34a76e15eccd5a6c9785e3f8fce7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103102.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "16016430d33366f525445c3617341126ca27cc8f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/16016430d33366f525445c3617341126ca27cc8f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103103.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "15d86c0edf82c85f82fe612fc031c6403aaadf6e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/15d86c0edf82c85f82fe612fc031c6403aaadf6e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103104.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fa2088a327dfd2eab25f79a8268c4470714bf702",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fa2088a327dfd2eab25f79a8268c4470714bf702"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103105.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "acae35e11e4a293f80a45972ea40fd3f4ab54a5d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/acae35e11e4a293f80a45972ea40fd3f4ab54a5d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103106.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7eac3af88a8da00dbdfe8d33255476d44121acd7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7eac3af88a8da00dbdfe8d33255476d44121acd7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103107.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "06921a006b72d95fc57a9c4aa812c990e3ac6dd0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/06921a006b72d95fc57a9c4aa812c990e3ac6dd0"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103108.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b3f89b1317a858cd86150dd4e165415835cd8804",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b3f89b1317a858cd86150dd4e165415835cd8804"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103109.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "aa8a2b5248bdf2c888cc04b8b2e5f3ecaf82d595",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/aa8a2b5248bdf2c888cc04b8b2e5f3ecaf82d595"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103110.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2f415453f52a52edf4bd9ed97e0bf211f31ffa1e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2f415453f52a52edf4bd9ed97e0bf211f31ffa1e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103111.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "41abe3b855f61a5d18d1390cfe318de048a47aa6",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/41abe3b855f61a5d18d1390cfe318de048a47aa6"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103112.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5cca9398660473b2fbf1c90221ac35ec7ab22458",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5cca9398660473b2fbf1c90221ac35ec7ab22458"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103113.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d9994fb94300b744d82da0bee3c14d19e4215e1e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d9994fb94300b744d82da0bee3c14d19e4215e1e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103114.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1ca79cd8b56456ade708bcd25a0d5425689db47f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1ca79cd8b56456ade708bcd25a0d5425689db47f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103115.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8435bc8898a433035f8a70e85226fdb254a65901",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8435bc8898a433035f8a70e85226fdb254a65901"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103116.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "de7e6d001c68a4e006aa86a84314d6f4d3f91a5e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/de7e6d001c68a4e006aa86a84314d6f4d3f91a5e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103117.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "003f34b4925b4daecb3002e6eaac13918e6aaeaf",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/003f34b4925b4daecb3002e6eaac13918e6aaeaf"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103118.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f7871abc6bb8cfcbc425238bff1718f392ad8e7d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f7871abc6bb8cfcbc425238bff1718f392ad8e7d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103119.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f67d2d71253d0f9e094d859b07ad3c81aa8a1926",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f67d2d71253d0f9e094d859b07ad3c81aa8a1926"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103120.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1645531a74025a6769253062d16eca9d4e79a379",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1645531a74025a6769253062d16eca9d4e79a379"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103121.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "81ac95941ccf38fb051418686ef2f8f945c4b776",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/81ac95941ccf38fb051418686ef2f8f945c4b776"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103122.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "73ff15aca65126c1a7cb6158f08f20b8b01dfc45",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/73ff15aca65126c1a7cb6158f08f20b8b01dfc45"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231031/2023103123.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6ea4acd6eb334e2a6c48f575c1d654e895259544",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6ea4acd6eb334e2a6c48f575c1d654e895259544"
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
                    "sha": "80652ec74ee33c9211f7912df4fb52bb90f3059c",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/80652ec74ee33c9211f7912df4fb52bb90f3059c"
                },
                {
                    "path": "shared/estimate/pq/2023",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "2f5b85b04e6d69a9590bffc93abb0dff8fa5f3da",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/2f5b85b04e6d69a9590bffc93abb0dff8fa5f3da"
                },
                {
                    "path": "shared/estimate/pq/2023/20231027.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6ef001b8c15632b9dc84d1f841ecbd3c1e07f696",
                    "size": 26646485,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6ef001b8c15632b9dc84d1f841ecbd3c1e07f696"
                },
                {
                    "path": "shared/estimate/pq/2023/20231028.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc6c9d0b77a13b7f5a7b44da6d0e2f53520a1b67",
                    "size": 26579834,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc6c9d0b77a13b7f5a7b44da6d0e2f53520a1b67"
                },
                {
                    "path": "shared/estimate/pq/2023/20231029.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c10d652473653a4d528ab28cdaf8b6ac6fcd34af",
                    "size": 26717282,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c10d652473653a4d528ab28cdaf8b6ac6fcd34af"
                },
                {
                    "path": "shared/estimate/pq/2023/20231030.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4183af644fd3a3a9537b77ad41212e799f85e7ab",
                    "size": 26701610,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4183af644fd3a3a9537b77ad41212e799f85e7ab"
                },
                {
                    "path": "shared/estimate/pq/2023/20231031.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ec94fdfabb0e8e45812cc56cb56e055bc4ec984b",
                    "size": 26585851,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ec94fdfabb0e8e45812cc56cb56e055bc4ec984b"
                },
                {
                    "path": "shared/estimate/stat",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "9da65370dbd2a726e0bfb29be4a0f339c5886ca1",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/9da65370dbd2a726e0bfb29be4a0f339c5886ca1"
                },
                {
                    "path": "shared/estimate/stat/2023",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "6bb3db38a07ebf859d88cdd3224a2e1be884c817",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/6bb3db38a07ebf859d88cdd3224a2e1be884c817"
                },
                {
                    "path": "shared/estimate/stat/2023/20231027",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "30092d67f3484408fd3ec27de415537477ff1831",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/30092d67f3484408fd3ec27de415537477ff1831"
                },
                {
                    "path": "shared/estimate/stat/2023/20231027/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "664e565e0f7d8d171cbfaf75663aba841e2d5313",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/664e565e0f7d8d171cbfaf75663aba841e2d5313"
                },
                {
                    "path": "shared/estimate/stat/2023/20231027/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6b2cf561f629fa050b98ff38b44e09446fcf3054",
                    "size": 185144,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6b2cf561f629fa050b98ff38b44e09446fcf3054"
                },
                {
                    "path": "shared/estimate/stat/2023/20231028",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "bd8fc2314288757eed0fa9b42035a10f1e4c2c20",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/bd8fc2314288757eed0fa9b42035a10f1e4c2c20"
                },
                {
                    "path": "shared/estimate/stat/2023/20231028/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4adf4eb18a5eb586fdcb3dec39456bc151b48f8c",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4adf4eb18a5eb586fdcb3dec39456bc151b48f8c"
                },
                {
                    "path": "shared/estimate/stat/2023/20231028/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "845a8ecc121f1a2d19df002f0f2027fda8f7257c",
                    "size": 183548,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/845a8ecc121f1a2d19df002f0f2027fda8f7257c"
                },
                {
                    "path": "shared/estimate/stat/2023/20231029",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "24568d4e923c24fad71ba70f098abeaefa8e94a7",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/24568d4e923c24fad71ba70f098abeaefa8e94a7"
                },
                {
                    "path": "shared/estimate/stat/2023/20231029/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a30a1c2aacff9d070c054e7b7a9189e9726a274b",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a30a1c2aacff9d070c054e7b7a9189e9726a274b"
                },
                {
                    "path": "shared/estimate/stat/2023/20231029/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "35f184f5b07ad75b53a0214cf60c6c33e6224c8f",
                    "size": 182121,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/35f184f5b07ad75b53a0214cf60c6c33e6224c8f"
                },
                {
                    "path": "shared/estimate/stat/2023/20231030",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "e9d7bc5339e96f0a6c2ec0cfed6b95458d6d4ff8",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/e9d7bc5339e96f0a6c2ec0cfed6b95458d6d4ff8"
                },
                {
                    "path": "shared/estimate/stat/2023/20231030/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "093192b456aa7656083cc6f21ff6784706bc94f4",
                    "size": 1537,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/093192b456aa7656083cc6f21ff6784706bc94f4"
                },
                {
                    "path": "shared/estimate/stat/2023/20231030/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d70b9fec05bad6ca5af41c3c2252a206d7c85ac9",
                    "size": 178610,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d70b9fec05bad6ca5af41c3c2252a206d7c85ac9"
                },
                {
                    "path": "shared/estimate/stat/2023/20231031",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "755c7a7c6fdaab8fa79ce28697a60f18d100a200",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/755c7a7c6fdaab8fa79ce28697a60f18d100a200"
                },
                {
                    "path": "shared/estimate/stat/2023/20231031/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ed3c05c225d2b618ef604e24943a88be40d8dd41",
                    "size": 1383,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ed3c05c225d2b618ef604e24943a88be40d8dd41"
                },
                {
                    "path": "shared/estimate/stat/2023/20231031/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a81c9ab97a5844b22a514cfce2505bff0e6e3969",
                    "size": 121771,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a81c9ab97a5844b22a514cfce2505bff0e6e3969"
                },
                {
                    "path": "shared/estimate/surface_no2_record.json",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8faf3cafb9a60322fb705c0ddd7cd5b6790b60d6",
                    "size": 1106,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8faf3cafb9a60322fb705c0ddd7cd5b6790b60d6"
                },
                {
                    "path": "shared/reconstruct",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "c7906e6dfb9a1afa9c49241345ea756b4dc85226",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/c7906e6dfb9a1afa9c49241345ea756b4dc85226"
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
                    "sha": "b1e90019f6725715c3b7ba6d489f9ecc20da87c2",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/b1e90019f6725715c3b7ba6d489f9ecc20da87c2"
                },
                {
                    "path": "shared/reconstruct/pq/2023",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "e3f92f5f2cc4261023e44d84843a260113e770d5",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/e3f92f5f2cc4261023e44d84843a260113e770d5"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231027.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a2c426a6bbd2bb17f7671e8e90cffc8413c530c6",
                    "size": 21888442,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a2c426a6bbd2bb17f7671e8e90cffc8413c530c6"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231028.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "567028970af966eeb66fd6a76c20a50fe3aed30f",
                    "size": 22427082,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/567028970af966eeb66fd6a76c20a50fe3aed30f"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231029.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0f85928090b16d4186be02e292439f4e291a056c",
                    "size": 22273796,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0f85928090b16d4186be02e292439f4e291a056c"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231030.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "829ddd4894c0b365110f140c3c852dd36e7ed7a6",
                    "size": 22285362,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/829ddd4894c0b365110f140c3c852dd36e7ed7a6"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231031.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cea12f5f644674a791f4a29f8b17b0342e4e2fd8",
                    "size": 22210381,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cea12f5f644674a791f4a29f8b17b0342e4e2fd8"
                },
                {
                    "path": "task",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "665616b6aa676ad043b0eac43d079b3e96bccb20",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/665616b6aa676ad043b0eac43d079b3e96bccb20"
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
                    "sha": "d2cf50961e4a956834272c3213680a52d429ede2",
                    "size": 425,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d2cf50961e4a956834272c3213680a52d429ede2"
                },
                {
                    "path": "task/download_geoscf.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9c88537aa06d602d16334cbf3939038d3d2b5f45",
                    "size": 434,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9c88537aa06d602d16334cbf3939038d3d2b5f45"
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
                    "sha": "ce102d78552002b1fb42a7e919613e9e7140eb72",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/ce102d78552002b1fb42a7e919613e9e7140eb72"
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
                    "sha": "fa761944fdadeb4e1700c71d913a23ffff562fbc",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/fa761944fdadeb4e1700c71d913a23ffff562fbc"
                },
                {
                    "path": "task/src/modules/downloader",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "54a1f5984ac29421a2f2c56ce9b59674493e3e38",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/54a1f5984ac29421a2f2c56ce9b59674493e3e38"
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
                    "sha": "2580376aff57cb09cf78ec14f24d7fd06c880abe",
                    "size": 5213,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2580376aff57cb09cf78ec14f24d7fd06c880abe"
                },
                {
                    "path": "task/src/modules/downloader/era5.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7aefb221b677cd0a77b15e4ff2ee0cebcb1ee403",
                    "size": 6692,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7aefb221b677cd0a77b15e4ff2ee0cebcb1ee403"
                },
                {
                    "path": "task/src/modules/downloader/gems.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cff4bb61a7ce25c7e790fdfdc9b3023e9345ec1f",
                    "size": 9500,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cff4bb61a7ce25c7e790fdfdc9b3023e9345ec1f"
                },
                {
                    "path": "task/src/modules/downloader/geoscf.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d624db3125134d6e6a1f32be936ad9b622829782",
                    "size": 4577,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d624db3125134d6e6a1f32be936ad9b622829782"
                },
                {
                    "path": "task/src/modules/estimator",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "c0d22d523c2c5b6790c068eb13e789a4258e5f49",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/c0d22d523c2c5b6790c068eb13e789a4258e5f49"
                },
                {
                    "path": "task/src/modules/estimator/main.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "241b6211e106a218714c01fa8a046a9159342f15",
                    "size": 7239,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/241b6211e106a218714c01fa8a046a9159342f15"
                },
                {
                    "path": "task/src/modules/issuehandler",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "8c1f87a3672d1763cd38011123419df28cdadf98",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/8c1f87a3672d1763cd38011123419df28cdadf98"
                },
                {
                    "path": "task/src/modules/issuehandler/main.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8c7d17d14c8be6a3868198a79523f3dd57bad91a",
                    "size": 10348,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8c7d17d14c8be6a3868198a79523f3dd57bad91a"
                },
                {
                    "path": "task/src/modules/reconstructor",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "cc23dd305b36cc5d3721db00ffa951a9914833a9",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/cc23dd305b36cc5d3721db00ffa951a9914833a9"
                },
                {
                    "path": "task/src/modules/reconstructor/main.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7b75b656a5054da4c8d84f242daad9a413fd9d38",
                    "size": 7040,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7b75b656a5054da4c8d84f242daad9a413fd9d38"
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
                    "sha": "401b2a5ae586057b74b7cda9d6921c33ce65689e",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/401b2a5ae586057b74b7cda9d6921c33ce65689e"
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
                    "sha": "ff603ab140265bf77249d37802985b8a7d9e2fbf",
                    "size": 18772,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ff603ab140265bf77249d37802985b8a7d9e2fbf"
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