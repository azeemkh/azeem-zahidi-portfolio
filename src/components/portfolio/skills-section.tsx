import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const topSkills = ["GraphQL", "Tailwind CSS", "Figma"]

const technicalSkills = [
  "React.js", "Next.js", "Node.js", "Python", "TypeScript", "JavaScript",
  "Redux", "Express.js", "MongoDB", "PostgreSQL", "AWS", "Azure",
  "Docker", "Kubernetes", "Git", "Jest", "Cypress", "Webpack",
  "REST APIs", "Microservices", "Agile", "MERN Stack"
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6 shadow-[var(--shadow-medium)]">
            <h3 className="text-xl font-semibold mb-4 text-professional-accent">Top Skills</h3>
            <div className="flex flex-wrap gap-2">
              {topSkills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="default"
                  className="bg-professional-accent text-white hover:bg-professional-accent/90"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 shadow-[var(--shadow-medium)]">
            <h3 className="text-xl font-semibold mb-4 text-professional-blue">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="bg-secondary hover:bg-secondary/80"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}