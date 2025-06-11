
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MainSections = () => {
  const visibleElements = useScrollAnimation();

  const solutions = [
    {
      title: "Engineered Intelligence",
      description: "Seamlessly automate complex workflows with precision-engineered AI systems that adapt and evolve with your business needs",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Cognitive CRM Systems", 
      description: "Transform customer relationships with AI-powered insights that predict needs, optimize engagement, and amplify results",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Precision Lead Generation",
      description: "Elite prospect identification with automated engagement systems that convert opportunities into measurable results",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative">
      {/* Vision Section */}
      <section id="vision" className="min-h-screen flex items-center py-24 px-6 relative">
        <div className="section-divider absolute top-0"></div>
        <div className="max-w-6xl mx-auto">
          <div 
            id="vision-content"
            data-scroll-animation
            className={`text-center transition-all duration-1000 ${
              visibleElements.has('vision-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-cosmic-gold mb-12 text-glow">
              Our Vision
            </h2>
            <p className="text-2xl md:text-3xl text-cosmic-white/90 mb-20 leading-relaxed max-w-5xl mx-auto font-light text-depth">
              Synetic AI envisions a world where automation liberates humanity, empowering you to 
              <span className="text-cosmic-gold font-medium"> dream bigger</span>, 
              <span className="text-cosmic-gold font-medium"> create freely</span>, and 
              <span className="text-cosmic-gold font-medium"> live fully</span>.
            </p>
            
            <div className="mt-24">
              <h3 className="text-2xl md:text-4xl font-heading font-semibold text-cosmic-white mb-10 text-depth">
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
      <section id="solutions" className="min-h-screen flex items-center py-24 px-6 relative">
        <div className="section-divider absolute top-0"></div>
        <div className="max-w-7xl mx-auto">
          <div 
            id="solutions-title"
            data-scroll-animation
            className={`text-center mb-24 transition-all duration-1000 ${
              visibleElements.has('solutions-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-cosmic-gold mb-12 text-glow">
              Engineered Systems That Think for You
            </h2>
            <p className="text-xl md:text-2xl text-cosmic-white/80 max-w-4xl mx-auto font-light text-depth">
              Discover how our intelligent automation reshapes your workflow with precision and elegance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                id={`solution-${index}`}
                data-scroll-animation
                className={`group transition-all duration-700 ${
                  visibleElements.has(`solution-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="elite-card h-full group">
                  <div className="text-cosmic-gold mb-8 group-hover:animate-gentle-float transition-all duration-300 relative z-10">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-cosmic-gold mb-8 relative z-10 text-glow">
                    {solution.title}
                  </h3>
                  <p className="text-cosmic-white/80 leading-relaxed font-light text-lg relative z-10">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="min-h-screen flex items-center py-24 px-6 relative">
        <div className="section-divider absolute top-0"></div>
        <div className="max-w-5xl mx-auto text-center">
          <div 
            id="cta-content"
            data-scroll-animation
            className={`transition-all duration-1000 ${
              visibleElements.has('cta-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-cosmic-gold mb-12 text-glow">
              Automate the Impossible. Today.
            </h2>
            <p className="text-xl md:text-2xl text-cosmic-white/80 mb-20 leading-relaxed font-light text-depth">
              Ready to transform your business with intelligent automation? 
              Let's explore the possibilities together.
            </p>
            
            <div className="space-y-12">
              <button className="elite-button text-xl animate-pulse-glow">
                Let's Build Something Intelligent
              </button>
              <p className="text-cosmic-white/60 text-lg font-light">
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
