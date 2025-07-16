"use client";
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from "react";
import { createClientComponentClient } from '../lib/supabaseClient';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const [supabaseClient] = useState(() => createClientComponentClient());

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
} 