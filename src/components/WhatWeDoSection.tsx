import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Cpu,
  Bot,
  ArrowRight,
  CheckCircle2,
  Terminal,
  Activity,
  Workflow,
  Server,
  Layers,
  Sparkles,
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  image: string;
  capabilities: { title: string; desc: string }[];
  metrics: { label: string; value: string }[];
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
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
    metrics: [
      { label: "Architecture", value: "Modular & Scalable" },
      { label: "Security", value: "Role-Based Auth & Encryption" },
      { label: "Deployment", value: "CI/CD & Cloud-Ready" },
    ],
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
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
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
    metrics: [
      { label: "Data Pipeline", value: "Real-Time Telemetry" },
      { label: "Connectivity", value: "MQTT / WebSockets / Cloud" },
      { label: "Monitoring", value: "Asset Tracking & Control" },
    ],
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
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
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
    metrics: [
      { label: "Execution", value: "Autonomous & Multi-Step" },
      { label: "Integration", value: "Custom API & Tool Calling" },
      { label: "Efficiency", value: "Zero Manual Bottlenecks" },
    ],
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
        {/* Section Header with Reduced Balanced Font Size */}
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

        {/* CodeDale-Style Navigation Switcher */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex flex-col sm:flex-row items-center justify-center p-1.5 rounded-[22px] bg-muted/60 border border-border/80 shadow-xs gap-1.5">
            {services.map((service) => {
              const ServiceIcon = service.icon;
              const isActive = activeTab === service.id;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full sm:w-1/3 flex items-center justify-center gap-2 px-3 py-2.5 rounded-[16px] text-xs sm:text-sm font-semibold transition-all duration-300 ${
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

        {/* Professional Deep-Dive Showcase Container */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="rounded-[30px] sm:rounded-[36px] bg-card border border-border/80 shadow-md overflow-hidden p-6 sm:p-9 lg:p-10 relative"
            >
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 size-80 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

              <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Left Column: Description & Strategic Pillars (7 cols) */}
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

                  {/* Capabilities Breakdown Grid */}
                  <div className="grid sm:grid-cols-2 gap-3.5 pt-1">
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

                  {/* Action CTA */}
                  <div className="pt-2 flex items-center gap-4">
                    <a href="#contact">
                      <button className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary-light text-primary-foreground font-semibold text-xs sm:text-sm shadow-sm hover:shadow-elegant transition-all flex items-center gap-2">
                        <span>Consult on {activeService.title}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </a>
                  </div>
                </div>

                {/* Right Column: Visual Preview Card with Relevant Imagery & Interactive System View (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  {/* High-Quality Relevant Image Banner */}
                  <div className="relative h-44 sm:h-52 w-full rounded-[22px] overflow-hidden border border-border/80 shadow-xs bg-muted">
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="text-xs font-bold tracking-wide">
                        {activeService.badge}
                      </span>
                      <span className="text-[10px] font-mono opacity-80 px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md">
                        Production Stack
                      </span>
                    </div>
                  </div>

                  {/* Dynamic Technical Simulator Mockup */}
                  <div className="rounded-[22px] bg-muted/50 border border-border p-5 shadow-inner">
                    {activeService.id === "software-development" && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-border/70 text-xs">
                          <div className="flex items-center gap-2">
                            <Terminal className="h-3.5 w-3.5 text-primary" />
                            <span className="font-mono font-bold text-foreground text-[11px]">
                              api.sparcx.internal/v1
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            200 OK
                          </span>
                        </div>

                        <div className="p-3 rounded-xl bg-card border border-border font-mono text-[10.5px] text-muted-foreground space-y-1">
                          <div className="text-primary font-semibold">// Cloud Endpoint</div>
                          <div><span className="text-accent">const</span> service = <span className="text-accent">await</span> initCluster();</div>
                          <div className="text-foreground">dispatch(&#123; status: &quot;active&quot; &#125;);</div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-center text-xs">
                          <div className="p-2 rounded-lg bg-card border border-border">
                            <div className="text-[9px] text-muted-foreground uppercase font-bold">Uptime</div>
                            <div className="font-bold text-foreground text-[11px]">99.98%</div>
                          </div>
                          <div className="p-2 rounded-lg bg-card border border-border">
                            <div className="text-[9px] text-muted-foreground uppercase font-bold">Latency</div>
                            <div className="font-bold text-foreground text-[11px]">&lt; 38ms</div>
                          </div>
                          <div className="p-2 rounded-lg bg-card border border-border">
                            <div className="text-[9px] text-muted-foreground uppercase font-bold">Scaling</div>
                            <div className="font-bold text-foreground text-[11px]">Auto</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeService.id === "embedded-digital-solutions" && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-border/70 text-xs">
                          <div className="flex items-center gap-2">
                            <Activity className="h-3.5 w-3.5 text-accent" />
                            <span className="font-mono font-bold text-foreground text-[11px]">
                              IoT Telemetry Stream
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-primary/10 text-primary border border-primary/20 flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                            Live Ingestion
                          </span>
                        </div>

                        <div className="space-y-1.5 text-xs">
                          <div className="p-2.5 rounded-xl bg-card border border-border flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Server className="h-3.5 w-3.5 text-primary" />
                              <span className="text-[11px] font-semibold text-foreground">Edge Controller 01</span>
                            </div>
                            <span className="font-mono text-emerald-600 text-[10px] font-bold">Active</span>
                          </div>

                          <div className="p-2.5 rounded-xl bg-card border border-border flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Cpu className="h-3.5 w-3.5 text-accent" />
                              <span className="text-[11px] font-semibold text-foreground">Sensor Stream Array</span>
                            </div>
                            <span className="font-mono text-[10px] font-bold text-foreground">120 pkt/s</span>
                          </div>
                        </div>

                        <div className="p-2 rounded-lg bg-card border border-border text-center text-[10px] text-muted-foreground font-semibold">
                          Connected: MQTT · WebSockets · Cloud Ingestion
                        </div>
                      </div>
                    )}

                    {activeService.id === "ai-agents-automation" && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-border/70 text-xs">
                          <div className="flex items-center gap-2">
                            <Workflow className="h-3.5 w-3.5 text-primary" />
                            <span className="font-mono font-bold text-foreground text-[11px]">
                              Agent Orchestration
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-primary/10 text-primary border border-primary/20">
                            Agent Active
                          </span>
                        </div>

                        <div className="space-y-1.5 text-[11px]">
                          <div className="p-2 rounded-lg bg-card border border-border flex items-center gap-2">
                            <span className="size-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-[9px]">1</span>
                            <span className="text-foreground font-medium">Trigger Payload Received</span>
                          </div>

                          <div className="p-2 rounded-lg bg-card border border-primary/40 flex items-center gap-2">
                            <span className="size-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-[9px]">2</span>
                            <span className="text-primary font-semibold">Autonomous Reasoning & Tool Execution</span>
                          </div>

                          <div className="p-2 rounded-lg bg-card border border-border flex items-center gap-2">
                            <span className="size-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-[9px]">3</span>
                            <span className="text-foreground font-medium">Verified Action & Database Sync</span>
                          </div>
                        </div>

                        <div className="p-2 rounded-lg bg-card border border-border text-center text-[10px] text-muted-foreground font-semibold">
                          Automated Multi-Step Agent Execution
                        </div>
                      </div>
                    )}
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
