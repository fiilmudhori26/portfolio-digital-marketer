import type { Metadata } from "next";
import Link from "next/link";
import { KalkulatorRoas } from "@/components/kalkulator-roas";

export const metadata: Metadata = {
  title: "Kalkulator ROAS & CAC — Rahmad Akbar",
  description:
    "Hitung CAC, ROAS, breakeven ROAS, dan kontribusi profit iklan Anda gratis langsung di browser. Kalkulator edukatif untuk digital marketer Indonesia — tanpa signup, format angka Bahasa Indonesia, dan penjelasan cara membaca hasil.",
};

export default function KalkulatorRoasPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-5 py-10 sm:px-8 md:py-14 lg:px-12">
      {/* Bar atas ringkas */}
      <div className="flex items-center justify-between border-b border-hairline pb-5">
        <Link
          href="/"
          className="font-serif-display text-sm font-semibold tracking-tight text-ink transition-colors hover:text-accent"
        >
          Rahmad Akbar
        </Link>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
          Digital Marketer
        </p>
      </div>

      {/* Header */}
      <header className="mt-10 space-y-5 md:mt-14">
        <p className="eyebrow">Produk // Kalkulator ROAS &amp; CAC</p>
        <h1 className="font-serif-display max-w-4xl text-h2 font-medium text-ink md:text-[clamp(2.25rem,1.6rem+2.6vw,3.5rem)] md:leading-[1.05]">
          Hitung apakah iklan Anda untung — sebelum lapor ke bos.
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Masukkan spend, revenue atribusi, jumlah pelanggan baru, dan margin
          kontribusi — CAC, ROAS, breakeven ROAS, dan kontribusi profit
          terhitung seketika.
        </p>
      </header>

      {/* Kalkulator interaktif */}
      <div className="mt-10 md:mt-12">
        <KalkulatorRoas />
      </div>

      {/* Edukasi singkat */}
      <section
        aria-labelledby="cara-membaca-hasil"
        className="mt-14 border-t border-hairline pt-10 md:mt-20 md:pt-12"
      >
        <h2 id="cara-membaca-hasil" className="eyebrow">
          Cara Membaca Hasil
        </h2>
        <ol className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          <li className="space-y-2">
            <p className="font-serif-display text-lg font-medium text-ink">
              <span aria-hidden="true" className="text-accent">01 — </span>
              CAC sehat itu relatif terhadap margin
            </p>
            <p className="text-sm leading-relaxed text-muted">
              Tidak ada angka CAC &ldquo;patokan&rdquo; universal. Bandingkan
              CAC dengan margin kontribusi per pelanggan: margin per pelanggan
              Rp 300.000 dengan CAC Rp 125.000 masih menyisakan ruang untuk
              biaya operasional lain sebelum benar-benar untung.
            </p>
          </li>
          <li className="space-y-2">
            <p className="font-serif-display text-lg font-medium text-ink">
              <span aria-hidden="true" className="text-accent">02 — </span>
              ROAS ≠ profit bila margin tipis
            </p>
            <p className="text-sm leading-relaxed text-muted">
              ROAS 3× terdengar bagus, tapi dengan margin kontribusi 25%
              breakeven Anda ada di 4× — artinya iklan masih merugi secara
              kontribusi. Selalu bandingkan ROAS dengan breakeven (1 ÷ margin),
              bukan dengan angka 1×.
            </p>
          </li>
          <li className="space-y-2">
            <p className="font-serif-display text-lg font-medium text-ink">
              <span aria-hidden="true" className="text-accent">03 — </span>
              Atribusi platform vs GA4
            </p>
            <p className="text-sm leading-relaxed text-muted">
              Meta/Google Ads cenderung mengklaim konversi lebih besar
              (click window &amp; view-through), sementara GA4 lebih
              konservatif. Selisih itu wajar — ambil keputusan budget dari
              tren beberapa minggu, bukan dari satu angka harian.
            </p>
          </li>
        </ol>
      </section>

      {/* Disclaimer + kembali */}
      <div className="mt-12 flex flex-col gap-6 border-t border-hairline pt-8 md:flex-row md:items-center md:justify-between">
        <p className="max-w-[65ch] text-xs leading-relaxed text-muted">
          Kalkulator edukatif berdasarkan input Anda — bukan saran finansial.
          Kontribusi profit dihitung sebagai revenue × margin kontribusi −
          spend, di luar biaya operasional, retur, dan pajak. Akurasi hasil
          sepenuhnya bergantung pada data atribusi yang Anda masukkan.
        </p>
        <Link
          href="/"
          className="link-editorial inline-flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink"
        >
          <span aria-hidden="true">&larr;</span>
          Kembali ke portofolio
        </Link>
      </div>
    </main>
  );
}
