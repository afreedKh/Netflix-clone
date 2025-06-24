/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TMDB_TOKEN: string;
  // add other environment variables if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
