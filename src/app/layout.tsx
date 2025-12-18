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
      <body className="bg-black text-gray-200"  suppressHydrationWarning >
        {children}
      </body>
    </html>
  );
}
