const Footer = () => (
  <footer className="border-t border-border/40 px-6 py-8">
    <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2.5">
        <div className="w-5 h-5 rounded-sm accent-gradient flex items-center justify-center">
          <span className="font-display font-bold text-primary-foreground text-[10px]">P</span>
        </div>
        <span className="font-display font-semibold text-xs tracking-widest uppercase text-foreground">Prana Technologies</span>
      </div>
      <p className="text-[11px] text-muted-foreground">© {new Date().getFullYear()} Prana Technologies. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
