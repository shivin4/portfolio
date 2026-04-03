import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Shivin Khandelwal | AI Engineer & Builder",
  description:
    "Cinematic digital identity of Shivin Khandelwal — AI engineer, full stack builder, hackathon innovator. Exploring intelligent systems with human-centered design.",
  keywords: [
    "Shivin Khandelwal",
    "AI Engineer",
    "Full Stack Developer",
    "Portfolio",
    "Machine Learning",
    "Accessibility",
  ],
  authors: [{ name: "Shivin Khandelwal" }],
  openGraph: {
    title: "Shivin Khandelwal | Neural Workspace",
    description:
      "Enter the digital brain of an AI engineer and builder — projects, experiments, and mission logs.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050508",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} min-h-screen bg-[#050508] text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
