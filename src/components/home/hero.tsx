import { home } from "@/content/home";
import { contactLinks, site } from "@/content/site";
import { vars } from "@/lib/style";
import { Icon } from "../icon";
import { Lines } from "../lines";
import { LoopVideo } from "../loop-video";
import { Picture } from "../picture";

const { hero } = home;

/** Dron snimak preko cijelog ekrana, i na telefonu i na desktopu. */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative h-svh min-h-[36rem] overflow-clip bg-ink">
      <LoopVideo
        src={hero.video.src}
        start="after-load"
        frameClassName="hero-media absolute inset-0"
        buttonClassName="absolute right-[var(--spacing-gutter)] bottom-[calc(var(--spacing-gutter)+env(safe-area-inset-bottom))] z-20"
      >
        <Picture
          name="hero-poster"
          alt={hero.video.posterAlt}
          sizes="100vw"
          className="absolute inset-0 size-full object-cover"
          load="priority"
        />
      </LoopVideo>

      {/* Zrno, blago zatamnjenje cijelog kadra i podloga ispod teksta (hero-copy), zbog kontrasta. */}
      <div aria-hidden="true" className="hero-scrim pointer-events-none absolute inset-0 overflow-clip">
        <div className="grain" />
      </div>

      <div className="hero-out absolute inset-x-0 bottom-0">
        <div className="hero-copy relative">
          <div className="container-page relative pb-[calc(var(--spacing-gutter)+5rem)] lg:pb-24">
            <p className="label enter-fade hidden text-gold sm:block" style={vars({ "--delay": "0.8s" })}>
              {hero.label}
            </p>
            <h1
              id="hero-title"
              className="display enter-lines text-[clamp(3.5rem,min(17vw,15svh),10rem)] leading-[0.9] tracking-[-0.02em] sm:mt-5"
            >
              <Lines lines={hero.title} accent={hero.accent} />
            </h1>
            <p className="enter-fade-up mt-7 max-w-md text-lg text-bone/90" style={vars({ "--delay": "1.35s" })}>
              {hero.lead}
            </p>
            <div className="enter-fade-up mt-7 flex flex-wrap gap-3" style={vars({ "--delay": "1.5s" })}>
              <a href={contactLinks.whatsapp} className="btn btn-solid">
                <Icon name="whatsapp" />
                Pišite na WhatsApp
              </a>
              <a href={contactLinks.tel} className="btn btn-ghost">
                <Icon name="phone" />
                Pozovite
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Potpis snimka i znak za skrol, kao na filmskoj špici. */}
      <div className="enter-fade pointer-events-none absolute bottom-[calc(var(--spacing-gutter)+env(safe-area-inset-bottom))] left-[var(--spacing-gutter)] flex items-center gap-4 text-xs text-stone" style={vars({ "--delay": "2s" })}>
        <span aria-hidden="true" className="relative block h-10 w-px overflow-clip bg-bone/15">
          <span className="scroll-cue absolute inset-0 bg-gold" />
        </span>
        <span>
          Snimak: <span className="pointer-events-auto">{site.videoCredit.name}</span>
        </span>
      </div>
    </section>
  );
}
