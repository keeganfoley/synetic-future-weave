
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
    { name: 'Purpose', href: '#purpose' },
    { name: 'Process', href: '#process' },
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
        isScrolled ? 'glass-nav' : ''
      }`}>
        <div className="max-w-8xl mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-24 py-4">
            {/* Logo with Subtle Beam Effect */}
            <div className="flex-shrink-0 relative">
              {/* Subtle Horizontal Beam Effect */}
              <div className="absolute inset-0 -inset-x-16 flex items-center overflow-hidden">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cosmic-gold/15 to-transparent opacity-40"></div>
                <div className="absolute w-32 h-0.5 bg-gradient-to-r from-transparent via-cosmic-gold/25 to-transparent blur-sm animate-[slide-beam_4s_ease-in-out_infinite]"></div>
              </div>
              
              <img 
                src="/lovable-uploads/1ad24021-3fea-4a5c-ba63-aee9a8d065fb.png" 
                alt="Synetic AI" 
                className="h-36 w-auto relative z-10"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="nav-link-elite text-base font-light tracking-wide"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-cosmic-white hover:text-cosmic-gold transition-colors duration-500"
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
          <div className="md:hidden glass-nav border-t border-cosmic-gold/20">
            <div className="px-8 py-8 space-y-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block nav-link-elite text-lg w-full text-left"
                >
                  {link.name}
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
