import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ClosingBandProps {
  tone?: "dark" | "light";
  heading?: string;
  subtitle?: string;
  ctaLabel?: string;
}

export function ClosingBand({
  tone = "dark",
  heading = "Build with us.",
  subtitle,
  ctaLabel = "Get in touch",
}: ClosingBandProps) {
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
          className={`flex flex-col items-start justify-between gap-8 border-t pt-12 md:flex-row md:items-end ${
            isLight ? "border-border-grey" : "border-deep-border"
          }`}
        >
          <div className="max-w-2xl">
            <h2
              className={`font-display text-[2.5rem] font-light leading-[1.06] tracking-[-0.025em] sm:text-[3.5rem] ${
                isLight ? "text-graphite" : "text-field"
              }`}
            >
              {heading}
            </h2>
            {subtitle && (
              <p
                className={`mt-4 text-lg leading-relaxed ${
                  isLight ? "text-muted-ink" : "text-[#BCC7C0]"
                }`}
              >
                {subtitle}
              </p>
            )}
          </div>

          <Link
            href="/contact"
            className={`inline-flex shrink-0 items-center gap-2 rounded-sm px-6 py-4 font-mono text-xs font-medium uppercase tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 ${
              isLight
                ? "bg-graphite text-field hover:bg-signal hover:text-graphite focus-visible:ring-graphite"
                : "bg-signal text-graphite hover:bg-white focus-visible:ring-signal"
            }`}
          >
            <span>{ctaLabel}</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
