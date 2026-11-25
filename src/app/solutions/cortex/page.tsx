import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CORTEX_SPEC, SITE_URL } from "@/data/site-content";
import { SpatialSchematic } from "@/components/SpatialSchematic";
import { ClosingBand } from "@/components/ClosingBand";

export const metadata: Metadata = {
  title: "Cortex — Unified Perception & Navigation Engine",
  description:
    "Technical architecture, multi-sensor perception pipeline, ~30 Hz state estimation cadence, PX4/ROS 2 interfaces, and operating boundaries for Cortex.",
  alternates: { canonical: "/solutions/cortex" },
  openGraph: {
    title: "Cortex — Unified Perception & Navigation Engine | Perception Labs",
    description:
      "Core onboard perception, spatial understanding, state estimation, and navigation engine for UAVs and autonomous robots.",
    url: `${SITE_URL}/solutions/cortex`,
  },
};

export default function CortexPage() {
  return (
    <>
      <section className="border-b border-border-grey bg-field pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-muted-ink transition-colors hover:text-graphite"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back to Solutions</span>
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="min-w-0 lg:col-span-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
                  PL / CORE ENGINE
                </span>
                <span className="inline-flex items-center gap-2 rounded-sm border border-border-grey bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-graphite">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal ring-1 ring-graphite/30" aria-hidden="true" />
                  Unified Perception &amp; Navigation
                </span>
              </div>

              <h1 className="mt-5 font-display text-[2.5rem] font-light leading-[1.06] tracking-[-0.025em] text-graphite sm:text-[3.75rem]">
                Cortex — Unified Perception &amp; Navigation Engine
              </h1>
              <p className="mt-6 max-w-[56ch] text-lg leading-[1.68] text-muted-ink sm:text-[19px]">
                Cortex is Perception Labs&apos; unified onboard engine—connecting synchronized camera, inertial, and auxiliary sensors to spatial understanding, state estimation, and autonomous vehicle control.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-sm bg-graphite px-6 py-3.5 font-mono text-xs uppercase tracking-[0.12em] text-field transition-colors hover:bg-signal hover:text-graphite"
                >
                  <span>Discuss Cortex Integration</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/technology"
                  className="inline-flex items-center gap-2 rounded-sm border border-border-grey bg-surface px-6 py-3.5 font-mono text-xs uppercase tracking-[0.12em] text-graphite transition-colors hover:border-graphite"
                >
                  <span>Full Technology Stack</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-6">
              <SpatialSchematic
                variant="cortex"
                label="Cortex unified perception, mapping, and 6-DoF state trajectory"
                caption="ENGINE PIPELINE · MULTI-SENSOR PERCEPTION → SPATIAL MAPPING & STATE (~30 HZ)"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Pipeline & Modes */}
      <section className="border-b border-border-grey bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
            ARCHITECTURE
          </p>
          <h2 className="mt-4 font-display text-3xl font-normal tracking-[-0.02em] text-graphite sm:text-4xl">
            From synchronized sensor perception to autonomous execution
          </h2>

          <div className="mt-8 flex flex-wrap items-center gap-3 rounded-sm border border-border-grey bg-field px-5 py-4 font-mono text-xs uppercase tracking-[0.1em] text-graphite sm:text-sm">
            {CORTEX_SPEC.pipeline.map((node, index) => (
              <span key={node} className="inline-flex items-center gap-3">
                <span>{node}</span>
                {index < CORTEX_SPEC.pipeline.length - 1 && (
                  <span aria-hidden="true" className="text-muted-ink">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-px border border-border-grey bg-border-grey md:grid-cols-3">
            {CORTEX_SPEC.howItWorks.map((item) => (
              <div key={item.step} className="bg-field p-7 sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-ink">
                  {item.step}
                </p>
                <h3 className="mt-4 font-display text-xl font-medium text-graphite sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-ink">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
              LOCAL PERCEPTION VS. GLOBAL ALIGNMENT
            </p>
            <h3 className="mt-3 font-display text-2xl font-normal tracking-[-0.02em] text-graphite sm:text-3xl">
              Coupling onboard spatial awareness with optional global localization
            </h3>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {CORTEX_SPEC.modes.map((mode) => (
                <div
                  key={mode.name}
                  className="rounded-card border border-border-grey bg-field p-7"
                >
                  <span className="inline-block rounded-sm border border-border-grey bg-surface px-2.5 py-1 font-mono text-xs uppercase tracking-[0.1em] text-graphite">
                    {mode.cadence}
                  </span>
                  <h4 className="mt-4 font-display text-xl font-medium text-graphite">
                    {mode.name}
                  </h4>
                  <p className="mt-3 text-base leading-relaxed text-muted-ink">
                    {mode.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications & Honest Boundaries */}
      <section className="border-b border-border-grey bg-field py-20 md:py-28">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
                TECHNICAL SPECIFICATIONS
              </p>
              <h2 className="mt-3 font-display text-3xl font-normal tracking-[-0.02em] text-graphite">
                Integration parameters &amp; interfaces
              </h2>

              <dl className="mt-8 divide-y divide-border-grey border-y border-border-grey">
                {CORTEX_SPEC.verifiedSpecs.map((row) => (
                  <div key={row.label} className="grid gap-2 py-5 sm:grid-cols-12 sm:gap-6">
                    <dt className="font-mono text-xs uppercase tracking-[0.11em] text-muted-ink sm:col-span-4">
                      {row.label}
                    </dt>
                    <dd className="text-base leading-relaxed text-graphite sm:col-span-8">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="min-w-0 space-y-6 lg:col-span-5">
              <div className="rounded-card border border-deep-border bg-deep-field p-7 text-field">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-signal">
                  HONEST ENGINEERING BOUNDARIES
                </p>
                <h3 className="mt-3 font-display text-2xl font-normal text-field">
                  Relative motion vs. absolute position
                </h3>
                <p className="mt-4 text-base leading-relaxed text-deep-muted">
                  While Cortex unifies onboard perception, local mapping, and state estimation, standalone visual-inertial tracking estimates relative motion in a local reference frame—it does not produce drift-free absolute coordinates without GNSS or global map alignment.
                </p>
                <p className="mt-4 text-base leading-relaxed text-deep-muted">
                  Long-horizon drift, metric scale observability under steady flight, and tracking recovery depend on camera-IMU timing alignment, observable visual features, and optional ~1 Hz geo-referenced map fusion.
                </p>
              </div>

              <div className="rounded-card border border-border-grey bg-surface p-7">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-ink">
                  ENGINEERING MATURITY
                </p>

                <div className="mt-5 space-y-5">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-[0.1em] text-graphite">
                      Implemented &amp; Tested
                    </h4>
                    <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-ink sm:text-base">
                      {CORTEX_SPEC.maturityTiers.implemented.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-[0.1em] text-graphite">
                      Under Active Development
                    </h4>
                    <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-ink sm:text-base">
                      {CORTEX_SPEC.maturityTiers.inDevelopment.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-[0.1em] text-graphite">
                      Planned Expansion
                    </h4>
                    <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-ink sm:text-base">
                      {CORTEX_SPEC.maturityTiers.planned.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClosingBand />
    </>
  );
}
