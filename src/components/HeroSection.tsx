
import { useEffect, useState, useRef } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [bootupComplete, setBootupComplete] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [globeRotation, setGlobeRotation] = useState({ x: 0, y: 0 });
  const globeRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cinematic intro sequence
    const bootupTimer = setTimeout(() => {
      setBootupComplete(true);
      const visibilityTimer = setTimeout(() => setIsVisible(true), 300);
      return () => clearTimeout(visibilityTimer);
    }, 800);
    
    return () => clearTimeout(bootupTimer);
  }, []);

  useEffect(() => {
    let rafId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        if (heroRef.current) {
          const rect = heroRef.current.getBoundingClientRect();
          setMousePosition({
            x: (e.clientX - rect.left) / rect.width - 0.5,
            y: (e.clientY - rect.top) / rect.height - 0.5
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleGlobeInteraction = (e: React.MouseEvent) => {
    if (globeRef.current) {
      const rect = globeRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      setGlobeRotation({
        x: (e.clientY - centerY) * 0.08,
        y: (e.clientX - centerX) * 0.08
      });
    }
  };

  const scrollToNextSection = () => {
    document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Cinematic Bootup Flash */}
      {!bootupComplete && (
        <div className="fixed inset-0 bg-black z-50 animate-bootup-flash"></div>
      )}
      
      {/* AI Scanner Sweep */}
      <div className="ai-scanner-sweep"></div>
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 hud-radar-bg"></div>
      <div className="absolute inset-0 digital-nebula-optimized"></div>
      
      {/* Low-Orbit Pulse */}
      <div className="low-orbit-pulse" style={{
        transform: `translate(-50%, -50%) rotate(${mousePosition.x * 10}deg)`
      }}></div>
      
      {/* Interactive 3D Globe */}
      <div 
        ref={globeRef}
        className="floating-globe-cinematic"
        style={{
          transform: `rotateX(${globeRotation.x}deg) rotateY(${globeRotation.y}deg)`
        }}
        onMouseMove={handleGlobeInteraction}
      >
        <div className="globe-surface-hud"></div>
        <div className="globe-orbital-path"></div>
        <div className="globe-aura-glow"></div>
      </div>

      {/* Flowing Power Lines */}
      <div className="power-flow-lines">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={`power-line power-line-${i + 1}`}></div>
        ))}
      </div>
      
      {/* Hero Content */}
      <div className={`text-center z-10 px-8 transition-all duration-2000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        <h1 className="font-heading font-light mb-12 leading-[0.85] tracking-tight hero-title-cinematic">
          <span className="block hero-headline-shimmer mb-6 ai-typewriter-line">
            Intelligence in Motion.
          </span>
          <span className="block hero-headline-shimmer-alt mb-10 ai-typewriter-line delay-1000">
            Automation Without Friction.
          </span>
        </h1>
        
        <div className={`space-y-6 transition-all duration-1500 delay-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-xl md:text-2xl text-cosmic-white/90 leading-relaxed font-light tracking-wide">
            We design systems that eliminate the ordinary.
          </p>
          <p className="text-xl md:text-2xl text-cosmic-gold/90 leading-relaxed font-light tracking-wide text-glow-subtle">
            Precision automation. Time reclaimed.
          </p>
        </div>

        <div className={`mt-16 transition-all duration-1500 delay-2000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button 
            onClick={scrollToNextSection}
            className="tactical-cta-button text-xl group relative"
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
            <div className="tactical-pulse-rings"></div>
            <div className="ambient-particles"></div>
          </button>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-gentle-float">
        <div className="w-6 h-10 border-2 border-cosmic-gold/40 rounded-full flex justify-center opacity-70 scanner-scroll-indicator">
          <div className="w-1 h-3 bg-cosmic-gold/60 rounded-full mt-2 animate-pulse-subtle"></div>
        </div>
      </div>

      {/* Magnetic Cursor Zone */}
      <div 
        className="magnetic-cursor-zone"
        style={{
          left: `${(mousePosition.x + 0.5) * 100}%`,
          top: `${(mousePosition.y + 0.5) * 100}%`
        }}
      ></div>
    </section>
  );
};

export default HeroSection;
