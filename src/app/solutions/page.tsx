import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  APPLICATION_MATRIX,
  SITE_URL,
  SOLUTION_DOMAINS,
  SYSTEM_CATEGORIES,
} from "@/data/site-content";
import { SpatialSchematic } from "@/components/SpatialSchematic";
import { ClosingBand } from "@/components/ClosingBand";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Perception Labs integrated perception and autonomy solutions powered by Cortex across UAVs, industrial infrastructure, indoor robotics, and defense operations.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions | Perception Labs",
    description:
      "Cortex unified perception and navigation engine integrated across aerial, industrial, and robotics environments.",
    url: `${SITE_URL}/solutions`,
  },
};

export default function SolutionsPage() {
  return (
    <>
      {/* 01 · Hero Banner (Dark Deep Field Showcase) */}
      <section className="relative overflow-hidden border-b border-deep-border bg-deep-field pb-20 pt-32 text-field md:pb-28 md:pt-40">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
            PL / INTEGRATED SOLUTIONS
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.6rem] font-light leading-[1.05] tracking-[-0.03em] text-white sm:text-[3.75rem] lg:text-[4.65rem]">
            Machines operating reliably in the physical world.
          </h1>
          <div className="mt-8 grid gap-8 border-t border-deep-border pt-8 lg:grid-cols-12 lg:items-end">
            <p className="max-w-[58ch] text-lg leading-[1.68] text-[#D3DCD6] sm:text-[19px] lg:col-span-8">
              Cortex unifies multi-sensor perception, spatial understanding, state estimation, and autonomous navigation into a single onboard architecture deployable across UAVs, mobile robots, and custom OEM systems.
            </p>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <Link
                href="/solutions/cortex"
                className="inline-flex items-center gap-2 rounded-sm bg-signal px-6 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.12em] text-graphite transition-colors hover:bg-white"
              >
                <span>Explore Cortex Engine</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 02 · Action Split Intro ("Deploy Across Your Industry") */}
      <section className="border-b border-border-grey bg-field py-20 md:py-28">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
            DEPLOYMENT &amp; INTEGRATION
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-[2.25rem] font-normal leading-[1.08] tracking-[-0.025em] text-graphite sm:text-[3rem]">
            Turn onboard sensors into autonomous operational capability.
          </h2>

          <div className="mt-12 grid gap-10 border-t border-border-grey pt-10 lg:grid-cols-12">
            <div className="flex flex-col justify-between gap-6 lg:col-span-5">
              <div>
                <p className="text-xl font-medium text-graphite">
                  See Cortex integrated into your platform architecture.
                </p>
                <p className="mt-2 text-base leading-relaxed text-muted-ink">
                  Share your camera-IMU suite, edge compute target, and PX4 or ROS 2 middleware requirements.
                </p>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-sm bg-graphite px-6 py-3.5 font-mono text-xs uppercase tracking-[0.12em] text-field transition-colors hover:bg-signal hover:text-graphite"
                >
                  <span>Discuss an Integration</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="border-t border-border-grey pt-8 text-lg leading-[1.7] text-muted-ink lg:col-span-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              Perception Labs removes reliance on fragile continuous GNSS fixes or ground positioning infrastructure. By coupling spatial feature observation, 3D scene representation, and ~30 Hz state estimation directly on the vehicle, autonomous platforms maintain situational awareness and reliable control through indoor facilities, industrial steelwork, canopies, and degraded airspace.
            </div>
          </div>
        </div>
      </section>

      {/* 03 · Four-Tier Non-Overlapping Product Hierarchy (No Pricing) */}
      <section
        id="capabilities"
        className="border-b border-deep-border bg-deep-field py-20 text-field md:py-28"
      >
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
            PL / PRODUCT HIERARCHY
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-normal tracking-[-0.02em] text-field sm:text-4xl">
            Four distinct layers—from onboard runtime software to vehicle bring-up
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {SYSTEM_CATEGORIES.map((sys) => (
              <article
                key={sys.id}
                id={sys.id}
                className="flex flex-col justify-between rounded-card border border-deep-border bg-deep-surface p-8 sm:p-10"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-signal">
                      {sys.code}
                    </span>
                    <span className="rounded-sm border border-deep-border bg-deep-field px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-[#D3DCD6]">
                      {sys.maturity}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-3xl font-medium tracking-[-0.02em] text-field">
                    {sys.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-[#9AA59F]">
                    {sys.category}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-[#C6D1CA]">
                    {sys.summary}
                  </p>
                  <p className="mt-4 border-l-2 border-signal pl-3.5 font-mono text-xs uppercase leading-relaxed tracking-[0.08em] text-[#D8E0DA]">
                    {sys.scopeNote}
                  </p>
                </div>

                <div className="mt-8 border-t border-deep-border pt-5">
                  <Link
                    href={sys.href}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-signal underline decoration-deep-border underline-offset-4 transition-colors hover:text-field hover:decoration-signal"
                  >
                    <span>{sys.ctaLabel}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 04 · 4-Column Mission & Industry Use-Case Grid */}
      <section
        id="domains"
        className="border-b border-border-grey bg-field py-20 md:py-28"
      >
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
            OPERATIONAL USE CASES
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-normal tracking-[-0.02em] text-graphite sm:text-4xl">
            Where Cortex perception &amp; autonomy deploy
          </h2>

          <div className="mt-12 grid gap-px border border-border-grey bg-border-grey sm:grid-cols-2 lg:grid-cols-4">
            {SOLUTION_DOMAINS.map((item) => {
              const isCta = "cta" in item && item.cta;
              return isCta ? (
                <Link
                  key={item.title}
                  href="/contact"
                  className="group flex flex-col justify-between bg-deep-field p-7 text-field transition-colors hover:bg-[#17231E]"
                >
                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-signal">
                      {item.code} / CUSTOM
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-normal text-field">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-[#C6D1CA]">
                      {item.summary}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-deep-border pt-4 font-mono text-xs uppercase tracking-[0.1em] text-signal">
                    <span>Contact Engineering</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </div>
                </Link>
              ) : (
                <div
                  key={item.title}
                  className="flex flex-col justify-between bg-surface p-7"
                >
                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-ink">
                      {item.code}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-normal text-graphite">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-ink">
                      {item.summary}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 · Detailed Mission & Capability Mapping */}
      <section className="border-b border-deep-border bg-deep-field py-20 text-field md:py-28">
        <div className="mx-auto max-w-editorial space-y-10 px-6 md:px-12 lg:px-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
              MISSION-TO-SYSTEM ARCHITECTURE
            </p>
            <h2 className="mt-4 font-display text-3xl font-normal tracking-[-0.02em] text-field sm:text-4xl">
              Operational scope across aerial &amp; robotic platforms
            </h2>
          </div>

          <div className="space-y-8">
            {APPLICATION_MATRIX.map((domain) => (
              <article
                key={domain.id}
                id={domain.id}
                className="overflow-hidden rounded-card border border-deep-border bg-deep-surface"
              >
                <div className="grid lg:grid-cols-12">
                  <div className="flex flex-col justify-between p-7 sm:p-9 lg:col-span-7">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-xs uppercase tracking-[0.12em] text-signal">
                          {domain.index} / {domain.badge}
                        </span>
                        <span className="rounded-sm border border-deep-border bg-deep-field px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-[#D3DCD6]">
                          {domain.maturity}
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-3xl font-medium tracking-[-0.02em] text-field">
                        {domain.title}
                      </h3>
                      <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-[#9AA59F]">
                        {domain.environment}
                      </p>
                      <p className="mt-4 text-lg leading-relaxed text-[#C6D1CA]">
                        {domain.summary}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-deep-border lg:col-span-5 lg:border-l lg:border-t-0">
                    <SpatialSchematic
                      variant={domain.graphic}
                      label={`${domain.title} spatial profile`}
                      caption={domain.environment.toUpperCase()}
                      className="h-full rounded-none border-0"
                    />
                  </div>
                </div>

                <div className="border-t border-deep-border bg-deep-field px-7 py-6 sm:px-9">
                  <div className="divide-y divide-deep-border">
                    {domain.rows.map((row) => (
                      <div
                        key={row.problem}
                        className="grid gap-4 py-4 text-base first:pt-0 last:pb-0 md:grid-cols-4 md:gap-6"
                      >
                        <div>
                          <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-[#9AA59F]">
                            Challenge
                          </span>
                          <span className="mt-1 block text-field">{row.problem}</span>
                        </div>
                        <div>
                          <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-[#9AA59F]">
                            Cortex Role
                          </span>
                          <span className="mt-1 block text-[#C6D1CA]">{row.capability}</span>
                        </div>
                        <div>
                          <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-[#9AA59F]">
                            Module Scope
                          </span>
                          <span className="mt-1 block font-medium text-signal">{row.system}</span>
                        </div>
                        <div>
                          <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-[#9AA59F]">
                            Outcome
                          </span>
                          <span className="mt-1 block text-[#C6D1CA]">{row.outcome}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 06 · Closing Statement */}
      <ClosingBand tone="light" />
    </>
  );
}
