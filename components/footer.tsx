import { navLinks, profile, contact } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-hairline md:mt-28">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <p className="text-xs text-muted">
          <span className="font-serif-display text-sm font-semibold text-ink">
            {profile.name}
          </span>
          {"  "}· © 2026 Rahmad Akbar.
        </p>
        <nav
          aria-label="Navigasi footer"
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors duration-200 hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href={contact.github}
            rel="noopener noreferrer"
            target="_blank"
            className="transition-colors duration-200 hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={contact.tiktok}
            rel="noopener noreferrer"
            target="_blank"
            className="transition-colors duration-200 hover:text-accent"
          >
            TikTok
          </a>
          <a
            href={contact.instagram}
            rel="noopener noreferrer"
            target="_blank"
            className="transition-colors duration-200 hover:text-accent"
          >
            Instagram
          </a>
          <a href="#hero" className="link-editorial text-ink">
            Kembali ke atas
          </a>
        </nav>
      </div>
    </footer>
  );
}
