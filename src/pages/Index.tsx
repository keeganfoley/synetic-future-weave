
import GalacticBackground from '../components/GalacticBackground';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import MainSections from '../components/MainSections';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Galactic Background */}
      <GalacticBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <MainSections />
      </main>
      
      {/* Enhanced Minimalist Footer */}
      <footer className="relative z-10 py-20 px-8 border-t border-cosmic-gold/30 glass-nav">
        {/* Star Dust Animation */}
        <div className="footer-stardust"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="section-divider mb-16"></div>
          
          <div className="space-y-8">
            <h3 className="text-3xl font-heading font-light text-cosmic-gold text-glow-subtle">
              SyneticAI
            </h3>
            
            <p className="text-lg text-cosmic-white/80 font-light tracking-wide">
              Automation Without Friction
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
