
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ScrollToTop from "@/components/ScrollToTop";
import SkillsSection from "@/components/SkillsSection";
import { useEffect } from "react";

const Index = () => {
  // Set the page title and ensure dark mode is applied initially
  useEffect(() => {
    document.title = "Otti Faustina | Virtual Assistant";
    
    // Ensure dark mode is applied by default
    if (!document.documentElement.classList.contains('dark') && 
        localStorage.getItem('theme') !== 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <PortfolioSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
