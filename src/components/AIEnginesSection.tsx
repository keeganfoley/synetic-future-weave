
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const AIEnginesSection = () => {
  useScrollReveal();
  const [hoveredEngine, setHoveredEngine] = useState<number | null>(null);

  const engines = [
    {
      title: "Cognitive Intelligence",
      description: "Self-evolving logic for every workflow.",
      coreType: "neural-network",
      visualization: "adaptive-synapses"
    },
    {
      title: "Predictive CRM",
      description: "Predict behaviors. Build relationships. Automate at scale.",
      coreType: "relationship-map",
      visualization: "orbital-nodes"
    },
    {
      title: "Infinite Automation",
      description: "Always on. Always optimizing.",
      coreType: "perpetual-motion",
      visualization: "interlocking-rings"
    }
  ];

  return (
    <section id="engines" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 galactic-background-refined"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 text-cosmic-gold scroll-fade-in galactic-section-header">
            AI Core Modules
          </h2>
          <div className="galactic-divider-refined scroll-fade-in stagger-1"></div>
          <p className="text-xl text-cosmic-white/80 font-light scroll-fade-in stagger-2 mt-6">
            The soul of the machine, visualized
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {engines.map((engine, index) => (
            <div
              key={engine.title}
              className={`ai-core-module scroll-fade-in stagger-${index + 1} ${
                hoveredEngine === index ? 'module-active' : ''
              }`}
              onMouseEnter={() => setHoveredEngine(index)}
              onMouseLeave={() => setHoveredEngine(null)}
            >
              <div className="core-housing">
                <div className="core-display-chamber">
                  <div className={`ai-core core-${engine.coreType}`}>
                    <div className="core-matrix"></div>
                    <div className={`core-visualization viz-${engine.visualization} ${
                      hoveredEngine === index ? 'viz-active' : ''
                    }`}></div>
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-light text-cosmic-gold mb-4 core-title-glow">
                  {engine.title}
                </h3>
                
                <p className="text-cosmic-white/90 leading-relaxed mb-6">
                  {engine.description}
                </p>

                <div className="core-status-display">
                  <div className="status-text">Core online. Processing...</div>
                  <div className="status-pulse"></div>
                </div>
              </div>
              
              <div className="core-energy-field"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIEnginesSection;
