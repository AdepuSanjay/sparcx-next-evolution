"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "support@sparcx.in",
    href: "mailto:support@sparcx.in",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 80197 92661",
    href: "tel:+918019792661",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India · Remote Worldwide",
    href: null,
  },
  {
    icon: Clock,
    label: "Proposal Turnaround",
    value: "Within 2–3 working days",
    href: null,
  },
];

const assurances = [
  "Comprehensive requirement discovery",
  "Non-disclosure agreement (NDA) on request",
  "Proposal within 2–3 working days",
];

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Software Development",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: "error",
        msg: "Please fill in all required fields (Name, Email, and Project Details).",
      });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://adepu-sanjay-svf9.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.name,
          email: formData.email,
          phone: formData.phone,
          project: formData.projectType,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          msg: "Thank you! Your inquiry has been received. Our team will review your requirements and provide a proposal within 2–3 working days.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "Custom Software & Web Applications",
          message: "",
        });
      } else {
        window.location.href = `mailto:support@sparcx.in?subject=Project Inquiry: ${encodeURIComponent(
          formData.projectType
        )}&body=Name: ${encodeURIComponent(formData.name)}%0D%0APhone: ${encodeURIComponent(
          formData.phone
        )}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(
          formData.message
        )}`;
        setStatus({
          type: "success",
          msg: "Opening your email client to send your inquiry directly to support@sparcx.in.",
        });
      }
    } catch {
      window.location.href = `mailto:support@sparcx.in?subject=Project Inquiry: ${encodeURIComponent(
        formData.projectType
      )}&body=Name: ${encodeURIComponent(formData.name)}%0D%0APhone: ${encodeURIComponent(
        formData.phone
      )}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(
        formData.message
      )}`;
      setStatus({
        type: "success",
        msg: "Opening your email client to send your inquiry directly to support@sparcx.in.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-muted/30 overflow-hidden dashed-y-custom">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tight text-foreground">
            Connect With{" "}
            <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
              SPARCX Solutions
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Tell us about your project requirements. We will analyze your scope and provide a structured proposal within 2–3 working days.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
          {/* Left Panel: Direct Channels & Information (5 cols) */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-[30px] p-7 sm:p-8 bg-card border border-border/80 shadow-xs">
              <h3 className="text-xl sm:text-2xl font-bold mb-2.5 text-foreground">
                Start a Conversation
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 text-justify">
                Whether you have an established technical specification or an emerging product idea, we are ready to discuss your goals and architect the right solution.
              </p>

              <ul className="space-y-3 mb-8">
                {assurances.map((g) => (
                  <li key={g} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/90 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>

              {/* Direct channels (CodeDale Pill Buttons) */}
              <div className="pt-6 border-t border-border flex flex-wrap gap-2.5">
                <a
                  href="https://wa.me/918019792661"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-semibold hover:bg-emerald-500/20 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <a
                  href="https://www.linkedin.com/company/sparcxsolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn Company
                </a>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-3.5">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-2xl bg-card border border-border/80 text-left shadow-xs"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-xs font-bold text-foreground hover:text-primary transition-colors block truncate mt-0.5"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-xs font-bold text-foreground truncate mt-0.5">
                      {item.value}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Panel: Functional Form (7 cols) */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-[32px] p-8 sm:p-10 bg-card border border-border/80 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Project Inquiry Form
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-6">
                Tell us about your requirements, project scope, and preferred timeline.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-foreground/80">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="rounded-xl bg-muted/40 border-border/80"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-foreground/80">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-xl bg-muted/40 border-border/80"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-foreground/80">
                      Phone / WhatsApp Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="rounded-xl bg-muted/40 border-border/80"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="projectType" className="text-xs font-semibold text-foreground/80">
                      Service Category *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-xl border border-border/80 bg-muted/40 text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option>Software Development</option>
                      <option>Embedded Digital Solutions</option>
                      <option>AI Agents & Automations</option>
                      <option>Other / Consulting</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-foreground/80">
                    Project Details & Scope *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Briefly describe your objectives, target timeline, and any existing systems or references…"
                    value={formData.message}
                    onChange={handleChange}
                    className="rounded-xl bg-muted/40 border-border/80 resize-none text-xs sm:text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  variant="corporate"
                  size="lg"
                  className="w-full h-12 rounded-full text-sm font-semibold shadow-sm hover:shadow-elegant transition-all"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting Inquiry…
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Project Inquiry
                    </>
                  )}
                </Button>

                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3.5 rounded-xl text-xs sm:text-sm font-medium border flex items-start gap-2.5 ${
                      status.type === "success"
                        ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30"
                        : "bg-destructive/10 text-destructive border-destructive/30"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-500" />
                    ) : (
                      <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-destructive" />
                    )}
                    <span>{status.msg}</span>
                  </motion.div>
                )}

                <p className="text-[11px] text-muted-foreground text-center pt-2">
                  Inquiries are treated with complete confidentiality. We will review your scope and provide a proposal within 2–3 working days.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
