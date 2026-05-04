import { createClient } from '@supabase/supabase-js';

// Retrieve environment variables defined in your root .env file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validation check to prevent runtime crashes
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Anon Key is missing in .env file');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);