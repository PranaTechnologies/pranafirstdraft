import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BRAND, SITE_URL } from "@/data/site-content";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND.name} | ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.heroSupporting,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description: BRAND.heroSupporting,
    url: SITE_URL,
    siteName: BRAND.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description: BRAND.heroSupporting,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${ibmPlexMono.variable}`}>
      <body className="min-h-screen bg-field font-sans text-graphite antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-signal focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-medium focus:uppercase focus:tracking-[0.12em] focus:text-graphite"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="min-w-0 overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
