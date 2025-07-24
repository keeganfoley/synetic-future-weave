import { useState, memo, forwardRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { BaseComponentProps, ProcessStep } from '@/types';
import { SectionProps } from '@/types/section.types';
import SectionHeader from './ui/SectionHeader';
import ProcessIcon from './ProcessIcon';

const ProcessSection = forwardRef<HTMLElement, SectionProps>(({ className }, ref) => {
  useScrollReveal();
  const [clickedGlobe, setClickedGlobe] = useState(false);
  const processSteps: ProcessStep[] = [{
    number: "01",
    title: "Discovery",
    description: "We uncover the hidden costs in your operations—where time, labor, and revenue are leaking—and identify automation with immediate ROI."
  }, {
    number: "02",
    title: "Strategy",
    description: "We map out a strategy to reduce costs, accelerate fulfillment, or increase customer retention using AI."
  }, {
    number: "03",
    title: "Implementation",
    description: "We deploy your custom automation solutions with seamless integration and minimal disruption to your operations."
  }, {
    number: "04",
    title: "Test & Optimize",
    description: "We test for impact—then fine-tune to ensure measurable improvements in speed, cost, or output."
  }, {
    number: "05",
    title: "Become an Industry Leader",
    description: "With ongoing AI improvements and support, you stay ahead of the curve while your competitors stay stuck."
  }];
  return <section ref={ref} id="process" className={`py-40 relative overflow-hidden ${className || ''}`}>
      {/* Luxury background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-black via-cosmic-charcoal/50 to-cosmic-black opacity-50" />
      
      <div className="max-w-7xl mx-auto px-8 relative">
        <SectionHeader 
          title="Our Process"
          subtitle="Ready to transform your business? Here's how we make it happen."
          titleClassName="text-cosmic-white"
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-8">
          {processSteps.map((step, index) => <div key={step.number} className={`process-card-luxury scroll-fade-in stagger-${index + 1} group`}>
              {/* Metallic border gradient */}
              <div className="process-card-border" />
              
              {/* Glass morphism card */}
              <div className="process-card-inner-luxury">
                {/* Premium number with metallic accent */}
                <div className="process-number-luxury">
                  <span className="process-number-text">{step.number}</span>
                  <div className="process-number-glow" />
                </div>
                
                {/* Tech visualization icon */}
                <ProcessIcon 
                  type={index === 0 ? 'discovery' : 
                        index === 1 ? 'strategy' : 
                        index === 2 ? 'implementation' : 
                        index === 3 ? 'test' : 'leadership'} 
                  index={index} 
                />

                {/* Title with luxury styling */}
                <h3 className="process-title-luxury">
                  {step.title}
                </h3>
                
                {/* Description with premium text effect */}
                <p className="process-description-luxury">
                  {step.description}
                </p>
                
                {/* Hover accent line */}
                <div className="process-accent-line" />
              </div>
              
              {/* Hover glow effect */}
              <div className="process-hover-glow" />
            </div>)}
        </div>
      </div>
    </section>
});

ProcessSection.displayName = 'ProcessSection';

export default ProcessSection;