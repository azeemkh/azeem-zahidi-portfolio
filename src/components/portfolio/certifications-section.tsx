import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

const certifications = [
  "Microsoft Certified: Azure Fundamentals",
  "Build Real World AI Applications with Gemini and Imagen Skill Badge",
  "Develop GenAI Apps with Gemini and Streamlit Skill Badge", 
  "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG Skill Badge",
  "Prompt Design in Vertex AI Skill Badge"
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Certifications</h2>
        
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-4 shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)] transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Award className="h-6 w-6 text-professional-accent" />
                </div>
                <p className="text-sm font-medium leading-relaxed">{cert}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}