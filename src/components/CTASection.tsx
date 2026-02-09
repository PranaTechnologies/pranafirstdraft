import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section id="contact" className="section-spacing relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px accent-line" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan/3 blur-[120px]" />

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="section-container text-center relative z-10"
    >
      <h2 className="text-4xl md:text-6xl font-display font-bold mb-5">
        Elevate Your <span className="accent-text">Fleet</span>.
      </h2>
      <p className="text-sm text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
        Contact our engineering team for custom integration. We design, test, and deploy modular solutions tailored to your mission.
      </p>

      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center gap-3 px-8 py-3.5 rounded accent-gradient text-primary-foreground font-display font-bold tracking-wider uppercase text-sm accent-glow"
      >
        Get in Touch
        <ArrowRight size={18} />
      </motion.button>

      <p className="mt-8 text-xs text-muted-foreground">
        or email{" "}
        <a href="mailto:contact@pranatech.com" className="text-cyan hover:underline">
          contact@pranatech.com
        </a>
      </p>
    </motion.div>
  </section>
);

export default CTASection;
