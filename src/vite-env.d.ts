/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_BASE_APP_URL: string;
  VITE_BASE_URL_SERVER: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}
