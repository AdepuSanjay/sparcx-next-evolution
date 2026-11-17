import { motion } from "framer-motion";
import { MessageSquareText, FileSpreadsheet, Code2, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageSquareText,
    title: "Understand the Requirement",
    description:
      "We begin by thoroughly reviewing your operational goals, technical constraints, and user needs to establish a clear project scope without assumptions.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
    badge: "Discovery",
  },
  {
    step: "02",
    icon: FileSpreadsheet,
    title: "Plan the Solution & Proposal",
    description:
      "We design the technical architecture, project roadmap, and transparent deliverables, providing a clear proposal within 2–3 working days.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
    badge: "Architecture",
  },
  {
    step: "03",
    icon: Code2,
    title: "Develop with Regular Progress Updates",
    description:
      "We build your application following modern engineering practices, maintaining open communication and sharing regular milestone demonstrations.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
    badge: "Engineering",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Launch & Provide Support",
    description:
      "We handle deployment to production, verify performance across devices, and offer continued post-launch support and maintenance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    badge: "Rollout",
  },
];

const HowWeWorkSection = () => {
  return (
    <section id="how-we-work" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with Reduced Balanced Font Size */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-xs tracking-wider uppercase mb-3.5">
              ⚙️ Delivery Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 text-foreground">
              A Structured Process for{" "}
              <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                Predictable Success
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Experience a structured, four-phase engineering journey from initial requirement discovery through to verified production rollout.
            </p>
          </motion.div>

          {/* 4 Steps Cards with Images & Watermark Numbers */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                className="relative rounded-[24px] bg-card border border-border/80 hover:border-primary/50 hover:shadow-elegant transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xs"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Visual Image Header */}
                <div className="relative h-32 w-full overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-background/90 backdrop-blur-md text-foreground border border-border/70">
                    {item.badge}
                  </span>

                  {/* Icon */}
                  <div className="absolute bottom-2 right-2.5 size-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shadow-xs">
                    <item.icon className="h-4 w-4" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-primary px-2 py-0.5 rounded bg-primary/10">
                        Step {item.step}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-border/60">
                    <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-primary" />
                      Phase {item.step} Deliverable
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pre-Footer Action Banner */}
          <motion.div
            className="mt-12 p-6 sm:p-8 rounded-[28px] bg-gradient-to-r from-primary/10 via-card to-accent/10 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="text-base sm:text-lg font-bold text-foreground">
                Have a project or technical requirement in mind?
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                Tell us your goals. We will review your scope and provide a structured proposal within 2–3 working days.
              </div>
            </div>
            <a href="#contact" className="shrink-0">
              <button className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:shadow-elegant hover:scale-102 transition-all flex items-center gap-2">
                Start a Discussion
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
