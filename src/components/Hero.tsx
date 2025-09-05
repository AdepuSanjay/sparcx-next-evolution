import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-team.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-4">
              <motion.div 
                className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                ✨ Full Stack Development Excellence
              </motion.div>
              <motion.h1 className="font-bold leading-tight" variants={itemVariants}>
                We Build{" "}
                <span className="text-foreground">
                  Modern, Scalable
                </span>{" "}
                Web Solutions
              </motion.h1>
              <motion.p 
                className="text-base md:text-xl text-muted-foreground leading-relaxed text-justify"
                variants={itemVariants}
              >
                As a dedicated team of full stack developers, we create reliable, 
                high-performance digital products tailored to your goals. From backend 
                APIs to modern user interfaces, we engineer every layer with precision.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div 
              className="bg-background border rounded-2xl p-6 my-8"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-orange-500">50+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Projects Completed</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-orange-500">4+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Years of Experience</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-orange-500">20+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Technologies Mastered</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-orange-500">100%</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Client Satisfaction</div>
                </motion.div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <a href="#services">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" className="group bg-background text-foreground border-border hover:bg-muted hover-glow">
                    Learn More About Our Process
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </a>
              <a href="#projects">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" className="group">
                    <Play className="mr-2 h-4 w-4" />
                    View Our Work
                  </Button>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="relative"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="SparcX team working on modern web solutions"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full blur-xl opacity-60"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-primary rounded-full blur-xl opacity-40"
              animate={{ 
                y: [0, 10, 0],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;