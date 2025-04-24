import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { useRevealAnimation } from "@/hooks/use-reveal-animation";

export default function ContactSection() {
  const { ref, isInView } = useRevealAnimation();
  
  return (
    <section 
      ref={ref} 
      id="contact" 
      className={`py-20 px-6 bg-secondary/50 transition-all duration-1000 transform ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading inline-block">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            I'm always open to new opportunities and connections.
            Feel free to reach out if you need assistance!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in-right">
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Email</h4>
                    <a href="mailto:faustinaotti@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      faustinaotti@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Phone</h4>
                    <p className="text-muted-foreground">+234 814 505 9520</p>
                    <p className="text-muted-foreground">+234 902 657 8638</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Location</h4>
                    <p className="text-muted-foreground">Lagos, Nigeria</p>
                    <p className="text-muted-foreground">Iju-Ishaga</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/otti-faustina" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      linkedin.com/in/otti-faustina
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up">
            <form className="glass rounded-xl p-8">
              <h3 className="text-2xl font-medium mb-6">Send me a message</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-gradient w-full py-3 rounded-lg font-medium"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
