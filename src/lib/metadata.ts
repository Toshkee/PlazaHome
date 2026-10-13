import type { Metadata } from "next";
import { site } from "@/content/site";

/** Naslov, opis, kanonska adresa i Open Graph za jednu stranicu. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = title ? `${title} · ${site.name}` : `${site.name}: zavjese i draperije po mjeri, Crna Gora`;
  return {
    title: title ?? { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "sr_ME",
      url: path,
      siteName: site.name,
      title: fullTitle,
      description,
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `${site.name}, salon vile sa zavjesama` }],
    },
  };
}
