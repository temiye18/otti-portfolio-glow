
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-lg md:text-xl font-bold font-heading">
          <span className="text-primary">Otti Faustina</span>
        </a>

        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => handleScrollToSection('about')} className="hover:text-primary transition-colors">
            About
          </button>
          <button onClick={() => handleScrollToSection('experience')} className="hover:text-primary transition-colors">
            Experience
          </button>
          <button onClick={() => handleScrollToSection('skills')} className="hover:text-primary transition-colors">
            Skills
          </button>
          <button onClick={() => handleScrollToSection('contact')} className="hover:text-primary transition-colors">
            Contact
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => handleScrollToSection('contact')}
            className="hidden md:inline-flex button-primary px-4 py-2 rounded-md font-medium"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </header>
  );
}
