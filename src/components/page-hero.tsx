import Link from "next/link";
import type { ReactNode } from "react";
import type { MediaName } from "@/content/media.generated";
import { Icon } from "./icon";
import { Picture } from "./picture";

type PageHeroProps = {
  /** Naziv stranice u putanji (Početna › …). */
  label: string;
  title: string;
  lead?: string;
  /** Sa slikom: tekst lijevo, slika desno (na telefonu ispod teksta). */
  image?: { name: MediaName; alt: string };
  children?: ReactNode;
};

/** Vrh unutrašnjih stranica: putanja, naslov, uvod i po potrebi fotografija. */
export function PageHero({ label, title, lead, image, children }: PageHeroProps) {
  return (
    <section aria-labelledby="page-title" className="border-b border-line">
      <div
        className={`container-page pt-8 pb-12 lg:pt-14 lg:pb-16 ${image ? "grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-x-12" : ""}`}
      >
        <div className={image ? "lg:col-span-6" : ""}>
          <nav aria-label="Putanja">
            <ol className="flex items-center gap-2 text-sm text-muted">
              <li>
                <Link href="/" className="inline-flex min-h-11 items-center hover:text-ink">
                  Početna
                </Link>
              </li>
              <li aria-hidden="true">
                <Icon name="chevronRight" className="size-3.5" />
              </li>
              <li aria-current="page" className="font-medium text-ink">
                {label}
              </li>
            </ol>
          </nav>
          <h1 id="page-title" className="mt-4 max-w-3xl text-3xl lg:mt-6">
            {title}
          </h1>
          {lead && <p className="mt-5 max-w-xl text-lg text-muted">{lead}</p>}
          {children}
        </div>
        {image && (
          <div className="relative aspect-4/3 overflow-clip bg-sand lg:col-span-6 lg:aspect-5/4">
            <Picture
              name={image.name}
              alt={image.alt}
              sizes="(min-width: 80rem) 38rem, (min-width: 64rem) 48vw, 100vw"
              className="size-full object-cover"
              load="priority"
            />
          </div>
        )}
      </div>
    </section>
  );
}
