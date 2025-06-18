
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
      
      @keyframes spaceOrbitFloat {
        0% {
          transform: translateX(0) translateY(0) rotate(0deg);
          opacity: 0.8;
        }
        25% {
          transform: translateX(-40vw) translateY(-20vh) rotate(90deg);
          opacity: 1;
        }
        50% {
          transform: translateX(-80vw) translateY(30vh) rotate(180deg);
          opacity: 0.6;
        }
        75% {
          transform: translateX(-120vw) translateY(-10vh) rotate(270deg);
          opacity: 1;
        }
        100% {
          transform: translateX(-160vw) translateY(20vh) rotate(360deg);
          opacity: 0;
        }
      }
      
      @keyframes spaceWispDrift {
        0% {
          transform: translateX(0) translateY(0) rotate(0deg) scale(0.8);
          opacity: 0.3;
        }
        33% {
          transform: translateX(-60vw) translateY(40vh) rotate(120deg) scale(1.2);
          opacity: 0.8;
        }
        66% {
          transform: translateX(-120vw) translateY(-20vh) rotate(240deg) scale(0.9);
          opacity: 0.5;
        }
        100% {
          transform: translateX(-180vw) translateY(60vh) rotate(360deg) scale(0.7);
          opacity: 0;
        }
      }
      
      @keyframes luxuryFloat {
        0%, 100% {
          transform: translateY(0) rotate(0deg);
        }
        50% {
          transform: translateY(-10px) rotate(0.5deg);
        }
      }
      
      @keyframes spacePulse {
        0%, 100% {
          transform: scale(1);
          opacity: 0.8;
        }
        50% {
          transform: scale(1.05);
          opacity: 1;
        }
      }
      
      @keyframes magneticHover {
        0% {
          transform: translateY(0) scale(1);
        }
        100% {
          transform: translateY(-8px) scale(1.02);
        }
      }
      
      @keyframes floatingBreath {
        0%, 100% {
          transform: translateY(0) scale(1);
          opacity: 0.7;
        }
        50% {
          transform: translateY(-5px) scale(1.01);
          opacity: 1;
        }
      }
      
      .elegant-golden-line {
        transition: all 0.3s ease-out;
        will-change: transform, opacity;
      }
      
      .floating-space-background {
        animation: floatingBreath 8s ease-in-out infinite;
      }
      
      .luxury-float {
        animation: luxuryFloat 6s ease-in-out infinite;
      }
      
      .space-pulse {
        animation: spacePulse 4s ease-in-out infinite;
      }
      
      .magnetic-hover:hover {
        animation: magneticHover 0.4s ease-out forwards;
      }
    `}</style>
  );
};

export default ElegantAnimationStyles;
