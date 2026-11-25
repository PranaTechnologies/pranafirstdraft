import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroVisual from "@/components/HeroVisual";

const HeroSection = () => (
  <section id="top" className="relative scroll-mt-20 pb-20 pt-32 md:pb-28 md:pt-40">
    <div className="mx-auto max-w-7xl px-5 md:px-10">
      <div className="grid items-end gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="max-w-2xl">
          <p className="mb-6 font-mono text-[10px] leading-relaxed text-accent sm:text-xs">
            VISUAL-INERTIAL AUTONOMY <span className="text-muted-foreground">·</span> AUTONOMY WHEN GPS DISAPPEARS
          </p>
          <h1 className="max-w-xl font-display text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            Autonomy Beyond GPS.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            We build visual-inertial navigation and perception systems that enable autonomous machines to understand where they are and navigate when GPS is unavailable, unreliable, or denied.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-none px-5">
              <a href="#technology">Explore Our Technology <ArrowDownRight aria-hidden="true" size={16} /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-none border-border px-5">
              <a href="#contact">Partner With Us</a>
            </Button>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-5 sm:max-w-md">
            <div>
              <p className="font-mono text-[10px] text-muted-foreground">01 / POSITIONING</p>
              <p className="mt-2 text-sm text-foreground">Beyond satellite signals</p>
            </div>
            <div>
              <p className="font-mono text-[10px] text-muted-foreground">02 / PERCEPTION</p>
              <p className="mt-2 text-sm text-foreground">Sensing for autonomy</p>
            </div>
          </div>
        </div>

        <div className="min-w-0 lg:pb-2">
          <HeroVisual />
          <p className="mt-3 flex items-center justify-between gap-4 font-mono text-[9px] text-muted-foreground sm:text-[10px]">
            <span>VISUAL-INERTIAL NAVIGATION VIEWPORT</span>
            <span>CONCEPTUAL VISUALIZATION</span>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;