import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { TechFieldCanvas } from "@/components/TechFieldCanvas";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import {
  ENGINEERING_PRINCIPLES,
  TECH_COUPLED_ENGINES,
  TECHNOLOGY_LAYERS,
} from "@/data/site-content";

export const metadata: Metadata = buildPageMetadata({
  title: "Visual-Inertial & Spatial Autonomy Stack",
  description:
    "Hardware-synced camera–IMU sensing, visual-inertial odometry (VIO), spatial mapping, and real-time PX4 / ROS 2 execution inside Cortex.",
  path: "/technology",
});

export default function TechnologyPage() {
  return (
    <>
      {/* 01 · Hero with Integrated Volumetric 3D Background */}
      <section className="relative flex min-h-[min(70vh,580px)] flex-col justify-center overflow-hidden border-b border-deep-border bg-deep-field pb-12 pt-24 text-field md:pb-16 md:pt-28">
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

        <div className="relative z-10 mx-auto w-full max-w-editorial px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
              TECHNOLOGY ARCHITECTURE
            </p>
            <h1 className="mt-4 font-display text-[2.5rem] font-light leading-[1.05] tracking-[-0.03em] text-white sm:text-[3.75rem]">
              From sensing to spatial intelligence.
            </h1>
            <p className="mt-4 max-w-[48ch] text-base leading-[1.65] text-[#D8E0DA] md:text-[18px]">
              An interconnected five-layer architecture uniting physical sensor synchronization, continuous visual perception, state estimation, and edge execution inside Cortex.
            </p>

            <div className="mt-8">
              <Link
                href="/cortex"
                className="inline-flex items-center gap-2 rounded-sm bg-signal px-5 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.12em] text-graphite transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                <span>Explore Cortex</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 02 · Unified Five-Layer Architecture Diagram + Interface Specification Table */}
      <section className="border-b border-border-grey bg-field py-12 text-graphite md:py-16">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
                FIVE-LAYER ARCHITECTURE
              </p>
              <h2 className="mt-2 font-display text-3xl font-light tracking-[-0.02em] text-graphite sm:text-4xl">
                Coupled closed-loop estimation &amp; control
              </h2>
            </div>
            <p className="max-w-[50ch] text-base leading-relaxed text-muted-ink">
              Motion priors, tracked visual features, local 3D maps, and signal-health checks exchange feedback across layers rather than operating purely one-way.
            </p>
          </div>

          <ArchitectureDiagram />

          {/* Clean compact technical table without excessive card borders */}
          <div className="mt-10 divide-y divide-border-grey border-y border-border-grey">
            {TECHNOLOGY_LAYERS.map((layer) => (
              <div
                key={layer.slug}
                className="grid gap-4 py-5 lg:grid-cols-12 lg:items-baseline lg:gap-6"
              >
                <div className="lg:col-span-3">
                  <Link
                    href={`/technology/${layer.slug}`}
                    className="inline-flex items-center gap-2 font-display text-xl font-medium text-graphite underline decoration-border-grey underline-offset-4 transition-colors hover:decoration-graphite"
                  >
                    <span className="font-mono text-xs text-muted-green">{layer.layerNumber}</span>
                    <span>{layer.shortTitle}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-green" aria-hidden="true" />
                  </Link>
                </div>
                <p className="text-base leading-relaxed text-muted-ink lg:col-span-5">
                  {layer.overview}
                </p>
                <p className="font-mono text-xs uppercase leading-relaxed tracking-[0.06em] text-muted-green lg:col-span-4">
                  FEEDBACK: {layer.feedbackNote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 · Three Coupled Technology Engines & Core Guarantees */}
      <section className="border-b border-deep-border bg-deep-field py-12 text-field md:py-16">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
            COUPLED ENGINES
          </p>
          <h2 className="mt-2 font-display text-3xl font-light tracking-[-0.02em] text-field sm:text-4xl">
            Three coupled engines behind Cortex.
          </h2>

          <div className="mt-8 grid gap-6 border-t border-deep-border pt-8 md:grid-cols-3 md:gap-8">
            {TECH_COUPLED_ENGINES.map((eng) => (
              <div key={eng.code}>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-signal">
                  {eng.code} · {eng.layers}
                </p>
                <h3 className="mt-2 font-display text-xl font-medium text-field">
                  {eng.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#BCC7C0]">
                  {eng.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 border-t border-deep-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {ENGINEERING_PRINCIPLES.map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-lg font-medium text-field">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#9AA59F]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
