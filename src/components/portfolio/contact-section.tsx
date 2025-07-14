import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
        
        <Card className="p-8 md:p-12 shadow-[var(--shadow-strong)] text-center">
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology and innovation.
          </p>
          
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="flex flex-col items-center gap-2">
              <Mail className="h-8 w-8 text-professional-accent" />
              <a 
                href="mailto:azeemkh1786@gmail.com"
                className="text-sm font-medium hover:text-professional-accent transition-colors"
              >
                azeemkh1786@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <Linkedin className="h-8 w-8 text-professional-accent" />
              <a 
                href="https://www.linkedin.com/in/khanazeemzahidi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-professional-accent transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <MapPin className="h-8 w-8 text-professional-accent" />
              <span className="text-sm font-medium">
                Bengaluru, Karnataka, India
              </span>
            </div>
          </div>
          
          <Button 
            asChild 
            size="lg"
            className="bg-professional-accent hover:bg-professional-accent/90 text-white"
          >
            <a href="mailto:azeemkh1786@gmail.com">
              <Mail className="h-5 w-5 mr-2" />
              Send Message
            </a>
          </Button>
        </Card>
      </div>
    </section>
  )
}