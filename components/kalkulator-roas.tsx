"use client";

import { useState } from "react";

/* Formatter module-scope — dibuat sekali, dipakai berulang */
const idrFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

const decimalFormatter = new Intl.NumberFormat("id-ID", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

type Verdict = "untung" | "belum-breakeven" | "merugi";

/* Toleransi float untuk mendeteksi titik impas (dalam rupiah) */
const IMPASS_TOLERANCE = 0.005;

const impasCopy = {
  label: "Iklan pas di titik impas",
  body: "Iklan pas di titik impas — revenue menutup spend persis, belum ada profit yang tersisa. Perbaiki margin kontribusi, turunkan CAC, atau perkecil kebocoran di funnel sebelum menambah budget.",
};

const verdictCopy: Record<Verdict, { label: string; body: string }> = {
  untung: {
    label: "Iklan untung",
    body: "ROAS di atas breakeven dan kontribusi profit positif. Naikkan budget bertahap (misalnya +20–30% per minggu sambil memantau CAC dan frekuensi), lalu uji variasi kreatif baru agar performa tetap stabil saat scale.",
  },
  "belum-breakeven": {
    label: "Iklan belum breakeven",
    body: "ROAS masih di bawah breakeven, jadi iklan belum menutup spend setelah margin. Audit targeting (audience terlalu luas atau terlalu sempit?), kreatif (hook 3 detik pertama), dan landing page (message match & kecepatan muat) sebelum menambah budget.",
  },
  merugi: {
    label: "Merugi",
    body: "Belum ada revenue atribusi sementara spend sudah berjalan. Kaji ulang atribusi Anda (apakah konversi benar-benar kosong, atau hanya tidak tercatat?) dan funnel: dari klik → landing page → checkout. Jangan tambah budget sampai akar masalahnya jelas.",
  },
};

interface FieldProps {
  id: string;
  label: string;
  unit: string;
  hint: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

function Field({ id, label, unit, hint, value, placeholder, onChange }: FieldProps) {
  const hintId = `${id}-hint`;
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          name={id}
          type="number"
          min={0}
          inputMode="decimal"
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          aria-describedby={hintId}
          className={`w-full rounded-sm border border-hairline bg-paper py-3 pl-4 text-base text-ink tabular-nums transition-colors placeholder:text-muted hover:border-ink focus:border-accent ${
            unit.length > 2 ? "pr-16" : "pr-12"
          }`}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-muted"
        >
          {unit}
        </span>
      </div>
      <p id={hintId} className="text-xs leading-snug text-muted">
        {hint}
      </p>
    </div>
  );
}

interface ResultCellProps {
  label: string;
  value: string;
  note: string;
  accent?: boolean;
}

function ResultCell({ label, value, note, accent = false }: ResultCellProps) {
  return (
    <div className="space-y-2 bg-paper p-5 md:p-6">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
        {label}
      </p>
      <p
        className={`font-serif-display text-[clamp(1.5rem,1.1rem+1.6vw,2.1rem)] font-medium leading-none tabular-nums ${
          accent ? "text-accent" : "text-ink"
        }`}
      >
        {value}
      </p>
      <p className="text-xs leading-snug text-muted">{note}</p>
    </div>
  );
}

export function KalkulatorRoas() {
  const [spend, setSpend] = useState("5000000");
  const [revenue, setRevenue] = useState("18000000");
  const [pelanggan, setPelanggan] = useState("40");
  const [margin, setMargin] = useState("60");

  const spendNum = spend.trim() === "" ? Number.NaN : Number(spend);
  const revenueNum = revenue.trim() === "" ? Number.NaN : Number(revenue);
  const pelangganNum = pelanggan.trim() === "" ? Number.NaN : Number(pelanggan);
  const marginNum = margin.trim() === "" ? Number.NaN : Number(margin);

  const isValid =
    Number.isFinite(spendNum) &&
    spendNum > 0 &&
    Number.isFinite(revenueNum) &&
    revenueNum >= 0 &&
    Number.isFinite(pelangganNum) &&
    pelangganNum > 0 &&
    Number.isFinite(marginNum) &&
    marginNum > 0 &&
    marginNum <= 100;

  const cac = isValid ? spendNum / pelangganNum : null;
  const roas = isValid ? revenueNum / spendNum : null;
  const breakevenRoas = isValid ? 100 / marginNum : null;
  const kontribusiProfit = isValid ? revenueNum * (marginNum / 100) - spendNum : null;

  const verdict: Verdict | null =
    roas === null || kontribusiProfit === null || breakevenRoas === null
      ? null
      : roas >= breakevenRoas - 1e-9 && kontribusiProfit > -IMPASS_TOLERANCE
        ? "untung"
        : roas > 0
          ? "belum-breakeven"
          : "merugi";

  const isImpas = kontribusiProfit !== null && Math.abs(kontribusiProfit) <= IMPASS_TOLERANCE;
  const activeVerdictCopy =
    verdict === "untung" && isImpas ? impasCopy : verdict !== null ? verdictCopy[verdict] : null;

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
      {/* ---------- Form input ---------- */}
      <form
        className="lg:col-span-5"
        onSubmit={(event) => event.preventDefault()}
        aria-label="Input data iklan"
      >
        <div className="grid grid-cols-1 gap-5 rounded-sm border border-hairline bg-paper p-6 sm:grid-cols-2 md:p-8">
          <Field
            id="spend-iklan"
            label="Spend iklan"
            unit="Rp"
            hint="Total belanja iklan di Meta, Google, atau TikTok Ads."
            value={spend}
            placeholder="5000000"
            onChange={setSpend}
          />
          <Field
            id="revenue-atribusi"
            label="Revenue atribusi"
            unit="Rp"
            hint="Revenue yang bisa diatribusikan ke iklan (platform/GA4)."
            value={revenue}
            placeholder="18000000"
            onChange={setRevenue}
          />
          <Field
            id="pelanggan-baru"
            label="Pelanggan baru"
            unit="orang"
            hint="Jumlah pelanggan baru yang ditelusuri ke iklan."
            value={pelanggan}
            placeholder="40"
            onChange={setPelanggan}
          />
          <Field
            id="margin-kontribusi"
            label="Margin kontribusi"
            unit="%"
            hint="Margin kontribusi produk setelah biaya variabel (0–100%)."
            value={margin}
            placeholder="60"
            onChange={setMargin}
          />
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          Hasil dihitung otomatis setiap kali Anda mengetik — tidak perlu tombol
          submit. Kosongkan atau isi 0 pada Spend, Pelanggan, atau Margin untuk
          mereset tampilan.
        </p>
      </form>

      {/* ---------- Hasil real-time ---------- */}
      <div className="lg:col-span-7" role="region" aria-label="Hasil perhitungan">
        {isValid && cac !== null && roas !== null && breakevenRoas !== null && kontribusiProfit !== null ? (
          <div className="overflow-hidden rounded-sm border border-hairline">
            <div
              aria-live="polite"
              aria-atomic="true"
              className="grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2"
            >
              <ResultCell
                label="CAC"
                value={idrFormatter.format(cac)}
                note="Biaya akuisisi per pelanggan baru (spend ÷ pelanggan)."
              />
              <ResultCell
                label="ROAS"
                value={`${decimalFormatter.format(roas)}×`}
                note="Revenue per Rp 1 yang dibelanjakan untuk iklan."
              />
              <ResultCell
                label="Breakeven ROAS"
                value={`${decimalFormatter.format(breakevenRoas)}×`}
                note="ROAS minimum agar kontribusi profit tidak negatif (1 ÷ margin)."
              />
              <ResultCell
                label="Kontribusi profit"
                value={idrFormatter.format(kontribusiProfit)}
                note="Revenue × margin kontribusi − spend iklan."
                accent={kontribusiProfit >= -IMPASS_TOLERANCE}
              />
            </div>

            {verdict !== null && activeVerdictCopy !== null && (
              <div
                className={`border-t border-hairline p-5 md:p-6 ${
                  verdict === "untung" ? "bg-accent/5" : "bg-paper"
                }`}
              >
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em]">
                  <span
                    aria-hidden="true"
                    className={`inline-block h-2 w-2 rounded-full ${
                      verdict === "untung" ? "bg-accent" : "bg-ink"
                    }`}
                  />
                  <span className={verdict === "untung" ? "text-accent" : "text-ink"}>
                    {activeVerdictCopy.label}
                  </span>
                </p>
                <p className="mt-3 max-w-[70ch] text-sm leading-relaxed text-ink">
                  {activeVerdictCopy.body}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex h-full min-h-48 flex-col items-start justify-center gap-3 rounded-sm border border-dashed border-hairline bg-paper p-6 md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              Menunggu input
            </p>
            <p className="max-w-[60ch] text-sm leading-relaxed text-muted">
              Isi keempat kolom di samping untuk melihat CAC, ROAS, breakeven
              ROAS, dan kontribusi profit. Contoh: spend Rp 5.000.000, revenue
              Rp 18.000.000, pelanggan 40 orang, margin 60%.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
