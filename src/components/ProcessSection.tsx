
import { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ProcessSection = () => {
  useScrollReveal();
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [mouseGlobePos, setMouseGlobePos] = useState({ x: 0, y: 0 });
  const [globeClicked, setGlobeClicked] = useState(false);

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Let's dive into the bottlenecks and challenges your business currently faces and explore how AI automation can offer effective solutions.",
      tooltip: "🔍 Sonar scan initiated",
      fidgetType: "sonar"
    },
    {
      number: "02", 
      title: "Strategy",
      description: "We will develop a customized plan to integrate AI automation into your business, addressing the identified challenges and maximizing efficiency.",
      tooltip: "🧠 Neural pathways mapping",
      fidgetType: "neural"
    },
    {
      number: "03",
      title: "Implementation", 
      description: "In this phase, we will execute the AI automation plan, ensuring seamless integration into your existing processes.",
      tooltip: "⚡ Glass panel activated",
      fidgetType: "warp"
    },
    {
      number: "04",
      title: "Test & Optimize",
      description: "We either approve or request revisions - we're dedicated to refining our builds until you're fully satisfied.",
      tooltip: "📊 Pulse graphs active",
      fidgetType: "pulse"
    },
    {
      number: "05",
      title: "Become an Industry Leader",
      description: "Continue requesting as many workflow automations and AI applications as you wish, and transform your organization into a formidable industry leader.",
      tooltip: "🌍 Global command online",
      fidgetType: "globe"
    }
  ];

  const handleGlobeMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseGlobePos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.15,
      y: (e.clientY - rect.top - rect.height / 2) * 0.15
    });
  };

  const handleGlobeClick = () => {
    setGlobeClicked(!globeClicked);
  };

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 text-cosmic-white scroll-fade-in galaxy-header-reveal">
            Our Process
          </h2>
          <p className="text-xl text-cosmic-white/80 font-light scroll-fade-in stagger-1">
            Ready to transform your business? Here's how we make it happen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`holographic-command-module scroll-fade-in stagger-${index + 1}`}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              onMouseMove={index === 4 ? handleGlobeMouseMove : undefined}
              onClick={index === 4 ? handleGlobeClick : undefined}
            >
              <div className="command-module-core">
                <div className="module-number-display">{step.number}</div>
                
                <div className={`fidget-interaction-zone ${hoveredStep === index ? 'zone-activated' : ''}`}>
                  {step.fidgetType === 'sonar' && (
                    <div className="sonar-scanner-module">
                      <div className="sonar-wave-1"></div>
                      <div className="sonar-wave-2"></div>
                      <div className="sonar-wave-3"></div>
                      <div className="scanner-dot"></div>
                    </div>
                  )}
                  
                  {step.fidgetType === 'neural' && (
                    <div className="neural-flow-module">
                      <div className="neural-bar neural-bar-1"></div>
                      <div className="neural-bar neural-bar-2"></div>
                      <div className="neural-bar neural-bar-3"></div>
                      <div className="synaptic-spark synaptic-spark-1"></div>
                      <div className="synaptic-spark synaptic-spark-2"></div>
                    </div>
                  )}
                  
                  {step.fidgetType === 'warp' && (
                    <div className="glass-warp-module">
                      <div className="warp-surface"></div>
                      <div className="touch-ripple"></div>
                      <div className="energy-field-lines"></div>
                    </div>
                  )}
                  
                  {step.fidgetType === 'pulse' && (
                    <div className="pulse-graph-module">
                      <div className="graph-line graph-line-1"></div>
                      <div className="graph-line graph-line-2"></div>
                      <div className="graph-line graph-line-3"></div>
                      <div className="pulse-indicator pulse-indicator-1"></div>
                      <div className="pulse-indicator pulse-indicator-2"></div>
                    </div>
                  )}
                  
                  {step.fidgetType === 'globe' && (
                    <div 
                      className={`interactive-command-globe ${globeClicked ? 'globe-spinning' : ''}`}
                      style={{
                        transform: `rotateX(${mouseGlobePos.y}deg) rotateY(${mouseGlobePos.x}deg)`
                      }}
                    >
                      <div className="globe-wireframe-tactical"></div>
                      <div className="orbital-ring orbital-ring-1"></div>
                      <div className="orbital-ring orbital-ring-2"></div>
                      <div className="orbital-ring orbital-ring-3"></div>
                      <div className="globe-pulse-core"></div>
                      <div className="command-aura"></div>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-heading font-light text-cosmic-gold mb-4 module-title">
                  {step.title}
                </h3>
                
                <p className="text-cosmic-white/80 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Enhanced Whisper Tooltip */}
                {hoveredStep === index && (
                  <div className="holographic-tooltip">
                    <div className="tooltip-glow"></div>
                    <div className="tooltip-text">{step.tooltip}</div>
                  </div>
                )}
              </div>
              
              {/* Energy Field Effect */}
              <div className={`module-energy-field ${hoveredStep === index ? 'field-active' : ''}`}></div>
              
              {/* Materialization Effect */}
              <div className="materialization-shimmer"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
