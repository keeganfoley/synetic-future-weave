
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced floating geometric elements */}
      <div className="absolute inset-0">
        <div className="floating-data-node floating-node-1"></div>
        <div className="floating-data-node floating-node-2"></div>
        <div className="floating-data-node floating-node-3"></div>
        <div className="energy-stream stream-1"></div>
        <div className="energy-stream stream-2"></div>
        <div className="energy-stream stream-3"></div>
      </div>

      {/* Central content with enhanced typography */}
      <div className={`relative z-10 text-center px-8 max-w-6xl mx-auto transition-all duration-1500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h1 className="hero-title mb-8">
          <span className="hero-line-1">Intelligence in Motion.</span>
          <span className="hero-line-2">
            Automation <span className="highlight-text">Without Friction</span>.
          </span>
          <div className="title-energy-underline"></div>
        </h1>
        
        <p className="hero-subtitle mb-12">
          We design systems that eliminate complexity and unlock potential. 
          Experience automation that adapts, evolves, and delivers precision at scale.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="hero-cta-primary group">
            <span className="relative z-10">Explore Solutions</span>
            <div className="button-heatmap-effect"></div>
            <div className="button-digital-glow"></div>
          </button>
          
          <button className="hero-cta-secondary group">
            <span className="relative z-10">Watch Demo</span>
            <div className="button-line-art"></div>
          </button>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="scroll-indicator-futuristic">
          <div className="scroll-energy-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
