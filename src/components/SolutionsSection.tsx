
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
      icon: "🧠",
      delay: "0ms"
    },
    {
      title: "Predictive CRM",
      description: "Advanced relationship mapping with behavioral prediction capabilities.",
      icon: "🔮",
      delay: "200ms"
    },
    {
      title: "Process Automation",
      description: "Seamless workflow optimization that eliminates friction and maximizes efficiency.",
      icon: "⚡",
      delay: "400ms"
    }
  ];

  return (
    <section id="solutions" ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-5xl md:text-7xl font-light mb-8 text-glow animated-underline">
            Intelligent Solutions
          </h2>
          <p className="text-xl text-cosmic-white/70 max-w-3xl mx-auto leading-relaxed">
            Our AI-powered automation platform transforms complex workflows into elegant, 
            self-managing systems that evolve with your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`cosmic-widget transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: solution.delay }}
            >
              <div className="widget-glow"></div>
              
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{solution.icon}</div>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-cosmic-gold to-transparent mx-auto"></div>
              </div>
              
              <h3 className="text-2xl font-light mb-6 text-cosmic-gold text-center">
                {solution.title}
              </h3>
              
              <p className="text-cosmic-white/80 leading-relaxed text-center">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
