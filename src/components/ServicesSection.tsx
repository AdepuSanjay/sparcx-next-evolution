import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import servicesBanner from "@/assets/services-banner.png";

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
    description:
      "End-to-end web application development using modern technologies like React, Node.js, and MongoDB.",
    features: ["MERN Stack", "Next.js Applications", "Real-time Features", "API Development"],
    highlight: true,
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Backend & API Development",
    description: "Robust backend systems with Django, Express.js, and comprehensive API solutions.",
    features: ["RESTful APIs", "GraphQL", "Database Design", "Authentication"],
    highlight: false,
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud & DevOps",
    description:
      "Cloud deployment, CI/CD pipelines, and infrastructure management for scalable applications.",
    features: ["AWS/Azure Deployment", "Docker Containers", "CI/CD Pipelines", "Monitoring"],
    highlight: false,
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile-First Design",
    description:
      "Responsive web applications that work perfectly across all devices and screen sizes.",
    features: ["Responsive Design", "PWA Development", "Mobile Optimization", "Cross-browser"],
    highlight: false,
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "UI/UX Design Integration",
    description:
      "Beautiful, user-centered designs integrated seamlessly with modern development practices.",
    features: ["Design Systems", "Component Libraries", "Accessibility", "User Testing"],
    highlight: false,
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Performance Optimization",
    description:
      "High-performance applications with optimized loading times and excellent user experience.",
    features: ["Code Splitting", "Image Optimization", "Caching Strategies", "SEO"],
    highlight: true,
  },
];

const ServicesSection = () => {
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="services" className="py-24 animate-fade-in">
      <div className="container mx-auto px-4">
        {/* Header with banner image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              🚀 Our Services
            </div>
            <h2 className="mb-6">
              Comprehensive{" "}
              <span className="text-foreground">Development Solutions</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground">
              From concept to deployment, we provide end-to-end development services
              that help your business grow and succeed in the digital landscape.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Ambient blurred glows for blended look */}
            <div className="absolute -top-10 -left-10 w-56 h-56 bg-accent/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />

            <motion.img
              src={servicesBanner}
              alt="Sparcx development services illustration"
              className="w-full h-auto object-contain drop-shadow-2xl"
              width={1024}
              height={640}
              loading="lazy"
              animate={{ y: [0, -14, 0], rotate: [0, 1.2, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              style={{ background: "transparent" }}
            />
          </motion.div>
        </div>

        {/* Services Slider */}
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="mb-12"
        >
          <CarouselContent className="-ml-4">
            {services.map((service) => (
              <CarouselItem
                key={service.title}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card
                  className={`group h-full hover:shadow-elegant transition-all duration-300 hover-lift ${
                    service.highlight
                      ? "ring-2 ring-accent/20 bg-gradient-to-br from-accent/5 to-transparent"
                      : ""
                  }`}
                >
                  <div className="p-8">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${
                        service.highlight
                          ? "bg-foreground text-background"
                          : "bg-muted text-foreground group-hover:bg-foreground group-hover:text-background"
                      } transition-all duration-300`}
                    >
                      {service.icon}
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Bottom CTA */}
        <div className="text-center animate-bounce-in">
          <div className="bg-background border rounded-2xl p-8 max-w-4xl mx-auto hover-lift">
            <h3 className="mb-4">Ready to Start Your Project?</h3>
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
