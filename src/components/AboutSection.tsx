import { Eye, Target, Code, Lightbulb, Cpu, Shield } from "lucide-react";
import { motion } from "framer-motion";
import aboutImage from "@/assets/about-team.png";

const pillars = [
  {
    icon: Code,
    title: "Software Development",
    description: "Designing and engineering robust, production-ready web and enterprise software.",
  },
  {
    icon: Lightbulb,
    title: "Digital Innovation",
    description: "Harnessing creative intelligence and modern tech paradigms to solve tough challenges.",
  },
  {
    icon: Cpu,
    title: "Scalable Products",
    description: "Constructing modular, future-proof architectures built for speed, resilience, and expansion.",
  },
  {
    icon: Shield,
    title: "Practical Impact",
    description: "Delivering real, measurable value for organizations, businesses, and communities.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-xs tracking-wider uppercase mb-4">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Engineering Practical Solutions for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Real-World Impact
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-justify sm:text-center">
              SPARCX Solutions is a technology-driven company focused on software development, digital innovation, and building scalable products. We combine technology, creativity, and problem-solving to deliver practical solutions for businesses and communities.
            </p>
          </motion.div>

          {/* Vision & Mission Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Vision Card */}
            <motion.div
              className="relative p-8 rounded-2xl border border-primary/25 bg-gradient-to-br from-card via-card to-primary/5 shadow-card hover:shadow-elegant transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Eye className="h-7 w-7" />
              </div>
              <div className="text-xs uppercase tracking-widest text-primary font-bold mb-2">
                Our Vision
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                Shaping a Smarter, Sustainable Future
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                To build impactful technology products that shape a smarter, more sustainable future.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              className="relative p-8 rounded-2xl border border-accent/25 bg-gradient-to-br from-card via-card to-accent/5 shadow-card hover:shadow-elegant transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <Target className="h-7 w-7" />
              </div>
              <div className="text-xs uppercase tracking-widest text-accent font-bold mb-2">
                Our Mission
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                Turning Ideas Into Meaningful Solutions
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                To transform ideas into reliable, scalable, and meaningful technology solutions.
              </p>
            </motion.div>
          </div>

          {/* Image + 4 Core Pillars layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute -top-10 -left-10 w-56 h-56 bg-accent/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />

              <motion.div
                className="relative rounded-2xl overflow-hidden border border-border/80 bg-card/60 backdrop-blur-sm p-4 shadow-card"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={aboutImage}
                  alt="SPARCX Solutions team collaborating"
                  className="w-full h-auto object-contain rounded-xl drop-shadow-lg"
                  width={1024}
                  height={768}
                  loading="lazy"
                />
              </motion.div>
            </motion.div>

            {/* 4 Pillars Grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-card transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-transform">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-semibold text-foreground mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
