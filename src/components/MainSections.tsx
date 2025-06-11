
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MainSections = () => {
  const visibleElements = useScrollAnimation();

  const solutions = [
    {
      title: "Engineered Intelligence",
      description: "Seamlessly automate complex workflows with precision-engineered AI systems that adapt and evolve with your business needs.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "Cognitive CRM Systems", 
      description: "Transform customer relationships with AI-powered insights that predict needs, optimize engagement, and amplify results.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Precision Lead Generation",
      description: "Elite prospect identification with automated engagement systems that convert opportunities into measurable results.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative">
      {/* Vision Section */}
      <section id="vision" className="min-h-screen flex items-center py-24 px-8 relative">
        <div className="section-divider absolute top-0"></div>
        <div className="max-w-5xl mx-auto">
          <div 
            id="vision-content"
            data-scroll-animation
            className={`text-center transition-all duration-1000 ${
              visibleElements.has('vision-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-normal text-cosmic-gold mb-12 text-glow-subtle">
              Our Vision
            </h2>
            <p className="text-xl md:text-2xl text-cosmic-white/90 mb-20 leading-relaxed max-w-4xl mx-auto font-light">
              Synetic AI envisions a world where automation liberates humanity, empowering you to 
              <span className="text-cosmic-gold font-medium"> dream bigger</span>, 
              <span className="text-cosmic-gold font-medium"> create freely</span>, and 
              <span className="text-cosmic-gold font-medium"> live fully</span>.
            </p>
            
            <div className="mt-20">
              <h3 className="text-xl md:text-3xl font-heading font-normal text-cosmic-white mb-8">
                Our Mission
              </h3>
              <p className="text-lg md:text-xl text-cosmic-white/80 leading-relaxed max-w-4xl mx-auto font-light">
                We engineer intelligent systems that erase complexity, delivering seamless automation 
                with precision and grace—because your time is priceless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="min-h-screen flex items-center py-24 px-8 relative">
        <div className="section-divider absolute top-0"></div>
        <div className="max-w-6xl mx-auto">
          <div 
            id="solutions-title"
            data-scroll-animation
            className={`text-center mb-20 transition-all duration-1000 ${
              visibleElements.has('solutions-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-normal text-cosmic-gold mb-10 text-glow-subtle">
              Engineered Systems That Think for You
            </h2>
            <p className="text-lg md:text-xl text-cosmic-white/80 max-w-3xl mx-auto font-light">
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
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="glass-card p-8 h-full group transition-all duration-500">
                  <div className="text-cosmic-gold mb-6 group-hover:animate-gentle-float transition-all duration-300 relative z-10">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-heading font-normal text-cosmic-gold mb-6 relative z-10">
                    {solution.title}
                  </h3>
                  <p className="text-cosmic-white/80 leading-relaxed font-light relative z-10">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="min-h-screen flex items-center py-24 px-8 relative">
        <div className="section-divider absolute top-0"></div>
        <div className="max-w-4xl mx-auto text-center">
          <div 
            id="cta-content"
            data-scroll-animation
            className={`transition-all duration-1000 ${
              visibleElements.has('cta-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="section-divider mb-12 max-w-md mx-auto"></div>
            <h2 className="text-3xl md:text-5xl font-heading font-normal text-cosmic-gold mb-10 text-glow-subtle animate-pulse-subtle">
              Automate the Impossible. Today.
            </h2>
            <p className="text-lg md:text-xl text-cosmic-white/80 mb-16 leading-relaxed font-light">
              Ready to transform your business with intelligent automation? 
              Let's explore the possibilities together.
            </p>
            
            <div className="space-y-8">
              <button className="luxury-button text-lg animate-pulse-subtle">
                Get Started
              </button>
              <div className="text-cosmic-white/60 text-sm font-light space-y-2">
                <p>Free consultation within 24 hours</p>
                <p className="text-cosmic-gold/80">team@syneticai.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSections;
