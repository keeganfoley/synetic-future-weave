
import { useRef } from 'react';
import OptimizedBackground from '../components/OptimizedBackground';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import MainSections from '../components/MainSections';
import { SectionRefsProvider } from '@/context/SectionRefsContext';
import { SectionRefs } from '@/types/section.types';

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const purposeRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const newsletterRef = useRef<HTMLElement>(null);

  const sectionRefs: SectionRefs = {
    hero: heroRef,
    purpose: purposeRef,
    process: processRef,
    contact: contactRef,
    newsletter: newsletterRef,
  };

  return (
    <div className="relative min-h-screen">
      {/* Optimized Background */}
      <OptimizedBackground />
      
      <SectionRefsProvider refs={sectionRefs}>
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main>
          <HeroSection />
          <MainSections 
            refs={{
              purpose: purposeRef,
              process: processRef,
              contact: contactRef,
              newsletter: newsletterRef,
            }}
          />
        </main>
      </SectionRefsProvider>
      
      {/* Enhanced Minimalist Footer */}
      <footer className="relative z-10 py-20 px-8 border-t border-cosmic-gold/30 glass-nav">
        {/* Star Dust Animation */}
        <div className="footer-stardust"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="section-divider mb-1"></div>
          
          <div className="space-y-0">
            {/* Logo with animation and subtle oval glimmer effect */}
            <div className="relative inline-block">
              {/* Subtle oval glimmer background */}
              <div className="absolute inset-0 w-full h-3/4 top-1/8 rounded-full bg-gradient-to-r from-transparent via-cosmic-gold/10 to-transparent blur-2xl animate-pulse-subtle opacity-40 transform scale-x-150"></div>
              <div className="absolute inset-0 w-full h-2/3 top-1/6 rounded-full bg-cosmic-gold/5 animate-gentle-float blur-3xl transform scale-x-125"></div>
              
              <img 
                src="/lovable-uploads/861140cd-aa95-4467-9a29-edc6c270f44c.png" 
                alt="SyneticAI Logo" 
                className="relative h-64 w-auto mx-auto opacity-90 hover:opacity-100 transition-all duration-500 z-10 object-cover"
              />
            </div>
            
            <p className="text-lg text-cosmic-white/80 font-light tracking-wide">
              Real Automations. Real ROI
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:team@syneticai.com" 
                className="text-cosmic-gold hover:text-cosmic-white transition-colors duration-500 text-lg font-medium tracking-wider text-glow-subtle hover:text-glow-premium inline-block email-glow-hover"
              >
                team@syneticai.com
              </a>
            </div>
            
            <p className="text-cosmic-white/50 text-sm tracking-wider pt-8">
              © 2025 SyneticAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
