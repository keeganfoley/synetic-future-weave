
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
      title: "Discover",
      description: "We analyze your current systems and identify optimization opportunities.",
      delay: "0ms"
    },
    {
      step: "02", 
      title: "Architect",
      description: "Custom AI solutions designed specifically for your business logic.",
      delay: "200ms"
    },
    {
      step: "03",
      title: "Integrate", 
      description: "Seamless deployment with zero disruption to existing workflows.",
      delay: "400ms"
    },
    {
      step: "04",
      title: "Evolve",
      description: "Continuous learning and optimization as your business grows.",
      delay: "600ms"
    },
    {
      step: "05",
      title: "Transform",
      description: "Complete digital transformation with intelligent automation at scale.",
      delay: "800ms"
    }
  ];

  return (
    <section id="process" ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 process-bg-pattern"></div>
      
      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="section-title">
            Our Process
            <div className="section-title-glow"></div>
          </h2>
          <p className="section-subtitle">
            A systematic approach to implementing intelligence that adapts and evolves with your business.
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-px process-timeline-vertical"></div>
          
          {processes.map((process, index) => (
            <div
              key={process.step}
              className={`process-step-vertical ${
                isVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: process.delay }}
            >
              <div className="process-step-marker">
                <div className="process-step-number">{process.step}</div>
                <div className="process-step-glow"></div>
              </div>
              
              <div className="process-content">
                <h3 className="process-title">{process.title}</h3>
                <p className="process-description">{process.description}</p>
                <div className="process-hover-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
