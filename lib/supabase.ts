<<<<<<< HEAD
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Summary {
  id?: string
  url: string
  summary: string
  urdu_summary: string
  created_at?: string
} 
=======
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Summary {
  id?: string;
  url: string;
  summary: string;
  urdu_summary: string;
  created_at?: string;
}
>>>>>>> 3e7528b (Made changes in features and added Hugging Face API)
