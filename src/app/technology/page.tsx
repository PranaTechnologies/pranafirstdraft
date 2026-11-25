import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TechFieldCanvas } from "@/components/TechFieldCanvas";
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
      {/* 01 · Dark Full-Bleed Volumetric Lattice Background Hero */}
      <section className="relative flex min-h-[min(82vh,760px)] flex-col justify-center overflow-hidden border-b border-deep-border bg-deep-field pb-16 pt-32 text-field md:pb-24 md:pt-40">
        <TechFieldCanvas />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] bg-deep-field/70 md:hidden"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, #0B1110 0%, rgba(11,17,16,0.96) 40%, rgba(11,17,16,0.58) 62%, rgba(11,17,16,0.12) 88%, rgba(11,17,16,0.18) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-deep-field/55 via-transparent to-deep-field/90"
        />

        <div className="relative z-10 mx-auto w-full max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
              PL / CORTEX PERCEPTION &amp; AUTONOMY ARCHITECTURE
            </p>
            <h1 className="mt-5 font-display text-[2.6rem] font-light leading-[1.05] tracking-[-0.03em] text-white sm:text-[3.75rem] lg:text-[4.65rem]">
              Perception Intelligence for Real-World Environments.
            </h1>
            <p className="mt-6 max-w-[58ch] text-lg leading-[1.68] text-[#E3EAE5] sm:text-[19px]">
              Bringing certainty to unstructured missions through unified multi-sensor perception, spatial understanding, and autonomous execution onboard the machine.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/solutions/cortex"
                className="inline-flex items-center gap-2 rounded-sm bg-signal px-6 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.12em] text-graphite transition-colors hover:bg-white"
              >
                <span>Cortex Architecture</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-sm border border-[#34423D] bg-[#0B1110]/85 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-colors hover:border-signal hover:text-signal"
              >
                <span>Explore Solutions</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-deep-border/70 pt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-[#BAC5BE]">
            <span>VOLUMETRIC PERCEPTION LATTICE · COUPLED SENSOR STRATA</span>
            <span className="inline-flex items-center gap-2 text-white">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal" />
              ILLUSTRATIVE ARCHITECTURE
            </span>
          </div>
        </div>
      </section>

      {/* 02 · Dual-Pillar Synthesis Strip (Light Field White Band) */}
      <section className="border-b border-border-grey bg-field py-20 text-graphite md:py-24">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            {TECH_SYNTHESIS_PILLARS.map((pillar) => (
              <div
                key={pillar.index}
                className="border-t border-border-grey pt-6"
              >
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
                  {pillar.index}
                </span>
                <h2 className="mt-3 font-display text-2xl font-normal tracking-[-0.015em] text-graphite sm:text-3xl">
                  {pillar.title}
                </h2>
                <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-muted-ink">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 · Three Sequential Engineering Mandates (Dark Deep Field Band) */}
      <section className="border-b border-deep-border bg-deep-field py-20 text-field md:py-28">
        <div className="mx-auto max-w-editorial divide-y divide-deep-border px-6 md:px-12 lg:px-16">
          {TECH_PRINCIPLES.map((item) => (
            <article
              key={item.number}
              className="grid gap-8 py-14 first:pt-0 last:pb-0 lg:grid-cols-12 lg:items-start lg:gap-12"
            >
              <div className="min-w-0 lg:col-span-6">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
                  {item.number} / {item.label}
                </p>
                <h2 className="mt-4 font-display text-3xl font-normal leading-[1.12] tracking-[-0.02em] text-field sm:text-4xl">
                  {item.title}
                </h2>
              </div>

              <div className="min-w-0 lg:col-span-6">
                <p className="text-lg leading-[1.7] text-[#C6D1CA]">
                  {item.summary}
                </p>
                <ul className="mt-6 space-y-3 border-t border-deep-border pt-5 text-base text-field">
                  {item.highlights.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
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

      {/* 04 · Four-Column Platform & Environment Scalability Matrix (Light Field White Band) */}
      <section className="border-b border-border-grey bg-field py-20 text-graphite md:py-24">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
            ARCHITECTURAL SCALE
          </p>
          <div className="mt-8 grid gap-px border border-border-grey bg-border-grey sm:grid-cols-2 lg:grid-cols-4">
            {TECH_SCALABILITY_MATRIX.map((cell) => (
              <div key={cell.title} className="bg-surface p-7 sm:p-8">
                <h3 className="font-display text-2xl font-normal tracking-[-0.015em] text-graphite">
                  {cell.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-ink">
                  {cell.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 · Three-Column Engine Triad (Dark Deep Field Band) */}
      <section className="border-b border-deep-border bg-deep-field py-20 text-field md:py-28">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
                PL / CORE ENGINE TRIAD
              </p>
              <h2 className="mt-4 font-display text-3xl font-normal tracking-[-0.02em] text-field sm:text-4xl">
                Three coupled engines powering Cortex.
              </h2>
            </div>
            <Link
              href="/solutions/cortex"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-signal underline decoration-deep-border underline-offset-4 transition-colors hover:text-field hover:decoration-signal"
            >
              <span>Inspect Cortex Specifications</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TECH_ENGINE_TRIAD.map((engine) => (
              <article
                key={engine.code}
                className="flex flex-col justify-between rounded-card border border-deep-border bg-deep-surface p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 font-mono text-xs uppercase tracking-[0.12em] text-signal">
                    <span>{engine.code}</span>
                    <span className="text-[#9AA59F]">{engine.layers}</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-medium tracking-[-0.015em] text-field">
                    {engine.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#BCC7C0]">
                    {engine.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 06 · Interactive Five-Layer Technical Specification Grid (Light Field White Band) */}
      <AutonomyStack tone="light" />

      {/* 07 · Closing Statement (Dark Deep Field Band) */}
      <ClosingBand tone="dark" />
    </>
  );
}
