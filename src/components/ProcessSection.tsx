
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ProcessSection = () => {
  useScrollReveal();
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Let's dive into the bottlenecks and challenges your business currently faces and explore how AI automation can offer effective solutions.",
      artifact: "planetary-scan",
      interaction: "grid-focus"
    },
    {
      number: "02", 
      title: "Strategy",
      description: "We will develop a customized plan to integrate AI automation into your business, addressing the identified challenges and maximizing efficiency.",
      artifact: "blueprint-schematic",
      interaction: "lines-draw"
    },
    {
      number: "03",
      title: "Implementation", 
      description: "In this phase, we will execute the AI automation plan, ensuring seamless integration into your existing processes.",
      artifact: "energy-cascade",
      interaction: "nodes-fire"
    },
    {
      number: "04",
      title: "Test & Optimize",
      description: "We either approve or request revisions - we're dedicated to refining our builds until you're fully satisfied.",
      artifact: "crystalline-structure",
      interaction: "facets-realign"
    },
    {
      number: "05",
      title: "Become an Industry Leader",
      description: "Continue requesting as many workflow automations and AI applications as you wish, and transform your organization into a formidable industry leader.",
      artifact: "leadership-crown",
      interaction: "crown-illuminate"
    }
  ];

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 galactic-background-refined"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 text-cosmic-white scroll-fade-in galactic-section-header">
            Our Process
          </h2>
          <div className="galactic-divider-refined scroll-fade-in stagger-1"></div>
          <p className="text-xl text-cosmic-white/80 font-light scroll-fade-in stagger-2 mt-6">
            Interactive command modules for business transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`interactive-process-module scroll-fade-in stagger-${index + 1} ${
                hoveredStep === index ? 'module-active' : ''
              }`}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="module-container">
                <div className="module-header-refined">
                  <div className="step-number-beacon">{step.number}</div>
                  <div className="status-array">
                    <div className="status-light active"></div>
                    <div className="status-light standby"></div>
                    <div className="status-light offline"></div>
                  </div>
                </div>
                
                <div className="artifact-display">
                  <div className={`interactive-artifact artifact-${step.artifact}`}>
                    <div className="artifact-core"></div>
                    <div className={`artifact-interaction interaction-${step.interaction} ${
                      hoveredStep === index ? 'active' : ''
                    }`}></div>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-light text-cosmic-gold mb-3 module-title-refined">
                  {step.title}
                </h3>
                
                <p className="text-cosmic-white/80 text-sm leading-relaxed module-description">
                  {step.description}
                </p>
              </div>
              
              <div className="module-energy-boundary"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
