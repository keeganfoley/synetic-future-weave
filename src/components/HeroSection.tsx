
import { useEffect, useState, useRef } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textAnimationStage, setTextAnimationStage] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth text animation sequence
    const timer1 = setTimeout(() => setTextAnimationStage(1), 500);
    const timer2 = setTimeout(() => setTextAnimationStage(2), 1200);
    const timer3 = setTimeout(() => setIsVisible(true), 1800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNextSection = () => {
    document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef} 
      className="min-h-screen flex items-center justify-center relative overflow-hidden galaxy-hero-container"
    >
      {/* Cosmic Background Grid */}
      <div className="absolute inset-0 cosmic-grid-background"></div>
      
      {/* Floating Orbit Rings */}
      <div className="absolute inset-0 galaxy-orbit-system">
        <div className="orbit-ring orbit-primary" style={{
          transform: `rotate(${mousePosition.x * 10}deg)`
        }}></div>
        <div className="orbit-ring orbit-secondary" style={{
          transform: `rotate(${-mousePosition.x * 15}deg)`
        }}></div>
        <div className="orbit-ring orbit-tertiary" style={{
          transform: `rotate(${mousePosition.x * 8}deg)`
        }}></div>
      </div>

      {/* Ambient Particle Field */}
      <div className="absolute inset-0 ambient-particle-field">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="floating-particle"
            style={{
              '--delay': `${i * 0.5}s`,
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`
            } as React.CSSProperties}
          />
        ))}
      </div>
      
      {/* Hero Content */}
      <div className="text-center z-10 px-8 max-w-5xl mx-auto">
        <h1 className="font-heading font-light leading-[0.9] tracking-tight hero-title-container">
          <span className={`block mb-6 hero-text-reveal ${textAnimationStage >= 1 ? 'animate-in' : ''}`}>
            Intelligence in Motion.
          </span>
          <span className={`block mb-10 hero-text-reveal-alt ${textAnimationStage >= 2 ? 'animate-in' : ''}`}>
            Automation Without Friction.
          </span>
        </h1>
        
        <div className={`space-y-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-xl md:text-2xl text-cosmic-white/90 leading-relaxed font-light tracking-wide">
            We design systems that eliminate the ordinary.
          </p>
          <p className="text-xl md:text-2xl text-cosmic-gold/90 leading-relaxed font-light tracking-wide text-glow-subtle">
            Precision automation. Time reclaimed.
          </p>
        </div>

        <div className={`mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button 
            onClick={scrollToNextSection}
            className="galaxy-cta-premium text-xl group relative"
          >
            <span className="relative z-10 inline-flex items-center">
              Explore Solutions
              <svg 
                className="ml-4 w-6 h-6 transition-transform duration-500 group-hover:translate-x-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="cta-pulse-rings"></div>
            <div className="cta-energy-flow"></div>
          </button>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-gentle-float">
        <div className="galaxy-scroll-beacon">
          <div className="scroll-beacon-core"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
