import type { Metadata } from "next";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { BRAND, CONTACT_INFO, FOUNDERS } from "@/data/site-content";

export const metadata: Metadata = buildPageMetadata({
  title: "Company",
  description:
    "Perception Labs develops onboard spatial intelligence and navigation software for autonomous drones and robots from Bhubaneswar, Odisha, India.",
  path: "/company",
});

export default function CompanyPage() {
  return (
    <>
      <section className="border-b border-border-grey bg-field pb-12 pt-24 md:pb-16 md:pt-28">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
            COMPANY · {CONTACT_INFO.location.toUpperCase()}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-[2.5rem] font-light leading-[1.05] tracking-[-0.03em] text-graphite sm:text-[3.75rem]">
            Spatial intelligence for autonomous machines.
          </h1>
          <div className="mt-8 grid gap-6 border-t border-border-grey pt-8 lg:grid-cols-12">
            <p className="text-base leading-[1.65] text-graphite md:text-[18px] lg:col-span-6">
              {BRAND.name} builds onboard perception, spatial mapping, and state estimation software so aerial and robotic platforms operate reliably beyond structured environments.
            </p>
            <div className="space-y-4 lg:col-span-6">
              <p className="text-base leading-[1.65] text-muted-ink">
                Founded in Bhubaneswar, Odisha, our engineering focus spans multi-sensor state estimation, real-time spatial understanding, and deterministic integration into autonomous vehicle architectures.
              </p>
              <div>
                <a
                  href={CONTACT_INFO.companyLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-graphite underline decoration-border-grey underline-offset-4 transition-colors hover:decoration-graphite"
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

      <section className="bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-green">
            FOUNDING TEAM
          </p>
          <h2 className="mt-2 font-display text-3xl font-light tracking-[-0.02em] text-graphite">
            Leadership
          </h2>

          <div className="mt-8 grid gap-8 border-t border-border-grey pt-8 md:grid-cols-2">
            {FOUNDERS.map((founder) => (
              <article
                key={founder.name}
                className="flex flex-col justify-between border-b border-border-grey pb-6 md:border-b-0 md:pb-0"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-green">
                    {founder.role}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-normal text-graphite sm:text-3xl">
                    {founder.name}
                  </h3>
                  <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.08em] text-muted-ink">
                    {founder.expertise}
                  </p>
                  <p className="mt-3 max-w-[46ch] text-base leading-relaxed text-muted-ink">
                    {founder.focus}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-6">
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
    </>
  );
}
