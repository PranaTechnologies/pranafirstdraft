import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SpatialFieldCanvas } from "@/components/SpatialFieldCanvas";
import { SpatialSchematic } from "@/components/SpatialSchematic";
import { ClosingBand } from "@/components/ClosingBand";
import {
  BRAND,
  CORTEX_SPEC,
  ENGINEERING_PRINCIPLES,
  PHILOSOPHY_PILLARS,
  TECHNOLOGY_LAYERS,
} from "@/data/site-content";

export default function HomePage() {
  return (
    <>
      {/* 01 · HERO (Dark Full-Bleed 3D Spatial Field Background, ~75vh) */}
      <section className="relative flex min-h-[min(76vh,660px)] flex-col justify-center overflow-hidden border-b border-deep-border bg-deep-field pb-12 pt-24 text-field md:pb-16 md:pt-28">
        <SpatialFieldCanvas variant="background" />

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
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#BAC5BE]">
              {BRAND.name}
            </p>
            <h1 className="mt-4 font-display text-[2.6rem] font-light leading-[1.04] tracking-[-0.03em] text-white sm:text-[3.85rem] lg:text-[4.5rem]">
              {BRAND.headline}
            </h1>
            <p className="mt-5 max-w-[48ch] text-base leading-[1.6] text-[#D8E0DA] md:text-[18px]">
              {BRAND.heroSupporting}
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

      {/* 02 · OUR PHILOSOPHY (Field White) */}
      <section className="border-b border-border-grey bg-field py-12 text-graphite md:py-16">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
                OUR PHILOSOPHY
              </p>
              <h2 className="mt-2 font-display text-3xl font-light tracking-[-0.025em] text-graphite sm:text-4xl">
                Beyond scripted automation.
              </h2>
            </div>
            <p className="max-w-[44ch] text-base leading-relaxed text-muted-ink">
              Operating reliably outside controlled spaces requires continuous perception, state awareness, and edge decision making.
            </p>
          </div>

          <div className="mt-8 grid gap-6 border-t border-border-grey pt-8 md:grid-cols-3 md:gap-8">
            {PHILOSOPHY_PILLARS.map((item) => (
              <div key={item.name}>
                <h3 className="font-display text-2xl font-normal text-graphite">
                  {item.name}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-ink">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 · FLAGSHIP PRODUCT — CORTEX (Deep Field Dark Band, 50:50 visual split) */}
      <section className="border-b border-deep-border bg-deep-field py-12 text-field md:py-20">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div className="min-w-0 lg:col-span-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
                FLAGSHIP PRODUCT
              </p>
              <h2 className="mt-2 font-display text-4xl font-light tracking-[-0.025em] text-white sm:text-5xl">
                Cortex.
              </h2>
              <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-[#D8E0DA] md:text-[17px]">
                {CORTEX_SPEC.tagline} Combines multi-sensor capture, local spatial mapping, ~30 Hz state estimation, and health-gated vehicle integration on onboard compute.
              </p>

              {/* Spec strip */}
              <div className="mt-7 grid grid-cols-3 gap-4 border-y border-deep-border py-4">
                {CORTEX_SPEC.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="font-display text-2xl font-normal text-signal sm:text-3xl">
                      {metric.value}
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[#BAC5BE]">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <Link
                  href="/cortex"
                  className="inline-flex items-center gap-2 rounded-sm bg-signal px-5 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.12em] text-graphite transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                >
                  <span>Explore Cortex</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-6">
              <SpatialSchematic
                variant="cortex"
                label="Cortex illustrative spatial perception and state estimation profile"
                caption="ILLUSTRATIVE ENGINE PIPELINE · LOCAL ~30 HZ / OPTIONAL GLOBAL ~1 HZ"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 04 · TECHNOLOGY — INTERCONNECTED 5-LAYER STACK (Field White) */}
      <section className="border-b border-border-grey bg-field py-12 text-graphite md:py-16">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
                TECHNOLOGY
              </p>
              <h2 className="mt-2 font-display text-3xl font-light tracking-[-0.025em] text-graphite sm:text-4xl">
                An interconnected perception stack.
              </h2>
            </div>
            <Link
              href="/technology"
              className="inline-flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-graphite underline decoration-border-grey underline-offset-4 transition-colors hover:decoration-graphite"
            >
              <span>Explore architecture</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-px border border-border-grey bg-border-grey md:grid-cols-5">
            {TECHNOLOGY_LAYERS.map((layer) => (
              <Link
                key={layer.slug}
                href={`/technology/${layer.slug}`}
                className="group flex flex-col justify-between bg-surface p-5 transition-colors hover:bg-deep-field hover:text-field focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-graphite"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-green transition-colors group-hover:text-signal">
                    {layer.layerNumber}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-medium text-graphite transition-colors group-hover:text-field">
                    {layer.shortTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-ink transition-colors group-hover:text-deep-muted">
                    {layer.stackSummary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 05 · ENGINEERING PRINCIPLES (Deep Field Dark Band) */}
      <section className="border-b border-deep-border bg-deep-field py-12 text-field md:py-16">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
            ENGINEERING PRINCIPLES
          </p>
          <h2 className="mt-2 font-display text-3xl font-light tracking-[-0.025em] text-field sm:text-4xl">
            Engineered for physical systems.
          </h2>

          <div className="mt-8 grid gap-6 border-t border-deep-border pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {ENGINEERING_PRINCIPLES.map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-xl font-medium text-field">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#BCC7C0] md:text-base">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 · SOLUTIONS PREVIEW (Field White) */}
      <section className="border-b border-border-grey bg-field py-12 text-graphite md:py-16">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
                SOLUTIONS
              </p>
              <h2 className="mt-2 font-display text-3xl font-light tracking-[-0.025em] text-graphite sm:text-4xl">
                Built for real-world autonomy.
              </h2>
            </div>
            <Link
              href="/solutions"
              className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-graphite px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-field transition-colors hover:bg-signal hover:text-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
            >
              <span>Explore Solutions</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-8 border-t border-border-grey pt-8 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-green">
                  RESILIENT ONBOARD LOCALIZATION
                </p>
                <h3 className="mt-1 font-display text-2xl font-normal text-graphite">
                  Aerial autonomy
                </h3>
              </div>
              <p className="text-base leading-relaxed text-muted-ink">
                Continuous visual-inertial estimation and optional map alignment for UAVs flying beyond reliable satellite reception.
              </p>
              <SpatialSchematic
                variant="uav"
                label="Illustrative UAV localization and PX4/ROS 2 pipeline schematic"
              />
            </div>

            <div className="space-y-4 border-t border-border-grey pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-green">
                  SPATIAL INTELLIGENCE FOR MOBILE MACHINES
                </p>
                <h3 className="mt-1 font-display text-2xl font-normal text-graphite">
                  Robotic perception
                </h3>
              </div>
              <p className="text-base leading-relaxed text-muted-ink">
                Multi-sensor spatial mapping, local geometry awareness, and odometry engineered for unstructured ground and indoor mobility.
              </p>
              <SpatialSchematic
                variant="robotics"
                label="Illustrative robotic perception and local corridor reconstruction schematic"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 07 · CLOSING */}
      <ClosingBand tone="dark" heading="Build with us." ctaLabel="Discuss an integration" />
    </>
  );
}
