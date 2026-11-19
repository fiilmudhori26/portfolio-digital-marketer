import { heroDossier, profile } from "@/lib/content";
import { EditorialFigure } from "./editorial-figure";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="grid grid-cols-1 gap-12 pt-4 md:pt-8 lg:grid-cols-12 lg:gap-16"
    >
      {/* Kolom kiri: copy & CTA */}
      <div className="flex flex-col justify-center gap-8 lg:col-span-7">
        <p className="eyebrow">
          {profile.role} · {profile.location}
        </p>

        <h1 className="font-serif-display text-display font-medium text-ink">
          Digital marketer yang bisa{" "}
          <em className="italic text-accent">eksekusi konten</em>, sampai jadi
          studi kasus{" "}
          <span className="underline decoration-hairline decoration-2 underline-offset-8">
            nyata
          </span>
          .
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {profile.subheadline}
        </p>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-2">
          <a
            href="#studi-kasus"
            className="transition-ui inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-paper hover:bg-[#0c5a41]"
          >
            Telusuri Studi Kasus
            <span aria-hidden="true">↓</span>
          </a>
          <a
            href="#kontak"
            className="link-editorial inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink"
          >
            Hubungi Saya
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      {/* Kolom kanan: foto editorial + dossier ringkas */}
      <div className="flex flex-col justify-center gap-6 lg:col-span-5">
        <EditorialFigure
          src="/images/hero.jpg"
          alt="Laptop menampilkan dasbor analytics dengan grafik performa konten di atas meja kerja"
          caption="Membaca data performa konten"
          priority
          sizes="(min-width: 1200px) 500px, (min-width: 1024px) 40vw, 100vw"
          aspectClass="aspect-[4/3]"
        />

        <div className="border-y border-hairline py-5">
          <div className="flex items-baseline justify-between gap-4 pb-5">
            <div>
              <p className="font-serif-display text-2xl font-semibold tracking-tight text-ink">
                {profile.name}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-muted">
                {profile.role}
              </p>
            </div>
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
          </div>

          <dl className="divide-y divide-hairline border-t border-hairline">
            {heroDossier.map((cell) => (
              <div
                key={cell.label}
                className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-6"
              >
                <dt className="eyebrow">{cell.label}</dt>
                <dd className="text-sm leading-relaxed text-ink">{cell.value}</dd>
              </div>
            ))}
          </dl>

          <p className="border-t border-hairline pt-5 text-sm leading-relaxed text-muted">
            {profile.availability}
          </p>
        </div>
      </div>
    </section>
  );
}
