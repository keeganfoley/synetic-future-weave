
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const particles = document.querySelector('.hero-particles');
      const parallax = document.querySelector('.parallax-background');
      
      if (particles) {
        (particles as HTMLElement).style.transform = `translateY(${scrollY * 0.15}px)`;
      }
      if (parallax) {
        (parallax as HTMLElement).style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-2025-container">
      {/* Enhanced Parallax Background */}
      <div className="parallax-background" />
      <div className="hero-particles"></div>
      
      {/* Hero Content */}
      <div className={`text-center z-10 px-8 transition-all duration-1500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        <div className="hero-title-container">
          <h1 className="hero-title-2025 hero-title-shimmer mb-8 leading-[0.9]">
            <span className="block animate-fade-in-up">
              Intelligence in Motion.
            </span>
            <span className="block animate-fade-in-up text-cosmic-gold relative" style={{ animationDelay: '0.4s' }}>
              Automation Without Friction.
              <div className="scanning-beam"></div>
            </span>
          </h1>
        </div>
        
        <p className={`hero-subtitle-2025 transition-all duration-1500 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          We design systems that eliminate lag, evolve on their own, and adapt in real-time.
        </p>

        <div className={`transition-all duration-1500 delay-1400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button 
            onClick={scrollToNextSection}
            className="hero-cta-2025 group relative"
          >
            <span className="relative z-10 inline-flex items-center">
              Explore Solutions
              <svg 
                className="ml-4 w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="glassmorphism-effect"></div>
            <div className="button-pulse-ring"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
