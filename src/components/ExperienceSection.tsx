
import { Briefcase, Calendar } from "lucide-react";
import { useRevealAnimation } from "@/hooks/use-reveal-animation";

// Define work experience data
const workExperience = [
  {
    title: "Virtual Assistant",
    company: "Freelance",
    location: "Remote",
    period: "2023 - Present",
    responsibilities: [
      "Managed email correspondence and calendar scheduling for clients",
      "Conducted online research and data compilation",
      "Handled basic bookkeeping and expense tracking",
      "Provided customer service support and communication management"
    ]
  },
  {
    title: "Administrative Assistant",
    company: "Lagos State University Teaching Hospital",
    location: "Lagos, Nigeria",
    period: "2021 - 2023",
    responsibilities: [
      "Maintained electronic and paper filing systems",
      "Coordinated appointments and meetings for department heads",
      "Processed forms and documentation for patient intake",
      "Assisted with general office administration tasks"
    ]
  }
];

// Define volunteer experience data
const volunteerExperience = [
  {
    title: "Community Health Volunteer",
    company: "Lagos Health Initiative",
    period: "2020 - 2022",
    responsibilities: [
      "Assisted with community health outreach programs",
      "Documented patient information during free health screenings",
      "Provided administrative support for health education workshops"
    ]
  },
  {
    title: "Administrative Support Volunteer",
    company: "Youth Empowerment Foundation",
    period: "2019 - 2020",
    responsibilities: [
      "Managed email communications and calendar scheduling",
      "Assisted with event organization and registration",
      "Provided data entry and document preparation support"
    ]
  }
];

export default function ExperienceSection() {
  const { ref, isInView } = useRevealAnimation();
  
  return (
    <section 
      ref={ref} 
      id="experience" 
      className={`py-20 px-6 bg-secondary/50 transition-all duration-1000 transform ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading inline-block">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div className="stagger-animate">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Professional Experience
              </h3>
              
              <div className="timeline-container">
                {workExperience.map((job, index) => (
                  <div key={index} className="mb-10 relative">
                    <div className="timeline-dot"></div>
                    <div className="glass rounded-xl p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <h4 className="text-xl font-medium">{job.title}</h4>
                        <div className="flex items-center text-sm text-muted-foreground mt-1 md:mt-0">
                          <Calendar className="h-4 w-4 mr-1" />
                          {job.period}
                        </div>
                      </div>
                      
                      <p className="mb-3 text-primary">{job.company} · {job.location}</p>
                      
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {job.responsibilities.map((item, i) => (
                          <li key={i} className="pl-2">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-12">
            <div className="stagger-animate">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Volunteer Experience
              </h3>
              
              <div className="timeline-container">
                {volunteerExperience.map((job, index) => (
                  <div key={index} className="mb-10 relative">
                    <div className="timeline-dot"></div>
                    <div className="glass rounded-xl p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <h4 className="text-xl font-medium">{job.title}</h4>
                        <div className="flex items-center text-sm text-muted-foreground mt-1 md:mt-0">
                          <Calendar className="h-4 w-4 mr-1" />
                          {job.period}
                        </div>
                      </div>
                      
                      <p className="mb-3 text-primary">{job.company}</p>
                      
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {job.responsibilities.map((item, i) => (
                          <li key={i} className="pl-2">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="stagger-animate">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Education
              </h3>
              
              <div className="timeline-container">
                <div className="mb-6 relative">
                  <div className="timeline-dot"></div>
                  <div className="glass rounded-xl p-6">
                    <h4 className="text-xl font-medium">Bachelor of Nursing Science</h4>
                    <p className="text-primary">Lagos State University, Ojo – Lagos, Nigeria</p>
                    <p className="text-muted-foreground">2018 - 2023</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="timeline-dot"></div>
                  <div className="glass rounded-xl p-6">
                    <h4 className="text-xl font-medium">High School Diploma</h4>
                    <p className="text-primary">Barachel Model College - Lagos, Nigeria</p>
                    <p className="text-muted-foreground">2011 - 2017</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
