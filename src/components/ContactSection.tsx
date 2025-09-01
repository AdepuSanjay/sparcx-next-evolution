import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            📞 Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Start Building?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your project and how we can help bring your vision to life. 
            We're here to answer your questions and provide expert guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="transition-all focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="transition-all focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="transition-all focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company (Optional)
                </label>
                <Input
                  id="company"
                  placeholder="Your Company"
                  className="transition-all focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-2">
                  Project Type
                </label>
                <select className="w-full px-3 py-2 border rounded-md bg-background focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all">
                  <option>Web Application</option>
                  <option>E-commerce Platform</option>
                  <option>SaaS Product</option>
                  <option>API Development</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project, timeline, and requirements..."
                  rows={5}
                  className="transition-all focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <Button variant="corporate" size="lg" className="w-full group">
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="p-6 hover:shadow-card transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Get in touch via email for detailed discussions
                    </p>
                    <a 
                      href="mailto:hello@sparcx.in" 
                      className="text-primary hover:text-primary-light font-medium"
                    >
                      hello@sparcx.in
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-card transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Speak directly with our team
                    </p>
                    <a 
                      href="tel:+1234567890" 
                      className="text-primary hover:text-primary-light font-medium"
                    >
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-card transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Monday - Friday: 9:00 AM - 6:00 PM EST
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Weekend support available for urgent matters
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Start CTA */}
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Schedule a free consultation to discuss your project requirements 
                and get a detailed proposal within 24 hours.
              </p>
              <div className="space-y-3">
                <Button variant="corporate" className="w-full group">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="w-full">
                  View Our Portfolio
                </Button>
              </div>
            </Card>

            {/* Response Time */}
            <div className="text-center p-6 bg-secondary/50 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">⚡ Quick Response Time</h4>
              <p className="text-muted-foreground">
                We typically respond to all inquiries within 2-4 hours during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;