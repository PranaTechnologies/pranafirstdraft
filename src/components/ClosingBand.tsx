import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DirectContactDialog } from "@/components/DirectContactDialog";

interface ClosingBandProps {
  tone?: "dark" | "light";
}

export function ClosingBand({ tone = "dark" }: ClosingBandProps) {
  const isLight = tone === "light";

  return (
    <section
      className={
        isLight
          ? "bg-field py-24 text-graphite md:py-32"
          : "bg-deep-field py-24 text-field md:py-32"
      }
    >
      <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
        <div
          className={`grid gap-10 border-t pt-12 lg:grid-cols-12 lg:items-end ${
            isLight ? "border-border-grey" : "border-deep-border"
          }`}
        >
          <div className="min-w-0 lg:col-span-8">
            <p
              className={`font-mono text-xs uppercase tracking-[0.14em] ${
                isLight ? "text-muted-ink" : "text-signal"
              }`}
            >
              PL / NEXT STEP
            </p>
            <h2
              className={`mt-5 max-w-4xl font-display text-[2.25rem] font-light leading-[1.08] tracking-[-0.025em] sm:text-[3rem] lg:text-[3.75rem] ${
                isLight ? "text-graphite" : "text-field"
              }`}
            >
              Building intelligence for machines that move through the real world.
            </h2>
          </div>

          <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:items-end">
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 rounded-sm px-6 py-4 font-mono text-xs font-medium uppercase tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 ${
                isLight
                  ? "bg-graphite text-field hover:bg-signal hover:text-graphite focus-visible:ring-graphite"
                  : "bg-signal text-graphite hover:bg-field focus-visible:ring-signal"
              }`}
            >
              <span>Discuss an Integration</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <DirectContactDialog
              triggerLabel="Reach Us Directly"
              triggerClassName={`font-mono text-xs uppercase tracking-[0.12em] underline underline-offset-4 transition-colors ${
                isLight
                  ? "text-graphite decoration-border-grey hover:text-muted-ink hover:decoration-graphite"
                  : "text-deep-muted decoration-deep-border hover:text-signal"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
