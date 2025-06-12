
import { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ProcessSection = () => {
  useScrollReveal();
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [activatedStep, setActivatedStep] = useState<number | null>(null);

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Let's dive into the bottlenecks and challenges your business currently faces and explore how AI automation can offer effective solutions.",
      hoverText: "Neural scan initialized... Bottlenecks detected.",
      dashboardEffect: "sonar-pulse",
      hologramType: "orbital-rings"
    },
    {
      number: "02", 
      title: "Strategy",
      description: "We will develop a customized plan to integrate AI automation into your business, addressing the identified challenges and maximizing efficiency.",
      hoverText: "Adaptive pathways forming. Optimal route mapped.",
      dashboardEffect: "blueprint-animation",
      hologramType: "blueprint-lines"
    },
    {
      number: "03",
      title: "Implementation", 
      description: "In this phase, we will execute the AI automation plan, ensuring seamless integration into your existing processes.",
      hoverText: "System core aligned. Execution in progress.",
      dashboardEffect: "circuit-connection",
      hologramType: "data-beams"
    },
    {
      number: "04",
      title: "Test & Optimize",
      description: "We either approve or request revisions - we're dedicated to refining our builds until you're fully satisfied.",
      hoverText: "Diagnostic cycle initiated. Refinement underway.",
      dashboardEffect: "dynamic-graphs",
      hologramType: "bar-graphs"
    },
    {
      number: "05",
      title: "Become an Industry Leader",
      description: "Continue requesting as many workflow automations and AI applications as you wish, and transform your organization into a formidable industry leader.",
      hoverText: "Dominance Protocol Engaged.",
      dashboardEffect: "constellation-crown",
      hologramType: "floating-constellation"
    }
  ];

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 control-room-background"></div>
      
      {/* Section Pulsating Beacon */}
      <div className="section-beacon-container">
        <div className="pulsating-beacon"></div>
        <div className="beacon-rings"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 text-cosmic-white scroll-fade-in control-room-section-header">
            Our Process
          </h2>
          <div className="control-room-divider scroll-fade-in stagger-1"></div>
          <p className="text-xl text-cosmic-white/80 font-light scroll-fade-in stagger-2 mt-6">
            Command center protocols for transforming your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`control-room-dashboard scroll-fade-in stagger-${index + 1} ${
                hoveredStep === index ? 'dashboard-activated' : ''
              } ${activatedStep === index ? 'dashboard-engaged' : ''}`}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => setActivatedStep(activatedStep === index ? null : index)}
            >
              <div className="dashboard-panel">
                <div className="dashboard-header">
                  <div className="panel-number-beacon">{step.number}</div>
                  <div className="status-indicators">
                    <div className="status-light active"></div>
                    <div className="status-light standby"></div>
                    <div className="status-light offline"></div>
                  </div>
                </div>
                
                <div className="holographic-display">
                  <div className={`hologram-container hologram-${step.hologramType}`}>
                    <div className="hologram-core"></div>
                    <div className={`dashboard-effect effect-${step.dashboardEffect}`}></div>
                    <div className="particle-overlay"></div>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-light text-cosmic-gold mb-3 dashboard-title">
                  {step.title}
                </h3>
                
                <p className="text-cosmic-white/80 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Enhanced Hover Interface */}
                <div className={`dashboard-hover-interface ${hoveredStep === index ? 'interface-visible' : ''}`}>
                  <div className="hover-text-transmission">{step.hoverText}</div>
                  <div className="interface-scan-line"></div>
                </div>

                {/* Activation State */}
                {activatedStep === index && (
                  <div className="dashboard-activation-sequence">
                    <div className="activation-energy-wave"></div>
                    <p className="text-cosmic-gold/90 text-xs font-medium activation-text">
                      DASHBOARD ONLINE
                    </p>
                  </div>
                )}
              </div>
              
              <div className="dashboard-energy-field"></div>
              <div className="holographic-border-ring"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
