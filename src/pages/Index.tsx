
import ParticleField from '../components/ParticleField';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import MainSections from '../components/MainSections';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Elite Particle Background */}
      <ParticleField />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <MainSections />
      </main>
      
      {/* Elite Footer */}
      <footer className="relative z-10 py-16 px-6 border-t border-cosmic-gold/30 glass-morphism">
        <div className="max-w-6xl mx-auto">
          <div className="section-divider mb-12"></div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-3xl font-heading font-bold text-cosmic-gold mb-4 text-glow">
                Synetic AI
              </div>
              <p className="text-cosmic-white/80 text-lg mb-4">
                Intelligence Unleashed. Your Future, Now.
              </p>
              <a 
                href="mailto:team@syneticai.com" 
                className="text-cosmic-gold hover:text-cosmic-white transition-colors duration-300 text-lg font-medium"
              >
                team@syneticai.com
              </a>
            </div>
            <div className="text-right">
              <p className="text-cosmic-white/60 text-lg mb-4">
                Let's build something intelligent.
              </p>
              <p className="text-cosmic-white/40 text-sm">
                © 2024 Synetic AI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
