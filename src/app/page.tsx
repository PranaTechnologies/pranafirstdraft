import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SpatialFieldCanvas } from "@/components/SpatialFieldCanvas";
import { AutonomyStack } from "@/components/AutonomyStack";
import { SpatialSchematic } from "@/components/SpatialSchematic";
import { ClosingBand } from "@/components/ClosingBand";
import {
  APPLICATION_DOMAINS,
  BRAND_PRINCIPLES,
  ENGINEERING_PRACTICES,
  PROBLEM_PILLARS,
  SYSTEMS_PROGRAMS,
  TECHNOLOGY_ITEMS,
} from "@/data/site-content";

export default function HomePage() {
  return (
    <>
      {/* SECTION 01 — HERO (Field White) */}
      <section className="border-b border-border-grey bg-field pb-20 pt-28 md:pb-28 md:pt-36">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="min-w-0 lg:col-span-6">
              <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-signal ring-1 ring-graphite/25"
                />
                PERCEPTION LABS / AUTONOMY SYSTEMS
              </p>
              <h1 className="mt-6 font-display text-[2.5rem] font-light leading-[1.04] tracking-[-0.03em] text-graphite sm:text-[4rem] lg:text-[4.65rem]">
                Machines that understand the world they move through.
              </h1>
              <p className="mt-7 max-w-[54ch] text-[17px] leading-[1.65] text-muted-ink sm:text-[18px]">
                We build perception, localization and onboard intelligence systems that enable autonomous machines to operate in complex and changing environments.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/technology"
                  className="inline-flex items-center gap-2 rounded-sm bg-graphite px-5 py-3.5 font-mono text-xs uppercase tracking-[0.12em] text-field transition-colors duration-150 hover:bg-signal hover:text-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
                >
                  <span>Explore Technology</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-sm border border-border-grey bg-surface px-5 py-3.5 font-mono text-xs uppercase tracking-[0.12em] text-graphite transition-colors duration-150 hover:border-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
                >
                  <span>Work With Us</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-14 grid grid-cols-1 gap-5 border-t border-border-grey pt-5 sm:grid-cols-3 sm:gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-ink">
                    01 — PERCEPTION
                  </p>
                  <p className="mt-1.5 text-sm text-graphite">
                    Sensing & structure
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-ink">
                    02 — LOCALIZATION
                  </p>
                  <p className="mt-1.5 text-sm text-graphite">
                    State estimation
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-ink">
                    03 — AUTONOMY
                  </p>
                  <p className="mt-1.5 text-sm text-graphite">
                    Onboard execution
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

      {/* SECTION 02 — THE BIGGER PROBLEM (Deep Field) */}
      <section className="border-b border-deep-border bg-deep-field py-24 text-field md:py-36">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-signal">
                PL / THE CHALLENGE
              </p>
              <h2 className="mt-5 font-display text-[2rem] font-light leading-[1.08] tracking-[-0.025em] text-field sm:text-[2.75rem] lg:text-[3.25rem]">
                The real world doesn&apos;t operate in perfect conditions.
              </h2>
            </div>
            <p className="max-w-[58ch] text-[17px] leading-[1.65] text-deep-muted sm:text-[18px] lg:col-span-6">
              Autonomous machines must operate in environments that are dynamic, uncertain and difficult to predict. Reliable autonomy requires more than individual sensors or algorithms. It requires systems that can continuously interpret the world and respond to it.
            </p>
          </div>

          <div className="mt-14 grid gap-px border border-deep-border bg-deep-border md:grid-cols-3">
            {PROBLEM_PILLARS.map((pillar) => (
              <article
                key={pillar.number}
                className="flex flex-col justify-between bg-deep-surface p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-signal">
                      {pillar.number}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-deep-muted">
                      {pillar.code}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-normal tracking-[-0.015em] text-field">
                    {pillar.code}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-deep-muted">
                    {pillar.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Brand principles strip */}
          <div className="mt-14 grid gap-8 border-t border-deep-border pt-10 md:grid-cols-3">
            {BRAND_PRINCIPLES.map((principle) => (
              <div key={principle.number}>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-deep-muted">
                  {principle.number} — PRINCIPLE
                </p>
                <h3 className="mt-2 font-display text-lg font-medium text-field">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-deep-muted">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — THE AUTONOMY STACK (Field White) */}
      <AutonomyStack />

      {/* SECTION 04 — TECHNOLOGY (Pure White editorial two-column index) */}
      <section className="border-b border-border-grey bg-surface py-24 md:py-36">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="grid gap-8 border-b border-border-grey pb-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
                PL / CORE TECHNOLOGY
              </p>
              <h2 className="mt-5 font-display text-[2rem] font-normal leading-[1.08] tracking-[-0.025em] text-graphite sm:text-[2.75rem] lg:text-[3.25rem]">
                Perception is where autonomy begins.
              </h2>
            </div>
            <div className="flex flex-col items-start gap-4 lg:col-span-5 lg:items-end">
              <p className="max-w-md text-[16px] leading-relaxed text-muted-ink lg:text-right">
                Four engineering disciplines uniting multi-sensor observation, motion estimation, environmental mapping, and edge execution.
              </p>
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-graphite underline decoration-border-grey underline-offset-4 transition-colors hover:decoration-graphite"
              >
                <span>All Technology Modules</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="divide-y divide-border-grey">
            {TECHNOLOGY_ITEMS.map((item) => (
              <article
                key={item.slug}
                className="grid gap-8 py-12 lg:grid-cols-12 lg:items-center lg:gap-12"
              >
                <div className="min-w-0 lg:col-span-6">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
                    {item.title}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-normal leading-snug tracking-[-0.02em] text-graphite sm:text-3xl">
                    {item.summary}
                  </h3>
                  <p className="mt-4 max-w-[54ch] text-[16px] leading-[1.65] text-muted-ink">
                    {item.overview}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={`/technology/${item.slug}`}
                      className="inline-flex items-center gap-2 rounded-sm border border-border-grey bg-field px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-graphite transition-colors hover:border-graphite"
                    >
                      <span>Explore {item.shortTitle}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>

                <div className="min-w-0 lg:col-span-6">
                  <SpatialSchematic
                    variant={item.graphic}
                    label={`${item.shortTitle} engineering visualization`}
                    caption={`${item.number} / ${item.shortTitle.toUpperCase()} — ${item.outputs[0]}`}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — SYSTEMS (Field White) */}
      <section className="border-b border-border-grey bg-field py-24 md:py-36">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
                PL / SYSTEMS & PROGRAMMES
              </p>
              <h2 className="mt-5 font-display text-[2rem] font-normal leading-[1.08] tracking-[-0.025em] text-graphite sm:text-[2.75rem] lg:text-[3.25rem]">
                Engines and modular systems for real-world deployment.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <Link
                href="/systems"
                className="inline-flex items-center gap-2 rounded-sm border border-border-grey bg-surface px-4 py-2.5 font-mono text-xs uppercase tracking-[0.12em] text-graphite transition-colors hover:border-graphite"
              >
                <span>View Full Systems Roadmap</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {SYSTEMS_PROGRAMS.map((system) => (
              <article
                key={system.id}
                className="flex flex-col justify-between rounded-card border border-border-grey bg-surface p-7 sm:p-9"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-ink">
                      {system.code}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-sm border border-border-grey bg-field px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-graphite">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-signal ring-1 ring-graphite/30"
                      />
                      {system.status}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-medium tracking-[-0.02em] text-graphite sm:text-3xl">
                    {system.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.11em] text-muted-ink">
                    {system.subtitle}
                  </p>
                  <p className="mt-4 text-[16px] leading-relaxed text-muted-ink">
                    {system.description}
                  </p>

                  {system.pipeline && (
                    <div
                      aria-label={`${system.name} pipeline`}
                      className="mt-6 flex flex-wrap items-center gap-2 border border-border-grey bg-field px-4 py-3 font-mono text-xs uppercase tracking-[0.1em] text-graphite"
                    >
                      {system.pipeline.map((node, i) => (
                        <span key={node} className="inline-flex items-center gap-2">
                          <span>{node}</span>
                          {i < system.pipeline!.length - 1 && (
                            <span aria-hidden="true" className="text-muted-ink">
                              →
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-8">
                  <SpatialSchematic
                    variant={system.graphic}
                    label={`${system.name} system visualization`}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06 — APPLICATIONS (Pure White editorial panels) */}
      <section className="border-b border-border-grey bg-surface py-24 md:py-36">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
                PL / APPLICATIONS
              </p>
              <h2 className="mt-5 font-display text-[2rem] font-normal leading-[1.08] tracking-[-0.025em] text-graphite sm:text-[2.75rem] lg:text-[3.25rem]">
                Operating domains beyond laboratory constraints.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <Link
                href="/applications"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-graphite underline decoration-border-grey underline-offset-4 transition-colors hover:decoration-graphite"
              >
                <span>Explore Operating Environments</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-14 space-y-6">
            {APPLICATION_DOMAINS.map((domain) => (
              <article
                key={domain.id}
                className="grid overflow-hidden rounded-card border border-border-grey bg-field lg:grid-cols-12"
              >
                <div className="flex min-w-0 flex-col justify-between p-7 sm:p-10 lg:col-span-6">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-ink">
                      {domain.index} / {domain.environment}
                    </p>
                    <h3 className="mt-4 font-display text-2xl font-medium tracking-[-0.02em] text-graphite sm:text-3xl">
                      {domain.title}
                    </h3>
                    <p className="mt-4 text-[16px] leading-relaxed text-muted-ink">
                      {domain.summary}
                    </p>
                  </div>

                  <ul className="mt-8 space-y-2 border-t border-border-grey pt-5 text-sm text-graphite">
                    {domain.constraints.map((constraint) => (
                      <li key={constraint} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-graphite"
                        />
                        <span>{constraint}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="min-w-0 border-t border-border-grey lg:col-span-6 lg:border-l lg:border-t-0">
                  <SpatialSchematic
                    variant={domain.graphic}
                    label={`${domain.title} operating spatial profile`}
                    className="h-full rounded-none border-0"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 07 — ENGINEERING (Field White) */}
      <section className="bg-field py-24 md:py-36">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
                PL / ENGINEERING & RESEARCH
              </p>
              <h2 className="mt-5 font-display text-[2rem] font-normal leading-[1.08] tracking-[-0.025em] text-graphite sm:text-[2.75rem] lg:text-[3.25rem]">
                Grounded in hardware, replay, and field trials.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 rounded-sm border border-border-grey bg-surface px-4 py-2.5 font-mono text-xs uppercase tracking-[0.12em] text-graphite transition-colors hover:border-graphite"
              >
                <span>Read Technical Notes</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-px border border-border-grey bg-border-grey sm:grid-cols-2 lg:grid-cols-4">
            {ENGINEERING_PRACTICES.map((practice) => (
              <div key={practice.code} className="bg-surface p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-ink">
                  {practice.code}
                </p>
                <h3 className="mt-4 font-display text-lg font-medium text-graphite">
                  {practice.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-ink">
                  {practice.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 08 — CLOSING STATEMENT (Deep Field) */}
      <ClosingBand />
    </>
  );
}
