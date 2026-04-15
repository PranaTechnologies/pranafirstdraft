import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Phone, X } from "lucide-react";
import { useState } from "react";

const CTASection = () => {
  const [showContact, setShowContact] = useState(false);
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSda_XI8n_Why7Bb0ISG3kd0vG2EHEMOAcq1GkcoLdHicvT7TA/viewform";

  return (
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

        <motion.a
          href={googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded accent-gradient text-primary-foreground font-display font-bold tracking-wider uppercase text-sm accent-glow"
        >
          Get in Touch
          <ArrowRight size={18} />
        </motion.a>

        <p className="mt-8 text-xs text-muted-foreground">
          or{" "}
          <button
            onClick={() => setShowContact(true)}
            className="text-cyan hover:underline cursor-pointer"
          >
            Directly Reach Us Out
          </button>
        </p>
      </motion.div>

      <AnimatePresence>
        {showContact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setShowContact(false)}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm glass-panel border border-border/60 rounded-lg p-8 z-10"
            >
              <button
                onClick={() => setShowContact(false)}
                className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>

              <h3 className="text-xl font-display font-bold mb-6 text-foreground">Contact Details</h3>

              <div className="space-y-5">
                <a
                  href="mailto:pranatechnologies15@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-cyan transition-colors group"
                >
                  <Mail size={20} className="text-cyan shrink-0" />
                  <span className="text-sm group-hover:underline">pranatechnologies15@gmail.com</span>
                </a>

                <a
                  href="tel:9090741357"
                  className="flex items-center gap-3 text-muted-foreground hover:text-cyan transition-colors group"
                >
                  <Phone size={20} className="text-cyan shrink-0" />
                  <span className="text-sm group-hover:underline">9090741357</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CTASection;
