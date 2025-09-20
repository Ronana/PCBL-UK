import { createClient } from '@supabase/supabase-js';

// IMPORTANT: Create a .env.local file in the root of your project
// and add your Supabase configuration there. For example:
//
// VITE_SUPABASE_URL="https://your-project-id.supabase.co"
// VITE_SUPABASE_ANON_KEY="your-anon-key"
//
// You can get these values from your Supabase project settings under API.

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and Anon Key must be provided in .env.local");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);