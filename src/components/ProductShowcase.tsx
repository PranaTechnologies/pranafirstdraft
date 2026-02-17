import { motion } from "framer-motion";
import { Radar, Eye, Cpu, ChevronRight } from "lucide-react";
import sensorFusionImg from "@/assets/sensor-fusion.png";
import aiNavigationImg from "@/assets/ai-navigation.png";
import companionComputerImg from "@/assets/companion-computer.png";

const products = [
  {
    icon: Radar,
    image: sensorFusionImg,
    title: "Sensor Fusion & Advancement",
    description: "Integrated sensor fusion modules that combine LiDAR, thermal, and multispectral inputs into a single intelligence layer. Delivering real-time 3D mapping, anomaly detection, and material insights for superior situational awareness.",
    specs: [
      { capability: "360° LiDAR + Vision Fusion", detail: "Centimeter-level spatial accuracy" },
      { capability: "Thermal-Visual Overlays", detail: "Detect heat signatures with contextual clarity" },
      { capability: "Multispectral Integration", detail: "Uncover hidden patterns & material properties" },
    ],
  },
  {
    icon: Eye,
    image: aiNavigationImg,
    title: "AI-Driven Navigation",
    description: "A vision-first autonomy stack that enables drones and robots to navigate contested, GPS-denied environments with confidence. Powered by deep learning and adaptive path planning for resilient operations.",
    specs: [
      { capability: "Visual SLAM", detail: "Real-time localization & mapping without GPS" },
      { capability: "Deep Learning Path Planning", detail: "Intelligent obstacle avoidance & terrain recognition" },
      { capability: "GNSS Fallback", detail: "Seamless transition when satellite signals are available" },
    ],
  },
  {
    icon: Cpu,
    image: companionComputerImg,
    title: "Companion Computer",
    description: "Edge-compute modules designed for fleet-level intelligence. Each unit processes AI locally while sharing perceptions across the fleet, enabling collaborative decision-making in GPS-denied missions.",
    specs: [
      { capability: "Edge AI Inference", detail: "Real-time onboard decision-making" },
      { capability: "Fleet Coordination", detail: "Drones build a unified situational map" },
      { capability: "Intra-Fleet Comms", detail: "Secure, low-latency data exchange" },
    ],
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
            <div className="relative w-full h-40 rounded-lg overflow-hidden mb-6">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-3 left-3 w-9 h-9 rounded-lg bg-cyan/10 backdrop-blur-sm text-cyan flex items-center justify-center">
                <p.icon size={18} strokeWidth={1.5} />
              </div>
            </div>

            <h3 className="font-display font-bold text-xl mb-1 text-foreground">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{p.description}</p>

            <div className="space-y-3 mb-6">
              {p.specs.map((s) => (
                <div key={s.capability} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan/70 mt-2 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-foreground/90 leading-snug">{s.capability}</span>
                    <span className="text-[11px] text-muted-foreground leading-relaxed mt-0.5">{s.detail}</span>
                  </div>
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
