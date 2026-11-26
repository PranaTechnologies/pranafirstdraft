import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ClosingBandProps {
  tone?: "dark" | "light";
  heading?: string;
  subtitle?: string;
  ctaLabel?: string;
  variant?: "button" | "link";
}

export function ClosingBand({
  tone = "dark",
  heading = "Build with us.",
  subtitle,
  ctaLabel = "Discuss an integration",
  variant = "button",
}: ClosingBandProps) {
  const isLight = tone === "light";

  return (
    <section
      className={
        isLight
          ? "bg-field py-14 text-graphite md:py-20"
          : "bg-deep-field py-14 text-field md:py-20"
      }
    >
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <div
          className={`flex flex-col items-start justify-between gap-6 border-t pt-12 md:flex-row md:items-end ${
            isLight ? "border-border-grey" : "border-deep-border"
          }`}
        >
          <div className="max-w-2xl">
            <h2
              className={`font-display text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.025em] sm:text-[2.75rem] ${
                isLight ? "text-graphite" : "text-field"
              }`}
            >
              {heading}
            </h2>
            {subtitle && (
              <p
                className={`mt-3 text-base leading-relaxed md:text-[17px] ${
                  isLight ? "text-muted-ink" : "text-[#BCC7C0]"
                }`}
              >
                {subtitle}
              </p>
            )}
          </div>

          <Link
            href="/contact"
            className={
              variant === "link"
                ? `inline-flex shrink-0 items-center gap-2 font-mono text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 ${
                    isLight
                      ? "text-graphite hover:text-muted-green focus-visible:ring-graphite"
                      : "text-signal hover:text-white focus-visible:ring-signal"
                  }`
                : `inline-flex shrink-0 items-center gap-2 rounded-sm px-5 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 ${
                    isLight
                      ? "bg-graphite text-field hover:bg-signal hover:text-graphite focus-visible:ring-graphite"
                      : "bg-signal text-graphite hover:bg-white focus-visible:ring-signal"
                  }`
            }
          >
            <span>{ctaLabel}</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
