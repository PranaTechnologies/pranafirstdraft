import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SITE_URL, TECHNOLOGY_LAYERS } from "@/data/site-content";
import { SpatialSchematic } from "@/components/SpatialSchematic";
import { ClosingBand } from "@/components/ClosingBand";

interface PageParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return TECHNOLOGY_LAYERS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const spec = TECHNOLOGY_LAYERS.find((item) => item.slug === slug);
  if (!spec) {
    return { title: "Technology Layer" };
  }
  return {
    title: `Layer ${spec.layerNumber}: ${spec.shortTitle}`,
    description: spec.overview,
    alternates: { canonical: `/technology/${spec.slug}` },
    openGraph: {
      title: `Layer ${spec.layerNumber}: ${spec.shortTitle} | Perception Labs`,
      description: spec.overview,
      url: `${SITE_URL}/technology/${spec.slug}`,
    },
  };
}

export default async function TechnologyDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const index = TECHNOLOGY_LAYERS.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const spec = TECHNOLOGY_LAYERS[index];
  const prevSpec =
    TECHNOLOGY_LAYERS[(index - 1 + TECHNOLOGY_LAYERS.length) % TECHNOLOGY_LAYERS.length];
  const nextSpec = TECHNOLOGY_LAYERS[(index + 1) % TECHNOLOGY_LAYERS.length];

  return (
    <>
      <section className="border-b border-border-grey bg-field pb-12 pt-24 md:pb-16 md:pt-28">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <Link
            href="/technology"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-muted-ink transition-colors hover:text-graphite"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back to Technology</span>
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="min-w-0 lg:col-span-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
                LAYER {spec.layerNumber} — {spec.shortTitle}
              </p>
              <h1 className="mt-3 font-display text-[2.5rem] font-light leading-[1.06] tracking-[-0.025em] text-graphite sm:text-[3.5rem]">
                {spec.shortTitle}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-graphite md:text-xl">
                {spec.summary}
              </p>
              <p className="mt-3 max-w-[54ch] text-base leading-[1.65] text-muted-ink">
                {spec.overview}
              </p>
              <p className="mt-4 border-l-2 border-signal pl-4 font-mono text-xs uppercase leading-relaxed tracking-[0.08em] text-graphite">
                COUPLED FEEDBACK: {spec.feedbackNote}
              </p>
            </div>

            <div className="min-w-0 lg:col-span-6">
              <SpatialSchematic
                variant={spec.graphic}
                label={`${spec.shortTitle} detailed schematic`}
                caption={`LAYER ${spec.layerNumber} · ${spec.shortTitle.toUpperCase()}`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border-grey bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
                ENGINEERING FOCUS
              </p>
              <div className="mt-6 divide-y divide-border-grey border-y border-border-grey">
                {spec.focusAreas.map((area) => (
                  <div key={area.label} className="py-6">
                    <h2 className="font-display text-2xl font-medium text-graphite">
                      {area.label}
                    </h2>
                    <p className="mt-2 max-w-[58ch] text-lg leading-relaxed text-muted-ink">
                      {area.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="min-w-0 space-y-6 lg:col-span-5">
              <div className="rounded-card border border-border-grey bg-field p-6 sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-ink">
                  INPUT SIGNALS
                </p>
                <ul className="mt-4 space-y-3 font-mono text-sm text-graphite">
                  {spec.inputs.map((inp) => (
                    <li key={inp} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-graphite" aria-hidden="true" />
                      <span>{inp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-card border border-deep-border bg-deep-field p-6 text-field sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-signal">
                  LAYER OUTPUTS
                </p>
                <ul className="mt-4 space-y-3 font-mono text-sm text-field">
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
              <span>Layer {prevSpec.layerNumber}: {prevSpec.shortTitle}</span>
            </Link>
            <Link
              href={`/technology/${nextSpec.slug}`}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-graphite transition-colors hover:text-muted-ink"
            >
              <span>Next — Layer {nextSpec.layerNumber}: {nextSpec.shortTitle}</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <ClosingBand />
    </>
  );
}
