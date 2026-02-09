import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["Products", "Technology", "Industries", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-glow-blue to-glow-green flex items-center justify-center">
            <span className="font-display font-bold text-primary-foreground text-sm">P</span>
          </div>
          <span className="font-display font-bold text-lg tracking-wide text-foreground">
            PRANA<span className="neon-text ml-1">TECH</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-glow-blue to-glow-green text-primary-foreground text-sm font-semibold glow-blue transition-all hover:scale-105"
          >
            Get Started
          </button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass-card border-t border-border/30 overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <button key={item} onClick={() => scrollTo(item)} className="text-left text-muted-foreground hover:text-primary transition-colors">
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
