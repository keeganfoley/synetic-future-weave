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
      {/* New Hero Stars Background Layer */}
      <div className="hero-stars" />
      
      {/* Subtle Animated Background - Galaxy Grid */}
      <div className="subtle-background-drift" />
      <div className="galaxy-grid-lines" />
      
      {/* Hero Content - Completely Static */}
      <div className={`hero-content text-center z-10 px-8 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="hero-title-container">
          <h1 className="hero-title-2025-static mb-8 leading-[0.9]">
            <span className="block">
              Intelligence in Motion.
            </span>
            <span className="block">
              Automation Without Friction.
            </span>
          </h1>
        </div>
        
        <p className="hero-subtitle-2025 mb-12">
          We design systems that eliminate lag, evolve on their own, and adapt in real-time.
        </p>

        <div>
          <button 
            onClick={scrollToNextSection}
            className="hero-cta-2025-static group relative"
          >
            <span className="relative z-10 inline-flex items-center">
              Explore Solutions
              <svg 
                className="ml-4 w-5 h-5 transition-transform duration-150 group-hover:translate-x-1" 
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
    </section>
  );
};

export default HeroSection;
