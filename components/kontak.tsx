import { contact, profile } from "@/lib/content";

export function Kontak() {
  return (
    <section
      id="kontak"
      aria-label="Kontak"
      className="space-y-8 border-2 border-ink bg-ink p-8 text-white shadow-[8px_8px_0px_#00fe66] md:p-12"
    >
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 border border-zinc-700 bg-zinc-800 px-3 py-1 font-mono-tech text-xs font-bold uppercase tracking-wider text-accent">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          <span>{contact.eyebrow}</span>
        </div>
        <h2 className="font-syne text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          {contact.title}
        </h2>
        <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
          {contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 border-t-2 border-zinc-800 pt-6 sm:grid-cols-2 lg:grid-cols-4">
        <a
          href={`mailto:${contact.email}`}
          className="group border-2 border-zinc-700 bg-zinc-900 p-4 transition-all hover:border-accent"
        >
          <div className="mb-2 flex items-center justify-between font-mono-tech text-xs font-bold text-accent">
            <span>[EMAIL]</span>
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              arrow_outward
            </span>
          </div>
          <p className="truncate font-syne text-base font-bold text-white transition-colors group-hover:text-accent">
            Kirim Email
          </p>
          <p className="mt-1 truncate font-mono-tech text-[11px] text-zinc-400">
            {contact.email}
          </p>
        </a>

        <a
          href={contact.linkedin}
          rel="noopener noreferrer"
          target="_blank"
          className="group border-2 border-zinc-700 bg-zinc-900 p-4 transition-all hover:border-accent"
        >
          <div className="mb-2 flex items-center justify-between font-mono-tech text-xs font-bold text-accent">
            <span>[LINKEDIN]</span>
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              arrow_outward
            </span>
          </div>
          <p className="truncate font-syne text-base font-bold text-white transition-colors group-hover:text-accent">
            Profil LinkedIn
          </p>
          <p className="mt-1 truncate font-mono-tech text-[11px] text-zinc-400">
            {contact.linkedinLabel}
          </p>
        </a>

        <a
          href={contact.whatsapp}
          rel="noopener noreferrer"
          target="_blank"
          className="group border-2 border-zinc-700 bg-zinc-900 p-4 transition-all hover:border-accent"
        >
          <div className="mb-2 flex items-center justify-between font-mono-tech text-xs font-bold text-accent">
            <span>[WHATSAPP]</span>
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              chat
            </span>
          </div>
          <p className="truncate font-syne text-base font-bold text-white transition-colors group-hover:text-accent">
            WhatsApp Chat
          </p>
          <p className="mt-1 truncate font-mono-tech text-[11px] text-zinc-400">
            {contact.whatsappLabel}
          </p>
        </a>

        <a
          href={profile.cvPath}
          download
          aria-label="Unduh CV (file placeholder — ganti dengan PDF CV asli Anda)"
          title="CV placeholder — ganti dengan PDF asli di public/"
          className="group border-2 border-accent bg-accent p-4 text-ink transition-all hover:bg-white"
        >
          <div className="mb-2 flex items-center justify-between font-mono-tech text-xs font-bold">
            <span>[DOCUMENT]</span>
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              download
            </span>
          </div>
          <p className="truncate font-syne text-base font-bold">Unduh CV (Placeholder)</p>
          <p className="mt-1 font-mono-tech text-[11px] uppercase tracking-wider text-zinc-800">
            {contact.cvNote}
          </p>
        </a>
      </div>
    </section>
  );
}
