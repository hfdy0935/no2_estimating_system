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
            "sha": "f72307096501fc820d86e006678c6a70e2577f55",
            "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/f72307096501fc820d86e006678c6a70e2577f55",
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
                    "sha": "d203cf4f256d10a60a042bfbfbf5da8306111a5a",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/d203cf4f256d10a60a042bfbfbf5da8306111a5a"
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
                    "sha": "5e35972f5bb89eaf4fc79c1c4fd8fd4721910550",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/5e35972f5bb89eaf4fc79c1c4fd8fd4721910550"
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
                    "sha": "032040431ad2b6ce90230f157ae362af01374ceb",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/032040431ad2b6ce90230f157ae362af01374ceb"
                },
                {
                    "path": "pages/src/api/data.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7cfad849e920a27c933d121594e1e8485c101f71",
                    "size": 296861,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7cfad849e920a27c933d121594e1e8485c101f71"
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
                    "sha": "b92ea135efbee789618d4045192c2b3bf02beca9",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/b92ea135efbee789618d4045192c2b3bf02beca9"
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
                    "sha": "c69944353120ee5bf61d06dc6ed55a121978e8a0",
                    "size": 1451,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c69944353120ee5bf61d06dc6ed55a121978e8a0"
                },
                {
                    "path": "pages/src/layout/right-map",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "50bd0280391f3cdaa62430af9f1b172f76e8d395",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/50bd0280391f3cdaa62430af9f1b172f76e8d395"
                },
                {
                    "path": "pages/src/layout/right-map/index.vue",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2e9c1dbed9677886923236443cb87be29251f20a",
                    "size": 3725,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2e9c1dbed9677886923236443cb87be29251f20a"
                },
                {
                    "path": "pages/src/layout/right-map/map-tools",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "107ff252200872da1b1850514a5ff559b115ef91",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/107ff252200872da1b1850514a5ff559b115ef91"
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
                    "sha": "0bcf6a8607cf4d2c6774cbcba98130a7a75af19d",
                    "size": 5350,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0bcf6a8607cf4d2c6774cbcba98130a7a75af19d"
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
                    "sha": "f9dadb39901b1057fde49cf0e95589da0f20e93d",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/f9dadb39901b1057fde49cf0e95589da0f20e93d"
                },
                {
                    "path": "pages/src/stores/map.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0e26f90306927b4b9b666e4c8dbe1620f28d4779",
                    "size": 609,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0e26f90306927b4b9b666e4c8dbe1620f28d4779"
                },
                {
                    "path": "pages/src/stores/menu.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6a583646292376d74b02e79695d536b45df644c3",
                    "size": 905,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6a583646292376d74b02e79695d536b45df644c3"
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
                    "sha": "44a187cc6e0b29c6a3d4cbd2079150eab5d64b81",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/44a187cc6e0b29c6a3d4cbd2079150eab5d64b81"
                },
                {
                    "path": "pages/src/types/index.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1746432cbbe4db5021b113af7364124e8e28ad85",
                    "size": 377,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1746432cbbe4db5021b113af7364124e8e28ad85"
                },
                {
                    "path": "pages/src/utils",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "daebe58f16cbe899c4c62c682c203b6e22561c8e",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/daebe58f16cbe899c4c62c682c203b6e22561c8e"
                },
                {
                    "path": "pages/src/utils/index.ts",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "805a350017c781cd17c1634d5f58484ba0e40be5",
                    "size": 3425,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/805a350017c781cd17c1634d5f58484ba0e40be5"
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
                    "sha": "8514014e470a10af6b22914d5f8825fab93517b4",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/8514014e470a10af6b22914d5f8825fab93517b4"
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
                    "sha": "6075a09debce668388cb0421b7c0032628b9d2a9",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/6075a09debce668388cb0421b7c0032628b9d2a9"
                },
                {
                    "path": "shared/data_source/cnemc",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "34f6925a0a74cc8416b996f416ad42e58a2f937e",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/34f6925a0a74cc8416b996f416ad42e58a2f937e"
                },
                {
                    "path": "shared/data_source/cnemc/2023",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "cd3a22c0a698a730cf511554e4c2b89f31231f00",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/cd3a22c0a698a730cf511554e4c2b89f31231f00"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231001.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e1449494169a971202e88227c552b2b6768cca1c",
                    "size": 768247,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e1449494169a971202e88227c552b2b6768cca1c"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231002.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bcec1fea43c800aecc25268a945eeef576101f0e",
                    "size": 764025,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bcec1fea43c800aecc25268a945eeef576101f0e"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231003.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0c93f80febbe34ecf72c0f5144b2545711ad2842",
                    "size": 763111,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0c93f80febbe34ecf72c0f5144b2545711ad2842"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231004.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2e753835624651a74c69a5eb15e9f16de5567c8e",
                    "size": 765033,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2e753835624651a74c69a5eb15e9f16de5567c8e"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231005.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0537b7cce3bc30fc9b543af3223305a4b0b5934d",
                    "size": 763286,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0537b7cce3bc30fc9b543af3223305a4b0b5934d"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231006.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "da59a161ac80755e3fbc497191ce8da59c7550ee",
                    "size": 770681,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/da59a161ac80755e3fbc497191ce8da59c7550ee"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231007.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2467b0be011ff0b95e721579bbdc4a25cdee2990",
                    "size": 770414,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2467b0be011ff0b95e721579bbdc4a25cdee2990"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231008.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "69c05cf70d170f31e0a507c05dc60a3b2bbf6bf7",
                    "size": 771895,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/69c05cf70d170f31e0a507c05dc60a3b2bbf6bf7"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231009.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bb1291b0af39f9bb55b1d3db6d3bfe504102f969",
                    "size": 731483,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bb1291b0af39f9bb55b1d3db6d3bfe504102f969"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231010.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8ffa5a523f02771dd1326489e5a787aefaf39044",
                    "size": 764570,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8ffa5a523f02771dd1326489e5a787aefaf39044"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231011.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "288f866a765d57b5dec1c6a965cf52352fd03d05",
                    "size": 774003,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/288f866a765d57b5dec1c6a965cf52352fd03d05"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231012.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "47ff01616ea3f4e98f6af3d61bab54c16230a9e6",
                    "size": 773966,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/47ff01616ea3f4e98f6af3d61bab54c16230a9e6"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231013.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e9b5508012e695f983e6a4ca58654949ff1bcfb1",
                    "size": 774211,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e9b5508012e695f983e6a4ca58654949ff1bcfb1"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231014.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b3629e3985fda427cb39c8ed47e47deb5c46cb43",
                    "size": 777907,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b3629e3985fda427cb39c8ed47e47deb5c46cb43"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231015.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "621404f91b7c8d53b0b9d0da5c661390810fcec8",
                    "size": 767771,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/621404f91b7c8d53b0b9d0da5c661390810fcec8"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231016.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3a5acbbdb67828e976ee5f2a1cc505def16e2cb3",
                    "size": 778883,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3a5acbbdb67828e976ee5f2a1cc505def16e2cb3"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231017.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a9b9a32f838ae7f452e49ae6ceeacf2952d70c1c",
                    "size": 775402,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a9b9a32f838ae7f452e49ae6ceeacf2952d70c1c"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231018.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5153b5d91d727a69a246fab76e04f9801da37e94",
                    "size": 771806,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5153b5d91d727a69a246fab76e04f9801da37e94"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231019.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e1f82ce6b4ff3400401bbd1b754cfdc18022842e",
                    "size": 771668,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e1f82ce6b4ff3400401bbd1b754cfdc18022842e"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231020.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "82b7cc4f761a0451cef2d191b2044d2041e7b796",
                    "size": 767370,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/82b7cc4f761a0451cef2d191b2044d2041e7b796"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231021.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc692fd013e3641a249d3d2b4d5a14c7458556b2",
                    "size": 781078,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc692fd013e3641a249d3d2b4d5a14c7458556b2"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231022.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "52ea50c993b11d2b66b95ffbb2825b7c6a9fd181",
                    "size": 780846,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/52ea50c993b11d2b66b95ffbb2825b7c6a9fd181"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231023.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "50bd8d24554a351468259df28463d93301ac4f86",
                    "size": 767709,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/50bd8d24554a351468259df28463d93301ac4f86"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231024.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "296900a58fe141df6a4a3b7d098543b337f2ce02",
                    "size": 780585,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/296900a58fe141df6a4a3b7d098543b337f2ce02"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231025.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ba0824fc7a0bfabbf9c368b87d5226fbbebdc973",
                    "size": 790004,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ba0824fc7a0bfabbf9c368b87d5226fbbebdc973"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231026.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "78596af93f7e773c59bcf0d23e94354ababa51d7",
                    "size": 766143,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/78596af93f7e773c59bcf0d23e94354ababa51d7"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231027.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a6c97a249b62367943ccaf41df9925f31d61150d",
                    "size": 778365,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a6c97a249b62367943ccaf41df9925f31d61150d"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231028.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "18e7b301f017f722136f484853324b7a8ad7150a",
                    "size": 782359,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/18e7b301f017f722136f484853324b7a8ad7150a"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231029.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1fac188cac98a34e82643e83f9cdc7f00cc1f724",
                    "size": 779724,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1fac188cac98a34e82643e83f9cdc7f00cc1f724"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231030.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "01851b2751b2bc66a0032023ac64f8de85242744",
                    "size": 736430,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/01851b2751b2bc66a0032023ac64f8de85242744"
                },
                {
                    "path": "shared/data_source/cnemc/2023/20231031.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f1026ecd33bb7c22f57f9b7bc950fc78972871be",
                    "size": 746740,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f1026ecd33bb7c22f57f9b7bc950fc78972871be"
                },
                {
                    "path": "shared/data_source/cnemc/2025",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "85b37b896f59066d4ea9a7ea4f01c3cd21aae75d",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/85b37b896f59066d4ea9a7ea4f01c3cd21aae75d"
                },
                {
                    "path": "shared/data_source/cnemc/2025/20251229.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9a7a701f5af2d379b52a7d70e3e0e5716e58b013",
                    "size": 880701,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9a7a701f5af2d379b52a7d70e3e0e5716e58b013"
                },
                {
                    "path": "shared/data_source/cnemc/2025/20251230.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c1067107d2d2e994298c83c0c74852f8d67d35df",
                    "size": 981811,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c1067107d2d2e994298c83c0c74852f8d67d35df"
                },
                {
                    "path": "shared/data_source/cnemc/2025/20251231.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "047863ada31efc6b2934fc7edfa564d8a06dbc99",
                    "size": 672452,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/047863ada31efc6b2934fc7edfa564d8a06dbc99"
                },
                {
                    "path": "shared/data_source/cnemc/2026",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "d3250d9c33fe59b624808a4269ee3b3e3e83fbfb",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/d3250d9c33fe59b624808a4269ee3b3e3e83fbfb"
                },
                {
                    "path": "shared/data_source/cnemc/2026/20260101.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b075ee710db69fa220f2180dec41583563f62ac1",
                    "size": 283414,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b075ee710db69fa220f2180dec41583563f62ac1"
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
                    "sha": "544343bded1fe5aa315a1c4033ae58493827c081",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/544343bded1fe5aa315a1c4033ae58493827c081"
                },
                {
                    "path": "shared/data_source/era5/2023",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "4f3593a6645ab4e4b4685cdf487f6c88200260b9",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/4f3593a6645ab4e4b4685cdf487f6c88200260b9"
                },
                {
                    "path": "shared/data_source/era5/2023/part1",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "57ed5618e8007ed5e514555534484d7faf845ada",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/57ed5618e8007ed5e514555534484d7faf845ada"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231001.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3d538362270b43a5cc8cad76faf31c9a022cee54",
                    "size": 31692134,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3d538362270b43a5cc8cad76faf31c9a022cee54"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231002.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "475420b53838ec7391a1da0dc225f6118137d2bd",
                    "size": 31645875,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/475420b53838ec7391a1da0dc225f6118137d2bd"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231003.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4fb77ef5ad35bbca5765943c5fe00df52aebd061",
                    "size": 31718549,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4fb77ef5ad35bbca5765943c5fe00df52aebd061"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231004.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ee60656af1a9fa8113475083f5b54976300e6a78",
                    "size": 31890266,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ee60656af1a9fa8113475083f5b54976300e6a78"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231005.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "08b918e81ad0716219fd7873a8ffdd3a1d51f301",
                    "size": 31842404,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/08b918e81ad0716219fd7873a8ffdd3a1d51f301"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231006.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c8685c96aff961562166a7d5f943aeca0de9025a",
                    "size": 31741987,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c8685c96aff961562166a7d5f943aeca0de9025a"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231007.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5feac0701ce32f6dd0d9bdaffeca75f48b33cdcf",
                    "size": 31713537,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5feac0701ce32f6dd0d9bdaffeca75f48b33cdcf"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231008.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "abbb9bf36a369b9ac665db41f2263a48dcbd63d8",
                    "size": 31486620,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/abbb9bf36a369b9ac665db41f2263a48dcbd63d8"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231009.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a812d6aa85d0e44bb2345c11cb3c93e982ab6994",
                    "size": 31483151,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a812d6aa85d0e44bb2345c11cb3c93e982ab6994"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231010.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0ab9537aca25aa157bb02fc02f53fec8684f5acd",
                    "size": 31714585,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0ab9537aca25aa157bb02fc02f53fec8684f5acd"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231011.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0704925b5d832f49f262797007ffedef73de49a8",
                    "size": 31480874,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0704925b5d832f49f262797007ffedef73de49a8"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231012.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "65b9457c49f9638f07c42b911a95724ed4ac5a6e",
                    "size": 31193330,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/65b9457c49f9638f07c42b911a95724ed4ac5a6e"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231013.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "335dd0b83036aab3620198ef0d3921881ded55d3",
                    "size": 31308545,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/335dd0b83036aab3620198ef0d3921881ded55d3"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231014.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0262361703526ca5c4855d781e29de4903a42992",
                    "size": 31640761,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0262361703526ca5c4855d781e29de4903a42992"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231015.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a4d1d8fdecfe2a889d6f8dfaeb5836f0123ab629",
                    "size": 31742144,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a4d1d8fdecfe2a889d6f8dfaeb5836f0123ab629"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231016.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f72c5451975dfa57992e39b88f3562d89ba61da2",
                    "size": 31932024,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f72c5451975dfa57992e39b88f3562d89ba61da2"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231017.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "58ddc53374948cfb9dea32314fee8903ade2ac82",
                    "size": 32039902,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/58ddc53374948cfb9dea32314fee8903ade2ac82"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231018.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9b4a68363cc5880b2cec179ec0aeff5e8b1736b1",
                    "size": 31731731,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9b4a68363cc5880b2cec179ec0aeff5e8b1736b1"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231019.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1e00b45a67aa07ddc548d86f50fe9642843c4e0f",
                    "size": 31568060,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1e00b45a67aa07ddc548d86f50fe9642843c4e0f"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231020.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0f4384bcd7e5a52bbd31ec2afd023958729b5688",
                    "size": 31552032,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0f4384bcd7e5a52bbd31ec2afd023958729b5688"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231021.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "69814f9808ab157d4f70502bee2c5ef5db5792f6",
                    "size": 31428759,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/69814f9808ab157d4f70502bee2c5ef5db5792f6"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231022.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ece664778998acb0e07e611a8cb78ce8ec52657b",
                    "size": 31459527,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ece664778998acb0e07e611a8cb78ce8ec52657b"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231023.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5b30930c0426184e07502df1d31d93d4d6b47bee",
                    "size": 31648902,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5b30930c0426184e07502df1d31d93d4d6b47bee"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231024.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c42e30e31babe9638589e174209c0ed5034b25e2",
                    "size": 31567557,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c42e30e31babe9638589e174209c0ed5034b25e2"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231025.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8383188fdc3cfd2d1afdd48588873199d402ba76",
                    "size": 31532551,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8383188fdc3cfd2d1afdd48588873199d402ba76"
                },
                {
                    "path": "shared/data_source/era5/2023/part1/20231026.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "96a3da01318432d760fe42fbcd213594ef48d084",
                    "size": 31358310,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/96a3da01318432d760fe42fbcd213594ef48d084"
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
                    "sha": "0cbb5d3f0efe488981e68dcc4e07f5ada54fa608",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/0cbb5d3f0efe488981e68dcc4e07f5ada54fa608"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231001.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "158be77963b015efee9cbd16e7a459de1f84759f",
                    "size": 36730643,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/158be77963b015efee9cbd16e7a459de1f84759f"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231002.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "db0940833967e16d08d3ef7c3ff9b1388c7b94ad",
                    "size": 36633767,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/db0940833967e16d08d3ef7c3ff9b1388c7b94ad"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231003.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "68a98c411851bc43624def1071669d07dbd701b9",
                    "size": 36473118,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/68a98c411851bc43624def1071669d07dbd701b9"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231004.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6ea072c7a84b84ed06f0fd5d1bb8f854ce985d91",
                    "size": 36553795,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6ea072c7a84b84ed06f0fd5d1bb8f854ce985d91"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231005.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1341cb74ee626619c52be72cad844839a6b857ea",
                    "size": 36726417,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1341cb74ee626619c52be72cad844839a6b857ea"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231006.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "153202ed80f711c813a9c0dc8b31fcd9272b351e",
                    "size": 36895851,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/153202ed80f711c813a9c0dc8b31fcd9272b351e"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231007.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "74ecf7d9d05350e9ae4234a7cb4800cb9a325112",
                    "size": 36884001,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/74ecf7d9d05350e9ae4234a7cb4800cb9a325112"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231008.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "28f744d5c8ad3b549d121c321cdd2b065b2cbc33",
                    "size": 36866202,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/28f744d5c8ad3b549d121c321cdd2b065b2cbc33"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231009.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "df86c60ad9c22181d447d255c7a3b8e2dbc8c006",
                    "size": 36882944,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/df86c60ad9c22181d447d255c7a3b8e2dbc8c006"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231010.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "46f03366cd28e7c704e728521d37c040090fdd1e",
                    "size": 36779377,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/46f03366cd28e7c704e728521d37c040090fdd1e"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231011.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9a98312b8dcf52e7a2a603341c3fede38003a062",
                    "size": 36804635,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9a98312b8dcf52e7a2a603341c3fede38003a062"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231012.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "05dc8b7c33656054a659b249449813aca02f75c6",
                    "size": 37099852,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/05dc8b7c33656054a659b249449813aca02f75c6"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231013.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f06a7fa9e9074bdf94a1996b2b8c059c9570df18",
                    "size": 37222262,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f06a7fa9e9074bdf94a1996b2b8c059c9570df18"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231014.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "57a362d15d79721222641fcf05f8966486d8c568",
                    "size": 37428833,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/57a362d15d79721222641fcf05f8966486d8c568"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231015.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7ffde957433fada86c5806cf75946fd872ab5937",
                    "size": 37421577,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7ffde957433fada86c5806cf75946fd872ab5937"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231016.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ef52b85e939e311b2bc4f21e09ea6220fc011790",
                    "size": 37291885,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ef52b85e939e311b2bc4f21e09ea6220fc011790"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231017.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4354190725f7fe5005632334aaa16a31837520af",
                    "size": 37553401,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4354190725f7fe5005632334aaa16a31837520af"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231018.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e77fab8eb0d5807c8c984d6b9ea3faea6fb97299",
                    "size": 37586319,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e77fab8eb0d5807c8c984d6b9ea3faea6fb97299"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231019.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "febcb2b7fca59fbf19052fc428960f3eb2e89ef9",
                    "size": 37366950,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/febcb2b7fca59fbf19052fc428960f3eb2e89ef9"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231020.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "147cf8b450feceb52ac2906b0726c54c82b04d91",
                    "size": 37397090,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/147cf8b450feceb52ac2906b0726c54c82b04d91"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231021.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fefbc798ed17dc51e8ac77271e0c55c0cc3ef346",
                    "size": 37350913,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fefbc798ed17dc51e8ac77271e0c55c0cc3ef346"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231022.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c15b4104e6a87d85cdbe16a1508ee7f2ac0d5994",
                    "size": 37229149,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c15b4104e6a87d85cdbe16a1508ee7f2ac0d5994"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231023.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e9cce675349336be2b7b3089c99823228119ae26",
                    "size": 37380465,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e9cce675349336be2b7b3089c99823228119ae26"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231024.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5f66e8ba92950f7cc817614e0e4da2c1cc1ddc2d",
                    "size": 37524930,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5f66e8ba92950f7cc817614e0e4da2c1cc1ddc2d"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231025.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fb3ae29d05e16b55f9124b60f29e4f5d14d90e41",
                    "size": 37582822,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fb3ae29d05e16b55f9124b60f29e4f5d14d90e41"
                },
                {
                    "path": "shared/data_source/era5/2023/part2/20231026.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "940df710181945ed2c42f734afff7958a159981c",
                    "size": 37451435,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/940df710181945ed2c42f734afff7958a159981c"
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
                    "sha": "36ba0706ac2c348fc82187df08454b9fedb6a7f9",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/36ba0706ac2c348fc82187df08454b9fedb6a7f9"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231001.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "02ae5e2ec326db2cdbadee7786a0ec05b6749c59",
                    "size": 37070197,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/02ae5e2ec326db2cdbadee7786a0ec05b6749c59"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231002.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c9959d08180a0b7008795ff035eacbb083598c8b",
                    "size": 37270202,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c9959d08180a0b7008795ff035eacbb083598c8b"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231003.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3bf7873f2a8c63ea8058d5d016d77f44aac4ad91",
                    "size": 37418354,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3bf7873f2a8c63ea8058d5d016d77f44aac4ad91"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231004.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "96d537296bd84b5644d06ae73d4d75c94b81ef12",
                    "size": 36879501,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/96d537296bd84b5644d06ae73d4d75c94b81ef12"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231005.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3fa7c02e748baa42257f2cc747021e95a53166d3",
                    "size": 36746563,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3fa7c02e748baa42257f2cc747021e95a53166d3"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231006.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4351ca132168a4fc36e631cd4b03a79135a2318c",
                    "size": 36666979,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4351ca132168a4fc36e631cd4b03a79135a2318c"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231007.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3e8d5dcfa2acf5e426937002ed70afe10c41f49d",
                    "size": 36863970,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3e8d5dcfa2acf5e426937002ed70afe10c41f49d"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231008.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b3615a540daa6217bfd1b1bca5c859603411560e",
                    "size": 36817767,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b3615a540daa6217bfd1b1bca5c859603411560e"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231009.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c1868256e7f86d0ae0704bc588f50059e5a3dbe5",
                    "size": 36520786,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c1868256e7f86d0ae0704bc588f50059e5a3dbe5"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231010.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "23bc1907c8edc21b3203d8bfb5b7fe0a5f9599a2",
                    "size": 36354649,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/23bc1907c8edc21b3203d8bfb5b7fe0a5f9599a2"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231011.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cfb7b73295ee8967046c1738ca80035a96a4e904",
                    "size": 36376834,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cfb7b73295ee8967046c1738ca80035a96a4e904"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231012.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "47a8e5bcb7ed73a95e23893502ceb1a76cd24ec6",
                    "size": 36279322,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/47a8e5bcb7ed73a95e23893502ceb1a76cd24ec6"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231013.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2c3de04efb1bb53d126a072f703a6fb167ef2062",
                    "size": 35999466,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2c3de04efb1bb53d126a072f703a6fb167ef2062"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231014.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b5c15170a73b555c49cc5a76f42265a486bf7f38",
                    "size": 35791099,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b5c15170a73b555c49cc5a76f42265a486bf7f38"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231015.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "845d3fce46732606e2b32383bffa8055f52f2fc5",
                    "size": 35422655,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/845d3fce46732606e2b32383bffa8055f52f2fc5"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231016.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8faf277fe8151dfb6ded2084866c653f0b49ac5d",
                    "size": 35693050,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8faf277fe8151dfb6ded2084866c653f0b49ac5d"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231017.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "127997a60f8124dcd8774d956d3b653f3be1d504",
                    "size": 36392824,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/127997a60f8124dcd8774d956d3b653f3be1d504"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231018.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f37d8787a42e8666ab6707e909b6c827dc4959b8",
                    "size": 36078688,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f37d8787a42e8666ab6707e909b6c827dc4959b8"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231019.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fe6aaa7f6999ae87d46855877dac7c9b9b1a354f",
                    "size": 35500151,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fe6aaa7f6999ae87d46855877dac7c9b9b1a354f"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231020.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9a8f8f9304d5fd7a075472094e6f1eb49d8d2764",
                    "size": 34881672,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9a8f8f9304d5fd7a075472094e6f1eb49d8d2764"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231021.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2109a5267225383a8ac715b43bb906a27fc1b562",
                    "size": 35183268,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2109a5267225383a8ac715b43bb906a27fc1b562"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231022.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "95e70234dadaa02205c7f8ba46de8926ff0d2827",
                    "size": 35282450,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/95e70234dadaa02205c7f8ba46de8926ff0d2827"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231023.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c78e20cc6fff0a924d6434d69d8665b5069ef9f1",
                    "size": 35669314,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c78e20cc6fff0a924d6434d69d8665b5069ef9f1"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231024.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "63d9e92f74a66f2ffd21c2edaf20edf2ab7c85b0",
                    "size": 35808458,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/63d9e92f74a66f2ffd21c2edaf20edf2ab7c85b0"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231025.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ca7d941dd68a8b3402215856e45d8e6c0ddb5642",
                    "size": 35834796,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ca7d941dd68a8b3402215856e45d8e6c0ddb5642"
                },
                {
                    "path": "shared/data_source/era5/2023/part3/20231026.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "75b79589bc97bf3cb075193436c49a4e4c76116a",
                    "size": 35217589,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/75b79589bc97bf3cb075193436c49a4e4c76116a"
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
                    "sha": "ddcaa004d2634a8d239e7493463dea15d665d1e5",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/ddcaa004d2634a8d239e7493463dea15d665d1e5"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231001.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e76905988881ed1f3318f6eb7e198b7c95b76ab2",
                    "size": 26615881,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e76905988881ed1f3318f6eb7e198b7c95b76ab2"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231002.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "14c41036e69c3d785ac074199c34d5ac441ee4ce",
                    "size": 26839637,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/14c41036e69c3d785ac074199c34d5ac441ee4ce"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231003.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "317f86fafcdfe86bb009d7407869b7abc3f4f2ab",
                    "size": 27520019,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/317f86fafcdfe86bb009d7407869b7abc3f4f2ab"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231004.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d139d61328ee02f7b288f1ad8ed9f4ff91d16f79",
                    "size": 27800134,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d139d61328ee02f7b288f1ad8ed9f4ff91d16f79"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231005.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "aaad298c3fdfcc66c0aab26d23cd3d7861d48cb5",
                    "size": 27369312,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/aaad298c3fdfcc66c0aab26d23cd3d7861d48cb5"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231006.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d6c4565dd93260d72fb40883a3b9cd666dc8dc90",
                    "size": 26920811,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d6c4565dd93260d72fb40883a3b9cd666dc8dc90"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231007.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9e93d986ec74e08d7124d4a8fbbcec1201c7cd59",
                    "size": 26905657,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9e93d986ec74e08d7124d4a8fbbcec1201c7cd59"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231008.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cc041576cce8a98d48ed7eecf84bac92853dfe37",
                    "size": 26484633,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cc041576cce8a98d48ed7eecf84bac92853dfe37"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231009.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "92321becaf5859ab5127d79d1f4a6aa534038084",
                    "size": 26499635,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/92321becaf5859ab5127d79d1f4a6aa534038084"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231010.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8140cf47a1595595faabd4317160a21d8075c4c1",
                    "size": 26591700,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8140cf47a1595595faabd4317160a21d8075c4c1"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231011.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9ed872514d5a3d58d99d76dc498ef214597fc9de",
                    "size": 26499746,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9ed872514d5a3d58d99d76dc498ef214597fc9de"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231012.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6c48b8fe8f71a2e933cf5d0d01d1468f5daca9a3",
                    "size": 26312036,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6c48b8fe8f71a2e933cf5d0d01d1468f5daca9a3"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231013.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2ca250420822ffb8baca2b7f012719f8beb397db",
                    "size": 26160800,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2ca250420822ffb8baca2b7f012719f8beb397db"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231014.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "178445c473664420be338c0009f27cd32501900b",
                    "size": 26077175,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/178445c473664420be338c0009f27cd32501900b"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231015.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0dc6d408a5c4cb0ed5794344b7e60f5fa68edd97",
                    "size": 26294053,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0dc6d408a5c4cb0ed5794344b7e60f5fa68edd97"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231016.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c03d5340be5fc21f0a1cafd6af355c51dd31596f",
                    "size": 26571568,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c03d5340be5fc21f0a1cafd6af355c51dd31596f"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231017.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d77fd52d5f21db257702811e47235f3e387c753e",
                    "size": 27153724,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d77fd52d5f21db257702811e47235f3e387c753e"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231018.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e0f488e4cd4c519c41ef6c4635d01035a9d7b8f9",
                    "size": 27131398,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e0f488e4cd4c519c41ef6c4635d01035a9d7b8f9"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231019.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "82550bf391c51e188a43187c82e0958a89354966",
                    "size": 26803808,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/82550bf391c51e188a43187c82e0958a89354966"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231020.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1faab78050d4401b2c3aab2e9d71c3189158a213",
                    "size": 26197442,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1faab78050d4401b2c3aab2e9d71c3189158a213"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231021.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a0e1e6d9f6c7bdc13958d1b30522e575fb6597ea",
                    "size": 25657921,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a0e1e6d9f6c7bdc13958d1b30522e575fb6597ea"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231022.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "591207bacc7e06aa2486d79dd15c96d6c9139967",
                    "size": 25640165,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/591207bacc7e06aa2486d79dd15c96d6c9139967"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231023.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2293576df18b333d2d94981f560afe3b937b8361",
                    "size": 25858351,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2293576df18b333d2d94981f560afe3b937b8361"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231024.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3fab1b83d393e91186f62eb9e7b1b9dc1e7bba45",
                    "size": 25761859,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3fab1b83d393e91186f62eb9e7b1b9dc1e7bba45"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231025.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "79d7e36f78f63c26e2a93392e9e3ddb4bc4c09e3",
                    "size": 25993856,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/79d7e36f78f63c26e2a93392e9e3ddb4bc4c09e3"
                },
                {
                    "path": "shared/data_source/era5/2023/part4/20231026.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7c4502a7a46419d5016281c36c723ca3deecfa1f",
                    "size": 25778423,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7c4502a7a46419d5016281c36c723ca3deecfa1f"
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
                    "sha": "61305c3bf78dd1234d4bd4585568d300aaaaf598",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/61305c3bf78dd1234d4bd4585568d300aaaaf598"
                },
                {
                    "path": "shared/data_source/gems/2023",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "dd947780629e1b16e013b867c7449255f9dc198d",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/dd947780629e1b16e013b867c7449255f9dc198d"
                },
                {
                    "path": "shared/data_source/gems/2023/20231001.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2d0a8dc435383b212b2b7010167c0439ca5b3828",
                    "size": 2484579,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2d0a8dc435383b212b2b7010167c0439ca5b3828"
                },
                {
                    "path": "shared/data_source/gems/2023/20231002.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bacb805e9ee87a2649c7e01b46f82336d733b448",
                    "size": 2364272,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bacb805e9ee87a2649c7e01b46f82336d733b448"
                },
                {
                    "path": "shared/data_source/gems/2023/20231003.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3f2146a80946bb5385e8a25315da7774188b50a0",
                    "size": 2290657,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3f2146a80946bb5385e8a25315da7774188b50a0"
                },
                {
                    "path": "shared/data_source/gems/2023/20231004.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5975d6a828f6239a3637c1fecce431d188d0a3ec",
                    "size": 1991020,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5975d6a828f6239a3637c1fecce431d188d0a3ec"
                },
                {
                    "path": "shared/data_source/gems/2023/20231005.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "dd0f0372f0b53485a4e72845c6903987e40440af",
                    "size": 1898643,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/dd0f0372f0b53485a4e72845c6903987e40440af"
                },
                {
                    "path": "shared/data_source/gems/2023/20231006.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "742f2904fb8065cfdfea68a38fa8501b15e4c2fa",
                    "size": 1805974,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/742f2904fb8065cfdfea68a38fa8501b15e4c2fa"
                },
                {
                    "path": "shared/data_source/gems/2023/20231007.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c9479de912b3f7935b8ad3cb8403339a3c721a6e",
                    "size": 2065663,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c9479de912b3f7935b8ad3cb8403339a3c721a6e"
                },
                {
                    "path": "shared/data_source/gems/2023/20231008.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f1219f25427dd0177fae71845577e22aba7608a3",
                    "size": 1937499,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f1219f25427dd0177fae71845577e22aba7608a3"
                },
                {
                    "path": "shared/data_source/gems/2023/20231009.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cfa1f6d97f6cb0f7b6c321d5b8ec3748df2e43dd",
                    "size": 2063729,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cfa1f6d97f6cb0f7b6c321d5b8ec3748df2e43dd"
                },
                {
                    "path": "shared/data_source/gems/2023/20231010.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc63576c48f2fca4bb6e680312a478770207a284",
                    "size": 1978812,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc63576c48f2fca4bb6e680312a478770207a284"
                },
                {
                    "path": "shared/data_source/gems/2023/20231011.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "703b677fd776a8f412cb477b25bb21724a366746",
                    "size": 1929456,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/703b677fd776a8f412cb477b25bb21724a366746"
                },
                {
                    "path": "shared/data_source/gems/2023/20231012.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "43df6832809e1b9fb1a9413634e81d30ae231d70",
                    "size": 1600585,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/43df6832809e1b9fb1a9413634e81d30ae231d70"
                },
                {
                    "path": "shared/data_source/gems/2023/20231013.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b77e08981e120f461abf48965e663c2981300e59",
                    "size": 2168624,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b77e08981e120f461abf48965e663c2981300e59"
                },
                {
                    "path": "shared/data_source/gems/2023/20231014.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "07dca95415be44ae398d6aca3f22699e3affa4a4",
                    "size": 2989947,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/07dca95415be44ae398d6aca3f22699e3affa4a4"
                },
                {
                    "path": "shared/data_source/gems/2023/20231015.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6379fa48f4083b4bf529c244951831f70e3d2e82",
                    "size": 3222896,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6379fa48f4083b4bf529c244951831f70e3d2e82"
                },
                {
                    "path": "shared/data_source/gems/2023/20231016.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6f2668476acfac8b761839256aa4654ebdaed3b5",
                    "size": 3056360,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6f2668476acfac8b761839256aa4654ebdaed3b5"
                },
                {
                    "path": "shared/data_source/gems/2023/20231017.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "756786c524619c78b489135401ff653d5cf5f47f",
                    "size": 2427096,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/756786c524619c78b489135401ff653d5cf5f47f"
                },
                {
                    "path": "shared/data_source/gems/2023/20231018.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a66f4980442beb59c4b6ba8f672b4d0948421892",
                    "size": 2111331,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a66f4980442beb59c4b6ba8f672b4d0948421892"
                },
                {
                    "path": "shared/data_source/gems/2023/20231019.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0533547415aa18776f9e8063dc4e6a412baa054a",
                    "size": 2014823,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0533547415aa18776f9e8063dc4e6a412baa054a"
                },
                {
                    "path": "shared/data_source/gems/2023/20231020.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4d913c0f07d2415da118139b36266bb050a9e728",
                    "size": 2567926,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4d913c0f07d2415da118139b36266bb050a9e728"
                },
                {
                    "path": "shared/data_source/gems/2023/20231021.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d4db689e4e6947192dbd88b4f34795ab1cf9b1e7",
                    "size": 2935114,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d4db689e4e6947192dbd88b4f34795ab1cf9b1e7"
                },
                {
                    "path": "shared/data_source/gems/2023/20231022.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "93c48d183a96ae47497bf5d6a3f4984abc92fffa",
                    "size": 3100473,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/93c48d183a96ae47497bf5d6a3f4984abc92fffa"
                },
                {
                    "path": "shared/data_source/gems/2023/20231023.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "34121a3550cba78ada3ebae47623ff860514058e",
                    "size": 2846739,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/34121a3550cba78ada3ebae47623ff860514058e"
                },
                {
                    "path": "shared/data_source/gems/2023/20231024.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "67f1826394a4e35041f2b5d65de8c11a288a36a1",
                    "size": 2268813,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/67f1826394a4e35041f2b5d65de8c11a288a36a1"
                },
                {
                    "path": "shared/data_source/gems/2023/20231025.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "956de4ea1eb95271da60814d18665e353d96de1d",
                    "size": 2245407,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/956de4ea1eb95271da60814d18665e353d96de1d"
                },
                {
                    "path": "shared/data_source/gems/2023/20231026.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "56ac95d5d68d2d24dde9bc073709df883b9fde38",
                    "size": 2507181,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/56ac95d5d68d2d24dde9bc073709df883b9fde38"
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
                    "sha": "14ca199ea319e44ef3162ec49afb9adf67065ae2",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/14ca199ea319e44ef3162ec49afb9adf67065ae2"
                },
                {
                    "path": "shared/data_source/geoscf/2023",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "01d0e8b2ee06169e6daf7cf80e9e31674e95b937",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/01d0e8b2ee06169e6daf7cf80e9e31674e95b937"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231001.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "28481356f63a4ea8e66f64219ed26fed1e89a9b9",
                    "size": 17916076,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/28481356f63a4ea8e66f64219ed26fed1e89a9b9"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231002.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cba5b18dd69089415dca5fbffe478995dd965f59",
                    "size": 18148998,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cba5b18dd69089415dca5fbffe478995dd965f59"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231003.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "dc9088d821845f3f535082b5843c7ee74fbf9b7a",
                    "size": 18159139,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/dc9088d821845f3f535082b5843c7ee74fbf9b7a"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231004.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bd4deff13ac92a0582ff749934c9fe565d6d6ed1",
                    "size": 18096228,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bd4deff13ac92a0582ff749934c9fe565d6d6ed1"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231005.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9aeb7156253d8fd14ffe031b6c6ae240d52efb71",
                    "size": 17894014,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9aeb7156253d8fd14ffe031b6c6ae240d52efb71"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231006.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "32e8aadab12d01a13a6e04d130563acc6b6822be",
                    "size": 18006367,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/32e8aadab12d01a13a6e04d130563acc6b6822be"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231007.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "67b0c4dc3f85956673cd571cb8cd601668a48cb3",
                    "size": 17739948,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/67b0c4dc3f85956673cd571cb8cd601668a48cb3"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231008.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "88036141e2f1e8fa4d6249900fb5cdd5033802b6",
                    "size": 17614806,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/88036141e2f1e8fa4d6249900fb5cdd5033802b6"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231009.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c678ef72d1360bdedd9c717d08cbeb0459629d84",
                    "size": 17846429,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c678ef72d1360bdedd9c717d08cbeb0459629d84"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231010.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b056d0c49a56f1db71c0d7209a512d8968f382fa",
                    "size": 18145818,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b056d0c49a56f1db71c0d7209a512d8968f382fa"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231011.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7ffb42d42c80345bb6a81d16c79b77c61ba91458",
                    "size": 18057929,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7ffb42d42c80345bb6a81d16c79b77c61ba91458"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231012.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e8a013ad4b97635bb5b4958094f43d82ac42da64",
                    "size": 17989088,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e8a013ad4b97635bb5b4958094f43d82ac42da64"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231013.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ac20a52a2d112abb06b167a65574d2fa49ec0ff1",
                    "size": 17928977,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ac20a52a2d112abb06b167a65574d2fa49ec0ff1"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231014.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0804f7ba16db3ea04b41254f7c1b59e892f7c7ed",
                    "size": 17681446,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0804f7ba16db3ea04b41254f7c1b59e892f7c7ed"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231015.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "da4c0eb2de638e061c1639aab32523f885ab29b2",
                    "size": 17658239,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/da4c0eb2de638e061c1639aab32523f885ab29b2"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231016.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6e584d998fab448ce8b6127b38a52872c978b82b",
                    "size": 18082481,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6e584d998fab448ce8b6127b38a52872c978b82b"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231017.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d8d0f7917b90a9bf9624a106c191188887827703",
                    "size": 18019842,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d8d0f7917b90a9bf9624a106c191188887827703"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231018.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "aaaa5adaf9ed2c5b7816ccc9cd438e0813ca1f03",
                    "size": 17862877,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/aaaa5adaf9ed2c5b7816ccc9cd438e0813ca1f03"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231019.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "26d1eba212f929b56697c3429aef8a738550d4df",
                    "size": 18058517,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/26d1eba212f929b56697c3429aef8a738550d4df"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231020.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7d9a23e6353a42e5f9ed95cce75411f7aeceedb2",
                    "size": 17923136,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7d9a23e6353a42e5f9ed95cce75411f7aeceedb2"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231021.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "11e8ec0ce978ae2868ca5d75835d45582ed25637",
                    "size": 17971512,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/11e8ec0ce978ae2868ca5d75835d45582ed25637"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231022.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d383e58b798715bb0d78823ad9bc30e40e4fb4f3",
                    "size": 17771944,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d383e58b798715bb0d78823ad9bc30e40e4fb4f3"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231023.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "55a65d47c435a223ccbcec7c45d9cf87d9e43815",
                    "size": 18018551,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/55a65d47c435a223ccbcec7c45d9cf87d9e43815"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231024.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7cbea2feb5251eb799fa1f412e864776132ddfca",
                    "size": 18118776,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7cbea2feb5251eb799fa1f412e864776132ddfca"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231025.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7bf71d1d084587c0a695689ede5e7cb6098dfd2b",
                    "size": 18142369,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7bf71d1d084587c0a695689ede5e7cb6098dfd2b"
                },
                {
                    "path": "shared/data_source/geoscf/2023/20231026.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e4c4452b62cfe1957839c897c2b1a090cc960642",
                    "size": 18290688,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e4c4452b62cfe1957839c897c2b1a090cc960642"
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
                    "sha": "b56e5dcfa011af4cbd88435d8133af984a5fc012",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/b56e5dcfa011af4cbd88435d8133af984a5fc012"
                },
                {
                    "path": "shared/estimate/daily_tif",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "26bcd7d04d934167a461076291815415cd8e3b1b",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/26bcd7d04d934167a461076291815415cd8e3b1b"
                },
                {
                    "path": "shared/estimate/daily_tif/2023",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "e3b494cf292fada70e2cf314b70a6dd64800a996",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/e3b494cf292fada70e2cf314b70a6dd64800a996"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231001.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "424ed23e758c963cef92bbb78d84ab6708d1a0c8",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/424ed23e758c963cef92bbb78d84ab6708d1a0c8"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231002.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c3bc54b6c828dda7007e4133cc42c21167bf1bfd",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c3bc54b6c828dda7007e4133cc42c21167bf1bfd"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231003.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2ed14bc62f5ad5f036a6ffe5e36a38c1db067198",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2ed14bc62f5ad5f036a6ffe5e36a38c1db067198"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231004.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a037e55ee4b56013771e9ec325579d59ca5e9b6c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a037e55ee4b56013771e9ec325579d59ca5e9b6c"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231005.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9784a7d01e115087b55f8371b880e1085b5a83a0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9784a7d01e115087b55f8371b880e1085b5a83a0"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231006.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9dfb58d1965da1e69c155ede64df4e39b8d7e530",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9dfb58d1965da1e69c155ede64df4e39b8d7e530"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231007.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6e79bd2aefbff15fd30863a92306db7d9441fe1a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6e79bd2aefbff15fd30863a92306db7d9441fe1a"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231008.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "87c6db8c16fcd020896d32146b0e661a7f9a6201",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/87c6db8c16fcd020896d32146b0e661a7f9a6201"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231009.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b258014309d0661203d5daea5e0b58116b71b8e1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b258014309d0661203d5daea5e0b58116b71b8e1"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231010.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0c7ebb57ffb17f35c1149f4da6a5993562a7c0dd",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0c7ebb57ffb17f35c1149f4da6a5993562a7c0dd"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231011.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c39521065ab43b5d61899b3fbb34e207b403419b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c39521065ab43b5d61899b3fbb34e207b403419b"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231012.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "79daac16cf46ce6cba3ad27fd0589f407813a0d4",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/79daac16cf46ce6cba3ad27fd0589f407813a0d4"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231013.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "510dfd07e6a771bd344c033409fe6f6d0ee5791d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/510dfd07e6a771bd344c033409fe6f6d0ee5791d"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231014.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "822b0f9abf39b06fbb058abeb71df04c3cbafb76",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/822b0f9abf39b06fbb058abeb71df04c3cbafb76"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231015.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "76b44cf42d6a4a712a3006f425946d20391ec362",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/76b44cf42d6a4a712a3006f425946d20391ec362"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231016.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a9d987ac01f8053cac5eea4b063d044bc5abf0f0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a9d987ac01f8053cac5eea4b063d044bc5abf0f0"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231017.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4767799d880b394dbe9079f190cbfca32a53bbdb",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4767799d880b394dbe9079f190cbfca32a53bbdb"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231018.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a27b69feb65ec46e256f521c7ce8cb83153c64e9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a27b69feb65ec46e256f521c7ce8cb83153c64e9"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231019.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8fc5712fecfe60b63d6a3e6cca539751838b55cf",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8fc5712fecfe60b63d6a3e6cca539751838b55cf"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231020.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a3e6a63cb0759080dedfe08eb77b624cdc3a6ad0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a3e6a63cb0759080dedfe08eb77b624cdc3a6ad0"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231021.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c822748124d13aeb9f008165932e8fbbe10b3546",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c822748124d13aeb9f008165932e8fbbe10b3546"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231022.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3b21ba95de4a3aa1117b6934ea5f15c4221fdf61",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3b21ba95de4a3aa1117b6934ea5f15c4221fdf61"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231023.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ffd12b41793792d4f6e995cb77c5651a0d6e3601",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ffd12b41793792d4f6e995cb77c5651a0d6e3601"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231024.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d5acb182bd9d6a494925fb0cebdfe7bee0e3b683",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d5acb182bd9d6a494925fb0cebdfe7bee0e3b683"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231025.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "df457efd0f92934bd3e2a13ceaecca49352f8f1e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/df457efd0f92934bd3e2a13ceaecca49352f8f1e"
                },
                {
                    "path": "shared/estimate/daily_tif/2023/20231026.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d5a8af58e0b0ace6f4b5c892e19c6892c56ec1eb",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d5a8af58e0b0ace6f4b5c892e19c6892c56ec1eb"
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
                    "sha": "147fc808359c9ea56ee699bb99211210d1b6b821",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/147fc808359c9ea56ee699bb99211210d1b6b821"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "2e5dbb181461c29f469035c0881c5249d5cb59d2",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/2e5dbb181461c29f469035c0881c5249d5cb59d2"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "83d95bfd6c317f8bf4c05fcb3ce9a4d9b37baca5",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/83d95bfd6c317f8bf4c05fcb3ce9a4d9b37baca5"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100100.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "51880fe11076ce4d704aabd392c2b989d46d30c6",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/51880fe11076ce4d704aabd392c2b989d46d30c6"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100101.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8c6218c5cd662fc5b400563059959c11d751bd68",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8c6218c5cd662fc5b400563059959c11d751bd68"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100102.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0c2c3b47b97fd9197a995b95a69f0dae1e9a0b04",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0c2c3b47b97fd9197a995b95a69f0dae1e9a0b04"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100103.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1161bff64b03fa80f2fd0bf81cd2415f6f24063c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1161bff64b03fa80f2fd0bf81cd2415f6f24063c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100104.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "99e1227cc1c582ac48a160e2c83e9625a11b47a7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/99e1227cc1c582ac48a160e2c83e9625a11b47a7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100105.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e084f545b16be24afc79e0696ac75252bd467c70",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e084f545b16be24afc79e0696ac75252bd467c70"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100106.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3477c4f0ca0785c0f0a584b72b9677b19b14dec7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3477c4f0ca0785c0f0a584b72b9677b19b14dec7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100107.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d4ee74147ce463de14221da28e703b928e725c3a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d4ee74147ce463de14221da28e703b928e725c3a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100108.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "30736adffabb53944a2108372f08c41d10977815",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/30736adffabb53944a2108372f08c41d10977815"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100109.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f0bfff01ecf6883a38806a1aa9f49a136abc2885",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f0bfff01ecf6883a38806a1aa9f49a136abc2885"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100110.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "36fdfe8fc52371f09ee48de3b17515a833710e72",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/36fdfe8fc52371f09ee48de3b17515a833710e72"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100111.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "824c7be8bd1a978f5b49fc74054e8bc79a7f2f11",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/824c7be8bd1a978f5b49fc74054e8bc79a7f2f11"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100112.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "557e1eaac095bde8bd22fa8df6273971f80b3985",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/557e1eaac095bde8bd22fa8df6273971f80b3985"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100113.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "39244c5cec3f54d5ff634afd2f04c28d0a39ead8",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/39244c5cec3f54d5ff634afd2f04c28d0a39ead8"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100114.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "eea56b3c9c231aa7fb501e094607fd1ec53bf2d4",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/eea56b3c9c231aa7fb501e094607fd1ec53bf2d4"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100115.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "dc92ec54677c4ed8a6b5a30ee829ca38f56ab7f7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/dc92ec54677c4ed8a6b5a30ee829ca38f56ab7f7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100116.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9f6c4a26f78c1c8fe9ec165199471b5f64fb8029",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9f6c4a26f78c1c8fe9ec165199471b5f64fb8029"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100117.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "55a8b4a8497d32dc9e03e0e9898829821cd2ced8",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/55a8b4a8497d32dc9e03e0e9898829821cd2ced8"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100118.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3d256da1e9b46161df6580d241a5da38c3c68922",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3d256da1e9b46161df6580d241a5da38c3c68922"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100119.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f4b56b0c6b3710eebcee56076447605bd3648824",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f4b56b0c6b3710eebcee56076447605bd3648824"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100120.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7764ca13b5f3d57ca43b1eae0f9ed49757a8cc03",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7764ca13b5f3d57ca43b1eae0f9ed49757a8cc03"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100121.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8cb9d31e70beab6568ea64b9440591a34fdea34d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8cb9d31e70beab6568ea64b9440591a34fdea34d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100122.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f776fbf71e0cc3d562805b9975c6636e90f57656",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f776fbf71e0cc3d562805b9975c6636e90f57656"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231001/2023100123.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7b3080c7448a79ed6d5c74c0886226808795f18a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7b3080c7448a79ed6d5c74c0886226808795f18a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "353a575aab5519372b3e43d93db805cd29fa9f7c",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/353a575aab5519372b3e43d93db805cd29fa9f7c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100200.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "12db149244caf7ccacff0740d6de6418ac1b786a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/12db149244caf7ccacff0740d6de6418ac1b786a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100201.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "28258c0fd1a7740eae382cd5247546dbeb6ceedc",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/28258c0fd1a7740eae382cd5247546dbeb6ceedc"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100202.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1a07f00f732aabbeb519f3ccd2b949ad23b9e8d1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1a07f00f732aabbeb519f3ccd2b949ad23b9e8d1"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100203.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d1bc10a769372726bf6ea438e40760a092e7caeb",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d1bc10a769372726bf6ea438e40760a092e7caeb"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100204.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "24eab4bf1876ea8f7ae4aeaebaff6038da8ca997",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/24eab4bf1876ea8f7ae4aeaebaff6038da8ca997"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100205.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "241edb275f372fcddf863e17dfa729ee99ff401d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/241edb275f372fcddf863e17dfa729ee99ff401d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100206.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0e2897592cff7233e927491e505ce773a5e1c279",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0e2897592cff7233e927491e505ce773a5e1c279"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100207.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "22902917feb7351bba8e7acc649f6f46be37fbfd",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/22902917feb7351bba8e7acc649f6f46be37fbfd"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100208.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ab568141c64b7ea3835c58a9d92ee49aa5ba377d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ab568141c64b7ea3835c58a9d92ee49aa5ba377d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100209.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "83d44fe623d59a25f7359e2850628f2a53803eee",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/83d44fe623d59a25f7359e2850628f2a53803eee"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100210.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f6544439724511eb30d7383e84b1395bd97cbc58",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f6544439724511eb30d7383e84b1395bd97cbc58"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100211.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "25f250be2f92554e706068f6ad0c290866feda10",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/25f250be2f92554e706068f6ad0c290866feda10"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100212.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6b6ff9ded6a2ffd505bdfb752d816a8c7b249c18",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6b6ff9ded6a2ffd505bdfb752d816a8c7b249c18"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100213.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6b3f2f6ddddbeb5bcdb7aacb434ca4492d98317c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6b3f2f6ddddbeb5bcdb7aacb434ca4492d98317c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100214.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "146709c38879d0fdfe76ee4facfb0506b30db76f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/146709c38879d0fdfe76ee4facfb0506b30db76f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100215.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6e1792f6636559366fb7d47ceb24f26f4938d82d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6e1792f6636559366fb7d47ceb24f26f4938d82d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100216.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "15d423c25e5ee2d607d9fc0684a8a78c9e8195cb",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/15d423c25e5ee2d607d9fc0684a8a78c9e8195cb"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100217.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ad8593aefb9bfdb3f6f30bcdfa46b3db22f853d9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ad8593aefb9bfdb3f6f30bcdfa46b3db22f853d9"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100218.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e276be60a9e98a76d495b72546fbfeb6165603d1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e276be60a9e98a76d495b72546fbfeb6165603d1"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100219.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7b7f8963253d580c12473d73538b115949c2d2cc",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7b7f8963253d580c12473d73538b115949c2d2cc"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100220.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "44db5294a8b4a49b537596c4d1260cc0957813d2",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/44db5294a8b4a49b537596c4d1260cc0957813d2"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100221.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9466826cbbbcb158e4d418871ad373bb4d3dd08b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9466826cbbbcb158e4d418871ad373bb4d3dd08b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100222.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d4b97705f4ec2a3c054664094ad4b92f5c75484d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d4b97705f4ec2a3c054664094ad4b92f5c75484d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231002/2023100223.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1f039b5e3ba9d438065499bf83dfb719c3de034f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1f039b5e3ba9d438065499bf83dfb719c3de034f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "f0c3cf07d0b12f1fb9b3666e53feeb2b23236482",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/f0c3cf07d0b12f1fb9b3666e53feeb2b23236482"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100300.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "798c3c4cbac1f855b92a77db3fbf5476aa8758db",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/798c3c4cbac1f855b92a77db3fbf5476aa8758db"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100301.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "751572a1cf9ef46dafb29d55516f9311f87c8df9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/751572a1cf9ef46dafb29d55516f9311f87c8df9"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100302.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8365a19ae62ccab9673f3604997c6d7cdc6b94ef",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8365a19ae62ccab9673f3604997c6d7cdc6b94ef"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100303.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "021bd882cb7fe79e8565af002e5d1d24d129f77a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/021bd882cb7fe79e8565af002e5d1d24d129f77a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100304.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a8f3bf46148a8985c7ed3f05c08a233805db9a2d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a8f3bf46148a8985c7ed3f05c08a233805db9a2d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100305.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7048633815111fe452dc2390ec7e6aaabbbbb7ea",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7048633815111fe452dc2390ec7e6aaabbbbb7ea"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100306.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc488b89f43a20e163c5fdac08e2e714b9ab61c9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc488b89f43a20e163c5fdac08e2e714b9ab61c9"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100307.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "41cfdbbddd051b3704e50c123ccdd2cab655da60",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/41cfdbbddd051b3704e50c123ccdd2cab655da60"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100308.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2b1b24be8d7822cd54d48184797068d0ce6b79fb",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2b1b24be8d7822cd54d48184797068d0ce6b79fb"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100309.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bb210decfeb0be00ef9af52a3ae7a8439713c97b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bb210decfeb0be00ef9af52a3ae7a8439713c97b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100310.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "05adab5473474b49e7e927e33cdb1505b78a0813",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/05adab5473474b49e7e927e33cdb1505b78a0813"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100311.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e1c0927ca78ccf251765ae9ba3f701c401a1ad47",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e1c0927ca78ccf251765ae9ba3f701c401a1ad47"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100312.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2bde79b2c049bdc3c1af2e6265db0cede7ab8c45",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2bde79b2c049bdc3c1af2e6265db0cede7ab8c45"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100313.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7e47443aabee162a23ebfb7220840b09e9d6c5aa",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7e47443aabee162a23ebfb7220840b09e9d6c5aa"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100314.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "be2de33f238d2aaa4bf7b61924c8535040cac776",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/be2de33f238d2aaa4bf7b61924c8535040cac776"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100315.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4ccb97fdae7e20e4bf13d7c571b5c0a03ac16401",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4ccb97fdae7e20e4bf13d7c571b5c0a03ac16401"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100316.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7ca42d388986b2e8f235ed3c9ec6802fe023b0ff",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7ca42d388986b2e8f235ed3c9ec6802fe023b0ff"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100317.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "199427270784880f7b1315ea73fa8c332a0bad51",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/199427270784880f7b1315ea73fa8c332a0bad51"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100318.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4f95c93504d73da76fe9631b42d8c893aa2cfcce",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4f95c93504d73da76fe9631b42d8c893aa2cfcce"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100319.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "21b25dac18e18d9b8fe52f1673dda04ad63f4709",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/21b25dac18e18d9b8fe52f1673dda04ad63f4709"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100320.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "827c2e8aef5441c829fd8e13d30a8d025629bff0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/827c2e8aef5441c829fd8e13d30a8d025629bff0"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100321.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "28202ea38c23cd9722c536b1fb5123b43e74ca40",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/28202ea38c23cd9722c536b1fb5123b43e74ca40"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100322.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "43f8866bbf721f871ee22306e882ed98ec87a3b4",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/43f8866bbf721f871ee22306e882ed98ec87a3b4"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231003/2023100323.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6937e9be6afaa10fc45505d863a02f6ee8e5b4d0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6937e9be6afaa10fc45505d863a02f6ee8e5b4d0"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "bbd38f6e6ced83257ce217dd17fdab2247268f4d",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/bbd38f6e6ced83257ce217dd17fdab2247268f4d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100400.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "847b493db81cd98b5db68a0dd24de8bfd117cab9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/847b493db81cd98b5db68a0dd24de8bfd117cab9"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100401.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "719cf8dae4374cd94471ca5f41b7367fafdca097",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/719cf8dae4374cd94471ca5f41b7367fafdca097"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100402.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3a91e11100addc71cee324150ec79b988fa4254a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3a91e11100addc71cee324150ec79b988fa4254a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100403.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a674a06daa108135aba983daf96d89c69f4a81a8",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a674a06daa108135aba983daf96d89c69f4a81a8"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100404.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fc6ec7319e5648cef1ea186725f7ab2c1bdac92d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fc6ec7319e5648cef1ea186725f7ab2c1bdac92d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100405.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3ba3811de96cea4dfef70d728e365182130856dc",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3ba3811de96cea4dfef70d728e365182130856dc"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100406.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "330279fe60fc715f720121d399088ad7c7115c98",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/330279fe60fc715f720121d399088ad7c7115c98"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100407.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e12f85fc5cffe49d0d18484ae6cb0ff9e7769feb",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e12f85fc5cffe49d0d18484ae6cb0ff9e7769feb"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100408.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4880d36a5f7e0e3a47d0cdc677b3fc5e5f4f3ddf",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4880d36a5f7e0e3a47d0cdc677b3fc5e5f4f3ddf"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100409.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "00ebcb995a1b0a2b6051d822b6f2d9b9e3070ace",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/00ebcb995a1b0a2b6051d822b6f2d9b9e3070ace"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100410.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fb827ab44d28683129a96a0abe636ea1659dabe3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fb827ab44d28683129a96a0abe636ea1659dabe3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100411.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f7803d6d6b06cdacf53e212d5a99e3d9273881f9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f7803d6d6b06cdacf53e212d5a99e3d9273881f9"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100412.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c52e296eb6482c3aa9940a523343849cc84a8c9c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c52e296eb6482c3aa9940a523343849cc84a8c9c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100413.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e104e9a72cad096396c1798b4722ab9251e6ff18",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e104e9a72cad096396c1798b4722ab9251e6ff18"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100414.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a449c9bd62a0300e2584b062af9afa6727fc7970",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a449c9bd62a0300e2584b062af9afa6727fc7970"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100415.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f11e0f50fce20440742c133a506dc6ea1916f139",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f11e0f50fce20440742c133a506dc6ea1916f139"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100416.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bf2885eb4a27b47a722aac73c4951bb3e0250ac1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bf2885eb4a27b47a722aac73c4951bb3e0250ac1"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100417.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "589d6fab866cfd9f4e152840b4cab91795803e26",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/589d6fab866cfd9f4e152840b4cab91795803e26"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100418.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1c982293a458d95820d69968906f56319fd8b748",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1c982293a458d95820d69968906f56319fd8b748"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100419.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c852e2f12d7ef9c90dbcb1c48322f071adbd7b1b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c852e2f12d7ef9c90dbcb1c48322f071adbd7b1b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100420.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "49943a125fb798a24bfb90d51ae2bb4ea0a14e76",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/49943a125fb798a24bfb90d51ae2bb4ea0a14e76"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100421.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9adbdcb9f04944504dae5f4d61610d3a2b1e23bf",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9adbdcb9f04944504dae5f4d61610d3a2b1e23bf"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100422.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7b0bcd2d3851ab1dca21d7d39a2487a7ebd5f440",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7b0bcd2d3851ab1dca21d7d39a2487a7ebd5f440"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231004/2023100423.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9eb03dfa9448cb7cf7b4626e1ec0f5e0bbcd3cda",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9eb03dfa9448cb7cf7b4626e1ec0f5e0bbcd3cda"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "1eff3679895f442ec7cc2fccdd698144ca38264e",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/1eff3679895f442ec7cc2fccdd698144ca38264e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100500.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ccd05c23869b238b457a4a9036c8be1e23a41cdf",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ccd05c23869b238b457a4a9036c8be1e23a41cdf"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100501.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f8666c5825c21fb1d289ca51faa6e294be3c3d75",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f8666c5825c21fb1d289ca51faa6e294be3c3d75"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100502.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "75901d9549a3dafbff6505324bce0b3d64de6def",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/75901d9549a3dafbff6505324bce0b3d64de6def"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100503.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "18bfa6758c80104e82c7a09e74e98ac2da8eb72b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/18bfa6758c80104e82c7a09e74e98ac2da8eb72b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100504.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cc378196993efd67bf3e040b985b629abac83e28",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cc378196993efd67bf3e040b985b629abac83e28"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100505.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e713aa8d4f64e9b79406ee9258624efca69c8eb0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e713aa8d4f64e9b79406ee9258624efca69c8eb0"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100506.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ea0375e06a237cb971edb127297bed31f6f43da7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ea0375e06a237cb971edb127297bed31f6f43da7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100507.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2aeca74010f3a0b1a523f355a75f2f7e6db76ec5",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2aeca74010f3a0b1a523f355a75f2f7e6db76ec5"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100508.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e3f52a5cffd1306385cdd401325a3f5edfc58c90",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e3f52a5cffd1306385cdd401325a3f5edfc58c90"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100509.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "82d3afd3d325a35c18f5f5303af19a43095929ea",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/82d3afd3d325a35c18f5f5303af19a43095929ea"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100510.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "253e9df1acef3b8445d9f75e182cd64b143071fa",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/253e9df1acef3b8445d9f75e182cd64b143071fa"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100511.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "09df1b40a379fb7c3c54b0bdbad9931d0d223b41",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/09df1b40a379fb7c3c54b0bdbad9931d0d223b41"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100512.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "abbf593ee610392c5a4e793024b6d9fe936ac79a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/abbf593ee610392c5a4e793024b6d9fe936ac79a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100513.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b606545d5f33e68c0c134607c4b38b82af7cc95c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b606545d5f33e68c0c134607c4b38b82af7cc95c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100514.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "04dce7abf26dadba108166f56e5523646839fdaa",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/04dce7abf26dadba108166f56e5523646839fdaa"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100515.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cec8fad9ff3591d4cef68df067d6a98ba17d8fb4",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cec8fad9ff3591d4cef68df067d6a98ba17d8fb4"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100516.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "13e65f973399fb966645a32b3e59e623e1e143c8",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/13e65f973399fb966645a32b3e59e623e1e143c8"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100517.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e3cc0e3d3559fad16bfa3973cc0bab13280cef96",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e3cc0e3d3559fad16bfa3973cc0bab13280cef96"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100518.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "604ebd88172a779a21b593a92c37948b6b3ae406",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/604ebd88172a779a21b593a92c37948b6b3ae406"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100519.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3c7eb4c74b129e01657dcc80e431c9ddbba33df9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3c7eb4c74b129e01657dcc80e431c9ddbba33df9"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100520.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4afa82d02f805e4e521da1eff7b858d4a4e8d542",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4afa82d02f805e4e521da1eff7b858d4a4e8d542"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100521.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "97113847c83d2c1e2f07a6766d4aba366703c88f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/97113847c83d2c1e2f07a6766d4aba366703c88f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100522.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "19cf2b19e923ae37d237fa663ca780ccdcbc5bf1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/19cf2b19e923ae37d237fa663ca780ccdcbc5bf1"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231005/2023100523.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "331a86c663e91ec0158c572a8bf76b256641770d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/331a86c663e91ec0158c572a8bf76b256641770d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "b12ec843d462584a0aef0e662a88be6c65e18c66",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/b12ec843d462584a0aef0e662a88be6c65e18c66"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100600.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "84b8e638f3a75799b051036b43715ce5311a19c2",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/84b8e638f3a75799b051036b43715ce5311a19c2"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100601.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ef38011cf8d15ca8b5da745cb281aee415cd5cfe",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ef38011cf8d15ca8b5da745cb281aee415cd5cfe"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100602.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d9763a48ceade23a0f876e3a981aecd83c918cf2",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d9763a48ceade23a0f876e3a981aecd83c918cf2"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100603.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "076a304674aff90453ee0936e66e9e17bde6aa9b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/076a304674aff90453ee0936e66e9e17bde6aa9b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100604.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "09d54a84476726e3ac09e46b972a8bac012dc90b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/09d54a84476726e3ac09e46b972a8bac012dc90b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100605.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b7e405f1ed312e94c813d8813579ee50ecf39a45",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b7e405f1ed312e94c813d8813579ee50ecf39a45"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100606.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "61a866ff59f140ada7764f4851276d719d562ca9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/61a866ff59f140ada7764f4851276d719d562ca9"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100607.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e8661a0ceec5614afd5fe19d0ad3ba808c5eadd4",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e8661a0ceec5614afd5fe19d0ad3ba808c5eadd4"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100608.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0275f147a145e0121b2de2e25c08942cb7d2fb40",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0275f147a145e0121b2de2e25c08942cb7d2fb40"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100609.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7aaa9511e0838b5285150cb24e10c34a89ddc784",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7aaa9511e0838b5285150cb24e10c34a89ddc784"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100610.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8e66375fad6bd922ce1fcad4aeb50c39696c0ed6",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8e66375fad6bd922ce1fcad4aeb50c39696c0ed6"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100611.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a9e71ed4ae0b98eca24eb093b111e5dd305666f3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a9e71ed4ae0b98eca24eb093b111e5dd305666f3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100612.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f3dfda981816abc953cd6644d6607fc7bc01fa69",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f3dfda981816abc953cd6644d6607fc7bc01fa69"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100613.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ce6603e2a4041c755ba17032c12c43d75b670735",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ce6603e2a4041c755ba17032c12c43d75b670735"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100614.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "42fa2193f43c4920931da575d4a70897c79e4ae8",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/42fa2193f43c4920931da575d4a70897c79e4ae8"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100615.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "29648943eafe5d85c115145dafca7a95af40c6dd",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/29648943eafe5d85c115145dafca7a95af40c6dd"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100616.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cc8e6321cd36c0c599f5df59d25ad1379b3d5d8b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cc8e6321cd36c0c599f5df59d25ad1379b3d5d8b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100617.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9d03d2b6cda9fc65ac4f8bb42fa25456df811afc",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9d03d2b6cda9fc65ac4f8bb42fa25456df811afc"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100618.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "32d753083b6c144fd69ea2640afedae80cae91c0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/32d753083b6c144fd69ea2640afedae80cae91c0"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100619.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4cef9c76f203c652e10489b0ea8aaa1749979202",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4cef9c76f203c652e10489b0ea8aaa1749979202"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100620.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "40c5846932dc5acb4c341854d50a29ee7b336d13",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/40c5846932dc5acb4c341854d50a29ee7b336d13"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100621.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4f680c54cd21046b0978e5e7609dc7f113817364",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4f680c54cd21046b0978e5e7609dc7f113817364"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100622.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "07da4228d5883b4c314a81833a0d0fe6f835656b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/07da4228d5883b4c314a81833a0d0fe6f835656b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231006/2023100623.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "75d0305ed57a380a3acaacc1b5f1d6985f6e0788",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/75d0305ed57a380a3acaacc1b5f1d6985f6e0788"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "b08323b4369a3f8d44f883b84fd99e96a9ca3790",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/b08323b4369a3f8d44f883b84fd99e96a9ca3790"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100700.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b7357b16e7cb6d710e6c0f3b28b363680bd54731",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b7357b16e7cb6d710e6c0f3b28b363680bd54731"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100701.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5ce9fc6d926b0eaaf9b3ac10ed3e27d3a0147533",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5ce9fc6d926b0eaaf9b3ac10ed3e27d3a0147533"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100702.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "167c8b2033f061175e5a8903683e9ca3a35979c9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/167c8b2033f061175e5a8903683e9ca3a35979c9"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100703.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "04fbada2d4004c446200764616aaf22d74ec07f1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/04fbada2d4004c446200764616aaf22d74ec07f1"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100704.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2bd23ee12b5888fabcbb99a67e7db1b6274cf6ad",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2bd23ee12b5888fabcbb99a67e7db1b6274cf6ad"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100705.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2d9af51b74be5d44b1f68bfec6fbe478d05019df",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2d9af51b74be5d44b1f68bfec6fbe478d05019df"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100706.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "61fc4b314c38ee74a21a8b4b11105b23bea31a02",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/61fc4b314c38ee74a21a8b4b11105b23bea31a02"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100707.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "eeb644c97bcd0fdb9b0e88d2b858b819b40f557f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/eeb644c97bcd0fdb9b0e88d2b858b819b40f557f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100708.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "91cb4d83a983de75b823a1c1e609f8f18ad15324",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/91cb4d83a983de75b823a1c1e609f8f18ad15324"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100709.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "66f3b688d57a8b4157dc20409431e7bd35f5ef26",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/66f3b688d57a8b4157dc20409431e7bd35f5ef26"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100710.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "355dd8b9ee050fa78a84c9fb751bb0867188f000",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/355dd8b9ee050fa78a84c9fb751bb0867188f000"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100711.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "24b1ce6c524c517d9f56bd3d49e4076401731197",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/24b1ce6c524c517d9f56bd3d49e4076401731197"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100712.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0e8f0f6912e4c11be92bad3e19782018681c9cf9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0e8f0f6912e4c11be92bad3e19782018681c9cf9"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100713.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "086c9561125f153a60c947b167a26651b8dcc291",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/086c9561125f153a60c947b167a26651b8dcc291"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100714.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1456bf8639798521eb1e9acc9c24725c73d747ef",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1456bf8639798521eb1e9acc9c24725c73d747ef"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100715.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "25e4dd1c7d5a7e84fb99281861f71b1852a89be3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/25e4dd1c7d5a7e84fb99281861f71b1852a89be3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100716.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "eee767b6bb560189c4e57fe6768107563798de75",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/eee767b6bb560189c4e57fe6768107563798de75"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100717.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f82743739595366ae1543a604386740c54198aea",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f82743739595366ae1543a604386740c54198aea"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100718.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "da985294bb860d0d96200012b6a7b6521d0840ad",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/da985294bb860d0d96200012b6a7b6521d0840ad"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100719.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6bdbbf5a5f3c925c0e4d096cc079169e35ef14b7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6bdbbf5a5f3c925c0e4d096cc079169e35ef14b7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100720.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9307591dfe99e35d41eeb0d0b664dc7d873571a0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9307591dfe99e35d41eeb0d0b664dc7d873571a0"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100721.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9db46549754e8bb227191d4a0953712fe6caeebb",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9db46549754e8bb227191d4a0953712fe6caeebb"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100722.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "41edff0e6634bdc0c265552381bed138c30b3cca",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/41edff0e6634bdc0c265552381bed138c30b3cca"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231007/2023100723.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "045921830e6d9ce34a347f19ae54b4b35812949e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/045921830e6d9ce34a347f19ae54b4b35812949e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "7c8b45b3c4aea068dccb54354b84601da58339fa",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/7c8b45b3c4aea068dccb54354b84601da58339fa"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100800.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "73a509d13789a024d4f819ac13bb0a9600e6c76d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/73a509d13789a024d4f819ac13bb0a9600e6c76d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100801.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7e6693124f03225a2e29fae9268565476cfa7ab7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7e6693124f03225a2e29fae9268565476cfa7ab7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100802.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "29ea9b04b01c478bd134b22cc1a4832be98ca1b9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/29ea9b04b01c478bd134b22cc1a4832be98ca1b9"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100803.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "dbcf1311acd16eca0e8718bd3a64bf26d325c989",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/dbcf1311acd16eca0e8718bd3a64bf26d325c989"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100804.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "acde2a302f429a62acf63c149dad1aa1df5f237f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/acde2a302f429a62acf63c149dad1aa1df5f237f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100805.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e68a9bdc27627f78607bd65db8f796b84e0f7ad3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e68a9bdc27627f78607bd65db8f796b84e0f7ad3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100806.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ecace9b0a074983fb7bcec1bb982b037cac6404d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ecace9b0a074983fb7bcec1bb982b037cac6404d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100807.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f3bf86e05e48b8747daa85b07bd93c1ad613f0b7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f3bf86e05e48b8747daa85b07bd93c1ad613f0b7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100808.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4bdbcd9eac30e98a2e5836a0801996fddae30263",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4bdbcd9eac30e98a2e5836a0801996fddae30263"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100809.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e313e1d494fef4ffb9722ea0ae30ddc489399e00",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e313e1d494fef4ffb9722ea0ae30ddc489399e00"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100810.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "48faf1e36a7317e6552b1dacface2aa50f0407e8",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/48faf1e36a7317e6552b1dacface2aa50f0407e8"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100811.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3975ab6e954492f51f4d110bcaa65659448fa901",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3975ab6e954492f51f4d110bcaa65659448fa901"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100812.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5c28eeb35d152f37740899daf306ad4539d122e2",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5c28eeb35d152f37740899daf306ad4539d122e2"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100813.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f48b08853e1075ffcbfd0670554e1fd3cfb02ba5",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f48b08853e1075ffcbfd0670554e1fd3cfb02ba5"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100814.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4016099563701d37688553c49521b854d9e05967",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4016099563701d37688553c49521b854d9e05967"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100815.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0d50d20bd03959ac7459ccb2f4114f1256ff8ff3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0d50d20bd03959ac7459ccb2f4114f1256ff8ff3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100816.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3381c5f0eb17062f37eeb83eda3a97d7638433f6",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3381c5f0eb17062f37eeb83eda3a97d7638433f6"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100817.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b970f91e8d2c2337ed7ea8bc6117dfb9dd417cc6",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b970f91e8d2c2337ed7ea8bc6117dfb9dd417cc6"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100818.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6177002fb3f737a9052a5c81a39e3ea0dc5b3823",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6177002fb3f737a9052a5c81a39e3ea0dc5b3823"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100819.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "37084992cca32787e36c354b4f56e015f83c07c3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/37084992cca32787e36c354b4f56e015f83c07c3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100820.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "482f506e4eb13873832a16a524ebe2d42ce4d745",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/482f506e4eb13873832a16a524ebe2d42ce4d745"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100821.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9a7df4ed09ffbe2c84d1b55a53f195fdd3fdab28",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9a7df4ed09ffbe2c84d1b55a53f195fdd3fdab28"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100822.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9a0c562df31e9e33f6a4b78b4554087496881507",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9a0c562df31e9e33f6a4b78b4554087496881507"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231008/2023100823.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7b2dfd9ea33303e0cc0dfbc1bdc29cabb1b1a71d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7b2dfd9ea33303e0cc0dfbc1bdc29cabb1b1a71d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "fe55dd87678143a284c7e09fcd06a2d45d98635e",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/fe55dd87678143a284c7e09fcd06a2d45d98635e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100900.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4027b9cf65330e349e9e858a6b2c728b8bf219f7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4027b9cf65330e349e9e858a6b2c728b8bf219f7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100901.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "aaebf96dfb15fad33448bbac23faadc6c1fd773b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/aaebf96dfb15fad33448bbac23faadc6c1fd773b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100902.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e0473423ec62ba97ba2e46296494e3a936ba3577",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e0473423ec62ba97ba2e46296494e3a936ba3577"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100903.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "735f34a7dbc1061450dc7f982d49c6e828d8b314",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/735f34a7dbc1061450dc7f982d49c6e828d8b314"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100904.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e1477f4e8fd2bfff751b593c1fbdc8d6d552ff8e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e1477f4e8fd2bfff751b593c1fbdc8d6d552ff8e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100905.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "26b8afca48afd870f63aa00505b6038db125fbdf",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/26b8afca48afd870f63aa00505b6038db125fbdf"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100906.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e09d9bbb46b994f5c4a5938348f505535efa9351",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e09d9bbb46b994f5c4a5938348f505535efa9351"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100907.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b81096673beb4cce6e7a4442307f561e2b8be1f7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b81096673beb4cce6e7a4442307f561e2b8be1f7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100908.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "19ea8bd389109cad1c753d751a8267527b0f275b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/19ea8bd389109cad1c753d751a8267527b0f275b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100909.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a5281c961b6818e41fe9cde5dd7ec8bcdb7be05e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a5281c961b6818e41fe9cde5dd7ec8bcdb7be05e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100910.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5ea4cae26fee446b4d0cb5a0c896149a502e5000",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5ea4cae26fee446b4d0cb5a0c896149a502e5000"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100911.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c57fd033dbb6917f9382a43519f097c4c55ab904",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c57fd033dbb6917f9382a43519f097c4c55ab904"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100912.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "599ef41cb5d3e13fdeaedf7b01f66a092f13ff44",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/599ef41cb5d3e13fdeaedf7b01f66a092f13ff44"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100913.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "61e06620bb62535e732a95403c53b87410324ac3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/61e06620bb62535e732a95403c53b87410324ac3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100914.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "83bb5836f336fb2c8a659963d611d457048d926c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/83bb5836f336fb2c8a659963d611d457048d926c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100915.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f9543eb57460b896cf282c6587760ab7bb483027",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f9543eb57460b896cf282c6587760ab7bb483027"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100916.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "26f3401f6c9751483565573524f1ec7a0db2d214",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/26f3401f6c9751483565573524f1ec7a0db2d214"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100917.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9d62c2fbc4a7e4e33e397efdcfc7b8758b0c5090",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9d62c2fbc4a7e4e33e397efdcfc7b8758b0c5090"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100918.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ea741d88a6a48036b64af6fddd9c289d724bec36",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ea741d88a6a48036b64af6fddd9c289d724bec36"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100919.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8e09634eb7cd51aa87449ac6cab97099f0d83bdc",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8e09634eb7cd51aa87449ac6cab97099f0d83bdc"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100920.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7fc13bce4898deeec75a28569d779bdfb9800524",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7fc13bce4898deeec75a28569d779bdfb9800524"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100921.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0c329168d6d571df70f5bcab6d7114a082b344c2",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0c329168d6d571df70f5bcab6d7114a082b344c2"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100922.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9271361af2145d84aaf65b232d3a46dcbfca499d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9271361af2145d84aaf65b232d3a46dcbfca499d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231009/2023100923.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d49fd6cc29e8639c67f42257df2e242ec3454829",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d49fd6cc29e8639c67f42257df2e242ec3454829"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "44fa12dd9c45fe09167e0d0de59fe85b3e4bf583",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/44fa12dd9c45fe09167e0d0de59fe85b3e4bf583"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101000.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4614ee4cfb6675ffa16993133c42e98cd13009e4",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4614ee4cfb6675ffa16993133c42e98cd13009e4"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101001.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1894cf950840e11b9da1aa53d880e9bd6216ed89",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1894cf950840e11b9da1aa53d880e9bd6216ed89"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101002.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e93b72f8394f0267dba43539d17c63376e0174f2",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e93b72f8394f0267dba43539d17c63376e0174f2"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101003.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6e72fdd77370419f8929e45b336f16de861c1fd9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6e72fdd77370419f8929e45b336f16de861c1fd9"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101004.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c0338fd677d31dd54fcba77c0ba5b3851ae3c369",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c0338fd677d31dd54fcba77c0ba5b3851ae3c369"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101005.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9a413a666a36cfb2fee3607e587d26bc0eb06780",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9a413a666a36cfb2fee3607e587d26bc0eb06780"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101006.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "69b6b1af642fc7ab8e295629f85b714fe53572aa",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/69b6b1af642fc7ab8e295629f85b714fe53572aa"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101007.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "95f33608308f6de64af9ec02665a05b4ac4d48af",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/95f33608308f6de64af9ec02665a05b4ac4d48af"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101008.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fabf37dbdc430219e2f7d9cb196c1862f319622b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fabf37dbdc430219e2f7d9cb196c1862f319622b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101009.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a93fa5d48d0390880a699002f4a9a2df4fe520e8",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a93fa5d48d0390880a699002f4a9a2df4fe520e8"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101010.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b207e71fed3f9c7107fefbd2fa0bdac443a83c05",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b207e71fed3f9c7107fefbd2fa0bdac443a83c05"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101011.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d14d8453d5a37d84d62e89b7ceed8fd5ed0d891d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d14d8453d5a37d84d62e89b7ceed8fd5ed0d891d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101012.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6a3fc48e5197c3802334f1b6c65b10f251d388bf",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6a3fc48e5197c3802334f1b6c65b10f251d388bf"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101013.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "79f7429e09f9e8740a47ebaa88492a63c6b3c027",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/79f7429e09f9e8740a47ebaa88492a63c6b3c027"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101014.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2119030bca0f6ad035ed0b4d90f862b2905eefcb",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2119030bca0f6ad035ed0b4d90f862b2905eefcb"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101015.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "84f586799c6f6a38439f8e848c0f373fe83d08f5",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/84f586799c6f6a38439f8e848c0f373fe83d08f5"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101016.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "58b3c271fa7b81e8f92d6ff381a6bda0077d8a1a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/58b3c271fa7b81e8f92d6ff381a6bda0077d8a1a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101017.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a81bdab3ed61d3131b06d5136cf45ad7c5a2713e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a81bdab3ed61d3131b06d5136cf45ad7c5a2713e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101018.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2284064714ee83ba35dd080220c8cce7f4d627e6",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2284064714ee83ba35dd080220c8cce7f4d627e6"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101019.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc4520e40a3a644f75f9df5d48f68a00f43b2bcd",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc4520e40a3a644f75f9df5d48f68a00f43b2bcd"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101020.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2efb7f1e80ad0b6b62be772469bc73b0d5028a24",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2efb7f1e80ad0b6b62be772469bc73b0d5028a24"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101021.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5916fe715627aa1e2d6d4f3f1b788de59a3e7da5",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5916fe715627aa1e2d6d4f3f1b788de59a3e7da5"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101022.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4ee8b1040b4405472ba2e996ae9d268417f8d020",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4ee8b1040b4405472ba2e996ae9d268417f8d020"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231010/2023101023.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "202435d527c1be3bd2d38cc92c944349311da645",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/202435d527c1be3bd2d38cc92c944349311da645"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "98f9ae1de19859fc5cf05d9552353964e072117d",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/98f9ae1de19859fc5cf05d9552353964e072117d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101100.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b4be9ba4948a9288e3c54aed1dfc906b8770a02f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b4be9ba4948a9288e3c54aed1dfc906b8770a02f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101101.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9639ed95ec19a2aef0796ca7bc100c681e708b64",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9639ed95ec19a2aef0796ca7bc100c681e708b64"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101102.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "de46351f71173fe339f09bd67c738a73177d82d2",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/de46351f71173fe339f09bd67c738a73177d82d2"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101103.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a6538c4056c06524212fb2832fbb3851b99c2d1d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a6538c4056c06524212fb2832fbb3851b99c2d1d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101104.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "14253bc34b8a8b44b035d101d1aba8cd71b615b5",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/14253bc34b8a8b44b035d101d1aba8cd71b615b5"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101105.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2d5613056295e36b077bdb0192539d915297a249",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2d5613056295e36b077bdb0192539d915297a249"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101106.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4822af7fb0ac3ca13a71e39c1d9a084acdc18be2",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4822af7fb0ac3ca13a71e39c1d9a084acdc18be2"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101107.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f03a457a02b5de39d5f072a4033e163d68bbb0c3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f03a457a02b5de39d5f072a4033e163d68bbb0c3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101108.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e9a4b0e845270879c2cf05f6cbbc80267442101e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e9a4b0e845270879c2cf05f6cbbc80267442101e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101109.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fcdc08ce8bab0c61dc175929fdfc37708eb469f9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fcdc08ce8bab0c61dc175929fdfc37708eb469f9"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101110.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "604c9f2e704a054f2f1874decb0b3149f04a4ba3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/604c9f2e704a054f2f1874decb0b3149f04a4ba3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101111.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "db71c1d08a773cb3239c60ba323a033663993b95",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/db71c1d08a773cb3239c60ba323a033663993b95"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101112.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6f6bf4eb80612d0ed7fd4be0978733cb9ae6a24c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6f6bf4eb80612d0ed7fd4be0978733cb9ae6a24c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101113.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "50008554901e1aef0ef2f8227e93d0bc5608f08b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/50008554901e1aef0ef2f8227e93d0bc5608f08b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101114.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f3745d70f09f51ee39e65ce51228ab4ed0195ad1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f3745d70f09f51ee39e65ce51228ab4ed0195ad1"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101115.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8b474dcbcf62be277d7680017af5559cec1a0252",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8b474dcbcf62be277d7680017af5559cec1a0252"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101116.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2910d1cc483ab27e15d53651823a95b682a3c358",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2910d1cc483ab27e15d53651823a95b682a3c358"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101117.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "599935238ecb9df918bb675b88ab1a6b4bd74c0a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/599935238ecb9df918bb675b88ab1a6b4bd74c0a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101118.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0a654d2e99c6f9ee6e2b4039bca0b3b6f5cab18e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0a654d2e99c6f9ee6e2b4039bca0b3b6f5cab18e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101119.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7cb410ae45cf74241d8ee821868a968961b26fae",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7cb410ae45cf74241d8ee821868a968961b26fae"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101120.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e287bf136176bf241145d0c2be0a2ff4b02ca488",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e287bf136176bf241145d0c2be0a2ff4b02ca488"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101121.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a36c2f07351626e3bffa60525fdab144dd1561e3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a36c2f07351626e3bffa60525fdab144dd1561e3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101122.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "675462422b504a020b9be6e8b9857ed1a93dfd4e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/675462422b504a020b9be6e8b9857ed1a93dfd4e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231011/2023101123.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "96e1d0a83f3652643da080287f2f830084ef27d1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/96e1d0a83f3652643da080287f2f830084ef27d1"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "d082376da6e7af2aa5389f6f6e6dd5d5f234e067",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/d082376da6e7af2aa5389f6f6e6dd5d5f234e067"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101200.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6e08c81171f31594ea7218134afd68b0b763ff7f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6e08c81171f31594ea7218134afd68b0b763ff7f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101201.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cfdb7bbf4b2e73b9cbd8c3c77d0978a5721604a7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cfdb7bbf4b2e73b9cbd8c3c77d0978a5721604a7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101202.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7cf48ceaf5640978c6c7036c55b68df2b6804137",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7cf48ceaf5640978c6c7036c55b68df2b6804137"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101203.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "74530a08cdbecb49e6a1a7562dccf17c5234cea4",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/74530a08cdbecb49e6a1a7562dccf17c5234cea4"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101204.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "41f444a722308040167801c9d44458454c606b07",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/41f444a722308040167801c9d44458454c606b07"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101205.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "435cc4c776b5a49a74a30967c43e35d5302ef03a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/435cc4c776b5a49a74a30967c43e35d5302ef03a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101206.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3d5281f4ebe1a287a68098ca6904379c7552b515",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3d5281f4ebe1a287a68098ca6904379c7552b515"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101207.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "54562bb3e8b983ef625a7c88fe7facd88f7b31e3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/54562bb3e8b983ef625a7c88fe7facd88f7b31e3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101208.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a5d6b6a643571f071dae705870a7bade6f23219c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a5d6b6a643571f071dae705870a7bade6f23219c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101209.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "14b08627c4bd407ac0eba7d675bfb390749f9199",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/14b08627c4bd407ac0eba7d675bfb390749f9199"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101210.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d207ac011865ccb9a5c32e3977ba318e8a6307a9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d207ac011865ccb9a5c32e3977ba318e8a6307a9"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101211.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9bfa54f3a9b06e8d91ff98d115cab5f357715d17",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9bfa54f3a9b06e8d91ff98d115cab5f357715d17"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101212.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e17c38b8898de13a6bf40865380ab5b9372c9554",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e17c38b8898de13a6bf40865380ab5b9372c9554"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101213.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3031576efeef637697a74044e0982fab309befc7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3031576efeef637697a74044e0982fab309befc7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101214.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "38ca4e8a772f77399cb56bf764c5b78a4fe22d0b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/38ca4e8a772f77399cb56bf764c5b78a4fe22d0b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101215.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "04b6956758ba686c664c150441621237b545f72e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/04b6956758ba686c664c150441621237b545f72e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101216.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fc45044cfb0f0b15ab790d2cdda5de12fc2fe77d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fc45044cfb0f0b15ab790d2cdda5de12fc2fe77d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101217.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "600bd5de944ffa2d2ae867064a085d1e12468f82",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/600bd5de944ffa2d2ae867064a085d1e12468f82"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101218.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d3e41a23670a69eba92a0666ed9f35d037210219",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d3e41a23670a69eba92a0666ed9f35d037210219"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101219.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "09c7496c4d18c7e9c64ae461e4350c64c914846a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/09c7496c4d18c7e9c64ae461e4350c64c914846a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101220.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c0f65a15474b6a1c30e67a846f2864f870dcb098",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c0f65a15474b6a1c30e67a846f2864f870dcb098"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101221.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8db8688903b2dc9769ab03f62c1eeddd3fbdaa07",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8db8688903b2dc9769ab03f62c1eeddd3fbdaa07"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101222.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b9a5ea1541a7ca1831ddc57e50eb8b899e6d95a9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b9a5ea1541a7ca1831ddc57e50eb8b899e6d95a9"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231012/2023101223.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "09678d9521f961269a4868e69b8084b3e9598014",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/09678d9521f961269a4868e69b8084b3e9598014"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "3e3e0c44dd417a8b4f7627cdc4ef1e0c60b4f67a",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/3e3e0c44dd417a8b4f7627cdc4ef1e0c60b4f67a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101300.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e2e451cbbfa36ae9dc7d51a4178b929143b10c62",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e2e451cbbfa36ae9dc7d51a4178b929143b10c62"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101301.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f4fb3bdd532f4161e4e173ccd5c8ceaec6a8c822",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f4fb3bdd532f4161e4e173ccd5c8ceaec6a8c822"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101302.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "19ac88dccbaf8342aa25821e5578c5773c703dd4",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/19ac88dccbaf8342aa25821e5578c5773c703dd4"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101303.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "47326d145cef2d5b118d52e2ff30df1706b9e110",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/47326d145cef2d5b118d52e2ff30df1706b9e110"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101304.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a141cb381a7fcac6d75be0d7c40a2a9fb2287fbd",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a141cb381a7fcac6d75be0d7c40a2a9fb2287fbd"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101305.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9ab68a05c3062323f7dca62845c5cea759edcfc0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9ab68a05c3062323f7dca62845c5cea759edcfc0"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101306.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "65ac2105faaa446741070ab443e76b7b6f28be26",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/65ac2105faaa446741070ab443e76b7b6f28be26"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101307.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f9898c9c39b41d7c1481c86baa698eda7c46e688",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f9898c9c39b41d7c1481c86baa698eda7c46e688"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101308.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "03fdce4e251b50ee06444506f1d25ec507613a28",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/03fdce4e251b50ee06444506f1d25ec507613a28"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101309.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b0d866606f08621f622f05f76989cbcc131b4124",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b0d866606f08621f622f05f76989cbcc131b4124"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101310.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cada3f3e06fcbaa8ea5c4bc863d6bc609ac78e82",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cada3f3e06fcbaa8ea5c4bc863d6bc609ac78e82"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101311.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fbb39567034f6d3f0807dfafe44cef8fda89325a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fbb39567034f6d3f0807dfafe44cef8fda89325a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101312.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1b8b25a060a3760a22e59f5600c66c7b18dc4ceb",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1b8b25a060a3760a22e59f5600c66c7b18dc4ceb"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101313.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6357b8af57512848f113904386a2a208241d8d26",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6357b8af57512848f113904386a2a208241d8d26"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101314.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ab56223f51b77acbdc6de85d2938f7d9e355f5dc",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ab56223f51b77acbdc6de85d2938f7d9e355f5dc"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101315.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fbb47e4718019cb538c7b67f1215357c57866fff",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fbb47e4718019cb538c7b67f1215357c57866fff"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101316.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "40a5630566e92fa85f40d8971a157e07ca1f6e5c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/40a5630566e92fa85f40d8971a157e07ca1f6e5c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101317.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b17f3d2556c160b3ada6b8f89b4b344618c48f25",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b17f3d2556c160b3ada6b8f89b4b344618c48f25"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101318.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4be497b7ad7f9ef9ea44e4f5472f63c2b51f1367",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4be497b7ad7f9ef9ea44e4f5472f63c2b51f1367"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101319.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ef823c0506053d0ef8347ac568badc9f79db6c84",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ef823c0506053d0ef8347ac568badc9f79db6c84"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101320.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "abc0696859786c428de7b68d473943fae4a27c9f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/abc0696859786c428de7b68d473943fae4a27c9f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101321.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b181e6c0d92ae6ae6a7e3836a6b69190a6ff33eb",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b181e6c0d92ae6ae6a7e3836a6b69190a6ff33eb"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101322.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "04a47422b425feea4674f37b2415ad6e49f50cf3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/04a47422b425feea4674f37b2415ad6e49f50cf3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231013/2023101323.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6091e2d0e47ec18ef7904c84c86413159dc86951",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6091e2d0e47ec18ef7904c84c86413159dc86951"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "100c566837141022869ff810d7bf1b02aea98f72",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/100c566837141022869ff810d7bf1b02aea98f72"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101400.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d7dd34df4be543a2deec9a710bce8bc9b886b2b5",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d7dd34df4be543a2deec9a710bce8bc9b886b2b5"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101401.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c0364eab51f555f789524436b65a38c8fc3a1354",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c0364eab51f555f789524436b65a38c8fc3a1354"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101402.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5b028a203355dd4c2f2af254b9a27e1af80e050b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5b028a203355dd4c2f2af254b9a27e1af80e050b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101403.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2b6ab663571fad9a220ee6280de343265c508369",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2b6ab663571fad9a220ee6280de343265c508369"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101404.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c2a5f40cc782aa7031caa7bd226dbcb08662998d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c2a5f40cc782aa7031caa7bd226dbcb08662998d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101405.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "595a54c47c4d933491be863ec837375f37974e75",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/595a54c47c4d933491be863ec837375f37974e75"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101406.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4487f620b1954209ecad9c2c189d0172db31ee28",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4487f620b1954209ecad9c2c189d0172db31ee28"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101407.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b15885f2774ef20b9aa7ae30a79b92aa52e19e3f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b15885f2774ef20b9aa7ae30a79b92aa52e19e3f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101408.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9dcb051cf9839c46aff160d68aad8a7452d80f67",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9dcb051cf9839c46aff160d68aad8a7452d80f67"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101409.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "42c7d91ada0fe250c3232591adaf76350c0a6e1d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/42c7d91ada0fe250c3232591adaf76350c0a6e1d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101410.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8aa838d0881336eb8c9d0c825fea78b691f62c0f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8aa838d0881336eb8c9d0c825fea78b691f62c0f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101411.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "24660c95f4b26fe2f89d25be5742f0d2183ac87e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/24660c95f4b26fe2f89d25be5742f0d2183ac87e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101412.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "27cbceeada013956881c5170f550d5de08bdd3d0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/27cbceeada013956881c5170f550d5de08bdd3d0"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101413.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f36af8b20d21d374e4e0d0da756f67682282bbab",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f36af8b20d21d374e4e0d0da756f67682282bbab"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101414.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "96b3f6afc153ef2e2f3a6b10d24e289a9dbb8f30",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/96b3f6afc153ef2e2f3a6b10d24e289a9dbb8f30"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101415.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f61f242e1f665e3dfbe0f8bc07cc3d3bccc7cd08",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f61f242e1f665e3dfbe0f8bc07cc3d3bccc7cd08"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101416.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "43166cbde9ec7e1043287f587f4a2305cac0cbf0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/43166cbde9ec7e1043287f587f4a2305cac0cbf0"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101417.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f0b1bdc29bec9f90a10d2d5035ef1c8d8ccdcb26",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f0b1bdc29bec9f90a10d2d5035ef1c8d8ccdcb26"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101418.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d6252225b11da8364b28287aba062c2f646929bd",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d6252225b11da8364b28287aba062c2f646929bd"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101419.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5938679df7d478ce0dd57df187e7b7ca35959420",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5938679df7d478ce0dd57df187e7b7ca35959420"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101420.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2fd8aa9f888515ef33a28bfffe31c2e195fe4efc",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2fd8aa9f888515ef33a28bfffe31c2e195fe4efc"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101421.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d6e18c2ca640ceda5c145333e792d401e4246e2d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d6e18c2ca640ceda5c145333e792d401e4246e2d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101422.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "76132ec8f2c172bbd991f7ecf1e0f2287681e105",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/76132ec8f2c172bbd991f7ecf1e0f2287681e105"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231014/2023101423.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cc2bc1b0f37c4da0f7b540c0ec092136759a3c71",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cc2bc1b0f37c4da0f7b540c0ec092136759a3c71"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "5f4c41c5cdfc9ba4041fde5b559dd8b94691ff4f",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/5f4c41c5cdfc9ba4041fde5b559dd8b94691ff4f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101500.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "10e5e667773780779617fba19a594714d0c7d9e9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/10e5e667773780779617fba19a594714d0c7d9e9"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101501.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e11405159fa4c61d789b5042391ae3ea5c95df5d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e11405159fa4c61d789b5042391ae3ea5c95df5d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101502.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c3d78b76312fcf8b18ff3c878abf8c02bc09cdd3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c3d78b76312fcf8b18ff3c878abf8c02bc09cdd3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101503.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1294e176d8155c076c6cac383deee65cbf869e33",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1294e176d8155c076c6cac383deee65cbf869e33"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101504.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "27e56116996508db07ddf020acd098957353e012",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/27e56116996508db07ddf020acd098957353e012"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101505.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7e297abfa48566db5d73978fe26193d901f42293",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7e297abfa48566db5d73978fe26193d901f42293"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101506.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f6b8f389ae7fee21f440d816ea97f87fead17538",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f6b8f389ae7fee21f440d816ea97f87fead17538"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101507.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "dbe664964258cf469522fd6fb5fff4fbde2a9e5e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/dbe664964258cf469522fd6fb5fff4fbde2a9e5e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101508.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c2612834e395d50dc1135d0313fe9dd3bc511864",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c2612834e395d50dc1135d0313fe9dd3bc511864"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101509.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "67f13e191ca3cad4afb6940a650b7cd3b843d56c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/67f13e191ca3cad4afb6940a650b7cd3b843d56c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101510.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c0b3e8e34dd8369f8ef37ce995853c5f4c8a7cff",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c0b3e8e34dd8369f8ef37ce995853c5f4c8a7cff"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101511.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8f3c817ac74267aae8b68f9e5ec7a594b7dd6aad",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8f3c817ac74267aae8b68f9e5ec7a594b7dd6aad"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101512.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc6b6dc140639ebfd79d57390652498470b023ca",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc6b6dc140639ebfd79d57390652498470b023ca"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101513.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7ea1ed4231dad5047f62cd28dd2aa7e1e26dd97d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7ea1ed4231dad5047f62cd28dd2aa7e1e26dd97d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101514.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9f64328f576ca4a98a23d88838fc3d1a15fdf51e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9f64328f576ca4a98a23d88838fc3d1a15fdf51e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101515.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "325df491ba6b924775fe0bac6cf5b7b8f3965b7b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/325df491ba6b924775fe0bac6cf5b7b8f3965b7b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101516.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e281c02dee9b9dff95f7d89c45fc03d8f66e8716",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e281c02dee9b9dff95f7d89c45fc03d8f66e8716"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101517.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ec5c931786180249d60c3e3c7923f94188eed449",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ec5c931786180249d60c3e3c7923f94188eed449"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101518.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ca67c242c62e33c5ddc03db66364ccab79a5323b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ca67c242c62e33c5ddc03db66364ccab79a5323b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101519.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "97f75f2b94845e0b35e49db3bd9d89f4b6c8c4f3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/97f75f2b94845e0b35e49db3bd9d89f4b6c8c4f3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101520.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8edeb44b59ab5cfd775faf44a6bc9b6de979cc6d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8edeb44b59ab5cfd775faf44a6bc9b6de979cc6d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101521.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a7759b791234858809b3a3eb5433b2937a51a3e3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a7759b791234858809b3a3eb5433b2937a51a3e3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101522.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5b2aab039d520806dc04d536740f23a88733391f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5b2aab039d520806dc04d536740f23a88733391f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231015/2023101523.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "650eeccbca4b2c1bda3eab6f2cc94f900f6b57cc",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/650eeccbca4b2c1bda3eab6f2cc94f900f6b57cc"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "bc4c92f32fa75c07d5137c63d9ed2245ed22026c",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/bc4c92f32fa75c07d5137c63d9ed2245ed22026c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101600.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d525efc6ebf8b56d860f2d146f74556ac11a0b00",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d525efc6ebf8b56d860f2d146f74556ac11a0b00"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101601.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "989c53f9ec22a7f49dc0dd7803db5bb568649675",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/989c53f9ec22a7f49dc0dd7803db5bb568649675"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101602.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3ce6d28693ecbb3d08277ddf28a32950104986f7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3ce6d28693ecbb3d08277ddf28a32950104986f7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101603.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4eb66e30d68e21d3858f6bcf84b279bbb6738d95",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4eb66e30d68e21d3858f6bcf84b279bbb6738d95"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101604.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "04b4b4f65e4a1e3749d9d4dd668eaa8f3bc48060",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/04b4b4f65e4a1e3749d9d4dd668eaa8f3bc48060"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101605.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3c1a8d9e2a618badf820e8b1d632f97424914700",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3c1a8d9e2a618badf820e8b1d632f97424914700"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101606.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "257944844c1d6d33296d93c6094d167087ea0636",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/257944844c1d6d33296d93c6094d167087ea0636"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101607.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "98a35cea918626f4083d8906763c00bd1a8c451d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/98a35cea918626f4083d8906763c00bd1a8c451d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101608.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0b171788bfcedbf228cd53b91d0c32046fd17b01",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0b171788bfcedbf228cd53b91d0c32046fd17b01"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101609.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fb09c40778a8f3975808219c43def47033b8f798",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fb09c40778a8f3975808219c43def47033b8f798"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101610.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3c130ca2451951cefd3c2f4d9fd9f6e4e6cb969b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3c130ca2451951cefd3c2f4d9fd9f6e4e6cb969b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101611.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "553a08f24ccd5d63d759854509fbade6ea9516ca",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/553a08f24ccd5d63d759854509fbade6ea9516ca"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101612.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0552cf98b5c99748b3e4111280e754f3c30858c1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0552cf98b5c99748b3e4111280e754f3c30858c1"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101613.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3a04dad828639fe005f87247f1b38534492616c9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3a04dad828639fe005f87247f1b38534492616c9"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101614.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f0208373e68c731f8e32e15320e2e137cf0ca61d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f0208373e68c731f8e32e15320e2e137cf0ca61d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101615.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "112545475bf000f6f6d62288ce57bba525450f4d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/112545475bf000f6f6d62288ce57bba525450f4d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101616.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "01b60462ff472e31bcb1117d21e56e5738875ccf",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/01b60462ff472e31bcb1117d21e56e5738875ccf"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101617.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d205014c8cf46fd3e2dad4b3da4ba6e625b49ed8",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d205014c8cf46fd3e2dad4b3da4ba6e625b49ed8"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101618.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6e176961fec99f2417185ca32c4a663fea13b374",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6e176961fec99f2417185ca32c4a663fea13b374"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101619.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3ce0b101862ce0fdf0270acfc92441a4d46b9dc8",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3ce0b101862ce0fdf0270acfc92441a4d46b9dc8"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101620.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a57cd4b9d4ede7ee6f51538c4883a727a3fc3c5c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a57cd4b9d4ede7ee6f51538c4883a727a3fc3c5c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101621.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0b712db0395457fc90e9154eacdb9cec823cf84b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0b712db0395457fc90e9154eacdb9cec823cf84b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101622.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "70c6e46218b4f62fbc2f6122bfe5b6bfdf1ec52f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/70c6e46218b4f62fbc2f6122bfe5b6bfdf1ec52f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231016/2023101623.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b861a86d8bddb09a0f6fd1102ec9be77ad25251a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b861a86d8bddb09a0f6fd1102ec9be77ad25251a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "e19ede964119abcca745134084368ba404327205",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/e19ede964119abcca745134084368ba404327205"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101700.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6f8ed9fa822b56eceaf96cf69e62afb2893a67f1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6f8ed9fa822b56eceaf96cf69e62afb2893a67f1"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101701.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d8301ea77eae1e295200c1cc07c3bf6525b5484f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d8301ea77eae1e295200c1cc07c3bf6525b5484f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101702.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c233938a9499c5596a137bb73744a54c9fcdeffa",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c233938a9499c5596a137bb73744a54c9fcdeffa"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101703.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "170f3218b8dab9041c5f319b32378d26c1537257",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/170f3218b8dab9041c5f319b32378d26c1537257"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101704.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "afd05da94980c3f3b6ec47800dd7cd2feb589c94",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/afd05da94980c3f3b6ec47800dd7cd2feb589c94"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101705.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c9e11494ef85181c82ace21a409827126256a192",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c9e11494ef85181c82ace21a409827126256a192"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101706.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cef9fee4ec938909070a224df6695c06930c9101",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cef9fee4ec938909070a224df6695c06930c9101"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101707.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1053dbd298d47330982d444c1fb5ca3d7ae748c0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1053dbd298d47330982d444c1fb5ca3d7ae748c0"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101708.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "881b7a736359642b1af306c96ef299b79e0f3147",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/881b7a736359642b1af306c96ef299b79e0f3147"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101709.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8b83356e9493bc3352af583b2e30fafd2c6156c1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8b83356e9493bc3352af583b2e30fafd2c6156c1"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101710.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "13c7f861a0c9b3b3ee5bfb02fe8d1201b56448b3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/13c7f861a0c9b3b3ee5bfb02fe8d1201b56448b3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101711.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3f69a599652d53485f5e4e340fb8849b2b3160f0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3f69a599652d53485f5e4e340fb8849b2b3160f0"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101712.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "061e2e46f115fc6b37d429abaa12044147f60bba",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/061e2e46f115fc6b37d429abaa12044147f60bba"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101713.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "65fd8b97c5624f042b331fb2b0e46a7d5c8f9b23",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/65fd8b97c5624f042b331fb2b0e46a7d5c8f9b23"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101714.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bff6dc307cbeb664acc617411507f64cdaffb9b7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bff6dc307cbeb664acc617411507f64cdaffb9b7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101715.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9fd9e997fc10935d266c8aafd4c8b1260726a3ae",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9fd9e997fc10935d266c8aafd4c8b1260726a3ae"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101716.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5ff2bc584f655f18bd6d31d7d101b462455fb3ea",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5ff2bc584f655f18bd6d31d7d101b462455fb3ea"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101717.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ff999ab2527ae8cea4523ec8a0ef65ca79d8fee3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ff999ab2527ae8cea4523ec8a0ef65ca79d8fee3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101718.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "508e5117a2649b4f22144d6504953102a4518ab1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/508e5117a2649b4f22144d6504953102a4518ab1"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101719.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "11cf50b773ac2da377989035df1d03a3c7d8c5fb",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/11cf50b773ac2da377989035df1d03a3c7d8c5fb"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101720.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b6ccda2060e11139e4c59587abfafe7704d250c0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b6ccda2060e11139e4c59587abfafe7704d250c0"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101721.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1ed6e5af044818a6d987de5e4dd3f6480cca35af",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1ed6e5af044818a6d987de5e4dd3f6480cca35af"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101722.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e436c09c87ea2a00fd7543761fcde6b88ee1c623",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e436c09c87ea2a00fd7543761fcde6b88ee1c623"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231017/2023101723.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5696ecbcf5fa6f17bdcacd825efc364daf8f2e3c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5696ecbcf5fa6f17bdcacd825efc364daf8f2e3c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "090afd1fbc847f415ef039c65eaa578458bf8187",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/090afd1fbc847f415ef039c65eaa578458bf8187"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101800.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d8b37011a1f747bb280f5894412aff776fd2347e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d8b37011a1f747bb280f5894412aff776fd2347e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101801.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "eea45c50ded56c100550214f5c2b584e07da5a7d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/eea45c50ded56c100550214f5c2b584e07da5a7d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101802.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "041c5a26d2652a93b93191645a5c875bb98322f3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/041c5a26d2652a93b93191645a5c875bb98322f3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101803.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8cdcdc3dd7548ee5a59f31ebe04c97242bda6822",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8cdcdc3dd7548ee5a59f31ebe04c97242bda6822"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101804.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3c0c4701ee19475423445d423ccf3e6a3f69b23e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3c0c4701ee19475423445d423ccf3e6a3f69b23e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101805.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3dd9869fa25fb9ce95611951ab00559655dfc06c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3dd9869fa25fb9ce95611951ab00559655dfc06c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101806.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6aa806ed738f0f765c140188f27957dbe01767c7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6aa806ed738f0f765c140188f27957dbe01767c7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101807.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1226fb3e024c6f3dfb8be2660e235eac1ee71e57",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1226fb3e024c6f3dfb8be2660e235eac1ee71e57"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101808.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5c7d03448fe7690d434d0b2ff558bb41b7cb42cf",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5c7d03448fe7690d434d0b2ff558bb41b7cb42cf"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101809.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "522fe04055fad1ac9fc8707ad064ddea6199e710",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/522fe04055fad1ac9fc8707ad064ddea6199e710"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101810.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "930dbf9deab92b37e57038896220d6eb4cc8b186",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/930dbf9deab92b37e57038896220d6eb4cc8b186"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101811.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bebe7923f74dcd02ee431a22aceade51b497b6e2",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bebe7923f74dcd02ee431a22aceade51b497b6e2"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101812.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b2a75d07dbe25ff43362a25ffa69624ddb872484",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b2a75d07dbe25ff43362a25ffa69624ddb872484"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101813.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "32a458fd3286523f0732ab210d906f325f4a4078",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/32a458fd3286523f0732ab210d906f325f4a4078"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101814.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2e801371be8e1382ffa8d86875722d3f1b9a9526",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2e801371be8e1382ffa8d86875722d3f1b9a9526"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101815.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f37095f939d02b7a73ebd78d25223d3746bc86ed",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f37095f939d02b7a73ebd78d25223d3746bc86ed"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101816.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9e61747e5c9c299ed00ddc0672ed43ab9d49dfd3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9e61747e5c9c299ed00ddc0672ed43ab9d49dfd3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101817.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5e0aae05b1010506a2a197ed32a1366515eb21b2",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5e0aae05b1010506a2a197ed32a1366515eb21b2"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101818.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4e7d8a44e9bda872d9aa0feae198f24ba9f69ee0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4e7d8a44e9bda872d9aa0feae198f24ba9f69ee0"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101819.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "78168e0d5c34144c3388ac673ce4d5899a48c03e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/78168e0d5c34144c3388ac673ce4d5899a48c03e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101820.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d34885c03265bb8daa2e772ee7104803a62ceb89",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d34885c03265bb8daa2e772ee7104803a62ceb89"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101821.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "747fa2c97e9bcc04a4d106d26576e77604083e95",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/747fa2c97e9bcc04a4d106d26576e77604083e95"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101822.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e97e8254750d13ee66af98f93920e08431a62730",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e97e8254750d13ee66af98f93920e08431a62730"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231018/2023101823.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "14f9f6cc9bb0a25df52ccc2e3a26bcb32c9dfc7c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/14f9f6cc9bb0a25df52ccc2e3a26bcb32c9dfc7c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "f76b3884e1c81d3943011b0a7f09d5ae9c79717b",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/f76b3884e1c81d3943011b0a7f09d5ae9c79717b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101900.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a9f06e81431b622ea16ad26e63d4641eb7d0d46e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a9f06e81431b622ea16ad26e63d4641eb7d0d46e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101901.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1a8462af44fb4ea1cd34aae48d2cf9b8e4230662",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1a8462af44fb4ea1cd34aae48d2cf9b8e4230662"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101902.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3d7523506b09e2f22330e1f0aa9f2d70a5931195",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3d7523506b09e2f22330e1f0aa9f2d70a5931195"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101903.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f8f1faf0b68b14df06e28e2dbdd0c46a21eb0806",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f8f1faf0b68b14df06e28e2dbdd0c46a21eb0806"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101904.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a7423e0ae518fe9ad485a41a378e1412831381ee",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a7423e0ae518fe9ad485a41a378e1412831381ee"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101905.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4f95df655d4552a372404d92c11a28cdcb1f35d3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4f95df655d4552a372404d92c11a28cdcb1f35d3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101906.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "99b04782a1fb9a54b0afea8be82b130f8535f458",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/99b04782a1fb9a54b0afea8be82b130f8535f458"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101907.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9962a37c5c092fc0e7e0fa2795a3fadbefa818d1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9962a37c5c092fc0e7e0fa2795a3fadbefa818d1"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101908.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7bd3c20651278fb004e270593b9f50d98e58e31e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7bd3c20651278fb004e270593b9f50d98e58e31e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101909.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8d84ba1f34f9f730bf777c62dd6bff4fabb8d2fc",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8d84ba1f34f9f730bf777c62dd6bff4fabb8d2fc"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101910.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ab7b0df78f3dedf5d4061ee39022a20a2ff31912",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ab7b0df78f3dedf5d4061ee39022a20a2ff31912"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101911.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fae3e2a32a38009e919835e3a17ebaf3379e15da",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fae3e2a32a38009e919835e3a17ebaf3379e15da"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101912.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "90878f51b33e05fbe48e16ecd51feb3e18f23435",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/90878f51b33e05fbe48e16ecd51feb3e18f23435"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101913.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "30f44ae6c15c1184fe450d6f4dad75dd57018e99",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/30f44ae6c15c1184fe450d6f4dad75dd57018e99"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101914.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "baf205830dd6fac8fe2a7e8da7a8630e738f301a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/baf205830dd6fac8fe2a7e8da7a8630e738f301a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101915.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4e4cb30541298e1f5e328d9e32a941737125d17f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4e4cb30541298e1f5e328d9e32a941737125d17f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101916.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fcf716a2d26ae44bf177d2ed27334ba4292c99d6",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fcf716a2d26ae44bf177d2ed27334ba4292c99d6"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101917.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0d6d9788b64f79bec01e51fe2afb2c1035c0d42a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0d6d9788b64f79bec01e51fe2afb2c1035c0d42a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101918.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "25982e51395410c9efb6b34c6b9e4961b8201495",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/25982e51395410c9efb6b34c6b9e4961b8201495"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101919.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c05ac96f24b9d45e00889c8f3d1f7e19708468e6",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c05ac96f24b9d45e00889c8f3d1f7e19708468e6"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101920.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6024ed17bbe648564a7f71ad91eca7def964a219",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6024ed17bbe648564a7f71ad91eca7def964a219"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101921.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "df95cf11148442ba020490e810cdc2926443fbb5",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/df95cf11148442ba020490e810cdc2926443fbb5"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101922.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "35996aa2a0ae16830cf6925b2e1a15a7ca4dae51",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/35996aa2a0ae16830cf6925b2e1a15a7ca4dae51"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231019/2023101923.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fcac4c4057e0718f50a907033fe11c9b0432aefc",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fcac4c4057e0718f50a907033fe11c9b0432aefc"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "d88bd67ca473e033ae857ec4caa4d9442bd6583e",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/d88bd67ca473e033ae857ec4caa4d9442bd6583e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102000.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e87a96842221f9ae769f372017bd726b3f32455b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e87a96842221f9ae769f372017bd726b3f32455b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102001.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5d6f631bbff88f634aeb4b7a9669a33354f1b250",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5d6f631bbff88f634aeb4b7a9669a33354f1b250"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102002.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d3bc91f8715326dd7db4b8dcf53f5afd2fab7ea9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d3bc91f8715326dd7db4b8dcf53f5afd2fab7ea9"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102003.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "907e37aa61d1f7d45ddc10afb013038eecd2d584",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/907e37aa61d1f7d45ddc10afb013038eecd2d584"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102004.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fd6f234266200b361addfcd458194a4e534d1844",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fd6f234266200b361addfcd458194a4e534d1844"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102005.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9f45ed201004d15c1052f3458df9f2cec1d227b8",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9f45ed201004d15c1052f3458df9f2cec1d227b8"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102006.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "62e92dd4eca38acda3a235b158ee9f2b1ac4338b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/62e92dd4eca38acda3a235b158ee9f2b1ac4338b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102007.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "48814bcb56883b53e8fc46e61790e6537524bae4",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/48814bcb56883b53e8fc46e61790e6537524bae4"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102008.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc6627519cb78007a1adf503fdff75c5ac0b64a3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc6627519cb78007a1adf503fdff75c5ac0b64a3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102009.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "90de413837fdc47474f5f131894a05b4fdd58a7f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/90de413837fdc47474f5f131894a05b4fdd58a7f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102010.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a974a8590018c3091f7980e61fc14c83482e017d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a974a8590018c3091f7980e61fc14c83482e017d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102011.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a651d855728d6e0e4465acf303df08eb7a346326",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a651d855728d6e0e4465acf303df08eb7a346326"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102012.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b1ac277e20689706731fa1454ed73431bbdf53b5",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b1ac277e20689706731fa1454ed73431bbdf53b5"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102013.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "390b0e085003cf90a10293c60d794b9309d5dbe8",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/390b0e085003cf90a10293c60d794b9309d5dbe8"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102014.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "982818dce6bb38105e1d9734507c0f216908abae",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/982818dce6bb38105e1d9734507c0f216908abae"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102015.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2a42cc6f7d38b8ed32c0e12eb1906a6e967ce83a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2a42cc6f7d38b8ed32c0e12eb1906a6e967ce83a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102016.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fe5bc369b41120cedd729af13ae629c16e92d22b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fe5bc369b41120cedd729af13ae629c16e92d22b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102017.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bc50372bafd5226007a2b9ade0b453fa61f4f454",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bc50372bafd5226007a2b9ade0b453fa61f4f454"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102018.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c9dbb3d2fe1d4d9505752bf2732a805427d595ef",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c9dbb3d2fe1d4d9505752bf2732a805427d595ef"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102019.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "73657239cb9684c4c2d8141df718a43c6deed537",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/73657239cb9684c4c2d8141df718a43c6deed537"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102020.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b052c4c0ed6d2ece0f04ea2a4d47a650b4208b8b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b052c4c0ed6d2ece0f04ea2a4d47a650b4208b8b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102021.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "31b053d49da6c8bd7d2267b2c453f41a3cfa5287",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/31b053d49da6c8bd7d2267b2c453f41a3cfa5287"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102022.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8c6f4a566deb77aa5124bdf678789e0d4697d448",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8c6f4a566deb77aa5124bdf678789e0d4697d448"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231020/2023102023.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "93a3dd016eded91141468d0756fbfcb9e0e5574c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/93a3dd016eded91141468d0756fbfcb9e0e5574c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "83096929894cc84f5e6e1148895100d1acfbbc69",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/83096929894cc84f5e6e1148895100d1acfbbc69"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102100.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "adecb6e4388962337d8abea3c4ed314551faf35f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/adecb6e4388962337d8abea3c4ed314551faf35f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102101.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "79f776d9494ce8bcb60160f5930e38e5c26d25c3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/79f776d9494ce8bcb60160f5930e38e5c26d25c3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102102.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cdaaf7e7d2064f8acb3271a9c11efadaf9ae7fdc",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cdaaf7e7d2064f8acb3271a9c11efadaf9ae7fdc"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102103.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "92787ce93d7f67f2274ef44ae4d8144ebff15da3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/92787ce93d7f67f2274ef44ae4d8144ebff15da3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102104.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "399413b534739223c3dfa28a9cfff8c817fd31a7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/399413b534739223c3dfa28a9cfff8c817fd31a7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102105.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5760f1abbb113e622628f3b320d2b522cbe84436",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5760f1abbb113e622628f3b320d2b522cbe84436"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102106.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d6de785873ce599d1e8d8b47e13c3fef8200fc9c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d6de785873ce599d1e8d8b47e13c3fef8200fc9c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102107.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4f360946bf6b50427483f95ddd25aa66638cd764",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4f360946bf6b50427483f95ddd25aa66638cd764"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102108.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2abec5d36f82a22598d1c402b16e4a86ce5a9b4c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2abec5d36f82a22598d1c402b16e4a86ce5a9b4c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102109.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bfa67fb8607db038d9e838776e8ff0d34a45268d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bfa67fb8607db038d9e838776e8ff0d34a45268d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102110.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5e0f33caf1e4484c1420a573fcba0a55c6ef09c9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5e0f33caf1e4484c1420a573fcba0a55c6ef09c9"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102111.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6668ab3484a90bc192aa679e0c9241277cd35139",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6668ab3484a90bc192aa679e0c9241277cd35139"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102112.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7b95ac47624dd7de077448a3b9e8c8c9c0c1177e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7b95ac47624dd7de077448a3b9e8c8c9c0c1177e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102113.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d2f4c04d07814f5ef7d1d2a2ccaf710e847f454a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d2f4c04d07814f5ef7d1d2a2ccaf710e847f454a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102114.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "685c7fa0f3e140530c6825f008fdb72687cf5979",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/685c7fa0f3e140530c6825f008fdb72687cf5979"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102115.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d6de4af7d6593a691943976dafce2a47828737c3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d6de4af7d6593a691943976dafce2a47828737c3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102116.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ba4d3f92e7715ed2967e1a9b463648b7d20f7d8d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ba4d3f92e7715ed2967e1a9b463648b7d20f7d8d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102117.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0fd7238a1b711502ea4cc4eae4f22ae34f2407c7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0fd7238a1b711502ea4cc4eae4f22ae34f2407c7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102118.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4418c918bf0ca796f064024e5cf018ab346daafe",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4418c918bf0ca796f064024e5cf018ab346daafe"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102119.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "504f9fa54aad51490b1eef3602403d64f137395b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/504f9fa54aad51490b1eef3602403d64f137395b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102120.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c649a51a1cb58e3cb48f0829b8e0b68a3759f281",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c649a51a1cb58e3cb48f0829b8e0b68a3759f281"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102121.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9b16536609dc4c6eb5beb69a10bc63d56029d43f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9b16536609dc4c6eb5beb69a10bc63d56029d43f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102122.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fece03246c56951d622d1fd8f464452c64ef4a2f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fece03246c56951d622d1fd8f464452c64ef4a2f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231021/2023102123.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "74d52ed41dc7d5c8d9c8d4719cb1b7855fad0c0e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/74d52ed41dc7d5c8d9c8d4719cb1b7855fad0c0e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "1edce51543642cb3253b27621df1a85f33c5d1c7",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/1edce51543642cb3253b27621df1a85f33c5d1c7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102200.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1ea2c5c939db56f49b0eca694c803f32a5e4681a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1ea2c5c939db56f49b0eca694c803f32a5e4681a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102201.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "257f21824b3bc75dbde2e592a1334d8563a6dfc9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/257f21824b3bc75dbde2e592a1334d8563a6dfc9"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102202.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "78fe9291552aaaaccdce272682dd383ac2378ed9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/78fe9291552aaaaccdce272682dd383ac2378ed9"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102203.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1342e64380b488ecc056b658d9019a2e06d52831",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1342e64380b488ecc056b658d9019a2e06d52831"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102204.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fc9d8a0d25bd7815f58a89d4b4a5f6ba886c1014",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fc9d8a0d25bd7815f58a89d4b4a5f6ba886c1014"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102205.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b4f201c78d969d0a39cb933463967c5e45593693",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b4f201c78d969d0a39cb933463967c5e45593693"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102206.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "53326bf86753516be302ea60a45fd65e0825a634",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/53326bf86753516be302ea60a45fd65e0825a634"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102207.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "449e8ac7f23a2d7b6142de61573f9e889d9205f4",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/449e8ac7f23a2d7b6142de61573f9e889d9205f4"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102208.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9bbac85edd40cf0ea4707830f0825e2dd5722768",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9bbac85edd40cf0ea4707830f0825e2dd5722768"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102209.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7f64936e05a42359c7dbe3c55358fc5cfa935562",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7f64936e05a42359c7dbe3c55358fc5cfa935562"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102210.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "20391f945e219d3fb923d3bf9d09eabd46477f7e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/20391f945e219d3fb923d3bf9d09eabd46477f7e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102211.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "97eb1570ae70bf17c52b5e68cc3bc21b17f6c5df",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/97eb1570ae70bf17c52b5e68cc3bc21b17f6c5df"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102212.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a18a06267f6d7518a9cc8755f7de0af205c12e75",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a18a06267f6d7518a9cc8755f7de0af205c12e75"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102213.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "18db15d89ab883081e17ecc7958863c2fc396f9e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/18db15d89ab883081e17ecc7958863c2fc396f9e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102214.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f9d6ec471a1a2c6ebcf7cdbf9e4ab6bc7ea044ae",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f9d6ec471a1a2c6ebcf7cdbf9e4ab6bc7ea044ae"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102215.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4607f65200ea2605587b4fc941ad28aabe888922",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4607f65200ea2605587b4fc941ad28aabe888922"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102216.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "384b73c9bd0e9b3f85e0c04249d2c3226e828010",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/384b73c9bd0e9b3f85e0c04249d2c3226e828010"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102217.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d1f4a90edce576f265905b21c58205085ab78117",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d1f4a90edce576f265905b21c58205085ab78117"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102218.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d04288206621ce381e1d083fa25994f3a34f3519",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d04288206621ce381e1d083fa25994f3a34f3519"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102219.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3aa0c43cd3b40e7f446179b69289f7381dc508a4",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3aa0c43cd3b40e7f446179b69289f7381dc508a4"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102220.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7f699173882f525aa8517ce0f807901b2b716ace",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7f699173882f525aa8517ce0f807901b2b716ace"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102221.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5aa6fc2c70aded0d4209f5d5ea5a3b39c8968683",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5aa6fc2c70aded0d4209f5d5ea5a3b39c8968683"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102222.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "70ad5f3ee08cb90010f2a8196cbb565862cde73b",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/70ad5f3ee08cb90010f2a8196cbb565862cde73b"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231022/2023102223.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "af18021aa64d74c78ad029420082cf63656f8b4a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/af18021aa64d74c78ad029420082cf63656f8b4a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "e5ee2e34d7a5f7674e7eca04212123d9266a1f9c",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/e5ee2e34d7a5f7674e7eca04212123d9266a1f9c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102300.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "91b4c80421895c58f64b352e1f426c5cd575949a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/91b4c80421895c58f64b352e1f426c5cd575949a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102301.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "865c6113f165ec909c8215aaa5fe63010c0a3892",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/865c6113f165ec909c8215aaa5fe63010c0a3892"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102302.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "68253d6d671c8137703aaf4660ff16901e05e162",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/68253d6d671c8137703aaf4660ff16901e05e162"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102303.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "97ca7eba5ccdc94e01649add064b58c27f4ff6de",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/97ca7eba5ccdc94e01649add064b58c27f4ff6de"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102304.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7abc4089b6deb308291fd026ef545210dd9cf4ac",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7abc4089b6deb308291fd026ef545210dd9cf4ac"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102305.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e41f477cd122c95ed157fa877e73051b53ad58a2",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e41f477cd122c95ed157fa877e73051b53ad58a2"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102306.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ae0f8b62ebf13df7dcca2de572fb9d9c0eef09cd",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ae0f8b62ebf13df7dcca2de572fb9d9c0eef09cd"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102307.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "155f7da0ecfa01f85d9fb55c47c2d63795916349",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/155f7da0ecfa01f85d9fb55c47c2d63795916349"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102308.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "27337d2587f3978b4b195db02b42836c54fc6efb",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/27337d2587f3978b4b195db02b42836c54fc6efb"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102309.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7d6f39420e8786d2d248b64ed5c58b8b96dc914c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7d6f39420e8786d2d248b64ed5c58b8b96dc914c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102310.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5d30275245c253a860fb41b4e85c6f240e38a4c8",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5d30275245c253a860fb41b4e85c6f240e38a4c8"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102311.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "50c45421c24059a78e26385ed5e5e472d9dfd622",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/50c45421c24059a78e26385ed5e5e472d9dfd622"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102312.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "636bad4213212c85c1e8d2bfaf05dd6ec1e62cf0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/636bad4213212c85c1e8d2bfaf05dd6ec1e62cf0"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102313.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e0a45e6dbbc2909f93e3be2fecb8b92d3c5d4d9e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e0a45e6dbbc2909f93e3be2fecb8b92d3c5d4d9e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102314.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0c4f6b3a43c2fe77ed88b05ec437caca2c6ad300",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0c4f6b3a43c2fe77ed88b05ec437caca2c6ad300"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102315.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "09ba47055625b9228f65f23726ee9d283adc6627",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/09ba47055625b9228f65f23726ee9d283adc6627"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102316.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b5c07887a337a8fc16959bcbcd749586bdae2cb1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b5c07887a337a8fc16959bcbcd749586bdae2cb1"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102317.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fc0198f58e2b0e1097dcb9b2f533666069220b50",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fc0198f58e2b0e1097dcb9b2f533666069220b50"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102318.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4e43cbaae92c157af9d08e3878dd4dd482bc1b7e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4e43cbaae92c157af9d08e3878dd4dd482bc1b7e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102319.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7e09bbe4ed2e66e2f71de7a7293d707c8e5ada87",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7e09bbe4ed2e66e2f71de7a7293d707c8e5ada87"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102320.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e19973bb45f59b2cfbbcd8a99d9a3529430ba39e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e19973bb45f59b2cfbbcd8a99d9a3529430ba39e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102321.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "65e86fb5ec077727d7cedeb856661ac2c1739bc2",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/65e86fb5ec077727d7cedeb856661ac2c1739bc2"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102322.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b23afcd93f288808b7f47792c720a486f0a0503e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b23afcd93f288808b7f47792c720a486f0a0503e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231023/2023102323.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d0622f5f86972dc5b02d6968e59eb2049ef9bfa6",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d0622f5f86972dc5b02d6968e59eb2049ef9bfa6"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "ca03b15e23c30961bb35a58478c959cd2a57a8a2",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/ca03b15e23c30961bb35a58478c959cd2a57a8a2"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102400.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a63f095830dcc311c948c9dd103223f366b0c7d3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a63f095830dcc311c948c9dd103223f366b0c7d3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102401.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "14579dd37769db31f73476ff6b93a09d45eebd81",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/14579dd37769db31f73476ff6b93a09d45eebd81"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102402.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1480d33ef70ff672f32d6264e4fdaecab2db453a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1480d33ef70ff672f32d6264e4fdaecab2db453a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102403.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fc615f7390dd7f4b2c017a1109e6ac2ee2b61dd0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fc615f7390dd7f4b2c017a1109e6ac2ee2b61dd0"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102404.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "899795633e14de848ffc52d60edacc956396a9ea",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/899795633e14de848ffc52d60edacc956396a9ea"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102405.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "91a86b999803cd4d8d7b658dbce9d14fc6f48724",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/91a86b999803cd4d8d7b658dbce9d14fc6f48724"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102406.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0e191853db16912053ad1d8e69fb3369dad43aca",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0e191853db16912053ad1d8e69fb3369dad43aca"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102407.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "afa37df7e367d3c87ec0b165a5e190bd7cd59b60",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/afa37df7e367d3c87ec0b165a5e190bd7cd59b60"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102408.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3a42853358beea0081aa5418a0daf553da02b06e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3a42853358beea0081aa5418a0daf553da02b06e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102409.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "95e7adbd87a7d2dcd31123d31d12a15f92aabb18",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/95e7adbd87a7d2dcd31123d31d12a15f92aabb18"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102410.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "68c5714744fc82ab41b1255fc797e4139879b8b1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/68c5714744fc82ab41b1255fc797e4139879b8b1"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102411.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "68e2b5c751b8d626a3f31997d26eb46366d26c1d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/68e2b5c751b8d626a3f31997d26eb46366d26c1d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102412.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5980a6aa7fcd5e2eacd292d9a5d21ea998512393",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5980a6aa7fcd5e2eacd292d9a5d21ea998512393"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102413.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c80e80b2ca9ed1be2a7c9e0f36865bee8d34d4b3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c80e80b2ca9ed1be2a7c9e0f36865bee8d34d4b3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102414.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a47eb3b667075c5376b537f8bfd9bddc2bc14468",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a47eb3b667075c5376b537f8bfd9bddc2bc14468"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102415.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c2a301d6f6898f3494225576145ac96d49e5ed29",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c2a301d6f6898f3494225576145ac96d49e5ed29"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102416.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "658a6d6af50532d9830be427d28df14ed4537699",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/658a6d6af50532d9830be427d28df14ed4537699"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102417.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2fedd30ca12ee08b2c7554223c0266bcfc54cdf6",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2fedd30ca12ee08b2c7554223c0266bcfc54cdf6"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102418.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "947e6be86b1225b50a607603e4e9e67cdeecd1d4",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/947e6be86b1225b50a607603e4e9e67cdeecd1d4"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102419.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "194a2f6cf0b23597d925becb4bbe8ab0a5fa0593",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/194a2f6cf0b23597d925becb4bbe8ab0a5fa0593"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102420.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "af29882dfd4598259ea1f99e5be094ec0c110f76",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/af29882dfd4598259ea1f99e5be094ec0c110f76"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102421.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6a01fe4b76e22e569ee6dec4dc00fc667a2f77a3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6a01fe4b76e22e569ee6dec4dc00fc667a2f77a3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102422.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "273eaaf52a1159a4f1999cc3267a1b2968fe8fb0",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/273eaaf52a1159a4f1999cc3267a1b2968fe8fb0"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231024/2023102423.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "652c0dd1f6e874cdc581480c24ce899ce72ee420",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/652c0dd1f6e874cdc581480c24ce899ce72ee420"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "07bb2fc44623ace160fd83b3437ed2a79fa46b92",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/07bb2fc44623ace160fd83b3437ed2a79fa46b92"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102500.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f851bb0c4d38a68ce2c97fb336a7103903325ed1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f851bb0c4d38a68ce2c97fb336a7103903325ed1"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102501.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "507283c6f82ac1d801f34d62558fbc72d1b6f878",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/507283c6f82ac1d801f34d62558fbc72d1b6f878"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102502.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "25b000028b1809379c705277974a4951267159fa",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/25b000028b1809379c705277974a4951267159fa"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102503.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4cf0b7544155d2ef822df6be23b849e0ffad8f18",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4cf0b7544155d2ef822df6be23b849e0ffad8f18"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102504.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c7780e0ac56ac539cf1ae7a1c6c922a082b62bbb",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c7780e0ac56ac539cf1ae7a1c6c922a082b62bbb"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102505.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "00abe1b05e6e11a8a8e8b15816780e75c69a7157",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/00abe1b05e6e11a8a8e8b15816780e75c69a7157"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102506.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "beeca521538b2a38156ddfb108b6c0b7a711b98d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/beeca521538b2a38156ddfb108b6c0b7a711b98d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102507.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e833a7d4c0e5cc498e17e9700ca6621cb276a595",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e833a7d4c0e5cc498e17e9700ca6621cb276a595"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102508.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "37469fc8d6221591f327d10a948e83d00cab6288",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/37469fc8d6221591f327d10a948e83d00cab6288"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102509.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a4aa4f22ca0a20158e79355c798f748c65478f72",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a4aa4f22ca0a20158e79355c798f748c65478f72"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102510.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c80176cb88710d179d7521fbe57fe872ba9d6fcf",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c80176cb88710d179d7521fbe57fe872ba9d6fcf"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102511.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bee716e20ec35ecb64e25aeb06df11cea6300af3",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bee716e20ec35ecb64e25aeb06df11cea6300af3"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102512.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4a76415b8f34751ee07f92780999ec9ab9acba9d",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4a76415b8f34751ee07f92780999ec9ab9acba9d"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102513.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1e3fce7ab5022a73d86251835c0505a55131a79a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1e3fce7ab5022a73d86251835c0505a55131a79a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102514.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "521f2904b06863d883fa9df63929df009c528c40",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/521f2904b06863d883fa9df63929df009c528c40"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102515.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2582e4d221603a9ce325891d60babed85386f18f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2582e4d221603a9ce325891d60babed85386f18f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102516.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "05f30ff1ced1cacdff06d5f58f011ee4a8c041a1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/05f30ff1ced1cacdff06d5f58f011ee4a8c041a1"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102517.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d015497e23c269f44044ee5cdb44e9203118968f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d015497e23c269f44044ee5cdb44e9203118968f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102518.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cc70e68f0bbd0e52e6e490ec1818e1dcec6f9b4a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cc70e68f0bbd0e52e6e490ec1818e1dcec6f9b4a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102519.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ef5c2c973dcc7d6708b21caa807fcd5d843e160f",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ef5c2c973dcc7d6708b21caa807fcd5d843e160f"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102520.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e2c73ece4b0792f350dbdfba28d803214f37e9f7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e2c73ece4b0792f350dbdfba28d803214f37e9f7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102521.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "19c6cbb2c71d8ad786ebbbacdb23891ecbed8193",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/19c6cbb2c71d8ad786ebbbacdb23891ecbed8193"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102522.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e3cd9e8aa1c53eeb35d2435b4d1646c109fdce26",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e3cd9e8aa1c53eeb35d2435b4d1646c109fdce26"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231025/2023102523.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5fe2d8adf83e30c19fe61e399b68ecec901814ca",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5fe2d8adf83e30c19fe61e399b68ecec901814ca"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "03fc1d554a79d9456a6946ac7c00a6ec631affbc",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/03fc1d554a79d9456a6946ac7c00a6ec631affbc"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102600.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e4b479fff22a5865b5a46296181e70bb48874d78",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e4b479fff22a5865b5a46296181e70bb48874d78"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102601.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "428bcf4b992b0864e8dc68b73f8cd77b3c9663b1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/428bcf4b992b0864e8dc68b73f8cd77b3c9663b1"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102602.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9d7f19db82615e87f9ab1384e3f4452746dc8b54",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9d7f19db82615e87f9ab1384e3f4452746dc8b54"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102603.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "97247879835bb477b7f6ca68888937c4d799997e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/97247879835bb477b7f6ca68888937c4d799997e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102604.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "213c811f17452ec578d598c81e2147bff4fdbf0e",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/213c811f17452ec578d598c81e2147bff4fdbf0e"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102605.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5f42d2213583b764549fec74e508cc752d6f2930",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5f42d2213583b764549fec74e508cc752d6f2930"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102606.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "67b2f8576499c7c5d9ffdb29894a370a64a10b2a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/67b2f8576499c7c5d9ffdb29894a370a64a10b2a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102607.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "0a74a370ac1268e168811620c102e48d5a9fb7c7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/0a74a370ac1268e168811620c102e48d5a9fb7c7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102608.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b34aa24a6c82abcd3e7b01284a72f1f7fc722a02",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b34aa24a6c82abcd3e7b01284a72f1f7fc722a02"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102609.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7a2e9cd4255571debbebf4120cb639034d048645",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7a2e9cd4255571debbebf4120cb639034d048645"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102610.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4fb2f839a4d49c3ae6b33ce7564e8136f56f4e84",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4fb2f839a4d49c3ae6b33ce7564e8136f56f4e84"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102611.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "929b25e2b8dd12af0dccbaf247da199e230c3e58",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/929b25e2b8dd12af0dccbaf247da199e230c3e58"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102612.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3b8aec40ada46ccf7d9eed3bbb9a51c8739aaba5",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3b8aec40ada46ccf7d9eed3bbb9a51c8739aaba5"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102613.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e613e9591b8a8295e6f7d1a08ee95118a0636600",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e613e9591b8a8295e6f7d1a08ee95118a0636600"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102614.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "68904ad54caa7b80b4db139a4d249fe731d292b7",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/68904ad54caa7b80b4db139a4d249fe731d292b7"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102615.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d58cc467071160df50842a0f07f4841f0ce6b61a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d58cc467071160df50842a0f07f4841f0ce6b61a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102616.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b5e2d8001e2584caefa4ba3cf858c9f3328e88b1",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b5e2d8001e2584caefa4ba3cf858c9f3328e88b1"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102617.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fbfcd801cf6eb098941e6a3f193a6b7f48322a3c",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fbfcd801cf6eb098941e6a3f193a6b7f48322a3c"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102618.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "81eb25c6374c450619e792c39b2fd463b2da08e5",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/81eb25c6374c450619e792c39b2fd463b2da08e5"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102619.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "512f288d84f59468a81f361eadd8456a1f1e97ad",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/512f288d84f59468a81f361eadd8456a1f1e97ad"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102620.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b02df090b3fa4d0ffdfb28da3104d43ba2befc5a",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b02df090b3fa4d0ffdfb28da3104d43ba2befc5a"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102621.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7344c313e2f249d8822b9137e5cf62adc6782f83",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7344c313e2f249d8822b9137e5cf62adc6782f83"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102622.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6aa452bb984faf153d1ddafbc2cc2108cfb91ba9",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6aa452bb984faf153d1ddafbc2cc2108cfb91ba9"
                },
                {
                    "path": "shared/estimate/hourly_tif/2023/20231026/2023102623.tif",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6f59de1b988e0152f9c7bd01f7e1cca37ef01ba6",
                    "size": 10538755,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6f59de1b988e0152f9c7bd01f7e1cca37ef01ba6"
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
                    "sha": "fb4a1de1fd8e4610278d435c43405ce124b71bbe",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/fb4a1de1fd8e4610278d435c43405ce124b71bbe"
                },
                {
                    "path": "shared/estimate/pq/2023",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "549f42574d16933815d7711fd7fd31b9cd3ab6f1",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/549f42574d16933815d7711fd7fd31b9cd3ab6f1"
                },
                {
                    "path": "shared/estimate/pq/2023/20231001.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c1ebd268b125c29d94c044df46db22c45c04d641",
                    "size": 25494373,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c1ebd268b125c29d94c044df46db22c45c04d641"
                },
                {
                    "path": "shared/estimate/pq/2023/20231002.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c0e8769c443dede911b930bc33c1408ef37bf944",
                    "size": 25794551,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c0e8769c443dede911b930bc33c1408ef37bf944"
                },
                {
                    "path": "shared/estimate/pq/2023/20231003.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d5ee093fd9947d9b6f589d1a387f4b117739755a",
                    "size": 25660167,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d5ee093fd9947d9b6f589d1a387f4b117739755a"
                },
                {
                    "path": "shared/estimate/pq/2023/20231004.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fc3332a44dbdd63ec02c0e38bf57f40ba6255bf5",
                    "size": 25260167,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fc3332a44dbdd63ec02c0e38bf57f40ba6255bf5"
                },
                {
                    "path": "shared/estimate/pq/2023/20231005.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "be729b5619bf84505db7f1bfe5324955ff2966ce",
                    "size": 25591275,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/be729b5619bf84505db7f1bfe5324955ff2966ce"
                },
                {
                    "path": "shared/estimate/pq/2023/20231006.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "aa96ac1a4bfc2c19f22843b6b8f42948d4ed24cb",
                    "size": 25833095,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/aa96ac1a4bfc2c19f22843b6b8f42948d4ed24cb"
                },
                {
                    "path": "shared/estimate/pq/2023/20231007.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cb134a8ee27a1312a285b854208ebb7418146c62",
                    "size": 26007868,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cb134a8ee27a1312a285b854208ebb7418146c62"
                },
                {
                    "path": "shared/estimate/pq/2023/20231008.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d5edeb3960aad953084077c5721e2ebce8229e84",
                    "size": 26223187,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d5edeb3960aad953084077c5721e2ebce8229e84"
                },
                {
                    "path": "shared/estimate/pq/2023/20231009.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8ac66b879ab736fc05b8a5872a76230190956143",
                    "size": 26204844,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8ac66b879ab736fc05b8a5872a76230190956143"
                },
                {
                    "path": "shared/estimate/pq/2023/20231010.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3ab5b362c56920ffddfaafee385d9cae1232025e",
                    "size": 26480545,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3ab5b362c56920ffddfaafee385d9cae1232025e"
                },
                {
                    "path": "shared/estimate/pq/2023/20231011.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "05c15e50562b38174c73c377c149c0d0598c3aa7",
                    "size": 26276698,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/05c15e50562b38174c73c377c149c0d0598c3aa7"
                },
                {
                    "path": "shared/estimate/pq/2023/20231012.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3cd9e20af636113cbc87c7206c9c27f6ebcf4bc7",
                    "size": 26067011,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3cd9e20af636113cbc87c7206c9c27f6ebcf4bc7"
                },
                {
                    "path": "shared/estimate/pq/2023/20231013.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "45af80406335a2dd2d9c25aab3736858b49a557a",
                    "size": 26244261,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/45af80406335a2dd2d9c25aab3736858b49a557a"
                },
                {
                    "path": "shared/estimate/pq/2023/20231014.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "15f967aab4fd1350032adf74b58e5be88917dbe3",
                    "size": 26387039,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/15f967aab4fd1350032adf74b58e5be88917dbe3"
                },
                {
                    "path": "shared/estimate/pq/2023/20231015.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8e3edee9986e063a176e5b68a13a16a1fd9bf5b1",
                    "size": 26556174,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8e3edee9986e063a176e5b68a13a16a1fd9bf5b1"
                },
                {
                    "path": "shared/estimate/pq/2023/20231016.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f7716cd6526d10715f80b34cc5687f5177c85859",
                    "size": 26731059,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f7716cd6526d10715f80b34cc5687f5177c85859"
                },
                {
                    "path": "shared/estimate/pq/2023/20231017.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "64842319b86d2c8b16b677c14816f824df31e936",
                    "size": 26557027,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/64842319b86d2c8b16b677c14816f824df31e936"
                },
                {
                    "path": "shared/estimate/pq/2023/20231018.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2813f97f41df270d6df60ed20f107286b90d36eb",
                    "size": 26254718,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2813f97f41df270d6df60ed20f107286b90d36eb"
                },
                {
                    "path": "shared/estimate/pq/2023/20231019.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3c9e0c09fadaa50386a18de2c283502b0648ef5c",
                    "size": 25906248,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3c9e0c09fadaa50386a18de2c283502b0648ef5c"
                },
                {
                    "path": "shared/estimate/pq/2023/20231020.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "e9d6dea429ec3fcbce557848bf8dcb66b83cb47e",
                    "size": 26190860,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e9d6dea429ec3fcbce557848bf8dcb66b83cb47e"
                },
                {
                    "path": "shared/estimate/pq/2023/20231021.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f08d900711a24d2ef2bf3c70d476d109021bd1b1",
                    "size": 26501806,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f08d900711a24d2ef2bf3c70d476d109021bd1b1"
                },
                {
                    "path": "shared/estimate/pq/2023/20231022.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "489ff59011429a3818dfdb821bbee5df4e4ffd1e",
                    "size": 26666586,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/489ff59011429a3818dfdb821bbee5df4e4ffd1e"
                },
                {
                    "path": "shared/estimate/pq/2023/20231023.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "23ed92c5170c22c6c0b0630782fdd4165cb36316",
                    "size": 26658175,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/23ed92c5170c22c6c0b0630782fdd4165cb36316"
                },
                {
                    "path": "shared/estimate/pq/2023/20231024.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9ba41e726afdba31272253653b9b7f448ca11747",
                    "size": 26691449,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9ba41e726afdba31272253653b9b7f448ca11747"
                },
                {
                    "path": "shared/estimate/pq/2023/20231025.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "02031a4abd5f296f3a74b65019a64e5673655425",
                    "size": 26565073,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/02031a4abd5f296f3a74b65019a64e5673655425"
                },
                {
                    "path": "shared/estimate/pq/2023/20231026.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ae24362f79b60db68f211cf5229f99cd4ae4364d",
                    "size": 26429744,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ae24362f79b60db68f211cf5229f99cd4ae4364d"
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
                    "sha": "86ac46727d7e61267204d3349b1f8ab3dce76123",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/86ac46727d7e61267204d3349b1f8ab3dce76123"
                },
                {
                    "path": "shared/estimate/stat/2023",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "e832284a7649a631239a95ae8eec560b7707d5b5",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/e832284a7649a631239a95ae8eec560b7707d5b5"
                },
                {
                    "path": "shared/estimate/stat/2023/20231001",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "0e0d66b235a5060b5c68e0bd477365f12d48b975",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/0e0d66b235a5060b5c68e0bd477365f12d48b975"
                },
                {
                    "path": "shared/estimate/stat/2023/20231001/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a536bd9061f2049e3615c722680842270cf00456",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a536bd9061f2049e3615c722680842270cf00456"
                },
                {
                    "path": "shared/estimate/stat/2023/20231001/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "620f3c59e07b0a1c0d0864a0ff5336219b501f81",
                    "size": 166570,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/620f3c59e07b0a1c0d0864a0ff5336219b501f81"
                },
                {
                    "path": "shared/estimate/stat/2023/20231002",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "a5f03a69f05706ad1b3954d4ec5f73e87a41c6b9",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/a5f03a69f05706ad1b3954d4ec5f73e87a41c6b9"
                },
                {
                    "path": "shared/estimate/stat/2023/20231002/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "59beeb2e0ab83ba1301360fbf927a561f90e705d",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/59beeb2e0ab83ba1301360fbf927a561f90e705d"
                },
                {
                    "path": "shared/estimate/stat/2023/20231002/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6b48c568cc201d2e1b4a4ee38784c8655aeff889",
                    "size": 167052,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6b48c568cc201d2e1b4a4ee38784c8655aeff889"
                },
                {
                    "path": "shared/estimate/stat/2023/20231003",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "17a6c1bb09604e7e942d4d890ecf1cf505bf827b",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/17a6c1bb09604e7e942d4d890ecf1cf505bf827b"
                },
                {
                    "path": "shared/estimate/stat/2023/20231003/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6a70d1ce4a08176d79cc798eea4004dcea3e8a17",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6a70d1ce4a08176d79cc798eea4004dcea3e8a17"
                },
                {
                    "path": "shared/estimate/stat/2023/20231003/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7bd3fb294ed5f4861ce6b74044432b9ccfc729f3",
                    "size": 167266,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7bd3fb294ed5f4861ce6b74044432b9ccfc729f3"
                },
                {
                    "path": "shared/estimate/stat/2023/20231004",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "3eee2f3ae2300f0f2d3c39c9d7d5f97722d46420",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/3eee2f3ae2300f0f2d3c39c9d7d5f97722d46420"
                },
                {
                    "path": "shared/estimate/stat/2023/20231004/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "df424cfd456bb597e0214273834f696f0bb051ec",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/df424cfd456bb597e0214273834f696f0bb051ec"
                },
                {
                    "path": "shared/estimate/stat/2023/20231004/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "71e178afd7ea141f4f9a45fbadb93bfa695aab1e",
                    "size": 166593,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/71e178afd7ea141f4f9a45fbadb93bfa695aab1e"
                },
                {
                    "path": "shared/estimate/stat/2023/20231005",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "b291a310cb770f19124f43a2d047342048d1ef36",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/b291a310cb770f19124f43a2d047342048d1ef36"
                },
                {
                    "path": "shared/estimate/stat/2023/20231005/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f0744d79ac5cb81e641033297b2bdde2ff7a25ab",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f0744d79ac5cb81e641033297b2bdde2ff7a25ab"
                },
                {
                    "path": "shared/estimate/stat/2023/20231005/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c688f9dd5c3de2742783c9669883040a2f66841f",
                    "size": 166973,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c688f9dd5c3de2742783c9669883040a2f66841f"
                },
                {
                    "path": "shared/estimate/stat/2023/20231006",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "cd64ec6f39292fd369579b51389092e628cdb7c1",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/cd64ec6f39292fd369579b51389092e628cdb7c1"
                },
                {
                    "path": "shared/estimate/stat/2023/20231006/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "575f71252ed481e2aeda052843b3c58c36503403",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/575f71252ed481e2aeda052843b3c58c36503403"
                },
                {
                    "path": "shared/estimate/stat/2023/20231006/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7284b81eace20cde05ee9a539bc9724733b54cf2",
                    "size": 170605,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7284b81eace20cde05ee9a539bc9724733b54cf2"
                },
                {
                    "path": "shared/estimate/stat/2023/20231007",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "8ce234a1c7ef830ed5787ac39c506b0eae04eb36",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/8ce234a1c7ef830ed5787ac39c506b0eae04eb36"
                },
                {
                    "path": "shared/estimate/stat/2023/20231007/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "199ea6be6d91424df38e7cbefa07aeb975fafacd",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/199ea6be6d91424df38e7cbefa07aeb975fafacd"
                },
                {
                    "path": "shared/estimate/stat/2023/20231007/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "507f5addef97b96cbd2420b0afe32568fd21822e",
                    "size": 171584,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/507f5addef97b96cbd2420b0afe32568fd21822e"
                },
                {
                    "path": "shared/estimate/stat/2023/20231008",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "cf1ff0c786b375e43c6b6afbe8205e72da4da3d7",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/cf1ff0c786b375e43c6b6afbe8205e72da4da3d7"
                },
                {
                    "path": "shared/estimate/stat/2023/20231008/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8baa786af4964c8ed3f5bfa3500ca228b1ea1926",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8baa786af4964c8ed3f5bfa3500ca228b1ea1926"
                },
                {
                    "path": "shared/estimate/stat/2023/20231008/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2a14ef2f7e256cba1dfacdc4dd2c7ee11b716f71",
                    "size": 172464,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2a14ef2f7e256cba1dfacdc4dd2c7ee11b716f71"
                },
                {
                    "path": "shared/estimate/stat/2023/20231009",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "461053758b1bbf047a979655978018bcb7753102",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/461053758b1bbf047a979655978018bcb7753102"
                },
                {
                    "path": "shared/estimate/stat/2023/20231009/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3b9aac1cf39dd99372b09d834b907c14b3c6c77e",
                    "size": 1537,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3b9aac1cf39dd99372b09d834b907c14b3c6c77e"
                },
                {
                    "path": "shared/estimate/stat/2023/20231009/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "38a818d4a1fc6df72849465b74bc01711816cac5",
                    "size": 170511,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/38a818d4a1fc6df72849465b74bc01711816cac5"
                },
                {
                    "path": "shared/estimate/stat/2023/20231010",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "47d27008626d342d833b3a722231c1400b583a6d",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/47d27008626d342d833b3a722231c1400b583a6d"
                },
                {
                    "path": "shared/estimate/stat/2023/20231010/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ae8219f9c92b139ac07c9d8af8856214afa435c9",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ae8219f9c92b139ac07c9d8af8856214afa435c9"
                },
                {
                    "path": "shared/estimate/stat/2023/20231010/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "4575d466d0e735e19623400cfe15fac5fccf56c9",
                    "size": 177623,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/4575d466d0e735e19623400cfe15fac5fccf56c9"
                },
                {
                    "path": "shared/estimate/stat/2023/20231011",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "c1e0bbf0cfcaa2aefffb8345e766197d9b6e3286",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/c1e0bbf0cfcaa2aefffb8345e766197d9b6e3286"
                },
                {
                    "path": "shared/estimate/stat/2023/20231011/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "eb10958db747c6123e25f8f88dbfb279640f58a1",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/eb10958db747c6123e25f8f88dbfb279640f58a1"
                },
                {
                    "path": "shared/estimate/stat/2023/20231011/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "81b09e08cc21a7d7c07c19eb0d10f31ad24d87f0",
                    "size": 177056,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/81b09e08cc21a7d7c07c19eb0d10f31ad24d87f0"
                },
                {
                    "path": "shared/estimate/stat/2023/20231012",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "991d56854f2c2fc3ff3dac85d7b96fa3bc96932c",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/991d56854f2c2fc3ff3dac85d7b96fa3bc96932c"
                },
                {
                    "path": "shared/estimate/stat/2023/20231012/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8d4fc911a612be1b9938e4fd92186d2c1f783705",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8d4fc911a612be1b9938e4fd92186d2c1f783705"
                },
                {
                    "path": "shared/estimate/stat/2023/20231012/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ed17600abb2c62d6338febc99d3364cd93f7b846",
                    "size": 178300,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ed17600abb2c62d6338febc99d3364cd93f7b846"
                },
                {
                    "path": "shared/estimate/stat/2023/20231013",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "67c5e37f9da8cc3de721cd77f1bfe9c12815ff6b",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/67c5e37f9da8cc3de721cd77f1bfe9c12815ff6b"
                },
                {
                    "path": "shared/estimate/stat/2023/20231013/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "127eab8da300fb49d86b471bfdb9a1c4718c2340",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/127eab8da300fb49d86b471bfdb9a1c4718c2340"
                },
                {
                    "path": "shared/estimate/stat/2023/20231013/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b19bbdb393efd9bee0908436f2feca3cdff2f50c",
                    "size": 177749,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b19bbdb393efd9bee0908436f2feca3cdff2f50c"
                },
                {
                    "path": "shared/estimate/stat/2023/20231014",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "ab292b02a2aba32d80ecc566c9676b522aafd28b",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/ab292b02a2aba32d80ecc566c9676b522aafd28b"
                },
                {
                    "path": "shared/estimate/stat/2023/20231014/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a62dcfcb164b406ad72b875233bb00b366ed6b02",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a62dcfcb164b406ad72b875233bb00b366ed6b02"
                },
                {
                    "path": "shared/estimate/stat/2023/20231014/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6687ebdfea1ced8187e9f42c55fb2d436354afd6",
                    "size": 179517,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6687ebdfea1ced8187e9f42c55fb2d436354afd6"
                },
                {
                    "path": "shared/estimate/stat/2023/20231015",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "c3cb613a3c399ef8c2e9c7b2cf07819363ff3cef",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/c3cb613a3c399ef8c2e9c7b2cf07819363ff3cef"
                },
                {
                    "path": "shared/estimate/stat/2023/20231015/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7d23dbc2cc6b69367ec29aae764148ce2ae4b3da",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7d23dbc2cc6b69367ec29aae764148ce2ae4b3da"
                },
                {
                    "path": "shared/estimate/stat/2023/20231015/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "92282efef42d05962555e812bdf27454bcd03a5c",
                    "size": 179615,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/92282efef42d05962555e812bdf27454bcd03a5c"
                },
                {
                    "path": "shared/estimate/stat/2023/20231016",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "514295c48871f97a2a5391afa6ed7453e6c2068f",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/514295c48871f97a2a5391afa6ed7453e6c2068f"
                },
                {
                    "path": "shared/estimate/stat/2023/20231016/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "017e934867b6a8391dc92a7a1de55df3e0d87b2c",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/017e934867b6a8391dc92a7a1de55df3e0d87b2c"
                },
                {
                    "path": "shared/estimate/stat/2023/20231016/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6b46e74267a0dc1f4a427636c15ab77a19fc4f54",
                    "size": 181223,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6b46e74267a0dc1f4a427636c15ab77a19fc4f54"
                },
                {
                    "path": "shared/estimate/stat/2023/20231017",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "13bba63e484e460ea8334c3c6c1d7c0e2cee37ab",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/13bba63e484e460ea8334c3c6c1d7c0e2cee37ab"
                },
                {
                    "path": "shared/estimate/stat/2023/20231017/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "55c363055117d53ea645670ac22658634278f2ff",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/55c363055117d53ea645670ac22658634278f2ff"
                },
                {
                    "path": "shared/estimate/stat/2023/20231017/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "523cbc1f8591e7eae01f3ebc154a5738d5cfce5f",
                    "size": 179614,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/523cbc1f8591e7eae01f3ebc154a5738d5cfce5f"
                },
                {
                    "path": "shared/estimate/stat/2023/20231018",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "b394de582dbe27553ac8fbd6a99811d512d676e3",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/b394de582dbe27553ac8fbd6a99811d512d676e3"
                },
                {
                    "path": "shared/estimate/stat/2023/20231018/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9f1b5ed54f620a70fcd85dc0786130a5778f927c",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9f1b5ed54f620a70fcd85dc0786130a5778f927c"
                },
                {
                    "path": "shared/estimate/stat/2023/20231018/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "15656bbf64c3bc136f36849ae43abadaaec4e276",
                    "size": 176082,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/15656bbf64c3bc136f36849ae43abadaaec4e276"
                },
                {
                    "path": "shared/estimate/stat/2023/20231019",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "46cc487c97e73f47002c3ac0021cfd711397e573",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/46cc487c97e73f47002c3ac0021cfd711397e573"
                },
                {
                    "path": "shared/estimate/stat/2023/20231019/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1f718ede05ee63a08eadfd6b916a5f8c106c28a6",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1f718ede05ee63a08eadfd6b916a5f8c106c28a6"
                },
                {
                    "path": "shared/estimate/stat/2023/20231019/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f0770ca150193950c1410036dbbd3b281857db66",
                    "size": 175340,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f0770ca150193950c1410036dbbd3b281857db66"
                },
                {
                    "path": "shared/estimate/stat/2023/20231020",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "d1d47c69e54978e25b6f9cb08e187f8c85697681",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/d1d47c69e54978e25b6f9cb08e187f8c85697681"
                },
                {
                    "path": "shared/estimate/stat/2023/20231020/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "794857acc5ecf9e4d69647d6ed35393a5510a062",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/794857acc5ecf9e4d69647d6ed35393a5510a062"
                },
                {
                    "path": "shared/estimate/stat/2023/20231020/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f23434e8c65a489b09e79b9f7beebf5b7c5f7dde",
                    "size": 174461,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f23434e8c65a489b09e79b9f7beebf5b7c5f7dde"
                },
                {
                    "path": "shared/estimate/stat/2023/20231021",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "a638076f3020d673a5c9c64312623d97550370b0",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/a638076f3020d673a5c9c64312623d97550370b0"
                },
                {
                    "path": "shared/estimate/stat/2023/20231021/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1ee314fe9e351aae4888c349acc0c60002fff72c",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1ee314fe9e351aae4888c349acc0c60002fff72c"
                },
                {
                    "path": "shared/estimate/stat/2023/20231021/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1d5c1b6a33787266fbbfc628d88a8e15d53add65",
                    "size": 179862,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1d5c1b6a33787266fbbfc628d88a8e15d53add65"
                },
                {
                    "path": "shared/estimate/stat/2023/20231022",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "65d5d9232394f81f87c8608cdc24575fd108474b",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/65d5d9232394f81f87c8608cdc24575fd108474b"
                },
                {
                    "path": "shared/estimate/stat/2023/20231022/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "be7ea5a0ff8e6fe08d3c99cc285e2fa925368dd2",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/be7ea5a0ff8e6fe08d3c99cc285e2fa925368dd2"
                },
                {
                    "path": "shared/estimate/stat/2023/20231022/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9841d5a21acb7f788bd0233328168356229d4b53",
                    "size": 181841,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9841d5a21acb7f788bd0233328168356229d4b53"
                },
                {
                    "path": "shared/estimate/stat/2023/20231023",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "68102a3f45b23b43b53a617d6ef5c68349df9683",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/68102a3f45b23b43b53a617d6ef5c68349df9683"
                },
                {
                    "path": "shared/estimate/stat/2023/20231023/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "97bf42f611cd8a3623d1a0edfc24f5c56f11afbb",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/97bf42f611cd8a3623d1a0edfc24f5c56f11afbb"
                },
                {
                    "path": "shared/estimate/stat/2023/20231023/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f0b1b82d00253035e363438d1b8f0e3e2cfb2f39",
                    "size": 182164,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f0b1b82d00253035e363438d1b8f0e3e2cfb2f39"
                },
                {
                    "path": "shared/estimate/stat/2023/20231024",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "f93bc331cbef27d36144262acfcebd50446d6f03",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/f93bc331cbef27d36144262acfcebd50446d6f03"
                },
                {
                    "path": "shared/estimate/stat/2023/20231024/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d6b8db1087c042ac6753158a6d220de7addcafc0",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d6b8db1087c042ac6753158a6d220de7addcafc0"
                },
                {
                    "path": "shared/estimate/stat/2023/20231024/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "27f1c0c92c1a2a02e1a89d95c0b05ded8bbb3849",
                    "size": 183785,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/27f1c0c92c1a2a02e1a89d95c0b05ded8bbb3849"
                },
                {
                    "path": "shared/estimate/stat/2023/20231025",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "6d04bfaa548470c8e9c9d1aff5e035b289f2494f",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/6d04bfaa548470c8e9c9d1aff5e035b289f2494f"
                },
                {
                    "path": "shared/estimate/stat/2023/20231025/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1735c2312e4f0b14c20e37f3123e42b11a3585c7",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1735c2312e4f0b14c20e37f3123e42b11a3585c7"
                },
                {
                    "path": "shared/estimate/stat/2023/20231025/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d1db73fe24a23afcd75f102f8a664a6498f20c47",
                    "size": 184984,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d1db73fe24a23afcd75f102f8a664a6498f20c47"
                },
                {
                    "path": "shared/estimate/stat/2023/20231026",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "01aa4fb005d6d885de53b002ef9533a06c160a58",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/01aa4fb005d6d885de53b002ef9533a06c160a58"
                },
                {
                    "path": "shared/estimate/stat/2023/20231026/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "69edec4e235a1f12a8baceb9450e7dbd511bba39",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/69edec4e235a1f12a8baceb9450e7dbd511bba39"
                },
                {
                    "path": "shared/estimate/stat/2023/20231026/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "fc117c09410d33eceba2ad5e19c0944cac45b899",
                    "size": 182524,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/fc117c09410d33eceba2ad5e19c0944cac45b899"
                },
                {
                    "path": "shared/estimate/stat/2023/20231027",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "283041bd1de0bc47916604e9e6a849e8cf1d98c2",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/283041bd1de0bc47916604e9e6a849e8cf1d98c2"
                },
                {
                    "path": "shared/estimate/stat/2023/20231027/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "41ba99af01cc80a80b7b6a2917eaa2a0c932f0f8",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/41ba99af01cc80a80b7b6a2917eaa2a0c932f0f8"
                },
                {
                    "path": "shared/estimate/stat/2023/20231027/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "95f5ae6d637f2722e9597388c8e671b49d34e623",
                    "size": 181973,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/95f5ae6d637f2722e9597388c8e671b49d34e623"
                },
                {
                    "path": "shared/estimate/stat/2023/20231028",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "79e29bc0f088a4393f06d20607e65f8d8d9b3dce",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/79e29bc0f088a4393f06d20607e65f8d8d9b3dce"
                },
                {
                    "path": "shared/estimate/stat/2023/20231028/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bda6ee18f699c77b633242901db65ad9729920ee",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bda6ee18f699c77b633242901db65ad9729920ee"
                },
                {
                    "path": "shared/estimate/stat/2023/20231028/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "d28d3dbd1abafb4a40b82a2052edea6361af1c32",
                    "size": 181464,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/d28d3dbd1abafb4a40b82a2052edea6361af1c32"
                },
                {
                    "path": "shared/estimate/stat/2023/20231029",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "3f6ae35a974fe5f988ee9be1e5e42d102226b970",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/3f6ae35a974fe5f988ee9be1e5e42d102226b970"
                },
                {
                    "path": "shared/estimate/stat/2023/20231029/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "52b9e3a0a54dacbe66eda1207484883201a627b6",
                    "size": 1556,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/52b9e3a0a54dacbe66eda1207484883201a627b6"
                },
                {
                    "path": "shared/estimate/stat/2023/20231029/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b8cb9e56d9620afb1f35c33005a05c5c724831a5",
                    "size": 180786,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b8cb9e56d9620afb1f35c33005a05c5c724831a5"
                },
                {
                    "path": "shared/estimate/stat/2023/20231030",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "2392a3402f04d82fa636ea952f9d93c6f15b4bb1",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/2392a3402f04d82fa636ea952f9d93c6f15b4bb1"
                },
                {
                    "path": "shared/estimate/stat/2023/20231030/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "cb786c603d4e7b4c1374ca2ed3f296e735b8c122",
                    "size": 1537,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/cb786c603d4e7b4c1374ca2ed3f296e735b8c122"
                },
                {
                    "path": "shared/estimate/stat/2023/20231030/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "24a2508a0f9f0d3449e02eaf4d3915fac2d9ccf5",
                    "size": 175998,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/24a2508a0f9f0d3449e02eaf4d3915fac2d9ccf5"
                },
                {
                    "path": "shared/estimate/stat/2023/20231031",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "a59cb497a27caa2ac889c731af80688349f2ea9b",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/a59cb497a27caa2ac889c731af80688349f2ea9b"
                },
                {
                    "path": "shared/estimate/stat/2023/20231031/hourly_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9cf2e1a211b148ffe0fae47d7fd81743944cce7a",
                    "size": 1537,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9cf2e1a211b148ffe0fae47d7fd81743944cce7a"
                },
                {
                    "path": "shared/estimate/stat/2023/20231031/match_cnemc_est.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ab24886714ca2759e9ba9012735e80d80a90d03e",
                    "size": 176146,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ab24886714ca2759e9ba9012735e80d80a90d03e"
                },
                {
                    "path": "shared/estimate/surface_no2_record.json",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "9cf18be00f97a9f595c3bb985232f796d36af94e",
                    "size": 546,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/9cf18be00f97a9f595c3bb985232f796d36af94e"
                },
                {
                    "path": "shared/reconstruct",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "8a6cdf289cc72d7561fe70b6639adfb1680c45cc",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/8a6cdf289cc72d7561fe70b6639adfb1680c45cc"
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
                    "sha": "2f85fae40837987e0cef3dffc86e35fd956c8210",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/2f85fae40837987e0cef3dffc86e35fd956c8210"
                },
                {
                    "path": "shared/reconstruct/pq/2023",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "6bcc53c9bb68dd94947fd0ef090d203340ebde85",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/6bcc53c9bb68dd94947fd0ef090d203340ebde85"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231001.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "37ffab0f861aa6971832677cf12de4f07af0b98f",
                    "size": 21502975,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/37ffab0f861aa6971832677cf12de4f07af0b98f"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231002.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "c6931886cb7ced7a9d15413d9213910d2df94f72",
                    "size": 21315531,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c6931886cb7ced7a9d15413d9213910d2df94f72"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231003.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "2fd57f43638ad9ea30df7653935a9e354924d161",
                    "size": 21260610,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/2fd57f43638ad9ea30df7653935a9e354924d161"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231004.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b148fa5a7fd7d19160d3699c36b2dd20384bb7f0",
                    "size": 20721495,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b148fa5a7fd7d19160d3699c36b2dd20384bb7f0"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231005.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "259b316f7269a99ebfe9769f48bef10f1cd55424",
                    "size": 21052302,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/259b316f7269a99ebfe9769f48bef10f1cd55424"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231006.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "b8b15c51b6c09df10a60e4b13bedf82cf4d2ec58",
                    "size": 20623473,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/b8b15c51b6c09df10a60e4b13bedf82cf4d2ec58"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231007.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "64f84a34ee895b3ace52955c75a9e9a68c9e950f",
                    "size": 21257141,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/64f84a34ee895b3ace52955c75a9e9a68c9e950f"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231008.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "7ccdd6fa3a8c9f8a3c1505671f2580ca59055388",
                    "size": 21557159,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/7ccdd6fa3a8c9f8a3c1505671f2580ca59055388"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231009.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "abeb240dd1bd275ae1a1c15c3f5d2a61b06fc36c",
                    "size": 21681202,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/abeb240dd1bd275ae1a1c15c3f5d2a61b06fc36c"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231010.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "43537d59d7214a7d0ed6614beebea00c69c11c75",
                    "size": 21320240,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/43537d59d7214a7d0ed6614beebea00c69c11c75"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231011.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ff1639f70345e4ad8bd295be947280a21a173028",
                    "size": 21251245,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ff1639f70345e4ad8bd295be947280a21a173028"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231012.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8853fa0868234dcdcdbcd34327488e380ac1e03d",
                    "size": 20664666,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8853fa0868234dcdcdbcd34327488e380ac1e03d"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231013.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "bec0b0326d3e8bde4d1f2deb624f746495439a13",
                    "size": 21895398,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/bec0b0326d3e8bde4d1f2deb624f746495439a13"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231014.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "8c5987ed702fc7cdfcee275bdc59d645ab90fc49",
                    "size": 22425544,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/8c5987ed702fc7cdfcee275bdc59d645ab90fc49"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231015.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "3133060a77f005166c82b848a91e6b41f3c27bdf",
                    "size": 22519203,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/3133060a77f005166c82b848a91e6b41f3c27bdf"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231016.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "57e197b0ea08f997080021f58ca47d61aa92b8a7",
                    "size": 22333696,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/57e197b0ea08f997080021f58ca47d61aa92b8a7"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231017.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "6331cd018657de0d6e9b740ec0ee33fa1363d569",
                    "size": 21965757,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/6331cd018657de0d6e9b740ec0ee33fa1363d569"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231018.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1866075f7a029d3a899d9685f4b5b9228be59b45",
                    "size": 21510288,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1866075f7a029d3a899d9685f4b5b9228be59b45"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231019.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "052e66963df3726d2cd989fed513248c3c282ef8",
                    "size": 21323055,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/052e66963df3726d2cd989fed513248c3c282ef8"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231020.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "dc5b6909b63fc3c216997fecc536ae49cdbf6a34",
                    "size": 22219998,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/dc5b6909b63fc3c216997fecc536ae49cdbf6a34"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231021.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "916c2756707bde15a61c7431f6ccd03aaf35cc84",
                    "size": 22557473,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/916c2756707bde15a61c7431f6ccd03aaf35cc84"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231022.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "a427291858731a46a98cd11ed574a5fde224a1c8",
                    "size": 22714484,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/a427291858731a46a98cd11ed574a5fde224a1c8"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231023.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "5758155e52593ed86e5e0f6223edd6b7cd84c540",
                    "size": 22419027,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/5758155e52593ed86e5e0f6223edd6b7cd84c540"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231024.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "1df71335f41b58b6fc55667143a26f87f4c67cb7",
                    "size": 21814413,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/1df71335f41b58b6fc55667143a26f87f4c67cb7"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231025.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f3bc6dd3b26408c4dcdc6780c311a871231931fb",
                    "size": 21823316,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f3bc6dd3b26408c4dcdc6780c311a871231931fb"
                },
                {
                    "path": "shared/reconstruct/pq/2023/20231026.parquet",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "ff33b3b0dccd920d3bcb7c50da67142972d27350",
                    "size": 22147178,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/ff33b3b0dccd920d3bcb7c50da67142972d27350"
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
                    "sha": "118c2c19978bdf916f4960a0e10ab1e059eeb4d5",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/118c2c19978bdf916f4960a0e10ab1e059eeb4d5"
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
                    "sha": "22cd224ef3d985d96e9f294f96c4914ce22bb2aa",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/22cd224ef3d985d96e9f294f96c4914ce22bb2aa"
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
                    "sha": "8928a3ec2cc9b8b17fae342d534cbcf695b19211",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/8928a3ec2cc9b8b17fae342d534cbcf695b19211"
                },
                {
                    "path": "task/src/modules/downloader",
                    "mode": "040000",
                    "type": "tree",
                    "sha": "01391de3faa75e9216648bc29ae7f1f6214e0a10",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/01391de3faa75e9216648bc29ae7f1f6214e0a10"
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
                    "sha": "c213aa83d7cb52ac257c48c60d05704401a1bbcf",
                    "size": 5205,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/c213aa83d7cb52ac257c48c60d05704401a1bbcf"
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
                    "sha": "84cd38e94cf963ad71c0ef0db5bc734d0fd9836e",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/84cd38e94cf963ad71c0ef0db5bc734d0fd9836e"
                },
                {
                    "path": "task/src/modules/estimator/main.py",
                    "mode": "100644",
                    "type": "blob",
                    "sha": "f1734e733fb40982e7e24bc75c62b7a3e74de658",
                    "size": 7223,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/f1734e733fb40982e7e24bc75c62b7a3e74de658"
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
                    "sha": "1362ccd724bcb06d6a05bd4b31fa77a69d022bf3",
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/trees/1362ccd724bcb06d6a05bd4b31fa77a69d022bf3"
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
                    "sha": "e24106d1556f93da69de04ea067f384e299c84c2",
                    "size": 18680,
                    "url": "https://api.github.com/repos/hfdy0935/no2_estimating_system/git/blobs/e24106d1556f93da69de04ea067f384e299c84c2"
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