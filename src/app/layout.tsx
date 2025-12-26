import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Satyam Kumar | Full Stack Developer",
  description:
    "Full Stack Developer skilled in Go, MERN, Rust, Web3, DevOps, Gen AI & Next.js",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "GoLang",
    "MERN",
    "Web3",
    "DevOps",
    "Gen AI",
    "Rust",
  ],
  authors: [{ name: "Satyam Kumar" }],
  openGraph: {
    title: "Satyam Kumar | Portfolio",
    description:
      "Building scalable web apps using Go, MERN, Web3, DevOps & Gen AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satyam Kumar | Full Stack Developer",
    description:
      "Full Stack Developer | Next.js | Go | Web3 | Gen AI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-gray-200 antialiased selection:bg-blue-500/30" suppressHydrationWarning>
        
        {/* ------------------ GLOBAL FIXED BACKGROUND ------------------ */}
        <div className="fixed inset-0 -z-10 min-h-screen w-full bg-black">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Top Blue Gradient Glow */}
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-900/20 via-black/0 to-black/0 blur-[100px]" />
        </div>

        {/* ------------------ PAGE CONTENT ------------------ */}
        <main className="relative flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
