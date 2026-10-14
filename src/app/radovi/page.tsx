import { Cta } from "@/components/cta";
import { Icon } from "@/components/icon";
import { LoopVideo } from "@/components/loop-video";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { PhotoViewer } from "@/components/photo-viewer";
import { Picture } from "@/components/picture";
import { projects, projectsIntro, type Project, type ProjectImage } from "@/content/projects";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { vars } from "@/lib/style";

export const metadata = pageMetadata({
  title: "Radovi",
  description:
    "Projekti Plaza Home: zavjese i draperije za vilu sa salonom u dvije visine, Luštica Bay, restoran, drvenu i kamenu kuću u Crnoj Gori.",
  path: "/radovi",
});

// Sve fotografije redom, za pregled preko cijelog ekrana.
const photos = projects.flatMap((project) => project.images.map((image) => ({ project, image })));

/** Fotografija koja otvara pregled preko cijelog ekrana. */
function PhotoButton({ image, sizes, className = "" }: { image: ProjectImage; sizes: string; className?: string }) {
  return (
    <button
      type="button"
      data-viewer-index={photos.findIndex((photo) => photo.image === image)}
      aria-haspopup="dialog"
      className={`group relative block w-full cursor-zoom-in overflow-clip bg-sand ${className}`}
    >
      <Picture
        name={image.name}
        alt={image.alt}
        sizes={sizes}
        className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      <span className="sr-only">Uvećaj fotografiju</span>
    </button>
  );
}

function InstagramLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="link-arrow text-sm">
      {label}
      <Icon name="arrowUpRight" className="size-4" />
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [image] = project.images;
  return (
    <article id={project.slug} aria-labelledby={`${project.slug}-title`} className="scroll-mt-24" data-reveal>
      <PhotoButton image={image} sizes="(min-width: 80rem) 38rem, (min-width: 40rem) 47vw, 100vw" className="aspect-4/5 lg:aspect-square" />
      <h2 id={`${project.slug}-title`} className="mt-5 text-xl">
        {project.title}
      </h2>
      <p className="mt-1 text-sm font-semibold text-petrol">{project.work}</p>
      <p className="mt-2 max-w-md text-muted">{project.text}</p>
      <InstagramLink href={project.instagramUrl} label="Objava na Instagramu" />
    </article>
  );
}

export default function WorkPage() {
  const [villa, ...rest] = projects;
  const slides = photos.map(({ image }) => (
    <Picture
      key={image.name}
      name={image.name}
      alt={image.alt}
      sizes="(min-width: 64rem) 60rem, 100vw"
      className="max-h-full w-auto max-w-full object-contain"
      pictureClassName="contents"
    />
  ));

  return (
    <PageShell>
      <PageHero label="Radovi" title="Naši radovi" lead={projectsIntro} />

      <PhotoViewer
        slides={slides}
        items={photos.map(({ project }) => ({
          caption: `${project.title}, ${project.work.toLowerCase()}`,
          instagramUrl: project.instagramUrl,
        }))}
      >
        {/* Vila: tekst, pa dron snimak i dvije fotografije istog salona. */}
        <article id={villa.slug} aria-labelledby="vila-title" className="container-page scroll-mt-24 py-section">
          <div className="grid gap-4 lg:grid-cols-12 lg:items-end lg:gap-x-12" data-reveal>
            <div className="lg:col-span-6">
              <p className="eyebrow text-petrol">Izdvojeni projekat</p>
              <h2 id="vila-title" className="mt-3 text-2xl">
                {villa.title}
              </h2>
              <p className="mt-2 font-semibold text-petrol">{villa.work}</p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="text-muted lg:text-lg">{villa.text}</p>
              <div className="mt-1 flex flex-wrap gap-x-6">
                <InstagramLink href={villa.instagramUrl} label="Fotografije na Instagramu" />
                {villa.video && <InstagramLink href={villa.video.instagramUrl} label="Snimak na Instagramu" />}
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-8">
            {villa.video && (
              <div className="relative col-span-2 aspect-4/5 overflow-clip bg-night lg:col-span-1 lg:aspect-3/4" data-reveal>
                <LoopVideo src={villa.video.src} start="in-view" buttonClassName="absolute right-4 bottom-4 z-10">
                  <Picture name="hero-poster" alt="" sizes="(min-width: 64rem) 26rem, 100vw" className="absolute inset-0 size-full object-cover" />
                </LoopVideo>
                <p className="absolute bottom-4 left-4 z-10 bg-night/70 px-3 py-2 text-xs text-white backdrop-blur-sm">
                  Snimak:{" "}
                  <a href={villa.video.credit.url} className="underline underline-offset-2">
                    {villa.video.credit.name}
                  </a>
                </p>
              </div>
            )}
            {villa.images.map((image, i) => (
              <div key={image.name} data-reveal style={vars({ "--delay": `${(i + 1) * 0.08}s` })}>
                <PhotoButton image={image} sizes="(min-width: 64rem) 26rem, 50vw" className="aspect-3/4" />
              </div>
            ))}
          </div>
        </article>

        {/* Ostali projekti: dvije kolone od tableta naviše. */}
        <section aria-label="Ostali projekti" className="bg-sand py-section">
          <div className="container-page grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            {rest.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="container-page mt-12 lg:mt-16">
            <a href={site.instagram.url} className="btn btn-outline w-full sm:w-auto">
              <Icon name="instagram" />
              Još radova na {site.instagram.handle}
            </a>
          </div>
        </section>
      </PhotoViewer>

      <Cta />
    </PageShell>
  );
}
