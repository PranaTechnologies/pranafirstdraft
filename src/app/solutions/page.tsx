import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE_URL, SOLUTION_AREAS } from "@/data/site-content";
import { SpatialSchematic } from "@/components/SpatialSchematic";
import { ClosingBand } from "@/components/ClosingBand";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Spatial intelligence solutions powered by Cortex across aerial systems and robotic platforms operating in challenging real-world environments.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions | Perception Labs",
    description:
      "Resilient aerial navigation and spatial perception for robotic platforms.",
    url: `${SITE_URL}/solutions`,
  },
};

export default function SolutionsPage() {
  const [aerial, robotics] = SOLUTION_AREAS;

  return (
    <>
      {/* 01 · Solutions Hero */}
      <section className="border-b border-deep-border bg-deep-field pb-24 pt-32 text-field md:pb-32 md:pt-40">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
            SOLUTIONS
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-[2.75rem] font-light leading-[1.05] tracking-[-0.03em] text-white sm:text-[4.25rem]">
            Spatial intelligence for real-world autonomy.
          </h1>
          <p className="mt-6 max-w-[50ch] text-lg leading-[1.68] text-[#D8E0DA] sm:text-xl">
            Enabling autonomous platforms to understand their motion and surroundings in challenging environments.
          </p>
        </div>
      </section>

      {/* 02 · Focused Application Areas */}
      <section className="border-b border-border-grey bg-field py-24 text-graphite md:py-32">
        <div className="mx-auto max-w-editorial divide-y divide-border-grey px-6 md:px-12 lg:px-16">
          {/* 01 / Aerial Systems (Immediate Priority) */}
          <article className="grid gap-12 pb-16 lg:grid-cols-12 lg:items-center md:pb-24">
            <div className="min-w-0 lg:col-span-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
                {aerial.index} / {aerial.scope}
              </p>
              <h2 className="mt-4 font-display text-3xl font-normal tracking-[-0.02em] text-graphite sm:text-4xl">
                {aerial.title}
              </h2>
              <p className="mt-5 max-w-[46ch] text-lg leading-[1.68] text-muted-ink">
                {aerial.description}
              </p>
              <div className="mt-9">
                <Link
                  href={aerial.href}
                  className="inline-flex items-center gap-2 rounded-sm bg-graphite px-6 py-4 font-mono text-xs uppercase tracking-[0.12em] text-field transition-colors hover:bg-signal hover:text-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
                >
                  <span>{aerial.ctaLabel}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-6">
              <SpatialSchematic
                variant={aerial.graphic}
                label="Illustrative UAV navigation profile beyond reliable GNSS"
                caption="ILLUSTRATIVE AERIAL TRAJECTORY PROFILE"
              />
            </div>
          </article>

          {/* 02 / Robotic Systems (Development Focus) */}
          <article className="grid gap-12 pt-16 lg:grid-cols-12 lg:items-center md:pt-24">
            <div className="min-w-0 lg:col-span-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
                {robotics.index} / {robotics.scope}
              </p>
              <h2 className="mt-4 font-display text-3xl font-normal tracking-[-0.02em] text-graphite sm:text-4xl">
                {robotics.title}
              </h2>
              <p className="mt-5 max-w-[46ch] text-lg leading-[1.68] text-muted-ink">
                {robotics.description}
              </p>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.12em] text-muted-green">
                {robotics.status}
              </p>
            </div>

            <div className="min-w-0 lg:col-span-6">
              <SpatialSchematic
                variant={robotics.graphic}
                label="Illustrative mobile robotics indoor spatial perception profile"
                caption="ILLUSTRATIVE ROBOTIC PERCEPTION PROFILE"
              />
            </div>
          </article>
        </div>
      </section>

      {/* 03 · Integration Inquiry */}
      <ClosingBand
        tone="dark"
        heading="Integrate with your platform."
        subtitle="Work with our engineering team to evaluate Cortex for your application."
        ctaLabel="Discuss an integration"
      />
    </>
  );
}
