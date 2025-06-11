
import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Brain, Zap, Infinity } from 'lucide-react';

const MainSections = () => {
  const visibleElements = useScrollReveal();

  useEffect(() => {
    // Add scroll reveal animations to elements
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
      description: "Seamlessly automate complex workflows with precision-engineered AI systems that adapt and evolve with your business needs.",
      icon: Brain,
      delay: "stagger-1"
    },
    {
      title: "Neural CRM Systems", 
      description: "Transform customer relationships with AI-powered insights that predict needs, optimize engagement, and amplify results.",
      icon: Zap,
      delay: "stagger-2"
    },
    {
      title: "Infinite Automation",
      description: "Elite prospect identification with automated engagement systems that convert opportunities into measurable results.",
      icon: Infinity,
      delay: "stagger-3"
    }
  ];

  return (
    <div className="relative">
      {/* Vision Section */}
      <section id="vision" className="min-h-screen flex items-center py-32 px-8 relative">
        <div className="section-divider absolute top-0"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="scroll-fade-in text-4xl md:text-6xl font-heading font-light text-cosmic-gold mb-16 text-glow-premium">
              Our Vision
            </h2>
            <p className="scroll-slide-left stagger-2 text-2xl md:text-3xl text-cosmic-white/90 mb-24 leading-relaxed max-w-5xl mx-auto font-light text-etched">
              Synetic AI envisions a world where automation liberates humanity, empowering you to 
              <span className="text-cosmic-gold font-normal"> dream bigger</span>, 
              <span className="text-cosmic-gold font-normal"> create freely</span>, and 
              <span className="text-cosmic-gold font-normal"> live fully</span>.
            </p>
            
            <div className="scroll-fade-in stagger-4">
              <h3 className="text-2xl md:text-4xl font-heading font-light text-cosmic-white mb-12">
                Our Mission
              </h3>
              <p className="text-xl md:text-2xl text-cosmic-white/80 leading-relaxed max-w-5xl mx-auto font-light">
                We engineer intelligent systems that erase complexity, delivering seamless automation 
                with precision and grace—because your time is priceless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="min-h-screen flex items-center py-32 px-8 relative">
        <div className="section-divider absolute top-0"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="scroll-fade-in text-4xl md:text-6xl font-heading font-light text-cosmic-gold mb-12 text-glow-premium">
              Engineered Systems That Think for You
            </h2>
            <p className="scroll-slide-right stagger-2 text-xl md:text-2xl text-cosmic-white/80 max-w-4xl mx-auto font-light">
              Discover how our intelligent automation reshapes your workflow with precision and elegance
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={solution.title}
                  className={`scroll-fade-in ${solution.delay} group`}
                >
                  <div className="glass-card p-10 h-full group transition-all duration-700">
                    <div className="text-cosmic-gold mb-8 group-hover:animate-gentle-float transition-all duration-500 relative z-10">
                      <IconComponent size={40} strokeWidth={1} />
                    </div>
                    <h3 className="text-2xl font-heading font-light text-cosmic-gold mb-8 relative z-10">
                      {solution.title}
                    </h3>
                    <p className="text-cosmic-white/80 leading-relaxed font-light text-lg relative z-10">
                      {solution.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="min-h-screen flex items-center py-32 px-8 relative">
        <div className="section-divider absolute top-0"></div>
        {/* Background gradient pulse */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-cosmic-gold/30 to-transparent opacity-50 animate-pulse-subtle"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="scroll-fade-in">
            <h2 className="text-4xl md:text-6xl font-heading font-light text-cosmic-gold mb-12 text-glow-premium">
              Automate the Impossible. Today.
            </h2>
            <p className="scroll-slide-left stagger-2 text-xl md:text-2xl text-cosmic-white/80 mb-20 leading-relaxed font-light max-w-4xl mx-auto">
              Ready to transform your business with intelligent automation? 
              Let's explore the possibilities together.
            </p>
            
            <div className="scroll-fade-in stagger-3 space-y-10">
              <button className="luxury-button text-xl">
                Get Started
              </button>
              <div className="text-cosmic-white/60 text-lg font-light space-y-3">
                <p>Free consultation within 24 hours</p>
                <p className="text-cosmic-gold/90 font-medium tracking-wider">team@syneticai.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSections;
