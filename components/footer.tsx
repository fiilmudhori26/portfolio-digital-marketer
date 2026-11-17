import { navLinks, profile, contact } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-16 w-full border-t-2 border-ink bg-white">
      <div className="mx-auto flex max-w-[1360px] flex-col items-center justify-between gap-6 px-4 py-8 font-mono-tech text-xs md:flex-row md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="inline-block h-3 w-3 bg-ink" aria-hidden="true" />
          <span className="font-bold text-ink">
            {`${profile.name.toUpperCase()} // DIGITAL MARKETER`}
          </span>
          <span className="text-zinc-500">© 2026. HAK CIPTA DILINDUNGI.</span>
        </div>
        <nav aria-label="Navigasi footer" className="flex flex-wrap items-center justify-center gap-6 text-zinc-600">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
          <a
            href={contact.github}
            rel="noopener noreferrer"
            target="_blank"
            className="transition-colors hover:text-ink"
          >
            GITHUB
          </a>
          <a
            href={contact.tiktok}
            rel="noopener noreferrer"
            target="_blank"
            className="transition-colors hover:text-ink"
          >
            TIKTOK {contact.socialLabel}
          </a>
          <a
            href={contact.instagram}
            rel="noopener noreferrer"
            target="_blank"
            className="transition-colors hover:text-ink"
          >
            INSTAGRAM {contact.socialLabel}
          </a>
          <a href="#hero" className="font-bold text-ink hover:underline">
            [KEMBALI KE ATAS]
          </a>
        </nav>
      </div>
    </footer>
  );
}
