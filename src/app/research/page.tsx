import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE_URL } from "@/data/site-content";
import { ClosingBand } from "@/components/ClosingBand";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Perception Labs engineering publications and empirical evaluation notes—published once multi-trial field verification is complete.",
  alternates: { canonical: "/research" },
  openGraph: {
    title: "Research | Perception Labs",
    description:
      "Empirical notes on onboard spatial perception, sensor timing, and state estimation.",
    url: `${SITE_URL}/research`,
  },
};

export default function ResearchPage() {
  return (
    <>
      <section className="border-b border-border-grey bg-field pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
            RESEARCH
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-[2.6rem] font-light leading-[1.06] tracking-[-0.025em] text-graphite sm:text-[3.75rem]">
            Technical writing from our engineering work.
          </h1>
          <p className="mt-6 max-w-[56ch] text-lg leading-[1.68] text-muted-ink sm:text-xl">
            Perception Labs documents methodology, sensor timing, and empirical validation across aerial and robotic hardware. Technical reports will be published here strictly as multi-trial field evaluations are finalized.
          </p>

          <div className="mt-10">
            <Link
              href="/technology"
              className="inline-flex items-center gap-2 rounded-sm bg-graphite px-6 py-4 font-mono text-xs uppercase tracking-[0.12em] text-field transition-colors hover:bg-signal hover:text-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
            >
              <span>Explore Technology</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <ClosingBand tone="dark" heading="Build with us." ctaLabel="Get in touch" />
    </>
  );
}
