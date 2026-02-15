import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle } from "lucide-react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().max(200).optional(),
  mission: z.string().trim().min(1, "Mission requirements are required").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

interface ContactFormDialogProps {
  open: boolean;
  onClose: () => void;
}

const ContactFormDialog = ({ open, onClose }: ContactFormDialogProps) => {
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", company: "", mission: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof ContactForm;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setForm({ name: "", email: "", company: "", mission: "" });
      setErrors({});
      setSubmitted(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg glass-panel border border-border/60 rounded-lg p-8 z-10"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <CheckCircle className="mx-auto mb-4 text-cyan" size={48} />
                <h3 className="font-display text-2xl font-bold mb-2">Message Received</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Our engineering team will review your requirements and respond within 24 hours.
                </p>
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded accent-gradient text-primary-foreground font-display font-bold tracking-wider uppercase text-sm accent-glow"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-bold mb-1">Get in Touch</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Tell us about your mission. We'll design a solution.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="cf-name" className="text-xs uppercase tracking-wider text-muted-foreground">
                      Name <span className="text-cyan">*</span>
                    </Label>
                    <Input
                      id="cf-name"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your full name"
                      className="bg-background/50 border-border/60 focus-visible:ring-cyan/40"
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="cf-email" className="text-xs uppercase tracking-wider text-muted-foreground">
                      Email <span className="text-cyan">*</span>
                    </Label>
                    <Input
                      id="cf-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="you@company.com"
                      className="bg-background/50 border-border/60 focus-visible:ring-cyan/40"
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="cf-company" className="text-xs uppercase tracking-wider text-muted-foreground">
                      Company
                    </Label>
                    <Input
                      id="cf-company"
                      value={form.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      placeholder="Your organization"
                      className="bg-background/50 border-border/60 focus-visible:ring-cyan/40"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="cf-mission" className="text-xs uppercase tracking-wider text-muted-foreground">
                      Mission Requirements <span className="text-cyan">*</span>
                    </Label>
                    <Textarea
                      id="cf-mission"
                      value={form.mission}
                      onChange={(e) => handleChange("mission", e.target.value)}
                      placeholder="Describe your mission profile, platform requirements, and integration needs..."
                      rows={4}
                      className="bg-background/50 border-border/60 focus-visible:ring-cyan/40 resize-none"
                    />
                    {errors.mission && <p className="text-xs text-destructive">{errors.mission}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded accent-gradient text-primary-foreground font-display font-bold tracking-wider uppercase text-sm accent-glow mt-2"
                  >
                    Submit Request
                    <Send size={16} />
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormDialog;
