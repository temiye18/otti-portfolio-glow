
import { ArrowUp, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">
              <span className="text-gradient">Otti Faustina</span>
            </h3>
            <p className="text-muted-foreground mt-2">Virtual Assistant</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="mailto:faustinaotti@gmail.com"
              className="bg-secondary/80 p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="tel:+2348145059520"
              className="bg-secondary/80 p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Phone"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/otti-faustina"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary/80 p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Otti Faustina. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="bg-secondary/80 p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
