import type { Metadata } from "next";
import { APPLICATION_DOMAINS } from "@/data/site-content";
import { SpatialSchematic } from "@/components/SpatialSchematic";
import { ClosingBand } from "@/components/ClosingBand";

export const metadata: Metadata = {
  title: "Applications",
  description:
    "Operating domains for Perception Labs autonomy systems: UAV & Aerial Autonomy, Defence & Security, Autonomous Robotics, and Industrial Systems.",
};

export default function ApplicationsPage() {
  return (
    <>
      <section className="border-b border-border-grey bg-field pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
            PL / APPLICATIONS
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.5rem] font-light leading-[1.06] tracking-[-0.025em] text-graphite sm:text-[3.5rem] lg:text-[4.25rem]">
            Built for environments where conventional positioning fails.
          </h1>
          <p className="mt-6 max-w-[60ch] text-[18px] leading-[1.65] text-muted-ink">
            Indoor industrial facilities, subterranean passages, dense forest canopy, complex urban infrastructure, and GNSS-denied airspace demand onboard sensing and resilient state estimation.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-editorial space-y-10 px-6 md:px-12 lg:px-16">
          {APPLICATION_DOMAINS.map((domain) => (
            <article
              key={domain.id}
              id={domain.id}
              className="grid overflow-hidden rounded-card border border-border-grey bg-field lg:grid-cols-12"
            >
              <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-6">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-ink">
                    {domain.index} / {domain.environment}
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.02em] text-graphite">
                    {domain.title}
                  </h2>
                  <p className="mt-4 text-[16px] leading-relaxed text-muted-ink">
                    {domain.summary}
                  </p>
                </div>

                <div className="mt-8 border-t border-border-grey pt-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-ink">
                    OPERATIONAL CONSTRAINTS
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-graphite">
                    {domain.constraints.map((c) => (
                      <li key={c} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-graphite"
                        />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-border-grey lg:col-span-6 lg:border-l lg:border-t-0">
                <SpatialSchematic
                  variant={domain.graphic}
                  label={`${domain.title} environment schematic`}
                  caption={domain.environment.toUpperCase()}
                  className="h-full rounded-none border-0"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <ClosingBand />
    </>
  );
}
