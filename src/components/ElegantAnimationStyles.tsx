
const ElegantAnimationStyles = () => {
  return (
    <style>{`
      @keyframes elegantHorizontalFlow {
        0% {
          transform: translateX(0);
          opacity: 0;
        }
        5% {
          opacity: 0.2;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        95% {
          opacity: 0.2;
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
        5% {
          opacity: 0.2;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        95% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(100vh);
          opacity: 0;
        }
      }
      
      @keyframes ambientPulse {
        0%, 100% {
          transform: scale(0.8);
          opacity: 0.05;
        }
        50% {
          transform: scale(1.2);
          opacity: 0.15;
        }
      }
      
      .elegant-golden-line {
        transition: transform 0.1s ease-out;
      }
    `}</style>
  );
};

export default ElegantAnimationStyles;
