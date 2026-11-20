import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const OurProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-muted/40 relative overflow-hidden dashed-y-custom">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto rounded-[32px] border border-border/80 bg-card p-6 sm:p-10 text-center relative overflow-hidden shadow-xs"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle ambient blur */}
          <div className="absolute top-0 right-0 size-60 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 size-60 bg-accent/10 rounded-full blur-3xl -z-10" />

          {/* Visual Innovation Graphic */}
          <div className="relative h-36 sm:h-44 w-full rounded-[22px] overflow-hidden mb-6 border border-border/80 shadow-xs bg-muted">
            <img
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000"
              alt="SPARCX Product Innovation Lab"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-3 text-foreground">
            Our Products —{" "}
            <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
              Coming Soon
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6">
            We are actively designing and engineering proprietary digital products, intelligent tools, and business automation platforms. We will officially introduce our products here as they launch.
          </p>

          <div className="inline-flex flex-col sm:flex-row items-center gap-3 justify-center">
            <a href="#contact">
              <button className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:shadow-elegant hover:scale-102 transition-all inline-flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" />
                Collaborate on a Product Idea
              </button>
            </a>
            <a href="#services">
              <button className="px-6 py-2.5 rounded-full bg-card border border-border/80 text-foreground font-semibold text-xs sm:text-sm hover:border-primary/40 transition-all inline-flex items-center gap-2 shadow-xs">
                Explore Core Services
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProductsSection;
