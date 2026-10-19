import Link from "next/link";
import { projects } from "@/content/projects";
import { Picture } from "../picture";
import { MoreLink, SectionHeading } from "../section-heading";

/**
 * Tri projekta. Na telefonu red koji se lista prstom; na desktopu vila velika
 * lijevo, a dva projekta jedan ispod drugog desno. Ispod fotografije je potpis
 * kao u časopisu (prostor · šta smo radili), bez strelica.
 */
export function ProjectsSection() {
  const featured = projects.slice(0, 3);

  return (
    <section aria-labelledby="radovi-title" className="overflow-clip py-section">
      <div className="container-page">
        <SectionHeading
          id="radovi-title"
          title="Prostori koje smo opremili"
          link={{ href: "/radovi", label: "Svi radovi" }}
        />

        <ul className="snap-row mt-10 lg:mx-0 lg:mt-20 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-8 lg:gap-y-10 lg:overflow-visible lg:px-0">
          {featured.map((project, i) => {
            const big = i === 0;
            return (
              <li key={project.slug} className={`w-[80%] sm:w-[46%] lg:w-auto ${big ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"}`}>
                <Link href={`/radovi#${project.slug}`} className="zoom-on-hover block">
                  <div className={`aspect-3/4 overflow-clip bg-sand ${big ? "lg:aspect-4/5" : "lg:aspect-5/4"}`} data-reveal="image">
                    <Picture
                      name={project.images[0].name}
                      alt={project.images[0].alt}
                      sizes={
                        big
                          ? "(min-width: 80rem) 46rem, (min-width: 64rem) 56vw, (min-width: 40rem) 46vw, 80vw"
                          : "(min-width: 80rem) 32rem, (min-width: 64rem) 40vw, (min-width: 40rem) 46vw, 80vw"
                      }
                      className="size-full object-cover"
                    />
                  </div>
                  <p className="mt-4 flex flex-wrap items-baseline gap-x-2.5 lg:mt-5">
                    <span className="font-medium">{project.title}</span>
                    <span aria-hidden="true" className="text-muted">·</span>
                    <span className="text-sm text-muted">{project.work.toLowerCase()}</span>
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>

        <MoreLink href="/radovi" label="Svi radovi" className="mt-5" />
      </div>
    </section>
  );
}
