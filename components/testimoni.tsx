import { testimonials } from "@/lib/content";

export function Testimoni() {
  return (
    <section aria-label="Testimoni" className="space-y-6">
      <div className="border-b-2 border-ink pb-3">
        <span className="font-mono-tech text-xs font-bold uppercase tracking-widest text-zinc-500">
          [ENDORSEMENT PEER-REVIEW]
        </span>
        <h2 className="font-syne text-3xl font-extrabold text-ink">
          Rekomendasi Rekan Kerja
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <figure
            key={t.id}
            className="flex flex-col justify-between space-y-6 border-2 border-ink bg-white p-6 shadow-[4px_4px_0px_#09090b] md:p-8"
          >
            <div className="space-y-3">
              <span className="font-mono-tech text-[11px] font-bold text-zinc-600">
                [{t.id}]
              </span>
              <blockquote className="text-base font-medium leading-relaxed text-ink md:text-lg">
                &quot;{t.quote}&quot;
              </blockquote>
            </div>
            <figcaption className="border-t-2 border-ink pt-4 font-mono-tech">
              <p className="text-sm font-bold text-ink">{t.name}</p>
              <p className="text-xs uppercase text-zinc-500">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
