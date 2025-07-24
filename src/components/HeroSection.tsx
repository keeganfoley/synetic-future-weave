import { useEffect, useState, memo, useCallback } from 'react';
import CTAButton from './CTAButton';
import { useSectionRefs } from '@/context/SectionRefsContext';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = memo<HeroSectionProps>(({ className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToSection } = useSectionRefs();
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);
  
  const scrollToNextSection = useCallback(() => {
    scrollToSection('purpose');
  }, [scrollToSection]);
  return <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${className || ''}`}>
      {/* Static background - no animations */}
      <div className="absolute inset-0 bg-cosmic-black" />
      
      {/* Hero Content */}
      <div className={`text-center z-10 px-4 md:px-8 transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h1 className="font-heading font-light mb-8 md:mb-12 leading-[0.8] tracking-tight">
          <span className="block text-3xl md:text-5xl mb-6 md:mb-8 luxury-text-shimmer lg:text-5xl">
            <span className="luxury-text-gradient-gold">Drive more revenue.</span>
            <span className="luxury-text-gradient-gold ml-4">Cut costly tasks.</span>
          </span>
          <span className="block text-2xl md:text-4xl mb-8 md:mb-12 luxury-text-shimmer-delayed lg:text-7xl">
            <span className="luxury-text-gradient-white">Scale with AI.</span>
          </span>
          <div className="hero-beam-underline-luxury"></div>
        </h1>
        
        <div className={`space-y-4 md:space-y-6 transition-all duration-1500 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg md:text-xl text-cosmic-white/90 leading-relaxed font-light tracking-wide luxury-subtext-fade mx-0 lg:text-4xl">
            Automation built for business growth.
          </p>
          <p className="text-lg md:text-xl leading-relaxed font-light tracking-wide luxury-subtext-fade-delayed lg:text-2xl">
            <span className="text-cosmic-gold/90 luxury-text-glow">Faster execution.</span>
            <span className="text-cosmic-gold/80 luxury-text-glow ml-3">Smarter workflows.</span>
            <span className="text-cosmic-gold/90 luxury-text-glow ml-3">Higher ROI.</span>
          </p>
        </div>

        <div className={`mt-12 md:mt-20 transition-all duration-1500 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative inline-block">
            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-cosmic-gold/20 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <CTAButton 
              onClick={scrollToNextSection} 
              variant="hero"
              size="lg"
              className="text-lg md:text-xl luxury-cta-button relative group"
            >
              <span className="relative z-10">Explore Solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cosmic-gold/0 via-cosmic-gold/20 to-cosmic-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;