import EngineeringGraphic from "@/components/EngineeringGraphic";

const challenges = [
  {
    number: "01",
    title: "GPS-Denied Environments",
    description: "Enclosed, obstructed, or signal-compromised spaces can make satellite-based positioning unavailable or unreliable.",
    graphic: "signals" as const,
  },
  {
    number: "02",
    title: "Visual-Inertial Navigation",
    description: "Cameras and inertial sensors offer complementary observations that can support motion estimation between position fixes.",
    graphic: "motion" as const,
  },
  {
    number: "03",
    title: "Autonomous Spatial Intelligence",
    description: "Machines need to interpret surrounding structure and maintain useful spatial awareness as conditions change.",
    graphic: "spatial" as const,
  },
];

const ProblemSection = () => (
  <section id="problem" className="scroll-mt-20 border-y border-border bg-surface py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-5 md:px-10">
      <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:gap-16">
        <div>
          <p className="font-mono text-[10px] text-accent">01 / THE PROBLEM</p>
          <h2 className="mt-5 max-w-md font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            When GPS cannot be trusted, autonomy breaks.
          </h2>
        </div>
        <p className="max-w-3xl self-end text-base leading-7 text-muted-foreground">
          Autonomous systems depend on reliable position, perception, and situational awareness. In environments where GNSS signals are unavailable or compromised, conventional navigation systems become unreliable. We are developing technologies that allow machines to maintain spatial awareness through onboard sensing and intelligent perception.
        </p>
      </div>

      <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
        {challenges.map((item) => (
          <article key={item.number} className="min-w-0 bg-background">
            <div className="h-36 border-b border-border bg-surface">
              <EngineeringGraphic kind={item.graphic} label={`${item.title} technical schematic`} />
            </div>
            <div className="p-6 md:p-7">
              <p className="font-mono text-[10px] text-accent">{item.number}</p>
              <h3 className="mt-3 font-display text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;