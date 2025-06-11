import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Brain, Zap, Infinity } from 'lucide-react';

const MainSections = () => {
  const visibleElements = useScrollReveal();

  useEffect(() => {
    // Add scroll reveal animations to elements
    const scrollElements = document.querySelectorAll('.scroll-fade-in, .scroll-slide-left, .scroll-slide-right');
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
      icon: "icon-ai-chip",
      delay: "stagger-1"
    },
    {
      title: "Neural CRM Systems", 
      description: "AI-powered insights that predict needs and amplify results.",
      icon: "icon-power",
      delay: "stagger-2"
    },
    {
      title: "Infinite Automation",
      description: "Elite prospect identification with automated engagement systems.",
      icon: "icon-infinity",
      delay: "stagger-3"
    }
  ];

  return (
    <div className="relative">
      {/* Vision Section */}
      <section id="vision" className="min-h-screen flex items-center py-32 px-8 relative">
        <div className="section-divider absolute top-0"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="scroll-fade-in text-3xl md:text-5xl font-heading font-light text-cosmic-gold mb-12 text-glow-premium">
              Our Vision
            </h2>
            <p className="scroll-slide-left stagger-2 text-xl md:text-2xl text-cosmic-white/90 mb-16 leading-relaxed max-w-4xl mx-auto font-light text-etched">
              Synetic AI envisions automation that liberates humanity.
              <br />
              <span className="text-cosmic-gold font-normal">Dream bigger. Create freely. Live fully.</span>
            </p>
            
            <div className="scroll-fade-in stagger-4">
              <h3 className="text-xl md:text-3xl font-heading font-light text-cosmic-white mb-8">
                Our Mission
              </h3>
              <p className="text-lg md:text-xl text-cosmic-white/80 leading-relaxed max-w-4xl mx-auto font-light">
                We engineer intelligent systems that erase complexity.
                <br />
                <span className="text-cosmic-gold">Seamless automation with precision and grace.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="min-h-screen flex items-center py-32 px-8 relative">
        <div className="section-divider absolute top-0"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="scroll-fade-in text-3xl md:text-5xl font-heading font-light text-cosmic-gold mb-8 text-glow-premium">
              Systems That Think
            </h2>
            <p className="scroll-slide-right stagger-2 text-lg md:text-xl text-cosmic-white/80 max-w-3xl mx-auto font-light">
              Intelligent automation that reshapes workflow with precision
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {solutions.map((solution, index) => {
              return (
                <div
                  key={solution.title}
                  className={`scroll-fade-in ${solution.delay} group`}
                >
                  <div className="glass-card p-10 h-full group transition-all duration-700">
                    <div className="text-cosmic-gold mb-6 group-hover:animate-gentle-float transition-all duration-500 relative z-10">
                      <div className={`${solution.icon} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </div>
                    <h3 className="text-xl font-heading font-light text-cosmic-gold mb-6 relative z-10">
                      {solution.title}
                    </h3>
                    <p className="text-cosmic-white/80 leading-relaxed font-light relative z-10">
                      {solution.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="min-h-screen flex items-center py-32 px-8 relative">
        <div className="section-divider absolute top-0"></div>
        
        {/* Animated background flare */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-cosmic-gold/30 to-transparent opacity-50 animate-pulse-subtle"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="scroll-fade-in">
            <h2 className="text-3xl md:text-5xl font-heading font-light text-cosmic-gold mb-8 text-glow-premium" style={{ animation: 'text-glow-pulse 3s ease-in-out infinite' }}>
              Automate the Impossible
            </h2>
            <p className="scroll-slide-left stagger-2 text-lg md:text-xl text-cosmic-white/80 mb-16 leading-relaxed font-light max-w-3xl mx-auto">
              Ready to transform your business with intelligent automation?
              <br />
              <span className="text-cosmic-gold">Let's explore the possibilities.</span>
            </p>
            
            <div className="scroll-fade-in stagger-3 space-y-8">
              <button className="luxury-button text-xl">
                Get Started
              </button>
              <div className="text-cosmic-white/60 text-base font-light space-y-2">
                <p>Free consultation within 24 hours</p>
                <p className="text-cosmic-gold/90 font-medium tracking-wider">team@syneticai.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSections;
