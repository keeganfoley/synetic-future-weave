
import { useRef, useCallback } from 'react';
import OptimizedBackground from '../components/OptimizedBackground';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import VideoHero from '../components/VideoHero';
import MainSections from '../components/MainSections';
import { SectionRefsProvider } from '@/context/SectionRefsContext';
import { SectionRefs } from '@/types/section.types';

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const purposeRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const caseStudiesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const newsletterRef = useRef<HTMLElement>(null);
  const newsletterArchiveRef = useRef<HTMLElement>(null);

  const sectionRefs: SectionRefs = {
    hero: heroRef,
    purpose: purposeRef,
    process: processRef,
    caseStudies: caseStudiesRef,
    contact: contactRef,
    newsletter: newsletterRef,
    newsletterArchive: newsletterArchiveRef,
  };

  const scrollToHero = useCallback(() => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Optimized Background */}
      <OptimizedBackground />
      
      {/* Video Hero - Outside of sections provider for full screen effect */}
      <VideoHero 
        videoSrc="/Animation 02.mp4"
        posterImage="/lovable-uploads/861140cd-aa95-4467-9a29-edc6c270f44c.png"
        onScrollToContent={scrollToHero}
      />
      
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
              caseStudies: caseStudiesRef,
              contact: contactRef,
              newsletter: newsletterRef,
              newsletterArchive: newsletterArchiveRef,
            }}
          />
        </main>
      </SectionRefsProvider>
      
      {/* Luxury Glass Footer */}
      <footer className="relative z-10 overflow-hidden">
        {/* Metallic Border Top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cosmic-gold/50 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cosmic-white/20 to-transparent animate-shimmer-slow"></div>
        
        {/* Glass Morphism Background */}
        <div className="relative py-20 px-8 backdrop-blur-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-cosmic-black/40 via-cosmic-black/60 to-cosmic-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cosmic-gold/5 via-transparent to-cosmic-gold/5"></div>
          
          {/* Star Dust Animation */}
          <div className="footer-stardust"></div>
          
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="section-divider mb-12"></div>
            
            <div className="space-y-8">
              {/* Logo with Enhanced Luxury Glow */}
              <div className="relative inline-block group">
                {/* Multi-layer Glow Effect */}
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 rounded-full bg-gradient-to-r from-transparent via-cosmic-gold/20 to-transparent blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-1000"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 rounded-full bg-cosmic-gold/10 blur-2xl opacity-30 animate-pulse-subtle"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 rounded-full bg-cosmic-white/5 blur-xl animate-gentle-float"></div>
                </div>
                
                <img 
                  src="/lovable-uploads/861140cd-aa95-4467-9a29-edc6c270f44c.png" 
                  alt="SyneticAI Logo" 
                  className="relative h-64 w-auto mx-auto opacity-90 hover:opacity-100 transition-all duration-700 z-10 object-cover filter hover:brightness-110 hover:contrast-110"
                />
              </div>
              
              <p className="text-lg text-cosmic-white/80 font-light tracking-wide luxury-text-glow">
                Real Automations. Real ROI
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:team@syneticai.com" 
                  className="relative inline-block text-cosmic-gold hover:text-cosmic-white transition-all duration-500 text-lg font-medium tracking-wider group"
                >
                  <span className="relative z-10 luxury-text-glow">team@syneticai.com</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cosmic-gold/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                </a>
              </div>
              
              <div className="pt-8 border-t border-cosmic-gold/10">
                <p className="text-cosmic-white/50 text-sm tracking-wider">
                  © 2025 SyneticAI. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
