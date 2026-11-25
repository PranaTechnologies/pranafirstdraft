import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SpatialFieldCanvas } from "@/components/SpatialFieldCanvas";
import { AutonomyStack } from "@/components/AutonomyStack";
import { SpatialSchematic } from "@/components/SpatialSchematic";
import { ClosingBand } from "@/components/ClosingBand";
import {
  AUTOMATION_STAGES,
  BRAND,
  FEATURED_BLOG_POST,
  LEGACY_LIMITATIONS,
  PIVO_SPEC,
  SPATIAL_GAPS,
  SYSTEM_CATEGORIES,
} from "@/data/site-content";

export default function HomePage() {
  return (
    <>
      {/* SECTION 01 — HERO (Field White) */}
      <section className="border-b border-border-grey bg-field pb-20 pt-28 md:pb-28 md:pt-36">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="min-w-0 lg:col-span-6">
              <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-signal ring-1 ring-graphite/25"
                />
                {BRAND.name} / {BRAND.tagline}
              </p>
              <h1 className="mt-6 font-display text-[2.75rem] font-light leading-[1.04] tracking-[-0.03em] text-graphite sm:text-[4.1rem] lg:text-[4.85rem]">
                {BRAND.headline}
              </h1>
              <p className="mt-7 max-w-[56ch] text-lg leading-[1.68] text-muted-ink sm:text-[19px]">
                {BRAND.heroSupporting}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/systems/pivo"
                  className="inline-flex items-center gap-2 rounded-sm bg-graphite px-6 py-4 font-mono text-xs uppercase tracking-[0.12em] text-field transition-colors duration-150 hover:bg-signal hover:text-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
                >
                  <span>Explore PIVO</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-sm border border-border-grey bg-surface px-6 py-4 font-mono text-xs uppercase tracking-[0.12em] text-graphite transition-colors duration-150 hover:border-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
                >
                  <span>Discuss an Integration</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-14 grid grid-cols-1 gap-5 border-t border-border-grey pt-5 sm:grid-cols-3 sm:gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-ink">
                    CORE ENGINE
                  </p>
                  <p className="mt-1.5 text-base text-graphite">
                    PIVO (~30 Hz VIO)
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-ink">
                    FLIGHT STACKS
                  </p>
                  <p className="mt-1.5 text-base text-graphite">
                    PX4 &amp; ROS 2 Ready
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-ink">
                    CURRENT STAGE
                  </p>
                  <p className="mt-1.5 text-base text-graphite">
                    Phase 4 UAV Pilots
                  </p>
                </div>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-6">
              <SpatialFieldCanvas />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — SHIFT & THE SPATIAL INTELLIGENCE GAP (Deep Field) */}
      <section className="border-b border-deep-border bg-deep-field py-24 text-field md:py-32">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="min-w-0 lg:col-span-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
                PL / THE SPATIAL INTELLIGENCE GAP
              </p>
              <h2 className="mt-4 font-display text-[2.25rem] font-light leading-[1.08] tracking-[-0.025em] text-field sm:text-[2.95rem] lg:text-[3.35rem]">
                Moving from scripted execution to perceptive autonomy.
              </h2>
            </div>
            <p className="max-w-[58ch] text-lg leading-[1.68] text-deep-muted sm:text-[19px] lg:col-span-6">
              Real-world robotics and aerial missions fail when machines rely on fragile GNSS positioning, heavy offline mapping, or rigid scripts. Operating outside controlled spaces requires solving three questions onboard.
            </p>
          </div>

          <div className="mt-14 grid gap-px border border-deep-border bg-deep-border md:grid-cols-3">
            {SPATIAL_GAPS.map((gap) => (
              <article
                key={gap.number}
                className="flex flex-col justify-between bg-deep-surface p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-signal">
                      {gap.number}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-deep-muted">
                      {gap.label}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-normal tracking-[-0.015em] text-field">
                    {gap.question}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-deep-muted">
                    {gap.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-10 border-t border-deep-border pt-10 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-deep-muted">
                AUTONOMY EVOLUTION
              </p>
              <div className="mt-5 grid gap-6 sm:grid-cols-3">
                {AUTOMATION_STAGES.map((item) => (
                  <div key={item.index}>
                    <span className="font-mono text-xs text-signal">{item.index}</span>
                    <h3 className="mt-1.5 font-display text-lg font-medium text-field">
                      {item.stage}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-deep-muted sm:text-[15px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="min-w-0 border-t border-deep-border pt-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-deep-muted">
                CURRENT BASELINE LIMITATIONS
              </p>
              <ul className="mt-4 space-y-3 text-base text-deep-muted">
                {LEGACY_LIMITATIONS.map((limitation) => (
                  <li key={limitation} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
                    />
                    <span>{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — FIVE-LAYER COUPLED ARCHITECTURE */}
      <AutonomyStack />

      {/* SECTION 04 — PIVO CENTREPIECE & SYSTEM HIERARCHY (Pure White) */}
      <section className="border-b border-border-grey bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="min-w-0 lg:col-span-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
                PL / FLAGSHIP NAVIGATION ENGINE
              </p>
              <h2 className="mt-4 font-display text-[2.25rem] font-normal leading-[1.08] tracking-[-0.025em] text-graphite sm:text-[3rem]">
                PIVO — Parallel Visual-Inertial Odometry
              </h2>
              <p className="mt-5 max-w-[56ch] text-lg leading-[1.68] text-muted-ink">
                Our core onboard motion estimation engine fuses synchronized camera streams with inertial measurements (~30 Hz local pose) and integrates optionally with ~1 Hz geo-referenced visual matching for PX4 and ROS 2 flight stacks.
              </p>

              <div
                aria-label="PIVO architecture flow"
                className="mt-7 flex flex-wrap items-center gap-2 rounded-sm border border-border-grey bg-field px-4 py-3.5 font-mono text-xs uppercase tracking-[0.1em] text-graphite"
              >
                {PIVO_SPEC.pipeline.map((node, index) => (
                  <span key={node} className="inline-flex items-center gap-2">
                    <span>{node}</span>
                    {index < PIVO_SPEC.pipeline.length - 1 && (
                      <span aria-hidden="true" className="text-muted-ink">
                        →
                      </span>
                    )}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/systems/pivo"
                  className="inline-flex items-center gap-2 rounded-sm bg-graphite px-5 py-3.5 font-mono text-xs uppercase tracking-[0.12em] text-field transition-colors hover:bg-signal hover:text-graphite"
                >
                  <span>PIVO Technical Specs</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/systems"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-graphite underline decoration-border-grey underline-offset-4 hover:decoration-graphite"
                >
                  <span>Full Systems &amp; Roadmap</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-6">
              <SpatialSchematic
                variant="pivo"
                label="PIVO visual-inertial state estimation trajectory"
                caption="CORE ENGINE: LOCAL VIO (~30 HZ) · COUPLED WITH OPTIONAL GLOBAL VISUAL LOCALIZATION (~1 HZ)"
              />
            </div>
          </div>

          {/* Product maturity hierarchy without duplicating /systems cards */}
          <div className="mt-16 grid gap-px border border-border-grey bg-border-grey md:grid-cols-4">
            {SYSTEM_CATEGORIES.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group flex flex-col justify-between bg-field p-6 transition-colors hover:bg-surface"
              >
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-ink">
                    {item.code}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-medium text-graphite">
                    {item.name}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-ink">
                    {item.category}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-muted-ink">
                    {item.summary}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border-grey pt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-graphite">
                  <span>{item.maturity}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — BEACHHEAD FOCUS & TECHNICAL JOURNAL (Field White) */}
      <section className="bg-field py-24 md:py-32">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* UAV Beachhead & Team */}
            <div className="flex min-w-0 flex-col justify-between rounded-card border border-border-grey bg-surface p-8 lg:col-span-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
                  PL / DEPLOYMENT FOCUS
                </p>
                <h2 className="mt-4 font-display text-3xl font-normal leading-tight tracking-[-0.02em] text-graphite">
                  Built first for UAV &amp; industrial drone platforms.
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-ink">
                  Headquartered in Bhubaneswar, Odisha, we are entering Phase 4 pilot integrations with drone service partners—connecting onboard visual-inertial estimation directly into PX4 and ROS 2 flight stacks.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 border-t border-border-grey pt-6">
                <Link
                  href="/applications"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-graphite underline decoration-border-grey underline-offset-4 hover:decoration-graphite"
                >
                  <span>Applications Matrix</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-graphite underline decoration-border-grey underline-offset-4 hover:decoration-graphite"
                >
                  <span>Meet the Founders</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Technical Blog Preview */}
            <div className="flex min-w-0 flex-col justify-between rounded-card border border-border-grey bg-surface p-8 lg:col-span-6">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
                    PL / TECHNICAL BLOG
                  </span>
                  <span className="rounded-sm border border-border-grey bg-field px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-graphite">
                    {FEATURED_BLOG_POST.status}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-3xl font-normal leading-tight tracking-[-0.02em] text-graphite">
                  {FEATURED_BLOG_POST.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-ink">
                  {FEATURED_BLOG_POST.summary}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 border-t border-border-grey pt-6">
                <Link
                  href={`/research/${FEATURED_BLOG_POST.slug}`}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-graphite underline decoration-border-grey underline-offset-4 hover:decoration-graphite"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-muted-ink underline decoration-border-grey underline-offset-4 hover:text-graphite"
                >
                  <span>All Engineering Notes</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — CLOSING STATEMENT */}
      <ClosingBand />
    </>
  );
}
