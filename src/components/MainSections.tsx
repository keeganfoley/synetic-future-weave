
const MainSections = () => {
  const solutions = [
    {
      title: "Seamless Operations Hub",
      description: "Everything in your business just flows. We connect your calendars, CRMs, forms, emails, and task systems so updates happen everywhere automatically—no double entry, no missed steps.",
      icon: "cog",
      animationClass: "icon-cog"
    },
    {
      title: "Adaptive Follow-Up Engine", 
      description: "Leads, clients, and internal tasks are followed up with at the perfect time. This system sends smart reminders and updates based on behavior, timing, and workflow stage—so nothing ever slips through.",
      icon: "refresh-ccw",
      animationClass: "icon-refresh"
    },
    {
      title: "Effortless Scheduling System",
      description: "Meetings book themselves. Clients choose from real-time availability, confirmations are sent instantly, and your calendar stays updated—no coordination needed.",
      icon: "calendar",
      animationClass: "icon-calendar"
    },
    {
      title: "Connected Workflows",
      description: "Your tools finally talk to each other. From form submissions to Slack pings to dashboard updates—everything is synced, so your team and clients are always aligned.",
      icon: "link",
      animationClass: "icon-link"
    },
    {
      title: "Auto Insights & Alerts",
      description: "Your business metrics, delivered before you ask. Get clean, AI-generated reports and real-time alerts when something changes—so you can stay ahead, not reactive.",
      icon: "bar-chart-horizontal",
      animationClass: "icon-chart"
    },
    {
      title: "Long-Term Client Automator",
      description: "Turn every customer into a repeat client. This flow handles check-ins, feedback, upsells, and re-engagements automatically—building loyalty while you focus on growth.",
      icon: "users",
      animationClass: "icon-users"
    }
  ];

  const renderIcon = (iconType: string, animationClass: string) => {
    const iconProps = {
      className: `w-8 h-8 text-[#F4C663] ${animationClass}`,
      style: { willChange: 'transform' }
    };

    switch (iconType) {
      case 'cog':
        return (
          <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
        );
      case 'refresh-ccw':
        return (
          <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m3 2 3 6 6-3"/>
            <path d="M21 12A9 9 0 0 0 6 5.3L4 8"/>
            <path d="m21 22-3-6-6 3"/>
            <path d="M3 12a9 9 0 0 0 15 6.7l2-2.7"/>
          </svg>
        );
      case 'calendar':
        return (
          <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 2v4"/>
            <path d="M16 2v4"/>
            <rect width="18" height="18" x="3" y="4" rx="2"/>
            <path d="M3 10h18"/>
          </svg>
        );
      case 'link':
        return (
          <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>
        );
      case 'bar-chart-horizontal':
        return (
          <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 3v18h18"/>
            <path d="M7 16V9"/>
            <path d="M12 16V6"/>
            <path d="M17 16v-3"/>
          </svg>
        );
      case 'users':
        return (
          <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      {/* Vision Section - Static */}
      <section id="vision" className="min-h-screen flex items-center py-16 px-8 relative vision-section-2025">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="vision-title mb-12">
              Our Vision
            </h2>
            <div className="mb-16">
              <p className="combined-vision-text">
                Systems that evolve, adapt, and operate at the speed of thought—eliminating friction with adaptive, self-governing intelligence that transforms your business into an unstoppable force.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section - Outlined Icon Cards */}
      <section id="solutions" className="min-h-screen flex items-center py-20 px-8 relative solutions-section-2025">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="section-title-2025 mb-12">
              Engineered Intelligence
            </h2>
            <p className="section-subtitle-2025">
              Real-time infrastructure that adapts and performs without lag.
            </p>
          </div>

          <div className="services-grid">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className="outlined-icon-card group"
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  {renderIcon(solution.icon, solution.animationClass)}
                </div>
                
                <h3 className="card-title mb-4">
                  {solution.title}
                </h3>
                <p className="card-description">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Clean Design */}
      <section id="contact" className="min-h-screen flex items-center py-20 px-8 relative cta-section-2025">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div>
            <h2 className="cta-title-2025 mb-8">
              Work With Intelligence
            </h2>
            
            <p className="cta-subtitle-2025 mb-16">
              Ready to transform your business with intelligent automation?
              <br />
              <span style={{ color: '#F4C663' }}>Let's unlock your next evolution.</span>
            </p>
            
            <div className="space-y-8">
              <button className="cta-button-enhanced-clean group relative">
                <span className="relative z-10 inline-flex items-center">
                  Explore Solutions
                  <svg 
                    className="ml-3 w-5 h-5 transition-transform duration-150 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <div className="text-base font-light" style={{ color: 'rgba(180, 180, 180, 0.8)' }}>
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
