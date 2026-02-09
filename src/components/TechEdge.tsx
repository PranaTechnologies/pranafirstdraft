import { motion } from "framer-motion";
import { Plug, Zap, Shield, BarChart3 } from "lucide-react";

const steps = [
  { icon: Plug, label: "Connect", desc: "Snap any plugin into the universal bay." },
  { icon: Zap, label: "Activate", desc: "Auto-detection & firmware handshake in <2 s." },
  { icon: Shield, label: "Validate", desc: "Built-in diagnostics confirm integrity." },
  { icon: BarChart3, label: "Operate", desc: "Real-time telemetry streams to ground control." },
];

const TechEdge = () => (
  <section id="technology" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 grid-overlay opacity-50" />

    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-3 block">Technical Edge</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Seamless Integration.{" "}
          <span className="neon-text">Plug-and-Play</span> Architecture.
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From hardware handshake to mission-ready in seconds — our open architecture eliminates integration friction.
        </p>
      </motion.div>

      {/* Workflow steps */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="relative glass-card-hover rounded-2xl p-8 text-center"
          >
            {/* Step number */}
            <span className="absolute top-4 right-4 font-display text-5xl font-bold text-muted/60">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5">
              <s.icon size={24} />
            </div>
            <h3 className="font-display font-bold text-lg mb-2">{s.label}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Connecting neon line */}
      <div className="hidden lg:block mx-auto mt-[-72px] mb-8 w-[calc(100%-160px)] h-px neon-line opacity-30 relative z-0" />
    </div>
  </section>
);

export default TechEdge;
