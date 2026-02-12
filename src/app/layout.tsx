import "./globals.css";

import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";

/* ------------------ FONTS ------------------ */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

/* ------------------ METADATA ------------------ */
export const metadata: Metadata = {
  title: "Satyam Kumar | Full Stack Developer",
  description:
    "Full Stack Developer skilled in  MERN , Golang ,Rust, Web3, DevOps, Gen AI & Next.js",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "Golang",
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
      "Building scalable web apps using Golang, MERN, Web3, DevOps & Gen AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satyam Kumar | Full Stack Developer",
    description:
      "Full Stack Developer | Next.js | Golang | Typescript | Web3 | Gen AI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${inter.variable}
          ${spaceGrotesk.variable}
          ${jetbrains.variable}
          bg-black text-gray-200 antialiased
          selection:bg-blue-500/30
        `}
      >
        {/* ------------------ GLOBAL FIXED BACKGROUND ------------------ */}
        <div className="fixed inset-0 -z-10 min-h-screen w-full bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]" />
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
