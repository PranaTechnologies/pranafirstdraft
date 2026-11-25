import type { Metadata } from "next";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/data/site-content";
import { DirectContactDialog } from "@/components/DirectContactDialog";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Partner with Perception Labs on visual-inertial navigation, perception modules, and custom autonomy integration.",
};

export default function ContactPage() {
  return (
    <section className="bg-field pb-28 pt-32 md:pb-36 md:pt-40">
      <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
              PL / CONTACT & PARTNERSHIPS
            </p>
            <h1 className="mt-5 font-display text-[2.5rem] font-light leading-[1.06] tracking-[-0.025em] text-graphite sm:text-[3.5rem] lg:text-[4.25rem]">
              Start an engineering conversation.
            </h1>
            <p className="mt-6 max-w-[56ch] text-[18px] leading-[1.65] text-muted-ink">
              Share your vehicle platform, sensor suite, and operational requirements with our team, or reach us directly for technical integration discussions.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={CONTACT_INFO.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-graphite px-6 py-4 font-mono text-xs uppercase tracking-[0.12em] text-field transition-colors hover:bg-signal hover:text-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
              >
                <span>Open Partner Intake Form</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <DirectContactDialog
                triggerLabel="Directly Reach Us Out"
                triggerClassName="inline-flex items-center rounded-sm border border-border-grey bg-surface px-6 py-4 font-mono text-xs uppercase tracking-[0.12em] text-graphite transition-colors hover:border-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-card border border-border-grey bg-surface p-7 sm:p-9">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-ink">
                DIRECT CHANNELS
              </p>
              <h2 className="mt-3 font-display text-2xl font-normal text-graphite">
                Perception Labs Engineering
              </h2>

              <div className="mt-6 divide-y divide-border-grey border-y border-border-grey">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center justify-between gap-4 py-4 text-sm text-graphite transition-colors hover:text-muted-ink"
                >
                  <span className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-ink" aria-hidden="true" />
                    <span>{CONTACT_INFO.email}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-ink" aria-hidden="true" />
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center justify-between gap-4 py-4 text-sm text-graphite transition-colors hover:text-muted-ink"
                >
                  <span className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-ink" aria-hidden="true" />
                    <span className="font-mono">{CONTACT_INFO.phone}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-ink" aria-hidden="true" />
                </a>
              </div>

              <p className="mt-6 font-mono text-[11px] uppercase leading-relaxed tracking-[0.1em] text-muted-ink">
                PUBLIC SCOPE: PIVO · GPS-DENIED NAVIGATION · PERCEPTION MODULES · OEM INTEGRATION
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
