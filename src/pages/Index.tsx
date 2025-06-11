
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
      
      {/* Premium Footer */}
      <footer className="relative z-10 py-20 px-8 border-t border-cosmic-gold/20 glass-nav">
        <div className="max-w-4xl mx-auto text-center">
          <div className="section-divider mb-16"></div>
          
          <div className="space-y-6">
            <div className="footer-brand">
              <h3 className="text-2xl font-heading font-light text-cosmic-gold text-glow-subtle mb-2">
                SyneticAI
              </h3>
              <p className="text-lg text-cosmic-white/80 font-light tracking-wide">
                Automation Without Friction
              </p>
            </div>
            
            <div className="footer-contact">
              <a 
                href="mailto:team@syneticai.com" 
                className="premium-email-link text-xl font-medium tracking-wider inline-block mb-4"
              >
                team@syneticai.com
              </a>
            </div>
            
            <div className="footer-copyright">
              <p className="text-cosmic-white/40 text-sm tracking-wider">
                © 2025 SyneticAI. All rights reserved.
              </p>
            </div>
          </div>
          
          {/* Subtle stardust animation in footer */}
          <div className="footer-stardust"></div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
