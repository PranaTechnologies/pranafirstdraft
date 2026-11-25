import type { Metadata } from "next";
import {
  ENGINEERING_DISCIPLINES,
  SITE_URL,
  UPCOMING_BLOG_TOPICS,
} from "@/data/site-content";
import { ClosingBand } from "@/components/ClosingBand";

export const metadata: Metadata = {
  title: "Research & Technical Blog",
  description:
    "Upcoming technical engineering articles and architecture deep-dives from Perception Labs on onboard perception, Cortex, sensor timing, and field robotics.",
  alternates: { canonical: "/research" },
  openGraph: {
    title: "Research & Technical Blog | Perception Labs",
    description:
      "Upcoming engineering publications on machine perception, Cortex spatial intelligence, and embedded autonomy.",
    url: `${SITE_URL}/research`,
  },
};

export default function ResearchPage() {
  return (
    <>
      <section className="border-b border-border-grey bg-field pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
            PL / TECHNICAL BLOG &amp; ENGINEERING NOTES
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.5rem] font-light leading-[1.06] tracking-[-0.025em] text-graphite sm:text-[3.5rem] lg:text-[4.25rem]">
            Engineering writing from our autonomy builds.
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg leading-[1.68] text-muted-ink sm:text-[19px]">
            Technical articles documenting our sensor timing protocols, Cortex perception and state estimation design, and field testing findings—published strictly once multi-trial empirical evaluation is complete.
          </p>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {ENGINEERING_DISCIPLINES.map((discipline) => (
              <span
                key={discipline}
                className="rounded-sm border border-border-grey bg-surface px-3.5 py-2 font-mono text-xs uppercase tracking-[0.1em] text-graphite"
              >
                {discipline}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Technical Blogs Queue */}
      <section className="border-b border-border-grey bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
              UPCOMING TECHNICAL BLOGS
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted-ink">
              Publishing after ongoing flight &amp; robotics validation
            </p>
          </div>

          <div className="mt-8 grid gap-px border border-border-grey bg-border-grey md:grid-cols-2">
            {UPCOMING_BLOG_TOPICS.map((topic) => (
              <article key={topic.code} className="flex flex-col justify-between bg-field p-8 sm:p-10">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-graphite">
                      {topic.code}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-sm border border-border-grey bg-surface px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-ink">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-signal ring-1 ring-graphite/30"
                      />
                      {topic.status}
                    </span>
                  </div>
                  <p className="mt-5 font-mono text-xs uppercase tracking-[0.1em] text-muted-ink">
                    {topic.discipline}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-normal leading-snug text-graphite">
                    {topic.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-ink">
                    {topic.summary}
                  </p>
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
