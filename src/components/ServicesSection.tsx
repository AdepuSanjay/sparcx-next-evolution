import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  highlight: boolean;
}

const services: Service[] = [
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Full Stack Web Development",
    description: "End-to-end web application development using modern technologies like React, Node.js, and MongoDB.",
    features: ["MERN Stack", "Next.js Applications", "Real-time Features", "API Development"],
    highlight: true
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Backend & API Development",
    description: "Robust backend systems with Django, Express.js, and comprehensive API solutions.",
    features: ["RESTful APIs", "GraphQL", "Database Design", "Authentication"],
    highlight: false
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud & DevOps",
    description: "Cloud deployment, CI/CD pipelines, and infrastructure management for scalable applications.",
    features: ["AWS/Azure Deployment", "Docker Containers", "CI/CD Pipelines", "Monitoring"],
    highlight: false
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile-First Design",
    description: "Responsive web applications that work perfectly across all devices and screen sizes.",
    features: ["Responsive Design", "PWA Development", "Mobile Optimization", "Cross-browser"],
    highlight: false
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "UI/UX Design Integration",
    description: "Beautiful, user-centered designs integrated seamlessly with modern development practices.",
    features: ["Design Systems", "Component Libraries", "Accessibility", "User Testing"],
    highlight: false
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Performance Optimization",
    description: "High-performance applications with optimized loading times and excellent user experience.",
    features: ["Code Splitting", "Image Optimization", "Caching Strategies", "SEO"],
    highlight: true
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 animate-fade-in">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            🚀 Our Services
          </div>
          <h2 className="mb-6">
            Comprehensive{" "}
            <span className="text-foreground">
              Development Solutions
            </span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end development services 
            that help your business grow and succeed in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 animate-scale-in">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className={`group hover:shadow-elegant transition-all duration-300 hover-lift ${
                service.highlight ? 'ring-2 ring-accent/20 bg-gradient-to-br from-accent/5 to-transparent' : ''
              }`}
            >
              <div className="p-8">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${
                  service.highlight 
                    ? 'bg-foreground text-background' 
                    : 'bg-muted text-foreground group-hover:bg-foreground group-hover:text-background'
                } transition-all duration-300 animate-bounce-in`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant={service.highlight ? "corporate" : "outline"} 
                  size="sm" 
                  className="group/button w-full hover-glow"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-bounce-in">
          <div className="bg-background border rounded-2xl p-8 max-w-4xl mx-auto hover-lift">
            <h3 className="mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help bring your ideas to life with our comprehensive 
              development services and expertise.
            </p>
            <a href="#contact">
              <Button variant="corporate" size="lg" className="group hover-glow">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;