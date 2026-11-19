import Image from "next/image";

type EditorialFigureProps = {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
  sizes: string;
  aspectClass?: string;
  className?: string;
};

/**
 * Gambar editorial: hairline border, rounded 2px, tanpa hard shadow.
 * Figcaption: teks kecil abu-abu + kredit "Foto: Unsplash".
 */
export function EditorialFigure({
  src,
  alt,
  caption,
  priority = false,
  sizes,
  aspectClass = "aspect-[4/3]",
  className = "",
}: EditorialFigureProps) {
  return (
    <figure className={className}>
      <div
        className={`relative overflow-hidden rounded-[2px] border border-hairline ${aspectClass}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes={sizes}
          className="object-cover"
        />
      </div>
      <figcaption className="mt-2 flex items-baseline justify-between gap-4 text-[11px] leading-snug text-muted">
        <span>{caption}</span>
        <span className="shrink-0">Foto: Unsplash</span>
      </figcaption>
    </figure>
  );
}
