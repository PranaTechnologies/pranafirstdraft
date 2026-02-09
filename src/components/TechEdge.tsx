import { motion } from "framer-motion";
import { Plug, Zap, Shield, BarChart3 } from "lucide-react";

const steps = [
  { icon: Plug, label: "Connect", desc: "Snap any plugin into the universal bay." },
  { icon: Zap, label: "Activate", desc: "Auto-detection & firmware handshake in <2 s." },
  { icon: Shield, label: "Validate", desc: "Built-in diagnostics confirm integrity." },
  { icon: BarChart3, label: "Operate", desc: "Real-time telemetry streams to ground control." },
];

const TechEdge = () => (
  <section id="technology" className="section-spacing relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-50" />
    <div className="absolute top-0 left-0 w-full h-px accent-line" />

    <div className="section-container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="text-xs tracking-[0.2em] uppercase text-emerald font-semibold">Technical Edge</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 mb-4">
          <span className="accent-text">Plug-and-Play</span> Architecture
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm">
          From hardware handshake to mission-ready in seconds.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative glass-panel-hover rounded-xl p-7"
          >
            <span className="absolute top-5 right-5 font-display text-4xl font-bold text-muted-foreground/10">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="w-10 h-10 rounded-lg bg-cyan/8 text-cyan flex items-center justify-center mb-5">
              <s.icon size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-display font-bold text-lg mb-1.5 text-foreground">{s.label}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechEdge;
