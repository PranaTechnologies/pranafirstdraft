import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SpatialFieldCanvas } from "@/components/SpatialFieldCanvas";
import {
  CortexCapabilitySymbol,
  CortexNavigationGrid,
} from "@/components/CortexHomeVisuals";
import { ClosingBand } from "@/components/ClosingBand";
import {
  BRAND,
  HOME_CLOSING,
  HOME_CORTEX,
  HOME_PURPOSE,
  HOME_SOLUTIONS,
  HOME_TECHNOLOGY,
} from "@/data/site-content";

export default function HomePage() {
  return (
    <>
      {/* 01 · LANDING (Immersive Carbon Hero) */}
      <section className="relative flex min-h-[min(76vh,660px)] flex-col justify-center overflow-hidden border-b border-deep-border bg-deep-field pb-12 pt-28 text-field md:pb-16 md:pt-32">
        <SpatialFieldCanvas variant="background" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] bg-deep-field/70 md:hidden"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, #101211 0%, rgba(16,18,17,0.96) 38%, rgba(16,18,17,0.58) 62%, rgba(16,18,17,0.14) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-deep-field/50 via-transparent to-deep-field/85"
        />

        <div className="relative z-10 mx-auto w-full max-w-editorial px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-signal sm:text-sm">
              {BRAND.name}
            </p>
            <h1 className="mt-4 font-display text-[2.375rem] font-medium leading-[1.04] tracking-[-0.03em] text-white sm:text-[3rem] lg:text-[4.5rem]">
              {BRAND.headline}
            </h1>
            <p className="mt-5 max-w-[48ch] text-base leading-[1.6] text-[#D8E0DA] md:text-[19px]">
              {BRAND.heroSupporting}
            </p>

            <div className="mt-8">
              <Link
                href="/cortex"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-signal px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.12em] text-graphite transition-colors duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                <span>Explore Cortex</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 02 · OUR PURPOSE (Canvas, Typography-Only, Three Open Columns) */}
      <section className="border-b border-border-grey bg-field py-14 text-graphite md:py-24">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
              {HOME_PURPOSE.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-graphite sm:text-[2.75rem] lg:text-[3.25rem]">
              {HOME_PURPOSE.heading}
            </h2>
            <p className="mt-4 max-w-[60ch] text-base leading-[1.65] text-muted-ink md:text-[19px]">
              {HOME_PURPOSE.supporting}
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-8">
            {HOME_PURPOSE.pillars.map((pillar) => (
              <div key={pillar.number} className="border-t border-border-grey pt-5">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-green">
                  {pillar.number}
                </p>
                <h3 className="mt-3 font-display text-[1.75rem] font-semibold leading-tight text-graphite">
                  {pillar.name}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-ink">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 · CORTEX INTRODUCTION (Canvas, Product-First Centered Composition) */}
      <section className="border-b border-border-grey bg-field py-16 text-graphite md:py-24">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
              {HOME_CORTEX.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.03em] text-graphite sm:text-[3.25rem]">
              {HOME_CORTEX.title}
            </h2>
            <p className="mt-2 font-display text-xl font-medium text-graphite sm:text-2xl">
              {HOME_CORTEX.descriptor}
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-ink md:text-[17px]">
              {HOME_CORTEX.supporting}
            </p>
          </div>

          <div className="mt-10 md:mt-12">
            <CortexNavigationGrid />
          </div>

          {/* Four compact geometric capability indicators with names only */}
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_CORTEX.capabilities.map((cap) => (
              <div key={cap.number} className="flex items-center gap-3.5 lg:flex-col lg:items-center lg:text-center">
                <CortexCapabilitySymbol kind={cap.kind} />
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-green">
                    {cap.number}
                  </p>
                  <p className="mt-1 font-display text-base font-semibold leading-snug text-graphite">
                    {cap.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/cortex"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-graphite px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.12em] text-field transition-colors duration-200 hover:bg-signal hover:text-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
            >
              <span>{HOME_CORTEX.ctaLabel}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 04 · TECHNOLOGY (Carbon, 40/60 Editorial Split, Graphic-Free) */}
      <section className="border-b border-deep-border bg-deep-field py-16 text-field md:py-24">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-deep-muted">
                {HOME_TECHNOLOGY.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-[2.75rem] lg:text-[3.25rem]">
                {HOME_TECHNOLOGY.heading}
              </h2>
              <p className="mt-4 max-w-[44ch] text-base leading-[1.65] text-[#D2DAD5] md:text-[17px]">
                {HOME_TECHNOLOGY.supporting}
              </p>
              <div className="mt-7">
                <Link
                  href="/technology"
                  className="inline-flex min-h-[44px] items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.12em] text-signal transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                >
                  <span>{HOME_TECHNOLOGY.ctaLabel}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="divide-y divide-deep-border border-y border-deep-border lg:col-span-7">
              {HOME_TECHNOLOGY.domains.map((domain) => (
                <div
                  key={domain.number}
                  className="grid gap-2 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6"
                >
                  <div className="sm:col-span-5">
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-deep-muted">
                      {domain.number}
                    </span>
                    <h3 className="mt-1 font-display text-[1.5rem] font-semibold leading-snug text-white lg:text-[1.625rem]">
                      {domain.title}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-[#C7D0CA] sm:col-span-7 md:text-[17px]">
                    {domain.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 · SOLUTIONS (Canvas, Photography-Led 3x2 Application Domain Grid) */}
      <section className="border-b border-border-grey bg-field py-16 text-graphite md:py-24">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
              {HOME_SOLUTIONS.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-graphite sm:text-[2.75rem]">
              {HOME_SOLUTIONS.heading}
            </h2>
            <p className="mt-4 text-base leading-[1.65] text-muted-ink md:text-[17px]">
              {HOME_SOLUTIONS.supporting}
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_SOLUTIONS.domains.map((item) => (
              <article key={item.title} className="group flex flex-col">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-none bg-deep-field">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover grayscale contrast-[1.06] brightness-[0.94] transition-transform duration-200 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl font-medium leading-snug text-graphite">
                    {item.title}
                  </h3>
                  <span className="shrink-0 font-mono text-xs uppercase tracking-[0.08em] text-muted-green">
                    {item.stage}
                  </span>
                </div>
                <p className="mt-1.5 text-base leading-relaxed text-muted-ink">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border-grey pt-8 md:flex-row md:items-center">
            <Link
              href="/solutions"
              className="inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-sm bg-graphite px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.12em] text-field transition-colors duration-200 hover:bg-signal hover:text-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
            >
              <span>{HOME_SOLUTIONS.ctaLabel}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <p className="max-w-xl text-xs leading-relaxed text-muted-ink">
              {HOME_SOLUTIONS.disclosure}
            </p>
          </div>
        </div>
      </section>

      {/* 06 · CONTACT CLOSING BAND */}
      <ClosingBand
        tone="dark"
        heading={HOME_CLOSING.heading}
        subtitle={HOME_CLOSING.supporting}
        ctaLabel={HOME_CLOSING.ctaLabel}
        variant="link"
      />
    </>
  );
}
