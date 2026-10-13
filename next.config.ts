import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statički sajt bez servera: `next build` pravi `out/` koji ide na Cloudflare Pages.
  output: "export",
  // Slike se optimizuju unaprijed skriptom `scripts/media.mjs`, ne kroz next/image.
  images: { unoptimized: true },
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
