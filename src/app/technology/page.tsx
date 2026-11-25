import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AutonomyStack } from "@/components/AutonomyStack";
import { SpatialSchematic } from "@/components/SpatialSchematic";
import { ClosingBand } from "@/components/ClosingBand";
import { ALL_TECHNOLOGY_SPECS } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Explore Perception Labs' autonomy architecture across sensing, visual-inertial state estimation, perception, spatial intelligence, and embedded autonomy.",
};

export default function TechnologyPage() {
  return (
    <>
      <section className="border-b border-border-grey bg-field pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
            PL / TECHNOLOGY ARCHITECTURE
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.5rem] font-light leading-[1.06] tracking-[-0.025em] text-graphite sm:text-[3.5rem] lg:text-[4.25rem]">
            Perception, state estimation, and spatial intelligence engineered for the edge.
          </h1>
          <p className="mt-6 max-w-[60ch] text-[18px] leading-[1.65] text-muted-ink">
            Autonomous systems require tightly coupled layers connecting raw physical sensor capture to motion estimation, environmental understanding, and deterministic onboard execution.
          </p>
        </div>
      </section>

      <AutonomyStack />

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="divide-y divide-border-grey">
            {ALL_TECHNOLOGY_SPECS.map((spec) => (
              <article
                key={spec.slug}
                className="grid gap-10 py-14 lg:grid-cols-12 lg:items-center lg:gap-12"
              >
                <div className="lg:col-span-6">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
                    {spec.title}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-normal tracking-[-0.02em] text-graphite sm:text-3xl">
                    {spec.summary}
                  </h2>
                  <p className="mt-4 max-w-[54ch] text-[16px] leading-relaxed text-muted-ink">
                    {spec.overview}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={`/technology/${spec.slug}`}
                      className="inline-flex items-center gap-2 rounded-sm bg-graphite px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-field transition-colors hover:bg-signal hover:text-graphite"
                    >
                      <span>Open {spec.shortTitle} Specification</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <SpatialSchematic
                    variant={spec.graphic}
                    label={`${spec.shortTitle} architecture graphic`}
                    caption={`LAYER ${spec.stackIndex} · ${spec.stackName.toUpperCase()}`}
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
