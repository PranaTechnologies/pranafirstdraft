const Footer = () => (
  <footer className="border-t border-border/50 px-6 py-8 text-center">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-gradient-to-br from-glow-blue to-glow-green flex items-center justify-center">
          <span className="font-display font-bold text-primary-foreground text-xs">P</span>
        </div>
        <span className="font-display font-semibold text-sm text-foreground">PRANA TECHNOLOGIES</span>
      </div>
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Prana Technologies. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
