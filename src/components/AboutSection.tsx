
import { Award, CheckCircle, Globe } from "lucide-react";
import { useRevealAnimation } from "@/hooks/use-reveal-animation";
import { useRef, useEffect } from "react";

export default function AboutSection() {
  const { ref, isInView } = useRevealAnimation();
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect
  useEffect(() => {
    const handleParallax = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        const elements = parallaxRef.current.querySelectorAll('.parallax');
        
        elements.forEach((el) => {
          const element = el as HTMLElement;
          const speed = element.dataset.speed || "0.1";
          const yPos = -(scrollY * parseFloat(speed));
          element.style.transform = `translateY(${yPos}px)`;
        });
      }
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);
  
  return (
    <section 
      ref={ref} 
      id="about" 
      className={`py-20 px-6 transition-all duration-1000 transform ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      } relative overflow-hidden`}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 -z-10"></div>
      <div className="absolute -top-20 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-float -z-10"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-400/5 rounded-full filter blur-2xl animate-pulse-subtle -z-10"></div>
      
      <div className="max-w-6xl mx-auto" ref={parallaxRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading inline-block">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          
          {/* Animated accent decorations */}
          <div className="absolute left-1/4 w-6 h-6 rounded-full bg-primary/10 parallax" data-speed="0.05"></div>
          <div className="absolute right-1/3 w-4 h-4 rounded-full bg-blue-500/10 parallax" data-speed="0.08"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Animated content blocks */}
            <p className={`text-lg transform transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ transitionDelay: "0.1s" }}>
              I'm a dedicated Virtual Assistant specializing in administrative support,
              customer service, and data management. With strong attention to detail
              and excellent organizational skills, I help clients streamline their
              operations and improve efficiency.
            </p>
            <p className={`text-lg transform transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ transitionDelay: "0.2s" }}>
              Based in Lagos, Nigeria, I work remotely with clients globally, providing
              professional and reliable assistance to help businesses and entrepreneurs
              focus on their core operations.
            </p>
            
            <div className="space-y-4">
              <div className={`flex items-start gap-3 transform transition-all duration-700 ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`} style={{ transitionDelay: "0.3s" }}>
                <div className="p-1 rounded-full bg-primary/10 transform transition-all duration-500 group-hover:bg-primary/20">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Efficient Administrative Support</h3>
                  <p className="text-muted-foreground">Handling emails, scheduling, and organizational tasks with precision</p>
                </div>
              </div>
              
              <div className={`flex items-start gap-3 transform transition-all duration-700 ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`} style={{ transitionDelay: "0.4s" }}>
                <div className="p-1 rounded-full bg-primary/10 transform transition-all duration-500 group-hover:bg-primary/20">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Customer Service Excellence</h3>
                  <p className="text-muted-foreground">Providing responsive, professional client interactions</p>
                </div>
              </div>
              
              <div className={`flex items-start gap-3 transform transition-all duration-700 ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`} style={{ transitionDelay: "0.5s" }}>
                <div className="p-1 rounded-full bg-primary/10 transform transition-all duration-500 group-hover:bg-primary/20">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Research & Data Management</h3>
                  <p className="text-muted-foreground">Delivering thorough research and organized data systems</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`glass p-8 rounded-2xl space-y-8 transform transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-12 rotate-2'
          } hover:shadow-lg hover:shadow-primary/5 transition-all duration-500`}>
            <div className={`flex items-center gap-6 transform transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`} style={{ transitionDelay: "0.6s" }}>
              <div className="bg-primary/10 p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-primary/20">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-1">Remote Specialist</h3>
                <p className="text-muted-foreground">Working effectively from any location</p>
              </div>
            </div>
            
            <div className={`flex items-center gap-6 transform transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`} style={{ transitionDelay: "0.7s" }}>
              <div className="bg-primary/10 p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-primary/20">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-1">Education</h3>
                <p className="text-muted-foreground">Bachelor of Nursing Science, Lagos State University</p>
              </div>
            </div>
            
            <div className={`border-t border-border pt-6 mt-6 transform transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ transitionDelay: "0.8s" }}>
              <h3 className="text-lg font-medium mb-4">Location & Contact</h3>
              <div className="space-y-2">
                <p>Lagos, Nigeria</p>
                <p>12, Awobona Road, Iju-Ishaga</p>
                <p className="text-primary relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300 cursor-pointer">faustinaotti@gmail.com</p>
                <p>+234 814 505 9520, +234 902 657 8638</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
