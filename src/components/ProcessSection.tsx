
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
      title: "Discover",
      description: "We analyze your current systems and identify optimization opportunities through intelligent assessment.",
      icon: "🔍"
    },
    {
      title: "Strategy", 
      description: "Custom AI solutions designed specifically for your business logic and operational requirements.",
      icon: "⚡"
    },
    {
      title: "Implementation",
      description: "Seamless deployment with zero disruption to existing workflows and continuous optimization.",
      icon: "🚀"
    }
  ];

  return (
    <section id="process" ref={sectionRef} className="py-32 relative overflow-hidden process-enhanced">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-5xl md:text-7xl font-light mb-8 text-glow animated-underline">
            The R-Process
          </h2>
          <p className="text-xl text-cosmic-white/70 max-w-3xl mx-auto leading-relaxed">
            A systematic approach to implementing intelligence that adapts and evolves with your business reality.
          </p>
        </div>

        {/* Enhanced process stages */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {processes.map((process, index) => (
            <div
              key={process.title}
              className={`process-stage transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <div className="process-ring">
                <span className="text-2xl">{process.icon}</span>
              </div>
              
              <h3 className="text-3xl font-light mb-6 text-cosmic-gold mt-8">
                {process.title}
              </h3>
              
              <p className="text-cosmic-white/80 leading-relaxed text-lg">
                {process.description}
              </p>
              
              {index < processes.length - 1 && (
                <div className="process-connector hidden md:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
