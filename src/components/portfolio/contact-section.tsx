import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
        
        <Card className="p-8 md:p-12 shadow-[var(--shadow-strong)] text-center" role="region" aria-labelledby="contact-info">
          <p id="contact-info" className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology and innovation.
          </p>
          
          <div className="grid gap-6 md:grid-cols-4 mb-8" role="list" aria-label="Contact information">
            <div className="flex flex-col items-center gap-2" role="listitem">
              <Phone className="h-8 w-8 text-professional-accent" aria-hidden="true" />
              <a 
                href="tel:+918767694654"
                className="text-sm font-medium hover:text-professional-accent transition-colors focus:outline-none focus:ring-2 focus:ring-professional-accent focus:ring-offset-2 rounded"
                aria-label="Call Khan Azeem Zahidi at +91 8767694654"
              >
                +91 8767694654
              </a>
            </div>
            
            <div className="flex flex-col items-center gap-2" role="listitem">
              <Mail className="h-8 w-8 text-professional-accent" aria-hidden="true" />
              <a 
                href="mailto:azeemkh1786@gmail.com"
                className="text-sm font-medium hover:text-professional-accent transition-colors focus:outline-none focus:ring-2 focus:ring-professional-accent focus:ring-offset-2 rounded"
                aria-label="Send email to Khan Azeem Zahidi at azeemkh1786@gmail.com"
              >
                azeemkh1786@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col items-center gap-2" role="listitem">
              <Linkedin className="h-8 w-8 text-professional-accent" aria-hidden="true" />
              <a 
                href="https://www.linkedin.com/in/khanazeemzahidi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-professional-accent transition-colors focus:outline-none focus:ring-2 focus:ring-professional-accent focus:ring-offset-2 rounded"
                aria-label="View Khan Azeem Zahidi's LinkedIn profile (opens in new tab)"
              >
                LinkedIn Profile
              </a>
            </div>
            
            <div className="flex flex-col items-center gap-2" role="listitem">
              <MapPin className="h-8 w-8 text-professional-accent" aria-hidden="true" />
              <span className="text-sm font-medium" aria-label="Location: Bengaluru, Karnataka, India">
                Bengaluru, Karnataka, India
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-professional-accent hover:bg-professional-accent/90 text-white focus:ring-2 focus:ring-professional-accent focus:ring-offset-2"
            >
              <a 
                href="tel:+918767694654"
                aria-label="Call Khan Azeem Zahidi at +91 8767694654"
              >
                <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
                Call Me
              </a>
            </Button>
            <Button 
              asChild 
              size="lg"
              className="bg-professional-accent hover:bg-professional-accent/90 text-white focus:ring-2 focus:ring-professional-accent focus:ring-offset-2"
            >
              <a 
                href="mailto:azeemkh1786@gmail.com"
                aria-label="Send email to Khan Azeem Zahidi at azeemkh1786@gmail.com"
              >
                <Mail className="h-5 w-5 mr-2" aria-hidden="true" />
                Email Me
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}