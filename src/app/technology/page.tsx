import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TechFieldCanvas } from "@/components/TechFieldCanvas";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { ClosingBand } from "@/components/ClosingBand";
import { SITE_URL } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Perception Labs' five-layer onboard spatial intelligence architecture transforming physical sensors into real-time awareness.",
  alternates: { canonical: "/technology" },
  openGraph: {
    title: "Technology | Perception Labs",
    description:
      "Five-layer perception, state estimation, spatial intelligence, and autonomy architecture.",
    url: `${SITE_URL}/technology`,
  },
};

export default function TechnologyPage() {
  return (
    <>
      {/* 01 · Hero with Integrated Volumetric 3D Background */}
      <section className="relative flex min-h-[min(80vh,720px)] flex-col justify-center overflow-hidden border-b border-deep-border bg-deep-field pb-20 pt-32 text-field md:pb-28 md:pt-40">
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
              "linear-gradient(90deg, #0B1110 0%, rgba(11,17,16,0.96) 38%, rgba(11,17,16,0.58) 62%, rgba(11,17,16,0.14) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-deep-field/50 via-transparent to-deep-field/85"
        />

        <div className="relative z-10 mx-auto w-full max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
              TECHNOLOGY
            </p>
            <h1 className="mt-5 font-display text-[2.75rem] font-light leading-[1.05] tracking-[-0.03em] text-white sm:text-[4rem]">
              From sensing to spatial intelligence.
            </h1>
            <p className="mt-6 max-w-[48ch] text-lg leading-[1.68] text-[#D8E0DA] sm:text-xl">
              Five coupled layers transform synchronized camera and inertial measurements into real-time spatial understanding on edge hardware.
            </p>

            <div className="mt-10">
              <Link
                href="/cortex"
                className="inline-flex items-center gap-2 rounded-sm bg-signal px-6 py-4 font-mono text-xs font-medium uppercase tracking-[0.12em] text-graphite transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                <span>Explore Cortex</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 02 · One Cohesive Five-Layer Architecture Diagram */}
      <section className="border-b border-border-grey bg-field py-24 text-graphite md:py-32">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
                FIVE-LAYER ARCHITECTURE
              </p>
              <h2 className="mt-4 font-display text-3xl font-light tracking-[-0.02em] text-graphite sm:text-4xl">
                Coupled onboard perception &amp; estimation
              </h2>
            </div>
            <p className="max-w-[50ch] text-lg leading-relaxed text-muted-ink lg:col-span-6">
              Motion priors, feature tracking, spatial geometry, and signal-health checks exchange feedback continuously across the stack. Select any layer below for interface details.
            </p>
          </div>

          <ArchitectureDiagram />
        </div>
      </section>

      <ClosingBand tone="dark" heading="Build with us." ctaLabel="Get in touch" />
    </>
  );
}
