
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
        <div className="absolute inset-0 control-room-background"></div>
        
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          <div className="control-room-divider mb-16"></div>
          
          <div className="absolute top-8 left-8 command-status-panel scroll-fade-in">
            <div className="status-readout">Systems Processed: 3,248,291</div>
            <div className="status-readout">Friction Reduced: 97.3%</div>
            <div className="status-pulse-indicator"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-light mb-12 text-cosmic-gold text-glow-premium scroll-fade-in control-room-section-header">
            Our Vision
          </h2>
          
          <div className="control-room-divider scroll-fade-in mb-12"></div>
          
          <div className="space-y-8 scroll-fade-in stagger-1">
            <p className="text-xl md:text-2xl text-cosmic-white/90 leading-relaxed font-light tracking-wide">
              {revealWords("We build automation for liberation.", 0.5)}
            </p>
            <p className="text-xl md:text-2xl text-cosmic-gold/90 leading-relaxed font-light tracking-wide text-glow-enhanced">
              {revealWords("Systems that think. Time that returns.", 1)}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 control-room-background"></div>
        
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-12 text-cosmic-white scroll-fade-in control-room-section-header">
            Our Mission
          </h2>
          
          <div className="control-room-divider scroll-fade-in mb-12"></div>
          
          <div className="space-y-8 scroll-fade-in stagger-1">
            <p className="text-xl md:text-2xl text-cosmic-white/90 leading-relaxed font-light tracking-wide">
              {revealWords("We engineer intelligent systems that erase complexity.", 0.5)}
            </p>
            <p className="text-xl md:text-2xl text-cosmic-gold/90 leading-relaxed font-light tracking-wide text-glow-enhanced">
              {revealWords("Seamless automation with precision and grace.", 1)}
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Systems That Think Section - Redesigned as AI Engines */}
      <section id="solutions" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 control-room-background"></div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 text-cosmic-gold text-glow-premium scroll-fade-in control-room-section-header">
              AI Intelligence Engines
            </h2>
            <div className="control-room-divider scroll-fade-in stagger-1"></div>
            <p className="text-xl text-cosmic-white/80 font-light scroll-fade-in stagger-2 mt-6">
              Living systems that power the future of automation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Cognitive Intelligence",
                description: "Self-evolving logic for every workflow.",
                tooltip: "Neural networks adapting in real-time...",
                engineType: "neural-brain",
                animationType: "brain-pulse-network"
              },
              {
                title: "Predictive CRM",
                description: "Predict behaviors. Build relationships. Automate at scale.",
                tooltip: "Predictive analysis engine online...",
                engineType: "crm-network",
                animationType: "network-flow-lines"
              },
              {
                title: "Infinite Automation",
                description: "Always on. Always optimizing.",
                tooltip: "Continuous optimization protocols active...",
                engineType: "infinity-core",
                animationType: "infinite-loop-motion"
              }
            ].map((engine, index) => (
              <div key={engine.title} className={`ai-intelligence-engine scroll-fade-in stagger-${index + 1}`}>
                <div className="engine-housing">
                  <div className="engine-core-display">
                    
                    <div className={`intelligence-core core-${engine.engineType}`}>
                      <div className="core-energy-matrix"></div>
                      <div className={`animation-system animation-${engine.animationType}`}></div>
                      <div className="neural-pathways"></div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-heading font-light text-cosmic-gold mb-4 text-glow-enhanced">
                    {engine.title}
                  </h3>
                  
                  <p className="text-cosmic-white/90 leading-relaxed mb-6">
                    {engine.description}
                  </p>

                  <div className="engine-status-display">
                    {engine.tooltip}
                  </div>
                </div>
                
                <div className="engine-energy-field"></div>
                <div className="engine-scan-grid"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section - Cinematic CTA */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 control-room-background"></div>
        
        {/* Nebula Flare Background */}
        <div className="nebula-flare-container">
          <div className="nebula-pulse-core"></div>
          <div className="nebula-energy-rings"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <div className="cinematic-cta-container">
            <h2 className="text-4xl md:text-5xl font-heading font-light mb-8 text-cosmic-gold text-glow-premium scroll-fade-in control-room-section-header">
              Automate the Impossible. Reclaim Your Time.
            </h2>
            
            <div className="control-room-divider scroll-fade-in mb-12"></div>
            
            <div className="space-y-4 mb-12 scroll-fade-in stagger-1">
              <p className="text-xl text-cosmic-white/90 leading-relaxed font-light tracking-wide">
                Explore what SyneticAI can unlock.
              </p>
            </div>

            <div className="star-wars-control-interface scroll-fade-in stagger-2">
              <button className="control-room-cta text-lg group relative">
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
                <div className="cta-holographic-overlay"></div>
                <div className="cta-particle-stream"></div>
              </button>

              <div className="control-interface-line">
                <a 
                  href="mailto:team@syneticai.com" 
                  className="control-interface-email text-cosmic-gold hover:text-cosmic-white transition-colors duration-500 text-lg font-medium tracking-wider"
                >
                  team@syneticai.com
                </a>
                <div className="interface-separator"></div>
                <p className="text-cosmic-white/60 text-sm tracking-wider">
                  Free consult in 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Ambient Holographic Animation */}
          <div className="ambient-holographic-animation">
            <div className="floating-orb orb-1"></div>
            <div className="floating-orb orb-2"></div>
            <div className="floating-orb orb-3"></div>
            <div className="spinning-3d-symbol symbol-1"></div>
            <div className="spinning-3d-symbol symbol-2"></div>
            <div className="drifting-stars-background"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSections;
