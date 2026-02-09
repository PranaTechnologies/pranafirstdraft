import { motion } from "framer-motion";
import { Radar, Eye, Cpu, ChevronRight } from "lucide-react";

const products = [
  {
    icon: Radar,
    title: "Sensor Enhancement",
    subtitle: "LiDAR · Thermal · Multispectral",
    description: "Plug-and-play sensor modules delivering real-time 3D mapping, thermal imaging, and multispectral analysis for unmatched situational awareness.",
    specs: ["360° LiDAR coverage", "IR thermal overlay", "Multispectral bands"],
  },
  {
    icon: Eye,
    title: "AI-Driven Navigation",
    subtitle: "Computer Vision · GPS-Denied Autonomy",
    description: "Vision-first autonomy stack enabling obstacle avoidance, terrain recognition, and GPS-denied navigation in contested environments.",
    specs: ["Visual SLAM", "Deep learning path planning", "GNSS fallback"],
  },
  {
    icon: Cpu,
    title: "Companion Computer",
    subtitle: "Tactical & Long-Range Missions",
    description: "Edge-compute modules with AI inference capability, supporting real-time decision-making for tactical and long-endurance missions.",
    specs: ["Edge AI inference", "Encrypted comms", "Mission autonomy"],
  },
];

const ProductShowcase = () => (
  <section id="products" className="section-spacing relative">
    <div className="absolute top-0 left-0 w-full h-px accent-line" />

    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <span className="text-xs tracking-[0.2em] uppercase text-cyan font-semibold">Plugin Ecosystem</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 mb-4">
          Modular <span className="accent-text">Intelligence</span>
        </h2>
        <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
          Every plugin is engineered for seamless integration — snap it in, power it up, and extend your fleet's capability.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="group glass-panel-hover rounded-xl p-7 flex flex-col"
          >
            <div className="w-11 h-11 rounded-lg bg-cyan/8 text-cyan flex items-center justify-center mb-6">
              <p.icon size={22} strokeWidth={1.5} />
            </div>

            <h3 className="font-display font-bold text-xl mb-0.5 text-foreground">{p.title}</h3>
            <p className="text-[11px] text-muted-foreground tracking-[0.12em] uppercase mb-4">{p.subtitle}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{p.description}</p>

            <div className="space-y-2 mb-6">
              {p.specs.map((s) => (
                <div key={s} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-1 h-1 rounded-full bg-cyan/60" />
                  {s}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-1 text-xs font-semibold text-cyan opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
              Learn more <ChevronRight size={14} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductShowcase;
