import { experience, certifications } from "@/lib/content";

export function Pengalaman() {
  return (
    <section
      id="pengalaman"
      aria-label="Pengalaman dan sertifikasi"
      className="grid grid-cols-1 gap-12 border-t border-hairline pt-10 lg:grid-cols-12"
    >
      {/* Timeline pengalaman */}
      <div className="space-y-8 lg:col-span-7">
        <div className="space-y-4">
          <h2 className="eyebrow">Riwayat</h2>
          <p className="font-serif-display text-h2 font-medium text-ink">
            Pengalaman &amp; Proyek
          </p>
        </div>

        <ol className="border-l border-hairline">
          {experience.map((item) => (
            <li
              key={item.role}
              className="relative grid grid-cols-1 gap-1 py-6 pl-6 first:pt-1 sm:grid-cols-[7.5rem_1fr] sm:gap-6 sm:pl-8"
            >
              {/* Titik timeline */}
              <span
                aria-hidden="true"
                className={`absolute -left-[5px] top-7 h-2.5 w-2.5 rounded-full ${
                  item.current ? "bg-accent" : "bg-hairline"
                }`}
              />
              <p className="text-[10px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-muted sm:pt-1">
                {item.period}
              </p>
              <div className="space-y-1.5">
                <h3 className="font-serif-display text-xl font-semibold leading-snug text-ink">
                  {item.role}
                </h3>
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                  {item.company}
                </p>
                <p className="text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Sertifikasi: list sederhana dengan hairline */}
      <div className="space-y-8 lg:col-span-5">
        <div className="space-y-4">
          <h2 className="eyebrow">Kredensial</h2>
          <p className="font-serif-display text-h2 font-medium text-ink">
            Sertifikasi
          </p>
        </div>

        <ul className="divide-y divide-hairline border-y border-hairline">
          {certifications.map((cert) => (
            <li
              key={cert.code}
              className="flex items-baseline justify-between gap-6 py-5"
            >
              <div className="space-y-1">
                <h3 className="font-medium leading-snug text-ink">
                  {cert.name}
                </h3>
                <p className="text-xs text-muted">{cert.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
