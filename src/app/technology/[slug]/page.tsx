import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ALL_TECHNOLOGY_SPECS } from "@/data/site-content";
import { SpatialSchematic } from "@/components/SpatialSchematic";
import { ClosingBand } from "@/components/ClosingBand";

interface PageParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ALL_TECHNOLOGY_SPECS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const spec = ALL_TECHNOLOGY_SPECS.find((item) => item.slug === slug);
  if (!spec) {
    return { title: "Technology Layer" };
  }
  return {
    title: spec.shortTitle,
    description: spec.overview,
  };
}

export default async function TechnologyDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const index = ALL_TECHNOLOGY_SPECS.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const spec = ALL_TECHNOLOGY_SPECS[index];
  const prevSpec =
    ALL_TECHNOLOGY_SPECS[
      (index - 1 + ALL_TECHNOLOGY_SPECS.length) % ALL_TECHNOLOGY_SPECS.length
    ];
  const nextSpec =
    ALL_TECHNOLOGY_SPECS[(index + 1) % ALL_TECHNOLOGY_SPECS.length];

  return (
    <>
      <section className="border-b border-border-grey bg-field pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <Link
            href="/technology"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-ink transition-colors hover:text-graphite"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back to Technology Stack</span>
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
                PL / LAYER {spec.stackIndex} — {spec.stackName}
              </p>
              <h1 className="mt-4 font-display text-[2.5rem] font-light leading-[1.06] tracking-[-0.025em] text-graphite sm:text-[3.5rem]">
                {spec.shortTitle}
              </h1>
              <p className="mt-5 text-xl leading-relaxed text-graphite">
                {spec.summary}
              </p>
              <p className="mt-4 max-w-[56ch] text-[17px] leading-[1.65] text-muted-ink">
                {spec.overview}
              </p>
            </div>

            <div className="lg:col-span-6">
              <SpatialSchematic
                variant={spec.graphic}
                label={`${spec.shortTitle} detailed schematic`}
                caption={`THE PERCEPTION FIELD · ${spec.shortTitle.toUpperCase()}`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border-grey bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
                ENGINEERING FOCUS
              </p>
              <div className="mt-6 divide-y divide-border-grey border-y border-border-grey">
                {spec.focusAreas.map((area) => (
                  <div key={area.label} className="py-6">
                    <h2 className="font-display text-xl font-medium text-graphite">
                      {area.label}
                    </h2>
                    <p className="mt-2 max-w-[58ch] text-[16px] leading-relaxed text-muted-ink">
                      {area.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-card border border-border-grey bg-field p-6 sm:p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-ink">
                  INPUT SIGNALS
                </p>
                <ul className="mt-4 space-y-2.5 font-mono text-xs text-graphite">
                  {spec.inputs.map((inp) => (
                    <li key={inp} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-graphite" aria-hidden="true" />
                      <span>{inp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-card border border-deep-border bg-deep-field p-6 text-field sm:p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-signal">
                  LAYER OUTPUTS
                </p>
                <ul className="mt-4 space-y-2.5 font-mono text-xs text-field">
                  {spec.outputs.map((out) => (
                    <li key={out} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border-grey pt-8">
            <Link
              href={`/technology/${prevSpec.slug}`}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-muted-ink transition-colors hover:text-graphite"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{prevSpec.shortTitle}</span>
            </Link>
            <Link
              href={`/technology/${nextSpec.slug}`}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-graphite transition-colors hover:text-muted-ink"
            >
              <span>Next: {nextSpec.shortTitle}</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <ClosingBand />
    </>
  );
}
