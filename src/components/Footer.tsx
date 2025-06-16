
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
              className="footer-logo-2025 mx-auto"
            />
            <div className="footer-logo-glow"></div>
          </div>
          
          {/* Main footer message */}
          <p className="footer-main-text">
            Let's elevate the future — 
            <span className="text-cosmic-gold hero-glow-text ml-2">together.</span>
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
            <p className="footer-copyright">
              © 2025 Synetic AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
