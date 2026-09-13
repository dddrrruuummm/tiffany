import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Tiffany KY Home | Modern Home Collections",
    template: "%s | Tiffany KY Home"
  },
  description: "Tiffany KY Home presents modern home furnishings, decor, and collection-focused sourcing for retail, hospitality, and design partners.",
  keywords: ["modern home goods", "home decor wholesale", "furniture sourcing", "home collection supplier", "hospitality home furnishings", "Tiffany KY Home"],
  openGraph: {
    title: "Tiffany KY Home | Modern Home Collections",
    description: "Modern home collections shaped around color, texture, and everyday living.",
    url: site.url,
    siteName: site.name,
    images: [{ url: "/images/tiffany-home-hero.png", width: 1536, height: 1024, alt: "Tiffany KY Home modern living room collection" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiffany KY Home | Modern Home Collections",
    description: "Modern home collections shaped around color, texture, and everyday living.",
    images: ["/images/tiffany-home-hero.png"]
  },
  alternates: {
    canonical: site.url
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    description: "Modern home collections for retail, hospitality, design, and distribution partners.",
    areaServed: "United States"
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
