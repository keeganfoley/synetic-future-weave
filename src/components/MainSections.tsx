
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MainSections = () => {
  const visibleElements = useScrollAnimation();

  const solutions = [
    {
      title: "Task Automation",
      description: "Intelligent workflows that eliminate repetitive tasks and amplify your productivity",
      icon: "⚡"
    },
    {
      title: "CRM Integration", 
      description: "Seamless customer relationship management with AI-powered insights",
      icon: "🎯"
    },
    {
      title: "Lead Generation",
      description: "Precision-targeted prospect identification and engagement automation",
      icon: "🚀"
    }
  ];

  return (
    <div className="relative">
      {/* Vision Section */}
      <section id="vision" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            id="vision-content"
            data-scroll-animation
            className={`text-center transition-all duration-1000 ${
              visibleElements.has('vision-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-4xl md:text-6xl font-cosmic font-bold text-cosmic-gold mb-8 gold-glow">
              Our Vision
            </h2>
            <p className="text-2xl md:text-3xl text-cosmic-white mb-12 leading-relaxed max-w-4xl mx-auto">
              Synetic AI envisions a world where automation liberates humanity, empowering you to 
              <span className="text-cosmic-gold"> dream bigger</span>, 
              <span className="text-cosmic-gold"> create freely</span>, and 
              <span className="text-cosmic-gold"> live fully</span>.
            </p>
            
            <div className="mt-16">
              <h3 className="text-3xl md:text-4xl font-cosmic font-semibold text-cosmic-white mb-8">
                Our Mission
              </h3>
              <p className="text-xl md:text-2xl text-cosmic-white/90 leading-relaxed max-w-5xl mx-auto">
                We engineer intelligent systems that erase complexity, delivering seamless automation 
                with precision and grace—because your time is priceless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div 
            id="solutions-title"
            data-scroll-animation
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has('solutions-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-4xl md:text-6xl font-cosmic font-bold text-cosmic-gold mb-8 gold-glow">
              Solutions That Transform
            </h2>
            <p className="text-xl md:text-2xl text-cosmic-white/80 max-w-3xl mx-auto">
              Discover how our intelligent automation reshapes your workflow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                id={`solution-${index}`}
                data-scroll-animation
                className={`group cursor-pointer transition-all duration-700 ${
                  visibleElements.has(`solution-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-cosmic-black/50 backdrop-blur-sm border border-cosmic-gold/20 rounded-xl p-8 h-full hover:border-cosmic-gold/60 hover:bg-cosmic-gold/5 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="text-4xl mb-6 group-hover:animate-float">{solution.icon}</div>
                  <h3 className="text-2xl font-cosmic font-semibold text-cosmic-gold mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-cosmic-white/80 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            id="cta-content"
            data-scroll-animation
            className={`transition-all duration-1000 ${
              visibleElements.has('cta-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-4xl md:text-6xl font-cosmic font-bold text-cosmic-gold mb-8 gold-glow">
              Shape Your Future Today
            </h2>
            <p className="text-xl md:text-2xl text-cosmic-white/80 mb-12 leading-relaxed">
              Ready to transform your business with intelligent automation? 
              Let's explore the possibilities together.
            </p>
            
            <div className="space-y-6">
              <button className="cosmic-button text-xl animate-glow hover:animate-none">
                Book a Demo
              </button>
              <p className="text-cosmic-white/60">
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
