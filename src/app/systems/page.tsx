import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  COMMERCIAL_TIERS,
  SITE_URL,
  SYSTEM_CATEGORIES,
} from "@/data/site-content";
import { ClosingBand } from "@/components/ClosingBand";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "Perception Labs product hierarchy and OEM hardware, software, and integration licensing structure.",
  alternates: { canonical: "/systems" },
  openGraph: {
    title: "Systems | Perception Labs",
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

      {/* Commercial Engagement Model */}
      <section className="bg-field py-20 md:py-28">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
            ENGAGEMENT &amp; LICENSING STRUCTURE
          </p>
          <h2 className="mt-4 font-display text-3xl font-normal tracking-[-0.02em] text-graphite sm:text-4xl">
            Hardware modules, stack licenses, and custom OEM integration
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {COMMERCIAL_TIERS.map((item) => (
              <div key={item.tier} className="rounded-card border border-border-grey bg-surface p-8">
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
