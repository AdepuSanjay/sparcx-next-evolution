import { motion } from "framer-motion";
import { Code2, Cpu, Bot, Compass, Target } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    title: "Software Development",
    detail: "Full-cycle web platforms, APIs & cloud backends",
  },
  {
    icon: Cpu,
    title: "Embedded Digital Solutions",
    detail: "Connected hardware, IoT telemetry & dashboards",
  },
  {
    icon: Bot,
    title: "AI Agents & Automations",
    detail: "Autonomous reasoning agents & process pipelines",
  },
];

const ProofStrip = () => {
  return (
    <section className="relative py-12 dashed-y-custom bg-muted/40">
      <div className="container mx-auto px-4">
        {/* Capability Overview Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-5xl mx-auto">
          {pillars.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-3.5 p-4 rounded-2xl bg-card border border-border/80 shadow-xs hover:border-primary/40 hover:shadow-card transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-semibold text-foreground truncate">
                  {item.title}
                </div>
                <div className="text-[11px] text-muted-foreground truncate">
                  {item.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simplified Vision & Mission Overview */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-start gap-4 p-6 rounded-[24px] bg-card border border-border/80 shadow-xs relative overflow-hidden"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-primary font-bold mb-1.5">
                Our Vision
              </div>
              <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed text-justify">
                To build impactful technology products that shape a smarter, more sustainable future for businesses and communities.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start gap-4 p-6 rounded-[24px] bg-card border border-border/80 shadow-xs relative overflow-hidden"
          >
            <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
              <Target className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-accent font-bold mb-1.5">
                Our Mission
              </div>
              <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed text-justify">
                To transform ideas and business requirements into reliable, scalable, and meaningful technology solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProofStrip;
