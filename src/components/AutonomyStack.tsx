"use client";

import Link from "next/link";
import { ArrowLeftRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { TECHNOLOGY_LAYERS } from "@/data/site-content";

export function AutonomyStack() {
  return (
    <section className="border-b border-border-grey bg-field py-24 md:py-32">
      <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="min-w-0 lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
              PL / FIVE-LAYER ARCHITECTURE
            </p>
            <h2 className="mt-4 font-display text-[2.25rem] font-normal leading-[1.08] tracking-[-0.025em] text-graphite sm:text-[2.95rem] lg:text-[3.35rem]">
              From sensor data to onboard autonomy.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-[1.65] text-muted-ink lg:col-span-5">
            Five interconnected engineering layers link physical measurement to onboard action. Rather than operating strictly one-way, estimation priors, spatial geometry, and health signals feed back across layers.
          </p>
        </div>

        {/* Interconnected feedback strip */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-y border-border-grey py-4 font-mono text-xs uppercase tracking-[0.11em] text-graphite">
          <span className="inline-flex items-center gap-2.5">
            <ArrowLeftRight className="h-4 w-4 text-graphite" aria-hidden="true" />
            <span>Coupled closed-loop flow: State Priors ↔ Feature Tracking ↔ Map Alignment ↔ Health Monitoring</span>
          </span>
          <Link
            href="/technology"
            className="inline-flex items-center gap-1.5 text-graphite underline decoration-border-grey underline-offset-4 hover:decoration-graphite"
          >
            <span>Architecture Overview</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Unified 5-layer clickable grid */}
        <div className="mt-10 grid gap-px border border-border-grey bg-border-grey md:grid-cols-5">
          {TECHNOLOGY_LAYERS.map((layer, index) => (
            <motion.div
              key={layer.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.25, delay: index * 0.03 }}
              className="min-w-0 bg-surface"
            >
              <Link
                href={`/technology/${layer.slug}`}
                className="group flex h-full flex-col justify-between p-6 transition-colors duration-200 hover:bg-deep-field hover:text-field focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-graphite"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-ink transition-colors group-hover:text-signal">
                      LAYER {layer.layerNumber}
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-muted-ink transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-medium tracking-[-0.015em] text-graphite transition-colors group-hover:text-field sm:text-2xl">
                    {layer.shortTitle}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-ink transition-colors group-hover:text-deep-muted">
                    {layer.stackSummary}
                  </p>
                </div>

                <div className="mt-7 border-t border-border-grey pt-4 font-mono text-xs uppercase tracking-[0.11em] text-graphite transition-colors group-hover:border-deep-border group-hover:text-signal">
                  <span>Layer {layer.layerNumber} Spec</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
