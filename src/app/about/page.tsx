import type { Metadata } from "next";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import {
  BRAND,
  CONTACT_INFO,
  FOUNDERS,
  SITE_URL,
} from "@/data/site-content";
import { ClosingBand } from "@/components/ClosingBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Perception Labs builds the onboard perception and autonomy intelligence layer for autonomous machines, founded by Ayushman Bansal and Lakshya Agrawal in Bhubaneswar, Odisha.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Perception Labs",
    description:
      "Founding team and perception-to-autonomy engineering background at Perception Labs.",
    url: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border-grey bg-field pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
            PL / ABOUT {BRAND.name.toUpperCase()} · {CONTACT_INFO.location.toUpperCase()}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.5rem] font-light leading-[1.06] tracking-[-0.025em] text-graphite sm:text-[3.5rem] lg:text-[4.25rem]">
            We are building the onboard spatial intelligence layer for autonomous machines.
          </h1>
          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            <p className="text-lg leading-[1.68] text-graphite sm:text-[19px] lg:col-span-6">
              Headquartered in Bhubaneswar, Odisha, {BRAND.name} develops onboard perception, spatial understanding, state estimation, and autonomy software so aerial platforms and robots can sense, reason, and operate reliably in complex environments.
            </p>
            <div className="space-y-6 lg:col-span-6">
              <p className="text-lg leading-[1.68] text-muted-ink sm:text-[19px]">
                Our focus is building a foundational perception and autonomy platform engineered for critical aerial, industrial, and robotics missions—moving machines beyond scripted automation into perceptive autonomy.
              </p>
              <div>
                <a
                  href={CONTACT_INFO.companyLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-border-grey bg-surface px-4 py-2.5 font-mono text-xs uppercase tracking-[0.12em] text-graphite transition-colors hover:border-graphite"
                >
                  <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Perception Labs on LinkedIn</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Team */}
      <section className="border-b border-border-grey bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
            FOUNDING TEAM
          </p>
          <h2 className="mt-4 font-display text-3xl font-normal tracking-[-0.02em] text-graphite sm:text-4xl">
            Competence and commitment
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {FOUNDERS.map((founder) => (
              <article
                key={founder.name}
                className="flex flex-col justify-between rounded-card border border-border-grey bg-field p-8 sm:p-10"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-border-grey bg-deep-field font-mono text-sm uppercase tracking-[0.1em] text-signal">
                      {founder.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-ink">
                      {founder.role}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-medium text-graphite sm:text-3xl">
                    {founder.name}
                  </h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.1em] text-graphite">
                    {founder.expertise}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-muted-ink">
                    {founder.focus}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border-grey pt-5">
                  <a
                    href={`mailto:${founder.email}`}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-graphite underline decoration-border-grey underline-offset-4 hover:decoration-graphite"
                  >
                    <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{founder.email}</span>
                  </a>

                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] text-graphite underline decoration-border-grey underline-offset-4 hover:decoration-graphite"
                  >
                    <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClosingBand />
    </>
  );
}
