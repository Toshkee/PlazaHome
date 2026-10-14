import { Cta } from "@/components/cta";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { Picture } from "@/components/picture";
import { ProcessSteps } from "@/components/process-steps";
import { about } from "@/content/about";
import { pageMetadata } from "@/lib/metadata";
import { vars } from "@/lib/style";

export const metadata = pageMetadata({
  title: "O nama",
  description:
    "Plaza Home oprema stanove, kuće, vile, hotele i restorane u Crnoj Gori već 30 godina: savjetovanje, mjerenje, šivenje i montaža zavjesa i draperija.",
  path: "/o-nama",
});

const photos = [
  { name: "vila-salon", alt: "Salon vile sa prozorima u dvije visine i draperijama, u zalazak sunca" },
  { name: "restoran-lucni-prozori", alt: "Restoran sa tamnoplavim draperijama na lučnim prozorima" },
] as const;

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        label="O nama"
        title={about.title}
        lead={about.paragraphs[0]}
        image={{ name: "vila-salon-sumrak", alt: "Salon vile sa zaobljenom sofom i visokim draperijama u sumrak" }}
      />

      {/* Ko smo: rečenica o radu i činjenice. */}
      <section aria-labelledby="ko-smo-title" className="py-section">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-6" data-reveal>
            <p className="eyebrow text-petrol">Ko smo</p>
            <h2 id="ko-smo-title" className="mt-3 max-w-xl text-2xl">
              {about.paragraphs[1]}
            </h2>
          </div>
          <dl className="border-t border-line lg:col-span-5 lg:col-start-8">
            {about.facts.map((fact, i) => (
              <div
                key={fact.label}
                className="grid gap-1 border-b border-line py-4 sm:grid-cols-5 sm:gap-4"
                data-reveal
                style={vars({ "--delay": `${i * 0.06}s` })}
              >
                <dt className="text-sm text-muted sm:col-span-2 sm:text-base">{fact.label}</dt>
                <dd className="font-medium sm:col-span-3">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Dva prostora, dvije vrste klijenata: vila i restoran. */}
        <div className="container-page mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:mt-20 lg:gap-8">
          {photos.map((photo, i) => (
            <div key={photo.name} className="aspect-3/4 overflow-clip bg-sand lg:aspect-4/5" data-reveal style={vars({ "--delay": `${i * 0.08}s` })}>
              <Picture name={photo.name} alt={photo.alt} sizes="(min-width: 80rem) 38rem, 50vw" className="size-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <ProcessSteps />
      <Cta />
    </PageShell>
  );
}
