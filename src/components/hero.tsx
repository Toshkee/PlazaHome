import { hero } from "@/content/hero";
import { contactLinks } from "@/content/site";
import { HeroVideo } from "./hero-video";
import { Icon } from "./icon";
import { Picture } from "./picture";

export function Hero() {
  return (
    <section
      id="pocetak"
      aria-labelledby="hero-title"
      className="relative lg:container-page lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-12 lg:py-gutter"
    >
      <div className="on-dark relative hero-frame overflow-hidden bg-foreground lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:hero-frame-desktop">
        <Picture
          name="hero-poster"
          alt={hero.video.posterAlt}
          sizes="(min-width: 64rem) 32rem, 100vw"
          className="absolute inset-0 size-full object-cover"
          load="priority"
        />
        <HeroVideo src={hero.video.src} />
      </div>

      <div className="on-dark lg:on-light absolute inset-x-0 bottom-0 text-primary-foreground lg:static lg:col-span-7 lg:row-start-1 lg:text-foreground">
        {/* Na telefonu tekst stoji na tamnoj podlozi preko videa, zbog kontrasta. */}
        <div aria-hidden="true" className="h-16 bg-linear-to-t from-foreground/80 to-transparent lg:hidden" />
        <div className="container-page bg-foreground/80 pb-6 lg:bg-transparent lg:px-0 lg:pb-0">
          <p className="eyebrow lg:text-primary">{hero.eyebrow}</p>
          <h1 id="hero-title" className="mt-3 text-3xl lg:mt-4">
            {hero.title}
          </h1>
          <div className="mt-4 h-px w-16 bg-accent lg:mt-5" aria-hidden="true" />
          <p className="mt-4 max-w-xl text-lg lg:mt-5">{hero.lead}</p>

          <div className="mt-6 flex flex-wrap gap-3 lg:mt-7">
            <a
              href={contactLinks.whatsapp}
              className="inline-flex min-h-12 items-center gap-2 rounded-base bg-primary-foreground px-4 font-medium sm:px-5 text-primary hover:bg-background lg:bg-primary lg:text-primary-foreground lg:hover:bg-foreground"
            >
              <Icon name="whatsapp" />
              Pišite na WhatsApp
            </a>
            <a
              href={contactLinks.tel}
              className="inline-flex min-h-12 items-center gap-2 rounded-base border border-primary-foreground/70 px-4 font-medium sm:px-5 hover:bg-primary-foreground hover:text-primary lg:border-primary lg:text-primary lg:hover:bg-primary lg:hover:text-primary-foreground"
            >
              <Icon name="phone" />
              Pozovite
            </a>
          </div>

          <p className="mt-6 hidden text-muted lg:block">{hero.note}</p>
        </div>
      </div>
    </section>
  );
}
