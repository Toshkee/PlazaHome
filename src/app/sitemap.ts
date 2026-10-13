import type { MetadataRoute } from "next";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, changeFrequency: "monthly", priority: 1 },
    ...navigation.map((item) => ({
      url: `${site.url}${item.href}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
