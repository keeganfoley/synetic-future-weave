
import GalacticBackground from '../components/GalacticBackground';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import MainSections from '../components/MainSections';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-cosmic-black">
      {/* Enhanced Galactic Background */}
      <GalacticBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <MainSections />
      </main>
      
      {/* Refined Footer */}
      <footer className="relative z-10 py-16 px-8 border-t border-cosmic-gold/20 galaxy-footer-refined">
        <div className="galaxy-footer-ambient"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Logo Section */}
            <div className="text-left">
              <h3 className="text-xl font-heading font-light text-cosmic-gold text-glow-subtle mb-2">
                SyneticAI
              </h3>
              <p className="text-cosmic-white/60 text-sm">
                Automation Without Friction
              </p>
            </div>
            
            {/* Center Links */}
            <div className="text-center">
              <div className="flex justify-center space-x-8">
                <button 
                  onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-cosmic-white/60 hover:text-cosmic-gold transition-colors duration-300 text-sm"
                >
                  Vision
                </button>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-cosmic-white/60 hover:text-cosmic-gold transition-colors duration-300 text-sm"
                >
                  Services
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-cosmic-white/60 hover:text-cosmic-gold transition-colors duration-300 text-sm"
                >
                  Contact
                </button>
              </div>
            </div>
            
            {/* Contact Section */}
            <div className="text-right">
              <a 
                href="mailto:team@syneticai.com" 
                className="galaxy-email-beacon text-cosmic-gold text-sm font-medium block mb-2"
              >
                team@syneticai.com
              </a>
              <p className="text-cosmic-white/40 text-xs">
                © 2025 SyneticAI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        
        {/* Ambient Particle Effect */}
        <div className="footer-particle-drift">
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={i} 
              className="footer-particle"
              style={{
                '--delay': `${i * 0.3}s`,
                '--x': `${Math.random() * 100}%`
              } as React.CSSProperties}
            />
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Index;
