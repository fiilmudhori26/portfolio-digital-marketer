"use client";

import { useMemo, useState } from "react";
import { caseStudies, caseFilters, type CaseCategory } from "@/lib/content";
import { FilterBar } from "./filter-bar";

type FilterValue = CaseCategory | "all";

export function StudiKasus() {
  const [active, setActive] = useState<FilterValue>("all");

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const f of caseFilters) {
      map.set(
        f.value,
        f.value === "all"
          ? caseStudies.length
          : caseStudies.filter((c) =>
              c.categories.includes(f.value as CaseCategory),
            ).length,
      );
    }
    return map;
  }, []);

  const options = caseFilters.map((f) => ({
    label: f.label,
    value: f.value,
    count: counts.get(f.value) ?? 0,
  }));

  const visible = caseStudies.filter(
    (c) => active === "all" || c.categories.includes(active as CaseCategory),
  );

  return (
    <section id="studi-kasus" aria-label="Studi kasus" className="space-y-8">
      <div className="flex flex-col justify-between gap-4 border-b-2 border-ink pb-4 md:flex-row md:items-end">
        <div>
          <span className="font-mono-tech text-xs font-bold uppercase tracking-widest text-zinc-500">
            [03 // REKAM JEJAK EKSEKUSI]
          </span>
          <h2 className="font-syne text-h2 font-extrabold text-ink">
            Studi Kasus Terpilih
          </h2>
        </div>
        <div className="bg-ink px-3 py-1 font-mono-tech text-xs font-bold text-accent">
          DATA NYATA // TANPA METRIK FIKSI
        </div>
      </div>

      <FilterBar
        legend="FILTER_BY:"
        options={options}
        active={active}
        onChange={(v) => setActive(v as FilterValue)}
      />

      <div className="space-y-8">
        {visible.map((study) => (
          <article
            key={study.id}
            className="filter-item border-2 border-ink bg-white shadow-[6px_6px_0px_#09090b] transition-shadow duration-200 hover:shadow-[9px_9px_0px_#09090b]"
          >
            {/* Case header meta */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink bg-zinc-100 px-6 py-3 font-mono-tech text-xs">
              <div className="flex items-center gap-2">
                <span className="bg-ink px-2 py-0.5 font-bold text-white">
                  {study.code}
                </span>
                <span className="font-bold text-ink">{study.client}</span>
              </div>
              <span className="text-zinc-600">{study.period}</span>
            </div>

            <div className="space-y-6 p-6 md:p-8">
              <div className="space-y-2">
                <h3 className="font-syne text-[clamp(1.375rem,1.1rem+1.2vw,1.875rem)] font-extrabold leading-tight text-ink">
                  {study.title}
                </h3>
                <p className="font-mono-tech text-sm text-zinc-600">
                  <span className="font-bold text-ink">Konteks:</span> {study.context}
                </p>
              </div>

              {/* Impact ledger */}
              <div className="grid grid-cols-1 gap-px border-2 border-ink bg-ink md:grid-cols-3">
                {study.metrics.map((metric) =>
                  metric.highlight ? (
                    <div key={metric.label} className="bg-ink p-4 text-white">
                      <span className="block font-mono-tech text-[10px] font-semibold uppercase text-accent">
                        {metric.label}
                      </span>
                      <span className="font-syne text-[clamp(1.5rem,1.2rem+1.4vw,1.875rem)] font-extrabold text-accent">
                        {metric.value}
                      </span>
                      <span className="mt-1 block font-mono-tech text-[11px] text-zinc-300">
                        {metric.note}
                      </span>
                    </div>
                  ) : (
                    <div key={metric.label} className="bg-zinc-50 p-4">
                      <span className="block font-mono-tech text-[10px] font-semibold uppercase text-zinc-500">
                        {metric.label}
                      </span>
                      <span className="font-syne text-[clamp(1.5rem,1.2rem+1.4vw,1.875rem)] font-extrabold text-ink">
                        {metric.value}
                      </span>
                      <span className="mt-1 block font-mono-tech text-[11px] text-zinc-500">
                        {metric.note}
                      </span>
                    </div>
                  ),
                )}
              </div>

              {/* Action list */}
              <div className="space-y-2 border border-ink bg-zinc-50 p-4">
                <span className="block font-mono-tech text-xs font-bold uppercase tracking-wider text-ink">
                  [TINDAKAN STRATEGIS DIEKSEKUSI]:
                </span>
                <ul className="list-inside list-disc space-y-1.5 font-mono-tech text-xs leading-relaxed text-zinc-700 marker:text-ink">
                  {study.actions.map((action) => (
                    <li key={action}>{action}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}

        {visible.length === 0 && (
          <div className="space-y-3 border-2 border-dashed border-ink bg-white p-8 text-center md:p-12">
            <div className="mx-auto flex h-12 w-12 items-center justify-center border-2 border-ink bg-zinc-100 font-mono-tech font-bold text-ink">
              <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
                folder_off
              </span>
            </div>
            <h4 className="font-syne text-lg font-bold text-ink">
              DATA_NOT_FOUND // HASIL KOSONG
            </h4>
            <p className="mx-auto max-w-md font-mono-tech text-xs text-zinc-500">
              Tidak ditemukan studi kasus untuk filter kategori ini. Pilih kategori lain
              atau kembalikan ke SEMUA [ALL] untuk menampilkan seluruh arsip.
            </p>
            <button
              type="button"
              onClick={() => setActive("all")}
              className="mt-2 cursor-pointer border border-ink bg-ink px-4 py-2 font-mono-tech text-xs font-bold uppercase tracking-wider text-accent transition-colors hover:bg-accent hover:text-ink"
            >
              RESET_FILTER [ALL]
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
