import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { CONTACT_INFO } from "@/data/site-content";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Discuss integrating Cortex onboard navigation for drones and mobile robots with Perception Labs engineering. Bhubaneswar, Odisha, India.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="bg-field pb-16 pt-24 md:pb-20 md:pt-28">
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
              CONTACT
            </p>
            <h1 className="mt-4 font-display text-[2.5rem] font-light leading-[1.06] tracking-[-0.025em] text-graphite sm:text-[3.5rem]">
              Start an engineering conversation.
            </h1>
            <p className="mt-4 max-w-[48ch] text-base leading-[1.68] text-muted-ink md:text-[18px]">
              Share your vehicle platform, camera–IMU configuration, compute target, and flight or middleware stack with our engineering team.
            </p>

            <div className="mt-8">
              <a
                href={CONTACT_INFO.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-graphite px-5 py-3.5 font-mono text-xs uppercase tracking-[0.12em] text-field transition-colors hover:bg-signal hover:text-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graphite"
              >
                <span>Submit Engineering Enquiry</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <p className="mt-5 font-mono text-xs uppercase tracking-[0.1em] text-muted-ink">
              See our{" "}
              <Link href="/privacy" className="underline underline-offset-4 hover:text-graphite">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="min-w-0 lg:col-span-5">
            <div className="border-t border-border-grey pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-green">
                DIRECT CHANNELS
              </p>

              <div className="mt-5 divide-y divide-border-grey border-y border-border-grey">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center justify-between gap-4 py-3.5 text-base text-graphite transition-colors hover:text-muted-ink"
                >
                  <span className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-green" aria-hidden="true" />
                    <span>{CONTACT_INFO.email}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-ink" aria-hidden="true" />
                </a>
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="flex items-center justify-between gap-4 py-3.5 text-base text-graphite transition-colors hover:text-muted-ink"
                >
                  <span className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-green" aria-hidden="true" />
                    <span className="font-mono">{CONTACT_INFO.phone}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-ink" aria-hidden="true" />
                </a>
                <a
                  href={CONTACT_INFO.companyLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 py-3.5 text-base text-graphite transition-colors hover:text-muted-ink"
                >
                  <span className="flex items-center gap-3">
                    <Linkedin className="h-4 w-4 text-muted-green" aria-hidden="true" />
                    <span>Perception Labs on LinkedIn</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-ink" aria-hidden="true" />
                </a>
                <div className="flex items-center gap-3 py-3.5 text-base text-muted-ink">
                  <MapPin className="h-4 w-4 shrink-0 text-muted-green" aria-hidden="true" />
                  <span>{CONTACT_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
