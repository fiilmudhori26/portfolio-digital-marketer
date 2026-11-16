"use client";

import { useMemo, useState } from "react";
import { articles, articleFilters, type CaseCategory } from "@/lib/content";
import { FilterBar } from "./filter-bar";

type FilterValue = CaseCategory | "all";

export function Artikel() {
  const [active, setActive] = useState<FilterValue>("all");

  const options = useMemo(
    () =>
      articleFilters.map((f) => ({
        label: f.label,
        value: f.value,
        count:
          f.value === "all"
            ? articles.length
            : articles.filter((a) =>
                a.categories.includes(f.value as CaseCategory),
              ).length,
      })),
    [],
  );

  const visible = articles.filter(
    (a) => active === "all" || a.categories.includes(active as CaseCategory),
  );

  return (
    <section id="artikel" aria-label="Publikasi dan artikel" className="space-y-6">
      <div className="flex flex-col justify-between gap-2 border-b-2 border-ink pb-4 md:flex-row md:items-end">
        <div>
          <span className="font-mono-tech text-xs font-bold uppercase tracking-widest text-zinc-500">
            [05 // PUBLIKASI &amp; ARTIKEL]
          </span>
          <h2 className="font-syne text-3xl font-extrabold tracking-tight text-ink">
            TULISAN &amp; THOUGHT LEADERSHIP
          </h2>
        </div>
        <p className="font-mono-tech text-xs text-zinc-500">
          {"// EKSPLORASI TAKTIKAL MENGENAI ATTRIBUTION, CRO, & UNIT ECONOMICS"}
        </p>
      </div>

      <FilterBar
        legend="KATEGORI:"
        options={options}
        active={active}
        onChange={(v) => setActive(v as FilterValue)}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {visible.map((article) => (
          <article
            key={article.id}
            className="group flex flex-col justify-between border-2 border-ink bg-white shadow-[4px_4px_0px_#09090b] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#09090b]"
          >
            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-3 font-mono-tech text-[10px]">
                <span className="bg-ink px-2 py-0.5 font-bold text-accent">
                  {article.tag}
                </span>
                <div className="flex items-center gap-2 font-semibold text-zinc-500">
                  <span>{article.readTime}</span>
                  <span aria-hidden="true">•</span>
                  <span>{article.date}</span>
                </div>
              </div>
              <h3 className="font-syne text-lg font-bold leading-snug text-ink transition-colors group-hover:text-emerald-700 md:text-xl">
                {article.title}
              </h3>
              <p className="text-xs leading-relaxed text-zinc-600">
                {article.excerpt}
              </p>
            </div>
            <div className="space-y-4 p-6 pt-0">
              <div className="flex items-center justify-between border border-ink bg-zinc-50 px-3 py-2">
                <span className="font-mono-tech text-[10px] font-semibold uppercase text-zinc-500">
                  IMPACT / METRIC
                </span>
                <span
                  className={`border px-1.5 py-0.5 font-mono-tech text-xs font-bold ${
                    article.metricHighlight
                      ? "border-emerald-400 bg-emerald-100 text-emerald-700"
                      : "border-zinc-400 bg-zinc-200 text-ink"
                  }`}
                >
                  {article.metric}
                </span>
              </div>
              {article.href === "#" ? (
                <button
                  type="button"
                  disabled
                  aria-label="(placeholder — artikel belum tersedia)"
                  title="Artikel belum tersedia"
                  className="flex w-full cursor-not-allowed items-center justify-between border border-ink bg-ink px-4 py-2.5 font-mono-tech text-xs font-bold uppercase tracking-wider text-white"
                >
                  <span>BACA ARTIKEL</span>
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    north_east
                  </span>
                </button>
              ) : (
                <a
                  href={article.href}
                  aria-label={`Baca artikel: ${article.title}`}
                  className="flex w-full items-center justify-between border border-ink bg-ink px-4 py-2.5 font-mono-tech text-xs font-bold uppercase tracking-wider text-white transition-colors group-hover:bg-accent group-hover:text-ink"
                >
                  <span>BACA ARTIKEL</span>
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    north_east
                  </span>
                </a>
              )}
            </div>
          </article>
        ))}

        {visible.length === 0 && (
          <div className="col-span-1 space-y-3 border-2 border-dashed border-ink bg-white p-8 text-center md:col-span-3 md:p-12">
            <div className="mx-auto flex h-12 w-12 items-center justify-center border-2 border-ink bg-zinc-100 font-mono-tech font-bold text-ink">
              <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
                drafts
              </span>
            </div>
            <h4 className="font-syne text-lg font-bold text-ink">
              NO_DOCS_IN_QUEUE // ARSIP KOSONG
            </h4>
            <p className="mx-auto max-w-md font-mono-tech text-xs text-zinc-500">
              Belum ada publikasi atau artikel yang dirilis pada kategori ini. Silakan
              akses kategori topik lain atau reset ke SEMUA [ALL].
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
