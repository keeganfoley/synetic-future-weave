
import GalacticBackground from '../components/GalacticBackground';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import MainSections from '../components/MainSections';
import { WorkflowConnectWidget } from '../components/SmartWidgets';

const Index = () => {
  return (
    <div className="relative min-h-screen galaxy-command-surface-optimized">
      {/* High-Performance Cursor */}
      <div className="custom-cursor-optimized"></div>
      
      {/* Galactic Background */}
      <GalacticBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Floating Widget */}
      <div className="fixed bottom-8 right-8 z-40">
        <WorkflowConnectWidget />
      </div>
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <MainSections />
      </main>
      
      {/* Optimized Footer */}
      <footer className="relative z-10 py-8 px-8 border-t border-cosmic-gold/20 footer-optimized">
        <div className="footer-frequency-waves"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-8">
              <img 
                src="/lovable-uploads/6d4b70cd-d1fe-4cd9-a23a-e3984e48df2e.png" 
                alt="SyneticAI" 
                className="h-6 w-auto opacity-80"
              />
            </div>
            
            <div className="flex items-center space-x-8 mt-4 md:mt-0">
              <span className="text-cosmic-white/60 text-sm">
                Automation Without Friction
              </span>
              <a 
                href="mailto:team@syneticai.com" 
                className="text-cosmic-gold hover:text-cosmic-white transition-colors duration-300 text-sm email-clean-hover"
              >
                team@syneticai.com
              </a>
            </div>
            
            <div className="text-cosmic-white/40 text-sm mt-4 md:mt-0">
              © 2025 SyneticAI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
