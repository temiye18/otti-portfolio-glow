
import { Briefcase, Calendar } from "lucide-react";

export default function ExperienceSection() {
  const workExperience = [
    {
      title: "Virtual Assistant",
      company: "Invictus Development Centre",
      location: "United Kingdom (Remote)",
      period: "October 2024 - Present",
      responsibilities: [
        "Manage inbound and outbound communications with clients and stakeholders, which enhances customer service and retention rates.",
        "Perform administrative tasks, including appointment scheduling, creating meeting agendas and making calls to clients which improves team coordination and project efficiency.",
        "Conduct efficient data entry contributing to an increase in operational efficiency."
      ]
    },
    {
      title: "Virtual Assistant (Freelance)",
      company: "Self-Employed",
      location: "Remote",
      period: "September 2024 - October 2024",
      responsibilities: [
        "Streamlined administrative processes for client, reducing their time spent on repetitive tasks and improving overall operational efficiency.",
        "Delivered consistent, high-quality customer service by promptly addressing client inquiries and resolving issues, maintaining a high client satisfaction rate.",
        "Conducted in-depth web research to deliver actionable insights, leading to improvement in clients' decision-making and business strategies.",
        "Managed email inboxes, ensuring timely responses and a reduction in client response times enhancing customer satisfaction."
      ]
    }
  ];
  
  const volunteerExperience = [
    {
      title: "Director of Monitoring and Evaluation",
      company: "Asido Campus Network Foundation",
      period: "April 2023 - May 2024",
      responsibilities: [
        "Monitored and tracked team performance and progress of projects, ensuring adherence to objectives and timelines.",
        "Conducted thorough assessments to identify potential and actual challenges, and then implementing initiatives to mitigate risks.",
        "Participated in the World Mental Health Awareness Day Walk, contributing to raising awareness and promoting mental health advocacy.",
        "Prepared comprehensive reports on event outcomes and key findings, ensuring transparency and accountability in project management."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-secondary/50">
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
