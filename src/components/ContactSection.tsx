"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@sparcx.com",
    href: "mailto:hello@sparcx.com",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 80197 92661",
    href: "tel:+918019792661",
    accent: "from-accent/20 to-accent/5",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India · Remote Worldwide",
    href: null,
    accent: "from-primary/15 to-accent/10",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
    accent: "from-accent/15 to-primary/10",
  },
];

const guarantees = [
  "Free 30-min discovery call",
  "NDA on request",
  "Tailored proposal in 24h",
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-[28rem] h-[28rem] bg-primary/15 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-32 w-[32rem] h-[32rem] bg-accent/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-primary font-medium text-sm mb-5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="h-4 w-4" />
            Let's Connect
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Exceptional
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-justify md:text-center">
            Tell us about your project. Reach out to us through any of the channels below and we'll get back within one business day with a tailored plan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Contact Info Side Panel */}
          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Premium hero card */}
            <div className="relative overflow-hidden rounded-2xl p-8 md:p-10 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground shadow-elegant h-full flex flex-col justify-center">
              {/* Decorative orbs */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary-foreground/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-accent/30 rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/15 backdrop-blur-sm text-xs font-medium mb-6 w-max">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground" />
                  </span>
                  Available for new projects
                </div>
                
                <h3 className="text-3xl font-bold mb-4 leading-tight">Talk to our team</h3>
                <p className="text-primary-foreground/85 text-base md:text-lg leading-relaxed mb-8 text-justify">
                  Whether you have a clear spec or just an idea on a napkin — we'd love to hear from
                  you and help shape it into something remarkable.
                </p>
                
                <ul className="space-y-4 mt-auto">
                  {guarantees.map((g, i) => (
                    <motion.li
                      key={g}
                      className="flex items-center gap-3 text-base text-primary-foreground/95"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0" />
                      {g}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact info cards Grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {contactInfo.map((item, idx) => {
              const Inner = (
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative flex flex-col items-center text-center p-6 bg-card border border-border rounded-2xl hover:border-primary/40 hover:shadow-elegant transition-all duration-300 group h-full justify-center"
                >
                  {/* Hover gradient sheen */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                  />
                  
                  <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 text-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <item.icon className="h-6 w-6" />
                  </div>
                  
                  <div className="relative">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                      {item.label}
                    </div>
                    <div className="text-base font-bold text-foreground">
                      {item.value}
                    </div>
                  </div>
                </motion.div>
              );

              return (
                <motion.div
                  key={item.label}
                  className="h-full"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  {item.href ? (
                    <a href={item.href} className="block h-full">
                      {Inner}
                    </a>
                  ) : (
                    <div className="h-full">{Inner}</div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
