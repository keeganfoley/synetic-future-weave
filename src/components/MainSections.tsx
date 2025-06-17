
import { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Brain, Zap, Infinity } from 'lucide-react';

const MainSections = () => {
  const visibleElements = useScrollReveal();
  const [revealedTexts, setRevealedTexts] = useState<number[]>([]);

  useEffect(() => {
    const scrollElements = document.querySelectorAll('.scroll-fade-in, .scroll-slide-left, .scroll-slide-right');
    scrollElements.forEach(el => {
      if (!el.classList.contains('visible')) {
        el.classList.add('scroll-fade-in');
      }
    });

    // Kinetic text reveal on scroll
    const handleScroll = () => {
      const visionSection = document.getElementById('vision');
      if (visionSection) {
        const rect = visionSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.7) {
          setRevealedTexts([0, 1]);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    {
      title: "Cognitive Intelligence",
      description: "Precision-engineered AI systems that adapt and evolve with your business operations.",
      icon: Brain,
      delay: "stagger-1"
    },
    {
      title: "Neural CRM Systems", 
      description: "AI-powered insights that predict customer needs and amplify conversion results.",
      icon: Zap,
      delay: "stagger-2"
    },
    {
      title: "Infinite Automation",
      description: "Elite prospect identification with automated engagement systems that never sleep.",
      icon: Infinity,
      delay: "stagger-3"
    }
  ];

  return (
    <div className="relative">
      {/* Vision Section */}
      <section id="vision" className="min-h-screen flex items-center py-16 px-8 relative vision-section-2025">
        <div className="vision-grid-background"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="scroll-fade-in vision-title text-cosmic-gold mb-12">
              Our Vision
            </h2>
            <div className={`kinetic-text mb-16 ${revealedTexts.includes(0) ? 'revealed' : ''}`}>
              <p className="vision-text">
                Systems that evolve, adapt, and operate at the speed of thought.
              </p>
            </div>
            
            <div className="scroll-fade-in stagger-2">
              <h3 className="vision-title text-cosmic-gold mb-8">
                Our Mission
              </h3>
              <div className={`kinetic-text ${revealedTexts.includes(1) ? 'revealed' : ''}`}>
                <p className="mission-text">
                  To eliminate friction with adaptive, self-governing intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="min-h-screen flex items-center py-20 px-8 relative solutions-section-2025">
        <div className="moving-grid-background"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="scroll-fade-in section-title-2025 text-cosmic-gold mb-12">
              Engineered Intelligence
            </h2>
            <p className="scroll-slide-right stagger-2 section-subtitle-2025">
              Real-time infrastructure that adapts and performs without lag.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={solution.title}
                  className={`scroll-fade-in ${solution.delay} group solution-card-2025`}
                >
                  <div className="solution-card-inner-2025 h-full group transition-all duration-700">
                    {/* Enhanced Animated Icon */}
                    <div className="mb-8 flex justify-center relative">
                      <IconComponent className="solution-icon-2025" size={40} />
                      <div className="icon-ambient-glow"></div>
                    </div>
                    
                    <h3 className="solution-title-2025 mb-6 text-center">
                      {solution.title}
                    </h3>
                    <p className="solution-description-2025 text-center">
                      {solution.description}
                    </p>
                    
                    {/* Magnetic hover effects */}
                    <div className="magnetic-hover-effect"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 px-8 relative cta-section-2025">
        <div className="orbiting-specks"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="scroll-fade-in">
            <h2 className="cta-title-2025 text-cosmic-gold mb-8">
              Work With Intelligence
            </h2>
            
            <p className="scroll-slide-left stagger-2 cta-subtitle-2025 mb-16">
              Ready to transform your business with intelligent automation?
              <br />
              <span className="text-cosmic-gold">Let's unlock your next evolution.</span>
            </p>
            
            <div className="scroll-fade-in stagger-3 space-y-8">
              <button className="cta-button-enhanced group relative">
                <span className="relative z-10 inline-flex items-center">
                  Explore Solutions
                  <svg 
                    className="ml-3 w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="glowing-outline"></div>
              </button>
              <div className="text-cosmic-white/70 text-base font-light">
                <p>Full automation blueprint delivered within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSections;
