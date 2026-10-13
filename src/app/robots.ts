import type { MetadataRoute } from "next";
import { isConcept, site } from "@/content/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", ...(isConcept ? { disallow: "/" } : { allow: "/" }) },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
