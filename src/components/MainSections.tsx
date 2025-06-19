
import { Cog, RefreshCcw, Calendar, Link, BarChart, Users } from 'lucide-react';

const MainSections = () => {
  const solutions = [
    {
      title: "Seamless Operations Hub",
      description: "Everything flows automatically, everywhere.",
      icon: Cog,
    },
    {
      title: "Adaptive Follow-Up Engine", 
      description: "Smart reminders at perfect timing.",
      icon: RefreshCcw,
    },
    {
      title: "Effortless Scheduling System",
      description: "Meetings book themselves, instantly.",
      icon: Calendar,
    },
    {
      title: "Connected Workflows",
      description: "Tools that finally talk together.",
      icon: Link,
    },
    {
      title: "Auto Insights & Alerts",
      description: "Business metrics delivered before you ask.",
      icon: BarChart,
    },
    {
      title: "Long-Term Client Automator",
      description: "Turn customers into repeat clients.",
      icon: Users,
    }
  ];

  return (
    <div className="relative">
      {/* Vision Section */}
      <section id="vision" className="min-h-screen flex items-center py-16 px-8 relative vision-section-luxury">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="vision-title-luxury">
              Our Vision
            </h2>
            <div className="mb-16">
              <p className="vision-text-luxury">
                We believe automation isn't just a tool—it's the future of intelligent business that evolves, adapts, and operates at the speed of thought.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="min-h-screen flex items-center py-20 px-8 relative solutions-section-luxury">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title-luxury">
              Engineered Intelligence
            </h2>
            <p className="section-subtitle-luxury">
              Real-time infrastructure that adapts and performs without lag.
            </p>
          </div>

          <div className="luxury-services-grid">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={solution.title}
                  className="luxury-feature-card group"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animation: 'fadeInUp 0.8s ease-out forwards'
                  }}
                >
                  <IconComponent className="luxury-card-icon" />
                  
                  <h3 className="luxury-card-title">
                    {solution.title}
                  </h3>
                  <p className="luxury-card-description">
                    {solution.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 px-8 relative cta-section-luxury">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div>
            <h2 className="cta-title-luxury">
              Let's Build the Future
            </h2>
            
            <p className="cta-subtitle-luxury">
              Ready to transform your business with intelligent automation?
              <br />
              <span className="text-luxury-gold">Contact us to automate your business.</span>
            </p>
            
            <div className="space-y-8">
              <button className="cta-button-luxury group relative">
                <span className="relative z-10 inline-flex items-center">
                  Let's Build Together
                  <svg 
                    className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSections;
