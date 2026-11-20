import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-10 sm:pt-32 md:pt-40 md:pb-20 overflow-hidden bg-background">
      {/* Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[680px] h-[320px] bg-gradient-to-b from-primary/15 via-primary/5 to-transparent blur-[100px] pointer-events-none -z-10" />

      {/* Dot Pattern */}
      <div className="absolute inset-0 codedale-dot-pattern opacity-35 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">

          {/* Left Column — Content */}
          <motion.div
            className="space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/5 text-primary text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span>Technology Solutions · Hyderabad</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-foreground leading-[1.15]">
              Building Technology.
              <br />
              Creating{" "}
              <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                Real Impact.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              We engineer custom software, embedded digital solutions, and autonomous AI automation pipelines — tailored to your business requirements.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <a href="#services" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto rounded-full bg-primary hover:bg-primary-light text-primary-foreground font-semibold px-7 py-3 text-xs sm:text-sm shadow-sm hover:shadow-elegant hover:scale-102 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer">
                  Explore Services
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto rounded-full bg-card hover:bg-muted text-foreground border border-border/90 font-semibold px-7 py-3 text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-xs cursor-pointer">
                  Work With Us
                </button>
              </a>
            </div>
          </motion.div>

          {/* Right Column — Professional Image Composition */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Main Hero Image */}
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Soft ambient glow behind image */}
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/15 via-accent/8 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="relative rounded-[28px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                  alt="Team collaboration on technology solutions"
                  className="w-full h-[280px] sm:h-[340px] lg:h-[400px] object-cover"
                  style={{
                    maskImage: "radial-gradient(ellipse 85% 80% at 50% 45%, black 40%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 85% 80% at 50% 45%, black 40%, transparent 100%)",
                  }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
