
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
      moduleType: "robotic-modules",
      uniqueVisual: "connecting-blocks"
    },
    {
      title: "Chatbot Development", 
      description: "We develop advanced chatbots that are reactive, understand nuances, and are capable of solving extremely complicated queries.",
      icon: "chatbot",
      moduleType: "neural-network",
      uniqueVisual: "blinking-prompt"
    },
    {
      title: "Business Consulting",
      description: "Using our expertise, we delve deep into your organization and consult you on how AI-driven automations could enhance your operations.",
      icon: "consulting",
      moduleType: "decision-tree",
      uniqueVisual: "orbiting-data"
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 galaxy-unified-background"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 text-cosmic-white scroll-fade-in galaxy-section-header">
            Our Services
          </h2>
          <div className="galaxy-divider-enhanced scroll-fade-in stagger-1"></div>
          <p className="text-xl text-cosmic-white/80 font-light scroll-fade-in stagger-2 mt-6">
            Interactive AI modules designed for your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`galaxy-service-enhanced scroll-fade-in stagger-${index + 1} ${
                hoveredService === index ? 'terminal-active' : ''
              } ${activatedModule === index ? 'module-activated' : ''}`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => setActivatedModule(activatedModule === index ? null : index)}
            >
              <div className="terminal-surface-enhanced">
                <div className="terminal-header-enhanced">
                  <div className="status-indicators-enhanced">
                    <div className="status-dot status-active"></div>
                    <div className="status-dot status-standby"></div>
                    <div className="status-dot status-offline"></div>
                  </div>
                  <div className="terminal-id-enhanced">SYN-{index + 1}</div>
                </div>

                <div className="terminal-display-enhanced">
                  <div className={`service-icon-unique icon-${service.icon}`}>
                    <div className="icon-hologram-enhanced"></div>
                    <div className={`unique-visual visual-${service.uniqueVisual}`}></div>
                    <div className="icon-data-streams-enhanced"></div>
                  </div>

                  {activatedModule === index && (
                    <div className="module-activation-sequence-enhanced">
                      <div className="activation-waves-enhanced"></div>
                      <div className="system-status-enhanced">MODULE ONLINE</div>
                    </div>
                  )}
                </div>

                <div className="terminal-content-enhanced">
                  <h3 className="text-2xl font-heading font-light text-cosmic-gold mb-4 service-title-enhanced">
                    {service.title}
                  </h3>
                  
                  <p className="text-cosmic-white/80 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <button className="galaxy-module-activator-enhanced">
                    <span>Activate Module</span>
                    <div className="activator-pulse-enhanced"></div>
                  </button>
                </div>
              </div>
              
              <div className="terminal-energy-grid-enhanced"></div>
              <div className="terminal-scan-lines-enhanced"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
