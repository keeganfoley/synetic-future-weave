
import { useState, useEffect, useCallback, memo } from 'react';
import { throttle } from '@/utils/throttle';
import { BaseComponentProps } from '@/types';
import { useSectionRefs } from '@/context/SectionRefsContext';
import { sectionConfig } from '@/config/sections.config';

type NavigationProps = BaseComponentProps;

const Navigation = memo<NavigationProps>(({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToSection } = useSectionRefs();

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 80);
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = sectionConfig
    .filter(section => ['purpose', 'process', 'contact'].includes(section.id))
    .map(section => ({
      id: section.id,
      name: section.navLabel,
    }));

  const handleNavClick = useCallback((sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  }, [scrollToSection]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'glass-nav-luxury' : 'glass-nav-initial'
      } ${className || ''}`}>
        {/* Metallic Border Gradient */}
        <div className="absolute inset-0 nav-metallic-border" />
        
        {/* Multi-layer Backdrop Effect */}
        <div className="absolute inset-0 nav-backdrop-layer-1" />
        <div className="absolute inset-0 nav-backdrop-layer-2" />
        <div className="max-w-8xl mx-auto px-8 lg:px-16 relative z-10">
          <div className="flex items-center justify-between h-24 py-4">
            {/* Logo with Enhanced Beam Effect */}
            <div className="flex-shrink-0 relative group">
              {/* Enhanced Horizontal Beam Effect - More Visible */}
              <div className="absolute inset-0 -inset-x-20 flex items-center justify-center overflow-hidden">
                <div className="w-80 h-px bg-gradient-to-r from-transparent via-cosmic-gold/40 to-transparent"></div>
                <div className="absolute w-40 h-0.5 bg-gradient-to-r from-transparent via-cosmic-gold/70 to-transparent blur-[1px] animate-[slide-beam_4s_ease-in-out_infinite]"></div>
                <div className="absolute w-20 h-1 bg-gradient-to-r from-transparent via-cosmic-gold/90 to-transparent blur-sm animate-[slide-beam_4s_ease-in-out_infinite_0.5s]"></div>
              </div>
              
              {/* Logo Glow Effect */}
              <div className="absolute inset-0 logo-glow-effect" />
              
              <img 
                src="/lovable-uploads/1ad24021-3fea-4a5c-ba63-aee9a8d065fb.png" 
                alt="Synetic AI" 
                className="h-36 w-auto relative z-10 logo-luxury-effect"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="nav-link-luxury text-base font-light tracking-wide relative group"
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Luxury Underline Effect */}
                  <div className="nav-underline-luxury" />
                  {/* Hover Glow */}
                  <div className="nav-hover-glow" />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-cosmic-white hover:text-cosmic-gold transition-all duration-500 relative group p-2"
              >
                {/* Button Hover Glow */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-cosmic-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="w-7 h-7 flex flex-col justify-center items-center relative">
                  <span className={`bg-current block transition-all duration-300 h-0.5 w-7 transform ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-cosmic-gold' : '-translate-y-1.5'
                  }`} />
                  <span className={`bg-current block transition-all duration-300 h-0.5 w-7 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`} />
                  <span className={`bg-current block transition-all duration-300 h-0.5 w-7 transform ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-cosmic-gold' : 'translate-y-1.5'
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-nav-mobile-luxury">
            {/* Mobile Menu Backdrop */}
            <div className="absolute inset-0 mobile-menu-backdrop" />
            <div className="relative px-8 py-8 space-y-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="block nav-link-luxury-mobile text-lg w-full text-left relative group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="nav-underline-luxury-mobile" />
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
