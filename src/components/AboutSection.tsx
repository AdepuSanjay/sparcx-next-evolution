import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering exceptional digital solutions that drive real business results."
    },
    {
      icon: Users,
      title: "Expert Team", 
      description: "Our diverse team of full-stack developers brings years of experience across modern technologies."
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Every project undergoes rigorous testing and quality assurance to ensure optimal performance."
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "We stay ahead of technology trends to provide cutting-edge solutions for our clients."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-muted text-foreground font-medium text-sm mb-4"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              About SparcX Solutions
            </motion.div>
            <motion.h2 className="mb-6" variants={itemVariants}>
              Crafting Digital Excellence{" "}
              <span className="text-foreground">
                Since Day One
              </span>
            </motion.h2>
            <motion.p 
              className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-justify"
              variants={itemVariants}
            >
              We are a forward-thinking software development company specializing in full-stack 
              web applications, modern UI/UX design, and scalable cloud solutions. Our passion 
              for technology drives us to create exceptional digital experiences that transform businesses.
            </motion.p>
          </motion.div>

          {/* Story */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="space-y-6" variants={itemVariants}>
              <h3 className="text-foreground">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Founded with a vision to bridge the gap between innovative technology and practical 
                business solutions, SparcX Solutions has grown from a small team of passionate developers 
                into a trusted partner for businesses seeking digital transformation.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                We believe in the power of clean code, intuitive design, and strategic thinking to 
                create applications that not only meet today's needs but scale for tomorrow's challenges.
              </p>
              <a href="#services">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="corporate" className="group">
                    Learn More About Our Process
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </a>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="bg-background border p-8 rounded-2xl">
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center justify-between"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-sm text-muted-foreground">Projects Completed</span>
                    <span className="text-2xl md:text-3xl font-bold text-orange-500">50+</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center justify-between"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-sm text-muted-foreground">Years of Experience</span>
                    <span className="text-2xl md:text-3xl font-bold text-orange-500">4+</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center justify-between"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-sm text-muted-foreground">Technologies Mastered</span>
                    <span className="text-2xl md:text-3xl font-bold text-orange-500">20+</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center justify-between"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-sm text-muted-foreground">Client Satisfaction</span>
                    <span className="text-2xl md:text-3xl font-bold text-orange-500">100%</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="group"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:shadow-card transition-all duration-300">
                  <motion.div 
                    className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="h-6 w-6" />
                  </motion.div>
                  <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;