import { FC, memo } from 'react';

const PurposeSection: FC = () => {
  return (
    <section id="purpose" className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <div className="section-divider mb-16"></div>

        <h2 className="text-4xl md:text-6xl font-heading font-light mb-12 text-cosmic-gold text-glow-premium scroll-fade-in typing-animation-enhanced">
          Our Purpose
        </h2>
        
        <div className="space-y-8 scroll-fade-in stagger-1">
          <p className="text-xl text-cosmic-white/90 leading-relaxed font-light tracking-wide md:text-3xl">We build automation that saves time and multiplies output.</p>
          <p className="text-xl text-cosmic-gold/90 leading-relaxed font-light tracking-wide text-glow-subtle md:text-3xl">Efficiency in. Revenue out.</p>
        </div>
      </div>
    </section>
  );
};

export default memo(PurposeSection);