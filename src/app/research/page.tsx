import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  ENGINEERING_DISCIPLINES,
  FEATURED_BLOG_POST,
  SITE_URL,
  UPCOMING_BLOG_TOPICS,
} from "@/data/site-content";
import { ClosingBand } from "@/components/ClosingBand";

export const metadata: Metadata = {
  title: "Research & Technical Blog",
  description:
    "Engineering articles and technical notes from Perception Labs on visual-inertial odometry, camera–IMU synchronization, and onboard autonomy.",
  alternates: { canonical: "/research" },
  openGraph: {
    title: "Research & Technical Blog | Perception Labs",
    description:
      "Technical blog posts and engineering deep-dives on visual-inertial navigation and spatial perception.",
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
            Individual shareable technical articles documenting our engineering architecture, sensor synchronization, state estimation, and real-world testing notes.
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

      {/* Featured Published Placeholder Blog Post */}
      <section className="border-b border-border-grey bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
            FEATURED ARTICLE
          </p>

          <article className="mt-6 rounded-card border border-border-grey bg-field p-8 sm:p-12">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-muted-ink">
                <span>{FEATURED_BLOG_POST.code}</span>
                <span>·</span>
                <span>{FEATURED_BLOG_POST.discipline}</span>
                <span>·</span>
                <span>{FEATURED_BLOG_POST.publishedDate}</span>
                <span>·</span>
                <span>{FEATURED_BLOG_POST.readingTime}</span>
              </div>
              <span className="inline-flex items-center gap-2 rounded-sm border border-border-grey bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-graphite">
                <span className="h-1.5 w-1.5 rounded-full bg-signal ring-1 ring-graphite/30" aria-hidden="true" />
                {FEATURED_BLOG_POST.status}
              </span>
            </div>

            <h2 className="mt-6 max-w-4xl font-display text-3xl font-normal leading-tight tracking-[-0.02em] text-graphite sm:text-4xl">
              {FEATURED_BLOG_POST.title}
            </h2>
            <p className="mt-4 max-w-[65ch] text-lg leading-relaxed text-muted-ink">
              {FEATURED_BLOG_POST.summary}
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.1em] text-muted-ink">
              {FEATURED_BLOG_POST.author}
            </p>

            <div className="mt-8 border-t border-border-grey pt-6">
              <Link
                href={`/research/${FEATURED_BLOG_POST.slug}`}
                className="inline-flex items-center gap-2 rounded-sm bg-graphite px-6 py-3.5 font-mono text-xs uppercase tracking-[0.12em] text-field transition-colors hover:bg-signal hover:text-graphite"
              >
                <span>Read Full Technical Blog</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </article>

          {/* Upcoming Planned Blog Queue */}
          <div className="mt-16">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
              UPCOMING ENGINEERING ARTICLES
            </p>
            <div className="mt-6 grid gap-px border border-border-grey bg-border-grey md:grid-cols-2">
              {UPCOMING_BLOG_TOPICS.map((topic) => (
                <div key={topic.code} className="bg-field p-8">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-ink">
                      {topic.code}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-ink">
                      {topic.discipline}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-normal text-graphite">
                    {topic.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-ink">
                    {topic.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClosingBand />
    </>
  );
}
