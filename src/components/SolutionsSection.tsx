
import { useEffect, useRef, useState } from 'react';

const SolutionsSection = () => {
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

  const solutions = [
    {
      title: "Cognitive Intelligence",
      description: "Self-evolving systems that learn and adapt to your unique business patterns.",
      iconType: "neural-network",
      delay: "0ms"
    },
    {
      title: "Predictive CRM",
      description: "Advanced relationship mapping with behavioral prediction capabilities.",
      iconType: "data-matrix",
      delay: "200ms"
    },
    {
      title: "Process Automation",
      description: "Seamless workflow optimization that eliminates friction and maximizes efficiency.",
      iconType: "energy-flow",
      delay: "400ms"
    }
  ];

  return (
    <section id="solutions" ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 solution-bg-pattern"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="section-title">
            Intelligent Solutions
            <div className="section-title-glow"></div>
          </h2>
          <p className="section-subtitle">
            Our AI-powered automation platform transforms complex workflows into elegant, 
            self-managing systems that evolve with your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`solution-card-enhanced transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: solution.delay }}
            >
              <div className="solution-card-inner-enhanced group">
                <div className="solution-icon-container-new">
                  <div className={`abstract-icon ${solution.iconType}`}></div>
                  <div className="icon-energy-ring"></div>
                  <div className="icon-pulse-effect"></div>
                </div>
                
                <h3 className="solution-title">
                  {solution.title}
                </h3>
                
                <p className="solution-description">
                  {solution.description}
                </p>
                
                <div className="solution-hover-effect"></div>
                <div className="solution-digital-noise"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
