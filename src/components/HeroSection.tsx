
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-luxury-container">
      <div className="hero-depth-layer" />
      <div className="luxury-grid-pattern" />
      
      <div className={`hero-content-luxury text-center z-10 px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="hero-title-container mb-8">
          <h1 className="hero-title-luxury leading-[0.85]">
            <span className="block mb-2">
              Automation with Intelligence.
            </span>
            <span className="block">
              Execution with Elegance.
            </span>
          </h1>
        </div>
        
        <p className="hero-subtitle-luxury mb-12">
          SyneticAI builds powerful, time-saving systems that think and work for you.
        </p>

        <div>
          <button 
            onClick={scrollToNextSection}
            className="hero-cta-luxury group relative"
          >
            <span className="relative z-10 inline-flex items-center">
              Explore Solutions
              <svg 
                className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
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
    </section>
  );
};

export default HeroSection;
