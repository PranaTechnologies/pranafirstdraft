import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { RESEARCH_TRACKS } from "@/data/site-content";

export const metadata: Metadata = buildPageMetadata({
  title: "Drone Navigation & Sensor Fusion Research",
  description:
    "Engineering research on camera–IMU synchronization, multi-rate visual-inertial odometry (VIO), global map alignment, and onboard edge profiling.",
  path: "/research",
});

export default function ResearchPage() {
  return (
    <>
      <section className="bg-field pb-12 pt-24 md:pb-16 md:pt-28">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
            RESEARCH &amp; ENGINEERING NOTES
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[2.5rem] font-light leading-[1.06] tracking-[-0.025em] text-graphite sm:text-[3.5rem]">
            Methodology and field evaluation.
          </h1>
          <p className="mt-4 max-w-[56ch] text-base leading-[1.68] text-muted-ink md:text-[18px]">
            Perception Labs investigates temporal sensor alignment, multi-rate fusion stability, and edge execution guarantees. Full empirical papers and benchmark datasets are published here once multi-trial hardware validation is complete.
          </p>

          <div className="mt-10 divide-y divide-border-grey border-y border-border-grey">
            {RESEARCH_TRACKS.map((item) => (
              <div
                key={item.code}
                className="grid gap-3 py-6 md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-green md:col-span-2">
                  TRACK {item.code}
                </span>
                <h2 className="font-display text-xl font-medium text-graphite md:col-span-4">
                  {item.topic}
                </h2>
                <p className="text-base leading-relaxed text-muted-ink md:col-span-6">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/technology"
              className="inline-flex items-center gap-2 rounded-sm bg-graphite px-5 py-3.5 font-mono text-xs uppercase tracking-[0.12em] text-field transition-colors hover:bg-signal hover:text-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
            >
              <span>Explore Technology</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
