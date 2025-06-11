
import { useState, useRef, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ServicesSection = () => {
  useScrollReveal();
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState(0);
  const graphRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent, serviceIndex: number) => {
    if (serviceIndex === 2 && graphRef.current) {
      const rect = graphRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  useEffect(() => {
    if (hoveredService === 1) {
      const interval = setInterval(() => {
        setChatMessages(prev => (prev + 1) % 3);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [hoveredService]);

  const services = [
    {
      title: "Workflow Automations",
      description: "We automate your workflows by connecting your favorite applications which boosts efficiency and enhances productivity.",
      tools: [
        { name: "Make", usage: "Visual workflow builder for complex automations" },
        { name: "Zapier", usage: "App connections and trigger-based workflows" },
        { name: "n8n", usage: "Self-hosted automation with custom nodes" },
        { name: "Airtable", usage: "Database management and workflow tracking" }
      ]
    },
    {
      title: "Chatbot Development", 
      description: "We develop advanced chatbots that are reactive, understand nuances, and are capable of solving extremely complicated queries.",
      messages: [
        "Hey there 👋 Ready to automate your lead gen?",
        "Deploying AI agents in under 24 hours...",
        "I've analyzed your pipeline. Want to see the insights?"
      ]
    },
    {
      title: "Business Consulting",
      description: "Using our expertise, we delve deep into your organization and consult you on how AI-driven automations could enhance your operations.",
      metrics: ["+23% ROI", "Risk: Low", "+67% Efficiency", "Forecast: Positive"]
    }
  ];

  const handleToolClick = (tool: any) => {
    setSelectedTool(selectedTool === tool.name ? null : tool.name);
  };

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-heading font-light mb-6 text-cosmic-white scroll-fade-in typing-animation-enhanced">
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
              className={`service-card-enhanced scroll-fade-in stagger-${index + 1}`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              onMouseMove={(e) => handleMouseMove(e, index)}
            >
              <div className="service-card-inner-enhanced">
                <div className="service-icon-container-enhanced">
                  {index === 0 && (
                    <div className="workflow-icons-enhanced">
                      {service.tools.map((tool, i) => (
                        <div 
                          key={tool.name} 
                          className={`workflow-icon-enhanced ${hoveredService === index ? 'workflow-icon-hover-enhanced' : ''} ${selectedTool === tool.name ? 'tool-selected' : ''}`}
                          style={{ animationDelay: `${i * 0.1}s` }}
                          onClick={() => handleToolClick(tool)}
                        >
                          {tool.name.charAt(0)}
                          {selectedTool === tool.name && (
                            <div className="tool-tooltip">
                              <div className="tooltip-title">{tool.name}</div>
                              <div className="tooltip-usage">{tool.usage}</div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="chatbot-container-enhanced">
                      <div className="chat-bubble-enhanced chat-bubble-1">
                        {service.messages[chatMessages]}
                      </div>
                      <div className="typing-indicator">
                        <div className="typing-dot"></div>
                        <div className="typing-dot"></div>
                        <div className="typing-dot"></div>
                      </div>
                    </div>
                  )}
                  
                  {index === 2 && (
                    <div 
                      ref={graphRef}
                      className="consulting-graph-enhanced"
                    >
                      <div className="graph-grid-enhanced">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <div key={i} className="graph-line-enhanced"></div>
                        ))}
                      </div>
                      <div 
                        className="graph-point-enhanced"
                        style={{
                          left: `${mousePosition.x}%`,
                          top: `${mousePosition.y}%`
                        }}
                      ></div>
                      <div className="graph-trend-line-enhanced"></div>
                      {hoveredService === index && (
                        <div className="live-metrics">
                          {service.metrics.map((metric, i) => (
                            <div 
                              key={metric}
                              className="metric-readout"
                              style={{ animationDelay: `${i * 0.2}s` }}
                            >
                              {metric}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <h3 className="text-2xl font-heading font-light text-cosmic-gold mb-4 mt-8">
                  {service.title}
                </h3>
                
                <p className="text-cosmic-white/80 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
