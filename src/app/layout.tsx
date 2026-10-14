import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { QuickContact } from "@/components/quick-contact";
import { RevealObserver } from "@/components/reveal-observer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isConcept, site } from "@/content/site";
import "./globals.css";

// Albert Sans (OFL), geometrijski kao slova u logotipu; sveden na znakove koje sajt koristi: scripts/font.sh.
const sans = localFont({
  src: "../fonts/albert-sans-subset.woff2",
  weight: "300 600",
  display: "swap",
  variable: "--font-albert",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: zavjese i draperije po mjeri, Crna Gora`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  ...(isConcept && { robots: { index: false, follow: false } }),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
  viewportFit: "cover",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="sr-Latn-ME" data-scroll-behavior="smooth" className={sans.variable}>
      <body>
        <a
          href="#sadrzaj"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[80] focus:bg-petrol focus:px-4 focus:py-3 focus:text-white"
        >
          Preskoči na sadržaj
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <QuickContact />
        <RevealObserver />
      </body>
    </html>
  );
}
