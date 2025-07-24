import { useState, memo, forwardRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { BaseComponentProps, ProcessStep } from '@/types';
import { SectionProps } from '@/types/section.types';
import SectionHeader from './ui/SectionHeader';

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
  return <section ref={ref} id="process" className={`py-32 relative overflow-hidden ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-8">
        <SectionHeader 
          title="Our Process"
          subtitle="Ready to transform your business? Here's how we make it happen."
          titleClassName="text-cosmic-white"
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {processSteps.map((step, index) => <div key={step.number} className={`process-card-enhanced scroll-fade-in stagger-${index + 1}`}>
              <div className="process-card-inner-enhanced">
                <div className="process-number-enhanced">{step.number}</div>
                
                <div className="process-icon-enhanced">
                  {index === 0 && <div className="discovery-ripple-enhanced"></div>}
                  {index === 1 && <div className="strategy-lines-enhanced">
                      <div className="strategy-line line-1"></div>
                      <div className="strategy-line line-2"></div>
                      <div className="strategy-line line-3"></div>
                    </div>}
                  {index === 2 && <div className="implementation-warp"></div>}
                  {index === 3 && <div className="test-optimize-sparks">
                      <div className="spark spark-1"></div>
                      <div className="spark spark-2"></div>
                      <div className="spark spark-3"></div>
                      <div className="optimization-graph"></div>
                    </div>}
                  {index === 4 && <div className={`interactive-globe ${clickedGlobe ? 'globe-activated' : ''}`} onClick={() => setClickedGlobe(!clickedGlobe)}>
                      <div className="globe-wireframe"></div>
                      <div className="globe-orbit-1"></div>
                      <div className="globe-orbit-2"></div>
                    </div>}
                </div>

                <h3 className="text-xl font-heading font-light text-cosmic-gold mb-4">
                  {step.title}
                </h3>
                
                <p className="text-sm leading-relaxed mb-4 text-slate-300">
                  {step.description}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>
});

ProcessSection.displayName = 'ProcessSection';

export default ProcessSection;