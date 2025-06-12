
import { useState, useEffect } from 'react';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [visibleServices, setVisibleServices] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const serviceIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleServices(prev => [...prev, serviceIndex]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const services = document.querySelectorAll('.service-module');
    services.forEach(service => observer.observe(service));

    return () => observer.disconnect();
  }, []);

  const serviceModules = [
    {
      title: "Workflow Automations",
      description: "Intelligent automation that connects your applications and streamlines complex processes.",
      visual: "flowchart-nodes",
      animation: "nodes-connect"
    },
    {
      title: "Business Consulting", 
      description: "Strategic AI implementation guidance tailored to your organization's unique needs.",
      visual: "trending-analytics",
      animation: "data-ascend"
    },
    {
      title: "AI Integrations",
      description: "Seamless fusion of AI capabilities into your existing technology ecosystem.",
      visual: "merging-forms",
      animation: "forms-unite"
    },
    {
      title: "Data Infrastructure",
      description: "Robust architectural foundation enabling efficient and secure data flow.",
      visual: "data-streams",
      animation: "streams-flow"
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 section-background-refined"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 text-cosmic-white section-header-enhanced">
            Our Services
          </h2>
          <div className="section-divider-refined"></div>
          <p className="text-xl text-cosmic-white/80 font-light mt-6">
            Modular control panels for intelligent automation
          </p>
        </div>

        {/* Grid of Service Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceModules.map((service, index) => (
            <div
              key={service.title}
              data-index={index}
              className={`service-module interactive-control-square ${
                visibleServices.includes(index) ? 'module-visible' : ''
              } ${hoveredService === index ? 'module-active' : ''}`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="module-chassis">
                <div className="module-header">
                  <div className="service-id">SRV-{String(index + 1).padStart(2, '0')}</div>
                  <div className="status-indicators">
                    <div className="status-dot active"></div>
                    <div className="status-dot standby"></div>
                  </div>
                </div>

                <div className="visual-chamber">
                  <div className={`service-visual visual-${service.visual}`}>
                    <div className="visual-core"></div>
                    <div className={`visual-animation anim-${service.animation} ${
                      hoveredService === index ? 'animation-active' : ''
                    }`}></div>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-light text-cosmic-gold mb-3 module-title">
                  {service.title}
                </h3>
                
                <p className="text-cosmic-white/80 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <button className="service-activator">
                  <span className="activator-text">Initialize Module</span>
                  <div className="activator-pulse"></div>
                </button>
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

export default ServicesSection;
