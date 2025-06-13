
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import MainSections from '../components/MainSections';
import GalacticBackground from '../components/GalacticBackground';

const Index = () => {
  return (
    <div className="relative min-h-screen galactic-bg text-cosmic-white">
      <GalacticBackground />
      <div className="stardust-overlay"></div>
      
      {/* Cosmic floating elements */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="cosmic-orb cosmic-orb-1"></div>
        <div className="cosmic-orb cosmic-orb-2"></div>
        <div className="cosmic-orb cosmic-orb-3"></div>
        <div className="light-trail light-trail-1"></div>
        <div className="light-trail light-trail-2"></div>
        <div className="light-trail light-trail-3"></div>
      </div>
      
      <Navigation />
      <main className="relative z-20">
        <HeroSection />
        <MainSections />
      </main>
    </div>
  );
};

export default Index;
