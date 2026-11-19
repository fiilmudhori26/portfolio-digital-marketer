import { about } from "@/lib/content";
import { EditorialFigure } from "./editorial-figure";

export function Tentang() {
  return (
    <section
      id="tentang"
      aria-label="Tentang saya"
      className="grid grid-cols-1 gap-10 border-t border-hairline pt-10 lg:grid-cols-12 lg:gap-16"
    >
      {/* Kolom kiri: judul + filosofi */}
      <div className="flex flex-col justify-between gap-8 lg:col-span-4">
        <div className="space-y-4">
          <h2 className="eyebrow">Tentang Saya</h2>
          <p className="font-serif-display text-h2 font-medium text-ink">
            Mahasiswa, praktisi konten, dan <em className="italic text-accent">builder</em>.
          </p>
        </div>
        <blockquote className="border-l-2 border-accent pl-5">
          <p className="font-serif-display text-lg italic leading-snug text-ink">
            &ldquo;{about.philosophy}&rdquo;
          </p>
        </blockquote>
      </div>

      {/* Kolom kanan: narasi + pilar */}
      <div className="space-y-10 lg:col-span-8">
        <div className="space-y-5">
          <p className="max-w-[62ch] text-lg font-medium leading-relaxed text-ink md:text-xl md:leading-relaxed">
            {about.lead.prefix}{" "}
            <span className="font-semibold text-accent">{about.lead.highlightA}</span>{" "}
            {about.lead.middle}{" "}
            <span className="font-semibold text-accent">{about.lead.highlightB}</span>
            {about.lead.suffix}
          </p>
          <p className="max-w-[62ch] leading-relaxed text-muted">
            {about.philosophyBody}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-hairline pt-6 md:grid-cols-12">
          <EditorialFigure
            src="/images/desk.jpg"
            alt="Meja kerja berisi laptop, cangkir kopi, dan catatan tangan"
            caption="Meja kerja: tempat rencana konten dieksekusi"
            sizes="(min-width: 1200px) 400px, (min-width: 768px) 30vw, 100vw"
            aspectClass="aspect-[4/3]"
            className="md:col-span-4"
          />

          <ol className="grid grid-cols-1 gap-y-6 self-center sm:grid-cols-3 sm:gap-x-6 md:col-span-8">
          {about.pillars.map((pillar, i) => (
            <li key={pillar.index} className="space-y-2">
              <span
                className="font-serif-display text-sm font-semibold italic text-accent"
                aria-hidden="true"
              >
                0{i + 1}
              </span>
              <h3 className="font-serif-display text-lg font-semibold leading-snug text-ink">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
