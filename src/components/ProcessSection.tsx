
import { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ProcessSection = () => {
  useScrollReveal();
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Let's dive into the bottlenecks and challenges your business currently faces and explore how AI automation can offer effective solutions.",
      icon: "🔍"
    },
    {
      number: "02", 
      title: "Strategy",
      description: "We will develop a customized plan to integrate AI automation into your business, addressing the identified challenges and maximizing efficiency.",
      icon: "📊"
    },
    {
      number: "03",
      title: "Implementation", 
      description: "In this phase, we will execute the AI automation plan, ensuring seamless integration into your existing processes.",
      icon: "⚙️"
    },
    {
      number: "04",
      title: "Test & Optimize",
      description: "We either approve or request revisions - we're dedicated to refining our builds until you're fully satisfied.",
      icon: "🧪"
    },
    {
      number: "05",
      title: "Become an Industry Leader",
      description: "Continue requesting as many workflow automations and AI applications as you wish, and transform your organization into a formidable industry leader.",
      icon: "🌟"
    }
  ];

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 text-cosmic-white scroll-fade-in typing-animation">
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
              className={`process-card scroll-fade-in stagger-${index + 1}`}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="process-card-inner">
                <div className="process-number">{step.number}</div>
                
                <div className={`process-icon ${hoveredStep === index ? 'process-icon-hover' : ''}`}>
                  {index === 0 && <div className="discovery-ripple"></div>}
                  {index === 1 && (
                    <div className="strategy-bars">
                      <div className="strategy-bar bar-1"></div>
                      <div className="strategy-bar bar-2"></div>
                    </div>
                  )}
                  {index === 2 && <div className="implementation-glow"></div>}
                  {index === 3 && (
                    <div className="test-bars">
                      <div className="test-bar"></div>
                      <div className="test-bar"></div>
                      <div className="test-bar"></div>
                    </div>
                  )}
                  {index === 4 && <div className="rotating-globe"></div>}
                </div>

                <h3 className="text-xl font-heading font-light text-cosmic-gold mb-4">
                  {step.title}
                </h3>
                
                <p className="text-cosmic-white/80 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
