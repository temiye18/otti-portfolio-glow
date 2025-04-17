
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typingText, setTypingText] = useState("");
  const fullText = "Hello, I'm Otti Faustina";
  
  // Handle scroll to section function
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Adding a small delay to ensure DOM is ready
      setTimeout(() => {
        const yOffset = -80; // Offset to account for fixed header
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 100);
    }
  };

  // Typing animation effect
  useEffect(() => {
    setIsLoaded(true);
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypingText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 pb-12 px-6">
      {/* Enhanced background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-900/10 dark:to-purple-900/20 -z-10" />
      
      {/* Animated decorative elements */}
      <div className="absolute top-20 right-[10%] w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-subtle" />
      <div className="absolute bottom-20 left-[10%] w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse-subtle" />
      <div className="absolute top-40 left-[20%] w-48 h-48 bg-primary/5 rounded-full filter blur-2xl animate-float" />
      <div className="absolute bottom-40 right-[15%] w-32 h-32 bg-blue-400/5 rounded-full filter blur-xl animate-bounce-gentle" />
      
      {/* Shimmer effect layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent bg-[length:500px_100%] animate-shimmer opacity-30 -z-10" />
      
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Text content with enhanced animations */}
        <div>
          <div className={`transform transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: "0.1s" }}>
            <h4 className="text-lg md:text-xl font-medium mb-4 text-primary relative overflow-hidden">
              <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary after:transform after:translate-x-[-100%] after:transition-transform after:duration-700 after:delay-500" style={{ 
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
                transitionDelay: "0.3s"
              }}>
                Virtual Assistant
              </span>
              {isLoaded && <span className="absolute bottom-0 left-0 h-[2px] w-full bg-primary animate-shimmer"></span>}
            </h4>
          </div>
          
          <div className={`transform transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: "0.3s" }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading typing-cursor">
              {typingText}
            </h1>
          </div>
          
          <div className={`transform transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: "0.5s" }}>
            <p className="text-lg md:text-xl max-w-2xl mb-8 text-muted-foreground">
              Experienced Virtual Assistant with expertise in administrative support, 
              appointment scheduling, customer service, and data management.
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: "0.6s" }}>
            <button 
              onClick={() => handleScrollToSection('contact')}
              className="button-primary px-6 py-3 rounded-lg font-medium flex items-center justify-center overflow-hidden group relative"
              aria-label="Contact me"
            >
              <span className="absolute w-0 h-full bg-white/20 transform -skew-x-12 transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative">Get in Touch</span>
            </button>
            <button 
              onClick={() => handleScrollToSection('experience')}
              className="button-secondary px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 group"
              aria-label="View my experience"
            >
              <span className="relative transition-transform duration-300 group-hover:translate-x-1">See My Experience</span>
            </button>
          </div>
        </div>
        
        {/* Professional Image with enhanced animations */}
        <div className="hidden md:flex justify-center">
          <div className={`relative transform transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: "0.7s" }}>
            {/* Main image with fancy border and shadow */}
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl relative">
              <img 
                src="https://res.cloudinary.com/shareupload/image/upload/v1744711963/WhatsApp_Image_2025-04-14_at_00.17.21_bc3c5f44_oxtwhf.jpg" 
                alt="Otti Faustina" 
                className="w-full h-full object-cover object-center transform transition-all duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Animated decorative circles */}
            <div className="absolute -z-10 w-80 h-80 rounded-full border-2 border-primary/30 -top-3 -right-3 animate-spin-slow"></div>
            <div className="absolute -z-10 w-80 h-80 rounded-full border-2 border-primary/20 -bottom-3 -left-3 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
            
            {/* Additional decorative elements */}
            <div className="absolute -z-10 w-16 h-16 rounded-full bg-primary/5 top-5 -right-10 animate-pulse-subtle"></div>
            <div className="absolute -z-10 w-12 h-12 rounded-full bg-blue-400/10 -bottom-6 right-10 animate-float"></div>
          </div>
        </div>
        
        {/* Mobile profile picture with enhanced animations */}
        <div className={`flex md:hidden justify-center mb-8 transform transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: "0.4s" }}>
          <Avatar className="w-40 h-40 border-4 border-primary/20 shadow-lg overflow-hidden group">
            <AvatarImage 
              src="https://res.cloudinary.com/shareupload/image/upload/v1744711963/WhatsApp_Image_2025-04-14_at_00.17.21_bc3c5f44_oxtwhf.jpg" 
              alt="Otti Faustina" 
              className="object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <AvatarFallback>OF</AvatarFallback>
          </Avatar>
        </div>
      </div>
      
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`} style={{ transitionDelay: "1.5s" }}>
        <button 
          onClick={() => handleScrollToSection('about')} 
          aria-label="Scroll down"
          className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-300"
        >
          <ArrowDown className="h-6 w-6 opacity-60 animate-bounce-gentle" />
        </button>
      </div>
    </section>
  );
}
