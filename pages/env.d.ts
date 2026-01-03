/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly USE_MOCK_DIR: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
