import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-team.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm animate-bounce-in">
                ✨ Full Stack Development Excellence
              </div>
               <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                We Build{" "}
                <span className="text-foreground">
                  Modern, Scalable
                </span>{" "}
                Web Solutions
               </h1>
              <p className="text-sm md:text-base lg:text-xl text-muted-foreground leading-relaxed text-justify">
                As a dedicated team of full stack developers, we create reliable, 
                high-performance digital products tailored to your goals. From backend 
                APIs to modern user interfaces, we engineer every layer with precision.
              </p>
            </div>

            {/* Stats */}
            <div className="bg-background border rounded-2xl p-6 my-8 animate-scale-in">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center hover-lift">
                  <div className="text-2xl md:text-3xl font-bold text-orange-500">50+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center hover-lift">
                  <div className="text-2xl md:text-3xl font-bold text-orange-500">4+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Years of Experience</div>
                </div>
                <div className="text-center hover-lift">
                  <div className="text-2xl md:text-3xl font-bold text-orange-500">20+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Technologies Mastered</div>
                </div>
                <div className="text-center hover-lift">
                  <div className="text-2xl md:text-3xl font-bold text-orange-500">100%</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services">
                <Button variant="outline" size="lg" className="group bg-background text-foreground border-border hover:bg-muted hover-glow">
                  Learn More About Our Process
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#projects">
                <Button variant="outline" size="lg" className="group hover-lift">
                  <Play className="mr-2 h-4 w-4" />
                  View Our Work
                </Button>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant hover-glow">
              <img
                src={heroImage}
                alt="SparcX team working on modern web solutions"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full blur-xl opacity-60 animate-bounce-in"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-primary rounded-full blur-xl opacity-40 animate-bounce-in"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;