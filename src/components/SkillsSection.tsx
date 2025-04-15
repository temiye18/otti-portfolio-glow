import { Icon } from "lucide-react";
import { useRevealAnimation } from "@/hooks/use-reveal-animation";
import { 
  MailCheck, FileSpreadsheet, Clock, ClipboardCheck, FolderKanban, 
  Chrome, Monitor, Users, MessageSquare, CheckSquare, Brain, 
  UserCheck, Database, Package, Search, TextSearch
} from "lucide-react";

export default function SkillsSection() {
  const { ref, isInView } = useRevealAnimation();
  
  return (
    <section 
      ref={ref} 
      id="skills" 
      className={`py-20 px-6 transition-all duration-1000 transform ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading inline-block">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-medium mb-6 text-center">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 hover:bg-secondary/40 rounded-md transition-colors">
                    {skill.icon}
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <h3 className="text-xl font-medium mb-6">Key Competencies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Administrative Support",
                "Customer Support",
                "Data Entry",
                "Email Management",
                "Appointment Scheduling",
                "Web Research",
                "Time Management",
                "Attention to Detail"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckSquare className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <h3 className="text-xl font-medium mb-6">Tools & Technologies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              {[
                { name: "Google Workspace", icon: <Chrome className="h-5 w-5 text-primary mr-2" />, level: "Advanced" },
                { name: "Microsoft Office", icon: <Monitor className="h-5 w-5 text-primary mr-2" />, level: "Advanced" },
                { name: "CRM Tools", icon: <Users className="h-5 w-5 text-primary mr-2" />, level: "Basic" },
                { name: "Email Platforms", icon: <MailCheck className="h-5 w-5 text-primary mr-2" />, level: "Advanced" },
                { name: "Scheduling Software", icon: <Clock className="h-5 w-5 text-primary mr-2" />, level: "Advanced" },
                { name: "Research Tools", icon: <Search className="h-5 w-5 text-primary mr-2" />, level: "Advanced" }
              ].map((tool, i) => (
                <div key={i} className="flex items-center">
                  {tool.icon}
                  <div className="flex flex-col">
                    <span className="font-medium">{tool.name}</span>
                    <span className="text-sm text-primary">{tool.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
