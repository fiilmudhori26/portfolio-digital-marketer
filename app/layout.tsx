import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rahmad Akbar — Digital Marketer & Content Creator",
  description:
    "Portofolio Rahmad Akbar, digital marketer & content creator entry-level dari Jember, Jawa Timur: content planning, copywriting, social media, SEO dasar, dan web development (Next.js). Terbuka untuk magang & posisi entry-level.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${newsreader.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen bg-paper text-ink">
        {/* Material Symbols Outlined - ikon untuk keahlian */}
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
