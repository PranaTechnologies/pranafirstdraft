import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[75vh] items-center bg-field pt-24">
      <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
          PL / 404
        </p>
        <h1 className="mt-5 font-display text-4xl font-light tracking-[-0.025em] text-graphite sm:text-6xl">
          Page not found.
        </h1>
        <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-muted-ink">
          The page you requested could not be found. Return home, explore the Cortex navigation engine, or reach out to our engineering team.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-graphite px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.12em] text-field transition-colors hover:bg-signal hover:text-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/cortex"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-sm border border-border-grey bg-surface px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.12em] text-graphite transition-colors hover:border-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
          >
            <span>Explore Cortex</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-graphite underline decoration-border-grey underline-offset-4 transition-colors hover:decoration-graphite"
          >
            <span>Contact</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
