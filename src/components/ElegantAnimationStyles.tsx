
const ElegantAnimationStyles = () => {
  return (
    <style>{`
      @keyframes elegantHorizontalFlow {
        0% {
          transform: translateX(0) scaleX(0);
          opacity: 0;
        }
        15% {
          transform: translateX(0) scaleX(1);
          opacity: 1;
        }
        85% {
          transform: translateX(120vw) scaleX(1);
          opacity: 1;
        }
        100% {
          transform: translateX(120vw) scaleX(0);
          opacity: 0;
        }
      }
      
      @keyframes elegantVerticalFlow {
        0% {
          transform: translateY(0) scaleY(0);
          opacity: 0;
        }
        15% {
          transform: translateY(0) scaleY(1);
          opacity: 1;
        }
        85% {
          transform: translateY(120vh) scaleY(1);
          opacity: 1;
        }
        100% {
          transform: translateY(120vh) scaleY(0);
          opacity: 0;
        }
      }
      
      @keyframes elegantDiagonalFlow {
        0% {
          transform: translateX(0) translateY(0) scaleX(0);
          opacity: 0;
        }
        15% {
          transform: translateX(15vw) translateY(-8vh) scaleX(1);
          opacity: 1;
        }
        85% {
          transform: translateX(140vw) translateY(-70vh) scaleX(1);
          opacity: 1;
        }
        100% {
          transform: translateX(150vw) translateY(-75vh) scaleX(0);
          opacity: 0;
        }
      }
      
      .elegant-golden-line {
        transition: all 0.3s ease-out;
        will-change: transform, opacity;
      }
    `}</style>
  );
};

export default ElegantAnimationStyles;
