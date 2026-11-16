import { experience, certifications } from "@/lib/content";

export function Pengalaman() {
  return (
    <section id="pengalaman" aria-label="Pengalaman dan sertifikasi" className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      {/* Career milestones */}
      <div className="space-y-6 lg:col-span-7">
        <div className="border-b-2 border-ink pb-3">
          <span className="font-mono-tech text-xs font-bold uppercase tracking-widest text-zinc-500">
            [04 // RIWAYAT KARIR]
          </span>
          <h2 className="font-syne text-3xl font-extrabold text-ink">Pengalaman Kerja</h2>
        </div>
        <div className="space-y-4">
          {experience.map((item) => (
            <div
              key={item.role}
              className="space-y-3 border-2 border-ink bg-white p-6 shadow-[4px_4px_0px_#09090b]"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 border-b border-zinc-200 pb-2">
                <div>
                  <h3 className="font-syne text-lg font-bold text-ink">{item.role}</h3>
                  <p className="font-mono-tech text-xs uppercase text-zinc-500">
                    {item.company}
                  </p>
                </div>
                <span
                  className={`font-mono-tech text-xs font-bold px-2 py-0.5 ${
                    item.current ? "bg-ink text-accent" : "bg-zinc-200 text-ink"
                  }`}
                >
                  {item.period}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Verified certifications */}
      <div className="space-y-6 lg:col-span-5">
        <div className="border-b-2 border-ink pb-3">
          <span className="font-mono-tech text-xs font-bold uppercase tracking-widest text-zinc-500">
            [KREDENSIAL RESMI]
          </span>
          <h2 className="font-syne text-3xl font-extrabold text-ink">Sertifikasi Resmi</h2>
        </div>
        <div className="divide-y-2 divide-ink border-2 border-ink bg-white shadow-[4px_4px_0px_#09090b]">
          {certifications.map((cert) => (
            <div
              key={cert.code}
              className="flex items-center justify-between gap-3 p-4 transition-colors hover:bg-zinc-50"
            >
              <div className="space-y-1">
                <span className="block font-mono-tech text-[10px] text-zinc-600">
                  {cert.code}
                </span>
                <p className="font-syne text-sm font-bold text-ink">{cert.name}</p>
                <p className="font-mono-tech text-[10px] text-zinc-500">{cert.detail}</p>
              </div>
              <span className="shrink-0 border border-emerald-400 bg-emerald-100 px-2 py-0.5 font-mono-tech text-[10px] font-bold text-emerald-800">
                VERIFIED
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
