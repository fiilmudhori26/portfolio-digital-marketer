export interface FilterOption {
  label: string;
  value: string;
  count: number;
}

interface FilterBarProps {
  legend: string;
  options: FilterOption[];
  active: string;
  onChange: (value: string) => void;
}

/** Bar filter brutalist - dipakai oleh section Studi Kasus. */
export function FilterBar({ legend, options, active, onChange }: FilterBarProps) {
  return (
    <div
      className="flex flex-wrap items-center gap-2 pt-1 font-mono-tech text-xs"
      role="group"
      aria-label={legend}
    >
      <span className="mr-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase text-zinc-500">
        <span className="h-1.5 w-1.5 bg-ink" aria-hidden="true" />
        {legend}
      </span>
      {options.map((option) => {
        const isActive = option.value === active;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={isActive}
            className={`brutal-hover flex cursor-pointer items-center gap-2 border-2 border-ink px-3 py-1.5 font-bold shadow-[2px_2px_0px_#09090b] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#09090b] ${
              isActive
                ? "bg-ink text-accent"
                : "bg-white text-ink hover:bg-zinc-100"
            }`}
          >
            <span>{option.label}</span>
            <span
              className={`border px-1 py-0.5 text-[10px] ${
                isActive
                  ? "border-zinc-700 bg-zinc-800 text-white"
                  : "border-zinc-300 bg-zinc-100 text-zinc-600"
              }`}
            >
              {String(option.count).padStart(2, "0")}
            </span>
          </button>
        );
      })}
    </div>
  );
}
