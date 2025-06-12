
import { useState, useRef, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ServicesSection = () => {
  useScrollReveal();
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [chatMessageIndex, setChatMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [heatmapPoints, setHeatmapPoints] = useState<Array<{x: number, y: number, id: number}>>([]);
  const heatmapRef = useRef<HTMLDivElement>(null);

  const chatMessages = [
    "Hey there 👋 Ready to automate your lead gen?",
    "Deploying assistant... complete.",
    "System optimization: 97% efficiency achieved."
  ];

  const tools = [
    { name: "Make", usage: "Visual workflow builder for complex automations", color: "#6366f1" },
    { name: "Zapier", usage: "App connections and trigger-based workflows", color: "#ff6b35" },
    { name: "n8n", usage: "Self-hosted automation with custom nodes", color: "#ea4560" },
    { name: "Airtable", usage: "Database management and workflow tracking", color: "#18bfff" }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (hoveredService === 1) {
      interval = setInterval(() => {
        setIsTyping(true);
        setTimeout(() => {
          setChatMessageIndex(prev => (prev + 1) % chatMessages.length);
          setIsTyping(false);
        }, 1000);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [hoveredService, chatMessages.length]);

  const handleHeatmapMove = (e: React.MouseEvent) => {
    if (heatmapRef.current) {
      const rect = heatmapRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      const newPoint = { x, y, id: Date.now() };
      setHeatmapPoints(prev => [...prev.slice(-8), newPoint]);
    }
  };

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 text-cosmic-white scroll-fade-in cinematic-header">
            Our Services
          </h2>
          <p className="text-xl text-cosmic-white/80 font-light scroll-fade-in stagger-1">
            Interactive data pods tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Workflow Automations */}
          <div
            className="ai-dashboard-module scroll-fade-in stagger-1"
            onMouseEnter={() => setHoveredService(0)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="dashboard-module-inner">
              <div className="module-icon-container">
                <div className="neural-network-layout">
                  {tools.map((tool, index) => (
                    <div 
                      key={tool.name}
                      className={`neural-node ${selectedTool === tool.name ? 'neural-node-active' : ''}`}
                      style={{ 
                        '--node-color': tool.color,
                        '--node-delay': `${index * 0.1}s`
                      } as React.CSSProperties}
                      onClick={() => setSelectedTool(selectedTool === tool.name ? null : tool.name)}
                    >
                      {tool.name.charAt(0)}
                      <div className="neural-connection-line"></div>
                      
                      {selectedTool === tool.name && (
                        <div className="neural-tooltip">
                          <div className="tooltip-header">{tool.name}</div>
                          <div className="tooltip-description">{tool.usage}</div>
                        </div>
                      )}
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
            </div>
          </div>

          {/* Chatbot Development */}
          <div
            className="ai-dashboard-module scroll-fade-in stagger-2"
            onMouseEnter={() => setHoveredService(1)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="dashboard-module-inner">
              <div className="module-icon-container">
                <div className="chatbot-interface">
                  <div className="chat-display-area">
                    <div className="chat-bubble-ai">
                      {chatMessages[chatMessageIndex]}
                    </div>
                    {isTyping && (
                      <div className="typing-animation">
                        <div className="typing-cursor-flicker">
                          <div className="cursor-dot"></div>
                          <div className="cursor-dot"></div>
                          <div className="cursor-dot"></div>
                        </div>
                      </div>
                    )}
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
            className="ai-dashboard-module scroll-fade-in stagger-3"
            onMouseEnter={() => setHoveredService(2)}
            onMouseLeave={() => setHoveredService(null)}
            onMouseMove={handleHeatmapMove}
          >
            <div className="dashboard-module-inner">
              <div className="module-icon-container">
                <div ref={heatmapRef} className="interactive-heatmap">
                  <div className="heatmap-grid">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div key={i} className="grid-line-3d"></div>
                    ))}
                  </div>
                  
                  {heatmapPoints.map((point) => (
                    <div
                      key={point.id}
                      className="heatmap-point"
                      style={{
                        left: `${point.x}%`,
                        top: `${point.y}%`
                      }}
                    />
                  ))}
                  
                  <div className="scanning-data-line"></div>
                  
                  {hoveredService === 2 && (
                    <div className="live-data-readouts">
                      <div className="data-metric">+23% ROI</div>
                      <div className="data-metric">Risk: Low</div>
                      <div className="data-metric">+67% Efficiency</div>
                      <div className="data-metric">Forecast: Positive</div>
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
