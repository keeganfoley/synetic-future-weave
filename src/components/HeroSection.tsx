
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
      {/* Animated hero rings */}
      <div className="hero-ring w-96 h-96 opacity-20" style={{ animationDelay: '0s' }}></div>
      <div className="hero-ring w-[600px] h-[600px] opacity-10" style={{ animationDelay: '2s' }}></div>
      
      {/* Hero Content */}
      <div className={`text-center z-10 px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 leading-tight">
          <span className="block text-cosmic-white text-glow mb-4 animate-slide-in-left">
            Intelligence in Motion.
          </span>
          <span className="block text-cosmic-gold text-depth mb-8 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
            Automation Without Friction.
          </span>
        </h1>
        
        <p className={`text-xl md:text-2xl text-cosmic-white/80 mb-16 max-w-4xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Synetic AI revolutionizes lives by automating the ordinary with unparalleled intelligence, 
          delivering precision solutions that free time and unlock infinite possibilities.
        </p>

        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <button 
            onClick={scrollToNextSection}
            className="elite-button text-xl group relative"
          >
            <span className="relative z-10 inline-flex items-center">
              Explore Solutions
              <svg 
                className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" 
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

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-gentle-float">
        <div className="w-6 h-10 border-2 border-cosmic-gold/50 rounded-full flex justify-center opacity-70">
          <div className="w-1 h-3 bg-cosmic-gold/70 rounded-full mt-2 animate-gentle-float"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
