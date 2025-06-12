
import { useEffect, useState, useRef } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textAnimationStage, setTextAnimationStage] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer1 = setTimeout(() => setTextAnimationStage(1), 800);
    const timer2 = setTimeout(() => setTextAnimationStage(2), 1600);
    const timer3 = setTimeout(() => setIsVisible(true), 2400);
    
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden galaxy-hero-control-room"
    >
      {/* Enhanced Galactic Control Room Background */}
      <div className="absolute inset-0 control-room-background"></div>
      
      {/* Hyperspace Starfield */}
      <div className="absolute inset-0 hyperspace-starfield">
        {Array.from({ length: 100 }).map((_, i) => (
          <div 
            key={i} 
            className="hyperspace-star"
            style={{
              '--delay': `${i * 0.1}s`,
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--speed': `${Math.random() * 3 + 1}s`,
              '--size': `${Math.random() * 2 + 1}px`
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Command Center Orbit System */}
      <div className="absolute inset-0 command-center-orbits">
        <div className="orbit-ring orbit-primary-enhanced" style={{
          transform: `rotate(${mousePosition.x * 10}deg)`
        }}></div>
        <div className="orbit-ring orbit-secondary-enhanced" style={{
          transform: `rotate(${-mousePosition.x * 15}deg)`
        }}></div>
        <div className="orbit-ring orbit-tertiary-enhanced" style={{
          transform: `rotate(${mousePosition.x * 8}deg)`
        }}></div>
      </div>

      {/* Data Transmission Beams */}
      <div className="absolute inset-0 data-transmission-grid">
        <div className="transmission-beam beam-horizontal"></div>
        <div className="transmission-beam beam-vertical"></div>
        <div className="transmission-beam beam-diagonal"></div>
      </div>
      
      {/* Hero Content - Centered Transmission Style */}
      <div className="text-center z-10 px-8 max-w-6xl mx-auto">
        <div className="hero-transmission-container">
          <h1 className="font-heading font-light leading-tight tracking-tight hero-title-transmission">
            <div className={`hero-line-enhanced ${textAnimationStage >= 1 ? 'transmit-in' : ''}`}>
              <span className="text-cosmic-white transmission-text">Intelligence in Motion.</span>
              <div className="kinetic-light-rays"></div>
            </div>
            <div className={`hero-line-enhanced ${textAnimationStage >= 2 ? 'transmit-in' : ''}`}>
              <span className="text-cosmic-gold transmission-text-gold">Automation Without Friction.</span>
              <div className="kinetic-light-rays-gold"></div>
            </div>
          </h1>
        </div>
        
        <div className={`space-y-6 mt-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="transmission-pulse-container">
            <p className="text-xl md:text-2xl text-cosmic-white/90 leading-relaxed font-light tracking-wide">
              We design systems that eliminate the ordinary.
            </p>
            <div className="data-pulse-indicators">
              <div className="pulse-dot"></div>
              <div className="pulse-dot"></div>
              <div className="pulse-dot"></div>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-cosmic-gold/90 leading-relaxed font-light tracking-wide text-glow-enhanced">
            Precision automation. Time reclaimed.
          </p>
        </div>

        <div className={`mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button 
            onClick={scrollToNextSection}
            className="control-room-cta text-xl group relative"
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
            <div className="cta-holographic-overlay"></div>
            <div className="cta-particle-stream"></div>
          </button>
        </div>

        {/* Orbiting Nodes */}
        <div className="orbiting-nodes-container">
          <div className="orbiting-node node-1"></div>
          <div className="orbiting-node node-2"></div>
          <div className="orbiting-node node-3"></div>
        </div>
      </div>

      {/* Control Room Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-gentle-float">
        <div className="control-room-scroll-beacon">
          <div className="scroll-energy-core"></div>
          <div className="scroll-beam-indicators">
            <div className="beam-indicator"></div>
            <div className="beam-indicator"></div>
            <div className="beam-indicator"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
