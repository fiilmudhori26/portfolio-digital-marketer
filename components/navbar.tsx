"use client";

import { useState } from "react";
import { navLinks, profile } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-ink bg-white">
      <div className="mx-auto flex min-h-[64px] max-w-[1360px] items-stretch justify-between">
        {/* Brand monogram */}
        <a
          href="#hero"
          className="group flex items-center gap-3 border-r-2 border-ink px-5 transition-colors hover:bg-ink hover:text-accent md:px-8"
        >
          <div className="flex h-8 w-8 items-center justify-center bg-ink font-mono-tech text-xs font-bold tracking-tighter text-white transition-colors group-hover:bg-accent group-hover:text-ink">
            {profile.monogram}
          </div>
          <div className="flex flex-col">
            <span className="font-syne text-base font-extrabold leading-none tracking-tight">
              {profile.name.toUpperCase()}
            </span>
            <span className="mt-0.5 font-mono-tech text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300">
              {profile.shortRole}
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Navigasi utama"
          className="hidden items-stretch font-mono-tech text-xs font-semibold tracking-wider lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center border-r border-ink px-5 transition-colors hover:bg-ink hover:text-white"
            >
              {`${link.index} // ${link.label}`}
            </a>
          ))}
        </nav>

        <div className="flex items-stretch">
          <a
            href={profile.cvPath}
            download
            aria-label="Unduh CV Rahmad Akbar (PDF)"
            title="Unduh CV (PDF)"
            className="flex items-center justify-center gap-2 bg-ink px-4 font-mono-tech text-xs font-bold uppercase tracking-wider text-accent transition-all hover:bg-accent hover:text-ink sm:px-6 md:px-8"
          >
            <span>UNDUH CV</span>
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              terminal
            </span>
          </a>
          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="flex w-12 items-center justify-center border-l-2 border-ink bg-white text-ink transition-colors hover:bg-zinc-100 lg:hidden"
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Navigasi mobile"
          className="border-t-2 border-ink bg-white lg:hidden"
        >
          <ul className="divide-y divide-zinc-200 font-mono-tech text-xs font-semibold uppercase tracking-wider">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-ink hover:text-accent"
                >
                  <span>
                    {`${link.index} // ${link.label}`}
                  </span>
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    arrow_forward
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
