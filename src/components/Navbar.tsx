import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import PLMark from "@/components/PLMark";

const navItems = [
  { label: "Technology", href: "#technology" },
  { label: "Systems", href: "#systems" },
  { label: "Applications", href: "#applications" },
  { label: "Research", href: "#research" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 md:px-10">
        <a href="#top" className="flex shrink-0 items-center gap-3 text-foreground" aria-label="Perception Labs home">
          <span className="grid size-9 place-items-center border border-border text-accent">
            <PLMark className="size-6" />
          </span>
          <span className="font-display text-sm font-semibold tracking-normal sm:text-base">Perception Labs</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              {item.label}
            </a>
          ))}
          <Button asChild size="sm" className="rounded-none px-4 font-semibold">
            <a href="#contact">Partner With Us</a>
          </Button>
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          className="size-10 rounded-none lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          {open ? <X aria-hidden="true" size={19} /> : <Menu aria-hidden="true" size={19} />}
        </Button>
      </nav>

      {open && (
        <div id="mobile-navigation" className="border-t border-border bg-surface px-5 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col items-stretch gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-3 w-full rounded-none font-semibold">
              <a href="#contact" onClick={() => setOpen(false)}>Partner With Us</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;