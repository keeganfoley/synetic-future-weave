
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProcessSection from './ProcessSection';
import ServicesSection from './ServicesSection';

const MainSections = () => {
  useScrollReveal();

  const revealWords = (text: string, delay: number = 0) => {
    return text.split(' ').map((word, index) => (
      <span 
        key={index}
        className="inline-block word-reveal"
        style={{ animationDelay: `${delay + index * 0.1}s` }}
      >
        {word}&nbsp;
      </span>
    ));
  };

  return (
    <>
      {/* Vision Section */}
      <section id="vision" className="py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="galaxy-section-divider mb-16"></div>
          
          <div className="absolute top-8 left-8 galaxy-status-panel scroll-fade-in">
            <div className="status-readout">Systems Processed: 3,248,291</div>
            <div className="status-readout">Friction Reduced: 97.3%</div>
            <div className="status-pulse"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-light mb-12 text-cosmic-gold text-glow-premium scroll-fade-in galaxy-section-header">
            Our Vision
          </h2>
          
          <div className="galaxy-divider-line scroll-fade-in mb-12"></div>
          
          <div className="space-y-8 scroll-fade-in stagger-1">
            <p className="text-xl md:text-2xl text-cosmic-white/90 leading-relaxed font-light tracking-wide">
              {revealWords("We build automation for liberation.", 0.5)}
            </p>
            <p className="text-xl md:text-2xl text-cosmic-gold/90 leading-relaxed font-light tracking-wide text-glow-subtle">
              {revealWords("Systems that think. Time that returns.", 1)}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-12 text-cosmic-white scroll-fade-in galaxy-section-header">
            Our Mission
          </h2>
          
          <div className="galaxy-divider-line scroll-fade-in mb-12"></div>
          
          <div className="space-y-8 scroll-fade-in stagger-1">
            <p className="text-xl md:text-2xl text-cosmic-white/90 leading-relaxed font-light tracking-wide">
              {revealWords("We engineer intelligent systems that erase complexity.", 0.5)}
            </p>
            <p className="text-xl md:text-2xl text-cosmic-gold/90 leading-relaxed font-light tracking-wide text-glow-subtle">
              {revealWords("Seamless automation with precision and grace.", 1)}
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Systems That Think Section */}
      <section id="solutions" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 text-cosmic-gold text-glow-premium scroll-fade-in galaxy-section-header">
              Systems That Think
            </h2>
            <div className="galaxy-divider-line scroll-fade-in stagger-1"></div>
            <p className="text-xl text-cosmic-white/80 font-light scroll-fade-in stagger-2 mt-6">
              Intelligent automation that reshapes workflow with precision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Cognitive Intelligence",
                description: "Self-evolving logic for every workflow.",
                tooltip: "🧠 Adaptive learning online...",
                icon: "cognitive"
              },
              {
                title: "Neural CRM",
                description: "Predict behaviors. Build relationships. Automate at scale.",
                tooltip: "📊 Predictive core ready...",
                icon: "neural"
              },
              {
                title: "Infinite Automation",
                description: "Always on. Always optimizing.",
                tooltip: "⚡ Continuous optimization enabled...",
                icon: "infinite"
              }
            ].map((system, index) => (
              <div key={system.title} className={`galaxy-thinking-module scroll-fade-in stagger-${index + 1}`}>
                <div className="thinking-surface">
                  <div className="neural-particle-field"></div>
                  
                  <div className="system-icon-matrix">
                    <div className={`thinking-icon icon-${system.icon}`}>
                      <div className="synaptic-core"></div>
                      <div className="neural-connections"></div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-heading font-light text-cosmic-gold mb-4 text-glow-subtle">
                    {system.title}
                  </h3>
                  
                  <p className="text-cosmic-white/90 leading-relaxed mb-6">
                    {system.description}
                  </p>

                  <div className="system-status-tooltip">
                    {system.tooltip}
                  </div>
                </div>
                
                <div className="thinking-energy-waves"></div>
                <div className="neural-scan-grid"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="galaxy-nebula-ambient"></div>
        
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-8 text-cosmic-gold text-glow-premium scroll-fade-in galaxy-section-header">
            Automate the Impossible
          </h2>
          
          <div className="galaxy-divider-line scroll-fade-in mb-12"></div>
          
          <div className="space-y-6 mb-12 scroll-fade-in stagger-1">
            <p className="text-xl text-cosmic-white/90 leading-relaxed font-light tracking-wide">
              Ready to transform your business with intelligent automation?
            </p>
            <p className="text-lg text-cosmic-gold/90 leading-relaxed font-light tracking-wide text-glow-subtle">
              Let's explore the possibilities.
            </p>
          </div>

          <div className="scroll-fade-in stagger-2">
            <button className="galaxy-cta-ultimate text-lg group relative">
              <span className="relative z-10 inline-flex items-center">
                Get Started
                <svg 
                  className="ml-4 w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="cta-gravitational-field"></div>
              <div className="cta-particle-stream"></div>
            </button>
          </div>

          <div className="mt-12 space-y-2 scroll-fade-in stagger-3">
            <p className="text-cosmic-white/60 text-sm tracking-wider">
              Free consultation within 24 hours
            </p>
            <a 
              href="mailto:team@syneticai.com" 
              className="galaxy-email-beacon text-cosmic-gold hover:text-cosmic-white transition-colors duration-500 text-lg font-medium tracking-wider block"
            >
              team@syneticai.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSections;
