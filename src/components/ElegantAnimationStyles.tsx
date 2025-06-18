
const ElegantAnimationStyles = () => {
  return (
    <style>{`
      @keyframes elegantHorizontalFlow {
        0% {
          transform: translateX(0);
          opacity: 0;
        }
        8% {
          opacity: 0.3;
        }
        15% {
          opacity: 1;
        }
        85% {
          opacity: 1;
        }
        92% {
          opacity: 0.3;
        }
        100% {
          transform: translateX(100vw);
          opacity: 0;
        }
      }
      
      @keyframes elegantVerticalFlow {
        0% {
          transform: translateY(0);
          opacity: 0;
        }
        8% {
          opacity: 0.3;
        }
        15% {
          opacity: 1;
        }
        85% {
          opacity: 1;
        }
        92% {
          opacity: 0.3;
        }
        100% {
          transform: translateY(100vh);
          opacity: 0;
        }
      }
      
      @keyframes ambientPulse {
        0%, 100% {
          transform: scale(0.9);
          opacity: 0.1;
        }
        50% {
          transform: scale(1.1);
          opacity: 0.3;
        }
      }
      
      .elegant-golden-line {
        transition: transform 0.1s ease-out;
      }
    `}</style>
  );
};

export default ElegantAnimationStyles;
