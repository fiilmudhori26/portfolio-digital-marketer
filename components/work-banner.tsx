import { EditorialFigure } from "./editorial-figure";

/**
 * Banner foto lebar sebelum Studi Kasus.
 * Tagline diambil dari headline hero yang sudah ada — tanpa klaim baru.
 */
export function WorkBanner() {
  return (
    <section aria-label="Suasana kerja kolaboratif (foto ilustrasi)" className="space-y-4">
      <EditorialFigure
        src="/images/team.jpg"
        alt="Tampak atas sekelompok orang bekerja bersama di meja dengan laptop masing-masing"
        caption="Suasana kerja kolaboratif (foto ilustrasi)"
        sizes="(min-width: 1200px) 1200px, 100vw"
        aspectClass="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]"
      />
      <p className="font-serif-display text-xl font-medium italic leading-snug text-ink sm:text-2xl">
        Eksekusi konten, sampai jadi studi kasus{" "}
        <span className="text-accent">nyata</span>.
      </p>
    </section>
  );
}
