import Link from "next/link";
import { products, productsIntro } from "@/content/products";
import { vars } from "@/lib/style";
import { Icon } from "../icon";
import { Picture } from "../picture";
import { MoreLink, SectionHeading } from "../section-heading";

/** Proizvodi sa fotografijom: dvije kolone na telefonu, tri na desktopu. */
export function ProductsSection() {
  const withImage = products.filter((product) => product.image);
  const extra = products.find((product) => !product.image);

  return (
    <section aria-labelledby="proizvodi-title" className="bg-sand py-section">
      <div className="container-page">
        <SectionHeading
          id="proizvodi-title"
          eyebrow="Proizvodi"
          title="Zavjese, draperije i zaštita od sunca"
          text={productsIntro}
          link={{ href: "/proizvodi", label: "Svi proizvodi" }}
        />

        <ul className="mt-8 grid grid-cols-2 gap-x-3 gap-y-7 sm:gap-x-5 lg:mt-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {withImage.map((product, i) => (
            <li key={product.slug} data-reveal style={vars({ "--delay": `${(i % 3) * 0.06}s` })}>
              <Link href={`/proizvodi#${product.slug}`} className="group block">
                <div className="aspect-4/5 overflow-clip bg-white">
                  {product.image && (
                    <Picture
                      name={product.image.name}
                      alt=""
                      sizes="(min-width: 80rem) 25rem, (min-width: 64rem) 31vw, 47vw"
                      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  )}
                </div>
                <h3 className="mt-3 flex items-start justify-between gap-3 text-base sm:text-lg lg:mt-5 lg:text-xl">
                  {product.name}
                  <Icon
                    name="arrowRight"
                    className="mt-1 hidden size-4 text-petrol transition-transform duration-300 group-hover:translate-x-1 sm:block"
                  />
                </h3>
                <p className="mt-1 hidden text-muted sm:block">{product.text}</p>
              </Link>
            </li>
          ))}
        </ul>

        {extra && <p className="mt-8 text-muted lg:mt-12">{extra.text}</p>}
        <MoreLink href="/proizvodi" label="Svi proizvodi" className="mt-2" />
      </div>
    </section>
  );
}
