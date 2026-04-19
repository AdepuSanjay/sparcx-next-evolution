import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-tech.png";

const floatingLogos = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", className: "top-[8%] -left-4 w-12 h-12 md:w-14 md:h-14", delay: 0 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js", className: "top-[20%] -right-2 w-12 h-12 md:w-14 md:h-14", delay: 0.4 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript", className: "bottom-[28%] -left-6 w-11 h-11 md:w-12 md:h-12", delay: 0.8 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB", className: "bottom-[10%] -right-4 w-12 h-12 md:w-14 md:h-14", delay: 1.2 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker", className: "top-[45%] -right-8 w-11 h-11 md:w-12 md:h-12", delay: 0.6 },
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mt-2.5 md:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                ✨ Full Stack Development Excellence
              </motion.div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                We Build{" "}
                <span className="text-foreground">Modern, Scalable</span>{" "}
                Web Solutions
              </h1>
              <p className="text-sm md:text-base lg:text-xl text-muted-foreground leading-relaxed text-justify">
                As a dedicated team of full stack developers, we create reliable,
                high-performance digital products tailored to your goals. From backend
                APIs to modern user interfaces, we engineer every layer with precision.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services">
                <Button variant="outline" size="lg" className="bg-background text-foreground border-border">
                  Learn More About Our Process
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#projects">
                <Button variant="outline" size="lg" className="group hover-lift">
                  <Play className="mr-2 h-4 w-4" />
                  View Our Work
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Hero Image with floating tech logos */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={heroImage}
                alt="Full stack development tech stack illustration"
                className="w-full h-auto object-contain drop-shadow-2xl"
                width={1024}
                height={1024}
              />
            </motion.div>

            {/* Floating tech logos */}
            {floatingLogos.map((logo) => (
              <motion.div
                key={logo.alt}
                className={`absolute ${logo.className} bg-card/90 backdrop-blur-md rounded-2xl shadow-card p-2 flex items-center justify-center border border-border`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  opacity: { delay: logo.delay, duration: 0.5 },
                  scale: { delay: logo.delay, duration: 0.5, type: "spring" },
                  y: { duration: 3 + logo.delay, repeat: Infinity, ease: "easeInOut", delay: logo.delay },
                }}
                whileHover={{ scale: 1.15, rotate: 8 }}
              >
                <img src={logo.src} alt={logo.alt} className="w-full h-full object-contain" loading="lazy" />
              </motion.div>
            ))}

            {/* Glow blobs */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-accent rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-primary rounded-full blur-3xl opacity-20 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
