import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CORTEX_SPEC, SITE_URL } from "@/data/site-content";
import { SpatialSchematic } from "@/components/SpatialSchematic";
import { ClosingBand } from "@/components/ClosingBand";

export const metadata: Metadata = {
  title: "Cortex",
  description:
    "Cortex is Perception Labs' flagship onboard engine for spatial perception and state estimation across aerial and robotic platforms.",
  alternates: { canonical: "/cortex" },
  openGraph: {
    title: "Cortex | Perception Labs",
    description:
      "Unified onboard spatial perception and state estimation engine for autonomous machines.",
    url: `${SITE_URL}/cortex`,
  },
};

export default function CortexPage() {
  return (
    <>
      {/* 01 · Hero Overview */}
      <section className="border-b border-border-grey bg-field pb-12 pt-24 md:pb-16 md:pt-28">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="min-w-0 lg:col-span-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
                FLAGSHIP ENGINE · CORTEX
              </p>
              <h1 className="mt-3 font-display text-[2.75rem] font-light leading-[1.04] tracking-[-0.03em] text-graphite sm:text-[4rem]">
                Cortex
              </h1>
              <p className="mt-4 max-w-[48ch] text-lg leading-[1.6] text-muted-ink">
                {CORTEX_SPEC.tagline} Connects synchronized cameras, IMUs, and auxiliary payloads into continuous spatial awareness, local mapping, and ~30 Hz flight/robot control readiness.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-4 border-y border-border-grey py-4">
                {CORTEX_SPEC.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="font-display text-2xl font-normal text-graphite">
                      {metric.value}
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-green">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-sm bg-graphite px-5 py-3.5 font-mono text-xs uppercase tracking-[0.12em] text-field transition-colors hover:bg-signal hover:text-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
                >
                  <span>Discuss an integration</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-6">
              <SpatialSchematic
                variant="cortex"
                label="Cortex spatial perception and state estimation profile"
                caption="ILLUSTRATIVE ENGINE PIPELINE · LOCAL ~30 HZ / OPTIONAL GLOBAL ~1 HZ"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 02 · Capabilities + Local vs Global Alignment Modes */}
      <section className="border-b border-deep-border bg-deep-field py-12 text-field md:py-16">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
                WHAT IT DOES
              </p>
              <h2 className="mt-2 font-display text-3xl font-light tracking-[-0.02em] text-field sm:text-4xl">
                Multi-rate onboard estimation &amp; spatial mapping
              </h2>
            </div>

            <div
              aria-label="Cortex processing pipeline"
              className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-[#D8E0DA]"
            >
              {CORTEX_SPEC.pipeline.map((step, index) => (
                <span key={step} className="inline-flex items-center gap-2">
                  <span>{step}</span>
                  {index < CORTEX_SPEC.pipeline.length - 1 && (
                    <span aria-hidden="true" className="text-signal">
                      →
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 border-t border-deep-border pt-8 md:grid-cols-3 md:gap-8">
            {CORTEX_SPEC.modes.map((mode) => (
              <div key={mode.name}>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-signal">
                  {mode.cadence}
                </p>
                <h3 className="mt-2 font-display text-xl font-medium text-field">
                  {mode.name}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#BCC7C0]">
                  {mode.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 · Technical Integration & Current Status */}
      <section className="border-b border-border-grey bg-field py-12 text-graphite md:py-16">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
                SPECIFICATIONS
              </p>
              <h2 className="mt-2 font-display text-2xl font-normal tracking-[-0.02em] text-graphite sm:text-3xl">
                Integration parameters &amp; interfaces
              </h2>

              <dl className="mt-6 divide-y divide-border-grey border-y border-border-grey">
                {CORTEX_SPEC.integration.map((row) => (
                  <div key={row.label} className="grid gap-1.5 py-4 sm:grid-cols-12 sm:gap-4">
                    <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted-green sm:col-span-4">
                      {row.label}
                    </dt>
                    <dd className="text-base leading-relaxed text-graphite sm:col-span-8">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="min-w-0 lg:col-span-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
                ENGINEERING MATURITY
              </p>
              <h2 className="mt-2 font-display text-2xl font-normal tracking-[-0.02em] text-graphite sm:text-3xl">
                Current capabilities &amp; boundaries
              </h2>

              <dl className="mt-6 divide-y divide-border-grey border-y border-border-grey">
                {CORTEX_SPEC.status.map((item) => (
                  <div key={item.stage} className="py-4">
                    <dt className="font-mono text-xs uppercase tracking-[0.12em] text-graphite">
                      {item.stage}
                    </dt>
                    <dd className="mt-1.5 text-base leading-relaxed text-muted-ink">
                      {item.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <ClosingBand tone="dark" heading="Build with us." ctaLabel="Discuss an integration" />
    </>
  );
}
