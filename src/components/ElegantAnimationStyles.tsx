
const ElegantAnimationStyles = () => {
  return (
    <style>{`
      @keyframes elegantHorizontalFlow {
        0% {
          transform: translateX(0);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
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
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(100vh);
          opacity: 0;
        }
      }
      
      .elegant-golden-line {
        transition: transform 0.1s ease-out;
      }
    `}</style>
  );
};

export default ElegantAnimationStyles;
