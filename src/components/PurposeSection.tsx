import { FC, memo, forwardRef } from 'react';
import SectionHeader from './ui/SectionHeader';
import { SectionProps } from '@/types/section.types';

const PurposeSection = forwardRef<HTMLElement, SectionProps>(({ className }, ref) => {
  return (
    <section ref={ref} id="purpose" className={`py-40 relative overflow-hidden ${className || ''}`}>
      <div className="max-w-6xl mx-auto px-8 text-center">
        <div className="section-divider mb-16"></div>

        <SectionHeader 
          title="Our Purpose" 
          titleClassName="mb-12"
        />
        
        <div className="space-y-12 scroll-fade-in stagger-1">
          <p className="text-xl text-cosmic-white/90 font-light tracking-wide md:text-3xl" style={{ lineHeight: '1.8' }}>We build automation that saves time and multiplies output.</p>
          <p className="text-xl text-cosmic-gold/90 font-light tracking-wide text-glow-subtle md:text-3xl" style={{ lineHeight: '1.8' }}>Efficiency in. Revenue out.</p>
        </div>
      </div>
    </section>
  );
});

PurposeSection.displayName = 'PurposeSection';

export default memo(PurposeSection);