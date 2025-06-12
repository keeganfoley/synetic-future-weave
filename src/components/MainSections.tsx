
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProcessSection from './ProcessSection';
import ServicesSection from './ServicesSection';
import AIEnginesSection from './AIEnginesSection';

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
        <div className="absolute inset-0 galactic-background-refined"></div>
        
        {/* Multi-layered Parallax Starfield */}
        <div className="absolute inset-0 parallax-starfield-section">
          <div className="starfield-layer-distant"></div>
          <div className="starfield-layer-mid"></div>
          <div className="starfield-layer-close"></div>
          <div className="ambient-nebula-drift"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          <div className="galactic-divider-refined mb-16"></div>

          <h2 className="text-4xl md:text-5xl font-heading font-light mb-12 text-cosmic-gold scroll-fade-in galactic-section-header">
            Our Vision
          </h2>
          
          <div className="galactic-divider-refined scroll-fade-in mb-12"></div>
          
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
        <div className="absolute inset-0 galactic-background-refined"></div>
        
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-12 text-cosmic-white scroll-fade-in galactic-section-header">
            Our Mission
          </h2>
          
          <div className="galactic-divider-refined scroll-fade-in mb-12"></div>
          
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

      {/* AI Engines Section */}
      <AIEnginesSection />

      {/* Enhanced Contact Section - Two-Tiered */}
      <section id="contact" className="relative overflow-hidden">
        {/* Tier 1: The Ascent CTA */}
        <div className="py-32 relative">
          <div className="absolute inset-0 galactic-background-refined"></div>
          
          {/* Cinematic Nebula Background */}
          <div className="cinematic-nebula-container">
            <div className="nebula-core-pulse"></div>
            <div className="nebula-energy-streams"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
            <div className="ascent-cta-container">
              <h2 className="text-4xl md:text-5xl font-heading font-light mb-8 text-cosmic-gold galactic-section-header">
                Interface with the Future
              </h2>
              
              <div className="galactic-divider-refined mb-12"></div>
              
              <div className="space-y-4 mb-12">
                <p className="text-xl text-cosmic-white/90 leading-relaxed font-light tracking-wide">
                  Begin your ascent to automated excellence.
                </p>
              </div>

              <div className="galactic-interface-line">
                <button className="galactic-cta-refined text-lg group relative">
                  <span className="relative z-10 inline-flex items-center">
                    Begin Ascent
                    <svg 
                      className="ml-4 w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="cta-holographic-enhanced"></div>
                  <div className="cta-energy-flow"></div>
                </button>

                <div className="interface-separator"></div>
                
                <div className="contact-info-panel">
                  <a 
                    href="mailto:team@syneticai.com" 
                    className="interface-email-link text-cosmic-gold hover:text-cosmic-white transition-colors duration-500 text-lg font-medium tracking-wider"
                  >
                    team@syneticai.com
                  </a>
                  <p className="text-cosmic-white/60 text-sm tracking-wider mt-2">
                    Free consult in 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Ambient Holographic Elements */}
            <div className="ambient-holographic-field">
              <div className="floating-orb orb-1"></div>
              <div className="floating-orb orb-2"></div>
              <div className="floating-orb orb-3"></div>
              <div className="spinning-symbol symbol-1"></div>
              <div className="spinning-symbol symbol-2"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSections;
