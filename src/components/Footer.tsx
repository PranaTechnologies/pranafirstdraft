import Link from "next/link";
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

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/systems/pivo"
              className="font-mono text-xs uppercase tracking-[0.12em] text-deep-muted transition-colors hover:text-signal"
            >
              PIVO
            </Link>
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
            <Link
              href="/privacy"
              className="font-mono text-xs uppercase tracking-[0.12em] text-deep-muted transition-colors hover:text-field"
            >
              Privacy
            </Link>
          </nav>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-deep-border pt-6 text-xs text-deep-muted sm:flex-row sm:items-center">
          <p className="font-mono uppercase tracking-[0.1em]">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <DirectContactDialog
            triggerLabel="Reach Us Directly"
            triggerClassName="font-mono text-xs uppercase tracking-[0.1em] text-deep-muted underline decoration-deep-border underline-offset-4 transition-colors hover:text-signal"
          />
        </div>
      </div>
    </footer>
  );
}
