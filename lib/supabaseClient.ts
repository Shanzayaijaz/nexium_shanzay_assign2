"use client";
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const createClientComponentClient = () =>
  createPagesBrowserClient({
    supabaseUrl,
    supabaseKey: supabaseAnonKey,
  });

export const supabase = createClientComponentClient();
