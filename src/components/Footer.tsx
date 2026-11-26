import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BRAND, CONTACT_INFO } from "@/data/site-content";
import { PerceptionMark } from "@/components/PerceptionMark";

export function Footer() {
  return (
    <footer className="border-t border-border-grey bg-field text-graphite">
      <div className="mx-auto max-w-editorial px-6 py-7 md:px-10 md:py-9">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start lg:gap-8">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <PerceptionMark className="h-5 w-5 text-graphite" />
              <span className="font-display text-base font-medium tracking-[-0.01em] text-graphite sm:text-lg">
                {BRAND.name}
              </span>
            </div>
            <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-muted-ink">
              {BRAND.tagline}
            </p>
            <div className="mt-3.5">
              <Link
                href="/contact"
                className="inline-flex min-h-[38px] items-center gap-1.5 rounded-sm bg-graphite px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.12em] text-field transition-colors duration-200 hover:bg-signal hover:text-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:col-span-7">
            <nav aria-label="Footer navigation" className="contents">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-green">
                  PRODUCT
                </p>
                <ul className="mt-2 space-y-1.5 text-sm">
                  <li>
                    <Link
                      href="/cortex"
                      className="text-graphite transition-colors hover:text-muted-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
                    >
                      Cortex
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/technology"
                      className="text-graphite transition-colors hover:text-muted-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
                    >
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solutions"
                      className="text-graphite transition-colors hover:text-muted-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
                    >
                      Solutions
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-green">
                  COMPANY
                </p>
                <ul className="mt-2 space-y-1.5 text-sm">
                  <li>
                    <Link
                      href="/company"
                      className="text-graphite transition-colors hover:text-muted-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/research"
                      className="text-graphite transition-colors hover:text-muted-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
                    >
                      Research
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-graphite transition-colors hover:text-muted-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-green">
                CONNECT
              </p>
              <ul className="mt-2 space-y-1.5 text-sm">
                <li>
                  <a
                    href={CONTACT_INFO.companyLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-graphite transition-colors hover:text-muted-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-graphite transition-colors hover:text-muted-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-2 border-t border-border-grey pt-4 text-xs text-muted-ink sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {BRAND.name}.</p>
          <Link
            href="/privacy"
            className="text-muted-ink underline decoration-border-grey underline-offset-4 transition-colors hover:text-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
