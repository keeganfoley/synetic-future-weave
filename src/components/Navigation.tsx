
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
      <nav className={`nav-command-2025 ${
        isScrolled ? 'nav-scrolled-command' : 'nav-transparent-command'
      }`}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-24 py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <img 
                  src="/lovable-uploads/6d38dcd4-57ab-4003-b5c9-e625f91896c8.png" 
                  alt="Synetic AI" 
                  className="logo-command-elite"
                />
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="nav-link-command relative"
                >
                  <span className="relative z-10">{link.name}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-elegant-gold transition-colors duration-300"
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
          <div className="md:hidden nav-scrolled-command border-t border-elegant-gold/25">
            <div className="px-8 py-8 space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block nav-link-command text-xl w-full text-left"
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
