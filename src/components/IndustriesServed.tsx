import { motion } from "framer-motion";
import { ShieldCheck, Landmark, HardHat, ScanEye } from "lucide-react";

const industries = [
  {
    icon: ShieldCheck,
    title: "Defense",
    description: "Tactical UAV intelligence for mission-critical operations in contested environments.",
    tags: ["ISR", "Electronic Warfare", "Swarm Ops"],
  },
  {
    icon: ScanEye,
    title: "Internal Security",
    description: "Periphery monitoring, crowd analytics, and disaster rescue operations at scale.",
    tags: ["Surveillance", "SAR", "Perimeter Defense"],
  },
  {
    icon: HardHat,
    title: "Infrastructure Inspection",
    description: "Autonomous navigation in silos, tunnels, and industrial sites for zero-downtime inspections.",
    tags: ["Pipeline", "Bridge", "Powerline"],
  },
  {
    icon: Landmark,
    title: "Research & Creative",
    description: "Enabling exploration with precision mapping, aerial cinematography, and environmental sensing.",
    tags: ["GIS Mapping", "Cinematography", "AgriTech"],
  },
];

const IndustriesServed = () => (
  <section id="industries" className="section-padding bg-navy text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 grid-overlay opacity-20" />
    <div className="absolute top-0 left-0 w-full h-px neon-line opacity-40" />

    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-glow-green mb-3 block">Sectors</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Industries We <span className="neon-text">Serve</span>
        </h2>
        <p className="text-primary-foreground/60 max-w-2xl mx-auto">
          From battlefield to boardroom — our modular stack adapts to every mission profile.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm p-8 hover:border-glow-blue/40 transition-all duration-500"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-glow-blue/15 text-glow-blue flex items-center justify-center shrink-0">
                <ind.icon size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2">{ind.title}</h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed mb-4">{ind.description}</p>
                <div className="flex flex-wrap gap-2">
                  {ind.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full border border-primary-foreground/15 text-primary-foreground/50">
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
