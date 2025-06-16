
const Footer = () => {
  return (
    <footer className="relative z-10 py-20 px-8 border-t border-cosmic-gold/20 footer-galaxy">
      <div className="max-w-6xl mx-auto">
        {/* Golden separator line */}
        <div className="footer-separator mb-16"></div>
        
        <div className="text-center space-y-8">
          {/* Main footer message */}
          <p className="text-2xl md:text-3xl font-light text-cosmic-white tracking-wide footer-fade-in">
            Let's elevate the future — 
            <span className="text-cosmic-gold text-glow-premium ml-2">together.</span>
          </p>
          
          {/* Logo */}
          <div className="footer-fade-in-delay-1">
            <img 
              src="/lovable-uploads/6d4b70cd-d1fe-4cd9-a23a-e3984e48df2e.png" 
              alt="Synetic AI" 
              className="footer-logo mx-auto"
            />
          </div>
          
          {/* Contact and Copyright */}
          <div className="footer-fade-in-delay-2 space-y-4">
            <a 
              href="mailto:team@syneticai.com" 
              className="block text-cosmic-gold hover:text-cosmic-white transition-colors duration-500 text-xl font-light tracking-wide text-glow-premium"
            >
              team@syneticai.com
            </a>
            <p className="text-cosmic-white/60 text-sm tracking-wider">
              © 2025 Synetic AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating star dust effect */}
      <div className="footer-stardust-1"></div>
      <div className="footer-stardust-2"></div>
      <div className="footer-stardust-3"></div>
      
      {/* Light trails */}
      <div className="footer-light-trail-1"></div>
      <div className="footer-light-trail-2"></div>
    </footer>
  );
};

export default Footer;
