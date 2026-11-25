import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SYSTEMS_PROGRAMS } from "@/data/site-content";
import { SpatialSchematic } from "@/components/SpatialSchematic";
import { ClosingBand } from "@/components/ClosingBand";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "Perception Labs systems and engineering programmes: PIVO Parallel Visual-Inertial Odometry, GPS-Denied Navigation, Perception Modules, and Custom Integration.",
};

export default function SystemsPage() {
  return (
    <>
      <section className="border-b border-border-grey bg-field pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
            PL / SYSTEMS & ROADMAP
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.5rem] font-light leading-[1.06] tracking-[-0.025em] text-graphite sm:text-[3.5rem] lg:text-[4.25rem]">
            Modular autonomy software and platform integration.
          </h1>
          <p className="mt-6 max-w-[60ch] text-[18px] leading-[1.65] text-muted-ink">
            Our active development programmes span real-time visual-inertial motion estimation, GNSS-independent navigation stacks, modular perception layers, and custom OEM hardware-software engineering.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="space-y-12">
            {SYSTEMS_PROGRAMS.map((system) => (
              <article
                key={system.id}
                id={system.id}
                className="grid gap-10 rounded-card border border-border-grey bg-field p-7 sm:p-10 lg:grid-cols-12 lg:items-center"
              >
                <div className="lg:col-span-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-ink">
                      {system.code}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-sm border border-border-grey bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-graphite">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-signal ring-1 ring-graphite/30"
                      />
                      {system.status}
                    </span>
                  </div>

                  <h2 className="mt-5 font-display text-3xl font-medium tracking-[-0.02em] text-graphite">
                    {system.name}
                  </h2>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.11em] text-muted-ink">
                    {system.subtitle}
                  </p>
                  <p className="mt-4 max-w-[54ch] text-[16px] leading-relaxed text-muted-ink">
                    {system.description}
                  </p>

                  {system.pipeline && (
                    <div className="mt-6 flex flex-wrap items-center gap-2 border border-border-grey bg-surface px-4 py-3 font-mono text-xs uppercase tracking-[0.1em] text-graphite">
                      {system.pipeline.map((node, index) => (
                        <span key={node} className="inline-flex items-center gap-2">
                          <span>{node}</span>
                          {index < system.pipeline!.length - 1 && (
                            <span aria-hidden="true" className="text-muted-ink">
                              →
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}

                  <ul className="mt-6 space-y-2 border-t border-border-grey pt-5 text-sm text-graphite">
                    {system.scope.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-graphite"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-graphite underline decoration-border-grey underline-offset-4 hover:decoration-graphite"
                    >
                      <span>Discuss Integration Scope</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <SpatialSchematic
                    variant={system.graphic}
                    label={`${system.name} architecture schematic`}
                    caption={`${system.name.toUpperCase()} · ${system.status.toUpperCase()}`}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClosingBand />
    </>
  );
}
