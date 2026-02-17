import { motion } from "framer-motion";
import heroDrone from "@/assets/hero-drone.png";

const HeroSection = () =>
<section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 grid-bg" />
    <div className="absolute top-0 left-0 w-full h-px accent-line" />
    <div className="absolute top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan/3 blur-[120px]" />
    <div className="absolute bottom-20 -right-40 w-[400px] h-[400px] rounded-full bg-emerald/3 blur-[100px]" />

    <div className="section-container w-full relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Copy */}
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}>

          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-border/60 bg-muted/30 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse-dot" />
            <span className="text-xs font-body tracking-[0.15em] uppercase text-muted-foreground">Autonomous Systems</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-display font-bold leading-[1.05] mb-7 tracking-tight">Redefining <span className="accent-text">Navigation</span> beyond Satellites.</h1>

          <p className="text-base text-muted-foreground max-w-md mb-5 leading-relaxed font-light">Prana builds assorted hardware plugins for GPS-free navigation autonomy for contested environments.</p>

          <div className="flex flex-wrap gap-2.5 mb-10 max-w-md">
            {[
          { label: "Defense", id: "industry-defense" },
          { label: "Internal Security", id: "industry-internal-security" },
          { label: "Infrastructure", id: "industry-infrastructure" },
          { label: "Research & Creative", id: "industry-research-creative" }].
          map((industry) =>
          <button
            key={industry.id}
            onClick={() => document.getElementById(industry.id)?.scrollIntoView({ behavior: "smooth", block: "center" })}
            className="text-[11px] px-3 py-1.5 rounded-full border border-cyan/20 bg-cyan/5 text-cyan tracking-wide uppercase font-semibold hover:bg-cyan/10 hover:border-cyan/40 transition-colors cursor-pointer">

                {industry.label}
              </button>
          )}
          </div>

          <div className="flex flex-wrap gap-4">
            <button
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3 rounded accent-gradient text-primary-foreground font-display font-semibold tracking-wider uppercase text-sm accent-glow hover:scale-[1.03] transition-transform">

              Explore Plugins
            </button>
            <button
            onClick={() => document.getElementById("technology")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3 rounded border border-border/60 text-foreground font-display font-semibold tracking-wider uppercase text-sm hover:border-cyan/30 transition-colors">

              Our Technology
            </button>
          </div>

          {/* Inline stats */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mt-14 pt-8 border-t border-border/30">
            {[
          { value: "<5ms", label: "Response Latency", desc: "Instant reaction to commands & sensor inputs for real-time obstacle avoidance." },
          { value: "L5", label: "Full Autonomy", desc: "GPS-denied navigation without human intervention — across silos, tunnels & warehouses." },
          { value: "99.97%", label: "Uptime", desc: "Mission-critical reliability with less than 2.5 hours downtime per year." }].
          map((s) =>
          <div key={s.label} className="flex-1 min-w-0">
                <p className="font-display text-3xl sm:text-4xl font-bold accent-text">{s.value}</p>
                <p className="text-sm text-foreground/80 tracking-wide mt-1.5 font-semibold">{s.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">{s.desc}</p>
              </div>
          )}
          </div>
        </motion.div>

        {/* Right — Image */}
        <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        className="relative">

          <div className="relative rounded-xl overflow-hidden border border-border/30">
            <img
            src={heroDrone}
            alt="Stealth UAV with cyan running lights over dark terrain"
            className="w-full object-cover" />

            {/* Scan overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20 pointer-events-none" />
            <div className="absolute inset-0 scan-line pointer-events-none" />
          </div>

          {/* Corner data overlays */}
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute -bottom-4 -left-4 stat-box z-20">

            <p className="text-[10px] text-muted-foreground tracking-widest uppercase">Status</p>
            <p className="font-display font-bold text-sm text-foreground">Mission Active</p>
          </motion.div>
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute -top-4 -right-4 stat-box z-20">

            <p className="text-[10px] text-muted-foreground tracking-widest uppercase">Payload</p>
            <p className="font-display font-bold text-sm text-foreground">LiDAR + Thermal</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>;


export default HeroSection;