import type { Metadata } from "next";
import { BRAND, SITE_URL } from "@/data/site-content";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  robots?: Metadata["robots"];
}

export function buildPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  robots,
}: PageMetadataOptions): Metadata {
  const canonicalUrl = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const fullTitle = absoluteTitle ? title : `${title} | ${BRAND.name}`;
  const ogImage = "/opengraph-image";

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: BRAND.name,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    ...(robots ? { robots } : {}),
  };
}
