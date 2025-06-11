
import { useEffect, useState, useRef } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [bootupComplete, setBootupComplete] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Optimized cinematic intro
    const bootupTimer = setTimeout(() => {
      setBootupComplete(true);
      const visibilityTimer = setTimeout(() => setIsVisible(true), 200);
      return () => clearTimeout(visibilityTimer);
    }, 600);
    
    return () => clearTimeout(bootupTimer);
  }, []);

  const scrollToNextSection = () => {
    document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef} 
      className="min-h-screen flex items-center justify-center relative overflow-hidden hero-optimized"
    >
      {/* Optimized Bootup Flash */}
      {!bootupComplete && (
        <div className="fixed inset-0 bg-black z-50 animate-bootup-flash-fast"></div>
      )}
      
      {/* Performance-Optimized Background */}
      <div className="absolute inset-0 hero-bg-optimized"></div>
      
      {/* Minimal Orbit Rings - GPU Optimized */}
      <div className="absolute inset-0 orbit-system-optimized">
        <div className="orbit-ring-optimized orbit-1"></div>
        <div className="orbit-ring-optimized orbit-2"></div>
      </div>

      {/* High-Performance Cursor */}
      <div className="cursor-high-performance"></div>
      
      {/* Hero Content */}
      <div className={`text-center z-10 px-8 transition-all duration-1500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h1 className="font-heading font-light mb-12 leading-[0.85] tracking-tight hero-title-optimized">
          <span className="block hero-headline-shimmer mb-6 hero-text-rise">
            Intelligence in Motion.
          </span>
          <span className="block hero-headline-shimmer-alt mb-10 hero-text-rise-delay">
            Automation Without Friction.
          </span>
        </h1>
        
        <div className={`space-y-6 transition-all duration-1200 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <p className="text-xl md:text-2xl text-cosmic-white/90 leading-relaxed font-light tracking-wide">
            We design systems that eliminate the ordinary.
          </p>
          <p className="text-xl md:text-2xl text-cosmic-gold/90 leading-relaxed font-light tracking-wide text-glow-subtle">
            Precision automation. Time reclaimed.
          </p>
        </div>

        <div className={`mt-16 transition-all duration-1200 delay-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <button 
            onClick={scrollToNextSection}
            className="hero-cta-optimized text-xl group relative"
          >
            <span className="relative z-10 inline-flex items-center">
              Explore Solutions
              <svg 
                className="ml-4 w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="cta-click-feedback"></div>
          </button>
        </div>
      </div>

      {/* Optimized scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 scroll-indicator-optimized">
        <div className="scroll-dot-optimized"></div>
      </div>
    </section>
  );
};

export default HeroSection;
