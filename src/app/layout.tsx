import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BRAND } from "@/data/site-content";

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
  title: {
    default: `${BRAND.name} | Autonomy Systems & Perception Engineering`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "Perception Labs builds perception, visual-inertial state estimation, localization, and onboard autonomy systems for machines operating in complex real-world environments.",
  openGraph: {
    title: `${BRAND.name} | From Perception to Autonomy`,
    description:
      "Autonomy systems, visual-inertial navigation, and spatial intelligence engineered for real-world environments.",
    type: "website",
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
        <Navbar />
        <main className="min-w-0 overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
