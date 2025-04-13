
import { CheckCircle, Star } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Administrative Skills",
      skills: [
        { name: "Appointment Scheduling", rating: 5 },
        { name: "Data Entry", rating: 5 },
        { name: "Email Management", rating: 5 },
        { name: "Time Management", rating: 5 },
        { name: "Organizational Skills", rating: 5 }
      ]
    },
    {
      title: "Technical Skills",
      skills: [
        { name: "Google Workspace", rating: 5 },
        { name: "Microsoft Office", rating: 5 },
        { name: "CRM Tools", rating: 3 },
        { name: "Web Research", rating: 5 }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Communication", rating: 5 },
        { name: "Customer Service", rating: 5 },
        { name: "Attention to Detail", rating: 5 },
        { name: "Critical Thinking", rating: 4 },
        { name: "Collaboration", rating: 5 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
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
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={18}
                          className={`${
                            starIndex < skill.rating 
                              ? "text-primary fill-primary" 
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
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
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <h3 className="text-xl font-medium mb-6">Tools & Technologies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              {[
                { name: "Google Workspace", level: "Advanced" },
                { name: "Microsoft Office", level: "Advanced" },
                { name: "CRM Tools", level: "Basic" },
                { name: "Email Platforms", level: "Advanced" },
                { name: "Scheduling Software", level: "Advanced" },
                { name: "Research Tools", level: "Advanced" }
              ].map((tool, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-medium">{tool.name}</span>
                  <span className="text-sm text-primary">{tool.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
