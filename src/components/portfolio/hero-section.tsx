import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center px-4 py-20"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-[var(--gradient-primary)] opacity-5" aria-hidden="true" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <Card className="p-8 md:p-12 backdrop-blur-sm bg-card/80 border-border shadow-[var(--shadow-strong)]">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-professional-accent/20 shadow-[var(--shadow-medium)]">
              <img 
                src="/lovable-uploads/a6cd175f-c927-466a-afd8-a9e4ee160ed7.png" 
                alt="Khan Azeem Zahidi - Professional headshot showing a confident senior software engineer in business attire"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 
              id="hero-heading"
              className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-professional-gray bg-clip-text text-transparent"
            >
              Khan Azeem Zahidi
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6 text-professional-gray">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <span>Bengaluru, Karnataka, India</span>
            </div>
            <p className="text-xl md:text-2xl text-professional-gray max-w-3xl mx-auto leading-relaxed">
              Senior Software Engineer @Deloitte | Senior Frontend Technical Lead | 
              FullStack Developer | MERN Stack & Python Expert | React.js | NextJs | Node.js | 
              Driving Scalable Digital Solutions in Fintech, HealthTech & AI
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-professional-accent hover:bg-professional-accent/90 text-white focus:ring-2 focus:ring-professional-accent focus:ring-offset-2"
            >
              <a 
                href="mailto:azeemkh1786@gmail.com"
                aria-label="Send email to Khan Azeem Zahidi"
              >
                <Mail className="h-5 w-5 mr-2" aria-hidden="true" />
                Contact Me
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-white hover:text-white/90 focus:ring-2 focus:ring-professional-accent focus:ring-offset-2"
            >
              <a 
                href="https://www.linkedin.com/in/khanazeemzahidi" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View Khan Azeem Zahidi's LinkedIn profile (opens in new tab)"
              >
                <Linkedin className="h-5 w-5 mr-2" aria-hidden="true" />
                LinkedIn
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}