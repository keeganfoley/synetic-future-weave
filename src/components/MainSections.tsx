
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useNavigate } from 'react-router-dom';
import ProcessSection from './ProcessSection';
import NewsletterSection from './NewsletterSection';

const MainSections = () => {
  useScrollReveal();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return <>
      {/* Our Purpose Section (Combined Vision + Mission) */}
      <section id="purpose" className="py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="section-divider mb-16"></div>

          <h2 className="text-4xl md:text-6xl font-heading font-light mb-12 text-cosmic-gold text-glow-premium scroll-fade-in typing-animation-enhanced">
            Our Purpose
          </h2>
          
          <div className="space-y-8 scroll-fade-in stagger-1">
            <p className="text-xl text-cosmic-white/90 leading-relaxed font-light tracking-wide md:text-3xl">We build automation that saves time and multiplies output.</p>
            <p className="text-xl text-cosmic-gold/90 leading-relaxed font-light tracking-wide text-glow-subtle md:text-3xl">Efficiency in. Revenue out.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        {/* Light Trails Background */}
        <div className="light-trails-bg"></div>
        
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-heading font-light mb-8 text-cosmic-gold text-glow-premium scroll-fade-in typing-blink-animation md:text-5xl">Work Less. Earn More.</h2>
          
          <div className="space-y-6 mb-12 scroll-fade-in stagger-1">
            <p className="text-cosmic-white/90 leading-relaxed font-light tracking-wide text-2xl">Let's talk. You'll leave with time and money back.</p>
            <p className="text-lg text-cosmic-gold/90 leading-relaxed font-light tracking-wide text-glow-subtle">
              Let's explore the possibilities.
            </p>
          </div>

          <div className="scroll-fade-in stagger-2">
            <button 
              onClick={handleGetStarted}
              className="elite-cta-button-glass text-lg group relative"
            >
              <span className="relative z-10 inline-flex items-center">
                Get Started
                <svg className="ml-4 w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="cta-sonar-pulse"></div>
            </button>
          </div>

          <div className="mt-12 space-y-2 scroll-fade-in stagger-3">
            <p className="text-cosmic-white/60 text-sm tracking-wider">
              Free consultation within 24 hours
            </p>
            <a href="mailto:team@syneticai.com" className="text-cosmic-gold hover:text-cosmic-white transition-colors duration-500 text-lg font-medium tracking-wider text-glow-subtle hover:text-glow-premium block email-glow-hover">
              team@syneticai.com
            </a>
          </div>
        </div>
      </section>
    </>;
};

export default MainSections;
