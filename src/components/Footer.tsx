
const Footer = () => {
  return (
    <footer className="relative z-10 py-16 px-8 footer-premium">
      <div className="max-w-5xl mx-auto">
        {/* Premium divider */}
        <div className="footer-divider-premium mb-12"></div>
        
        <div className="text-center space-y-8">
          {/* Premium logo */}
          <div className="footer-logo-container relative inline-block">
            <img 
              src="/lovable-uploads/15c32940-8d1d-4aaf-b5cc-4dfc267e8efa.png" 
              alt="Synetic AI" 
              className="footer-logo-premium mx-auto"
            />
            <div className="footer-orbit-premium"></div>
          </div>
          
          {/* Main footer message */}
          <p className="footer-text-premium">
            Designed to evolve. Built to last.
          </p>
          
          {/* Copyright and tagline */}
          <div className="space-y-3">
            <p className="footer-copyright-premium">
              © 2025 Synetic AI. All rights reserved.
            </p>
            <p className="footer-tagline-premium">
              Intelligence in Motion. Automation Without Friction.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
