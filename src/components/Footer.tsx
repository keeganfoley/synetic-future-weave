
const Footer = () => {
  return (
    <footer className="relative py-16 px-6 border-t border-yellow-400/20">
      <div className="max-w-6xl mx-auto">
        {/* Animated divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-12 animate-pulse"></div>
        
        <div className="text-center space-y-8">
          {/* Main footer message */}
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            Intelligence in Motion. Automation Without Friction.
          </h3>
          
          {/* Copyright and tagline */}
          <div className="space-y-4">
            <p className="text-gray-400 text-lg">
              © 2025 Synetic AI. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm uppercase tracking-wider">
              Engineered for Excellence
            </p>
          </div>
        </div>

        {/* Subtle background glow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-32 bg-gradient-to-t from-yellow-400/5 to-transparent blur-2xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
