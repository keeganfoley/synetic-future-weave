
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
      {/* Ambient orbital element */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="orbital-element animate-orbital-line"></div>
      </div>
      
      {/* Hero Content */}
      <div className={`text-center z-10 px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-normal mb-12 leading-tight">
          <span className="block text-cosmic-white hero-tagline mb-6 animate-fade-in-up">
            Intelligence in Motion.
          </span>
          <span className="block text-cosmic-white/90 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Automation Without Friction.
          </span>
        </h1>
        
        <p className={`text-lg md:text-xl text-cosmic-white/70 mb-16 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Synetic AI revolutionizes lives by automating the ordinary with unparalleled intelligence, 
          delivering precision solutions that free time and unlock infinite possibilities.
        </p>

        <div className={`transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <button 
            onClick={scrollToNextSection}
            className="luxury-button text-lg group relative animate-pulse-subtle"
          >
            <span className="relative z-10 inline-flex items-center">
              Explore Solutions
              <svg 
                className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
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

      {/* Refined scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-float">
        <div className="w-5 h-8 border border-cosmic-gold/30 rounded-full flex justify-center opacity-60">
          <div className="w-0.5 h-2 bg-cosmic-gold/50 rounded-full mt-1.5 animate-pulse-subtle"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
