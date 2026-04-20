"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Loader2,
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
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      project: (form.elements.namedItem("project") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("https://adepu-sanjay-svf9.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        setStatus({ type: "success", msg: "Message sent successfully! We'll be in touch soon." });
        form.reset();
      } else {
        setStatus({ type: "error", msg: "Failed to send message: " + result.error });
      }
    } catch (err) {
      setStatus({ type: "error", msg: "Error sending message. Please try again." });
    } finally {
      setLoading(false);
    }
  };

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
            Tell us about your project. We'll get back within one business day with a tailored plan,
            timeline, and transparent pricing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Side Panel */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Premium hero card */}
            <div className="relative overflow-hidden rounded-2xl p-7 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground shadow-elegant">
              {/* Decorative orbs */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary-foreground/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-accent/30 rounded-full blur-2xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/15 backdrop-blur-sm text-xs font-medium mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground" />
                  </span>
                  Available for new projects
                </div>
                <h3 className="text-2xl font-bold mb-2 leading-tight">Talk to our team</h3>
                <p className="text-primary-foreground/85 text-sm leading-relaxed mb-5 text-justify">
                  Whether you have a clear spec or just an idea on a napkin — we'd love to hear from
                  you and help shape it into something remarkable.
                </p>
                <ul className="space-y-2">
                  {guarantees.map((g, i) => (
                    <motion.li
                      key={g}
                      className="flex items-center gap-2 text-sm text-primary-foreground/95"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      {g}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact info cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {contactInfo.map((item, idx) => {
                const Inner = (
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="relative flex items-start gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/40 hover:shadow-elegant transition-all duration-300 group h-full overflow-hidden"
                  >
                    {/* Hover gradient sheen */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="relative min-w-0 flex-1">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                        {item.label}
                      </div>
                      <div className="text-sm font-semibold text-foreground truncate mt-0.5">
                        {item.value}
                      </div>
                    </div>
                  </motion.div>
                );
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                  >
                    {item.href ? (
                      <a href={item.href} className="block">
                        {Inner}
                      </a>
                    ) : (
                      Inner
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Glow border effect */}
              <div className="absolute -inset-px bg-gradient-to-br from-primary/40 via-transparent to-accent/40 rounded-2xl opacity-60 blur-sm" />
              <Card className="relative p-6 md:p-8 shadow-elegant border-border/60 rounded-2xl bg-card/95 backdrop-blur-xl">
                <div className="flex items-start justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">Send us a message</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Fill in the details and we'll respond within 24 hours.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Online
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group">
                      <label
                        htmlFor="firstName"
                        className="block text-xs font-semibold uppercase tracking-wider mb-2 text-muted-foreground group-focus-within:text-primary transition-colors"
                      >
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="John"
                        className="h-11 bg-background/60 border-border/60 focus-visible:ring-primary/40 focus-visible:border-primary transition-all"
                      />
                    </div>
                    <div className="group">
                      <label
                        htmlFor="lastName"
                        className="block text-xs font-semibold uppercase tracking-wider mb-2 text-muted-foreground group-focus-within:text-primary transition-colors"
                      >
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Doe"
                        className="h-11 bg-background/60 border-border/60 focus-visible:ring-primary/40 focus-visible:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group">
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider mb-2 text-muted-foreground group-focus-within:text-primary transition-colors"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="h-11 bg-background/60 border-border/60 focus-visible:ring-primary/40 focus-visible:border-primary transition-all"
                      />
                    </div>
                    <div className="group">
                      <label
                        htmlFor="company"
                        className="block text-xs font-semibold uppercase tracking-wider mb-2 text-muted-foreground group-focus-within:text-primary transition-colors"
                      >
                        Company <span className="text-muted-foreground/60 normal-case">(Optional)</span>
                      </label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        className="h-11 bg-background/60 border-border/60 focus-visible:ring-primary/40 focus-visible:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="project"
                      className="block text-xs font-semibold uppercase tracking-wider mb-2 text-muted-foreground group-focus-within:text-primary transition-colors"
                    >
                      Project Type
                    </label>
                    <select
                      id="project"
                      name="project"
                      className="w-full h-11 px-3 border border-border/60 rounded-md bg-background/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a project type
                      </option>
                      <option>Web Application</option>
                      <option>E-commerce Platform</option>
                      <option>SaaS Product</option>
                      <option>API Development</option>
                      <option>AI / Automation</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider mb-2 text-muted-foreground group-focus-within:text-primary transition-colors"
                    >
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about your goals, timeline, and any references…"
                      className="bg-background/60 border-border/60 focus-visible:ring-primary/40 focus-visible:border-primary transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    variant="corporate"
                    size="lg"
                    className="w-full hover-glow group h-12 text-base font-semibold"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending your message…
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to be contacted regarding your inquiry. We respect your
                    privacy.
                  </p>
                </form>

                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-5 flex items-start gap-2 p-3 rounded-lg text-sm font-medium border ${
                      status.type === "success"
                        ? "bg-primary/10 text-primary border-primary/30"
                        : "bg-destructive/10 text-destructive border-destructive/30"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    )}
                    <span>{status.msg}</span>
                  </motion.div>
                )}
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
