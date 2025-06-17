
import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Brain, Zap, Infinity } from 'lucide-react';

const MainSections = () => {
  const visibleElements = useScrollReveal();

  useEffect(() => {
    const scrollElements = document.querySelectorAll('.scroll-fade-in');
    scrollElements.forEach(el => {
      if (!el.classList.contains('visible')) {
        el.classList.add('scroll-fade-in');
      }
    });
  }, []);

  const solutions = [
    {
      title: "Cognitive Intelligence",
      description: "Precision-engineered AI systems that adapt and evolve with your business.",
      icon: Brain,
      delay: "stagger-1"
    },
    {
      title: "Neural CRM Systems", 
      description: "AI-powered insights that predict needs and amplify results.",
      icon: Zap,
      delay: "stagger-2"
    },
    {
      title: "Infinite Automation",
      description: "Elite prospect identification with automated engagement systems.",
      icon: Infinity,
      delay: "stagger-3"
    }
  ];

  return (
    <div className="relative">
      {/* Vision Section */}
      <section id="vision" className="min-h-screen flex items-center py-24 px-8 relative section-premium">
        <div className="section-divider-premium absolute top-0"></div>
        <div className="floating-background-premium"></div>
        
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="scroll-fade-in section-title-premium mb-12">
              Our Vision
            </h2>
            <p className="scroll-fade-in stagger-2 section-subtitle-premium mb-16">
              Systems that anticipate, evolve, and operate at the speed of thought.
            </p>
            
            <div className="scroll-fade-in stagger-3">
              <h3 className="text-xl font-light text-cosmic-gold mb-8">
                Our Mission
              </h3>
              <p className="text-lg font-light text-cosmic-gray max-w-2xl mx-auto">
                To eliminate operational friction through adaptive, autonomous intelligence.
              </p>
              {/* Subtle divider */}
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-cosmic-gold to-transparent mx-auto mt-8 opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="min-h-screen flex items-center py-24 px-8 relative section-premium">
        <div className="section-divider-premium absolute top-0"></div>
        <div className="floating-background-premium"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="scroll-fade-in section-title-premium mb-8">
              Engineered Intelligence
            </h2>
            <p className="scroll-fade-in stagger-2 section-subtitle-premium">
              Real-time infrastructure that adapts and performs without lag.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={solution.title}
                  className={`scroll-fade-in ${solution.delay} group`}
                >
                  <div className="card-premium h-full">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <IconComponent className="card-icon-premium" size={28} />
                    </div>
                    
                    <h3 className="card-title-premium mb-4 text-center">
                      {solution.title}
                    </h3>
                    <p className="card-description-premium text-center text-sm">
                      {solution.description}
                    </p>
                    
                    {/* Hover effects */}
                    <div className="card-glow-premium"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="py-24 px-8 relative section-premium">
        <div className="section-divider-premium absolute top-0"></div>
        <div className="floating-background-premium"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-fade-in mb-16">
            <p className="text-lg font-light text-cosmic-gray mb-12">
              This is automation without compromise—modular, intelligent, and self-directed.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { title: "Modular", description: "Plug-and-play architecture" },
              { title: "Autonomous", description: "Self-directing systems" },
              { title: "Self-Optimizing", description: "Continuous improvement" }
            ].map((item, index) => (
              <div key={item.title} className={`scroll-fade-in stagger-${index + 1}`}>
                <div className="advantage-pill-premium group" style={{ animationDelay: `${index * 2}s` }}>
                  <div className="pill-glow-premium"></div>
                  <h4 className="text-cosmic-gold font-light text-sm relative z-10">{item.title}</h4>
                  <p className="text-cosmic-gray text-xs mt-1 relative z-10">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Message Section */}
      <section className="py-24 px-8 relative section-premium">
        <div className="section-divider-premium absolute top-0"></div>
        <div className="floating-background-premium"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-fade-in">
            <h2 className="section-title-premium mb-8">
              This is Synetic AI
            </h2>
            <p className="text-xl font-light text-cosmic-gray mb-12">
              Intelligent by design. Evolving by nature.
            </p>
            
            <button className="hero-button-premium group">
              <span className="relative z-10 inline-flex items-center">
                Explore Solutions
                <svg 
                  className="ml-3 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="button-shimmer-premium"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSections;
