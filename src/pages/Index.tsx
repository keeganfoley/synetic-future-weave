
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
      
      {/* Footer with Logo */}
      <footer className="relative z-10 py-20 px-8 border-t border-cosmic-gold/30 glass-nav">
        <div className="max-w-6xl mx-auto">
          <div className="section-divider mb-16"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="footer-logo-container mb-8">
                <img 
                  src="/lovable-uploads/6d4b70cd-d1fe-4cd9-a23a-e3984e48df2e.png" 
                  alt="Synetic AI" 
                  className="brand-logo-footer mx-auto md:mx-0"
                />
              </div>
              <div className="space-y-4 mb-8">
                <p className="text-cosmic-white/90 text-lg font-light leading-relaxed tracking-wide opacity-fade-in">
                  Intelligence in Motion.
                </p>
                <p className="text-cosmic-gold text-lg font-light leading-relaxed tracking-wide text-glow-subtle opacity-fade-in delay-200">
                  Automation Without Friction.
                </p>
              </div>
              <a 
                href="mailto:team@syneticai.com" 
                className="text-cosmic-gold hover:text-cosmic-white transition-colors duration-500 text-lg font-medium tracking-wider text-glow-subtle hover:text-shadow-lg"
              >
                team@syneticai.com
              </a>
            </div>
            <div className="text-center md:text-right">
              <div className="space-y-4 mb-8">
                <p className="text-cosmic-white/80 text-lg font-light leading-relaxed tracking-wide opacity-fade-in">
                  Let's build something
                </p>
                <p className="text-cosmic-gold text-lg font-light leading-relaxed tracking-wide text-glow-subtle opacity-fade-in delay-200">
                  intelligent.
                </p>
              </div>
              <p className="text-cosmic-white/50 text-sm tracking-wider">
                © 2025 Synetic AI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
