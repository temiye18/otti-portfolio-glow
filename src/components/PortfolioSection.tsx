
import { useState } from "react";
import { 
  Calendar, 
  ClockCheck, 
  Eye, 
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogOverlay,
  DialogClose,
  DialogTrigger
} from "@/components/ui/dialog";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const portfolioItems = [
  {
    title: "Calendar Management",
    description: "I efficiently organize and manage complex schedules, ensuring all appointments and meetings are properly set with appropriate reminders. My calendar management skills include coordinating across time zones, prioritizing tasks, and ensuring my clients never miss important events or deadlines.",
    skills: ["Appointment scheduling", "Time blocking", "Priority management", "Reminder systems", "Multi-calendar coordination"],
    image: "/lovable-uploads/17ec0bcf-7414-467b-9b13-7558182ca396.png",
    icon: <Calendar className="h-6 w-6 text-primary" />
  }
  // More portfolio items can be added here in the future
];

export default function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading inline-block">
            My <span className="text-gradient">Work</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Examples of my work and expertise in various fields
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className="glass rounded-xl overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {item.icon}
                  <h3 className="text-xl font-medium">{item.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.skills.map((skill, i) => (
                    <span key={i} className="text-sm bg-secondary/50 px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <button 
                      className="relative w-full h-48 overflow-hidden rounded-lg mt-4 cursor-pointer group"
                      onClick={() => setSelectedImage(item.image)}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <Eye className="h-8 w-8 text-white" />
                      </div>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl bg-transparent border-none p-0 shadow-none">
                    <div className="relative">
                      <DialogClose className="absolute top-2 right-2 bg-black/60 p-2 rounded-full z-10">
                        <X className="h-5 w-5 text-white" />
                      </DialogClose>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full rounded-lg"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
