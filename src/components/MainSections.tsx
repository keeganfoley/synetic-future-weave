
import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Brain, Zap, Infinity } from 'lucide-react';

const MainSections = () => {
  const visibleElements = useScrollReveal();

  useEffect(() => {
    const scrollElements = document.querySelectorAll('.scroll-fade-in, .scroll-slide-left, .scroll-slide-right');
    scrollElements.forEach(el => {
      if (!el.classList.contains('visible')) {
        el.classList.add('scroll-fade-in');
      }
    });
  }, []);

  const solutions = [
    {
      title: "Cognitive Intelligence",
      description: "Precision-engineered AI systems that adapt and evolve with your business.",
      icon: Brain,
      delay: "stagger-1"
    },
    {
      title: "Neural CRM Systems", 
      description: "AI-powered insights that predict needs and amplify results.",
      icon: Zap,
      delay: "stagger-2"
    },
    {
      title: "Infinite Automation",
      description: "Elite prospect identification with automated engagement systems.",
      icon: Infinity,
      delay: "stagger-3"
    }
  ];

  return (
    <div className="relative">
      {/* Vision Section */}
      <section id="vision" className="min-h-screen flex items-center py-32 px-8 relative vision-section-2025">
        <div className="section-divider-2025 absolute top-0"></div>
        <div className="vertical-glow-line"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Rising beam effect */}
            <div className="vision-rising-beam"></div>
            <h2 className="scroll-fade-in section-title-2025 text-cosmic-gold mb-16">
              Our Vision
            </h2>
            <p className="scroll-slide-left stagger-2 vision-text-2025 mb-20">
              Systems that anticipate, evolve, and operate at the speed of thought.
            </p>
            
            <div className="scroll-fade-in stagger-4">
              <h3 className="mission-title-2025 mb-12">
                Our Mission
              </h3>
              <p className="mission-text-2025">
                To eliminate operational friction through adaptive, autonomous intelligence.
              </p>
              {/* Gold divider line */}
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cosmic-gold to-transparent mx-auto mt-8 opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="min-h-screen flex items-center py-32 px-8 relative solutions-section-2025">
        <div className="section-divider-2025 absolute top-0"></div>
        <div className="diagonal-grid-background"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="scroll-fade-in section-title-2025 text-cosmic-gold mb-12">
              Engineered Intelligence
            </h2>
            <p className="scroll-slide-right stagger-2 section-subtitle-2025">
              Real-time infrastructure that adapts and performs without lag.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={solution.title}
                  className={`scroll-fade-in ${solution.delay} group solution-card-2025`}
                >
                  <div className="solution-card-inner-2025 h-full group transition-all duration-700">
                    {/* Animated icon */}
                    <div className="solution-icon-container-2025 mb-8">
                      <div className="icon-pulse-ring"></div>
                      <div className="icon-orbital-glow"></div>
                      <IconComponent className="solution-icon-2025" size={32} />
                    </div>
                    
                    <h3 className="solution-title-2025 mb-8">
                      {solution.title}
                    </h3>
                    <p className="solution-description-2025">
                      {solution.description}
                    </p>
                    
                    {/* Hover effects */}
                    <div className="card-hover-glow"></div>
                    <div className="card-light-sweep"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Synetic AI Advantage Section */}
      <section className="py-32 px-8 relative">
        <div className="section-divider-2025 absolute top-0"></div>
        <div className="max-w-5xl mx-auto text-center">
          <div className="scroll-fade-in mb-16">
            <p className="text-xl md:text-2xl font-light text-cosmic-white/80 mb-12">
              This is automation without compromise—modular, intelligent, and self-directed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Modular", description: "Plug-and-play architecture" },
              { title: "Autonomous", description: "Self-directing systems" },
              { title: "Self-Optimizing", description: "Continuous improvement" }
            ].map((item, index) => (
              <div key={item.title} className={`scroll-fade-in stagger-${index + 1} group`}>
                <div className="px-8 py-6 rounded-full border border-cosmic-gold/20 relative overflow-hidden hover:border-cosmic-gold/40 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cosmic-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h4 className="text-cosmic-gold font-light mb-2 relative z-10">{item.title}</h4>
                  <p className="text-cosmic-white/60 text-sm relative z-10">{item.description}</p>
                  {/* Pulsing border effect */}
                  <div className="absolute inset-0 rounded-full border border-cosmic-gold/30 opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="min-h-screen flex items-center py-32 px-8 relative cta-section-2025">
        <div className="section-divider-2025 absolute top-0"></div>
        
        {/* Light leak animations */}
        <div className="light-leak-1"></div>
        <div className="light-leak-2"></div>
        <div className="nebula-background"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="scroll-fade-in">
            <div className="cta-title-container">
              <h2 className="cta-title-2025 text-cosmic-gold mb-12">
                Work With Intelligence
              </h2>
              <div className="cta-gold-flare"></div>
            </div>
            
            <p className="scroll-slide-left stagger-2 cta-subtitle-2025 mb-20">
              Ready to transform your business with intelligent automation?
              <br />
              <span className="text-cosmic-gold hero-glow-text possibilities-pulse">Let's explore the possibilities.</span>
            </p>
            
            <div className="scroll-fade-in stagger-3 space-y-10">
              <button className="cta-button-2025 text-xl tracking-wider group">
                <span className="relative z-10 inline-flex items-center">
                  Get Started
                  <svg 
                    className="ml-3 w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="button-portal-effect"></div>
              </button>
              <div className="cta-contact-info">
                <p>Free consultation within 24 hours</p>
                <p className="text-cosmic-gold/90 font-medium tracking-wider hero-glow-text hover-scan">team@syneticai.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSections;
