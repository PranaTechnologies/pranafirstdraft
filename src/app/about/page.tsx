import type { Metadata } from "next";
import { BRAND, BRAND_PRINCIPLES } from "@/data/site-content";
import { ClosingBand } from "@/components/ClosingBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Perception Labs is an autonomy systems and perception engineering company making machines capable in complex real-world environments.",
};

const companyLayers = [
  {
    level: "01 / COMPANY IDENTITY",
    title: "Perception and autonomy engineering",
    detail:
      "Building foundational capabilities that enable machines to sense, estimate state, interpret geometry, and act reliably.",
  },
  {
    level: "02 / CORE TECHNOLOGY",
    title: "Perception, localization, sensor fusion & edge compute",
    detail:
      "Software and sensor integration spanning cameras, IMUs, spatial reconstruction, and embedded onboard execution.",
  },
  {
    level: "03 / INITIAL PRODUCT & MARKET FOCUS",
    title: "UAV autonomy, GPS-denied navigation & modular perception",
    detail:
      "Delivering PIVO and integrated perception stacks for aerial platforms, robotics teams, and industrial partners.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border-grey bg-field pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
            PL / ABOUT {BRAND.name.toUpperCase()}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.5rem] font-light leading-[1.06] tracking-[-0.025em] text-graphite sm:text-[3.5rem] lg:text-[4.25rem]">
            We believe autonomy should not depend on perfect conditions.
          </h1>
          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            <p className="text-[18px] leading-[1.65] text-graphite lg:col-span-6">
              {BRAND.name} is an engineering company developing navigation, perception, and autonomy technologies for machines operating in complex real-world environments.
            </p>
            <p className="text-[18px] leading-[1.65] text-muted-ink lg:col-span-6">
              Our focus is on making intelligent systems more capable, resilient, and independent through advances in sensing, computation, and software.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border-grey bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-editorial px-6 md:px-12 lg:px-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
            BRAND PRINCIPLES
          </p>
          <div className="mt-8 grid gap-px border border-border-grey bg-border-grey md:grid-cols-3">
            {BRAND_PRINCIPLES.map((principle) => (
              <article key={principle.number} className="bg-field p-8">
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-ink">
                  {principle.number}
                </span>
                <h2 className="mt-4 font-display text-2xl font-normal text-graphite">
                  {principle.title}
                </h2>
                <p className="mt-3 text-[16px] leading-relaxed text-muted-ink">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-20">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
              ARCHITECTURAL SCOPE
            </p>
            <div className="mt-6 divide-y divide-border-grey border-y border-border-grey">
              {companyLayers.map((layer) => (
                <div key={layer.level} className="grid gap-4 py-7 lg:grid-cols-12 lg:items-baseline">
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-ink lg:col-span-3">
                    {layer.level}
                  </p>
                  <h3 className="font-display text-xl font-medium text-graphite lg:col-span-4">
                    {layer.title}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-muted-ink lg:col-span-5">
                    {layer.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClosingBand />
    </>
  );
}
