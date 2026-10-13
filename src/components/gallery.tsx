import { gallery, galleryIntro } from "@/content/gallery";
import { site } from "@/content/site";
import { GalleryViewer } from "./gallery-viewer";
import { Icon } from "./icon";
import { Picture } from "./picture";
import { SectionHeading } from "./section-heading";

export function Gallery() {
  const slides = gallery.map((item) => (
    <Picture
      key={item.image}
      name={item.image}
      alt={item.alt}
      sizes="(min-width: 64rem) 60rem, 100vw"
      className="max-h-full w-auto max-w-full object-contain"
      pictureClassName="contents"
    />
  ));

  return (
    <section id="radovi" aria-labelledby="radovi-title" className="border-t border-border py-section">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-xl">
            <SectionHeading id="radovi-title" eyebrow="Radovi" title="Naši projekti" />
            <p className="mt-8 text-lg">{galleryIntro}</p>
          </div>
          <a
            href={site.instagram.url}
            className="inline-flex min-h-12 items-center gap-2 rounded-base border border-primary px-5 font-medium text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Icon name="instagram" />
            {site.instagram.handle}
          </a>
        </div>

        <GalleryViewer
          slides={slides}
          items={gallery.map(({ caption, instagramUrl }) => ({ caption, instagramUrl }))}
        >
          <ul className="mt-12 columns-2 gap-4 sm:gap-6 lg:columns-3">
            {gallery.map((item, index) => (
              <li key={item.image} className="mb-6 break-inside-avoid sm:mb-8">
                <button
                  type="button"
                  data-gallery-index={index}
                  aria-haspopup="dialog"
                  className="block w-full cursor-zoom-in overflow-hidden bg-border"
                >
                  <Picture
                    name={item.image}
                    alt={item.alt}
                    sizes="(min-width: 80rem) 25rem, (min-width: 64rem) 31vw, 46vw"
                    className="h-auto w-full"
                  />
                </button>
                <p className="mt-2 text-sm text-muted">{item.caption}</p>
              </li>
            ))}
          </ul>
        </GalleryViewer>
      </div>
    </section>
  );
}
