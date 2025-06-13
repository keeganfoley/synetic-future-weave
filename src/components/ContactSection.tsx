
const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 contact-bg-pattern"></div>
      
      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-light mb-8 text-glow">
          Ready to Transform?
        </h2>
        
        <p className="text-xl text-cosmic-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Let's discuss how intelligent automation can revolutionize your business operations.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="futuristic-button primary-button large-button group">
            <span className="relative z-10">Start Your Journey</span>
            <div className="button-glow"></div>
            <div className="button-particles"></div>
          </button>
          
          <a 
            href="mailto:team@syneticai.com" 
            className="futuristic-button secondary-button large-button group"
          >
            <span className="relative z-10">team@syneticai.com</span>
            <div className="button-glow"></div>
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
