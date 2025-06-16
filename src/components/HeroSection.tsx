
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-2025-container">
      {/* Neural Motion Background */}
      <div className="neural-grid-background"></div>
      <div className="starfield-motion"></div>
      <div className="light-waves-animation"></div>
      
      {/* Floating Data Nodes */}
      <div className="floating-data-node-1"></div>
      <div className="floating-data-node-2"></div>
      <div className="floating-data-node-3"></div>
      
      {/* Glowing Grid Lines */}
      <div className="neural-grid-lines"></div>
      
      {/* Hero Content */}
      <div className={`text-center z-10 px-8 transition-all duration-1500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        <div className="hero-title-container">
          <h1 className="hero-title-2025 font-heading font-light mb-12 leading-[0.9]">
            <span className="hero-main-line animate-fade-in-up">
              Intelligence in Motion.
            </span>
            <span className="hero-sub-line animate-fade-in-up text-cosmic-gold hero-glow-text" style={{ animationDelay: '0.4s' }}>
              Automation Without Friction.
            </span>
          </h1>
          {/* Rising beam of light */}
          <div className="hero-rising-beam"></div>
        </div>
        
        <p className={`hero-subtitle-2025 transition-all duration-1500 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          We design systems that eliminate the ordinary.
          <br />
          <span className="text-cosmic-gold font-normal hero-glow-text">Precision automation. Time reclaimed.</span>
        </p>

        <div className={`transition-all duration-1500 delay-1400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button 
            onClick={scrollToNextSection}
            className="hero-cta-2025 text-lg group relative"
          >
            <span className="relative z-10 inline-flex items-center">
              Explore Solutions
              <svg 
                className="ml-4 w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            {/* Orbital effect on hover */}
            <div className="button-orbital-effect"></div>
            <div className="button-ripple-effect"></div>
          </button>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 scroll-indicator-2025">
        <div className="scroll-container-2025">
          <div className="scroll-pulse-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
