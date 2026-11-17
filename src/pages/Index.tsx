import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import OurProductsSection from "@/components/OurProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      {/* 1. Hero */}
      <Hero />
      {/* 2. Architectural Proof Strip (Vision & Mission) */}
      <ProofStrip />
      {/* 3. Services: Software Development, Embedded Digital Solutions, AI Agents & Automations */}
      <WhatWeDoSection />
      {/* 4. How We Work */}
      <HowWeWorkSection />
      {/* 5. Our Products (Coming Soon) */}
      <OurProductsSection />
      {/* 6. Contact */}
      <ContactSection />
      {/* 7. Footer */}
      <Footer />
      {/* Floating Assistance */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
