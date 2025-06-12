
import { useState, useEffect } from 'react';

const ProcessSection = () => {
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);
  const [visibleModules, setVisibleModules] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const moduleIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleModules(prev => [...prev, moduleIndex]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const modules = document.querySelectorAll('.process-module');
    modules.forEach(module => observer.observe(module));

    return () => observer.disconnect();
  }, []);

  const processModules = [
    {
      number: "01",
      title: "Discovery",
      description: "We analyze your current workflows and identify automation opportunities through comprehensive system mapping.",
      artifact: "planetary-scan",
      interaction: "radar-sweep"
    },
    {
      number: "02", 
      title: "Strategy",
      description: "Custom automation blueprint tailored to your specific business needs and objectives.",
      artifact: "blueprint-schematic",
      interaction: "lines-draw"
    },
    {
      number: "03",
      title: "Implementation", 
      description: "Seamless integration of AI automation into your existing infrastructure and workflows.",
      artifact: "energy-nodes",
      interaction: "nodes-activate"
    },
    {
      number: "04",
      title: "Optimization",
      description: "Continuous refinement and performance enhancement to maximize efficiency and results.",
      artifact: "crystalline-matrix",
      interaction: "facets-realign"
    }
  ];

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 section-background-refined"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 text-cosmic-white section-header-enhanced">
            Our Process
          </h2>
          <div className="section-divider-refined"></div>
          <p className="text-xl text-cosmic-white/80 font-light mt-6">
            Interactive command modules for seamless transformation
          </p>
        </div>

        {/* Grid of Interactive Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processModules.map((module, index) => (
            <div
              key={module.number}
              data-index={index}
              className={`process-module interactive-control-square ${
                visibleModules.includes(index) ? 'module-visible' : ''
              } ${hoveredModule === index ? 'module-active' : ''}`}
              onMouseEnter={() => setHoveredModule(index)}
              onMouseLeave={() => setHoveredModule(null)}
            >
              <div className="module-chassis">
                <div className="module-header">
                  <div className="status-beacon">{module.number}</div>
                  <div className="status-indicators">
                    <div className="status-dot active"></div>
                    <div className="status-dot standby"></div>
                  </div>
                </div>
                
                <div className="artifact-chamber">
                  <div className={`interactive-artifact artifact-${module.artifact}`}>
                    <div className="artifact-core"></div>
                    <div className={`artifact-animation anim-${module.interaction} ${
                      hoveredModule === index ? 'animation-active' : ''
                    }`}></div>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-light text-cosmic-gold mb-3 module-title">
                  {module.title}
                </h3>
                
                <p className="text-cosmic-white/80 text-sm leading-relaxed">
                  {module.description}
                </p>
              </div>
              
              <div className="module-glow-field"></div>
              <div className="module-3d-tilt"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
