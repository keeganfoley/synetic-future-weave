
import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const MainSections = () => {
  const visibleElements = useScrollReveal();

  useEffect(() => {
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
      description: "AI systems that adapt and evolve.",
      icon: "icon-ai-chip",
      delay: "stagger-1"
    },
    {
      title: "Neural CRM", 
      description: "Predictive insights that convert.",
      icon: "icon-power",
      delay: "stagger-2"
    },
    {
      title: "Infinite Automation",
      description: "Elite prospect identification.",
      icon: "icon-infinity",
      delay: "stagger-3"
    }
  ];

  return (
    <div className="relative">
      {/* Interactive Metrics */}
      <div className="live-metrics">
        <div className="metric-item">Systems Processed: <span className="text-cosmic-gold">3,248,291</span></div>
        <div className="metric-item">Friction Reduced: <span className="text-cosmic-gold">97%</span></div>
      </div>

      {/* Vision Section */}
      <section id="vision" className="min-h-screen flex items-center py-24 px-8 relative">
        <div className="section-divider absolute top-0"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="scroll-fade-in text-2xl md:text-4xl font-heading font-light text-cosmic-gold mb-12 text-glow-subtle tracking-wide">
              Our Vision
            </h2>
            <div className="space-y-6 mb-16">
              <p className="scroll-slide-left stagger-2 text-lg md:text-xl text-cosmic-white/90 leading-relaxed font-light tracking-wide">
                We build automation for liberation.
              </p>
              <p className="scroll-slide-right stagger-3 text-lg md:text-xl text-cosmic-gold/90 leading-relaxed font-light tracking-wide text-glow-subtle">
                Systems that think. Time that returns.
              </p>
            </div>
            
            <div className="scroll-fade-in stagger-4">
              <h3 className="text-lg md:text-2xl font-heading font-light text-cosmic-white mb-8 tracking-wide">
                Our Mission
              </h3>
              <div className="space-y-4">
                <p className="text-base md:text-lg text-cosmic-white/80 leading-relaxed font-light tracking-wide">
                  We engineer intelligent systems that erase complexity.
                </p>
                <p className="text-base md:text-lg text-cosmic-gold/90 leading-relaxed font-light tracking-wide text-glow-subtle">
                  Seamless automation with precision and grace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="min-h-screen flex items-center py-24 px-8 relative">
        <div className="section-divider absolute top-0"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="scroll-fade-in text-2xl md:text-4xl font-heading font-light text-cosmic-gold mb-8 text-glow-subtle tracking-wide">
              Systems That Think
            </h2>
            <p className="scroll-slide-right stagger-2 text-base md:text-lg text-cosmic-white/80 font-light tracking-wide">
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
                  <div className="elite-glass-card p-10 h-full group transition-all duration-700">
                    <div className="text-cosmic-gold mb-6 group-hover:animate-gentle-float transition-all duration-500 relative z-10">
                      <div className={`${solution.icon} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </div>
                    <h3 className="text-lg font-heading font-light text-cosmic-gold mb-6 relative z-10 tracking-wide">
                      {solution.title}
                    </h3>
                    <p className="text-cosmic-white/80 leading-relaxed font-light relative z-10 tracking-wide">
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
      <section id="contact" className="min-h-screen flex items-center py-24 px-8 relative">
        <div className="section-divider absolute top-0"></div>
        
        {/* Enhanced background effects */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="cta-glow-ring"></div>
          <div className="cta-beam-sweep"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="scroll-fade-in">
            <h2 className="text-2xl md:text-4xl font-heading font-light text-cosmic-gold mb-8 text-glow-premium tracking-wide elite-headline-animation">
              Automate the Impossible
            </h2>
            <div className="space-y-4 mb-16">
              <p className="scroll-slide-left stagger-2 text-base md:text-lg text-cosmic-white/80 leading-relaxed font-light tracking-wide">
                Ready to transform your business with intelligent automation?
              </p>
              <p className="scroll-slide-right stagger-3 text-base md:text-lg text-cosmic-gold/90 leading-relaxed font-light tracking-wide text-glow-subtle">
                Let's explore the possibilities.
              </p>
            </div>
            
            <div className="scroll-fade-in stagger-3 space-y-8">
              <button className="elite-cta-button-main text-lg tracking-wider">
                Get Started
              </button>
              <div className="text-cosmic-white/60 text-sm font-light space-y-2 tracking-wide">
                <p>Free consultation within 24 hours</p>
                <a 
                  href="mailto:team@syneticai.com"
                  className="block text-cosmic-gold/90 font-medium tracking-wider text-glow-subtle hover:text-cosmic-gold transition-colors duration-300"
                >
                  team@syneticai.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSections;
