
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function HeroSection() {
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

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 pb-12 px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-900/10 dark:to-purple-900/20 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-[10%] w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-subtle" />
      <div className="absolute bottom-20 left-[10%] w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse-subtle" />
      
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Text content */}
        <div>
          <div className="animate-fade-in-up">
            <h4 className="text-lg md:text-xl font-medium mb-4 text-primary">
              Virtual Assistant
            </h4>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading">
              Hello, I'm{" "}
              <span className="font-heading text-primary">Otti Faustina</span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-lg md:text-xl max-w-2xl mb-8 text-muted-foreground">
              Experienced Virtual Assistant with expertise in administrative support, 
              appointment scheduling, customer service, and data management.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <button 
              onClick={() => handleScrollToSection('contact')}
              className="button-primary px-6 py-3 rounded-lg font-medium flex items-center justify-center"
              aria-label="Contact me"
            >
              Get in Touch
            </button>
            <button 
              onClick={() => handleScrollToSection('experience')}
              className="button-secondary px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
              aria-label="View my experience"
            >
              See My Experience
            </button>
          </div>
        </div>
        
        {/* Professional Image */}
        <div className="hidden md:flex justify-center animate-fade-in-right" style={{ animationDelay: "0.5s" }}>
          <div className="relative">
            {/* Main image with fancy border and shadow */}
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img 
                src="/public/lovable-uploads/6a59583c-a769-4d9f-8e2c-ea88264814a4.png" 
                alt="Otti Faustina" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Decorative circle */}
            <div className="absolute -z-10 w-80 h-80 rounded-full border-2 border-primary/30 -top-3 -right-3"></div>
            <div className="absolute -z-10 w-80 h-80 rounded-full border-2 border-primary/20 -bottom-3 -left-3"></div>
          </div>
        </div>
        
        {/* Mobile profile picture */}
        <div className="flex md:hidden justify-center mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Avatar className="w-40 h-40 border-4 border-primary/20 shadow-lg">
            <AvatarImage 
              src="/public/lovable-uploads/6a59583c-a769-4d9f-8e2c-ea88264814a4.png" 
              alt="Otti Faustina" 
            />
            <AvatarFallback>OF</AvatarFallback>
          </Avatar>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={() => handleScrollToSection('about')} aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 opacity-60" />
        </button>
      </div>
    </section>
  );
}
