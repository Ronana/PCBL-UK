// Fix for "Cannot find type definition file for 'vite/client'" and "Property 'env' does not exist on type 'ImportMeta'" errors.
// This manually defines the types for Vite's environment variables.
interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}