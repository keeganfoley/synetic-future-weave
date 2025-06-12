
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ServicesSection = () => {
  useScrollReveal();
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      title: "Workflow Automations",
      description: "We automate your workflows by connecting your favorite applications which boosts efficiency and enhances productivity.",
      visual: "flowchart-nodes",
      layout: "primary"
    },
    {
      title: "Business Consulting", 
      description: "Using our expertise, we delve deep into your organization and consult you on how AI-driven automations could enhance your operations.",
      visual: "trending-graph",
      layout: "secondary"
    },
    {
      title: "AI Integrations",
      description: "Seamless integration of AI capabilities into your existing systems, creating unified and intelligent workflows.",
      visual: "merging-forms",
      layout: "tertiary"
    },
    {
      title: "Data Infrastructure",
      description: "Robust foundational architecture that enables your data to flow efficiently and securely across all systems.",
      visual: "data-streams",
      layout: "quaternary"
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 galactic-background-refined"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 text-cosmic-white scroll-fade-in galactic-section-header">
            Our Services
          </h2>
          <div className="galactic-divider-refined scroll-fade-in stagger-1"></div>
          <p className="text-xl text-cosmic-white/80 font-light scroll-fade-in stagger-2 mt-6">
            Asymmetrical data cards for your command center
          </p>
        </div>

        <div className="asymmetrical-grid">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`data-card scroll-fade-in stagger-${index + 1} layout-${service.layout} ${
                hoveredService === index ? 'card-active' : ''
              }`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="card-surface">
                <div className="card-header">
                  <div className="card-status-indicators">
                    <div className="indicator active"></div>
                    <div className="indicator standby"></div>
                  </div>
                  <div className="card-id">SRV-{String(index + 1).padStart(2, '0')}</div>
                </div>

                <div className="visual-display">
                  <div className={`service-visual visual-${service.visual} ${
                    hoveredService === index ? 'visual-active' : ''
                  }`}>
                    <div className="visual-core"></div>
                    <div className="visual-animation"></div>
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="text-2xl font-heading font-light text-cosmic-gold mb-4 card-title-glow">
                    {service.title}
                  </h3>
                  
                  <p className="text-cosmic-white/80 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <button className="data-card-activator">
                    <span className="activator-text">Initialize Module</span>
                    <div className="activator-energy-core"></div>
                  </button>
                </div>
              </div>
              
              <div className="card-energy-field"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
