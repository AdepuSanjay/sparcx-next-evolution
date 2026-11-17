import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-tech.png";

const impactBadges = [
  { icon: ShieldCheck, label: "Enterprise Reliability" },
  { icon: Zap, label: "Scalable Architecture" },
  { icon: Sparkles, label: "Real-World Impact" },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Premium ambient background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-[28rem] h-[28rem] bg-accent/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                SPARCX SOLUTIONS · EMPOWERING INNOVATION
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-5">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                Building Technology.
                <br />
                <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                  Creating Impact.
                </span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-justify sm:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
              >
                SPARCX Solutions develops innovative software, intelligent digital solutions, and scalable products that solve real-world problems.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <a href="#projects">
                <Button
                  variant="corporate"
                  size="lg"
                  className="group shadow-elegant hover:shadow-glow transition-all px-8 py-6 text-base font-semibold w-full sm:w-auto"
                >
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </Button>
              </a>
              <a href="#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-accent/10 hover:border-accent hover:text-accent transition-all px-8 py-6 text-base font-semibold w-full sm:w-auto"
                >
                  <Sparkles className="mr-2 h-4 w-4 text-accent" />
                  Work With Us
                </Button>
              </a>
            </motion.div>

            {/* Value / Trust Badges */}
            <motion.div
              className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-3 border-t border-border/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {impactBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground">
                  <badge.icon className="h-4 w-4 text-accent" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Hero Graphic Showcase */}
          <motion.div
            className="relative lg:pl-6"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Ambient Backlight Glow */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-accent rounded-full blur-3xl opacity-30 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-25 -z-10" />

            {/* Main Visual Card */}
            <motion.div
              className="relative rounded-3xl overflow-hidden border border-border/80 bg-card/50 backdrop-blur-sm p-4 sm:p-6 shadow-elegant"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={heroImage}
                alt="SPARCX Solutions technology and digital innovation"
                className="w-full h-auto object-contain rounded-2xl drop-shadow-xl"
                width={1024}
                height={1024}
              />

              {/* Floating Feature Glass Badges */}
              <motion.div
                className="absolute top-8 left-6 bg-card/90 backdrop-blur-md border border-border rounded-xl px-4 py-2.5 shadow-card hidden sm:flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">Intelligent Solutions</div>
                  <div className="text-[10px] text-muted-foreground">Purpose-built for impact</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-8 right-6 bg-card/90 backdrop-blur-md border border-border rounded-xl px-4 py-2.5 shadow-card hidden sm:flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">Scalable Products</div>
                  <div className="text-[10px] text-muted-foreground">Engineered to grow</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
