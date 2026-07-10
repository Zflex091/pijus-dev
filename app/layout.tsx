import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Pijus.dev — Svetainių ir sistemų kūrimas", template: "%s | Pijus.dev" },
  description: siteConfig.description,
  keywords: ["svetainių kūrimas", "Shopify kūrimas", "programuotojas", "elektroninės parduotuvės", "web development Lietuva"],
  authors: [{ name: siteConfig.owner }],
  creator: siteConfig.owner,
  openGraph: {
    type: "website",
    locale: "lt_LT",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Pijus.dev — Svetainių ir sistemų kūrimas",
    description: siteConfig.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Pijus.dev" }],
  },
  twitter: { card: "summary_large_image", title: "Pijus.dev", description: siteConfig.description, images: ["/opengraph-image"] },
  icons: { icon: "/icons/icon.svg" },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#090909" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="lt">
      <body>{children}</body>
    </html>
  );
}
