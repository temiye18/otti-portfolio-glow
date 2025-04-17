
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly with visual feedback
  const scrollToTop = () => {
    setIsClicked(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    
    // Reset the click state after animation completes
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Button
          className={`fixed bottom-8 right-8 z-50 rounded-full shadow-lg 
            bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-600
            dark:from-primary dark:to-blue-400
            text-primary-foreground animate-fade-in hover:translate-y-[-2px] transition-all 
            scroll-top-button ${isClicked ? 'scale-90' : 'scale-100'}`}
          size="icon"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className={`h-5 w-5 transition-transform duration-300 ${isClicked ? 'translate-y-[-2px]' : 'translate-y-0'}`} />
          <span className="sr-only">Scroll to top</span>
          
          {/* Ripple effect on click */}
          <span className={`absolute inset-0 rounded-full bg-white/30 transform scale-0 ${isClicked ? 'animate-ping' : ''}`}></span>
        </Button>
      )}
    </>
  );
}
