import { contactLinks } from "@/content/site";
import { products, productsIntro } from "@/content/products";
import { Icon } from "./icon";
import { Picture } from "./picture";
import { SectionHeading } from "./section-heading";

/** Prvi i posljednji proizvod sa slikom idu preko cijele širine, radi ritma. */
const WIDE = new Set([0, 5]);

export function Products() {
  const withImage = products.filter((product) => product.image);
  const textOnly = products.filter((product) => !product.image);

  return (
    <section id="proizvodi" aria-labelledby="proizvodi-title" className="border-t border-border py-section">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading id="proizvodi-title" eyebrow="Proizvodi" title="Šta radimo" />
            <p className="mt-8 max-w-md text-lg">{productsIntro}</p>

            {textOnly.map((product) => (
              <div key={product.name} className="mt-8 border-t border-border pt-5">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="mt-1 text-muted">{product.text}</p>
              </div>
            ))}

            <a
              href={contactLinks.whatsapp}
              className="mt-10 inline-flex min-h-12 items-center gap-2 rounded-base bg-primary px-5 font-medium text-primary-foreground hover:bg-foreground"
            >
              <Icon name="whatsapp" />
              Pitajte za vaš prostor
            </a>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:col-span-8">
          {withImage.map((product, index) => {
            const wide = WIDE.has(index);
            return (
              <li key={product.name} className={wide ? "col-span-2" : undefined}>
                {product.image && (
                  <div className={`overflow-hidden bg-border ${wide ? "aspect-3/2" : "aspect-4/5"}`}>
                    <Picture
                      name={product.image.name}
                      alt={product.image.alt}
                      sizes={
                        wide
                          ? "(min-width: 80rem) 52rem, (min-width: 64rem) 62vw, 92vw"
                          : "(min-width: 80rem) 26rem, (min-width: 64rem) 31vw, 46vw"
                      }
                      className="size-full object-cover"
                    />
                  </div>
                )}
                <h3 className="mt-4 text-lg font-medium">{product.name}</h3>
                <p className="mt-1 text-muted">{product.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
