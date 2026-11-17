import { profile } from "@/lib/content";

export function StatusTicker() {
  return (
    <aside
      aria-label="Status ketersediaan"
      className="w-full border-b border-ink bg-ink px-4 py-2 font-mono-tech text-[11px] uppercase tracking-wider text-paper md:px-8"
    >
      <div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-bold text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            SYS.AVAILABLE // STATUS: OPEN
          </span>
          <span className="hidden text-zinc-500 sm:inline">|</span>
          <span className="hidden text-zinc-300 sm:inline">
            KETERSEDIAAN: {profile.availability}
          </span>
        </div>
        <div className="flex items-center gap-4 text-zinc-400">
          <span className="hidden md:inline">LOC: {profile.location}</span>
          <span className="hidden text-zinc-500 md:inline">|</span>
          <span className="text-accent">CONTENT &amp; DIGITAL MARKETING</span>
        </div>
      </div>
    </aside>
  );
}
