import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ContactFormDialogProps {
  open: boolean;
  onClose: () => void;
}

const ContactFormDialog = ({ open, onClose }: ContactFormDialogProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[700px] max-h-[90vh] glass-panel border border-border/60 rounded-lg p-2 pt-10 z-10 overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors z-20"
            >
              <X size={20} />
            </button>

            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSda_XI8n_Why7Bb0ISG3kd0vG2EHEMOAcq1GkcoLdHicvT7TA/viewform?embedded=true"
              width="100%"
              height="900"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded"
            >
              Loading…
            </iframe>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormDialog;
