import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section id="contact" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 grid-overlay opacity-30" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-glow-blue/5 blur-3xl" />

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center relative z-10"
    >
      <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
        Elevate Your <span className="neon-text">Fleet</span>.
      </h2>
      <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
        Contact our engineering team for custom integration. We'll design, test, and deploy modular solutions tailored to your mission.
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-glow-blue to-glow-green text-primary-foreground font-display font-bold text-lg glow-blue transition-shadow hover:shadow-[0_0_40px_hsl(207_90%_54%/0.4)]"
      >
        Get in Touch
        <ArrowRight size={20} />
      </motion.button>

      <p className="mt-6 text-sm text-muted-foreground">
        Or reach us at{" "}
        <a href="mailto:contact@pranatech.com" className="text-primary hover:underline">
          contact@pranatech.com
        </a>
      </p>
    </motion.div>
  </section>
);

export default CTASection;
