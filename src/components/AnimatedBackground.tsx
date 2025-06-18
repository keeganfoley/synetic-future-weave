
import { useRef } from 'react';
import { useAnimationEffects } from './AnimatedBackground/useAnimationEffects';
import { useLineGeneration } from './AnimatedBackground/useLineGeneration';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationEffects(containerRef);
  useLineGeneration(containerRef);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {/* Static floating lines for base layer */}
      <div className="floating-line horizontal" style={{ top: '15%', animationDelay: '0s' }}></div>
      <div className="floating-line vertical" style={{ left: '20%', animationDelay: '-5s' }}></div>
      <div className="floating-line diagonal" style={{ top: '70%', animationDelay: '-8s' }}></div>
      <div className="floating-line approach" style={{ left: '60%', top: '40%', animationDelay: '-3s' }}></div>
      <div className="floating-line recede" style={{ left: '30%', top: '60%', animationDelay: '-10s' }}></div>
    </div>
  );
};

export default AnimatedBackground;
