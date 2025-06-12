
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
      icon: "discovery",
      uniqueEffect: "sonar-wave"
    },
    {
      number: "02", 
      title: "Strategy",
      description: "We will develop a customized plan to integrate AI automation into your business, addressing the identified challenges and maximizing efficiency.",
      hoverText: "Adaptive pathways forming. Optimal route mapped.",
      icon: "strategy",
      uniqueEffect: "blueprint-grid"
    },
    {
      number: "03",
      title: "Implementation", 
      description: "In this phase, we will execute the AI automation plan, ensuring seamless integration into your existing processes.",
      hoverText: "System core aligned. Execution in progress.",
      icon: "implementation",
      uniqueEffect: "wire-connection"
    },
    {
      number: "04",
      title: "Test & Optimize",
      description: "We either approve or request revisions - we're dedicated to refining our builds until you're fully satisfied.",
      hoverText: "Diagnostic cycle initiated. Refinement underway.",
      icon: "optimize",
      uniqueEffect: "data-bars"
    },
    {
      number: "05",
      title: "Become an Industry Leader",
      description: "Continue requesting as many workflow automations and AI applications as you wish, and transform your organization into a formidable industry leader.",
      hoverText: "Dominance Protocol Engaged.",
      icon: "leader",
      uniqueEffect: "constellation-map"
    }
  ];

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 galaxy-unified-background"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 text-cosmic-white scroll-fade-in galaxy-section-header">
            Our Process
          </h2>
          <div className="galaxy-divider-enhanced scroll-fade-in stagger-1"></div>
          <p className="text-xl text-cosmic-white/80 font-light scroll-fade-in stagger-2 mt-6">
            Ready to transform your business? Here's how we make it happen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`galaxy-process-enhanced scroll-fade-in stagger-${index + 1} ${
                hoveredStep === index ? 'module-activated' : ''
              } ${activatedStep === index ? 'module-engaged' : ''}`}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => setActivatedStep(activatedStep === index ? null : index)}
            >
              <div className="module-surface-enhanced">
                <div className="module-number-enhanced">{step.number}</div>
                
                <div className="module-icon-enhanced">
                  <div className={`process-icon-unique icon-${step.icon}`}>
                    <div className="icon-core-enhanced"></div>
                    <div className="icon-orbits-enhanced"></div>
                    <div className={`unique-effect effect-${step.uniqueEffect}`}></div>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-light text-cosmic-gold mb-3 module-title-enhanced">
                  {step.title}
                </h3>
                
                <p className="text-cosmic-white/80 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Enhanced Hover Reveal */}
                <div className={`galaxy-hover-enhanced ${hoveredStep === index ? 'visible' : ''}`}>
                  <div className="hover-text-enhanced">{step.hoverText}</div>
                </div>

                {/* Activation State */}
                {activatedStep === index && (
                  <div className="module-activation-enhanced">
                    <div className="activation-pulse"></div>
                    <p className="text-cosmic-gold/90 text-xs font-medium">
                      MODULE ONLINE
                    </p>
                  </div>
                )}
              </div>
              
              <div className="module-energy-enhanced"></div>
              <div className="module-hologram-ring"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
