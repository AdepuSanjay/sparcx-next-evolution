import { useRef } from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

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
      "Sparcx delivered our healthcare platform on time with rock-solid quality. Their full-stack expertise and attention to UX completely transformed our patient experience.",
    rating: 5,
    initials: "AS",
    accent: "from-orange-400 to-pink-500",
  },
  {
    name: "Priya Verma",
    role: "Product Lead",
    company: "EduMentor",
    quote:
      "The mentorship platform they built scales beautifully. Clean architecture, thoughtful design, and proactive communication throughout the project.",
    rating: 5,
    initials: "PV",
    accent: "from-indigo-400 to-purple-500",
  },
  {
    name: "Daniel Kim",
    role: "CTO",
    company: "TradeFlux",
    quote:
      "Real-time trading dashboard with zero latency issues. Sparcx understood our complex requirements and delivered a polished, production-grade product.",
    rating: 5,
    initials: "DK",
    accent: "from-emerald-400 to-teal-500",
  },
  {
    name: "Sara Iqbal",
    role: "Operations Manager",
    company: "AttendIQ",
    quote:
      "Our attendance system is now used by 12 schools. The team handled every edge case and the UI is loved by both teachers and students.",
    rating: 5,
    initials: "SI",
    accent: "from-amber-400 to-orange-500",
  },
  {
    name: "Rohan Gupta",
    role: "Co-founder",
    company: "ShopSphere",
    quote:
      "From storefront to admin panel, every detail was crafted with care. Sales increased 40% within 3 months of launching the new e-commerce platform.",
    rating: 5,
    initials: "RG",
    accent: "from-blue-400 to-cyan-500",
  },
  {
    name: "Meera Patel",
    role: "Director",
    company: "StudyMate",
    quote:
      "Sparcx isn't just a vendor — they're a partner. Their suggestions made our learning app significantly better than what we originally envisioned.",
    rating: 5,
    initials: "MP",
    accent: "from-rose-400 to-pink-500",
  },
];

const TestimonialsSection = () => {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="testimonials" className="py-24 bg-secondary/30 animate-fade-in">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            💬 Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Loved by Founders &{" "}
            <span className="text-foreground">Product Teams</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Real words from real clients who trusted us to bring their vision to life.
          </p>
        </motion.div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="mb-4"
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
                  className="h-full"
                >
                  <Card className="h-full p-8 relative overflow-hidden hover:shadow-elegant transition-shadow duration-300">
                    {/* Decorative quote */}
                    <Quote
                      className="absolute -top-2 -right-2 h-24 w-24 text-accent/10"
                      strokeWidth={1}
                    />

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4 relative">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-accent text-accent"
                        />
                      ))}
                    </div>

                    {/* Quote text - justified per project rule */}
                    <p className="text-base text-foreground/85 leading-relaxed mb-8 relative text-justify">
                      "{t.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 relative">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.accent} flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0`}
                      >
                        {t.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-foreground truncate">
                          {t.name}
                        </div>
                        <div className="text-xs text-muted-foreground truncate">
                          {t.role} · {t.company}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
