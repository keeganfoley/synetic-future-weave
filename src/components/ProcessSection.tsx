
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { InteractiveGlobeModal } from './SmartWidgets';

const ProcessSection = () => {
  useScrollReveal();
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [globeModalOpen, setGlobeModalOpen] = useState(false);

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Let's dive into the bottlenecks and challenges your business currently faces and explore how AI automation can offer effective solutions.",
      preview: "Deep analysis of workflows • Identify automation opportunities",
      fidgetType: "sonar"
    },
    {
      number: "02", 
      title: "Strategy",
      description: "We will develop a customized plan to integrate AI automation into your business, addressing the identified challenges and maximizing efficiency.",
      preview: "Custom automation roadmap • Resource optimization plan",
      fidgetType: "neural"
    },
    {
      number: "03",
      title: "Implementation", 
      description: "In this phase, we will execute the AI automation plan, ensuring seamless integration into your existing processes.",
      preview: "Live deployment • Real-time integration • Testing protocols",
      fidgetType: "warp"
    },
    {
      number: "04",
      title: "Test & Optimize",
      description: "We either approve or request revisions - we're dedicated to refining our builds until you're fully satisfied.",
      preview: "Performance monitoring • Continuous improvement • Quality assurance",
      fidgetType: "pulse"
    },
    {
      number: "05",
      title: "Become an Industry Leader",
      description: "Continue requesting as many workflow automations and AI applications as you wish, and transform your organization into a formidable industry leader.",
      preview: "Scale globally • Market dominance • Competitive advantage",
      fidgetType: "globe"
    }
  ];

  const handleStepClick = (index: number) => {
    if (index === 4) {
      setGlobeModalOpen(true);
    } else {
      setExpandedStep(expandedStep === index ? null : index);
    }
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
              className={`process-card-interactive scroll-fade-in stagger-${index + 1} ${expandedStep === index ? 'card-expanded' : ''}`}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => handleStepClick(index)}
            >
              <div className="card-core-interactive">
                <div className="card-number-glow">{step.number}</div>
                
                <div className={`fidget-zone-optimized ${hoveredStep === index ? 'zone-active' : ''}`}>
                  {step.fidgetType === 'sonar' && (
                    <div className="sonar-optimized">
                      <div className="sonar-pulse"></div>
                      <div className="sonar-center"></div>
                    </div>
                  )}
                  
                  {step.fidgetType === 'neural' && (
                    <div className="neural-optimized">
                      <div className="neural-bar neural-1"></div>
                      <div className="neural-bar neural-2"></div>
                      <div className="neural-bar neural-3"></div>
                    </div>
                  )}
                  
                  {step.fidgetType === 'warp' && (
                    <div className="warp-optimized">
                      <div className="warp-surface-smooth"></div>
                    </div>
                  )}
                  
                  {step.fidgetType === 'pulse' && (
                    <div className="pulse-optimized">
                      <div className="pulse-bar pulse-1"></div>
                      <div className="pulse-bar pulse-2"></div>
                      <div className="pulse-bar pulse-3"></div>
                    </div>
                  )}
                  
                  {step.fidgetType === 'globe' && (
                    <div className="globe-interactive-optimized">
                      <div className="globe-core"></div>
                      <div className="globe-ring globe-ring-1"></div>
                      <div className="globe-ring globe-ring-2"></div>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-heading font-light text-cosmic-gold mb-4 card-title-glow">
                  {step.title}
                </h3>
                
                <p className="text-cosmic-white/80 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {expandedStep === index && (
                  <div className="card-preview-expanded">
                    <div className="preview-content">
                      {step.preview}
                    </div>
                  </div>
                )}
              </div>
              
              <div className={`card-energy-field ${hoveredStep === index ? 'field-active' : ''}`}></div>
            </div>
          ))}
        </div>
      </div>

      <InteractiveGlobeModal 
        isOpen={globeModalOpen} 
        onClose={() => setGlobeModalOpen(false)} 
      />
    </section>
  );
};

export default ProcessSection;
