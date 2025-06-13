
const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="cosmic-orb" style={{
          width: '200px',
          height: '200px',
          top: '20%',
          right: '10%',
          opacity: 0.3
        }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-light mb-8 text-glow animated-underline">
          Ready to Transform?
        </h2>
        
        <p className="text-xl text-cosmic-white/80 mb-16 max-w-2xl mx-auto leading-relaxed">
          Let's discuss how intelligent automation can revolutionize your business operations.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
          <button className="cosmic-button group">
            <span className="relative z-10">Start Your Journey</span>
            <div className="button-energy-beam"></div>
            <div className="button-glow-particles"></div>
          </button>
          
          <a 
            href="mailto:team@syneticai.com" 
            className="cosmic-button group"
          >
            <span className="relative z-10">team@syneticai.com</span>
            <div className="button-energy-beam"></div>
            <div className="button-glow-particles"></div>
          </a>
        </div>

        <div className="border-t border-cosmic-gold/20 pt-8">
          <p className="text-cosmic-white/50 text-sm">
            © 2025 SyneticAI. Intelligent automation for the future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
