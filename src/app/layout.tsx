import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { site } from "@/content/site";
import "./globals.css";

// Instrument Sans (OFL), sveden na znakove koje sajt koristi: scripts/font.sh.
const instrument = localFont({
  src: "../fonts/instrument-sans-subset.woff2",
  weight: "400 500",
  display: "swap",
  variable: "--font-instrument",
});

const title = `${site.name}: zavjese i draperije po mjeri, Crna Gora`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sr_ME",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `${site.name}, salon vile sa zavjesama` }],
  },
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
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="sr-Latn-ME" className={instrument.variable}>
      <body className="pb-bar lg:pb-0">{children}</body>
    </html>
  );
}
