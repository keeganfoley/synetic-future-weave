
import { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ServicesSection = () => {
  useScrollReveal();
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [chatMessageIndex, setChatMessageIndex] = useState(0);
  const [showDemo, setShowDemo] = useState(false);

  const chatMessages = [
    "Hey there 👋 Ready to automate your lead gen?",
    "Deploying AI agents in under 24 hours...",
    "🚀 Complete. Your automation is live."
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (hoveredService === 1) {
      interval = setInterval(() => {
        setChatMessageIndex(prev => (prev + 1) % chatMessages.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [hoveredService, chatMessages.length]);

  const handleDemoClick = () => {
    setShowDemo(true);
    setTimeout(() => setShowDemo(false), 3000);
  };

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 text-cosmic-white scroll-fade-in galaxy-header-reveal">
            Our Services
          </h2>
          <p className="text-xl text-cosmic-white/80 font-light scroll-fade-in stagger-1">
            Interactive AI modules designed for your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Workflow Automations */}
          <div
            className="service-module-optimized scroll-fade-in stagger-1"
            onMouseEnter={() => setHoveredService(0)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="service-surface">
              <div className="service-interface">
                <div className="workflow-tools-network">
                  {['Make', 'Zapier', 'n8n', 'Airtable'].map((tool, index) => (
                    <div 
                      key={tool}
                      className={`tool-node ${hoveredService === 0 ? 'node-active' : ''}`}
                      style={{ '--node-delay': `${index * 0.1}s` } as React.CSSProperties}
                    >
                      <div className="tool-icon">{tool.charAt(0)}</div>
                      <div className="tool-connection-beam"></div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-2xl font-heading font-light text-cosmic-gold mb-4 mt-8">
                Workflow Automations
              </h3>
              
              <p className="text-cosmic-white/80 leading-relaxed mb-6">
                We automate your workflows by connecting your favorite applications which boosts efficiency and enhances productivity.
              </p>

              <button 
                className="demo-button-optimized"
                onClick={handleDemoClick}
              >
                {showDemo ? '✓ Demo Launched' : 'Try Demo'}
              </button>
            </div>
          </div>

          {/* Chatbot Development */}
          <div
            className="service-module-optimized scroll-fade-in stagger-2"
            onMouseEnter={() => setHoveredService(1)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="service-surface">
              <div className="service-interface">
                <div className="chat-interface-optimized">
                  <div className="chat-bubble-optimized">
                    {chatMessages[chatMessageIndex]}
                  </div>
                  <div className="typing-indicator-optimized">
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-heading font-light text-cosmic-gold mb-4 mt-8">
                Chatbot Development
              </h3>
              
              <p className="text-cosmic-white/80 leading-relaxed mb-6">
                We develop advanced chatbots that are reactive, understand nuances, and are capable of solving extremely complicated queries.
              </p>
            </div>
          </div>

          {/* Business Consulting */}
          <div
            className="service-module-optimized scroll-fade-in stagger-3"
            onMouseEnter={() => setHoveredService(2)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="service-surface">
              <div className="service-interface">
                <div className="analytics-display-optimized">
                  <div className="graph-container">
                    <div className="graph-line graph-1"></div>
                    <div className="graph-line graph-2"></div>
                    <div className="graph-line graph-3"></div>
                  </div>
                  
                  {hoveredService === 2 && (
                    <div className="live-metrics">
                      <div className="metric">ROI: +47%</div>
                      <div className="metric">Risk: Low</div>
                      <div className="metric">Growth: +89%</div>
                    </div>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-heading font-light text-cosmic-gold mb-4 mt-8">
                Business Consulting
              </h3>
              
              <p className="text-cosmic-white/80 leading-relaxed mb-6">
                Using our expertise, we delve deep into your organization and consult you on how AI-driven automations could enhance your operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
