import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import ServicesSection from "@/components/ServicesSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TeamSection />
      <ServicesSection />
      <TechStackSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
