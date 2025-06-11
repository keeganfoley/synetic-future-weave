
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNextSection = () => {
    document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Content */}
      <div className={`text-center z-10 px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight text-shadow-subtle">
          <span className="block text-cosmic-white mb-3">Intelligence in Motion.</span>
          <span className="block text-cosmic-gold mb-6">Automation Without Friction.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-cosmic-white/70 mb-12 max-w-3xl mx-auto leading-relaxed font-body font-light">
          Synetic AI revolutionizes lives by automating the ordinary with unparalleled intelligence, 
          delivering precision solutions that free time and unlock infinite possibilities.
        </p>

        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <button 
            onClick={scrollToNextSection}
            className="premium-button text-lg group relative overflow-hidden"
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

      {/* Subtle ambient elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cosmic-gold rounded-full animate-gentle-float opacity-40"></div>
        <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-cosmic-gold rounded-full animate-gentle-float opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cosmic-gold rounded-full animate-gentle-float opacity-50" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-0.5 h-0.5 bg-cosmic-gold rounded-full animate-gentle-float opacity-20" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-5 h-8 border border-cosmic-gold/40 rounded-full flex justify-center opacity-60">
          <div className="w-0.5 h-2 bg-cosmic-gold/60 rounded-full mt-2 animate-gentle-float"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
