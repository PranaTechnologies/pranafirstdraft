import Link from "next/link";
import { BRAND, CONTACT_INFO } from "@/data/site-content";
import { PerceptionMark } from "@/components/PerceptionMark";

export function Footer() {
  return (
    <footer className="border-t border-deep-border bg-deep-field text-field">
      <div className="mx-auto max-w-editorial px-6 py-12 md:px-10 md:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <PerceptionMark className="h-6 w-6 text-field" />
              <span className="font-display text-lg font-medium tracking-[-0.01em] text-field">
                {BRAND.name}
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-deep-muted">
              {BRAND.tagline}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
            <nav aria-label="Footer navigation" className="contents">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-deep-muted">
                  PRODUCT
                </p>
                <ul className="mt-3 space-y-2.5 text-sm">
                  <li>
                    <Link
                      href="/cortex"
                      className="text-field transition-colors hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                    >
                      Cortex
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/technology"
                      className="text-field transition-colors hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                    >
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solutions"
                      className="text-field transition-colors hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                    >
                      Solutions
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-deep-muted">
                  COMPANY
                </p>
                <ul className="mt-3 space-y-2.5 text-sm">
                  <li>
                    <Link
                      href="/company"
                      className="text-field transition-colors hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/research"
                      className="text-field transition-colors hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                    >
                      Research
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-field transition-colors hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-deep-muted">
                CONNECT
              </p>
              <ul className="mt-3 space-y-2.5 text-sm">
                <li>
                  <a
                    href={CONTACT_INFO.companyLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-field transition-colors hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-field transition-colors hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-deep-border pt-6 text-xs text-deep-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {BRAND.name}.</p>
          <Link
            href="/privacy"
            className="text-deep-muted underline decoration-deep-border underline-offset-4 transition-colors hover:text-field focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
