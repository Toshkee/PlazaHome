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
        title={["Zavjese, draperije", "i zaštita", "od sunca"]}
        accent={[1]}
        lead={productsIntro}
        image={{
          name: "zavjese-draperije",
          alt: "Dnevna soba sa bijelim zavjesama i draperijama boje kafe na velikom prozoru",
        }}
      />

      <div className="on-light">
        {withImage.map((product, i) => {
          const flip = i % 2 === 1;
          return (
            <section
              key={product.slug}
              id={product.slug}
              aria-labelledby={`${product.slug}-title`}
              className="container-page grid scroll-mt-20 items-center gap-8 border-b border-ink/10 py-16 lg:grid-cols-12 lg:gap-x-12 lg:py-24"
            >
              <div
                className={`relative aspect-4/5 overflow-clip bg-ink/10 lg:col-span-6 ${flip ? "lg:col-start-7" : ""}`}
                data-reveal="curtain"
              >
                {product.image && (
                  <Picture name={product.image.name} alt={product.image.alt} sizes="(min-width: 64rem) 45vw, 100vw" className="parallax" />
                )}
              </div>
              <div className={`lg:col-span-5 ${flip ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8"}`} data-reveal="up">
                <span className="label text-muted">{String(i + 1).padStart(2, "0")}</span>
                <h2 id={`${product.slug}-title`} className="display mt-4 text-2xl">
                  {product.name}
                </h2>
                <p className="mt-4 max-w-sm text-lg text-muted">{product.text}</p>
              </div>
            </section>
          );
        })}

        {textOnly.map((product) => (
          <section key={product.slug} id={product.slug} aria-labelledby={`${product.slug}-title`} className="container-page scroll-mt-20 py-16 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-12" data-reveal="up">
              <h2 id={`${product.slug}-title`} className="display text-2xl lg:col-span-6">
                {product.name}
              </h2>
              <div className="lg:col-span-5 lg:col-start-8">
                <p className="text-lg text-muted">{product.text}</p>
                <a href={contactLinks.whatsapp} className="btn btn-dark mt-8">
                  <Icon name="whatsapp" />
                  Pitajte za vaš prostor
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>

      <Cta />
    </PageShell>
  );
}
