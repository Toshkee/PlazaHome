import Link from "next/link";
import { products, productsIntro } from "@/content/products";
import { vars } from "@/lib/style";
import { Icon } from "../icon";
import { Picture } from "../picture";
import { MoreLink, SectionHeading } from "../section-heading";

/**
 * Proizvodi kao spisak, ne kao mreža kartica. Na telefonu svaki red ima malu fotografiju;
 * na desktopu je lijevo jedna velika, ona proizvoda nad kojim je miš ili fokus (`product-list` u globals.css).
 */
export function ProductsSection() {
  const withImage = products.filter((product) => product.image);
  const extra = products.find((product) => !product.image);

  return (
    <section aria-labelledby="proizvodi-title" className="bg-sand py-section">
      <div className="container-page">
        <SectionHeading
          id="proizvodi-title"
          title="Zavjese, draperije i zaštita od sunca"
          text={productsIntro}
          link={{ href: "/proizvodi", label: "Svi proizvodi" }}
        />

        <ul className="product-list relative mt-10 lg:mt-20 lg:min-h-[36rem] lg:pl-[46%]">
          {withImage.map((product, i) => (
            <li key={product.slug} className="first:*:border-t">
              <Link
                href={`/proizvodi#${product.slug}`}
                className="group grid grid-cols-[4.5rem_1fr] items-center gap-x-5 border-b border-ink/15 py-4 sm:grid-cols-[5.5rem_1fr] lg:grid-cols-[1fr_auto] lg:gap-x-8 lg:py-6"
              >
                {product.image && (
                  <div className="product-photo aspect-4/5 overflow-clip bg-white lg:absolute lg:top-0 lg:left-0 lg:w-[38%] lg:aspect-auto lg:h-full">
                    <Picture
                      name={product.image.name}
                      alt=""
                      sizes="(min-width: 80rem) 44rem, (min-width: 64rem) 52vw, 88px"
                      className="size-full object-cover"
                    />
                  </div>
                )}
                <div data-reveal style={vars({ "--delay": `${i * 0.05}s` })}>
                  <h3 className="text-xl transition-colors duration-300 group-hover:text-petrol lg:text-[clamp(1.75rem,0.9rem+1.35vw,2.25rem)] lg:leading-tight lg:font-light">
                    {product.name}
                  </h3>
                  <p className="mt-1 max-w-md text-sm text-muted lg:mt-2 lg:text-base">{product.text}</p>
                </div>
                <Icon
                  name="arrowRight"
                  className="hidden size-4 text-petrol transition-transform duration-300 group-hover:translate-x-1 lg:block"
                />
              </Link>
            </li>
          ))}
        </ul>

        {extra && <p className="mt-6 text-muted lg:mt-8 lg:pl-[46%]">{extra.text}</p>}
        <MoreLink href="/proizvodi" label="Svi proizvodi" className="mt-3" />
      </div>
    </section>
  );
}
