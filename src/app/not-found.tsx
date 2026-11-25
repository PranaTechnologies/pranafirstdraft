import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[75vh] items-center bg-field pt-24">
      <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
          PL / 404 — FRAME NOT FOUND
        </p>
        <h1 className="mt-5 font-display text-4xl font-light tracking-[-0.025em] text-graphite sm:text-6xl">
          The requested route could not be resolved.
        </h1>
        <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-muted-ink">
          Return to the primary Perception Labs overview or inspect our technology, systems, and research documentation.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-sm bg-graphite px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-field transition-colors hover:bg-signal hover:text-graphite"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
