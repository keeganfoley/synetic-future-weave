
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
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-cosmic font-bold mb-6 leading-tight">
          <span className="block text-cosmic-white mb-2">Intelligence</span>
          <span className="block text-cosmic-gold gold-glow animate-pulse-gold">Unleashed.</span>
          <span className="block text-cosmic-white mt-4 text-4xl md:text-5xl lg:text-6xl">
            Your Future, Now.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-cosmic-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-body">
          Synetic AI revolutionizes lives by automating the ordinary with unparalleled intelligence, 
          delivering precision solutions that free time and unlock infinite possibilities.
        </p>

        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button 
            onClick={scrollToNextSection}
            className="cosmic-button text-xl animate-glow hover:animate-none group"
          >
            <span className="inline-flex items-center">
              Enter the Future
              <svg 
                className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" 
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

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cosmic-gold rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cosmic-gold rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cosmic-gold rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-cosmic-gold rounded-full animate-float opacity-30" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cosmic-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cosmic-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
