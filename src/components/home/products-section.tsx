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

        <ul className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
          {withImage.map((product, i) => (
            <li key={product.slug}>
              <Link href={`/proizvodi#${product.slug}`} className="group zoom-on-hover block">
                <div
                  className="aspect-4/5 overflow-clip bg-white"
                  data-reveal="image"
                  style={vars({ "--delay": `${(i % 3) * 0.08}s` })}
                >
                  {product.image && (
                    <Picture
                      name={product.image.name}
                      alt=""
                      sizes="(min-width: 80rem) 25rem, (min-width: 64rem) 31vw, 47vw"
                      className="size-full object-cover"
                    />
                  )}
                </div>
                <h3 className="mt-4 flex items-start justify-between gap-3 text-base sm:text-lg lg:mt-6 lg:text-xl">
                  {product.name}
                  <Icon
                    name="arrowRight"
                    className="mt-1 hidden size-4 text-petrol transition-transform duration-300 group-hover:translate-x-1 sm:block"
                  />
                </h3>
                <p className="mt-1.5 hidden max-w-xs text-muted sm:block">{product.text}</p>
              </Link>
            </li>
          ))}
        </ul>

        {extra && (
          <p className="mt-10 flex gap-3 border-t border-ink/15 pt-6 text-muted lg:mt-16">
            <Icon name="check" className="mt-1 size-4 shrink-0 text-petrol" />
            {extra.text}
          </p>
        )}
        <MoreLink href="/proizvodi" label="Svi proizvodi" className="mt-3" />
      </div>
    </section>
  );
}
