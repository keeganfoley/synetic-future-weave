
import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useScrollAnimation();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-command-center">
      {/* Precision Depth Layers */}
      <div className="absolute inset-0 z-0">
        <div 
          className="precision-depth-layers" 
          data-parallax="0.2"
          data-scroll-grid
        />
        <div 
          className="control-grid-system" 
          data-parallax="0.4"
        />
      </div>
      
      {/* Hero Content with Engineered Precision */}
      <div className={`hero-content-command text-center z-10 px-6 transition-all duration-1500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } scroll-reveal depth-float`}>
        <div className="space-y-6">
          <h1 
            className="hero-title-system mb-6 leading-tight precision-gold"
            data-text="Automation with Intelligence. Execution with Elegance."
          >
            <span className="block">
              Automation with Intelligence.
            </span>
            <span className="block">
              Execution with Elegance.
            </span>
          </h1>
          
          <p className="hero-subtitle-system mb-10">
            SyneticAI builds powerful, time-saving systems that think and work for you.
          </p>

          <div>
            <button 
              onClick={scrollToNextSection}
              className="hero-cta-system group relative"
            >
              <span className="relative z-10 inline-flex items-center">
                Explore Solutions
                <svg 
                  className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Precision Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-engineered-gold rounded-full opacity-40"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animation: `depthFloat ${6 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              boxShadow: '0 0 4px rgba(205, 161, 35, 0.4)',
            }}
            data-float="0.3"
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
