import type { Metadata } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aditya Pratama — Senior Growth & Performance Marketer",
  description:
    "Portofolio Aditya Pratama, digital marketer berbasis Jakarta: SEO, paid ads (Meta & Google), content marketing, dan analytics. Studi kasus dengan metrik terukur untuk recruiter dan hiring manager.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="min-h-screen border-t-4 border-ink bg-paper text-ink">
        {/* Material Symbols Outlined - dipakai untuk ikon di desain sumber */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        {children}
      </body>
    </html>
  );
}
