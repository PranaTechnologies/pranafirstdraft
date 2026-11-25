import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BRAND, CONTACT_INFO, SITE_URL } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Perception Labs collects and handles partner inquiry information submitted via our intake form and direct engineering contact channels.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Perception Labs",
    description:
      "Partner inquiry data handling and privacy practices for Perception Labs.",
    url: `${SITE_URL}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <section className="bg-field pb-28 pt-32 md:pb-36 md:pt-40">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-muted-ink transition-colors hover:text-graphite"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Back to Contact</span>
        </Link>

        <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
          PL / PRIVACY POLICY
        </p>
        <h1 className="mt-4 font-display text-[2.25rem] font-light leading-[1.08] tracking-[-0.025em] text-graphite sm:text-[3.25rem]">
          Privacy &amp; Partner Inquiry Handling
        </h1>

        <div className="mt-10 space-y-8 border-t border-border-grey pt-8 text-lg leading-relaxed text-muted-ink">
          <section>
            <h2 className="font-display text-2xl font-medium text-graphite">
              1. Information we collect
            </h2>
            <p className="mt-3">
              When you open our Partner Intake Form (hosted via Google Forms) or contact {BRAND.name} directly by email or telephone, we collect only the details you voluntarily provide—such as your name, organization, contact details, vehicle platform, and integration inquiry notes.
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
              4. Data deletion &amp; contact
            </h2>
            <p className="mt-3">
              To update or delete prior inquiry correspondence, contact{" "}
              <a
                href={`mailto:${CONTACT_INFO.primaryEmail}`}
                className="text-graphite underline underline-offset-4"
              >
                {CONTACT_INFO.primaryEmail}
              </a>{" "}
              or{" "}
              <a
                href={`mailto:${CONTACT_INFO.secondaryEmail}`}
                className="text-graphite underline underline-offset-4"
              >
                {CONTACT_INFO.secondaryEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
