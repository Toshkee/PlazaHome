import Link from "next/link";
import type { ReactNode } from "react";
import type { MediaName } from "@/content/media.generated";
import { vars } from "@/lib/style";
import { Icon } from "./icon";
import { Picture } from "./picture";

type PageHeroProps = {
  /** Naziv stranice u putanji (Početna › …). */
  label: string;
  title: string;
  lead?: string;
  /**
   * Sa slikom: kadar preko cijele širine, zaglavlje providno preko njega
   * (stranica mora biti u `heroPages`). Bez slike: tipografski vrh na svijetlom.
   */
  image?: { name: MediaName; alt: string };
  children?: ReactNode;
};

function Breadcrumb({ label, dark }: { label: string; dark: boolean }) {
  return (
    <nav aria-label="Putanja">
      <ol className={`flex items-center gap-2 text-sm ${dark ? "text-white/75" : "text-muted"}`}>
        <li>
          <Link href="/" className={`inline-flex min-h-11 items-center ${dark ? "hover:text-white" : "hover:text-ink"}`}>
            Početna
          </Link>
        </li>
        <li aria-hidden="true">
          <Icon name="chevronRight" className="size-3.5" />
        </li>
        <li aria-current="page" className={`font-medium ${dark ? "text-white" : "text-ink"}`}>
          {label}
        </li>
      </ol>
    </nav>
  );
}

/** Vrh unutrašnjih stranica: putanja, naslov, uvod. */
export function PageHero({ label, title, lead, image, children }: PageHeroProps) {
  if (!image) {
    return (
      <section aria-labelledby="page-title" className="border-b border-line">
        <div className="container-page pt-8 pb-14 lg:pt-16 lg:pb-20">
          <Breadcrumb label={label} dark={false} />
          <h1 id="page-title" className="enter-up mt-5 max-w-4xl text-3xl lg:mt-8" style={vars({ "--delay": "0.1s" })}>
            {title}
          </h1>
          {lead && (
            <p className="enter-up mt-6 max-w-xl text-lg text-muted lg:mt-8" style={vars({ "--delay": "0.25s" })}>
              {lead}
            </p>
          )}
          {children}
        </div>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="page-title"
      className="relative -mt-header h-[72svh] max-h-[54rem] min-h-[32rem] overflow-clip bg-night text-white [--focus-color:var(--color-white)] lg:h-[80svh]"
    >
      <div className="enter-settle absolute inset-0">
        <Picture name={image.name} alt={image.alt} sizes="100vw" className="size-full object-cover" load="priority" />
      </div>
      <div aria-hidden="true" className="hero-scrim absolute inset-0" />

      <div className="relative z-10 flex h-full flex-col justify-end">
        <div className="container-page pb-10 lg:pb-16">
          <Breadcrumb label={label} dark />
          <h1 id="page-title" className="enter-up mt-4 max-w-4xl text-3xl lg:mt-6" style={vars({ "--delay": "0.2s" })}>
            {title}
          </h1>
          {lead && (
            <p className="enter-up mt-5 max-w-xl text-lg text-white/90 lg:mt-7" style={vars({ "--delay": "0.35s" })}>
              {lead}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
