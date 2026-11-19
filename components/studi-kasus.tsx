"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
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
    <section
      id="studi-kasus"
      aria-label="Studi kasus"
      className="space-y-10 border-t border-hairline pt-10"
    >
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="space-y-4">
          <h2 className="eyebrow">Studi Kasus</h2>
          <p className="font-serif-display text-h2 font-medium text-ink">
            Studi Kasus Terpilih
          </p>
        </div>
        <p className="max-w-[18rem] text-[11px] uppercase leading-relaxed tracking-[0.14em] text-muted">
          Data nyata, tanpa metrik fiksi
        </p>
      </div>

      <FilterBar
        legend="Filter"
        options={options}
        active={active}
        onChange={(v) => setActive(v as FilterValue)}
      />

      <div>
        {visible.map((study) => (
          <article
            key={study.id}
            className="fade-item space-y-6 border-t border-hairline py-10 first:border-t-0 first:pt-2"
          >
            {/* Meta line */}
            <div className="flex flex-wrap items-baseline justify-between gap-2 text-[11px] uppercase tracking-[0.14em] text-muted">
              <p className="max-w-[60ch]">
                <span className="font-semibold text-ink">{study.client}</span>
                <span aria-hidden="true"> · </span>
                {study.code}
              </p>
              <span>{study.period}</span>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif-display max-w-4xl text-[clamp(1.5rem,1.15rem+1.6vw,2.25rem)] font-medium leading-[1.12] text-ink">
                {study.title}
              </h3>
              <p className="max-w-[65ch] leading-relaxed text-muted">
                <span className="font-semibold text-ink">Konteks — </span>
                {study.context}
              </p>
            </div>

            {/* Hasil: angka besar tanpa kotak, dipisah hairline */}
            <dl className="grid grid-cols-1 gap-y-5 border-y border-hairline py-6 sm:grid-cols-3 sm:gap-y-0">
              {study.metrics.map((metric, i) => (
                <div
                  key={metric.label}
                  className={`space-y-1.5 sm:px-6 ${
                    i > 0 ? "border-t border-hairline pt-5 sm:border-t-0 sm:pt-0 sm:border-l" : ""
                  } ${i === 0 ? "sm:pl-0" : ""}`}
                >
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {metric.label}
                  </dt>
                  <dd
                    className={`font-serif-display text-[clamp(1.35rem,1.05rem+1.3vw,1.9rem)] font-medium leading-tight ${
                      metric.highlight ? "text-accent" : "text-ink"
                    }`}
                  >
                    {metric.value}
                  </dd>
                  <dd className="text-xs leading-snug text-muted">{metric.note}</dd>
                </div>
              ))}
            </dl>

            {/* Aksi */}
            <div className="space-y-2">
              <p className="eyebrow">Tindakan Strategis</p>
              <ul className="max-w-[75ch] space-y-2 text-sm leading-relaxed text-ink">
                {study.actions.map((action) => (
                  <li key={action} className="flex gap-3">
                    <span aria-hidden="true" className="text-accent">
                      —
                    </span>
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            {study.link && (
              <div className="border-t border-hairline pt-5">
                <Link
                  href={study.link}
                  className="link-editorial inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent"
                >
                  Buka kalkulator
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            )}
          </article>
        ))}

        {visible.length === 0 && (
          <div className="space-y-4 border-t border-hairline py-14 text-center">
            <h3 className="font-serif-display text-2xl font-medium text-ink">
              Tidak ada studi kasus
            </h3>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-muted">
              Tidak ditemukan studi kasus untuk filter kategori ini. Pilih
              kategori lain atau kembalikan ke semua untuk menampilkan seluruh arsip.
            </p>
            <button
              type="button"
              onClick={() => setActive("all")}
              className="transition-ui cursor-pointer rounded-sm border border-accent px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent hover:bg-accent hover:text-paper"
            >
              Tampilkan Semua
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
