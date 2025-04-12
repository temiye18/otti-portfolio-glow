
import { Award, CheckCircle, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading inline-block">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 stagger-animate">
            <p className="text-lg">
              I'm a dedicated Virtual Assistant specializing in administrative support,
              customer service, and data management. With strong attention to detail
              and excellent organizational skills, I help clients streamline their
              operations and improve efficiency.
            </p>
            <p className="text-lg">
              Based in Lagos, Nigeria, I work remotely with clients globally, providing
              professional and reliable assistance to help businesses and entrepreneurs
              focus on their core operations.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Efficient Administrative Support</h3>
                  <p className="text-muted-foreground">Handling emails, scheduling, and organizational tasks with precision</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Customer Service Excellence</h3>
                  <p className="text-muted-foreground">Providing responsive, professional client interactions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Research & Data Management</h3>
                  <p className="text-muted-foreground">Delivering thorough research and organized data systems</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl space-y-8 stagger-animate">
            <div className="flex items-center gap-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-1">Remote Specialist</h3>
                <p className="text-muted-foreground">Working effectively from any location</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-1">Education</h3>
                <p className="text-muted-foreground">Bachelor of Nursing Science, Lagos State University</p>
              </div>
            </div>
            
            <div className="border-t border-border pt-6 mt-6">
              <h3 className="text-lg font-medium mb-4">Location & Contact</h3>
              <div className="space-y-2">
                <p>Lagos, Nigeria</p>
                <p>12, Awobona Road, Iju-Ishaga</p>
                <p className="text-primary">faustinaotti@gmail.com</p>
                <p>+234 814 505 9520, +234 902 657 8638</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
