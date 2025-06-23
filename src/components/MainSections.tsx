
import { useScrollReveal } from '../hooks/useScrollReveal';

const MainSections = () => {
  const visibleElements = useScrollReveal();

  const solutions = [
    {
      title: "Adaptive Engine",
      tagline: "Smart automations that evolve with you",
      icon: "⚡",
      gradient: "from-yellow-400/20 to-orange-500/20"
    },
    {
      title: "Smart Follow Engine", 
      tagline: "Perfect timing, every interaction",
      icon: "🔄",
      gradient: "from-yellow-400/20 to-amber-500/20"
    },
    {
      title: "Schedule Command",
      tagline: "Effortless meeting coordination",
      icon: "📅",
      gradient: "from-yellow-400/20 to-yellow-600/20"
    },
    {
      title: "Workflow Nexus",
      tagline: "Connected systems, seamless flow",
      icon: "🔗",
      gradient: "from-amber-400/20 to-yellow-500/20"
    },
    {
      title: "Intelligence Hub",
      tagline: "Real-time insights, instant alerts",
      icon: "📊",
      gradient: "from-yellow-500/20 to-orange-400/20"
    },
    {
      title: "Client Lifecycle",
      tagline: "Long-term relationships, automated",
      icon: "👥",
      gradient: "from-yellow-400/20 to-amber-600/20"
    }
  ];

  return (
    <div className="relative space-y-16">
      {/* Vision Section */}
      <section 
        id="vision" 
        data-reveal
        className="py-20 px-6 relative"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${
            visibleElements.has('vision') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Our Vision
            </h2>
            
            <div className="max-w-4xl mx-auto glass-gold rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
                We build intelligent systems that think for you—designed to scale, adapt, and impress.
              </p>
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section 
        id="solutions" 
        data-reveal
        className="py-20 px-6 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            visibleElements.has('solutions') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Engineered Intelligence
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real-time infrastructure that adapts and performs without lag
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className={`group glass rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-1000 hover:scale-105 hover:bg-gradient-to-br hover:${solution.gradient} ${
                  visibleElements.has('solutions') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {solution.tagline}
                  </p>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="contact" 
        data-reveal
        className="py-20 px-6 relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${
            visibleElements.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Start Automating Smarter
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
              Ready to transform your business with intelligent automation?
            </p>
            
            <button className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25">
              <span className="relative z-10 flex items-center justify-center">
                Let's Build the Future
                <svg 
                  className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-300 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSections;
