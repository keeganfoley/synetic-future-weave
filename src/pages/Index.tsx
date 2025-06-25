
import OptimizedBackground from '../components/OptimizedBackground';
import AnimatedBackground from '../components/AnimatedBackground';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import MainSections from '../components/MainSections';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Optimized Background */}
      <OptimizedBackground />
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <MainSections />
      </main>
      
      {/* Enhanced Minimalist Footer */}
      <footer className="relative z-10 py-20 px-8 border-t border-cosmic-gold/30 glass-nav">
        {/* Star Dust Animation */}
        <div className="footer-stardust"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="section-divider mb-16"></div>
          
          <div className="space-y-8">
            {/* Logo with animation */}
            <div className="relative inline-block">
              <img 
                src="/lovable-uploads/861140cd-aa95-4467-9a29-edc6c270f44c.png" 
                alt="SyneticAI Logo" 
                className="h-12 w-auto mx-auto opacity-90 hover:opacity-100 transition-all duration-500 animate-gentle-float"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cosmic-gold/20 to-transparent rounded-lg blur-xl animate-pulse-subtle"></div>
            </div>
            
            <p className="text-lg text-cosmic-white/80 font-light tracking-wide">
              Real Automations. Real ROI
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:team@syneticai.com" 
                className="text-cosmic-gold hover:text-cosmic-white transition-colors duration-500 text-lg font-medium tracking-wider text-glow-subtle hover:text-glow-premium inline-block email-glow-hover"
              >
                team@syneticai.com
              </a>
            </div>
            
            <p className="text-cosmic-white/50 text-sm tracking-wider pt-8">
              © 2025 SyneticAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
