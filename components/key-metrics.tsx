import { keyMetrics } from "@/lib/content";

const cellTone: Record<string, string> = {
  light: "bg-white",
  muted: "bg-zinc-50",
  dark: "bg-ink text-white",
};

export function KeyMetrics() {
  return (
    <section aria-label="Angka kunci" className="space-y-2">
      <div className="flex items-center justify-between gap-2 border-b border-zinc-200 pb-2 font-mono-tech text-[11px] uppercase text-zinc-500">
        <span>[LEDGER: METRIK NYATA]</span>
        <span>PENGALAMAN &amp; PROYEK 2024-2026</span>
      </div>
      <div className="grid grid-cols-2 border-2 border-ink bg-white shadow-[4px_4px_0px_#09090b] lg:grid-cols-4">
        {keyMetrics.map((metric) => {
          const dark = metric.tone === "dark";
          return (
            <div
              key={metric.index}
              className={`flex flex-col justify-between border-ink p-5 md:p-7 ${metric.cellClass} ${cellTone[metric.tone]}`}
            >
              <span
                className={`font-mono-tech text-[11px] uppercase tracking-wider ${
                  dark ? "text-accent" : "text-zinc-500"
                }`}
              >
                {`${metric.index} // ${metric.label}`}
              </span>
              <div className="my-4 flex items-baseline gap-1">
                <span
                  className={`font-syne text-metric font-extrabold ${
                    dark ? "text-accent" : "text-ink"
                  }`}
                >
                  {metric.value}
                </span>
                {metric.unit && (
                  <span className="font-mono-tech text-lg font-bold text-zinc-500">
                    {metric.unit}
                  </span>
                )}
              </div>
              <span
                className={`w-fit border px-2 py-0.5 font-mono-tech text-[10px] ${
                  dark
                    ? "border-zinc-700 bg-zinc-800 text-zinc-300"
                    : metric.tone === "muted"
                      ? "border-emerald-300 bg-emerald-50 font-bold text-emerald-700"
                      : "border-zinc-300 bg-zinc-100 text-zinc-600"
                }`}
              >
                {metric.tag}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
