import { contact, profile } from "@/lib/content";

const channels = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  {
    label: "LinkedIn",
    value: contact.linkedinLabel,
    href: contact.linkedin,
    external: true,
  },
  {
    label: "WhatsApp",
    value: contact.whatsappLabel,
    href: contact.whatsapp,
    external: true,
  },
];

export function Kontak() {
  return (
    <section
      id="kontak"
      aria-label="Kontak"
      className="border-t border-hairline pt-12 md:pt-16"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Kiri: headline */}
        <div className="space-y-6 lg:col-span-7">
          <h2 className="eyebrow">Kontak</h2>
          <p className="font-serif-display text-[clamp(1.9rem,1.4rem+2.4vw,3.1rem)] font-medium leading-[1.08] text-ink">
            {contact.title}
          </p>
          <p className="max-w-xl leading-relaxed text-muted">
            {contact.subtitle}
          </p>
          <a
            href={profile.cvPath}
            download
            aria-label="Unduh CV Rahmad Akbar (PDF)"
            title="Unduh CV (PDF)"
            className="transition-ui inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-paper hover:bg-[#0c5a41]"
          >
            Unduh CV
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        {/* Kanan: daftar kanal sebagai link editorial */}
        <div className="lg:col-span-5">
          <ul className="divide-y divide-hairline border-y border-hairline">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { rel: "noopener noreferrer", target: "_blank" }
                    : {})}
                  className="group flex items-baseline justify-between gap-6 py-5"
                >
                  <span className="space-y-1">
                    <span className="eyebrow block">{channel.label}</span>
                    <span className="block text-sm font-medium text-ink transition-colors duration-200 group-hover:text-accent">
                      {channel.value}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="arrow-nudge text-muted group-hover:text-accent"
                  >
                    &#8599;
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
