import Link from "next/link";
import { home } from "@/content/home";
import { vars } from "@/lib/style";
import { LoopVideo } from "../loop-video";
import { Picture } from "../picture";

const { hero } = home;

/** Dron snimak vile preko cijelog ekrana; zaglavlje je providno preko njega. Jedan miran poziv. */
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
        <div className="container-page pb-10 lg:pb-16">
          <h1 id="hero-title" className="enter-up max-w-4xl text-4xl" style={vars({ "--delay": "0.25s" })}>
            {hero.title}
          </h1>
          <div className="mt-6 flex flex-col items-start gap-8 lg:mt-10 lg:flex-row lg:items-end lg:justify-between">
            <p className="enter-up max-w-md text-lg text-white/90" style={vars({ "--delay": "0.5s" })}>
              {hero.lead}
            </p>
            <Link href="/kontakt" className="btn btn-outline enter-up" style={vars({ "--delay": "0.65s" })}>
              Zakažite konsultaciju
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
