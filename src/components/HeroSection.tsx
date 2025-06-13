
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Central content */}
      <div className={`relative z-10 text-center px-8 max-w-6xl mx-auto transition-all duration-2000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        {/* Enhanced Logo integration */}
        <div className="mb-16 flex justify-center">
          <div className="logo-container">
            <img 
              src="/lovable-uploads/d31c66a8-d4db-49a3-b1af-ca493ebd4e49.png" 
              alt="SyneticAI" 
              className="h-20 w-auto logo-glow"
            />
            <div className="logo-pulse-ring"></div>
            <div className="logo-orbit-ring"></div>
          </div>
        </div>

        {/* Enhanced main headline with animated underline */}
        <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight tracking-tight">
          <span className="block mb-6 text-glow animated-underline">Intelligence in Motion.</span>
          <span className="block text-cosmic-gold text-glow-gold">Automation Without Friction.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-cosmic-white/80 mb-16 font-light max-w-4xl mx-auto leading-relaxed">
          We design systems that eliminate complexity and unlock potential. 
          Experience automation that adapts, evolves, and delivers precision at scale.
        </p>

        {/* Enhanced cosmic buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button className="cosmic-button group">
            <span className="relative z-10">Explore Solutions</span>
            <div className="button-energy-beam"></div>
            <div className="button-glow-particles"></div>
          </button>
          
          <button className="cosmic-button group">
            <span className="relative z-10">Watch Demo</span>
            <div className="button-energy-beam"></div>
            <div className="button-glow-particles"></div>
          </button>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-16 bg-gradient-to-b from-transparent via-cosmic-gold to-transparent opacity-60 animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;
