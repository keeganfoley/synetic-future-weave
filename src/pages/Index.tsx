
import ParticleField from '../components/ParticleField';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import MainSections from '../components/MainSections';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Particle Background */}
      <ParticleField />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <MainSections />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-cosmic-gold/20 backdrop-cosmic">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-2xl font-cosmic font-bold text-cosmic-gold mb-4">
            Synetic AI
          </div>
          <p className="text-cosmic-white/60">
            Intelligence Unleashed. Your Future, Now.
          </p>
          <p className="text-cosmic-white/40 mt-4 text-sm">
            © 2024 Synetic AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
