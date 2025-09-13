import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Code Elements */}
      <div className="absolute top-20 left-10 text-code-blue opacity-20 animate-float text-sm font-mono">
        {'{ }'}
      </div>
      <div className="absolute top-40 right-20 text-code-purple opacity-20 animate-float text-lg font-mono" style={{ animationDelay: '1s' }}>
        &lt;/&gt;
      </div>
      <div className="absolute bottom-40 left-20 text-accent opacity-20 animate-float text-sm font-mono" style={{ animationDelay: '2s' }}>
        console.log()
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Full Stack
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
            Developer
          </h2>
          
          {/* Typing Effect */}
          <div className="mb-8 h-8">
            <p className="text-xl text-muted-foreground font-mono overflow-hidden whitespace-nowrap border-r-2 border-primary animate-typing">
              Building digital experiences with modern technologies
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow-glow transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-glow-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;