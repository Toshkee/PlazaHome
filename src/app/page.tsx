import { Cta } from "@/components/cta";
import { AboutIntro } from "@/components/home/about-intro";
import { ClientsSection } from "@/components/home/clients-section";
import { FeatureBand } from "@/components/home/feature-band";
import { Hero } from "@/components/home/hero";
import { ProductsSection } from "@/components/home/products-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { PageShell } from "@/components/page-shell";
import { ProcessSteps } from "@/components/process-steps";
import { about } from "@/content/about";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ description: site.description, path: "/" });

// LocalBusiness samo sa podacima iz briefa; dok adresa ne stigne, navodi se samo država.
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
  address: {
    "@type": "PostalAddress",
    addressCountry: "ME",
    ...(site.address && { streetAddress: site.address.street, addressLocality: site.address.city }),
  },
  ...(site.address && { hasMap: site.address.mapsUrl }),
};

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <AboutIntro />
      <ProductsSection />
      <FeatureBand />
      <ProjectsSection />
      <ProcessSteps text={about.paragraphs[1]} />
      <ClientsSection />
      <Cta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </PageShell>
  );
}
