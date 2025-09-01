import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-team.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm">
                ✨ Full Stack Development Excellence
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                We Build{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Modern, Scalable
                </span>{" "}
                Web Solutions
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                As a dedicated team of full stack developers, we create reliable, 
                high-performance digital products tailored to your goals. From backend 
                APIs to modern user interfaces, we engineer every layer with precision.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="corporate" size="lg" className="group">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                View Our Work
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="SparcX team working on modern web solutions"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full blur-xl opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-primary rounded-full blur-xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;