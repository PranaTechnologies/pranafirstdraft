import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE_URL, SOLUTION_AREAS } from "@/data/site-content";
import { SpatialSchematic } from "@/components/SpatialSchematic";
import { ClosingBand } from "@/components/ClosingBand";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Focused spatial intelligence applications powered by Cortex: resilient aerial localization beyond reliable GNSS and robotic spatial perception.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions | Perception Labs",
    description:
      "Technical architecture and deployment workflows for aerial autonomy and robotic spatial intelligence.",
    url: `${SITE_URL}/solutions`,
  },
};

export default function SolutionsPage() {
  const [aerial, robotics] = SOLUTION_AREAS;

  return (
    <>
      {/* 01 · Solutions Hero */}
      <section className="border-b border-deep-border bg-deep-field pb-12 pt-24 text-field md:pb-16 md:pt-28">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
            SOLUTIONS
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[2.5rem] font-light leading-[1.05] tracking-[-0.03em] text-white sm:text-[3.75rem]">
            Spatial intelligence for real-world autonomy.
          </h1>
          <p className="mt-4 max-w-[54ch] text-base leading-[1.65] text-[#D8E0DA] md:text-[18px]">
            Applying Cortex onboard perception and state estimation across two core application domains: aerial autonomy beyond reliable GNSS and mobile robotic perception.
          </p>
        </div>
      </section>

      {/* 02 · Aerial Autonomy (Light Field White, 50:50 Technical Breakdown + Diagram) */}
      <section className="border-b border-border-grey bg-field py-12 text-graphite md:py-16">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
            <div className="min-w-0 lg:col-span-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
                {aerial.index} / {aerial.scope}
              </p>
              <h2 className="mt-2 font-display text-3xl font-light tracking-[-0.02em] text-graphite sm:text-4xl">
                {aerial.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-ink">
                {aerial.summary}
              </p>

              <dl className="mt-6 divide-y divide-border-grey border-y border-border-grey">
                {aerial.points.map((pt) => (
                  <div key={pt.label} className="grid gap-1 py-3.5 sm:grid-cols-12 sm:gap-4">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-green sm:col-span-4">
                      {pt.label}
                    </dt>
                    <dd className="text-sm leading-relaxed text-graphite sm:col-span-8 md:text-base">
                      {pt.detail}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6">
                <Link
                  href={aerial.href}
                  className="inline-flex items-center gap-2 rounded-sm bg-graphite px-5 py-3.5 font-mono text-xs uppercase tracking-[0.12em] text-field transition-colors hover:bg-signal hover:text-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
                >
                  <span>{aerial.ctaLabel}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="min-w-0 lg:sticky lg:top-24 lg:col-span-6">
              <SpatialSchematic
                variant={aerial.graphic}
                label="Aerial autonomy Cortex architecture diagram: Camera and IMU sync to 30Hz local odometry and optional 1Hz map alignment into PX4 and ROS 2"
                caption="ILLUSTRATIVE AERIAL PIPELINE · CAMERA–IMU → CORTEX → PX4 / ROS 2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 03 · Robotic Spatial Intelligence (Deep Field Dark, 50:50 Technical Breakdown + Diagram) */}
      <section className="border-b border-deep-border bg-deep-field py-12 text-field md:py-16">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
            <div className="order-2 min-w-0 lg:sticky lg:top-24 lg:order-1 lg:col-span-6">
              <SpatialSchematic
                variant={robotics.graphic}
                label="Robotic spatial intelligence schematic: multi-sensor perception into real-time 3D local reconstruction, obstacle clearance, and ROS 2 mobility bridge"
                caption="ILLUSTRATIVE ROBOTIC PIPELINE · MULTI-SENSOR → 3D LOCAL MAPPING → ROS 2"
              />
            </div>

            <div className="order-1 min-w-0 lg:order-2 lg:col-span-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
                  {robotics.index} / {robotics.scope}
                </p>
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#9AA59F]">
                  {robotics.status}
                </span>
              </div>
              <h2 className="mt-2 font-display text-3xl font-light tracking-[-0.02em] text-field sm:text-4xl">
                {robotics.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#BCC7C0]">
                {robotics.summary}
              </p>

              <dl className="mt-6 divide-y divide-deep-border border-y border-deep-border">
                {robotics.points.map((pt) => (
                  <div key={pt.label} className="grid gap-1 py-3.5 sm:grid-cols-12 sm:gap-4">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-signal sm:col-span-4">
                      {pt.label}
                    </dt>
                    <dd className="text-sm leading-relaxed text-[#D8E0DA] sm:col-span-8 md:text-base">
                      {pt.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 04 · Closing Partnership */}
      <ClosingBand
        tone="light"
        heading="Integrate with your platform."
        subtitle="Work with our engineering team to evaluate Cortex for your aerial or robotic system."
        ctaLabel="Discuss an integration"
      />
    </>
  );
}
