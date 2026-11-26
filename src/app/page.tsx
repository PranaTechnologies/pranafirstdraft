import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SpatialFieldCanvas } from "@/components/SpatialFieldCanvas";
import { SpatialSchematic } from "@/components/SpatialSchematic";
import { ClosingBand } from "@/components/ClosingBand";
import {
  BRAND,
  SOLUTION_AREAS,
  TECH_PILLARS_HOME,
} from "@/data/site-content";

export default function HomePage() {
  return (
    <>
      {/* 01 · HERO */}
      <section className="relative flex min-h-[min(88vh,820px)] flex-col justify-center overflow-hidden border-b border-deep-border bg-deep-field pb-20 pt-28 text-field md:pb-28 md:pt-36">
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
              "linear-gradient(90deg, #0B1110 0%, rgba(11,17,16,0.96) 38%, rgba(11,17,16,0.6) 60%, rgba(11,17,16,0.14) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-deep-field/50 via-transparent to-deep-field/85"
        />

        <div className="relative z-10 mx-auto w-full max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#BAC5BE]">
              {BRAND.name}
            </p>
            <h1 className="mt-5 font-display text-[2.85rem] font-light leading-[1.03] tracking-[-0.03em] text-white sm:text-[4.25rem] lg:text-[5rem]">
              {BRAND.headline}
            </h1>
            <p className="mt-6 max-w-[46ch] text-lg leading-[1.65] text-[#D8E0DA] sm:text-xl">
              {BRAND.heroSupporting}
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

      {/* 02 · OUR PRODUCT (Cortex) */}
      <section className="border-b border-border-grey bg-field py-24 text-graphite md:py-32">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="min-w-0 lg:col-span-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
                01 — OUR PRODUCT
              </p>
              <h2 className="mt-4 font-display text-[2.75rem] font-light leading-[1.05] tracking-[-0.025em] text-graphite sm:text-[3.75rem]">
                Cortex.
              </h2>
              <p className="mt-5 max-w-[44ch] text-xl leading-[1.6] text-muted-ink">
                A unified onboard engine for spatial perception and state estimation.
              </p>
              <div className="mt-9">
                <Link
                  href="/cortex"
                  className="inline-flex items-center gap-2 rounded-sm bg-graphite px-6 py-4 font-mono text-xs uppercase tracking-[0.12em] text-field transition-colors hover:bg-signal hover:text-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
                >
                  <span>Discover Cortex</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-6">
              <SpatialSchematic
                variant="cortex"
                label="Cortex illustrative onboard spatial perception and trajectory"
                caption="ILLUSTRATIVE SPATIAL RECONSTRUCTION"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 03 · OUR TECHNOLOGY */}
      <section className="border-b border-deep-border bg-deep-field py-24 text-field md:py-32">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
            02 — OUR TECHNOLOGY
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-[2.5rem] font-light leading-[1.08] tracking-[-0.025em] text-field sm:text-[3.5rem]">
            From sensing to spatial intelligence.
          </h2>

          <div className="mt-14 grid gap-10 border-t border-deep-border pt-10 md:grid-cols-3">
            {TECH_PILLARS_HOME.map((item) => (
              <div key={item.name}>
                <h3 className="font-display text-2xl font-normal text-field sm:text-3xl">
                  {item.name}
                </h3>
                <p className="mt-3 max-w-[34ch] text-base leading-relaxed text-[#BCC7C0]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/technology"
              className="inline-flex items-center gap-2 rounded-sm border border-[#34423D] bg-deep-surface px-6 py-4 font-mono text-xs uppercase tracking-[0.12em] text-field transition-colors hover:border-signal hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
            >
              <span>Explore our technology</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 04 · APPLICATIONS */}
      <section className="border-b border-border-grey bg-field py-24 text-graphite md:py-32">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
            03 — APPLICATIONS
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-[2.5rem] font-light leading-[1.08] tracking-[-0.025em] text-graphite sm:text-[3.5rem]">
            Built for the real world.
          </h2>

          <div className="mt-14 grid gap-12 border-t border-border-grey pt-10 md:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-normal text-graphite sm:text-3xl">
                Aerial autonomy
              </h3>
              <p className="mt-3 max-w-[40ch] text-lg leading-relaxed text-muted-ink">
                {SOLUTION_AREAS[0].description}
              </p>
            </div>
            <div className="border-t border-border-grey pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
              <h3 className="font-display text-2xl font-normal text-graphite sm:text-3xl">
                Robotic perception
              </h3>
              <p className="mt-3 max-w-[40ch] text-lg leading-relaxed text-muted-ink">
                {SOLUTION_AREAS[1].description}
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-sm bg-graphite px-6 py-4 font-mono text-xs uppercase tracking-[0.12em] text-field transition-colors hover:bg-signal hover:text-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
            >
              <span>Explore Solutions</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 · BUILD WITH US */}
      <ClosingBand tone="dark" heading="Build with us." ctaLabel="Get in touch" />
    </>
  );
}
