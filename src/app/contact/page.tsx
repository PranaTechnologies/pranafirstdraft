import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT_INFO, SITE_URL } from "@/data/site-content";
import { DirectContactDialog } from "@/components/DirectContactDialog";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Partner with Perception Labs on Cortex, onboard perception, autonomous navigation, and custom OEM integration. Located in Bhubaneswar, Odisha, India.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Perception Labs",
    description:
      "Start an engineering conversation with Ayushman Bansal and Lakshya Agrawal at Perception Labs.",
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <section className="bg-field pb-28 pt-32 md:pb-36 md:pt-40">
      <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
              PL / CONTACT &amp; OEM PARTNERSHIPS
            </p>
            <h1 className="mt-5 font-display text-[2.5rem] font-light leading-[1.06] tracking-[-0.025em] text-graphite sm:text-[3.5rem] lg:text-[4.25rem]">
              Start an engineering conversation.
            </h1>
            <p className="mt-6 max-w-[56ch] text-lg leading-[1.68] text-muted-ink sm:text-[19px]">
              Share your vehicle platform, camera-IMU payload, compute target, and flight stack (PX4 / ROS 2) with our team, or contact our co-founders directly.
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
                triggerLabel="Reach Us Directly"
                triggerClassName="inline-flex items-center rounded-sm border border-border-grey bg-surface px-6 py-4 font-mono text-xs uppercase tracking-[0.12em] text-graphite transition-colors hover:border-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
              />
            </div>

            <p className="mt-5 font-mono text-xs uppercase tracking-[0.1em] text-muted-ink">
              By submitting the intake form, you acknowledge our{" "}
              <Link href="/privacy" className="underline underline-offset-4 hover:text-graphite">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="min-w-0 lg:col-span-5">
            <div className="rounded-card border border-border-grey bg-surface p-7 sm:p-9">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-ink">
                DIRECT CHANNELS
              </p>
              <h2 className="mt-3 font-display text-2xl font-normal text-graphite">
                Perception Labs Engineering
              </h2>

              <div className="mt-6 divide-y divide-border-grey border-y border-border-grey">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center justify-between gap-4 py-4 text-base text-graphite transition-colors hover:text-muted-ink"
                >
                  <span className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-ink" aria-hidden="true" />
                    <span>{CONTACT_INFO.email}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-ink" aria-hidden="true" />
                </a>
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="flex items-center justify-between gap-4 py-4 text-base text-graphite transition-colors hover:text-muted-ink"
                >
                  <span className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-ink" aria-hidden="true" />
                    <span className="font-mono">{CONTACT_INFO.phone}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-ink" aria-hidden="true" />
                </a>
                <a
                  href={CONTACT_INFO.companyLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 py-4 text-base text-graphite transition-colors hover:text-muted-ink"
                >
                  <span className="flex items-center gap-3">
                    <Linkedin className="h-4 w-4 text-muted-ink" aria-hidden="true" />
                    <span>Perception Labs on LinkedIn</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-ink" aria-hidden="true" />
                </a>
                <div className="flex items-center gap-3 py-4 text-base text-muted-ink">
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{CONTACT_INFO.location}</span>
                </div>
              </div>

              <p className="mt-6 font-mono text-[11px] uppercase leading-relaxed tracking-[0.1em] text-muted-ink">
                INTEGRATION SCOPE: CORTEX · PERCEPTION &amp; MAPPING · ONBOARD AUTONOMY · OEM ENGINEERING
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
