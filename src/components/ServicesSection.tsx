
import { useState, useRef, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ServicesSection = () => {
  useScrollReveal();
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [activatedModule, setActivatedModule] = useState<number | null>(null);

  const services = [
    {
      title: "Workflow Automations",
      description: "We automate your workflows by connecting your favorite applications which boosts efficiency and enhances productivity.",
      moduleType: "workflow-engine",
      visualEffect: "connecting-nodes",
      switchType: "activation-switch-blue"
    },
    {
      title: "Chatbot Development", 
      description: "We develop advanced chatbots that are reactive, understand nuances, and are capable of solving extremely complicated queries.",
      moduleType: "neural-processor",
      visualEffect: "neural-network-pulse",
      switchType: "activation-switch-green"
    },
    {
      title: "Business Consulting",
      description: "Using our expertise, we delve deep into your organization and consult you on how AI-driven automations could enhance your operations.",
      moduleType: "analytics-core",
      visualEffect: "data-constellation",
      switchType: "activation-switch-gold"
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 control-room-background"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 text-cosmic-white scroll-fade-in control-room-section-header">
            Our Services
          </h2>
          <div className="control-room-divider scroll-fade-in stagger-1"></div>
          <p className="text-xl text-cosmic-white/80 font-light scroll-fade-in stagger-2 mt-6">
            Modular AI software blocks for your command center.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`ai-software-module scroll-fade-in stagger-${index + 1} ${
                hoveredService === index ? 'module-active' : ''
              } ${activatedModule === index ? 'module-engaged' : ''}`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => setActivatedModule(activatedModule === index ? null : index)}
            >
              <div className="module-chassis">
                <div className="module-header-panel">
                  <div className="module-status-grid">
                    <div className="status-indicator active"></div>
                    <div className="status-indicator standby"></div>
                    <div className="status-indicator offline"></div>
                  </div>
                  <div className="module-id-display">AI-{index + 1}</div>
                </div>

                <div className="module-visual-display">
                  <div className={`ai-module-core module-${service.moduleType}`}>
                    <div className="core-energy-field"></div>
                    <div className={`visual-effect effect-${service.visualEffect}`}></div>
                    <div className="energy-streams"></div>
                  </div>

                  {activatedModule === index && (
                    <div className="module-online-sequence">
                      <div className="online-energy-burst"></div>
                      <div className="system-status-display">MODULE ONLINE</div>
                    </div>
                  )}
                </div>

                <div className="module-info-panel">
                  <h3 className="text-2xl font-heading font-light text-cosmic-gold mb-4 module-title-glow">
                    {service.title}
                  </h3>
                  
                  <p className="text-cosmic-white/80 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <button className={`dashboard-activation-switch ${service.switchType}`}>
                    <span className="switch-label">Activate Module</span>
                    <div className="switch-energy-core"></div>
                    <div className="switch-beam-indicator"></div>
                  </button>
                </div>
              </div>
              
              <div className="module-energy-lattice"></div>
              <div className="module-motion-blur"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
