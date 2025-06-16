
import ParticleField from '../components/ParticleField';
import AnimatedBackground from '../components/AnimatedBackground';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import MainSections from '../components/MainSections';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Ambient Particle Background */}
      <ParticleField />
      
      {/* Animated Background Elements */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <MainSections />
      </main>
      
      {/* Redesigned Premium Footer */}
      <Footer />
    </div>
  );
};

export default Index;
