
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
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo - Moved to top left and made larger */}
          <div className="flex-shrink-0 relative">
            <div className="logo-container-large">
              <div className="logo-beam-large"></div>
              <div className="logo-text-container">
                <span className="logo-text">
                  SYNETIC<span className="logo-ai">AI</span>
                </span>
              </div>
              <div className="logo-pulse-ring-large"></div>
              <div className="logo-orbit-ring"></div>
            </div>
          </div>

          {/* Enhanced Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="nav-link-futuristic group relative"
              >
                <span className="relative z-10">{link.name}</span>
                <div className="nav-glow-effect"></div>
                <div className="nav-energy-pulse"></div>
              </button>
            ))}
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <button className="futuristic-nav-cta group">
              <span className="relative z-10">Get Started</span>
              <div className="spinning-globe"></div>
              <div className="button-energy-flow"></div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
