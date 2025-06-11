
import { useState, useRef, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ServicesSection = () => {
  useScrollReveal();
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const graphRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent, serviceIndex: number) => {
    if (serviceIndex === 2 && graphRef.current) {
      const rect = graphRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  const services = [
    {
      title: "Workflow Automations",
      description: "We automate your workflows by connecting your favorite applications which boosts efficiency and enhances productivity.",
      tools: ["Make", "n8n", "Zapier", "Airtable", "OpenAI"],
      icon: "workflow"
    },
    {
      title: "Chatbot Development", 
      description: "We develop advanced chatbots that are reactive, understand nuances, and are capable of solving extremely complicated queries.",
      tools: ["AI Assistant", "Custom GPT", "Dialog Flow"],
      icon: "chatbot"
    },
    {
      title: "Business Consulting",
      description: "Using our expertise, we delve deep into your organization and consult you on how AI-driven automations could enhance your operations.",
      tools: ["Analytics", "Strategy", "Implementation"],
      icon: "consulting"
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 text-cosmic-white scroll-fade-in typing-animation">
            Our Services
          </h2>
          <p className="text-xl text-cosmic-white/80 font-light scroll-fade-in stagger-1">
            Comprehensive AI solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card scroll-fade-in stagger-${index + 1}`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              onMouseMove={(e) => handleMouseMove(e, index)}
            >
              <div className="service-card-inner">
                <div className="service-icon-container">
                  {index === 0 && (
                    <div className="workflow-icons">
                      {service.tools.slice(0, 4).map((tool, i) => (
                        <div 
                          key={tool} 
                          className={`workflow-icon ${hoveredService === index ? 'workflow-icon-hover' : ''}`}
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          {tool.charAt(0)}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="chatbot-container">
                      <div className="chat-bubble chat-bubble-1">
                        AI: How can I help?
                      </div>
                      {hoveredService === index && (
                        <div className="chat-bubble chat-bubble-2">
                          AI: I can automate that for you!
                        </div>
                      )}
                    </div>
                  )}
                  
                  {index === 2 && (
                    <div 
                      ref={graphRef}
                      className="consulting-graph"
                    >
                      <div className="graph-grid">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <div key={i} className="graph-line"></div>
                        ))}
                      </div>
                      <div 
                        className="graph-point"
                        style={{
                          left: `${mousePosition.x}%`,
                          top: `${mousePosition.y}%`
                        }}
                      ></div>
                      <div className="graph-trend-line"></div>
                    </div>
                  )}
                </div>

                <h3 className="text-2xl font-heading font-light text-cosmic-gold mb-4 mt-8">
                  {service.title}
                </h3>
                
                <p className="text-cosmic-white/80 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="service-tools">
                  {service.tools.map((tool, i) => (
                    <span 
                      key={tool}
                      className="service-tool-tag"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
