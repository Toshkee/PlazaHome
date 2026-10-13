import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { ContactBar } from "@/components/contact-bar";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Testimonial } from "@/components/testimonial";
import { site } from "@/content/site";

// LocalBusiness samo sa podacima iz briefa; adresa nije poznata pa je navedena samo država.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  legalName: site.legalName,
  description: site.description,
  url: site.url,
  telephone: site.phone.e164,
  email: site.email,
  image: `${site.url}/og.jpg`,
  logo: `${site.url}/icon-512.png`,
  sameAs: [site.instagram.url],
  address: { "@type": "PostalAddress", addressCountry: "ME" },
};

export default function Home() {
  return (
    <>
      <a
        href="#sadrzaj"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-base focus:bg-background focus:px-4 focus:py-3"
      >
        Preskoči na sadržaj
      </a>
      <SiteHeader />
      <main id="sadrzaj">
        <Hero />
        <About />
        <Products />
        <Gallery />
        <Testimonial />
        <Contact />
      </main>
      <SiteFooter />
      <ContactBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
