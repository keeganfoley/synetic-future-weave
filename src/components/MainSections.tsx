
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProcessSection from './ProcessSection';
import ServicesSection from './ServicesSection';

const MainSections = () => {
  useScrollReveal();

  return (
    <>
      {/* Vision Section */}
      <section id="vision" className="py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="section-energy-divider mb-16"></div>
          
          <div className="absolute top-8 left-8 text-cosmic-white/60 text-sm scroll-fade-in galaxy-status-display">
            <div className="status-line">Systems Processed: 3,248,291</div>
            <div className="status-line">Friction Reduced: 97.3%</div>
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-light mb-12 text-cosmic-gold text-glow-premium scroll-fade-in galaxy-header-reveal">
            Our Vision
          </h2>
          
          <div className="space-y-8 scroll-fade-in stagger-1">
            <p className="text-xl md:text-2xl text-cosmic-white/90 leading-relaxed font-light tracking-wide">
              We build automation for liberation.
            </p>
            <p className="text-xl md:text-2xl text-cosmic-gold/90 leading-relaxed font-light tracking-wide text-glow-subtle">
              Systems that think. Time that returns.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-12 text-cosmic-white scroll-fade-in galaxy-header-reveal">
            Our Mission
          </h2>
          
          <div className="space-y-8 scroll-fade-in stagger-1">
            <p className="text-xl md:text-2xl text-cosmic-white/90 leading-relaxed font-light tracking-wide">
              We engineer intelligent systems that erase complexity.
            </p>
            <p className="text-xl md:text-2xl text-cosmic-gold/90 leading-relaxed font-light tracking-wide text-glow-subtle">
              Seamless automation with precision and grace.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Enhanced Systems That Think Section */}
      <section id="solutions" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 text-cosmic-gold text-glow-premium scroll-fade-in galaxy-header-reveal">
              Systems That Think
            </h2>
            <p className="text-xl text-cosmic-white/80 font-light scroll-fade-in stagger-1">
              Intelligent automation that reshapes workflow with precision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="thinking-system-module scroll-fade-in stagger-1">
              <div className="system-module-core">
                <div className="thinking-particle-field"></div>
                <div className="module-icon-orbit">
                  <div className="neural-spark-cluster"></div>
                </div>
                <h3 className="text-2xl font-heading font-light text-cosmic-gold mb-4 text-glow-subtle">
                  Cognitive Intelligence
                </h3>
                <p className="text-cosmic-white/90 leading-relaxed">
                  Self-evolving logic for every workflow.
                </p>
                <div className="system-whisper-tooltip">🧠 Adaptive learning online...</div>
              </div>
              <div className="module-depth-field"></div>
            </div>

            <div className="thinking-system-module scroll-fade-in stagger-2">
              <div className="system-module-core">
                <div className="thinking-particle-field"></div>
                <div className="module-icon-orbit">
                  <div className="crm-data-streams"></div>
                </div>
                <h3 className="text-2xl font-heading font-light text-cosmic-gold mb-4 text-glow-subtle">
                  Neural CRM
                </h3>
                <p className="text-cosmic-white/90 leading-relaxed">
                  Predict behaviors. Build relationships. Automate at scale.
                </p>
                <div className="system-whisper-tooltip">📊 Predictive core ready...</div>
              </div>
              <div className="module-depth-field"></div>
            </div>

            <div className="thinking-system-module scroll-fade-in stagger-3">
              <div className="system-module-core">
                <div className="thinking-particle-field"></div>
                <div className="module-icon-orbit">
                  <div className="automation-wave-form"></div>
                </div>
                <h3 className="text-2xl font-heading font-light text-cosmic-gold mb-4 text-glow-subtle">
                  Infinite Automation
                </h3>
                <p className="text-cosmic-white/90 leading-relaxed">
                  Always on. Always optimizing.
                </p>
                <div className="system-whisper-tooltip">⚡ Continuous optimization enabled...</div>
              </div>
              <div className="module-depth-field"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="galaxy-nebula-drift"></div>
        
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-8 text-cosmic-gold text-glow-premium scroll-fade-in galaxy-header-typewriter">
            Automate the Impossible
          </h2>
          
          <div className="space-y-6 mb-12 scroll-fade-in stagger-1">
            <p className="text-xl text-cosmic-white/90 leading-relaxed font-light tracking-wide">
              Ready to transform your business with intelligent automation?
            </p>
            <p className="text-lg text-cosmic-gold/90 leading-relaxed font-light tracking-wide text-glow-subtle scroll-hover-glow">
              Let's explore the possibilities.
            </p>
          </div>

          <div className="scroll-fade-in stagger-2">
            <button className="galaxy-command-interface text-lg group relative">
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
              <div className="command-activation-field"></div>
              <div className="tactical-sonar-pulse"></div>
              <div className="button-particle-drift"></div>
            </button>
          </div>

          <div className="mt-12 space-y-2 scroll-fade-in stagger-3">
            <p className="text-cosmic-white/60 text-sm tracking-wider">
              Free consultation within 24 hours
            </p>
            <a 
              href="mailto:team@syneticai.com" 
              className="text-cosmic-gold hover:text-cosmic-white transition-colors duration-500 text-lg font-medium tracking-wider text-glow-subtle hover:text-glow-premium block galaxy-email-interface"
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
