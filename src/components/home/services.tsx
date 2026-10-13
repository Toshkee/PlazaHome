import { products, productsIntro } from "@/content/products";
import { Lines } from "../lines";
import { Picture } from "../picture";
import { ServicesList } from "./services-list";

export function Services() {
  const items = products.map((product) => ({
    slug: product.slug,
    name: product.name,
    text: product.text,
    image: product.image && (
      <Picture name={product.image.name} alt="" sizes="(min-width: 80rem) 34rem, 40vw" className="size-full object-cover" />
    ),
    thumb: product.image && (
      <Picture name={product.image.name} alt="" sizes="5rem" className="size-full object-cover" />
    ),
  }));

  return (
    <section aria-labelledby="proizvodi-title" className="on-light py-section">
      <div className="container-page">
        <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-7">
            <p className="label text-petrol" data-reveal="fade">
              Proizvodi
            </p>
            <h2 id="proizvodi-title" className="display mt-5 text-2xl" data-reveal="lines">
              <Lines lines={["Šta", "radimo"]} accent={[1]} />
            </h2>
          </div>
          <p className="max-w-md self-end text-lg text-muted lg:col-span-5" data-reveal="up">
            {productsIntro}
          </p>
        </div>
        <ServicesList items={items} />
      </div>
    </section>
  );
}
