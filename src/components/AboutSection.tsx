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
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/20 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted text-foreground font-medium text-sm mb-4">
              About SparcX Solutions
            </div>
            <h2 className="text-xl md:text-3xl lg:text-4xl mb-6">
              Crafting Digital Excellence{" "}
              <span className="text-foreground">
                Since Day One
              </span>
            </h2>
            <p className="text-sm md:text-base lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-justify">
              We are a forward-thinking software development company specializing in full-stack 
              web applications, modern UI/UX design, and scalable cloud solutions. Our passion 
              for technology drives us to create exceptional digital experiences that transform businesses.
            </p>
          </div>


          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:shadow-card transition-all duration-300 hover-lift">
                  <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform animate-bounce-in">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-sm md:text-base font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed text-justify">{feature.description}</p>
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