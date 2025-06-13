
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import MainSections from '../components/MainSections';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-cosmic-black text-cosmic-white">
      <Navigation />
      <main>
        <HeroSection />
        <MainSections />
      </main>
    </div>
  );
};

export default Index;
