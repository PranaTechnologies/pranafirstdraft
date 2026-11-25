"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { AUTONOMY_STACK_LAYERS, PERCEPTION_CHAIN } from "@/data/site-content";

export function AutonomyStack() {
  return (
    <section className="border-b border-border-grey bg-field py-24 md:py-36">
      <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
              PL / THE AUTONOMY STACK
            </p>
            <h2 className="mt-5 font-display text-[2rem] font-normal leading-[1.08] tracking-[-0.025em] text-graphite sm:text-[2.75rem] lg:text-[3.25rem]">
              From sensor data to autonomous action.
            </h2>
          </div>
          <p className="max-w-xl text-[17px] leading-[1.65] text-muted-ink lg:col-span-5">
            Every layer in the stack builds structured certainty—transforming raw physical measurements into onboard situational understanding and reliable machine motion. Select any layer to explore its architecture.
          </p>
        </div>

        {/* Continuous Perception Field transformation chain */}
        <div className="mt-12 border-y border-border-grey py-4">
          <ol
            aria-label="Perception Field signal pipeline"
            className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em] text-graphite"
          >
            {PERCEPTION_CHAIN.map((step, index) => (
              <li key={step} className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal ring-1 ring-graphite/30" aria-hidden="true" />
                  {step}
                </span>
                {index < PERCEPTION_CHAIN.length - 1 && (
                  <span aria-hidden="true" className="text-subtle-grey">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* Horizontal clickable 5-layer engineering diagram */}
        <div className="mt-12 grid gap-px border border-border-grey bg-border-grey md:grid-cols-5">
          {AUTONOMY_STACK_LAYERS.map((layer, index) => (
            <motion.div
              key={layer.index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.28, delay: index * 0.03 }}
              className="min-w-0 bg-surface"
            >
              <Link
                href={layer.href}
                className="group flex h-full flex-col justify-between p-6 transition-colors duration-200 hover:bg-deep-field hover:text-field focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-graphite"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-ink transition-colors group-hover:text-signal">
                      LAYER {layer.index}
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-muted-ink transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium tracking-[-0.015em] text-graphite transition-colors group-hover:text-field">
                    {layer.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-ink transition-colors group-hover:text-deep-muted">
                    {layer.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 border-t border-border-grey pt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-graphite transition-colors group-hover:border-deep-border group-hover:text-signal">
                  <span>Inspect Layer</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
