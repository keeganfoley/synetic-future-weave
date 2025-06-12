
import { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ProcessSection = () => {
  useScrollReveal();
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Let's dive into the bottlenecks and challenges your business currently faces and explore how AI automation can offer effective solutions.",
      hoverText: "Neural scan initialized... Bottlenecks detected.",
      icon: "scanner"
    },
    {
      number: "02", 
      title: "Strategy",
      description: "We will develop a customized plan to integrate AI automation into your business, addressing the identified challenges and maximizing efficiency.",
      hoverText: "Adaptive pathways forming. Optimal route mapped.",
      icon: "pathways"
    },
    {
      number: "03",
      title: "Implementation", 
      description: "In this phase, we will execute the AI automation plan, ensuring seamless integration into your existing processes.",
      hoverText: "System core aligned. Execution in progress.",
      icon: "core"
    },
    {
      number: "04",
      title: "Test & Optimize",
      description: "We either approve or request revisions - we're dedicated to refining our builds until you're fully satisfied.",
      hoverText: "Diagnostic cycle initiated. Refinement underway.",
      icon: "diagnostic"
    },
    {
      number: "05",
      title: "Become an Industry Leader",
      description: "Continue requesting as many workflow automations and AI applications as you wish, and transform your organization into a formidable industry leader.",
      hoverText: "Dominance Protocol Engaged.",
      icon: "dominance"
    }
  ];

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 text-cosmic-white scroll-fade-in galaxy-section-header">
            Our Process
          </h2>
          <div className="galaxy-divider-line scroll-fade-in stagger-1"></div>
          <p className="text-xl text-cosmic-white/80 font-light scroll-fade-in stagger-2 mt-6">
            Ready to transform your business? Here's how we make it happen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`galaxy-process-module scroll-fade-in stagger-${index + 1} ${
                hoveredStep === index ? 'module-activated' : ''
              }`}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => setExpandedStep(expandedStep === index ? null : index)}
            >
              <div className="module-surface">
                <div className="module-number-beacon">{step.number}</div>
                
                <div className="module-icon-container">
                  <div className={`process-icon icon-${step.icon}`}>
                    <div className="icon-core"></div>
                    <div className="icon-orbits"></div>
                    <div className="icon-particles"></div>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-light text-cosmic-gold mb-3 module-title-text">
                  {step.title}
                </h3>
                
                <p className="text-cosmic-white/80 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Hover State Text */}
                {hoveredStep === index && (
                  <div className="galaxy-hover-reveal">
                    <div className="hover-text-glow">{step.hoverText}</div>
                  </div>
                )}

                {/* Expanded State */}
                {expandedStep === index && (
                  <div className="expanded-details">
                    <div className="detail-pulse"></div>
                    <p className="text-cosmic-gold/90 text-xs">
                      Click to activate module diagnostics...
                    </p>
                  </div>
                )}
              </div>
              
              <div className="module-energy-field"></div>
              <div className="module-activation-ring"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
