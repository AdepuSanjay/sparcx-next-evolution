import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Award, Zap } from "lucide-react";

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

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              About SparcX Solutions
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Crafting Digital Excellence{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Since Day One
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We are a forward-thinking software development company specializing in full-stack 
              web applications, modern UI/UX design, and scalable cloud solutions. Our passion 
              for technology drives us to create exceptional digital experiences that transform businesses.
            </p>
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a vision to bridge the gap between innovative technology and practical 
                business solutions, SparcX Solutions has grown from a small team of passionate developers 
                into a trusted partner for businesses seeking digital transformation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in the power of clean code, intuitive design, and strategic thinking to 
                create applications that not only meet today's needs but scale for tomorrow's challenges.
              </p>
              <Button variant="corporate" className="group">
                Learn More About Our Process
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-primary p-8 rounded-2xl text-primary-foreground">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm opacity-90">Projects Completed</span>
                    <span className="text-3xl font-bold">50+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm opacity-90">Years of Experience</span>
                    <span className="text-3xl font-bold">4+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm opacity-90">Technologies Mastered</span>
                    <span className="text-3xl font-bold">20+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm opacity-90">Client Satisfaction</span>
                    <span className="text-3xl font-bold">100%</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-accent rounded-full blur-xl opacity-60"></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;