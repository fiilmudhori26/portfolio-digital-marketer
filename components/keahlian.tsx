import { skills } from "@/lib/content";

export function Keahlian() {
  return (
    <section
      id="keahlian"
      aria-label="Keahlian"
      className="space-y-8 border-t border-hairline pt-10"
    >
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div className="space-y-4">
          <h2 className="eyebrow">Keahlian</h2>
          <p className="font-serif-display text-h2 font-medium text-ink">
            Keahlian &amp; Kompetensi Inti
          </p>
        </div>
        <p className="max-w-[16rem] text-[11px] uppercase leading-relaxed tracking-[0.14em] text-muted">
          Konten, sosmed &amp; web pendukung
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
        {skills.map((skill) => (
          <li
            key={skill.id}
            className="group flex gap-5 border-t border-hairline py-6"
          >
            <span
              className="material-symbols-outlined mt-0.5 text-[22px] text-muted transition-colors duration-200 group-hover:text-accent"
              aria-hidden="true"
            >
              {skill.icon}
            </span>
            <div className="space-y-1.5">
              <h3 className="font-serif-display text-lg font-semibold leading-snug text-ink">
                {skill.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {skill.description}
              </p>
              <p className="pt-1 text-[10px] uppercase tracking-[0.14em] text-muted">
                {skill.tags}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
