import { motion } from "framer-motion";
import { Radar, Eye, Cpu } from "lucide-react";

const products = [
  {
    icon: Radar,
    title: "Sensor Enhancement",
    subtitle: "LiDAR · Thermal · Multispectral",
    description:
      "Plug-and-play sensor modules delivering real-time 3D mapping, thermal imaging, and multispectral analysis for unmatched situational awareness.",
    specs: ["360° LiDAR coverage", "IR thermal overlay", "Multispectral bands"],
    color: "glow-blue" as const,
  },
  {
    icon: Eye,
    title: "AI-Driven Navigation",
    subtitle: "Computer Vision · GPS-Denied Autonomy",
    description:
      "Vision-first autonomy stack enabling obstacle avoidance, terrain recognition, and GPS-denied navigation in contested or subterranean environments.",
    specs: ["Visual SLAM", "Deep learning path planning", "GNSS fallback"],
    color: "glow-green" as const,
  },
  {
    icon: Cpu,
    title: "Onboard Companion Computer",
    subtitle: "Tactical & Long-Range Missions",
    description:
      "Edge-compute modules with AI inference capability, supporting real-time decision-making at the edge for tactical and long-endurance missions.",
    specs: ["Edge AI inference", "Encrypted comms", "Mission autonomy"],
    color: "glow-blue" as const,
  },
];

const ProductShowcase = () => (
  <section id="products" className="section-padding relative">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">Plugin Ecosystem</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Modular <span className="neon-text">Intelligence</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every plugin is engineered for seamless integration — snap it in, power it up, and extend your fleet's capability.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group glass-card-hover rounded-2xl p-8 flex flex-col"
          >
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                p.color === "glow-blue"
                  ? "bg-glow-blue/10 text-glow-blue"
                  : "bg-glow-green/10 text-glow-green"
              }`}
            >
              <p.icon size={28} />
            </div>

            <h3 className="font-display font-bold text-xl mb-1">{p.title}</h3>
            <p className="text-xs text-muted-foreground tracking-wide uppercase mb-4">{p.subtitle}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{p.description}</p>

            <ul className="space-y-2">
              {p.specs.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm">
                  <span className={`w-1.5 h-1.5 rounded-full ${p.color === "glow-blue" ? "bg-glow-blue" : "bg-glow-green"}`} />
                  {s}
                </li>
              ))}
            </ul>

            {/* Bottom neon line */}
            <div className="mt-8 h-px w-full neon-line opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductShowcase;
