import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import AboutSection from "@/components/AboutSection";

import ServicesSection from "@/components/ServicesSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TechMarquee />
      <AboutSection />

      <ServicesSection />
      <TechStackSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
