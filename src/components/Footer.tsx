
const Footer = () => {
  return (
    <footer className="relative z-10 py-20 px-8 footer-2025">
      <div className="max-w-6xl mx-auto">
        {/* Flowing horizontal line */}
        <div className="footer-flowing-line mb-16"></div>
        
        {/* Nebula background */}
        <div className="footer-nebula-texture"></div>
        <div className="footer-drifting-stars"></div>
        
        <div className="text-center space-y-8">
          {/* Enhanced logo */}
          <div className="footer-logo-container">
            <img 
              src="/lovable-uploads/15c32940-8d1d-4aaf-b5cc-4dfc267e8efa.png" 
              alt="Synetic AI" 
              className="footer-logo-2025 mx-auto h-8 w-auto"
            />
            <div className="footer-logo-glow"></div>
            {/* Trailing light effect */}
            <div className="absolute inset-0 -z-10">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-cosmic-gold/20 to-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            </div>
          </div>
          
          {/* Main footer message */}
          <p className="footer-main-text">
            <span className="text-cosmic-gold hero-glow-text">Designed to evolve. Built to last.</span>
          </p>
          
          {/* Contact and Copyright */}
          <div className="footer-contact-section space-y-4">
            <a 
              href="mailto:team@syneticai.com" 
              className="footer-email-link"
            >
              team@syneticai.com
              <div className="email-scan-line"></div>
            </a>
            <div className="space-y-2">
              <p className="footer-copyright">
                © 2025 Synetic AI. All rights reserved.
              </p>
              <p className="text-cosmic-gold/80 text-sm font-light tracking-wide hero-glow-text">
                Intelligence in Motion. Automation Without Friction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
