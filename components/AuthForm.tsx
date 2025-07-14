"use client";
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import { Mail } from "lucide-react";

export default function AuthForm() {
  const supabase = useSupabaseClient();
  const session = useSession();

  const handleSignIn = async () => {
    const email = prompt("Enter your email:");
    if (email) {
      await supabase.auth.signInWithOtp({ email });
      alert("Check your email for the login link!");
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  if (session) {
    return (
      <div className="flex items-center gap-4 mb-4">
        <span className="text-sm text-gray-700 dark:text-gray-200">Signed in as {session.user.email}</span>
        <button onClick={handleSignOut} className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition">Sign Out</button>
      </div>
    );
  }

  return (
    <div className="flex gap-2 mb-4">
      <button
        onClick={handleSignIn}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:from-blue-600 hover:to-purple-600 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Sign in with Email"
        type="button"
      >
        <Mail className="w-5 h-5" /> Sign in with Email
      </button>
    </div>
  );
} 