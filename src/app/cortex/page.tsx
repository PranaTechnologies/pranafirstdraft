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
      {/* 01 · Flagship Product Overview */}
      <section className="border-b border-border-grey bg-field pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="min-w-0 lg:col-span-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
                CORTEX
              </p>
              <h1 className="mt-4 font-display text-[3rem] font-light leading-[1.03] tracking-[-0.03em] text-graphite sm:text-[4.25rem]">
                Cortex
              </h1>
              <p className="mt-6 max-w-[46ch] text-xl leading-[1.6] text-muted-ink">
                {CORTEX_SPEC.tagline}
              </p>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-sm bg-graphite px-6 py-4 font-mono text-xs uppercase tracking-[0.12em] text-field transition-colors hover:bg-signal hover:text-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
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
                caption="ILLUSTRATIVE ENGINE PIPELINE"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 02 · What It Does */}
      <section className="border-b border-deep-border bg-deep-field py-24 text-field md:py-32">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
            WHAT IT DOES
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-light tracking-[-0.02em] text-field sm:text-4xl">
            Continuous perception, mapping, and state estimation on the machine.
          </h2>

          <div
            aria-label="Cortex processing pipeline"
            className="mt-10 flex flex-wrap items-center gap-3 border-y border-deep-border py-4 font-mono text-xs uppercase tracking-[0.12em] text-field"
          >
            {CORTEX_SPEC.pipeline.map((step, index) => (
              <span key={step} className="inline-flex items-center gap-3">
                <span>{step}</span>
                {index < CORTEX_SPEC.pipeline.length - 1 && (
                  <span aria-hidden="true" className="text-signal">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {CORTEX_SPEC.capabilities.map((cap) => (
              <div key={cap.title}>
                <h3 className="font-display text-2xl font-normal text-field">
                  {cap.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#BCC7C0]">
                  {cap.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 · Integration & Current Development Status */}
      <section className="border-b border-border-grey bg-field py-24 text-graphite md:py-32">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
                INTEGRATION
              </p>
              <h2 className="mt-4 font-display text-3xl font-normal tracking-[-0.02em] text-graphite">
                Designed for vehicle integration
              </h2>

              <dl className="mt-8 divide-y divide-border-grey border-y border-border-grey">
                {CORTEX_SPEC.integration.map((row) => (
                  <div key={row.label} className="grid gap-2 py-5 sm:grid-cols-12 sm:gap-4">
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
                DEVELOPMENT STATUS
              </p>
              <h2 className="mt-4 font-display text-3xl font-normal tracking-[-0.02em] text-graphite">
                Current capabilities &amp; boundaries
              </h2>

              <dl className="mt-8 divide-y divide-border-grey border-y border-border-grey">
                {CORTEX_SPEC.status.map((item) => (
                  <div key={item.stage} className="py-5">
                    <dt className="font-mono text-xs uppercase tracking-[0.12em] text-graphite">
                      {item.stage}
                    </dt>
                    <dd className="mt-2 text-base leading-relaxed text-muted-ink">
                      {item.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <ClosingBand tone="dark" heading="Build with us." ctaLabel="Get in touch" />
    </>
  );
}
