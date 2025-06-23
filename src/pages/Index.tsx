
import ParticleField from '../components/ParticleField';
import ElegantBackground from '../components/ElegantBackground';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import MainSections from '../components/MainSections';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Elegant Golden Lines Background */}
      <ElegantBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <MainSections />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
