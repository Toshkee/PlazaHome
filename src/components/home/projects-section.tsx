import Link from "next/link";
import { projects, projectsIntro } from "@/content/projects";
import { Picture } from "../picture";
import { MoreLink, SectionHeading } from "../section-heading";

/** Četiri projekta: na telefonu red koji se lista prstom, na desktopu četiri kolone. */
export function ProjectsSection() {
  return (
    <section aria-labelledby="radovi-title" className="overflow-clip py-section">
      <div className="container-page">
        <SectionHeading
          id="radovi-title"
          eyebrow="Radovi"
          title="Odabrani projekti"
          text={projectsIntro}
          link={{ href: "/radovi", label: "Svi radovi" }}
        />

        <ul className="snap-row mt-8 lg:mx-0 lg:mt-12 lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:px-0" data-reveal>
          {projects.slice(0, 4).map((project) => (
            <li key={project.slug} className="w-[78%] sm:w-[44%] lg:w-auto">
              <Link href={`/radovi#${project.slug}`} className="group block">
                <div className="aspect-3/4 overflow-clip bg-sand">
                  <Picture
                    name={project.images[0].name}
                    alt={project.images[0].alt}
                    sizes="(min-width: 80rem) 18rem, (min-width: 64rem) 23vw, (min-width: 40rem) 44vw, 78vw"
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-4 text-lg lg:text-xl">{project.title}</h3>
                <p className="mt-0.5 text-sm text-muted">{project.work}</p>
              </Link>
            </li>
          ))}
        </ul>

        <MoreLink href="/radovi" label="Svi radovi" className="mt-5" />
      </div>
    </section>
  );
}
