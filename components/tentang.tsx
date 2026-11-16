import { about } from "@/lib/content";

export function Tentang() {
  return (
    <section
      id="tentang"
      aria-label="Tentang saya"
      className="grid grid-cols-1 border-2 border-ink bg-white shadow-[6px_6px_0px_#09090b] lg:grid-cols-12"
    >
      {/* Left anchor */}
      <div className="flex flex-col justify-between border-b-2 border-ink bg-zinc-50 p-6 md:p-10 lg:col-span-4 lg:border-b-0 lg:border-r-2">
        <div className="space-y-3">
          <span className="font-mono-tech text-[11px] font-bold uppercase tracking-widest text-zinc-500">
            {about.eyebrow}
          </span>
          <h2 className="font-syne text-3xl font-extrabold text-ink">{about.title}</h2>
          <p className="font-mono-tech text-sm text-zinc-600">{about.caption}</p>
        </div>
        <div className="hidden pt-12 lg:block">
          <div className="space-y-1 border border-ink bg-white p-4 font-mono-tech text-[11px]">
            <div className="text-zinc-500">OPERATING PHILOSOPHY:</div>
            <div className="font-bold">&quot;{about.philosophy}&quot;</div>
          </div>
        </div>
      </div>

      {/* Right content & pillars */}
      <div className="space-y-8 p-6 md:p-10 lg:col-span-8">
        <div className="space-y-4">
          <p className="text-lg font-medium leading-relaxed text-ink md:text-xl">
            {about.lead.prefix}{" "}
            <strong className="bg-ink px-1 font-mono-tech text-white">
              {about.lead.cac}
            </strong>{" "}
            {about.lead.middle}{" "}
            <strong className="bg-accent px-1 font-mono-tech text-ink">
              {about.lead.ltv}
            </strong>
            {about.lead.suffix}
          </p>
          <p className="leading-relaxed text-zinc-600">{about.philosophyBody}</p>
        </div>

        <div className="grid grid-cols-1 border-2 border-ink md:grid-cols-3">
          {about.pillars.map((pillar, i) => (
            <div
              key={pillar.index}
              className={`space-y-2 p-5 ${
                pillar.tone === "muted" ? "bg-zinc-50" : "bg-white"
              } ${i < about.pillars.length - 1 ? "border-b border-ink md:border-b-0 md:border-r" : ""}`}
            >
              <span className="block font-mono-tech text-[10px] font-bold text-zinc-500">
                {pillar.index}
              </span>
              <h3 className="font-syne text-base font-bold text-ink">{pillar.title}</h3>
              <p className="text-xs text-zinc-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
