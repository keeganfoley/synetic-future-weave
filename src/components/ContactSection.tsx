import { FC, memo, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CTAButton from './CTAButton';
import SectionHeader from './ui/SectionHeader';
import { SectionProps } from '@/types/section.types';

const ContactSection = forwardRef<HTMLElement, SectionProps>(({ className }, ref) => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <section ref={ref} id="contact" className={`py-40 relative overflow-hidden ${className || ''}`}>
      {/* Light Trails Background */}
      <div className="light-trails-bg"></div>
      
      <div className="max-w-4xl mx-auto px-8 text-center">
        <SectionHeader 
          title="Work Less. Earn More."
          titleClassName="text-4xl md:text-5xl mb-8 typing-blink-animation"
          animated={false}
        />
        
        <div className="space-y-6 mb-12 scroll-fade-in stagger-1">
          <p className="text-cosmic-white/90 leading-relaxed font-light tracking-wide text-2xl">Let's talk. You'll leave with time and money back.</p>
          <p className="text-lg text-cosmic-gold/90 leading-relaxed font-light tracking-wide text-glow-subtle">
            Let's explore the possibilities.
          </p>
        </div>

        <div className="scroll-fade-in stagger-2">
          <CTAButton 
            onClick={handleGetStarted}
            icon={
              <svg className="ml-4 w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            }
          >
            Get Started
          </CTAButton>
        </div>

        <div className="mt-12 space-y-2 scroll-fade-in stagger-3">
          <p className="text-cosmic-white/60 text-sm tracking-wider">
            Free consultation within 24 hours
          </p>
          <a href="mailto:team@syneticai.com" className="text-cosmic-gold hover:text-cosmic-white transition-colors duration-500 text-lg font-medium tracking-wider text-glow-subtle hover:text-glow-premium block email-glow-hover">
            team@syneticai.com
          </a>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';

export default memo(ContactSection);