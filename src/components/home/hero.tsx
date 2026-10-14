import { home } from "@/content/home";
import { contactLinks } from "@/content/site";
import { vars } from "@/lib/style";
import { Icon } from "../icon";
import { LoopVideo } from "../loop-video";
import { Picture } from "../picture";

const { hero } = home;

const promises = ["Savjetovanje i mjerenje na adresi", "Šivenje po mjeri, i do 6 m", "Montaža garnišni i zavjesa"];

/** Dron snimak vile preko cijelog ekrana; zaglavlje je providno preko njega. */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative -mt-header h-svh min-h-[38rem] overflow-clip bg-night text-white [--focus-color:var(--color-white)]"
    >
      <LoopVideo
        src={hero.video.src}
        start="after-load"
        frameClassName="enter-settle absolute inset-0"
        buttonClassName="absolute top-[calc(var(--spacing-header)+1rem)] right-[var(--spacing-gutter)] z-20"
      >
        <Picture
          name="hero-poster"
          alt={hero.video.posterAlt}
          sizes="100vw"
          className="absolute inset-0 size-full object-cover"
          load="priority"
        />
      </LoopVideo>
      <div aria-hidden="true" className="hero-scrim pointer-events-none absolute inset-0">
        <div className="grain" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end">
        <div className="container-page pb-9 lg:pb-12">
          <p className="eyebrow enter-up text-gold-light" style={vars({ "--delay": "0.2s" })}>
            {hero.label}
          </p>
          <h1 id="hero-title" className="enter-up mt-5 max-w-4xl text-4xl lg:mt-7" style={vars({ "--delay": "0.35s" })}>
            {hero.title}
          </h1>
          <div className="mt-6 flex flex-col gap-7 lg:mt-10 lg:flex-row lg:items-end lg:justify-between">
            <p className="enter-up max-w-md text-lg text-white/90" style={vars({ "--delay": "0.5s" })}>
              {hero.lead}
            </p>
            <div className="enter-up grid grid-cols-2 gap-3 sm:flex" style={vars({ "--delay": "0.65s" })}>
              <a href={contactLinks.whatsapp} className="btn btn-light">
                <Icon name="whatsapp" />
                <span className="sm:hidden">WhatsApp</span>
                <span className="hidden sm:inline">Pišite na WhatsApp</span>
              </a>
              <a href={contactLinks.tel} className="btn btn-outline">
                <Icon name="phone" />
                Pozovite
              </a>
            </div>
          </div>
          <ul
            className="enter-up mt-12 hidden gap-12 border-t border-white/20 pt-6 text-sm text-white/80 lg:flex"
            style={vars({ "--delay": "0.8s" })}
          >
            {promises.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <Icon name="check" className="size-4 text-gold-light" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
