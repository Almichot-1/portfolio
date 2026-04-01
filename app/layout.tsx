import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmedyassin.vercel.app"),
  title: "Ahmed Yassin Ahmed | Backend-Focused Software Engineering Student",
  description:
    "Portfolio of Ahmed Yassin Ahmed, a Software Engineering student building backend-focused full-stack systems with Go, Next.js, and Flutter.",
  keywords: [
    "Ahmed Yassin Ahmed",
    "Software Engineering student",
    "Go developer",
    "Next.js portfolio",
    "Flutter projects",
    "Backend-focused full-stack",
  ],
  openGraph: {
    title: "Ahmed Yassin Ahmed | Portfolio",
    description:
      "Evidence-based portfolio focused on backend and full-stack project work in Go, Next.js, and Flutter.",
    type: "website",
    url: "https://ahmedyassin.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${sans.variable} ${mono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
