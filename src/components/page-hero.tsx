import type { MediaName } from "@/content/media.generated";
import { vars } from "@/lib/style";
import { Lines } from "./lines";
import { Picture } from "./picture";

type PageHeroProps = {
  label: string;
  title: readonly string[];
  accent?: readonly number[];
  lead?: string;
  /** Sa slikom: kadar preko cijelog ekrana. Bez slike: tipografski uvod na tamnom. */
  image?: { name: MediaName; alt: string };
};

/** Vrh unutrašnjih stranica. Naslov izlazi red po red, slika se „smiri” iz bližeg kadra. */
export function PageHero({ label, title, accent = [], lead, image }: PageHeroProps) {
  if (!image) {
    return (
      <section aria-labelledby="page-title" className="container-page pt-[calc(var(--spacing-header)+clamp(4rem,10vw,9rem))] pb-16">
        <p className="label enter-fade text-gold" style={vars({ "--delay": "0.6s" })}>
          {label}
        </p>
        <h1 id="page-title" className="display enter-lines mt-6 text-3xl" style={vars({ "--delay": "0.7s" })}>
          <Lines lines={title} accent={accent} />
        </h1>
        <div className="enter-draw mt-12 h-px bg-bone/15" style={vars({ "--delay": "1s" })} />
        {lead && (
          <p className="enter-fade-up mt-8 max-w-xl text-lg text-stone" style={vars({ "--delay": "1.15s" })}>
            {lead}
          </p>
        )}
      </section>
    );
  }

  return (
    <section aria-labelledby="page-title" className="relative flex h-[88svh] min-h-[34rem] items-end overflow-clip bg-ink">
      <div className="enter-settle absolute inset-0" style={vars({ "--delay": "0.1s" })}>
        <div className="hero-zoom absolute inset-0">
          <Picture name={image.name} alt={image.alt} sizes="100vw" className="size-full object-cover" load="priority" />
        </div>
      </div>
      <div aria-hidden="true" className="hero-scrim absolute inset-0" />

      <div className="hero-out relative w-full">
        <div className="hero-copy relative">
          <div className="container-page relative pb-14 lg:pb-20">
            <p className="label enter-fade text-gold" style={vars({ "--delay": "0.6s" })}>
              {label}
            </p>
            <h1 id="page-title" className="display enter-lines mt-5 text-3xl" style={vars({ "--delay": "0.7s" })}>
              <Lines lines={title} accent={accent} />
            </h1>
            {lead && (
              <p className="enter-fade-up mt-7 max-w-xl text-lg text-bone/90" style={vars({ "--delay": "1.1s" })}>
                {lead}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
