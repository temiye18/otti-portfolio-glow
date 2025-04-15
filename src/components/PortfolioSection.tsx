import { useState } from "react";
import { useRevealAnimation } from "@/hooks/use-reveal-animation";
import { 
  Calendar, 
  CheckCheck, 
  Eye, 
  X,
  ChevronLeft,
  ChevronRight,
  Plane,
  FileText
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
    icon: <Calendar className="h-6 w-6 text-primary" />,
    images: ["/lovable-uploads/17ec0bcf-7414-467b-9b13-7558182ca396.png"]
  },
  {
    title: "Travel Itinerary Planning",
    description: "I create comprehensive travel itineraries for business professionals, handling all details from flight bookings to hotel accommodations and local transportation. My meticulous planning ensures smooth business trips with organized schedules, clear directions, and contingency plans for any unexpected situations.",
    skills: ["Flight booking coordination", "Accommodation arrangements", "Transportation planning", "Schedule optimization", "Travel documentation"],
    image: "/lovable-uploads/ff675509-6854-4551-aca8-8af3459ae25f.png",
    icon: <Plane className="h-6 w-6 text-primary" />,
    images: [
      "/lovable-uploads/ff675509-6854-4551-aca8-8af3459ae25f.png",
      "/lovable-uploads/28c31b0e-f5b5-4c19-9ed1-0fa241a43e23.png"
    ]
  },
  {
    title: "Meeting Agenda Creation",
    description: "I develop structured meeting agendas that optimize team productivity and ensure all critical topics are addressed efficiently. My detailed agendas include clear time allocations, responsible parties, and expected outcomes to keep discussions focused and productive. I also monitor action items to ensure accountability and follow-through after meetings.",
    skills: ["Time management", "Topic prioritization", "Role assignment", "Action item tracking", "Meeting documentation"],
    image: "/lovable-uploads/f4dadfcd-5b44-47e0-a895-529b55216fad.png",
    icon: <FileText className="h-6 w-6 text-primary" />,
    images: [
      "/lovable-uploads/f4dadfcd-5b44-47e0-a895-529b55216fad.png",
      "/lovable-uploads/15964fd8-bdd1-4dc1-975c-22ac724808fb.png"
    ]
  }
  // More portfolio items can be added here in the future
];

export default function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { ref, isInView } = useRevealAnimation();
  
  return (
    <section 
      ref={ref} 
      id="portfolio" 
      className={`py-20 px-6 transition-all duration-1000 transform ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
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
                  <DialogContent className="max-w-[90vw] max-h-[90vh] w-auto h-auto bg-transparent border-none p-0 shadow-none">
                    <div className="relative">
                      <DialogClose className="absolute top-2 right-2 bg-black/60 p-2 rounded-full z-10">
                        <X className="h-5 w-5 text-white" />
                      </DialogClose>
                      
                      {item.images && item.images.length > 1 ? (
                        <Carousel className="w-full max-w-full">
                          <CarouselContent>
                            {item.images.map((img, imgIndex) => (
                              <CarouselItem key={imgIndex}>
                                <div className="flex items-center justify-center p-1">
                                  <img
                                    src={img}
                                    alt={`${item.title} ${imgIndex + 1}`}
                                    className="max-w-full max-h-[85vh] object-contain"
                                  />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-2 lg:-left-12" />
                          <CarouselNext className="right-2 lg:-right-12" />
                        </Carousel>
                      ) : (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="max-w-full max-h-[85vh] object-contain"
                        />
                      )}
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
