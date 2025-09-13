import { Card } from '@/components/ui/card';

const TechStack = () => {
  const technologies = [
    {
      category: 'Frontend',
      techs: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
      color: 'text-code-blue'
    },
    {
      category: 'Backend',
      techs: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL'],
      color: 'text-primary'
    },
    {
      category: 'Database',
      techs: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Supabase', 'Firebase'],
      color: 'text-code-orange'
    },
    {
      category: 'Tools & Others',
      techs: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code'],
      color: 'text-code-purple'
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-code bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((category, categoryIndex) => (
            <Card 
              key={category.category}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className={`text-xl font-bold mb-4 ${category.color}`}>
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.techs.map((tech, techIndex) => (
                  <div 
                    key={tech}
                    className="flex items-center space-x-3 group"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (techIndex * 0.05)}s` }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full group-hover:shadow-glow transition-all duration-300"></div>
                    <span className="text-foreground group-hover:text-primary transition-colors duration-300">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Programming Languages */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Programming Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['JavaScript', 'TypeScript', 'Python', 'Java', 'PHP', 'C++'].map((lang, index) => (
              <div 
                key={lang}
                className="px-6 py-3 bg-gradient-primary rounded-full text-primary-foreground font-semibold hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {lang}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;