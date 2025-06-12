
import { useState, useEffect } from 'react';

const AIEnginesSection = () => {
  const [hoveredEngine, setHoveredEngine] = useState<number | null>(null);
  const [visibleEngines, setVisibleEngines] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const engineIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleEngines(prev => [...prev, engineIndex]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const engines = document.querySelectorAll('.ai-engine');
    engines.forEach(engine => observer.observe(engine));

    return () => observer.disconnect();
  }, []);

  const aiEngines = [
    {
      title: "Cognitive Intelligence",
      description: "Self-evolving neural networks that adapt and learn from every interaction.",
      coreType: "neural-network",
      animation: "synapses-pulse"
    },
    {
      title: "Predictive CRM",
      description: "Celestial relationship mapping with predictive satellite intelligence.",
      coreType: "relationship-map",
      animation: "orbital-glow"
    },
    {
      title: "Infinite Automation",
      description: "Perpetual motion systems ensuring continuous, seamless operation.",
      coreType: "perpetual-motion",
      animation: "rings-rotate"
    }
  ];

  return (
    <section id="engines" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 section-background-refined"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 text-cosmic-gold section-header-enhanced">
            AI Core Modules
          </h2>
          <div className="section-divider-refined"></div>
          <p className="text-xl text-cosmic-white/80 font-light mt-6">
            The soul of the machine, visualized and interactive
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aiEngines.map((engine, index) => (
            <div
              key={engine.title}
              data-index={index}
              className={`ai-engine engine-module ${
                visibleEngines.includes(index) ? 'engine-visible' : ''
              } ${hoveredEngine === index ? 'engine-active' : ''}`}
              onMouseEnter={() => setHoveredEngine(index)}
              onMouseLeave={() => setHoveredEngine(null)}
            >
              <div className="engine-chassis">
                <div className="engine-core-chamber">
                  <div className={`ai-core core-${engine.coreType}`}>
                    <div className="core-matrix"></div>
                    <div className={`core-animation anim-${engine.animation} ${
                      hoveredEngine === index ? 'animation-active' : ''
                    }`}></div>
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-light text-cosmic-gold mb-4 engine-title">
                  {engine.title}
                </h3>
                
                <p className="text-cosmic-white/90 leading-relaxed mb-6">
                  {engine.description}
                </p>

                <div className="engine-status-panel">
                  <div className="status-text">Core online. Processing...</div>
                  <div className="status-pulse-indicator"></div>
                </div>
              </div>
              
              <div className="engine-energy-field"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIEnginesSection;
