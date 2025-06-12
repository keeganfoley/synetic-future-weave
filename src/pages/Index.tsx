
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
      
      {/* Enhanced Footer */}
      <footer className="relative z-10 py-16 px-8 border-t border-cosmic-gold/20 galaxy-footer-enhanced">
        <div className="absolute inset-0 galaxy-unified-background"></div>
        <div className="footer-starfield-enhanced"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
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
                  className="text-cosmic-white/60 hover:text-cosmic-gold transition-colors duration-300 text-sm nav-link-enhanced"
                >
                  Vision
                </button>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-cosmic-white/60 hover:text-cosmic-gold transition-colors duration-300 text-sm nav-link-enhanced"
                >
                  Services
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-cosmic-white/60 hover:text-cosmic-gold transition-colors duration-300 text-sm nav-link-enhanced"
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
        
        {/* Enhanced Particle Effect */}
        <div className="footer-particle-enhanced">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="footer-particle-star"
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
