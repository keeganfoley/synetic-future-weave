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
            {/* Revolutionary 2025 Logo */}
            <div className="flex-shrink-0 mr-12 logo-container-2025 group cursor-pointer">
              <div className="relative">
                <img 
                  src="/lovable-uploads/15c32940-8d1d-4aaf-b5cc-4dfc267e8efa.png" 
                  alt="Synetic AI" 
                  className="logo-2025"
                />
                {/* Radiant pulse background */}
                <div className="logo-radiant-pulse-2025"></div>
                {/* Beaming effect */}
                <div className="logo-beam-effect-2025"></div>
                {/* Ambient shimmer */}
                <div className="logo-shimmer-2025"></div>
                {/* Orbital ring */}
                <div className="logo-orbital-ring-2025"></div>
              </div>
            </div>

            {/* Enhanced Navigation Links */}
            <div className="hidden md:flex items-center space-x-12">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="nav-link-2025"
                >
                  <span className="nav-text-glow">{link.name}</span>
                  <div className="nav-golden-underline"></div>
                  <div className="nav-hover-shimmer"></div>
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
          <div className="md:hidden nav-scrolled-2025 border-t border-cosmic-gold/20">
            <div className="px-8 py-8 space-y-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block nav-link-2025 text-xl w-full text-left"
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
