import type { Metadata } from "next";
import { APPLICATION_MATRIX, SITE_URL } from "@/data/site-content";
import { SpatialSchematic } from "@/components/SpatialSchematic";
import { ClosingBand } from "@/components/ClosingBand";

export const metadata: Metadata = {
  title: "Applications",
  description:
    "UAV & industrial drone beachhead applications, expansion into robotics and indoor logistics, and qualified GNSS-denied operating scopes.",
  alternates: { canonical: "/applications" },
  openGraph: {
    title: "Applications | Perception Labs",
    description:
      "Operational problem to onboard capability mapping led by UAV & industrial drone autonomy.",
    url: `${SITE_URL}/applications`,
  },
};

export default function ApplicationsPage() {
  return (
    <>
      <section className="border-b border-border-grey bg-field pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
            PL / APPLICATIONS &amp; DEPLOYMENT SCOPE
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.5rem] font-light leading-[1.06] tracking-[-0.025em] text-graphite sm:text-[3.5rem] lg:text-[4.25rem]">
            Focused first on UAV autonomy, expanding across industrial robotics.
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg leading-[1.68] text-muted-ink sm:text-[19px]">
            Rather than claiming uniform readiness across every sector, we prioritize multirotor aerial inspection and GNSS-degraded UAV operations as our beachhead while expanding toward indoor robotics and logistics OEMs.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-editorial space-y-12 px-6 md:px-12 lg:px-16">
          {APPLICATION_MATRIX.map((domain) => (
            <article
              key={domain.id}
              id={domain.id}
              className="overflow-hidden rounded-card border border-border-grey bg-field"
            >
              <div className="grid lg:grid-cols-12">
                <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-7">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-ink">
                        {domain.index} / {domain.badge}
                      </span>
                      <span className="rounded-sm border border-border-grey bg-surface px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-graphite">
                        {domain.maturity}
                      </span>
                    </div>
                    <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.02em] text-graphite">
                      {domain.title}
                    </h2>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-muted-ink">
                      {domain.environment}
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-muted-ink">
                      {domain.summary}
                    </p>
                  </div>
                </div>

                <div className="border-t border-border-grey lg:col-span-5 lg:border-l lg:border-t-0">
                  <SpatialSchematic
                    variant={domain.graphic}
                    label={`${domain.title} spatial profile`}
                    caption={domain.environment.toUpperCase()}
                    className="h-full rounded-none border-0"
                  />
                </div>
              </div>

              <div className="border-t border-border-grey bg-surface px-7 py-6 sm:px-10">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-ink">
                  OPERATIONAL MAPPING
                </p>
                <div className="mt-4 divide-y divide-border-grey border-t border-border-grey">
                  {domain.rows.map((row) => (
                    <div
                      key={row.problem}
                      className="grid gap-4 py-4 text-base md:grid-cols-4 md:gap-6"
                    >
                      <div>
                        <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-muted-ink">
                          Problem
                        </span>
                        <span className="mt-1 block text-graphite">{row.problem}</span>
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-muted-ink">
                          Required Capability
                        </span>
                        <span className="mt-1 block text-muted-ink">{row.capability}</span>
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-muted-ink">
                          Perception Labs System
                        </span>
                        <span className="mt-1 block font-medium text-graphite">{row.system}</span>
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-muted-ink">
                          Expected Outcome
                        </span>
                        <span className="mt-1 block text-muted-ink">{row.outcome}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ClosingBand />
    </>
  );
}
