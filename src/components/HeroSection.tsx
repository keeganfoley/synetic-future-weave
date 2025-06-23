
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    document.getElementById('purpose')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 moving-grid-bg"></div>
      <div className="absolute inset-0 digital-nebula"></div>
      
      {/* Orbital Trail */}
      <div className="orbital-trail"></div>
      
      {/* Simplified Interactive Globe */}
      <div className="floating-globe">
        <div className="globe-surface"></div>
        <div className="globe-grid"></div>
        <div className="globe-glow"></div>
      </div>

      {/* Reduced Ray Particles */}
      <div className="ray-particles">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={`ray-particle ray-${i + 1}`}></div>
        ))}
      </div>
      
      {/* Hero Content */}
      <div className={`text-center z-10 px-8 transition-all duration-2000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        <h1 className="font-heading font-light mb-12 leading-[0.8] tracking-tight">
          <span className="block text-4xl md:text-6xl lg:text-7xl text-cosmic-gold mb-8 shimmer-reveal-animation">
            Intelligence in Motion.
          </span>
          <span className="block text-3xl md:text-5xl lg:text-6xl text-cosmic-white mb-12 shimmer-reveal-animation delay-500">
            Automation Without Friction.
          </span>
          <div className="hero-beam-underline-enhanced"></div>
        </h1>
        
        <div className={`space-y-6 transition-all duration-1500 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-xl md:text-2xl text-cosmic-white/90 leading-relaxed font-light tracking-wide hero-subtext-line">
            We design systems that eliminate the ordinary.
          </p>
          <p className="text-xl md:text-2xl text-cosmic-gold/90 leading-relaxed font-light tracking-wide hero-subtext-line text-glow-subtle">
            Precision automation. Time reclaimed.
          </p>
        </div>

        <div className={`mt-20 transition-all duration-1500 delay-1400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button 
            onClick={scrollToNextSection}
            className="elite-cta-button-hero text-xl group relative"
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
            <div className="cta-sonar-rings"></div>
          </button>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-gentle-float">
        <div className="w-6 h-10 border-2 border-cosmic-gold/40 rounded-full flex justify-center opacity-70">
          <div className="w-1 h-3 bg-cosmic-gold/60 rounded-full mt-2 animate-pulse-subtle"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
