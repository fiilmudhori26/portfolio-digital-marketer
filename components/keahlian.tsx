import { skills } from "@/lib/content";

export function Keahlian() {
  return (
    <section id="keahlian" aria-label="Keahlian" className="space-y-6">
      <div className="flex flex-col justify-between gap-2 border-b-2 border-ink pb-4 md:flex-row md:items-end">
        <div>
          <span className="font-mono-tech text-xs font-bold uppercase tracking-widest text-zinc-500">
            [02 // MATRIX KOMPETENSI]
          </span>
          <h2 className="font-syne text-3xl font-extrabold tracking-tight text-ink">
            Keahlian &amp; Kompetensi Inti
          </h2>
        </div>
        <p className="font-mono-tech text-xs text-zinc-500">
          8 KEAHLIAN // KONTEN, SOSMED &amp; WEB PENDUKUNG
        </p>
      </div>

      {/* gap-px + bg-ink = hairline grid, robust lintas breakpoint */}
      <div className="grid grid-cols-1 gap-px border-2 border-ink bg-ink shadow-[6px_6px_0px_#09090b] md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="group flex flex-col justify-between bg-white p-6 transition-colors hover:bg-zinc-50"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-[11px] font-bold text-zinc-600 group-hover:text-ink">
                  [{skill.id}]
                </span>
                <span
                  className="material-symbols-outlined text-[20px] text-ink"
                  aria-hidden="true"
                >
                  {skill.icon}
                </span>
              </div>
              <h3 className="font-syne text-base font-bold text-ink">{skill.name}</h3>
              <p className="text-xs leading-relaxed text-zinc-600">
                {skill.description}
              </p>
            </div>
            <div className="pt-4 font-mono-tech text-[10px] uppercase text-zinc-500">
              Tags: {skill.tags}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
