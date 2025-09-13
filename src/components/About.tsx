import { Card } from '@/components/ui/card';

const About = () => {
  const skills = [
    'Problem Solving', 'Clean Code', 'Team Collaboration', 
    'Continuous Learning', 'Project Management', 'User Experience'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-code bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. 
              My journey in programming started with curiosity and has evolved into a career dedicated to crafting 
              exceptional digital experiences.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with the latest technologies. 
              When I'm not coding, you can find me exploring new frameworks, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium border border-border hover:border-primary transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Code Block Visualization */}
          <div className="animate-slide-in-right">
            <Card className="p-6 bg-card border-border shadow-card">
              <div className="font-mono text-sm space-y-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground ml-2">developer.js</span>
                </div>
                
                <div className="space-y-1 text-sm">
                  <span className="text-code-purple">const</span> <span className="text-code-blue">developer</span> <span className="text-foreground">=</span> <span className="text-accent">{'{'}</span>
                  <div className="pl-4">
                    <span className="text-code-orange">name</span><span className="text-foreground">:</span> <span className="text-primary">'Your Name'</span><span className="text-foreground">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-code-orange">role</span><span className="text-foreground">:</span> <span className="text-primary">'Full Stack Developer'</span><span className="text-foreground">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-code-orange">location</span><span className="text-foreground">:</span> <span className="text-primary">'Your Location'</span><span className="text-foreground">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-code-orange">passion</span><span className="text-foreground">:</span> <span className="text-primary">'Building amazing apps'</span><span className="text-foreground">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-code-orange">available</span><span className="text-foreground">:</span> <span className="text-code-blue">true</span>
                  </div>
                  <span className="text-accent">{'}'}</span><span className="text-foreground">;</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;