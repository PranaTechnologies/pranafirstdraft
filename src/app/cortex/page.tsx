import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { CORTEX_PAGE } from "@/data/site-content";
import { CortexCapabilitySymbol } from "@/components/CortexHomeVisuals";
import {
  CortexArchitectureDiagram,
  CortexCharacteristicIcon,
  CortexHeroGraphic,
} from "@/components/CortexPageVisuals";

export const metadata: Metadata = buildPageMetadata({
  title: "Cortex — GPS-Denied Navigation Engine",
  description:
    "Cortex Core Navigation Engine delivers ~30 Hz onboard visual-inertial odometry (VIO), optional global alignment, and PX4 / ROS 2 integration.",
  path: "/cortex",
});

export default function CortexPage() {
  const { hero, capabilities, architecture, characteristics, specifications } =
    CORTEX_PAGE;

  return (
    <>
      {/* 01 · Product Hero (Carbon, 40/60 Split, 80–90% Desktop Viewport Height) */}
      <section className="flex w-full flex-col justify-center border-b border-deep-border bg-deep-field pb-12 pt-28 text-field md:pb-16 md:pt-32 lg:min-h-[85svh]">
        <div className="mx-auto w-full max-w-editorial px-6 md:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="min-w-0 lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-deep-muted">
                {hero.eyebrow}
              </p>
              <h1 className="mt-3 font-display text-[3.5rem] font-medium leading-none tracking-[-0.03em] text-white sm:text-[4.75rem] lg:text-[6.25rem]">
                {hero.title}
              </h1>
              <p className="mt-4 font-display text-2xl font-normal leading-tight text-[#EBF0EC] sm:text-3xl lg:text-[2.125rem]">
                {hero.descriptor}
              </p>
              <p className="mt-4 max-w-[42ch] text-base leading-[1.6] text-[#C9D2CC] md:text-[20px]">
                {hero.supporting}
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-signal px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.12em] text-graphite transition-colors duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                >
                  <span>{hero.ctaLabel}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-7">
              <CortexHeroGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* 02 · Core Capabilities (Canvas Section with 4 Equal Carbon Cards) */}
      <section className="w-full bg-field py-16 text-graphite lg:py-24">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
              {capabilities.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-graphite sm:text-[2.75rem]">
              {capabilities.heading}
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.items.map((cap) => (
              <article
                key={cap.title}
                className="flex flex-col justify-between rounded-none bg-deep-field p-6 text-white md:p-7"
              >
                <h3 className="font-display text-xl font-semibold leading-snug text-white lg:text-2xl">
                  {cap.title}
                </h3>

                <div className="my-6 flex justify-center">
                  <CortexCapabilitySymbol
                    kind={cap.kind}
                    className="h-40 w-[180px] shrink-0"
                  />
                </div>

                <p className="text-sm leading-relaxed text-[#C7D0CA] md:text-[15px]">
                  {cap.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 max-w-4xl text-xs leading-relaxed text-muted-ink">
            {capabilities.note}
          </p>
        </div>
      </section>

      {/* 03 · System Architecture (Carbon, Unified Functional Block Diagram) */}
      <section className="w-full border-b border-deep-border bg-deep-field py-16 text-field lg:py-24">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
              {architecture.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-[2.75rem]">
              {architecture.heading}
            </h2>
            <p className="mt-4 text-base leading-[1.65] text-[#D2DAD5] md:text-[18px]">
              {architecture.supporting}
            </p>
          </div>

          <div className="mt-10">
            <CortexArchitectureDiagram caption={architecture.caption} />
          </div>
        </div>
      </section>

      {/* 04 · System Characteristics (Canvas, 4 Open Columns with Rules & Small Icons) */}
      <section className="w-full bg-field py-16 text-graphite lg:py-24">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
              {characteristics.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-graphite sm:text-[2.75rem]">
              {characteristics.heading}
            </h2>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {characteristics.items.map((item) => (
              <div key={item.title} className="border-t border-border-grey pt-5">
                <CortexCharacteristicIcon kind={item.kind} />
                <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-graphite">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-ink">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 · Technical Specifications (Carbon Band above Canvas Footer) */}
      <section className="w-full border-b border-deep-border bg-deep-field py-16 text-field lg:py-24">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
                {specifications.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-[2.75rem]">
                {specifications.heading}
              </h2>
              <p className="mt-4 max-w-[44ch] text-base leading-[1.65] text-[#D2DAD5] md:text-[17px]">
                {specifications.supporting}
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 border-y border-deep-border py-5">
                {specifications.summaryMetrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-display text-2xl font-medium text-signal sm:text-3xl">
                      {m.value}
                    </p>
                    <p className="mt-1 font-mono text-xs leading-snug text-deep-muted">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-deep-muted">
                {specifications.footnote}
              </p>
            </div>

            <div className="space-y-8 lg:col-span-7">
              {specifications.groups.map((group) => (
                <div key={group.title}>
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-signal">
                    {group.title}
                  </p>
                  <dl className="mt-3 divide-y divide-deep-border border-y border-deep-border">
                    {group.rows.map((row) => (
                      <div
                        key={row.parameter}
                        className="grid gap-1.5 py-3.5 sm:grid-cols-12 sm:items-baseline sm:gap-4"
                      >
                        <dt className="font-mono text-xs uppercase tracking-[0.1em] text-deep-muted sm:col-span-4">
                          {row.parameter}
                        </dt>
                        <dd className="text-base leading-relaxed text-white sm:col-span-8">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
