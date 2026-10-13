import { media, type MediaName } from "@/content/media.generated";
import { srcSet } from "@/lib/media";

type PictureProps = {
  name: MediaName;
  alt: string;
  /** `sizes` za browser: koliko je slika široka na ekranu. */
  sizes: string;
  className?: string;
  /** Klasa za sam <picture>, npr. `contents` kad slika treba da bude flex element. */
  pictureClassName?: string;
  /**
   * `lazy` za sve ispod pregiba; `eager` za male slike na vrhu (logo);
   * `priority` samo za glavnu sliku hero sekcije (LCP).
   */
  load?: "lazy" | "eager" | "priority";
};

export function Picture({ name, alt, sizes, className, pictureClassName, load = "lazy" }: PictureProps) {
  const image = media[name];
  const fallback = image.webp[image.webp.length - 1];

  return (
    <picture className={pictureClassName}>
      <source type="image/avif" srcSet={srcSet(image.avif)} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(image.webp)} sizes={sizes} />
      <img
        src={fallback.src}
        alt={alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        className={className}
        loading={load === "lazy" ? "lazy" : "eager"}
        fetchPriority={load === "priority" ? "high" : "auto"}
        decoding={load === "priority" ? "sync" : "async"}
      />
    </picture>
  );
}
