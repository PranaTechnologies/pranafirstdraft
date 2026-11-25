import Link from "next/link";
import { ArrowLeftRight, ArrowUpRight } from "lucide-react";
import { TECHNOLOGY_LAYERS } from "@/data/site-content";

interface AutonomyStackProps {
  tone?: "dark" | "light";
}

export function AutonomyStack({ tone = "dark" }: AutonomyStackProps) {
  const isLight = tone === "light";

  return (
    <section
      className={
        isLight
          ? "border-b border-border-grey bg-field py-24 text-graphite md:py-28"
          : "border-b border-deep-border bg-deep-field py-24 text-field md:py-28"
      }
    >
      <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="min-w-0 lg:col-span-7">
            <p
              className={`font-mono text-xs uppercase tracking-[0.14em] ${
                isLight ? "text-muted-ink" : "text-signal"
              }`}
            >
              PL / FIVE-LAYER ARCHITECTURE
            </p>
            <h2
              className={`mt-4 font-display text-[2.25rem] font-light leading-[1.08] tracking-[-0.025em] sm:text-[2.95rem] lg:text-[3.35rem] ${
                isLight ? "text-graphite" : "text-field"
              }`}
            >
              From sensor data to onboard autonomy.
            </h2>
          </div>
          <p
            className={`max-w-xl text-lg leading-[1.65] lg:col-span-5 ${
              isLight ? "text-muted-ink" : "text-[#C6D1CA]"
            }`}
          >
            Five interconnected engineering layers link physical measurement to onboard action. Rather than operating strictly one-way, estimation priors, spatial geometry, and health signals feed back across layers.
          </p>
        </div>

        {/* Interconnected feedback strip */}
        <div
          className={`mt-10 flex flex-wrap items-center justify-between gap-4 border-y py-4 font-mono text-xs uppercase tracking-[0.11em] ${
            isLight
              ? "border-border-grey text-graphite"
              : "border-deep-border text-field"
          }`}
        >
          <span className="inline-flex items-center gap-2.5">
            <ArrowLeftRight
              className={`h-4 w-4 ${isLight ? "text-graphite" : "text-signal"}`}
              aria-hidden="true"
            />
            <span>
              Coupled closed-loop flow: State Priors ↔ Feature Tracking ↔ Map Alignment ↔ Health Monitoring
            </span>
          </span>
          <Link
            href="/technology"
            className={`inline-flex items-center gap-1.5 underline underline-offset-4 transition-colors ${
              isLight
                ? "text-graphite decoration-border-grey hover:decoration-graphite"
                : "text-signal decoration-deep-border hover:text-field hover:decoration-signal"
            }`}
          >
            <span>Architecture Overview</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Unified 5-layer clickable grid */}
        <div
          className={`mt-10 grid gap-px border md:grid-cols-5 ${
            isLight
              ? "border-border-grey bg-border-grey"
              : "border-deep-border bg-deep-border"
          }`}
        >
          {TECHNOLOGY_LAYERS.map((layer) => (
            <div
              key={layer.slug}
              className={`min-w-0 ${isLight ? "bg-surface" : "bg-deep-surface"}`}
            >
              <Link
                href={`/technology/${layer.slug}`}
                className={`group flex h-full flex-col justify-between p-6 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset ${
                  isLight
                    ? "hover:bg-deep-field hover:text-field focus-visible:ring-graphite"
                    : "hover:bg-[#17231E] focus-visible:ring-signal"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-xs uppercase tracking-[0.12em] transition-colors ${
                        isLight
                          ? "text-muted-ink group-hover:text-signal"
                          : "text-signal"
                      }`}
                    >
                      LAYER {layer.layerNumber}
                    </span>
                    <ArrowUpRight
                      className={`h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                        isLight
                          ? "text-muted-ink group-hover:text-signal"
                          : "text-[#9AA59F] group-hover:text-signal"
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <h3
                    className={`mt-5 font-display text-xl font-medium tracking-[-0.015em] transition-colors sm:text-2xl ${
                      isLight
                        ? "text-graphite group-hover:text-field"
                        : "text-field"
                    }`}
                  >
                    {layer.shortTitle}
                  </h3>
                  <p
                    className={`mt-3 text-base leading-relaxed transition-colors ${
                      isLight
                        ? "text-muted-ink group-hover:text-deep-muted"
                        : "text-[#BCC7C0]"
                    }`}
                  >
                    {layer.stackSummary}
                  </p>
                </div>

                <div
                  className={`mt-7 border-t pt-4 font-mono text-xs uppercase tracking-[0.11em] transition-colors ${
                    isLight
                      ? "border-border-grey text-graphite group-hover:border-deep-border group-hover:text-signal"
                      : "border-deep-border text-[#D8E0DA] group-hover:border-[#2E3F39] group-hover:text-signal"
                  }`}
                >
                  <span>Layer {layer.layerNumber} Spec</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
