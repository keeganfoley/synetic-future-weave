
import { useState, useRef, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ServicesSection = () => {
  useScrollReveal();
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [chatMessageIndex, setChatMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [heatmapPoints, setHeatmapPoints] = useState<Array<{x: number, y: number, id: number}>>([]);
  const [graphPeaks, setGraphPeaks] = useState<Array<{x: number, y: number, intensity: number}>>([]);
  const heatmapRef = useRef<HTMLDivElement>(null);

  const chatMessages = [
    "Hey there 👋 Ready to automate your lead gen?",
    "Deploying AI agent...",
    "🚀 Systems online. Ready to scale."
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
        }, 1200);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [hoveredService, chatMessages.length]);

  const handleHeatmapMove = (e: React.MouseEvent) => {
    if (heatmapRef.current && hoveredService === 2) {
      const rect = heatmapRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      const newPoint = { x, y, id: Date.now() };
      setHeatmapPoints(prev => [...prev.slice(-12), newPoint]);
      
      // Generate graph peaks near cursor
      const newPeak = { x, y: y * 0.8, intensity: Math.random() * 100 + 50 };
      setGraphPeaks(prev => [...prev.slice(-8), newPeak]);
    }
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
          {/* Workflow Automations - Neural Network Module */}
          <div
            className="ai-control-module scroll-fade-in stagger-1"
            onMouseEnter={() => setHoveredService(0)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="control-module-surface">
              <div className="module-interface-zone">
                <div className="neural-tool-network">
                  {tools.map((tool, index) => (
                    <div 
                      key={tool.name}
                      className={`neural-tool-node ${selectedTool === tool.name ? 'node-selected' : ''} ${hoveredService === 0 ? 'network-active' : ''}`}
                      style={{ 
                        '--tool-color': tool.color,
                        '--node-delay': `${index * 0.15}s`
                      } as React.CSSProperties}
                      onClick={() => setSelectedTool(selectedTool === tool.name ? null : tool.name)}
                      onMouseEnter={() => {}}
                    >
                      <div className="tool-icon-core">{tool.name.charAt(0)}</div>
                      <div className="neural-beam-connection"></div>
                      <div className="tool-energy-pulse"></div>
                      
                      {selectedTool === tool.name && (
                        <div className="neural-tool-tooltip">
                          <div className="tooltip-energy-border"></div>
                          <div className="tooltip-header-glow">{tool.name}</div>
                          <div className="tooltip-description-text">{tool.usage}</div>
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="network-energy-grid"></div>
                </div>
              </div>

              <h3 className="text-2xl font-heading font-light text-cosmic-gold mb-4 mt-8 module-header">
                Workflow Automations
              </h3>
              
              <p className="text-cosmic-white/80 leading-relaxed mb-6">
                We automate your workflows by connecting your favorite applications which boosts efficiency and enhances productivity.
              </p>
            </div>
            <div className="module-magnetic-field"></div>
          </div>

          {/* Chatbot Development - Live Chat Interface */}
          <div
            className="ai-control-module scroll-fade-in stagger-2"
            onMouseEnter={() => setHoveredService(1)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="control-module-surface">
              <div className="module-interface-zone">
                <div className="live-chat-interface">
                  <div className="chat-hologram-display">
                    <div className={`chat-message-bubble ${hoveredService === 1 ? 'bubble-active' : ''}`}>
                      {chatMessages[chatMessageIndex]}
                    </div>
                    {isTyping && (
                      <div className="typing-interface-animation">
                        <div className="typing-orb-cluster">
                          <div className="typing-orb orb-1"></div>
                          <div className="typing-orb orb-2"></div>
                          <div className="typing-orb orb-3"></div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="chat-energy-streams"></div>
                </div>
              </div>

              <h3 className="text-2xl font-heading font-light text-cosmic-gold mb-4 mt-8 module-header">
                Chatbot Development
              </h3>
              
              <p className="text-cosmic-white/80 leading-relaxed mb-6">
                We develop advanced chatbots that are reactive, understand nuances, and are capable of solving extremely complicated queries.
              </p>
            </div>
            <div className="module-magnetic-field"></div>
          </div>

          {/* Business Consulting - Interactive Hologram */}
          <div
            className="ai-control-module scroll-fade-in stagger-3"
            onMouseEnter={() => setHoveredService(2)}
            onMouseLeave={() => setHoveredService(null)}
            onMouseMove={handleHeatmapMove}
          >
            <div className="control-module-surface">
              <div className="module-interface-zone">
                <div ref={heatmapRef} className="holographic-data-display">
                  <div className="data-grid-matrix">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div key={i} className="matrix-grid-line"></div>
                    ))}
                  </div>
                  
                  {heatmapPoints.map((point) => (
                    <div
                      key={point.id}
                      className="data-interaction-point"
                      style={{
                        left: `${point.x}%`,
                        top: `${point.y}%`
                      }}
                    />
                  ))}
                  
                  {graphPeaks.map((peak, index) => (
                    <div
                      key={index}
                      className="graph-peak-glow"
                      style={{
                        left: `${peak.x}%`,
                        top: `${peak.y}%`,
                        '--intensity': peak.intensity
                      } as React.CSSProperties}
                    />
                  ))}
                  
                  <div className="scanning-analysis-beam"></div>
                  
                  {hoveredService === 2 && (
                    <div className="live-analytics-overlay">
                      <div className="analytics-readout">ROI: +47%</div>
                      <div className="analytics-readout">Risk: Low</div>
                      <div className="analytics-readout">Growth: +89%</div>
                      <div className="analytics-readout">Forecast: ✓</div>
                    </div>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-heading font-light text-cosmic-gold mb-4 mt-8 module-header">
                Business Consulting
              </h3>
              
              <p className="text-cosmic-white/80 leading-relaxed mb-6">
                Using our expertise, we delve deep into your organization and consult you on how AI-driven automations could enhance your operations.
              </p>
            </div>
            <div className="module-magnetic-field"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
