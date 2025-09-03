/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GEMINI_API_KEY: string  ;
  // add more env vars here if you need
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
