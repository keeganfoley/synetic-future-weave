
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Vision', href: '#vision' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'nav-scrolled-2025' : 'nav-transparent-2025'
      }`}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-24 py-4">
            {/* Enhanced Logo with improved beam animation */}
            <div className="flex-shrink-0 mr-12 logo-container-2025 group space-pulse">
              <div className="relative">
                <img 
                  src="/lovable-uploads/6d38dcd4-57ab-4003-b5c9-e625f91896c8.png" 
                  alt="Synetic AI" 
                  className="logo-2025-enhanced"
                />
                <div className="logo-beam-enhanced"></div>
                <div className="logo-glow-ring"></div>
              </div>
            </div>

            {/* Premium Navigation Links with floating effect */}
            <div className="hidden md:flex items-center space-x-12">
              {navLinks.map((link, index) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="nav-link-2025 magnetic-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="nav-text-glow luxury-float">{link.name}</span>
                  <div className="nav-golden-underline"></div>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-cosmic-steel hover:text-cosmic-gold transition-colors duration-600 magnetic-hover"
              >
                <div className="w-7 h-7 flex flex-col justify-center items-center">
                  <span className={`bg-current block transition-all duration-300 h-0.5 w-7 transform ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : '-translate-y-1.5'
                  }`} />
                  <span className={`bg-current block transition-all duration-300 h-0.5 w-7 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`} />
                  <span className={`bg-current block transition-all duration-300 h-0.5 w-7 transform ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : 'translate-y-1.5'
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden nav-scrolled-2025 border-t border-cosmic-gold/25 luxury-float">
            <div className="px-8 py-8 space-y-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block nav-link-2025 text-xl w-full text-left magnetic-hover"
                >
                  <span className="nav-text-glow">{link.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
