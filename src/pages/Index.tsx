
import GalacticBackground from '../components/GalacticBackground';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import MainSections from '../components/MainSections';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-cosmic-black">
      {/* Galactic Background */}
      <GalacticBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <MainSections />
      </main>
      
      {/* Tier 2: The Terminus Footer */}
      <footer className="relative z-10 py-8 px-8 border-t border-cosmic-gold/20 terminus-footer">
        <div className="absolute inset-0 terminus-background"></div>
        <div className="star-trails-background"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo Section */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/954eb314-e07f-4e2c-bc93-0f4e5430a309.png" 
                alt="SyneticAI"
                className="footer-logo"
              />
            </div>
            
            {/* Center Links */}
            <div className="flex space-x-8">
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
            
            {/* Copyright */}
            <div className="text-right">
              <p className="text-cosmic-white/40 text-xs">
                © 2025 SyneticAI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
