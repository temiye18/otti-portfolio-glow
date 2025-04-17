
import { 
  MailCheck, FileSpreadsheet, Clock, ClipboardCheck, FolderKanban, 
  Chrome, Monitor, Users, MessageSquare, CheckSquare, Brain, 
  UserCheck, Database, Package, Search, TextSearch
} from "lucide-react";
import { useRevealAnimation } from "@/hooks/use-reveal-animation";
import { useEffect, useState, useRef } from "react";

// Define skills categories
const skillCategories = [
  {
    title: "Administrative",
    skills: [
      { name: "Email Management", icon: <MailCheck className="h-5 w-5 text-primary" /> },
      { name: "Data Entry", icon: <FileSpreadsheet className="h-5 w-5 text-primary" /> },
      { name: "Appointment Scheduling", icon: <Clock className="h-5 w-5 text-primary" /> },
      { name: "Task Management", icon: <ClipboardCheck className="h-5 w-5 text-primary" /> },
      { name: "Project Organization", icon: <FolderKanban className="h-5 w-5 text-primary" /> }
    ]
  },
  {
    title: "Communication",
    skills: [
      { name: "Customer Support", icon: <MessageSquare className="h-5 w-5 text-primary" /> },
      { name: "Email Correspondence", icon: <MailCheck className="h-5 w-5 text-primary" /> },
      { name: "Client Relationship", icon: <UserCheck className="h-5 w-5 text-primary" /> },
      { name: "Documentation", icon: <FileSpreadsheet className="h-5 w-5 text-primary" /> },
      { name: "Meeting Coordination", icon: <Users className="h-5 w-5 text-primary" /> }
    ]
  },
  {
    title: "Research & Analysis",
    skills: [
      { name: "Web Research", icon: <Search className="h-5 w-5 text-primary" /> },
      { name: "Data Collection", icon: <Database className="h-5 w-5 text-primary" /> },
      { name: "Content Research", icon: <TextSearch className="h-5 w-5 text-primary" /> },
      { name: "Information Analysis", icon: <Brain className="h-5 w-5 text-primary" /> },
      { name: "Resource Organization", icon: <Package className="h-5 w-5 text-primary" /> }
    ]
  }
];

export default function SkillsSection() {
  const { ref, isInView } = useRevealAnimation();
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: boolean}>({});
  
  // Enhanced staggered animation for skills
  const handleSkillAnimation = () => {
    const newAnimatedSkills: {[key: string]: boolean} = {};
    
    skillCategories.forEach((category, catIndex) => {
      category.skills.forEach((skill, skillIndex) => {
        const key = `${catIndex}-${skillIndex}`;
        setTimeout(() => {
          setAnimatedSkills(prev => ({...prev, [key]: true}));
        }, (catIndex * 200) + (skillIndex * 100));
      });
    });
    
    return newAnimatedSkills;
  };
  
  useEffect(() => {
    if (isInView) {
      handleSkillAnimation();
    }
  }, [isInView]);
  
  return (
    <section 
      ref={ref} 
      id="skills" 
      className={`py-20 px-6 transition-all duration-1000 transform ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      } relative overflow-hidden`}
    >
      {/* Enhanced background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/5 rounded-full filter blur-2xl animate-float -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading inline-block relative">
            My <span className="text-gradient">Skills</span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></div>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`glass rounded-xl p-6 transform transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-medium mb-6 text-center relative inline-block">
                {category.title}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, i) => {
                  const animKey = `${index}-${i}`;
                  return (
                    <div 
                      key={i} 
                      className={`flex items-center gap-3 p-2 hover:bg-secondary/40 rounded-md transition-all duration-300 transform ${
                        animatedSkills[animKey] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${(index * 100) + (i * 100)}ms` }}
                    >
                      <div className="p-1 rounded-full bg-primary/10 transform transition-transform duration-300 group-hover:scale-110">
                        {skill.icon}
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            className={`glass rounded-xl p-6 transform transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            } hover:shadow-lg hover:shadow-primary/5 transition-all duration-300`}
            style={{ transitionDelay: "0.6s" }}
          >
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
                <div 
                  key={i} 
                  className={`flex items-center gap-2 transform transition-all duration-500 ${
                    isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${0.8 + (i * 0.1)}s` }}
                >
                  <CheckSquare className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            className={`glass rounded-xl p-6 transform transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            } hover:shadow-lg hover:shadow-primary/5 transition-all duration-300`}
            style={{ transitionDelay: "0.8s" }}
          >
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
                <div 
                  key={i} 
                  className={`flex items-center transform transition-all duration-500 ${
                    isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${1.0 + (i * 0.1)}s` }}
                >
                  <div className="p-1 rounded-full bg-primary/10">
                    {tool.icon}
                  </div>
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
