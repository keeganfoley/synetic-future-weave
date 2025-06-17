
const Footer = () => {
  return (
    <footer className="relative z-10 py-12 px-8 footer-2025">
      <div className="max-w-6xl mx-auto">
        {/* Glowing divider */}
        <div className="footer-divider-glow"></div>
        
        <div className="text-center space-y-6">
          {/* Main footer message */}
          <p className="footer-main-text">
            Let's engineer your edge.
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
