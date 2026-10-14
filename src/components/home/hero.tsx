import { home } from "@/content/home";
import { contactLinks } from "@/content/site";
import { Icon } from "../icon";
import { LoopVideo } from "../loop-video";
import { Picture } from "../picture";

const { hero } = home;

const promises = ["Savjetovanje i mjerenje na adresi", "Šivenje po mjeri, i do 6 m", "Montaža garnišni i zavjesa"];

/**
 * Dron snimak vile (uspravan, 720×1280). Na telefonu ispunjava ekran i tekst stoji
 * preko njega; na desktopu je tekst lijevo, a snimak uspravan kadar desno, bez uvećavanja.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative lg:container-page lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-12 lg:py-10 xl:py-12"
    >
      <div className="relative h-[calc(100svh-var(--spacing-header))] max-h-[52rem] min-h-[36rem] overflow-clip bg-night lg:order-2 lg:col-span-6 lg:col-start-7 lg:h-[min(calc(100svh-var(--spacing-header)-5rem),48rem)] lg:max-h-none lg:min-h-[34rem]">
        <LoopVideo
          src={hero.video.src}
          start="after-load"
          buttonClassName="absolute top-4 right-4 z-20 lg:top-auto lg:right-5 lg:bottom-5"
        >
          <Picture
            name="hero-poster"
            alt={hero.video.posterAlt}
            sizes="(min-width: 64rem) 40rem, 100vw"
            className="absolute inset-0 size-full object-cover"
            load="priority"
          />
        </LoopVideo>
        <div aria-hidden="true" className="hero-scrim pointer-events-none absolute inset-0 lg:hidden" />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 px-gutter pb-7 text-white [--focus-color:var(--color-white)] lg:static lg:order-1 lg:col-span-6 lg:p-0 lg:text-ink lg:[--focus-color:var(--color-petrol)]">
        <p className="eyebrow text-white/85 lg:text-petrol">{hero.label}</p>
        <h1 id="hero-title" className="mt-3 max-w-xl text-4xl lg:mt-5">
          {hero.title}
        </h1>
        <p className="mt-4 max-w-md text-lg text-white/85 lg:mt-6 lg:text-muted">{hero.lead}</p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap lg:mt-9">
          <a
            href={contactLinks.whatsapp}
            className="btn btn-light lg:bg-petrol lg:text-white lg:hover:bg-petrol-dark"
          >
            <Icon name="whatsapp" />
            <span className="sm:hidden">WhatsApp</span>
            <span className="hidden sm:inline">Pišite na WhatsApp</span>
          </a>
          <a href={contactLinks.tel} className="btn btn-outline">
            <Icon name="phone" />
            Pozovite
          </a>
        </div>
        <ul className="mt-12 hidden gap-3 border-t border-line pt-7 text-muted lg:grid">
          {promises.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <Icon name="check" className="size-4 text-petrol" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
