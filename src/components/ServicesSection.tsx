
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
      icon: "workflow",
      moduleType: "neural-network"
    },
    {
      title: "Chatbot Development", 
      description: "We develop advanced chatbots that are reactive, understand nuances, and are capable of solving extremely complicated queries.",
      icon: "chatbot",
      moduleType: "communication-hub"
    },
    {
      title: "Business Consulting",
      description: "Using our expertise, we delve deep into your organization and consult you on how AI-driven automations could enhance your operations.",
      icon: "consulting",
      moduleType: "analytics-core"
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 text-cosmic-white scroll-fade-in galaxy-section-header">
            Our Services
          </h2>
          <div className="galaxy-divider-line scroll-fade-in stagger-1"></div>
          <p className="text-xl text-cosmic-white/80 font-light scroll-fade-in stagger-2 mt-6">
            Interactive AI modules designed for your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`galaxy-service-terminal scroll-fade-in stagger-${index + 1} ${
                hoveredService === index ? 'terminal-active' : ''
              } ${activatedModule === index ? 'module-activated' : ''}`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => setActivatedModule(activatedModule === index ? null : index)}
            >
              <div className="terminal-surface">
                <div className="terminal-header">
                  <div className="status-indicators">
                    <div className="status-dot status-active"></div>
                    <div className="status-dot status-standby"></div>
                    <div className="status-dot status-offline"></div>
                  </div>
                  <div className="terminal-id">SYN-{index + 1}</div>
                </div>

                <div className="terminal-display">
                  <div className={`service-icon icon-${service.icon}`}>
                    <div className="icon-hologram"></div>
                    <div className="icon-data-streams"></div>
                  </div>

                  {activatedModule === index && (
                    <div className="module-activation-sequence">
                      <div className="activation-waves"></div>
                      <div className="system-status">MODULE ONLINE</div>
                    </div>
                  )}
                </div>

                <div className="terminal-content">
                  <h3 className="text-2xl font-heading font-light text-cosmic-gold mb-4 service-title">
                    {service.title}
                  </h3>
                  
                  <p className="text-cosmic-white/80 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <button className="galaxy-module-activator">
                    <span>Activate Module</span>
                    <div className="activator-pulse"></div>
                  </button>
                </div>
              </div>
              
              <div className="terminal-energy-grid"></div>
              <div className="terminal-scan-lines"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
