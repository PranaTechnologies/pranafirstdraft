import Link from "next/link";
import { Mail } from "lucide-react";
import { BRAND, CONTACT_INFO, NAV_LINKS } from "@/data/site-content";
import { PerceptionMark } from "@/components/PerceptionMark";
import { DirectContactDialog } from "@/components/DirectContactDialog";

export function Footer() {
  return (
    <footer className="border-t border-deep-border bg-deep-field text-field">
      <div className="mx-auto max-w-editorial px-6 py-12 md:px-12 lg:px-16">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <PerceptionMark className="h-6 w-6 text-field" />
            <div>
              <p className="font-sans text-sm font-medium uppercase tracking-[0.14em] text-field">
                {BRAND.name}
              </p>
              <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-deep-muted">
                {BRAND.tagline} · {CONTACT_INFO.location}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-mono text-xs uppercase tracking-[0.12em] text-deep-muted transition-colors hover:text-field"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="font-mono text-xs uppercase tracking-[0.12em] text-deep-muted transition-colors hover:text-signal"
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-2.5 border-l border-deep-border pl-5">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                aria-label={`Email Perception Labs (${CONTACT_INFO.email})`}
                title={CONTACT_INFO.email}
                className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-deep-border bg-deep-surface text-deep-muted transition-colors hover:border-signal hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={CONTACT_INFO.companyLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perception Labs on LinkedIn"
                title="Perception Labs on LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-deep-border bg-deep-surface text-deep-muted transition-colors hover:border-signal hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-deep-border pt-6 text-xs text-deep-muted sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p className="font-mono uppercase tracking-[0.1em]">
              © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
            </p>
            <Link
              href="/privacy"
              className="font-mono uppercase tracking-[0.1em] text-deep-muted underline decoration-deep-border underline-offset-4 transition-colors hover:text-field"
            >
              Privacy Policy
            </Link>
          </div>
          <DirectContactDialog
            triggerLabel="Reach Us Directly"
            triggerClassName="font-mono text-xs uppercase tracking-[0.1em] text-deep-muted underline decoration-deep-border underline-offset-4 transition-colors hover:text-signal"
          />
        </div>
      </div>
    </footer>
  );
}
