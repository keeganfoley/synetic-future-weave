
import { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ProcessSection = () => {
  useScrollReveal();
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [mouseGlobePos, setMouseGlobePos] = useState({ x: 0, y: 0 });

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Let's dive into the bottlenecks and challenges your business currently faces and explore how AI automation can offer effective solutions.",
      tooltip: "Neural pattern recognized"
    },
    {
      number: "02", 
      title: "Strategy",
      description: "We will develop a customized plan to integrate AI automation into your business, addressing the identified challenges and maximizing efficiency.",
      tooltip: "Strategic matrix active"
    },
    {
      number: "03",
      title: "Implementation", 
      description: "In this phase, we will execute the AI automation plan, ensuring seamless integration into your existing processes.",
      tooltip: "System deployment initiated"
    },
    {
      number: "04",
      title: "Test & Optimize",
      description: "We either approve or request revisions - we're dedicated to refining our builds until you're fully satisfied.",
      tooltip: "Predictive logic active"
    },
    {
      number: "05",
      title: "Become an Industry Leader",
      description: "Continue requesting as many workflow automations and AI applications as you wish, and transform your organization into a formidable industry leader.",
      tooltip: "Global command enabled"
    }
  ];

  const handleGlobeMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseGlobePos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.1,
      y: (e.clientY - rect.top - rect.height / 2) * 0.1
    });
  };

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 text-cosmic-white scroll-fade-in cinematic-header">
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
              className={`holographic-panel scroll-fade-in stagger-${index + 1}`}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              onMouseMove={index === 4 ? handleGlobeMouseMove : undefined}
            >
              <div className="holographic-panel-inner">
                <div className="process-number-hud">{step.number}</div>
                
                <div className={`process-icon-hud ${hoveredStep === index ? 'process-icon-active' : ''}`}>
                  {index === 0 && <div className="discovery-hologram"></div>}
                  {index === 1 && (
                    <div className="strategy-neural-grid">
                      <div className="neural-line neural-line-1"></div>
                      <div className="neural-line neural-line-2"></div>
                      <div className="neural-line neural-line-3"></div>
                    </div>
                  )}
                  {index === 2 && <div className="implementation-field"></div>}
                  {index === 3 && (
                    <div className="optimization-scanner">
                      <div className="scanner-spark scanner-spark-1"></div>
                      <div className="scanner-spark scanner-spark-2"></div>
                      <div className="scanner-spark scanner-spark-3"></div>
                      <div className="data-grid-lines"></div>
                    </div>
                  )}
                  {index === 4 && (
                    <div 
                      className="command-globe-3d"
                      style={{
                        transform: `rotateX(${mouseGlobePos.y}deg) rotateY(${mouseGlobePos.x}deg)`
                      }}
                    >
                      <div className="globe-wireframe-gold"></div>
                      <div className="globe-orbital-ring-1"></div>
                      <div className="globe-orbital-ring-2"></div>
                      <div className="globe-command-glow"></div>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-heading font-light text-cosmic-gold mb-4">
                  {step.title}
                </h3>
                
                <p className="text-cosmic-white/80 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Whisper Tooltip */}
                {hoveredStep === index && (
                  <div className="whisper-tooltip">
                    {step.tooltip}
                  </div>
                )}
              </div>
              
              {/* Glass Sheen Effect */}
              <div className={`glass-sheen ${hoveredStep === index ? 'glass-sheen-active' : ''}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
