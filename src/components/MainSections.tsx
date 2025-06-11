
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MainSections = () => {
  const visibleElements = useScrollAnimation();

  const solutions = [
    {
      title: "Intelligent Automation",
      description: "Seamlessly automate complex workflows with precision-engineered AI systems that adapt to your business needs",
      icon: "⚡",
      gradient: "from-cosmic-gold/10 to-transparent"
    },
    {
      title: "CRM Intelligence", 
      description: "Transform customer relationships with AI-powered insights that predict needs and optimize engagement",
      icon: "🎯",
      gradient: "from-cosmic-gold/5 to-transparent"
    },
    {
      title: "Lead Generation",
      description: "Precision-targeted prospect identification with automated engagement that converts opportunities into results",
      icon: "🚀",
      gradient: "from-cosmic-gold/8 to-transparent"
    }
  ];

  return (
    <div className="relative">
      {/* Vision Section */}
      <section id="vision" className="min-h-screen flex items-center py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            id="vision-content"
            data-scroll-animation
            className={`text-center transition-all duration-1000 ${
              visibleElements.has('vision-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-cosmic-gold mb-8">
              Our Vision
            </h2>
            <p className="text-xl md:text-2xl text-cosmic-white/90 mb-16 leading-relaxed max-w-4xl mx-auto font-light">
              Synetic AI envisions a world where automation liberates humanity, empowering you to 
              <span className="text-cosmic-gold font-medium"> dream bigger</span>, 
              <span className="text-cosmic-gold font-medium"> create freely</span>, and 
              <span className="text-cosmic-gold font-medium"> live fully</span>.
            </p>
            
            <div className="mt-20">
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-cosmic-white mb-8">
                Our Mission
              </h3>
              <p className="text-lg md:text-xl text-cosmic-white/70 leading-relaxed max-w-4xl mx-auto font-light">
                We engineer intelligent systems that erase complexity, delivering seamless automation 
                with precision and grace—because your time is priceless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="min-h-screen flex items-center py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div 
            id="solutions-title"
            data-scroll-animation
            className={`text-center mb-20 transition-all duration-1000 ${
              visibleElements.has('solutions-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-cosmic-gold mb-8">
              Solutions That Transform
            </h2>
            <p className="text-lg md:text-xl text-cosmic-white/70 max-w-3xl mx-auto font-light">
              Discover how our intelligent automation reshapes your workflow with precision and elegance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                id={`solution-${index}`}
                data-scroll-animation
                className={`group transition-all duration-700 ${
                  visibleElements.has(`solution-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="premium-card h-full group">
                  <div className="text-3xl mb-6 group-hover:animate-gentle-float transition-all duration-300">{solution.icon}</div>
                  <h3 className="text-xl font-heading font-semibold text-cosmic-gold mb-6">
                    {solution.title}
                  </h3>
                  <p className="text-cosmic-white/70 leading-relaxed font-light">
                    {solution.description}
                  </p>
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="min-h-screen flex items-center py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            id="cta-content"
            data-scroll-animation
            className={`transition-all duration-1000 ${
              visibleElements.has('cta-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-cosmic-gold mb-8">
              Shape Your Future Today
            </h2>
            <p className="text-lg md:text-xl text-cosmic-white/70 mb-16 leading-relaxed font-light">
              Ready to transform your business with intelligent automation? 
              Let's explore the possibilities together.
            </p>
            
            <div className="space-y-8">
              <button className="premium-button text-lg animate-subtle-glow">
                Get Started
              </button>
              <p className="text-cosmic-white/50 text-sm font-light">
                Free consultation within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSections;
