// vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_ID: string;
  readonly VITE_FORMSPREE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
