import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { KeyMetrics } from "@/components/key-metrics";
import { Tentang } from "@/components/tentang";
import { Keahlian } from "@/components/keahlian";
import { WorkBanner } from "@/components/work-banner";
import { StudiKasus } from "@/components/studi-kasus";
import { Pengalaman } from "@/components/pengalaman";
import { Kontak } from "@/components/kontak";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[1200px] space-y-20 px-5 py-10 sm:px-8 md:space-y-28 md:py-14 lg:px-12">
        <Hero />
        <KeyMetrics />
        <Tentang />
        <Keahlian />
        <WorkBanner />
        <StudiKasus />
        <Pengalaman />
        <Kontak />
      </main>
      <Footer />
    </>
  );
}
