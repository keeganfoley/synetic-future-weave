
import { useGoldenLines } from '../hooks/useGoldenLines';
import { useAmbientOrbs } from '../hooks/useAmbientOrbs';
import ElegantAnimationStyles from './ElegantAnimationStyles';

const ElegantBackground = () => {
  const containerRef = useGoldenLines();
  useAmbientOrbs(containerRef);

  return (
    <>
      <div 
        ref={containerRef}
        className="fixed inset-0 overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black"
        style={{ zIndex: 0 }}
      />
      
      <ElegantAnimationStyles />
    </>
  );
};

export default ElegantBackground;
