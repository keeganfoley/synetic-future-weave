
import { useGoldenLines } from '../hooks/useGoldenLines';
import ElegantAnimationStyles from './ElegantAnimationStyles';

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
            radial-gradient(ellipse at 20% 30%, rgba(244, 198, 99, 0.008) 0%, transparent 40%),
            radial-gradient(ellipse at 80% 70%, rgba(244, 198, 99, 0.006) 0%, transparent 35%),
            radial-gradient(ellipse at 50% 50%, rgba(244, 198, 99, 0.004) 0%, transparent 60%),
            linear-gradient(135deg, #0D0D0D 0%, #050505 20%, #020202 40%, #040404 60%, #020202 80%, #0D0D0D 100%)
          `,
          height: '100%',
          minHeight: '100vh'
        }}
      />
      
      <ElegantAnimationStyles />
    </>
  );
};

export default ElegantBackground;
