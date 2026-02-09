import { motion } from "framer-motion";
import heroDrone from "@/assets/hero-drone.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden grid-overlay">
    {/* Decorative elements */}
    <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-glow-blue/5 blur-3xl" />
    <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-glow-green/5 blur-3xl" />

    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-6">
          <span className="w-2 h-2 rounded-full bg-glow-green animate-pulse-glow" />
          <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Modular UAV Ecosystem</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
          Breathing{" "}
          <span className="neon-text">Intelligence</span>{" "}
          into Autonomy.
        </h1>

        <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
          Advanced plugin ecosystems engineered to push the boundaries of UAV performance and robotic versatility.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-glow-blue to-glow-green text-primary-foreground font-display font-semibold glow-blue hover:scale-105 transition-transform"
          >
            Explore Plugins
          </button>
          <button
            onClick={() => document.getElementById("technology")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-lg glass-card font-display font-semibold text-foreground hover:border-primary/40 transition-colors"
          >
            Our Technology
          </button>
        </div>
      </motion.div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-glow-blue/10 to-glow-green/10 rounded-3xl blur-2xl" />
        <img
          src={heroDrone}
          alt="Prana Technologies modular drone with glowing plugin nodes"
          className="relative z-10 w-full max-w-xl animate-float drop-shadow-2xl"
        />
        {/* Floating stat badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-4 left-4 glass-card rounded-xl px-4 py-3 z-20"
        >
          <p className="text-xs text-muted-foreground">Latency</p>
          <p className="font-display font-bold text-lg neon-text">&lt;5ms</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="absolute top-8 right-4 glass-card rounded-xl px-4 py-3 z-20"
        >
          <p className="text-xs text-muted-foreground">Autonomy</p>
          <p className="font-display font-bold text-lg neon-text">Level 5</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
