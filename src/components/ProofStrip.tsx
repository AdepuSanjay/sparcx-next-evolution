import { motion } from "framer-motion";
import { Compass, Target } from "lucide-react";

const ProofStrip = () => {
  return (
    <section className="relative py-10 dashed-y-custom bg-muted/40">
      <div className="container mx-auto px-4">
        {/* Simplified Vision & Mission Overview */}
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex items-start gap-4 p-5 sm:p-6 rounded-[22px] bg-card border border-border/80 shadow-xs relative overflow-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-primary font-bold mb-1">
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
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-start gap-4 p-5 sm:p-6 rounded-[22px] bg-card border border-border/80 shadow-xs relative overflow-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
              <Target className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-accent font-bold mb-1">
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
