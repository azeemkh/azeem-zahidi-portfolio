import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    company: "Deloitte",
    position: "Senior Software Developer",
    duration: "November 2024 - Present (9 months)",
    location: "Bengaluru, Karnataka, India",
    current: true
  },
  {
    company: "IBM", 
    position: "Senior System Analyst",
    duration: "April 2022 - November 2024 (2 years 8 months)",
    location: "India"
  },
  {
    company: "GlobalLogic",
    position: "Consultant", 
    duration: "November 2021 - March 2022 (5 months)",
    location: "India"
  },
  {
    company: "Genpact",
    position: "Lead Consultant",
    duration: "August 2018 - November 2021 (3 years 4 months)", 
    location: "India"
  },
  {
    company: "Tech Mahindra",
    position: "Sr. Software developer",
    duration: "October 2017 - August 2018 (11 months)",
    location: "Bengaluru Area, India"
  },
  {
    company: "Genesys International Corporation Ltd",
    position: "GIS Engineer",
    duration: "September 2016 - October 2017 (1 year 2 months)",
    location: "Mumbai Area, India"
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Professional Experience</h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)] transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-professional-blue">{exp.position}</h3>
                  <p className="text-lg font-medium text-foreground">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  {exp.current && (
                    <Badge className="bg-professional-accent text-white mb-2">Current</Badge>
                  )}
                  <p className="text-sm text-professional-gray">{exp.duration}</p>
                  <p className="text-sm text-professional-gray">{exp.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}