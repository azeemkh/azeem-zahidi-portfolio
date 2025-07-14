import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
        
        <Card className="p-8 shadow-[var(--shadow-medium)] max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-shrink-0">
              <GraduationCap className="h-8 w-8 text-professional-accent" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-professional-blue">Bachelor of Technology - BTech</h3>
              <p className="text-lg text-foreground">Computer Science</p>
            </div>
          </div>
          <div className="ml-12">
            <p className="text-professional-gray font-medium">Dr. A.P.J. Abdul Kalam Technical University</p>
            <p className="text-sm text-professional-gray">August 2006 - June 2010</p>
          </div>
        </Card>
      </div>
    </section>
  )
}