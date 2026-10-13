import { Cta } from "@/components/cta";
import { Icon } from "@/components/icon";
import { LoopVideo } from "@/components/loop-video";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { PhotoViewer } from "@/components/photo-viewer";
import { Picture } from "@/components/picture";
import { projects, projectsIntro, type Project } from "@/content/projects";
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
const photos = projects.flatMap((project) =>
  project.images.map((image) => ({ project, image })),
);

/** Raspored po projektu: širina slike i strana teksta, da se ritam mijenja. */
const LAYOUTS = [
  { image: "lg:col-span-7", text: "lg:col-span-4 lg:col-start-9", flip: false },
  { image: "lg:col-span-6 lg:col-start-7", text: "lg:col-span-4 lg:col-start-1 lg:row-start-1", flip: true },
  { image: "lg:col-span-5 lg:col-start-2", text: "lg:col-span-4 lg:col-start-8", flip: false },
  { image: "lg:col-span-7 lg:col-start-6", text: "lg:col-span-4 lg:col-start-1 lg:row-start-1", flip: true },
];

function ProjectChapter({ project, index }: { project: Project; index: number }) {
  const layout = LAYOUTS[(index - 1) % LAYOUTS.length];
  const [image] = project.images;
  const viewerIndex = photos.findIndex((photo) => photo.image === image);

  return (
    <article id={project.slug} aria-labelledby={`${project.slug}-title`} className="container-page scroll-mt-24 py-16 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-x-12">
        <button
          type="button"
          data-viewer-index={viewerIndex}
          aria-haspopup="dialog"
          className={`group relative block aspect-4/5 w-full cursor-zoom-in overflow-clip bg-ink-soft ${layout.image}`}
          data-reveal="curtain"
        >
          <Picture name={image.name} alt={image.alt} sizes="(min-width: 64rem) 55vw, 100vw" className="parallax" />
          <span className="sr-only">Uvećaj fotografiju</span>
        </button>
        <div className={layout.text} data-reveal="up">
          <span className="label text-stone">{String(index + 1).padStart(2, "0")}</span>
          <h2 id={`${project.slug}-title`} className="display mt-4 text-2xl">
            {project.title}
          </h2>
          <p className="mt-3 font-medium text-gold">{project.work}</p>
          <p className="mt-4 max-w-sm text-stone">{project.text}</p>
          <a href={project.instagramUrl} className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm underline underline-offset-4">
            Objava na Instagramu
            <Icon name="arrowUpRight" className="size-4" />
          </a>
        </div>
      </div>
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
      <PageHero label="Radovi" title={["Naši", "projekti"]} accent={[1]} lead={projectsIntro} />

      <PhotoViewer
        slides={slides}
        items={photos.map(({ project }) => ({
          caption: `${project.title}, ${project.work.toLowerCase()}`,
          instagramUrl: project.instagramUrl,
        }))}
      >
        {/* Vila: dron snimak preko cijele širine, pa dvije fotografije istog salona. */}
        <article id={villa.slug} aria-labelledby="vila-title" className="scroll-mt-24 pb-16 lg:pb-24">
          {villa.video && (
            <div className="relative h-[80svh] min-h-[30rem] overflow-clip bg-ink-soft lg:h-auto lg:aspect-[21/9]" data-reveal="curtain">
              <LoopVideo src={villa.video.src} start="in-view" buttonClassName="absolute right-4 bottom-4 z-10">
                <Picture name="hero-poster" alt="" sizes="100vw" className="absolute inset-0 size-full object-cover" />
              </LoopVideo>
              <p className="absolute bottom-4 left-4 z-10 bg-ink/70 px-3 py-2 text-xs text-bone backdrop-blur-sm">
                Snimak:{" "}
                <a href={villa.video.credit.url} className="underline underline-offset-2">
                  {villa.video.credit.name}
                </a>
              </p>
            </div>
          )}

          <div className="container-page mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-4" data-reveal="up">
              <span className="label text-stone">01</span>
              <h2 id="vila-title" className="display mt-4 text-2xl">
                {villa.title}
              </h2>
              <p className="mt-3 font-medium text-gold">{villa.work}</p>
              <p className="mt-4 max-w-sm text-stone">{villa.text}</p>
              <div className="mt-4 flex flex-col items-start">
                <a href={villa.instagramUrl} className="inline-flex min-h-11 items-center gap-2 text-sm underline underline-offset-4">
                  Fotografije na Instagramu
                  <Icon name="arrowUpRight" className="size-4" />
                </a>
                {villa.video && (
                  <a href={villa.video.instagramUrl} className="inline-flex min-h-11 items-center gap-2 text-sm underline underline-offset-4">
                    Snimak na Instagramu
                    <Icon name="arrowUpRight" className="size-4" />
                  </a>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:col-span-8">
              {villa.images.map((image, i) => (
                <button
                  key={image.name}
                  type="button"
                  data-viewer-index={photos.findIndex((photo) => photo.image === image)}
                  aria-haspopup="dialog"
                  className={`relative block aspect-3/4 w-full cursor-zoom-in overflow-clip bg-ink-soft ${i === 1 ? "mt-16 lg:mt-32" : ""}`}
                  data-reveal="curtain"
                  style={vars({ "--delay": `${i * 0.15}s` })}
                >
                  <Picture name={image.name} alt={image.alt} sizes="(min-width: 64rem) 30vw, 48vw" className="parallax" />
                  <span className="sr-only">Uvećaj fotografiju</span>
                </button>
              ))}
            </div>
          </div>
        </article>

        {rest.map((project, i) => (
          <ProjectChapter key={project.slug} project={project} index={i + 1} />
        ))}
      </PhotoViewer>

      <div className="container-page pb-section">
        <a href={site.instagram.url} className="btn btn-ghost">
          <Icon name="instagram" />
          Još radova na {site.instagram.handle}
        </a>
      </div>

      <Cta />
    </PageShell>
  );
}
