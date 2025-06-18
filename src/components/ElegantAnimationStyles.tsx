
const ElegantAnimationStyles = () => {
  return (
    <style>{`
      @keyframes elegantHorizontalFlow {
        0% {
          transform: translateX(0) scaleX(0);
          opacity: 0;
        }
        8% {
          transform: translateX(0) scaleX(1);
          opacity: 1;
        }
        92% {
          transform: translateX(100vw) scaleX(1);
          opacity: 1;
        }
        100% {
          transform: translateX(100vw) scaleX(0);
          opacity: 0;
        }
      }
      
      @keyframes elegantVerticalFlow {
        0% {
          transform: translateY(0) scaleY(0);
          opacity: 0;
        }
        8% {
          transform: translateY(0) scaleY(1);
          opacity: 1;
        }
        92% {
          transform: translateY(100vh) scaleY(1);
          opacity: 1;
        }
        100% {
          transform: translateY(100vh) scaleY(0);
          opacity: 0;
        }
      }
      
      @keyframes elegantDiagonalFlow {
        0% {
          transform: translateX(0) translateY(0) scaleX(0);
          opacity: 0;
        }
        10% {
          transform: translateX(10vw) translateY(-5vh) scaleX(1);
          opacity: 1;
        }
        90% {
          transform: translateX(120vw) translateY(-60vh) scaleX(1);
          opacity: 1;
        }
        100% {
          transform: translateX(130vw) translateY(-65vh) scaleX(0);
          opacity: 0;
        }
      }
      
      .elegant-golden-line {
        transition: all 0.2s ease-out;
        will-change: transform, opacity;
      }
    `}</style>
  );
};

export default ElegantAnimationStyles;
