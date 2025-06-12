
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textAnimationStage, setTextAnimationStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setTextAnimationStage(1), 800);
    const timer2 = setTimeout(() => setTextAnimationStage(2), 1600);
    const timer3 = setTimeout(() => setIsVisible(true), 2400);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const scrollToNextSection = () => {
    document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden galactic-hero-redesign">
      {/* Multi-layered Parallax Starfield */}
      <div className="absolute inset-0 parallax-starfield">
        <div className="starfield-layer-distant"></div>
        <div className="starfield-layer-mid"></div>
        <div className="starfield-layer-close"></div>
        <div className="ambient-nebula-cloud"></div>
      </div>
      
      {/* Hero Content with Synetic Core */}
      <div className="text-center z-10 px-8 max-w-6xl mx-auto">
        <div className="hero-transmission-enhanced">
          <h1 className="font-heading font-light leading-tight tracking-tight hero-title-refined">
            <div className={`hero-line-transmission ${textAnimationStage >= 1 ? 'transmit-active' : ''}`}>
              <span className="text-cosmic-white transmission-text-enhanced">Intelligence in Motion.</span>
              <div className="kinetic-light-rays-refined"></div>
            </div>
            <div className={`hero-line-transmission ${textAnimationStage >= 2 ? 'transmit-active' : ''}`}>
              <span className="text-cosmic-gold transmission-text-gold-enhanced">Automation Without Friction.</span>
              <div className="kinetic-light-rays-gold-refined"></div>
            </div>
          </h1>
        </div>

        {/* The Synetic Core */}
        <div className={`synetic-core-container ${isVisible ? 'core-active' : ''}`}>
          <div className="synetic-core">
            <div className="geodesic-sphere">
              <div className="sphere-geometry"></div>
              <div className="data-trails"></div>
              <div className="energy-field-core"></div>
            </div>
          </div>
        </div>
        
        <div className={`mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button 
            onClick={scrollToNextSection}
            className="galactic-cta-refined text-xl group relative"
          >
            <span className="relative z-10 inline-flex items-center">
              Explore Solutions
              <svg 
                className="ml-4 w-6 h-6 transition-transform duration-500 group-hover:translate-x-2" 
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
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-gentle-float">
        <div className="scroll-beacon-refined">
          <div className="beacon-core-pulse"></div>
          <div className="beacon-orbit-ring"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
