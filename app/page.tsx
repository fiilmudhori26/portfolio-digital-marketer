import { StatusTicker } from "@/components/status-ticker";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { KeyMetrics } from "@/components/key-metrics";
import { Tentang } from "@/components/tentang";
import { Keahlian } from "@/components/keahlian";
import { StudiKasus } from "@/components/studi-kasus";
import { Pengalaman } from "@/components/pengalaman";
import { Kontak } from "@/components/kontak";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <StatusTicker />
      <Navbar />
      <main className="mx-auto max-w-[1360px] space-y-16 px-4 py-8 md:space-y-24 md:px-8 md:py-12">
        <Hero />
        <KeyMetrics />
        <Tentang />
        <Keahlian />
        <StudiKasus />
        <Pengalaman />
        <Kontak />
      </main>
      <Footer />
    </>
  );
}
