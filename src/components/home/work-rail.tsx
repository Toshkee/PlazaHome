import Link from "next/link";
import { projects } from "@/content/projects";
import { vars } from "@/lib/style";
import { Icon } from "../icon";
import { Lines } from "../lines";
import { Picture } from "../picture";
import { PinnedRail } from "../pinned-rail";

export function WorkRail() {
  const heading = (
    <div className="container-page flex flex-wrap items-end justify-between gap-6">
      <div>
        <p className="label text-gold" data-reveal="fade">
          Radovi
        </p>
        <h2 id="radovi-title" className="display mt-5 text-2xl" data-reveal="lines">
          <Lines lines={["Odabrani", "projekti"]} accent={[1]} />
        </h2>
      </div>
      {/* Napredak kroz red, samo kad je zakačen na desktopu. */}
      <div aria-hidden="true" className="rail-progress hidden h-px w-48 bg-bone/15">
        <div className="h-full origin-left scale-x-(--rail) bg-gold" />
      </div>
    </div>
  );

  return (
    <section aria-labelledby="radovi-title" className="py-section lg:py-0">
      <PinnedRail heading={heading}>
        {projects.map((project, i) => (
          <li key={project.slug} className="w-[78vw] sm:w-[48vw] lg:w-[min(32vw,calc((100svh-24rem)*0.8))]">
            <Link href={`/radovi#${project.slug}`} className="group block" data-reveal="up" style={vars({ "--delay": `${Math.min(i, 2) * 0.1}s` })}>
              <div className="relative aspect-4/5 overflow-clip bg-ink-soft">
                <Picture
                  name={project.images[0].name}
                  alt={project.images[0].alt}
                  sizes="(min-width: 64rem) 32vw, (min-width: 40rem) 48vw, 78vw"
                  className="size-full object-cover transition-transform duration-[1.6s] ease-film group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="display text-xl">{project.title}</h3>
                <span className="label text-stone">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-1 text-stone">{project.work}</p>
            </Link>
          </li>
        ))}
        <li className="w-[78vw] sm:w-[48vw] lg:w-[min(24vw,calc((100svh-24rem)*0.8))]">
          <Link
            href="/radovi"
            className="group flex aspect-4/5 flex-col justify-between border border-bone/15 p-6 transition-colors duration-500 hover:border-gold"
          >
            <span className="label text-stone">Svi radovi</span>
            <span className="display text-2xl">
              Pogledajte <span className="accent">sve</span>
            </span>
            <span className="inline-flex size-12 items-center justify-center rounded-full border border-bone/30 transition-colors duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
              <Icon name="arrowRight" />
            </span>
          </Link>
        </li>
      </PinnedRail>
    </section>
  );
}
