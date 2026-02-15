import { motion } from "framer-motion";
import { ShieldCheck, Landmark, HardHat, ScanEye } from "lucide-react";

const industries = [
  {
    id: "industry-defense",
    icon: ShieldCheck,
    title: "Defense",
    description: "Tactical UAV intelligence for mission-critical operations in contested environments.",
    tags: ["ISR", "Electronic Warfare", "Swarm Ops"],
  },
  {
    id: "industry-internal-security",
    icon: ScanEye,
    title: "Internal Security",
    description: "Periphery monitoring, crowd analytics, and disaster rescue operations at scale.",
    tags: ["Surveillance", "SAR", "Perimeter Defense"],
  },
  {
    id: "industry-infrastructure",
    icon: HardHat,
    title: "Infrastructure",
    description: "Autonomous navigation in silos, tunnels, and industrial sites for zero-downtime inspections.",
    tags: ["Pipeline", "Bridge", "Powerline"],
  },
  {
    id: "industry-research-creative",
    icon: Landmark,
    title: "Research & Creative",
    description: "Precision mapping, aerial cinematography, and environmental sensing for exploration.",
    tags: ["GIS Mapping", "Cinematography", "AgriTech"],
  },
];

const IndustriesServed = () => (
  <section id="industries" className="section-spacing relative overflow-hidden bg-slate-elevated">
    <div className="absolute top-0 left-0 w-full h-px accent-line" />
    <div className="absolute inset-0 grid-bg opacity-30" />

    <div className="section-container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <span className="text-xs tracking-[0.2em] uppercase text-emerald font-semibold">Sectors</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 mb-4">
          Industries We <span className="accent-text">Serve</span>
        </h2>
        <p className="text-muted-foreground max-w-xl text-sm">
          From battlefield to boardroom — our modular stack adapts to every mission profile.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.title}
            id={ind.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group glass-panel-hover rounded-xl p-7"
          >
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-lg bg-cyan/8 text-cyan flex items-center justify-center shrink-0 mt-0.5">
                <ind.icon size={20} strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-bold text-lg mb-1.5 text-foreground">{ind.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{ind.description}</p>
                <div className="flex flex-wrap gap-2">
                  {ind.tags.map((t) => (
                    <span key={t} className="text-[10px] px-2.5 py-1 rounded border border-border/60 text-muted-foreground tracking-wide uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesServed;
