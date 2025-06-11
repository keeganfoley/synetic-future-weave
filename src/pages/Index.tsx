
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
      
      {/* Minimalist Footer */}
      <footer className="relative z-10 py-16 px-8 border-t border-cosmic-gold/30 glass-nav-enhanced">
        <div className="panning-nebula-footer"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-3">
            <h3 className="text-2xl font-heading font-light text-cosmic-gold text-glow-subtle">
              SyneticAI
            </h3>
            
            <p className="text-lg text-cosmic-white/80 font-light tracking-wide">
              Automation Without Friction
            </p>
            
            <div className="py-2">
              <a 
                href="mailto:team@syneticai.com" 
                className="text-cosmic-gold hover:text-cosmic-white transition-colors duration-500 text-lg font-medium tracking-wider text-glow-subtle hover:text-glow-premium email-link-interactive"
              >
                team@syneticai.com
              </a>
            </div>
            
            <p className="text-cosmic-white/50 text-sm tracking-wider pt-4">
              © 2025 SyneticAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
