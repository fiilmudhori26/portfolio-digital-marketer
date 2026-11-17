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

/** Filter studi kasus — editorial, hairline, tanpa brutalism. */
export function FilterBar({ legend, options, active, onChange }: FilterBarProps) {
  return (
    <div
      className="flex flex-wrap items-center gap-2"
      role="group"
      aria-label={legend}
    >
      <span className="eyebrow mr-2">{legend}</span>
      {options.map((option) => {
        const isActive = option.value === active;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={isActive}
            className={`transition-ui cursor-pointer rounded-sm border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] ${
              isActive
                ? "border-accent bg-accent text-paper"
                : "border-hairline bg-transparent text-ink hover:border-accent hover:text-accent"
            }`}
          >
            {option.label}
            <span
              className={`ml-2 align-super text-[9px] ${
                isActive ? "text-paper/80" : "text-muted"
              }`}
            >
              {option.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
