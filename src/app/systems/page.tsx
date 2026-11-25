import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  COMMERCIAL_TIERS,
  DEVELOPMENT_ROADMAP,
  SITE_URL,
  SYSTEM_CATEGORIES,
} from "@/data/site-content";
import { ClosingBand } from "@/components/ClosingBand";

export const metadata: Metadata = {
  title: "Systems & Roadmap",
  description:
    "Perception Labs product hierarchy, Phase 1–4 development roadmap, and OEM hardware/software/integration licensing structure.",
  alternates: { canonical: "/systems" },
  openGraph: {
    title: "Systems & Roadmap | Perception Labs",
    description:
      "PIVO visual-inertial engine, integrated navigation systems, perception modules, and OEM engineering services.",
    url: `${SITE_URL}/systems`,
  },
};

export default function SystemsPage() {
  return (
    <>
      <section className="border-b border-border-grey bg-field pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
            PL / SYSTEMS &amp; DELIVERY MODEL
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.5rem] font-light leading-[1.06] tracking-[-0.025em] text-graphite sm:text-[3.5rem] lg:text-[4.25rem]">
            Core engine, integrated navigation stack, and OEM engineering.
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg leading-[1.68] text-muted-ink sm:text-[19px]">
            We separate our foundational estimation engine (PIVO) from full vehicle navigation stacks, modular perception tools, and custom partner integration programs.
          </p>
        </div>
      </section>

      {/* Four System Tiers */}
      <section className="border-b border-border-grey bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="grid gap-6 lg:grid-cols-2">
            {SYSTEM_CATEGORIES.map((sys) => (
              <article
                key={sys.id}
                id={sys.id}
                className="flex flex-col justify-between rounded-card border border-border-grey bg-field p-8 sm:p-10"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-ink">
                      {sys.code}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-sm border border-border-grey bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-graphite">
                      <span className="h-1.5 w-1.5 rounded-full bg-signal ring-1 ring-graphite/30" aria-hidden="true" />
                      {sys.maturity}
                    </span>
                  </div>

                  <h2 className="mt-5 font-display text-3xl font-medium tracking-[-0.02em] text-graphite">
                    {sys.name}
                  </h2>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-muted-ink">
                    {sys.category}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-muted-ink">
                    {sys.summary}
                  </p>
                </div>

                <div className="mt-8 border-t border-border-grey pt-5">
                  <Link
                    href={sys.id === "pivo" ? "/systems/pivo" : "/contact"}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-graphite underline decoration-border-grey underline-offset-4 hover:decoration-graphite"
                  >
                    <span>{sys.id === "pivo" ? sys.ctaLabel : "Request Integration Scope"}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Development Status Roadmap (Phases 1-4) */}
      <section className="border-b border-border-grey bg-field py-20 md:py-28">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
            DEVELOPMENT STATUS
          </p>
          <h2 className="mt-4 font-display text-3xl font-normal tracking-[-0.02em] text-graphite sm:text-4xl">
            Four-phase engineering roadmap — entering Phase 4 pilots
          </h2>

          <div className="mt-10 grid gap-px border border-border-grey bg-border-grey md:grid-cols-4">
            {DEVELOPMENT_ROADMAP.map((phase) => (
              <div key={phase.phase} className="flex flex-col justify-between bg-surface p-7">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-graphite">
                      {phase.phase}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-ink">
                      {phase.window}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-medium text-graphite">
                    {phase.title}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-ink">
                    {phase.status}
                  </p>
                  <ul className="mt-5 space-y-2 text-base text-muted-ink">
                    {phase.activities.map((act) => (
                      <li key={act}>• {act}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-border-grey pt-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-ink">
                    DELIVERABLE
                  </p>
                  <p className="mt-1 text-sm font-medium text-graphite sm:text-base">
                    {phase.deliverable}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Engagement Model */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
            ENGAGEMENT &amp; LICENSING STRUCTURE
          </p>
          <h2 className="mt-4 font-display text-3xl font-normal tracking-[-0.02em] text-graphite sm:text-4xl">
            Hardware modules, stack licenses, and custom OEM integration
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {COMMERCIAL_TIERS.map((item) => (
              <div key={item.tier} className="rounded-card border border-border-grey bg-field p-8">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-ink">
                  {item.tier}
                </p>
                <p className="mt-4 font-display text-4xl font-normal tracking-[-0.02em] text-graphite">
                  {item.price}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.08em] text-muted-ink">
                  {item.unit}
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted-ink">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingBand />
    </>
  );
}
