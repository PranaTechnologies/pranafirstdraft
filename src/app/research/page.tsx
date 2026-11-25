import type { Metadata } from "next";
import { ENGINEERING_DISCIPLINES, ENGINEERING_PRACTICES } from "@/data/site-content";
import { ResearchReader } from "@/components/ResearchReader";
import { ClosingBand } from "@/components/ClosingBand";

export const metadata: Metadata = {
  title: "Research & Engineering",
  description:
    "Engineering insights across visual-inertial navigation, sensor fusion, state estimation, embedded AI, SLAM, and edge computing.",
};

export default function ResearchPage() {
  return (
    <>
      <section className="border-b border-border-grey bg-field pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
            PL / RESEARCH & ENGINEERING
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.5rem] font-light leading-[1.06] tracking-[-0.025em] text-graphite sm:text-[3.5rem] lg:text-[4.25rem]">
            Technical foundations for real-world autonomy.
          </h1>
          <p className="mt-6 max-w-[60ch] text-[18px] leading-[1.65] text-muted-ink">
            Engineering notes examining physical sensor synchronization, embedded state estimation, and autonomous flight under GNSS-denied constraints.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {ENGINEERING_DISCIPLINES.map((discipline) => (
              <span
                key={discipline}
                className="rounded-sm border border-border-grey bg-surface px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-graphite"
              >
                {discipline}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border-grey bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
              TECHNICAL NOTES
            </p>
            <h2 className="mt-3 font-display text-3xl font-normal tracking-[-0.02em] text-graphite">
              Engineering briefings
            </h2>
          </div>

          <ResearchReader />

          <div className="mt-16 grid gap-px border border-border-grey bg-border-grey sm:grid-cols-2 lg:grid-cols-4">
            {ENGINEERING_PRACTICES.map((practice) => (
              <div key={practice.code} className="bg-field p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-ink">
                  {practice.code}
                </p>
                <h3 className="mt-3 font-display text-lg font-medium text-graphite">
                  {practice.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-ink">
                  {practice.detail}
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
