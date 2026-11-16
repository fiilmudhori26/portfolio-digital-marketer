import { heroDossier, profile } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="grid grid-cols-1 border-2 border-ink bg-white shadow-[6px_6px_0px_#09090b] lg:grid-cols-12"
    >
      {/* Left column: copy & CTA */}
      <div className="flex flex-col justify-between space-y-10 p-6 md:p-12 lg:col-span-8 lg:border-r-2 lg:border-ink">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 border border-ink bg-zinc-100 px-3 py-1 font-mono-tech text-[11px] font-semibold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 bg-ink" aria-hidden="true" />
            <span>INDEX.PORTFOLIO // 2024 REVISION</span>
          </div>
          <div className="space-y-3">
            <p className="font-mono-tech text-xs uppercase tracking-widest text-zinc-500">
              {profile.nameWithTitle} — {profile.role}
            </p>
            <h1 className="font-syne text-3xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-[54px]">
              Mengubah traffic menjadi konversi lewat{" "}
              <span className="inline-block bg-ink px-2 py-0.5 text-accent">SEO</span>,{" "}
              <span className="border-b-4 border-ink">paid ads</span>, dan strategi{" "}
              <span className="underline decoration-2 underline-offset-4">konten</span>.
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
            {profile.subheadline}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 border-t-2 border-ink pt-6">
          <a
            href="#studi-kasus"
            className="flex items-center gap-3 bg-ink px-6 py-3.5 font-mono-tech text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-zinc-800"
          >
            <span>[01] Telusuri Studi Kasus</span>
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              arrow_downward
            </span>
          </a>
          <a
            href="#kontak"
            className="flex items-center gap-3 border-2 border-ink bg-white px-6 py-3.5 font-mono-tech text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:bg-zinc-100"
          >
            <span>Konsultasi Strategi</span>
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              east
            </span>
          </a>
        </div>
      </div>

      {/* Right column: operator dossier */}
      <div className="flex flex-col justify-between border-t-2 border-ink bg-zinc-50 lg:col-span-4 lg:border-t-0">
        <div className="flex items-center gap-4 border-b-2 border-ink bg-white p-6">
          {/* PLACEHOLDER visual: inisial pengganti foto profil asli */}
          <div
            aria-hidden="true"
            className="flex h-16 w-16 shrink-0 select-none items-center justify-center border-2 border-ink bg-zinc-200 font-syne text-2xl font-extrabold text-ink"
          >
            {profile.monogram}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-syne text-lg font-bold">{profile.name}</span>
              <span
                className="material-symbols-outlined text-[18px] text-ink"
                role="img"
                aria-label="Profil terverifikasi"
              >
                verified
              </span>
            </div>
            <p className="font-mono-tech text-[11px] uppercase text-zinc-600">
              {profile.shortRole}
            </p>
            <p className="mt-0.5 font-mono-tech text-[10px] text-zinc-600">
              ID: {profile.id}
            </p>
          </div>
        </div>

        <div className="flex-1 space-y-4 p-6 font-mono-tech text-xs">
          {heroDossier.map((cell) => (
            <div key={cell.label} className="space-y-1 border border-ink bg-white p-3">
              <span className="block text-[10px] uppercase tracking-widest text-zinc-500">
                {cell.label}
              </span>
              <span className="font-bold text-ink">{cell.value}</span>
            </div>
          ))}
        </div>

        <div className="border-t-2 border-ink bg-zinc-100 p-4 text-center font-mono-tech text-[10px] uppercase tracking-wider text-zinc-500">
          TELEMETRY VERIFIED // SYSTEM REVISION 2.4.0
        </div>
      </div>
    </section>
  );
}
