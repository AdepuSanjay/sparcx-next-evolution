import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Cpu,
  Bot,
  ArrowRight,
  CheckCircle2,
  Layers,
  Shield,
  Zap,
  Globe,
  CircuitBoard,
  BrainCircuit,
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  capabilities: { title: string; desc: string }[];
  highlights: { icon: React.ElementType; label: string; value: string }[];
  technologies: string[];
  deliverables: string[];
}

const services: ServiceItem[] = [
  {
    id: "software-development",
    number: "01",
    title: "Software Development",
    badge: "Full-Cycle Engineering",
    tagline: "High-Performance Web Platforms, Portals & Distributed Systems",
    description:
      "We design and engineer bespoke software architectures tailored to your operational workflows. From high-availability web applications to complex multi-tenant backend systems, we build scalable, secure, and maintainable software products.",
    icon: Code2,
    capabilities: [
      {
        title: "Tailored Web Applications",
        desc: "Modern responsive web applications built with clean architecture, high speed, and intuitive user experiences.",
      },
      {
        title: "API Architecture & Microservices",
        desc: "Robust REST and GraphQL backend services designed for high throughput, data integrity, and low latency.",
      },
      {
        title: "Enterprise Dashboards & Portals",
        desc: "Role-based administrative dashboards, real-time analytics, and operational management portals.",
      },
      {
        title: "Database Design & Optimization",
        desc: "Structured relational and NoSQL data modeling with optimized caching and query performance.",
      },
    ],
    highlights: [
      { icon: Layers, label: "Architecture", value: "Modular & Scalable" },
      { icon: Shield, label: "Security", value: "Role-Based Auth & Encryption" },
      { icon: Zap, label: "Deployment", value: "CI/CD & Cloud-Ready" },
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker"],
    deliverables: ["Production-ready web application", "API documentation", "Admin dashboard", "Deployment pipeline"],
  },
  {
    id: "embedded-digital-solutions",
    number: "02",
    title: "Embedded Digital Solutions",
    badge: "Hardware & Connected Systems",
    tagline: "Connecting Edge Devices, Sensors & Real-Time Digital Dashboards",
    description:
      "We bridge physical hardware with cloud intelligence. We build connected digital systems that ingest sensor data, monitor physical assets, and deliver real-time control through centralized digital interfaces.",
    icon: Cpu,
    capabilities: [
      {
        title: "IoT Telemetry & Monitoring",
        desc: "Continuous data ingestion from sensors and field devices with real-time stream processing and visualization.",
      },
      {
        title: "Device Control Dashboards",
        desc: "Centralized web and mobile command dashboards allowing remote monitoring, status telemetry, and configuration.",
      },
      {
        title: "Edge Integration & Protocols",
        desc: "Seamless communication using MQTT, WebSockets, HTTP, and industrial communication protocols.",
      },
      {
        title: "Digital-Physical Automation",
        desc: "Automated trigger systems that translate real-world physical thresholds into instant digital alerts and workflows.",
      },
    ],
    highlights: [
      { icon: Globe, label: "Data Pipeline", value: "Real-Time Telemetry" },
      { icon: CircuitBoard, label: "Connectivity", value: "MQTT / WebSockets / Cloud" },
      { icon: Shield, label: "Monitoring", value: "Asset Tracking & Control" },
    ],
    technologies: ["Arduino", "Raspberry Pi", "ESP32", "MQTT", "WebSockets", "Node.js", "Python", "Firebase"],
    deliverables: ["Connected hardware prototype", "Telemetry dashboard", "Alert & notification system", "Integration APIs"],
  },
  {
    id: "ai-agents-automation",
    number: "03",
    title: "AI Agents & Automations",
    badge: "Intelligent Operations",
    tagline: "Autonomous Agent Workflows, Intelligent Parsing & Process Automation",
    description:
      "We develop task-oriented AI agents and business automation pipelines that execute complex multi-step processes, analyze data, and eliminate manual bottlenecks across your organization.",
    icon: Bot,
    capabilities: [
      {
        title: "Autonomous Task Agents",
        desc: "Context-aware AI agents capable of reasoning, calling tools, querying databases, and executing end-to-end workflows.",
      },
      {
        title: "Business Process Automation",
        desc: "End-to-end workflow automation connecting your CRM, communication channels, internal databases, and document pipelines.",
      },
      {
        title: "Intelligent Document & Data Parsing",
        desc: "AI pipelines that extract, categorize, and validate information from unstructured documents, emails, and invoices.",
      },
      {
        title: "Conversational Knowledge Engines",
        desc: "Domain-specific AI assistants grounded in your proprietary organizational knowledge base.",
      },
    ],
    highlights: [
      { icon: BrainCircuit, label: "Execution", value: "Autonomous & Multi-Step" },
      { icon: Zap, label: "Integration", value: "Custom API & Tool Calling" },
      { icon: Layers, label: "Efficiency", value: "Zero Manual Bottlenecks" },
    ],
    technologies: ["Python", "LangChain", "OpenAI", "Gemini", "FastAPI", "Vector DBs", "n8n", "Custom Agents"],
    deliverables: ["Custom AI agent deployment", "Automation pipeline", "Knowledge base integration", "Performance reports"],
  },
];

const WhatWeDoSection = () => {
  const [activeTab, setActiveTab] = useState<string>(services[0].id);
  const activeService = services.find((s) => s.id === activeTab) || services[0];
  const IconComponent = activeService.icon;

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Anchor alias */}
      <span id="what-we-do" className="block relative -top-24 invisible" />

      {/* CodeDale Ambient Backlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-primary/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-xs tracking-wider uppercase mb-3.5">
            💼 Core Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 text-foreground">
            Specialized in{" "}
            <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
              Core Technologies
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We focus our engineering expertise on three transformative domains — delivering bespoke software, connected digital hardware, and autonomous AI automation.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex flex-col sm:flex-row items-center justify-center p-1.5 rounded-[22px] bg-muted/60 border border-border/80 shadow-xs gap-1.5">
            {services.map((service) => {
              const ServiceIcon = service.icon;
              const isActive = activeTab === service.id;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full sm:w-1/3 flex items-center justify-center gap-2 px-3 py-2.5 rounded-[16px] text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-card text-foreground shadow-sm border border-border/80 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/40"
                  }`}
                >
                  <ServiceIcon className={`h-4 w-4 shrink-0 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                  <span className="truncate">{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Service Detail Showcase */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="rounded-[28px] sm:rounded-[32px] bg-card border border-border/80 shadow-md overflow-hidden p-6 sm:p-8 lg:p-10 relative"
            >
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 size-80 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

              <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
                {/* Left Column: Description & Capabilities */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center p-2.5 shadow-xs">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                        Service {activeService.number} · {activeService.badge}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                        {activeService.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base font-semibold text-foreground/90 leading-snug">
                    {activeService.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-justify">
                    {activeService.description}
                  </p>

                  {/* Capabilities */}
                  <div className="grid sm:grid-cols-2 gap-3 pt-1">
                    {activeService.capabilities.map((cap) => (
                      <div
                        key={cap.title}
                        className="p-3.5 rounded-xl bg-muted/40 border border-border/70 hover:border-primary/40 transition-colors"
                      >
                        <div className="flex items-center gap-2 text-xs font-bold text-foreground mb-1">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span>{cap.title}</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                          {cap.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-2 flex items-center gap-4">
                    <a href="#contact">
                      <button className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary-light text-primary-foreground font-semibold text-xs sm:text-sm shadow-sm hover:shadow-elegant transition-all flex items-center gap-2 cursor-pointer">
                        <span>Consult on {activeService.title}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </a>
                  </div>
                </div>

                {/* Right Column: Professional Highlights Panel */}
                <div className="lg:col-span-5 space-y-5">
                  {/* Key Highlights */}
                  <div className="rounded-2xl border border-border/80 bg-muted/30 p-5 space-y-4">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      Key Highlights
                    </h4>
                    <div className="space-y-3">
                      {activeService.highlights.map((h) => {
                        const HIcon = h.icon;
                        return (
                          <div key={h.label} className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                              <HIcon className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
                                {h.label}
                              </div>
                              <div className="text-xs font-bold text-foreground">
                                {h.value}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="rounded-2xl border border-border/80 bg-muted/30 p-5 space-y-3">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeService.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-card border border-border/80 text-[11px] font-semibold text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* What You Receive */}
                  <div className="rounded-2xl border border-border/80 bg-muted/30 p-5 space-y-3">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      What You Receive
                    </h4>
                    <ul className="space-y-2">
                      {activeService.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-xs text-foreground/85">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span className="font-medium">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
