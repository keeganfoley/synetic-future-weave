
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating geometric elements */}
      <div className="absolute inset-0">
        <div className="floating-hexagon floating-hexagon-1"></div>
        <div className="floating-hexagon floating-hexagon-2"></div>
        <div className="floating-hexagon floating-hexagon-3"></div>
        <div className="data-stream data-stream-1"></div>
        <div className="data-stream data-stream-2"></div>
        <div className="data-stream data-stream-3"></div>
      </div>

      {/* Central content */}
      <div className={`relative z-10 text-center px-8 max-w-5xl mx-auto transition-all duration-1500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Logo integration */}
        <div className="mb-12 flex justify-center">
          <div className="logo-container">
            <img 
              src="/lovable-uploads/d31c66a8-d4db-49a3-b1af-ca493ebd4e49.png" 
              alt="SyneticAI" 
              className="h-16 w-auto logo-glow"
            />
            <div className="logo-pulse-ring"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight tracking-tight">
          <span className="block mb-4 text-glow">Intelligence in Motion.</span>
          <span className="block text-cosmic-gold text-glow-gold">Automation Without Friction.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-cosmic-white/80 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
          We design systems that eliminate complexity and unlock potential. 
          Experience automation that adapts, evolves, and delivers precision at scale.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="futuristic-button primary-button group">
            <span className="relative z-10">Explore Solutions</span>
            <div className="button-glow"></div>
            <div className="button-particles"></div>
          </button>
          
          <button className="futuristic-button secondary-button group">
            <span className="relative z-10">Watch Demo</span>
            <div className="button-glow"></div>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
