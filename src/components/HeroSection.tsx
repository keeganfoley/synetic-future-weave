
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [headlineStage, setHeadlineStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setHeadlineStage(1), 800);
    const timer2 = setTimeout(() => setHeadlineStage(2), 1600);
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden galactic-hero-reset">
      {/* Starfield Background */}
      <div className="absolute inset-0 starfield-background">
        <div className="starfield-distant"></div>
        <div className="starfield-mid"></div>
        <div className="starfield-close"></div>
        <div className="nebula-ambience"></div>
      </div>
      
      {/* Hero Content */}
      <div className="text-center z-10 px-8 max-w-6xl mx-auto">
        {/* Primary Headline */}
        <div className="hero-headline-container">
          <h1 className="hero-title-commanding font-heading font-light leading-tight tracking-tight">
            <div className={`headline-transmission ${headlineStage >= 1 ? 'transmission-active' : ''}`}>
              <span className="text-cosmic-white title-text-enhanced">Intelligence in Motion.</span>
              <div className="kinetic-light-sweep"></div>
            </div>
            <div className={`headline-transmission ${headlineStage >= 2 ? 'transmission-active' : ''}`}>
              <span className="text-cosmic-gold title-text-gold-enhanced">Automation Without Friction.</span>
              <div className="kinetic-light-sweep-gold"></div>
            </div>
          </h1>
        </div>

        {/* The Synetic Core */}
        <div className={`synetic-core-container ${isVisible ? 'core-materialized' : ''}`}>
          <div className="synetic-core-chamber">
            <div className="geodesic-sphere-core">
              <div className="sphere-wireframe"></div>
              <div className="data-convergence-trails"></div>
              <div className="golden-energy-field"></div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Call to Action */}
        <div className={`mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button 
            onClick={scrollToNextSection}
            className="galactic-cta-enhanced text-xl group relative"
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
            <div className="cta-holographic-field"></div>
            <div className="cta-pulsing-beam"></div>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-gentle-float">
        <div className="scroll-indicator-refined">
          <div className="indicator-core-pulse"></div>
          <div className="indicator-orbit-ring"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
