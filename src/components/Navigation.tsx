
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'nav-scrolled' : 'nav-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Living Logo Emblem */}
          <div className="living-logo-emblem">
            <div className="logo-holographic-container">
              <img 
                src="/lovable-uploads/954eb314-e07f-4e2c-bc93-0f4e5430a309.png" 
                alt="SyneticAI"
                className="logo-image"
              />
              <div className="logo-energy-pulse"></div>
              <div className="logo-electrical-texture"></div>
              <div className="logo-shadow-glow"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <button 
              onClick={() => scrollToSection('vision')}
              className="nav-link-galactic"
            >
              <span>Vision</span>
              <div className="nav-data-stream"></div>
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="nav-link-galactic"
            >
              <span>Process</span>
              <div className="nav-data-stream"></div>
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="nav-link-galactic"
            >
              <span>Services</span>
              <div className="nav-data-stream"></div>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-link-galactic"
            >
              <span>Contact</span>
              <div className="nav-data-stream"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cosmic-gold p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden galactic-mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('vision')}
                className="block px-3 py-2 text-cosmic-white/80 hover:text-cosmic-gold transition-colors duration-300"
              >
                Vision
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="block px-3 py-2 text-cosmic-white/80 hover:text-cosmic-gold transition-colors duration-300"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-cosmic-white/80 hover:text-cosmic-gold transition-colors duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-cosmic-white/80 hover:text-cosmic-gold transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
