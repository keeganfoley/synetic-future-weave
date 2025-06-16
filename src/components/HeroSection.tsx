
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-galaxy-2025">
      {/* Ambient light effects behind headline */}
      <div className="hero-ambient-light-1"></div>
      <div className="hero-ambient-light-2"></div>
      <div className="hero-backlight-beam"></div>
      
      {/* Hero Content */}
      <div className={`text-center z-10 px-8 transition-all duration-1500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        <h1 className="font-heading font-light mb-12 leading-[0.9] hero-title-2025">
          <span className="block hero-main-line mb-6 animate-fade-in-up">
            Intelligence in Motion.
          </span>
          <span className="block hero-sub-line mb-8 animate-fade-in-up text-cosmic-gold text-glow-premium-enhanced" style={{ animationDelay: '0.4s' }}>
            Automation Without Friction.
          </span>
        </h1>
        
        <p className={`text-lg md:text-xl text-cosmic-white/80 mb-16 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-1500 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          We design systems that eliminate the ordinary.
          <br />
          <span className="text-cosmic-gold font-normal text-glow-premium">Precision automation. Time reclaimed.</span>
        </p>

        <div className={`transition-all duration-1500 delay-1400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button 
            onClick={scrollToNextSection}
            className="luxury-button-2025 text-lg group relative"
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
          </button>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 scroll-indicator-galaxy">
        <div className="scroll-container-2025">
          <div className="scroll-energy-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
