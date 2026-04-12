import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { SiteScene } from "@/components/site-scene";
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
  title: "Ahmed Yassin Ahmed | Backend Engineer",
  description:
    "Portfolio of Ahmed Yassin Ahmed, a backend engineer and Software Engineering student focused on Go, APIs, workflow-heavy systems, and reliable backend architecture.",
  keywords: [
    "Ahmed Yassin Ahmed",
    "Backend Engineer",
    "Software Engineering student",
    "Go",
    "PostgreSQL",
    "RabbitMQ",
    "Workflow systems",
    "API design",
  ],
  openGraph: {
    title: "Ahmed Yassin Ahmed | Backend Engineer",
    description:
      "Backend engineer portfolio centered on Go, APIs, workflow-heavy systems, and reliable backend architecture.",
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
    <html lang="en" className="dark scroll-smooth">
      <body className={`${sans.variable} ${mono.variable} font-sans antialiased`}>
        <SiteScene />
        <div className="site-shell relative z-10">{children}</div>
      </body>
    </html>
  );
}
