import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SpatialFieldCanvas } from "@/components/SpatialFieldCanvas";
import {
  CortexCapabilitySymbol,
  CortexNavigationBackground,
} from "@/components/CortexHomeVisuals";
import {
  BRAND,
  HOME_CORTEX,
  HOME_PURPOSE,
  HOME_SOLUTIONS,
  HOME_TECHNOLOGY,
} from "@/data/site-content";

export default function HomePage() {
  return (
    <>
      {/* 01 · LANDING (Carbon Full Initial Viewport including Fixed Header) */}
      <section className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden border-b border-deep-border bg-deep-field pb-12 pt-24 text-field md:pb-16 md:pt-28">
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

      {/* 02 · OUR PURPOSE (Canvas, Compact Open Editorial Columns) */}
      <section className="w-full border-b border-border-grey bg-field py-12 text-graphite md:py-16">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
              {HOME_PURPOSE.eyebrow}
            </p>
            <h2 className="mt-2.5 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-graphite sm:text-[2.75rem] lg:text-[3.25rem]">
              {HOME_PURPOSE.heading}
            </h2>
            <p className="mt-3 max-w-[60ch] text-base leading-[1.65] text-muted-ink md:text-[18px]">
              {HOME_PURPOSE.supporting}
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3 md:gap-8">
            {HOME_PURPOSE.pillars.map((pillar) => (
              <div key={pillar.number} className="border-t border-border-grey pt-4">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-green">
                  {pillar.number}
                </p>
                <h3 className="mt-2 font-display text-[1.625rem] font-semibold leading-tight text-graphite lg:text-[1.75rem]">
                  {pillar.name}
                </h3>
                <p className="mt-1.5 text-base leading-relaxed text-muted-ink">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 · CORTEX (Carbon, Full-Bleed Background Navigation Grid, ~75–90% Desktop Viewport) */}
      <section className="relative flex w-full flex-col justify-center overflow-hidden border-b border-deep-border bg-deep-field py-16 text-field lg:min-h-[82svh] lg:py-20">
        <CortexNavigationBackground />

        <div className="relative z-10 mx-auto w-full max-w-editorial px-6 md:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
              {HOME_CORTEX.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-[3.5rem] lg:text-[4rem]">
              {HOME_CORTEX.title}
            </h2>
            <p className="mt-2 font-display text-xl font-medium text-[#EBF0EC] sm:text-2xl">
              {HOME_CORTEX.descriptor}
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#C9D2CC] md:text-[18px]">
              {HOME_CORTEX.supporting}
            </p>
          </div>

          {/* Four compact geometric capability indicators with names only */}
          <div className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-10">
            {HOME_CORTEX.capabilities.map((cap) => (
              <div
                key={cap.name}
                className="flex flex-col items-center gap-3 text-center"
              >
                <CortexCapabilitySymbol kind={cap.kind} />
                <p className="font-display text-lg font-medium leading-snug text-white sm:text-xl">
                  {cap.name}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center lg:mt-14">
            <Link
              href="/cortex"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-signal px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.12em] text-graphite transition-colors duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
            >
              <span>{HOME_CORTEX.ctaLabel}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 04 · TECHNOLOGY (Canvas, 40/60 Editorial Split, Graphic-Free) */}
      <section className="w-full border-b border-border-grey bg-field py-14 text-graphite md:py-20">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
                {HOME_TECHNOLOGY.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-graphite sm:text-[2.75rem] lg:text-[3.25rem]">
                {HOME_TECHNOLOGY.heading}
              </h2>
              <p className="mt-4 max-w-[44ch] text-base leading-[1.65] text-muted-ink md:text-[17px]">
                {HOME_TECHNOLOGY.supporting}
              </p>
              <div className="mt-7">
                <Link
                  href="/technology"
                  className="inline-flex min-h-[44px] items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.12em] text-graphite underline decoration-border-grey underline-offset-4 transition-colors duration-200 hover:decoration-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
                >
                  <span>{HOME_TECHNOLOGY.ctaLabel}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="divide-y divide-border-grey border-y border-border-grey lg:col-span-7">
              {HOME_TECHNOLOGY.domains.map((domain) => (
                <div
                  key={domain.number}
                  className="grid gap-2 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-6 md:py-6"
                >
                  <div className="sm:col-span-5">
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-green">
                      {domain.number}
                    </span>
                    <h3 className="mt-1 font-display text-[1.5rem] font-semibold leading-snug text-graphite lg:text-[1.625rem]">
                      {domain.title}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-muted-ink sm:col-span-7 md:text-[17px]">
                    {domain.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 · SOLUTIONS (Carbon, 3x2 Application Domain Photography Grid) */}
      <section className="w-full border-b border-deep-border bg-deep-field py-14 text-field md:py-20">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
              {HOME_SOLUTIONS.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-[2.75rem]">
              {HOME_SOLUTIONS.heading}
            </h2>
            <p className="mt-3 text-base leading-[1.65] text-[#D2DAD5] md:text-[17px]">
              {HOME_SOLUTIONS.supporting}
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_SOLUTIONS.domains.map((item) => (
              <article key={item.title} className="group flex flex-col">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-none bg-deep-surface">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover grayscale contrast-[1.06] brightness-[0.94] transition-transform duration-200 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </div>
                <h3 className="mt-4 font-display text-2xl font-medium leading-snug text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-base leading-relaxed text-[#C7D0CA]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-deep-border pt-8 md:flex-row md:items-center">
            <Link
              href="/solutions"
              className="inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-sm bg-signal px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.12em] text-graphite transition-colors duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
            >
              <span>{HOME_SOLUTIONS.ctaLabel}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <p className="max-w-xl text-xs leading-relaxed text-deep-muted">
              {HOME_SOLUTIONS.disclosure}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
