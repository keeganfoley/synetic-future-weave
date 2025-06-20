
import { useEffect } from 'react';
import ParticleField from '../components/ParticleField';
import ElegantBackground from '../components/ElegantBackground';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import MainSections from '../components/MainSections';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize 3D transforms on load
    document.body.style.transformStyle = 'preserve-3d';
    
    // Add scroll-based 3D effects
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      // 3D parallax for background elements
      const parallaxElements = document.querySelectorAll('[data-parallax-3d]');
      parallaxElements.forEach((element) => {
        const el = element as HTMLElement;
        const speed = parseFloat(el.dataset.parallax3d || '0.3');
        el.style.transform = `translateY(${rate * speed}px) translateZ(${speed * 20}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen" style={{ transformStyle: 'preserve-3d' }}>
      {/* Enhanced 3D Background Layers */}
      <ElegantBackground />
      <ParticleField />
      
      {/* Navigation with 3D Depth */}
      <Navigation />
      
      {/* Main Content with 3D Perspective */}
      <main style={{ transformStyle: 'preserve-3d' }}>
        <HeroSection />
        <MainSections />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
