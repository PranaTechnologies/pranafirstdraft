import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AutonomyStack } from "@/components/AutonomyStack";
import { SpatialSchematic } from "@/components/SpatialSchematic";
import { ClosingBand } from "@/components/ClosingBand";
import { SITE_URL, TECHNOLOGY_LAYERS } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Explore Perception Labs' unified five-layer autonomy stack across Sensing, Perception, State Estimation, Spatial Intelligence, and Autonomy.",
  alternates: { canonical: "/technology" },
  openGraph: {
    title: "Technology | Perception Labs",
    description:
      "Unified five-layer onboard autonomy architecture from synchronized sensing to embedded execution.",
    url: `${SITE_URL}/technology`,
  },
};

export default function TechnologyPage() {
  return (
    <>
      <section className="border-b border-border-grey bg-field pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
            PL / TECHNOLOGY ARCHITECTURE
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.5rem] font-light leading-[1.06] tracking-[-0.025em] text-graphite sm:text-[3.5rem] lg:text-[4.25rem]">
            A five-layer onboard architecture built for real-world environments.
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg leading-[1.68] text-muted-ink sm:text-[19px]">
            Our architecture links synchronized sensor acquisition, visual feature tracking, visual-inertial state estimation, spatial mapping, and embedded flight-stack execution—with continuous feedback between layers.
          </p>
        </div>
      </section>

      <AutonomyStack />

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="divide-y divide-border-grey">
            {TECHNOLOGY_LAYERS.map((spec) => (
              <article
                key={spec.slug}
                className="grid gap-10 py-14 lg:grid-cols-12 lg:items-center lg:gap-12"
              >
                <div className="min-w-0 lg:col-span-6">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
                    LAYER {spec.layerNumber} — {spec.shortTitle}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-normal tracking-[-0.02em] text-graphite sm:text-3xl">
                    {spec.summary}
                  </h2>
                  <p className="mt-4 max-w-[54ch] text-lg leading-relaxed text-muted-ink">
                    {spec.overview}
                  </p>
                  <p className="mt-4 border-l-2 border-signal pl-4 font-mono text-xs uppercase leading-relaxed tracking-[0.08em] text-muted-ink">
                    FEEDBACK: {spec.feedbackNote}
                  </p>
                  <div className="mt-7">
                    <Link
                      href={`/technology/${spec.slug}`}
                      className="inline-flex items-center gap-2 rounded-sm bg-graphite px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-field transition-colors hover:bg-signal hover:text-graphite"
                    >
                      <span>Open Layer {spec.layerNumber} Spec</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
                <div className="min-w-0 lg:col-span-6">
                  <SpatialSchematic
                    variant={spec.graphic}
                    label={`${spec.shortTitle} architecture graphic`}
                    caption={`LAYER ${spec.layerNumber} · ${spec.shortTitle.toUpperCase()}`}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClosingBand />
    </>
  );
}
