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
    <section id="about" className="py-24 bg-white animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium text-sm mb-6">
              About sparcx
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
              Crafting Digital Excellence Since Day One
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              We are a forward-thinking software development company specializing in full-stack 
              web applications, modern UI/UX design, and scalable cloud solutions. Our passion 
              for technology drives us to create exceptional digital experiences that transform businesses.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-gray-200 rounded-lg p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-base font-semibold text-black mb-3">{feature.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
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