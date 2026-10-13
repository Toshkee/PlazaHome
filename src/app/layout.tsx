import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { ContactBar } from "@/components/contact-bar";
import { IntroCurtain } from "@/components/intro-curtain";
import { RevealObserver } from "@/components/reveal-observer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isConcept, site } from "@/content/site";
import "./globals.css";

// Instrument Sans i Instrument Serif (OFL), svedeni na znakove koje sajt koristi: scripts/font.sh.
const sans = localFont({
  src: "../fonts/instrument-sans-subset.woff2",
  weight: "400 500",
  display: "swap",
  variable: "--font-instrument",
});

const serif = localFont({
  src: [
    { path: "../fonts/instrument-serif-subset.woff2", style: "normal", weight: "400" },
    { path: "../fonts/instrument-serif-italic-subset.woff2", style: "italic", weight: "400" },
  ],
  display: "swap",
  variable: "--font-instrument-serif",
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
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="sr-Latn-ME" data-scroll-behavior="smooth" className={`${sans.variable} ${serif.variable}`}>
      <body className="pb-bar lg:pb-0">
        <a
          href="#sadrzaj"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[80] focus:bg-bone focus:px-4 focus:py-3 focus:text-ink"
        >
          Preskoči na sadržaj
        </a>
        <IntroCurtain />
        <SiteHeader />
        {children}
        <SiteFooter />
        <ContactBar />
        <RevealObserver />
      </body>
    </html>
  );
}
