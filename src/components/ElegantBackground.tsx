
import { useGoldenLines } from '../hooks/useGoldenLines';
import ElegantAnimationStyles from './ElegantAnimationStyles';
import EnhancedCosmicBackground from './EnhancedCosmicBackground';

const ElegantBackground = () => {
  const containerRef = useGoldenLines();

  return (
    <>
      <div 
        ref={containerRef}
        className="absolute inset-0 w-full min-h-screen overflow-hidden"
        style={{ 
          zIndex: -10,
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(180, 139, 60, 0.008) 0%, transparent 40%),
            radial-gradient(ellipse at 80% 70%, rgba(180, 139, 60, 0.006) 0%, transparent 35%),
            radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.004) 0%, transparent 60%),
            linear-gradient(135deg, #030305 0%, #050508 20%, #020204 40%, #040407 60%, #020203 80%, #030305 100%)
          `,
          height: '100%',
          minHeight: '100vh'
        }}
      />
      
      <EnhancedCosmicBackground />
      <ElegantAnimationStyles />
    </>
  );
};

export default ElegantBackground;
