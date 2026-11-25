import FlowDiagram from "@/components/FlowDiagram";

const pillars = [
  {
    number: "01",
    title: "Navigation — Visual-Inertial Odometry",
    description: "Combining camera and inertial measurements to estimate motion and maintain navigation without relying exclusively on satellite positioning.",
  },
  {
    number: "02",
    title: "Perception — Spatial Understanding",
    description: "Extracting meaningful information from the surrounding environment through cameras, depth sensors, and spatial perception.",
  },
  {
    number: "03",
    title: "Localization — Robust Position Estimation",
    description: "Developing algorithms that improve motion estimation, localization, and trajectory consistency in challenging environments.",
  },
  {
    number: "04",
    title: "Edge Intelligence — Onboard Autonomy",
    description: "Running computationally efficient perception and navigation systems directly on embedded platforms.",
  },
];

const TechEdge = () => (
  <section id="technology" className="scroll-mt-20 py-20 md:py-32">
    <div className="mx-auto max-w-7xl px-5 md:px-10">
      <div className="mb-14 grid gap-8 md:grid-cols-[0.72fr_1.28fr] md:items-end md:gap-16">
        <div>
          <p className="font-mono text-[10px] text-accent">02 / OUR TECHNOLOGY</p>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">A stack built around onboard sensing.</h2>
        </div>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground">
          We develop the building blocks that help autonomous machines estimate motion, interpret their surroundings, and make use of onboard computation when satellite positioning is not dependable.
        </p>
      </div>

      <div className="grid gap-10 border-y border-border py-8 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <p className="font-mono text-[10px] text-muted-foreground">ONBOARD PERCEPTION PIPELINE</p>
            <h3 className="mt-4 max-w-sm font-display text-2xl font-medium leading-snug text-foreground">From sensor observations to machine autonomy.</h3>
          </div>
          <FlowDiagram
            label="Onboard sensing to embedded autonomy architecture"
            steps={["Onboard sensing", "State estimation", "Embedded autonomy"]}
          />
        </div>

        <div className="divide-y divide-border">
          {pillars.map((pillar) => (
            <article key={pillar.number} className="grid gap-3 py-5 sm:grid-cols-[44px_1fr] sm:gap-5">
              <p className="pt-1 font-mono text-xs text-accent">{pillar.number}</p>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">{pillar.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{pillar.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TechEdge;