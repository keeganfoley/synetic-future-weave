import { useEffect, useState } from 'react';
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);
  const scrollToNextSection = () => {
    document.getElementById('purpose')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 moving-grid-bg"></div>
      <div className="absolute inset-0 digital-nebula"></div>
      
      {/* Orbital Trail */}
      <div className="orbital-trail"></div>

      {/* Reduced Ray Particles */}
      <div className="ray-particles">
        {Array.from({
        length: 6
      }).map((_, i) => <div key={i} className={`ray-particle ray-${i + 1}`}></div>)}
      </div>
      
      {/* Hero Content */}
      <div className={`text-center z-10 px-4 md:px-8 transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h1 className="font-heading font-light mb-8 md:mb-12 leading-[0.8] tracking-tight">
          <span className="block text-3xl md:text-5xl text-cosmic-gold mb-6 md:mb-8 shimmer-reveal-animation lg:text-5xl">Drive more revenue. Cut costly tasks.</span>
          <span className="block text-2xl md:text-4xl text-cosmic-white mb-8 md:mb-12 shimmer-reveal-animation delay-500 lg:text-7xl">Scale with AI.</span>
          <div className="hero-beam-underline-enhanced"></div>
        </h1>
        
        <div className={`space-y-4 md:space-y-6 transition-all duration-1500 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg md:text-xl lg:text-2xl text-cosmic-white/90 leading-relaxed font-light tracking-wide hero-subtext-line">Automation built for business growth.</p>
          <p className="text-lg md:text-xl lg:text-2xl text-cosmic-gold/90 leading-relaxed font-light tracking-wide hero-subtext-line text-glow-subtle">
            Precision automation. Time reclaimed.
          </p>
        </div>

        <div className={`mt-12 md:mt-20 transition-all duration-1500 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button onClick={scrollToNextSection} className="elite-cta-button-hero-mobile text-lg md:text-xl group relative">
            <span className="relative z-10 inline-flex items-center">
              Explore Solutions
              <svg className="ml-3 md:ml-4 w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="cta-sonar-rings"></div>
          </button>
        </div>
      </div>
    </section>;
};
export default HeroSection;