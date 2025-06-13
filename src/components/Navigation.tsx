
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'nav-scrolled' : 'nav-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-24">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0 relative">
            <div className="logo-container">
              <div className="logo-beam"></div>
              <img 
                src="/lovable-uploads/d31c66a8-d4db-49a3-b1af-ca493ebd4e49.png" 
                alt="SyneticAI" 
                className="h-10 w-auto logo-glow relative z-10"
              />
              <div className="logo-pulse-ring"></div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="nav-link text-cosmic-white/80 hover:text-cosmic-gold transition-all duration-300 relative"
              >
                {link.name}
                <div className="nav-link-glow"></div>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="nav-cta-button">
              <span>Get Started</span>
              <div className="button-shine"></div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
