import { keyMetrics } from "@/lib/content";

export function KeyMetrics() {
  return (
    <section aria-label="Angka kunci" className="border-t border-hairline pt-10">
      <div className="mb-8 flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="eyebrow">Angka Kunci</h2>
        <p className="text-[11px] uppercase tracking-[0.14em] text-muted">
          Pengalaman &amp; Proyek 2024–2026
        </p>
      </div>

      <div className="grid grid-cols-2 gap-px border-y border-hairline bg-hairline lg:grid-cols-4">
        {keyMetrics.map((metric) => (
          <div
            key={metric.index}
            className="flex flex-col justify-between gap-6 bg-paper p-5 sm:p-7"
          >
            <p className="text-[10px] font-semibold uppercase leading-snug tracking-[0.14em] text-muted">
              {metric.label}
            </p>
            <div>
              <p className="font-serif-display text-metric font-medium text-ink">
                {metric.value}
                {metric.unit && (
                  <span className="ml-1 align-baseline font-sans text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                    {metric.unit}
                  </span>
                )}
              </p>
              <p className="mt-3 text-[10px] uppercase leading-snug tracking-[0.12em] text-muted">
                {metric.tag}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
