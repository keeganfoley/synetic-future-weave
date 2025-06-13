
import { useEffect, useRef, useState } from 'react';

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const processes = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your current systems and identify optimization opportunities.",
      side: "left"
    },
    {
      step: "02",
      title: "Architecture",
      description: "Custom AI solutions designed specifically for your business logic.",
      side: "right"
    },
    {
      step: "03",
      title: "Integration",
      description: "Seamless deployment with zero disruption to existing workflows.",
      side: "left"
    },
    {
      step: "04",
      title: "Evolution",
      description: "Continuous learning and optimization as your business grows.",
      side: "right"
    }
  ];

  return (
    <section id="process" ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 process-bg-pattern"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-4xl md:text-6xl font-light mb-6 text-glow">
            Our Process
          </h2>
          <p className="text-xl text-cosmic-white/70 max-w-3xl mx-auto leading-relaxed">
            A systematic approach to implementing intelligence that adapts and evolves with your business.
          </p>
        </div>

        <div className="relative">
          {/* Central timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px timeline-line"></div>
          
          {processes.map((process, index) => (
            <div
              key={process.step}
              className={`process-step ${process.side} ${
                isVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="process-card">
                <div className="process-number">{process.step}</div>
                <h3 className="text-2xl font-light mb-4 text-cosmic-gold">
                  {process.title}
                </h3>
                <p className="text-cosmic-white/80 leading-relaxed">
                  {process.description}
                </p>
                <div className="process-card-glow"></div>
              </div>
              
              <div className="timeline-dot">
                <div className="timeline-dot-inner"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
