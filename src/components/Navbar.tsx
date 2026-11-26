"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/data/site-content";
import { PerceptionMark } from "@/components/PerceptionMark";

export function Navbar() {
  const pathname = usePathname();
  const [openedPath, setOpenedPath] = useState<string | null>(null);
  const mobileOpen = openedPath === pathname;

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenedPath(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-graphite bg-field/95 backdrop-blur-md">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-editorial items-center justify-between gap-4 px-5 md:h-20 md:px-8 lg:gap-6 lg:px-12 xl:px-16"
      >
        <Link
          href="/"
          className="inline-flex shrink-0 items-center gap-2.5 text-graphite transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite lg:gap-3.5"
          aria-label="Perception Labs home"
        >
          <PerceptionMark className="h-7 w-7 text-graphite lg:h-8 lg:w-8" />
          <span className="font-display text-base font-bold uppercase leading-none tracking-[0.12em] text-graphite lg:text-xl lg:tracking-[0.14em]">
            {BRAND.name}
          </span>
        </Link>

        <div className="hidden items-center gap-4 md:flex lg:gap-7 xl:gap-8">
          {NAV_LINKS.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-mono text-xs uppercase tracking-[0.12em] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite ${
                  active
                    ? "text-graphite underline decoration-signal decoration-2 underline-offset-8"
                    : "text-muted-ink hover:text-graphite"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-sm border border-graphite bg-graphite px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-field transition-colors duration-150 hover:bg-signal hover:text-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
          >
            <span>Contact</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border-grey bg-surface text-graphite transition-colors hover:border-graphite md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpenedPath((prev) => (prev === pathname ? null : pathname))}
        >
          {mobileOpen ? (
            <X className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Menu className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="border-t border-border-grey bg-field px-6 py-6 md:hidden"
        >
          <div className="flex flex-col divide-y divide-border-grey">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpenedPath(null)}
                className="py-3.5 font-mono text-sm uppercase tracking-[0.12em] text-graphite transition-colors hover:text-muted-ink"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setOpenedPath(null)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-graphite px-4 py-3 font-mono text-xs uppercase tracking-[0.12em] text-field"
              >
                <span>Contact</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
