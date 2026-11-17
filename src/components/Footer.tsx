import { Linkedin, ExternalLink, Mail, Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/80 py-16">
      <div className="container mx-auto px-4">
        {/* Availability Status Badge (CodeDale style) */}
        <div className="flex justify-center md:justify-start mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/80 bg-muted/60 text-xs font-semibold text-foreground/80">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>All Systems Normal · Open for New Collaborations</span>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-10 mb-12 text-center md:text-left">
          {/* Brand & Positioning */}
          <motion.div className="space-y-4 md:col-span-1" {...fadeUp} transition={{ duration: 0.5 }}>
            <div className="text-xl font-bold tracking-tight text-foreground">
              SPARCX <span className="text-primary">SOLUTIONS</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-justify sm:text-left">
              A technology solutions and product innovation company based in Hyderabad, India. We engineer custom software, mobile apps, AI automation, and scalable digital products tailored to business requirements.
            </p>
            <div className="flex space-x-2.5 justify-center md:justify-start pt-2">
              <a
                href="https://www.linkedin.com/company/sparcxsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:support@sparcx.in"
                className="p-2.5 rounded-full bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/918019792661"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-muted text-muted-foreground hover:text-emerald-500 hover:bg-emerald-500/10 transition-all"
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
              <a
                href="https://sparcx.in"
                className="p-2.5 rounded-full bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="Website"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Capabilities */}
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-primary">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Embedded Digital Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  AI Agents & Automations
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-primary">
              Company & Process
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Core Services
                </a>
              </li>
              <li>
                <a href="#how-we-work" className="hover:text-primary transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary transition-colors">
                  Our Products (Coming Soon)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }}>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-primary">
              Connect
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <a href="mailto:support@sparcx.in" className="hover:text-primary transition-colors">
                  support@sparcx.in
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <a href="tel:+918019792661" className="hover:text-primary transition-colors">
                  +91 80197 92661
                </a>
              </p>
              <p className="text-xs pt-2 text-muted-foreground/80">
                Hyderabad, Telangana, India
                <br />
                Serving Clients Remotely
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar with 2026 Copyright */}
        <div className="border-t border-border/60 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-muted-foreground text-xs">
              © 2026 SPARCX Solutions. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs">
              Technology Solutions & Product Innovation · Hyderabad, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
