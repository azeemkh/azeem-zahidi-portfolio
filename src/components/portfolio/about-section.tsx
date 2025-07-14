import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <Card className="p-8 shadow-[var(--shadow-medium)] bg-[var(--gradient-card)]" role="article">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-muted-foreground"
               tabIndex={0}>
            As a results-driven Senior Tech Lead with over 9 years of experience, I specialize in building 
            scalable, secure, and high-performing web applications using the MERN stack, NextJs, Python, 
            GraphQL, Tailwind CSS and Figma. My passion lies in translating complex business requirements 
            into innovative digital solutions, particularly in dynamic domains like Fintech, HealthTech, AI, 
            and Automotive.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground"
               tabIndex={0}>
              Currently at Deloitte, I spearhead front-end development initiatives using React.js, Redux, 
              NextJs, NodeJs, GraphQL, Tailwind CSS and Figma and Python while collaborating cross-functionally 
              to ensure seamless integration across microservices. I bring deep knowledge of cloud platforms 
              with Azure and AWS certifications, making me adept at delivering cloud-native solutions that are 
              both scalable and future-ready.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground"
               tabIndex={0}>
              Whether leading agile teams or rolling up my sleeves to solve technical challenges, I strive to 
              balance hands-on engineering with strategic thinking. I'm always curious, always learning, and 
              driven to mentor the next generation of tech leaders.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}