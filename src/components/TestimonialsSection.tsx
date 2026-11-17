import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Quote, Star, CheckCircle } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  initials: string;
  accent: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Aarav Sharma",
    role: "Founder",
    company: "MediCore Health",
    quote:
      "SPARCX delivered our healthcare platform with rock-solid quality. Their full-stack expertise and attention to UX completely transformed our patient experience.",
    rating: 5,
    initials: "AS",
    accent: "from-orange-500 to-amber-500",
  },
  {
    name: "Priya Verma",
    role: "Product Lead",
    company: "EduMentor",
    quote:
      "The mentorship platform they built scales beautifully. Clean architecture, thoughtful design, and proactive communication throughout the entire journey.",
    rating: 5,
    initials: "PV",
    accent: "from-indigo-500 to-purple-600",
  },
  {
    name: "Daniel Kim",
    role: "CTO",
    company: "TradeFlux",
    quote:
      "Real-time trading dashboard with zero latency issues. SPARCX understood our complex data requirements and delivered a polished, enterprise-grade product.",
    rating: 5,
    initials: "DK",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    name: "Sara Iqbal",
    role: "Operations Manager",
    company: "AttendIQ",
    quote:
      "Our attendance management system is now utilized across several institutions. The team handled every edge case and the UI is loved by faculty and students alike.",
    rating: 5,
    initials: "SI",
    accent: "from-amber-500 to-orange-600",
  },
  {
    name: "Rohan Gupta",
    role: "Co-founder",
    company: "ShopSphere",
    quote:
      "From storefront performance to intuitive admin workflows, every detail was crafted with care. Measurable customer satisfaction increase within weeks of launch.",
    rating: 5,
    initials: "RG",
    accent: "from-blue-500 to-cyan-600",
  },
  {
    name: "Meera Patel",
    role: "Director",
    company: "StudyMate",
    quote:
      "SPARCX isn't just an outsourcing vendor — they are a true strategic partner. Their architectural suggestions made our learning app significantly better than our original vision.",
    rating: 5,
    initials: "MP",
    accent: "from-rose-500 to-pink-600",
  },
];

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Smooth, relaxed autoplay speed (6000ms) with pause on hover
  const autoplay = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="testimonials" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-xs tracking-wider uppercase mb-4">
            💬 Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Trusted by Founders &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Product Teams
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Real feedback from innovators and partners who trust SPARCX Solutions to engineer and scale their digital products.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            plugins={[autoplay.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((t) => (
                <CarouselItem
                  key={t.name}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="h-full pt-2 pb-2"
                  >
                    <Card className="h-full p-7 flex flex-col justify-between relative overflow-hidden bg-card border-border hover:border-primary/40 hover:shadow-elegant transition-all duration-300">
                      {/* Decorative quote mark */}
                      <Quote
                        className="absolute -top-2 -right-2 h-20 w-20 text-accent/10 pointer-events-none"
                        strokeWidth={1}
                      />

                      <div>
                        {/* Rating & Verified badge */}
                        <div className="flex items-center justify-between mb-5 relative">
                          <div className="flex items-center gap-1">
                            {Array.from({ length: t.rating }).map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-amber-400 text-amber-400"
                              />
                            ))}
                          </div>
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                            <CheckCircle className="h-3 w-3 text-emerald-500" />
                            Verified Client
                          </span>
                        </div>

                        {/* Quote text */}
                        <p className="text-sm md:text-base text-foreground/85 leading-relaxed mb-6 relative">
                          "{t.quote}"
                        </p>
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center gap-3.5 pt-4 border-t border-border/60 relative">
                        <div
                          className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.accent} flex items-center justify-center text-white font-bold text-sm shadow-sm shrink-0`}
                        >
                          {t.initials}
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-sm text-foreground truncate">
                            {t.name}
                          </div>
                          <div className="text-xs text-muted-foreground truncate">
                            {t.role} · <span className="font-medium text-foreground/75">{t.company}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation controls */}
            <div className="flex items-center justify-between mt-8">
              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <CarouselPrevious className="static translate-y-0 hover:bg-primary hover:text-primary-foreground transition-colors" />
                <CarouselNext className="static translate-y-0 hover:bg-primary hover:text-primary-foreground transition-colors" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
