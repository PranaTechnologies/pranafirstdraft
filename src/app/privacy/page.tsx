import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { BRAND, CONTACT_INFO } from "@/data/site-content";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "How Perception Labs collects, stores, and handles partner inquiry information submitted via Google Forms and direct email channels.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="bg-field pb-16 pt-24 md:pb-20 md:pt-28">
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-muted-ink transition-colors hover:text-graphite"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Back to Contact</span>
        </Link>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
            PL / PRIVACY POLICY
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-green">
            Last updated: 27 November 2026
          </p>
        </div>
        <h1 className="mt-4 font-display text-[2.25rem] font-light leading-[1.08] tracking-[-0.025em] text-graphite sm:text-[3.25rem]">
          Privacy &amp; Partner Inquiry Handling
        </h1>

        <div className="mt-10 space-y-8 border-t border-border-grey pt-8 text-lg leading-relaxed text-muted-ink">
          <section>
            <h2 className="font-display text-2xl font-medium text-graphite">
              1. Information we collect &amp; storage
            </h2>
            <p className="mt-3">
              When you open our Partner Intake Form (hosted on Google Forms) or contact {BRAND.name} ({CONTACT_INFO.location}) directly by email or telephone, we collect only the details you voluntarily provide—such as your name, organization, contact details, vehicle platform, and integration inquiry notes. Form responses submitted via Google Forms are processed and stored on Google&apos;s infrastructure subject to Google&apos;s Privacy Policy before review by our team.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-graphite">
              2. How information is used
            </h2>
            <p className="mt-3">
              Submitted technical and business contact information is used solely to evaluate and respond to your engineering, pilot deployment, or OEM partnership request. We do not sell, rent, or distribute inquiry records to third-party advertisers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-graphite">
              3. Cookies &amp; site tracking
            </h2>
            <p className="mt-3">
              This website does not run third-party advertising trackers or cross-site behavioral profiling scripts.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-graphite">
              4. Data retention, deletion &amp; contact
            </h2>
            <p className="mt-3">
              Inquiry records are retained only as long as reasonably required to evaluate and follow up on your engineering or partnership conversation. To request access, correction, or deletion of prior inquiry data, contact{" "}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-graphite underline underline-offset-4"
              >
                {CONTACT_INFO.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
