import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SpatialFieldCanvas } from "@/components/SpatialFieldCanvas";
import { AutonomyStack } from "@/components/AutonomyStack";
import { ClosingBand } from "@/components/ClosingBand";
import {
  SITE_URL,
  TECH_ENGINE_TRIAD,
  TECH_PRINCIPLES,
  TECH_SCALABILITY_MATRIX,
  TECH_SYNTHESIS_PILLARS,
} from "@/data/site-content";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "How Perception Labs combines real-time machine perception, Cortex spatial intelligence, and embedded autonomy across aerial and robotic platforms.",
  alternates: { canonical: "/technology" },
  openGraph: {
    title: "Technology | Perception Labs",
    description:
      "Cortex architecture: multi-sensor perception, spatial mapping, state estimation, and edge execution.",
    url: `${SITE_URL}/technology`,
  },
};

export default function TechnologyPage() {
  return (
    <>
      {/* 01 · Hero Headline + Full-Width Spatial Field Showcase */}
      <section className="border-b border-border-grey bg-field pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
            PL / CORTEX PERCEPTION &amp; AUTONOMY ARCHITECTURE
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.6rem] font-light leading-[1.05] tracking-[-0.03em] text-graphite sm:text-[3.75rem] lg:text-[4.65rem]">
            Perception Intelligence for Real-World Environments.
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg leading-[1.68] text-muted-ink sm:text-[19px]">
            Bringing certainty to unstructured missions through unified multi-sensor perception, spatial understanding, and autonomous execution onboard the machine.
          </p>

          <div className="mt-12">
            <SpatialFieldCanvas variant="framed" />
          </div>
        </div>
      </section>

      {/* 02 · Dual-Pillar Synthesis Strip */}
      <section className="border-b border-deep-border bg-deep-field py-20 text-field md:py-24">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            {TECH_SYNTHESIS_PILLARS.map((pillar) => (
              <div
                key={pillar.index}
                className="border-t border-deep-border pt-6"
              >
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
                  {pillar.index}
                </span>
                <h2 className="mt-3 font-display text-2xl font-normal tracking-[-0.015em] text-field sm:text-3xl">
                  {pillar.title}
                </h2>
                <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-[#C6D1CA]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 · Three Sequential Engineering Mandates */}
      <section className="border-b border-border-grey bg-field py-20 md:py-28">
        <div className="mx-auto max-w-editorial divide-y divide-border-grey px-6 md:px-12 lg:px-16">
          {TECH_PRINCIPLES.map((item) => (
            <article
              key={item.number}
              className="grid gap-8 py-14 first:pt-0 last:pb-0 lg:grid-cols-12 lg:items-start lg:gap-12"
            >
              <div className="min-w-0 lg:col-span-6">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
                  {item.number} / {item.label}
                </p>
                <h2 className="mt-4 font-display text-3xl font-normal leading-[1.12] tracking-[-0.02em] text-graphite sm:text-4xl">
                  {item.title}
                </h2>
              </div>

              <div className="min-w-0 lg:col-span-6">
                <p className="text-lg leading-[1.7] text-muted-ink">
                  {item.summary}
                </p>
                <ul className="mt-6 space-y-3 border-t border-border-grey pt-5 text-base text-graphite">
                  {item.highlights.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal ring-1 ring-graphite/35"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 04 · Four-Column Platform & Environment Scalability Matrix */}
      <section className="border-b border-deep-border bg-deep-field py-20 text-field md:py-24">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
            ARCHITECTURAL SCALE
          </p>
          <div className="mt-8 grid gap-px border border-deep-border bg-deep-border sm:grid-cols-2 lg:grid-cols-4">
            {TECH_SCALABILITY_MATRIX.map((cell) => (
              <div key={cell.title} className="bg-deep-surface p-7 sm:p-8">
                <h3 className="font-display text-2xl font-normal tracking-[-0.015em] text-field">
                  {cell.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#BCC7C0]">
                  {cell.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 · Three-Column Engine Triad */}
      <section className="border-b border-border-grey bg-field py-20 md:py-28">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
                PL / CORE ENGINE TRIAD
              </p>
              <h2 className="mt-4 font-display text-3xl font-normal tracking-[-0.02em] text-graphite sm:text-4xl">
                Three coupled engines powering Cortex.
              </h2>
            </div>
            <Link
              href="/solutions/cortex"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-graphite underline decoration-border-grey underline-offset-4 hover:decoration-graphite"
            >
              <span>Inspect Cortex Specifications</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TECH_ENGINE_TRIAD.map((engine) => (
              <article
                key={engine.code}
                className="flex flex-col justify-between rounded-card border border-border-grey bg-surface p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 font-mono text-xs uppercase tracking-[0.12em] text-muted-ink">
                    <span>{engine.code}</span>
                    <span>{engine.layers}</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-medium tracking-[-0.015em] text-graphite">
                    {engine.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-ink">
                    {engine.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 06 · Interactive Five-Layer Technical Specification Grid */}
      <AutonomyStack />

      {/* 07 · Closing Statement (Light Contrast Band above Dark Footer) */}
      <ClosingBand tone="light" />
    </>
  );
}
