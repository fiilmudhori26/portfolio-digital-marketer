import { heroDossier, profile } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="grid grid-cols-1 border-2 border-ink bg-white shadow-[6px_6px_0px_#09090b] lg:grid-cols-12"
    >
      {/* Left column: copy & CTA */}
      <div className="flex flex-col justify-between gap-10 p-5 sm:p-8 md:p-12 lg:col-span-8 lg:border-r-2 lg:border-ink">
        <div className="space-y-5 md:space-y-6">
          <div className="inline-flex items-center gap-2 border border-ink bg-zinc-100 px-3 py-1 font-mono-tech text-[11px] font-semibold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 bg-ink" aria-hidden="true" />
            <span>INDEX.PORTFOLIO // 2026</span>
          </div>
          <div className="space-y-3">
            <p className="font-mono-tech text-xs uppercase tracking-widest text-zinc-500">
              {profile.name} — {profile.role}
            </p>
            <h1 className="font-syne text-display font-extrabold text-ink">
              Digital marketer yang bisa{" "}
              <span className="inline-block bg-ink px-2 py-0.5 text-accent">eksekusi konten</span>,{" "}
              <span className="border-b-4 border-ink">sampai jadi</span> studi kasus{" "}
              <span className="underline decoration-2 underline-offset-4">nyata</span>.
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
            {profile.subheadline}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 border-t-2 border-ink pt-6">
          <a
            href="#studi-kasus"
            className="brutal-hover flex items-center gap-3 border-2 border-ink bg-ink px-6 py-3.5 font-mono-tech text-xs font-bold uppercase tracking-wider text-white shadow-[4px_4px_0px_#00fe66] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#00fe66]"
          >
            <span>[03] Telusuri Studi Kasus</span>
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              arrow_downward
            </span>
          </a>
          <a
            href="#kontak"
            className="brutal-hover flex items-center gap-3 border-2 border-ink bg-white px-6 py-3.5 font-mono-tech text-xs font-bold uppercase tracking-wider text-ink hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-zinc-100 hover:shadow-[4px_4px_0px_#09090b]"
          >
            <span>Hubungi Saya</span>
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              east
            </span>
          </a>
        </div>
      </div>

      {/* Right column: profil ringkas */}
      <div className="flex flex-col justify-between border-t-2 border-ink bg-zinc-50 lg:col-span-4 lg:border-t-0">
        <div className="flex items-center gap-4 border-b-2 border-ink bg-white p-6">
          <div
            aria-hidden="true"
            className="flex h-16 w-16 shrink-0 select-none items-center justify-center border-2 border-ink bg-zinc-200 font-syne text-2xl font-extrabold text-ink"
          >
            {profile.monogram}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-syne text-lg font-bold">{profile.name}</span>
              <span className="relative flex h-2.5 w-2.5" title={profile.availability}>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
            </div>
            <p className="font-mono-tech text-[11px] uppercase text-zinc-600">
              {profile.role}
            </p>
            <p className="mt-0.5 font-mono-tech text-[10px] text-zinc-600">
              {profile.location}
            </p>
          </div>
        </div>

        <div className="flex-1 space-y-3 p-5 font-mono-tech text-xs sm:p-6 md:space-y-4">
          {heroDossier.map((cell) => (
            <div key={cell.label} className="space-y-1 border border-ink bg-white p-3 transition-colors hover:bg-zinc-50">
              <span className="block text-[10px] uppercase tracking-widest text-zinc-500">
                {cell.label}
              </span>
              <span className="font-bold text-ink">{cell.value}</span>
            </div>
          ))}
        </div>

        <div className="border-t-2 border-ink bg-zinc-100 p-4 text-center font-mono-tech text-[10px] uppercase tracking-wider text-zinc-500">
          {profile.availability}
        </div>
      </div>
    </section>
  );
}
