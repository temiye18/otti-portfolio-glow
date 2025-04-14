
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
      // Adding a small delay to ensure DOM is ready
      setTimeout(() => {
        const yOffset = -80; // Offset to account for fixed header
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setIsDrawerOpen(false); // Close the drawer when clicking a nav link
      }, 100);
    }
  };
  
  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'My Work' },
    { id: 'contact', label: 'Contact' }
  ];

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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => handleScrollToSection(link.id)} 
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          {/* Mobile Hamburger Menu */}
          {isMobile ? (
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader className="text-left">
                  <DrawerTitle>Menu</DrawerTitle>
                </DrawerHeader>
                <div className="px-4 py-2">
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <button
                        key={link.id}
                        onClick={() => handleScrollToSection(link.id)}
                        className="w-full text-left py-2 px-2 hover:bg-accent rounded-md transition-colors hover:text-primary"
                      >
                        {link.label}
                      </button>
                    ))}
                  </nav>
                </div>
              </DrawerContent>
            </Drawer>
          ) : (
            <button
              onClick={() => handleScrollToSection('contact')}
              className="hidden md:inline-flex button-primary px-4 py-2 rounded-md font-medium"
            >
              Get in Touch
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
