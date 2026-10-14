import { Cta } from "@/components/cta";
import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { Picture } from "@/components/picture";
import { products, productsIntro } from "@/content/products";
import { contactLinks } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Proizvodi",
  description:
    "Zavjese i draperije, rimske i rolo zavjese, drveni venecijaneri, tapete, garnišne i šine. Sve po mjeri, sa mjerenjem i montažom.",
  path: "/proizvodi",
});

export default function ProductsPage() {
  const withImage = products.filter((product) => product.image);
  const textOnly = products.filter((product) => !product.image);

  return (
    <PageShell>
      <PageHero
        label="Proizvodi"
        title="Zavjese, draperije i zaštita od sunca"
        lead={productsIntro}
        image={{ name: "rimske-zavjese", alt: "Niz prozora sa svijetlim rimskim zavjesama u zaobljenoj prostoriji" }}
      />

      {/* Brzi skok na proizvod; na telefonu štedi skrolovanje. */}
      <nav aria-label="Proizvodi na ovoj stranici" className="border-b border-line">
        <div className="container-page py-5 lg:py-6">
          <ul className="flex flex-wrap gap-2">
            {products.map((product) => (
              <li key={product.slug}>
                <a
                  href={`#${product.slug}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-4 text-sm font-medium transition-colors hover:border-petrol hover:text-petrol"
                >
                  {product.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="container-page py-section">
        <div className="grid gap-y-16 lg:gap-y-32">
          {withImage.map((product, i) => {
            const flip = i % 2 === 1;
            return (
              <section
                key={product.slug}
                id={product.slug}
                aria-labelledby={`${product.slug}-title`}
                className="grid scroll-mt-24 gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center lg:gap-x-12"
              >
                <div
                  className={`aspect-4/3 overflow-clip bg-sand lg:col-span-5 lg:aspect-square ${flip ? "lg:col-start-8" : ""}`}
                  data-reveal="image"
                >
                  {product.image && (
                    <Picture
                      name={product.image.name}
                      alt={product.image.alt}
                      sizes="(min-width: 80rem) 32rem, (min-width: 64rem) 40vw, 100vw"
                      className="size-full object-cover"
                    />
                  )}
                </div>
                <div
                  className={`lg:col-span-5 ${flip ? "lg:col-start-2 lg:row-start-1" : "lg:col-start-7"}`}
                  data-reveal
                >
                  <h2 id={`${product.slug}-title`} className="text-2xl">
                    {product.name}
                  </h2>
                  <p className="mt-3 max-w-md text-muted lg:mt-4 lg:text-lg">{product.text}</p>
                  <a href={contactLinks.whatsapp} className="link-arrow mt-3 lg:mt-5">
                    <Icon name="whatsapp" className="size-4" />
                    Pitajte za vaš prostor
                  </a>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {textOnly.map((product) => (
        <section
          key={product.slug}
          id={product.slug}
          aria-labelledby={`${product.slug}-title`}
          className="scroll-mt-24 bg-sand py-section"
        >
          <div className="container-page grid gap-4 lg:grid-cols-12 lg:items-center lg:gap-x-12" data-reveal>
            <h2 id={`${product.slug}-title`} className="text-2xl lg:col-span-6">
              {product.name}
            </h2>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="text-muted lg:text-lg">{product.text}</p>
              <a href={contactLinks.whatsapp} className="btn btn-outline mt-6 text-petrol">
                <Icon name="whatsapp" className="size-4" />
                Pitajte za vaš prostor
              </a>
            </div>
          </div>
        </section>
      ))}

      <Cta />
    </PageShell>
  );
}
