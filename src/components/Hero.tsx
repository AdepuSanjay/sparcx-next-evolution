import { ArrowRight, Sparkles, Code2, Zap, Cpu, Bot } from "lucide-react";
import { motion } from "framer-motion";

const servicePillars = [
  {
    icon: Code2,
    title: "Software Development",
    badge: "Cloud & Web",
    desc: "Tailored web platforms, robust APIs & scalable cloud backends.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
  },
  {
    icon: Cpu,
    title: "Embedded Digital Solutions",
    badge: "IoT & Hardware",
    desc: "Connected devices, sensor data ingestion & real-time telemetry dashboards.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
  },
  {
    icon: Bot,
    title: "AI Agents & Automations",
    badge: "Autonomous AI",
    desc: "Intelligent reasoning agents, workflow pipelines & process automation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
  },
];

const Hero = () => {
  return (
    <section id="home" className="relative pt-30 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-background">
      {/* CodeDale Ambient Radial Glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[680px] h-[320px] bg-gradient-to-b from-primary/15 via-primary/5 to-transparent blur-[100px] pointer-events-none -z-10" />

      {/* Subtle Dot Mesh Pattern */}
      <div className="absolute inset-0 codedale-dot-pattern opacity-35 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4">
        {/* Eyebrow Badge */}
        <motion.div
          className="flex justify-center mb-5"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/5 text-primary text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span>Technology Solutions & Product Innovation · Hyderabad</span>
          </div>
        </motion.div>

        {/* Refined Headline (Balanced, Moderate Font Sizes) */}
        <motion.div
          className="text-center max-w-3xl mx-auto space-y-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.2]">
            <span className="inline-flex items-center justify-center flex-wrap gap-2">
              Building Technology.
              <span className="hidden sm:inline-flex logo-shadow bg-card border border-border/80 rounded-lg w-8 h-8 rotate-12 items-center justify-center text-primary shadow-xs hover:rotate-0 transition-transform duration-300">
                <Code2 className="w-4 h-4" />
              </span>
              <span className="hidden sm:inline-flex logo-shadow bg-card border border-border/80 rounded-lg w-8 h-8 -rotate-12 items-center justify-center text-accent shadow-xs hover:rotate-0 transition-transform duration-300">
                <Sparkles className="w-4 h-4" />
              </span>
            </span>
            <br />
            <span className="inline-flex items-center justify-center flex-wrap gap-2">
              Creating{" "}
              <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                Real Impact.
              </span>
              <span className="hidden sm:inline-flex logo-shadow bg-card border border-border/80 rounded-lg w-8 h-8 rotate-6 items-center justify-center text-primary shadow-xs hover:rotate-0 transition-transform duration-300">
                <Zap className="w-4 h-4" />
              </span>
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            SPARCX Solutions is a technology solutions and product innovation company based in Hyderabad, India. We engineer custom software, embedded digital solutions, and autonomous AI automation pipelines tailored to business requirements.
          </p>

          {/* CTA Pill Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a href="#services" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto rounded-full bg-primary hover:bg-primary-light text-primary-foreground font-semibold px-7 py-3 text-xs sm:text-sm shadow-sm hover:shadow-elegant hover:scale-102 transition-all duration-300 flex items-center justify-center gap-2 group">
                Explore Services
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>

            <a href="#contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto rounded-full bg-card hover:bg-muted text-foreground border border-border/90 font-semibold px-7 py-3 text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-xs">
                Work With Us
              </button>
            </a>
          </div>
        </motion.div>

        {/* 3 Core Capability Cards with Curated Imagery */}
        <motion.div
          className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          {servicePillars.map((pillar) => {
            const PillarIcon = pillar.icon;
            return (
              <a
                key={pillar.title}
                href="#services"
                className="group relative rounded-[22px] bg-card border border-border/80 shadow-xs hover:border-primary/50 hover:shadow-elegant hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Visual Image Header */}
                <div className="relative h-36 w-full overflow-hidden bg-muted">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-background/90 backdrop-blur-md text-foreground border border-border/70 shadow-xs">
                    {pillar.badge}
                  </span>

                  {/* Icon Badge */}
                  <div className="absolute bottom-2 right-3 w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-md">
                    <PillarIcon className="h-4 w-4" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed text-justify">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-primary">
                    <span>Learn details</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
