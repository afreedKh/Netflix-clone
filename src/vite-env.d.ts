//  <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TMDB_TOKEN: string;
  readonly VITE_API_KEY:string;
  readonly VITE_AUTH_DOMAIN;
  readonly VITE_PROJECT_ID;
  readonly VITE_STORAGE_BUCKET;
  readonly VITE_MESSAGING_SENDER_ID;
  readonly VITE_APP_ID;
  readonly VITE_MEASUREMENT_ID;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
