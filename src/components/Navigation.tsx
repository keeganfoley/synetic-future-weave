
import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
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
      <nav className={`nav-system-2025 ${
        isScrolled ? 'nav-scrolled-system' : 'nav-transparent-system'
      }`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 py-2">
            {/* Logo with Precision Transform */}
            <div className="flex-shrink-0">
              <div className="relative">
                <img 
                  src="/lovable-uploads/6d38dcd4-57ab-4003-b5c9-e625f91896c8.png" 
                  alt="Synetic AI" 
                  className="logo-system-command"
                />
              </div>
            </div>

            {/* Navigation Links with Precision Hover */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="nav-link-system relative"
                >
                  <span className="relative z-10">{link.name}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-engineered-gold transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`bg-current block transition-all duration-300 h-0.5 w-6 transform ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                  }`} />
                  <span className={`bg-current block transition-all duration-300 h-0.5 w-6 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`} />
                  <span className={`bg-current block transition-all duration-300 h-0.5 w-6 transform ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with Engineered Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden nav-scrolled-system border-t border-engineered-gold/20 engineered-panel">
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block nav-link-system text-base w-full text-left"
                >
                  <span className="relative z-10">{link.name}</span>
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
