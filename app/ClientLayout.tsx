"use client";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
<<<<<<< HEAD
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
=======
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [supabaseClient] = useState(() => createPagesBrowserClient());
>>>>>>> 3e7528b (Made changes in features and added Hugging Face API)
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
} 