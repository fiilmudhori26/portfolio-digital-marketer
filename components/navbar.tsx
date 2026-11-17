"use client";

import { useState } from "react";
import { navLinks, profile } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-hairline bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex min-h-[60px] max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        {/* Brand */}
        <a href="#hero" className="group flex items-baseline gap-3 py-4">
          <span className="font-serif-display text-lg font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-accent">
            {profile.name}
          </span>
          <span className="hidden text-[11px] font-medium uppercase tracking-[0.16em] text-muted sm:inline">
            {profile.shortRole}
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Navigasi utama" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-editorial text-[11px] font-semibold uppercase tracking-[0.14em] text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.cvPath}
            download
            aria-label="Unduh CV Rahmad Akbar (PDF)"
            title="Unduh CV (PDF)"
            className="transition-ui rounded-sm border border-ink/25 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink hover:border-accent hover:text-accent"
          >
            Unduh CV
          </a>
          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="transition-ui flex h-10 w-10 items-center justify-center rounded-sm text-ink hover:bg-hairline/60 lg:hidden"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              {open ? (
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6h14M3 10h14M3 14h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Navigasi mobile"
          className="border-t border-hairline bg-paper lg:hidden"
        >
          <ul className="mx-auto max-w-[1200px] divide-y divide-hairline px-5 py-2 sm:px-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors duration-200 hover:text-accent"
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true" className="text-muted">
                    &rarr;
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
