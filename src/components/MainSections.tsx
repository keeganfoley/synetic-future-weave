import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MainSections = () => {
  useScrollAnimation();

  const controlModules = [
    {
      title: "Adaptive Engine",
      tagline: "Smart automations that evolve with you.",
      icon: "cog"
    },
    {
      title: "Follow-Up Matrix", 
      tagline: "Perfect timing, every interaction.",
      icon: "refresh-ccw"
    },
    {
      title: "Schedule Command",
      tagline: "Effortless meeting coordination.",
      icon: "calendar"
    },
    {
      title: "Workflow Nexus",
      tagline: "Connected systems, seamless flow.",
      icon: "link"
    },
    {
      title: "Intelligence Hub",
      tagline: "Real-time insights, instant alerts.",
      icon: "bar-chart"
    },
    {
      title: "Client Lifecycle",
      tagline: "Long-term relationships, automated.",
      icon: "users"
    }
  ];

  const renderModuleIcon = (iconType: string) => {
    const iconProps = {
      className: "module-icon",
      style: { willChange: 'transform' }
    };

    switch (iconType) {
      case 'cog':
        return (
          <div className="relative">
            <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1m15.5-6.5L19 4.5M4.5 19.5L7 17M19 19.5l-2.5-2.5M4.5 4.5L7 7"/>
            </svg>
          </div>
        );
      case 'refresh-ccw':
        return (
          <div className="relative">
            <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="m3 2 3 6 6-3"/>
              <path d="M21 12A9 9 0 0 0 6 5.3L4 8"/>
              <path d="m21 22-3-6-6 3"/>
              <path d="M3 12a9 9 0 0 0 15 6.7l2-2.7"/>
            </svg>
          </div>
        );
      case 'calendar':
        return (
          <div className="relative">
            <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 2v4"/>
              <path d="M16 2v4"/>
              <rect width="18" height="18" x="3" y="4" rx="2"/>
              <path d="M3 10h18"/>
            </svg>
          </div>
        );
      case 'link':
        return (
          <div className="relative">
            <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
          </div>
        );
      case 'bar-chart':
        return (
          <div className="relative">
            <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 3v18h18"/>
              <path d="M7 16V9"/>
              <path d="M12 16V6"/>
              <path d="M17 16v-3"/>
            </svg>
          </div>
        );
      case 'users':
        return (
          <div className="relative">
            <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      {/* Vision Section with 3D Panel */}
      <section id="vision" className="min-h-screen flex items-center py-12 px-6 relative vision-control-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-center scroll-reveal">
            <h2 className="vision-title-system mb-8 gold-3d" data-text="Our Vision">
              Our Vision
            </h2>
            <div className="mb-12">
              <div className="panel-3d p-8 max-w-2xl mx-auto">
                <p className="vision-statement-system">
                  We build intelligent systems that think for you—designed to scale, adapt, and impress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineered Intelligence Section with 3D Grid */}
      <section id="solutions" className="min-h-screen flex items-center py-16 px-6 relative solutions-control-center">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="section-title-system mb-8 gold-3d" data-text="Engineered Intelligence">
              Engineered Intelligence
            </h2>
            <p className="section-subtitle-system">
              Real-time infrastructure that adapts and performs without lag.
            </p>
          </div>

          <div className="control-modules-grid">
            {controlModules.map((module, index) => (
              <div
                key={module.title}
                className="control-module group scroll-reveal panel-3d"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  transform: `translateZ(${index * 5}px)`
                }}
              >
                {/* Icon with 3D Depth */}
                <div className="flex justify-center mb-4">
                  <div className="icon-3d-container">
                    {renderModuleIcon(module.icon)}
                  </div>
                </div>
                
                <h3 className="module-title gold-3d" data-text={module.title}>
                  {module.title}
                </h3>
                <p className="module-tagline">
                  {module.tagline}
                </p>

                {/* 3D Connection Lines */}
                <div className="module-connector-lines"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Cinematic Depth */}
      <section id="contact" className="min-h-screen flex items-center py-16 px-6 relative cta-control-center">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="scroll-reveal">
            <h2 className="cta-title-system mb-6 gold-3d" data-text="Let's Build the Future">
              Let's Build the Future
            </h2>
            
            <p className="cta-subtitle-system mb-12">
              Ready to transform your business with intelligent automation?
              <br />
              <span className="text-engineered-gold font-medium">Contact us to automate your business.</span>
            </p>
            
            <div className="space-y-6">
              <button className="cta-button-system group relative panel-3d">
                <span className="relative z-10 inline-flex items-center">
                  Let's Build Together
                  <svg 
                    className="ml-2 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" 
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

        {/* Ambient 3D Lighting */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(205, 161, 35, 0.3) 0%, transparent 70%)',
              transform: 'translate(-50%, -50%) translateZ(100px)',
              filter: 'blur(40px)',
              animation: 'floating3D 12s ease-in-out infinite'
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default MainSections;
