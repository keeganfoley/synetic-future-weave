
import ParticleField from '../components/ParticleField';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import MainSections from '../components/MainSections';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Ambient Particle Background */}
      <ParticleField />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <MainSections />
      </main>
      
      {/* Refined Footer */}
      <footer className="relative z-10 py-16 px-8 border-t border-cosmic-gold/20 glass-nav">
        <div className="max-w-5xl mx-auto">
          <div className="section-divider mb-12"></div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/lovable-uploads/6d4b70cd-d1fe-4cd9-a23a-e3984e48df2e.png" 
                alt="Synetic AI" 
                className="h-8 w-auto brand-logo mb-4"
              />
              <p className="text-cosmic-white/80 text-lg mb-4 font-light">
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
              <p className="text-cosmic-white/60 text-lg mb-4 font-light">
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
