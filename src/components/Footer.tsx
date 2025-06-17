
const Footer = () => {
  return (
    <footer className="relative z-10 py-16 px-8 footer-2025">
      <div className="max-w-6xl mx-auto">
        {/* Glowing divider */}
        <div className="footer-divider-glow"></div>
        
        <div className="text-center space-y-6">
          {/* Enhanced logo */}
          <div className="footer-logo-container relative inline-block">
            <img 
              src="/lovable-uploads/15c32940-8d1d-4aaf-b5cc-4dfc267e8efa.png" 
              alt="Synetic AI" 
              className="footer-logo-2025 mx-auto"
            />
          </div>
          
          {/* Main footer message */}
          <p className="footer-main-text">
            Designed to evolve. Built to last.
          </p>
          
          {/* Copyright and tagline */}
          <div className="space-y-2">
            <p className="footer-copyright">
              © 2025 Synetic AI. All rights reserved.
            </p>
            <p className="footer-tagline">
              Intelligence in Motion. Automation Without Friction.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
