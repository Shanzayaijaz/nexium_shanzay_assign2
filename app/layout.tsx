import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import ClientLayout from "./ClientLayout";
=======
// Removed ClientLayout import
>>>>>>> 3e7528b (Made changes in features and added Hugging Face API)

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Summariser",
  description: "Summarise blogs, translate to Urdu, and save summaries.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen`}>
<<<<<<< HEAD
        <ClientLayout>
        {children}
        </ClientLayout>
=======
        {children}
>>>>>>> 3e7528b (Made changes in features and added Hugging Face API)
      </body>
    </html>
  );
}
