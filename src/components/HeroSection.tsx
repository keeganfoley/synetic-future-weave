
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Moving Grid Background */}
      <div className="absolute inset-0 premium-grid-bg"></div>
      
      {/* Neural Energy Streams */}
      <div className="floating-energy-stream stream-1 top-1/4 left-1/5"></div>
      <div className="floating-energy-stream stream-2 top-2/3 right-1/4"></div>
      <div className="floating-energy-stream stream-3 bottom-1/3 left-2/3"></div>
      
      {/* Hero Content */}
      <div className={`text-center z-10 px-8 transition-all duration-2000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}>
        <h1 className="font-heading font-light mb-16 leading-[0.85] tracking-tight">
          <span className="block hero-headline-massive mb-8 animate-hero-reveal scroll-reactive-text">
            Intelligence in Motion.
          </span>
          <span className="block hero-headline-massive mb-12 animate-hero-reveal-delayed text-glow-premium">
            Automation Without Friction.
          </span>
          <div className="hero-beam-premium"></div>
        </h1>
        
        <div className={`space-y-6 mb-20 transition-all duration-2000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-xl md:text-2xl text-cosmic-white/90 leading-relaxed font-light tracking-wide hero-subtext-enhanced">
            We design systems that eliminate the ordinary.
          </p>
          <p className="text-xl md:text-2xl text-cosmic-gold/90 leading-relaxed font-light tracking-wide hero-subtext-enhanced text-glow-subtle">
            Precision automation. Time reclaimed.
          </p>
        </div>

        <div className={`transition-all duration-2000 delay-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <button 
            onClick={scrollToNextSection}
            className="premium-cta-button text-xl group relative"
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
            <div className="cta-premium-pulse"></div>
          </button>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-gentle-float">
        <div className="w-6 h-10 border-2 border-cosmic-gold/50 rounded-full flex justify-center opacity-80">
          <div className="w-1 h-3 bg-cosmic-gold/70 rounded-full mt-2 animate-scroll-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
