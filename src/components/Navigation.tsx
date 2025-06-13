
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
    { name: 'Vision', href: '#process' },
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
      isScrolled ? 'nav-scrolled' : 'nav-glass'
    }`}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0">
            <div className="logo-container">
              <img 
                src="/lovable-uploads/d31c66a8-d4db-49a3-b1af-ca493ebd4e49.png" 
                alt="SyneticAI" 
                className="h-10 w-auto logo-glow"
              />
              <div className="logo-pulse-ring"></div>
              <div className="logo-orbit-ring"></div>
            </div>
          </div>

          {/* Futuristic Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="futuristic-nav-button relative"
              >
                <span className="relative z-10 text-cosmic-white/90 hover:text-cosmic-gold transition-colors">
                  {link.name}
                </span>
                <div className="nav-shimmer"></div>
              </button>
            ))}
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <button className="nav-cta-enhanced relative">
              <span className="relative z-10">Get Started</span>
              <div className="nav-shimmer"></div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
