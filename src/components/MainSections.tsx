
import { 
  Settings, 
  RefreshCw, 
  Calendar, 
  Link, 
  BarChart3, 
  Users 
} from 'lucide-react';

const MainSections = () => {
  const solutions = [
    {
      title: "Seamless Operations Hub",
      description: "Everything in your business just flows. We connect your calendars, CRMs, forms, emails, and task systems so updates happen everywhere automatically—no double entry, no missed steps.",
      icon: Settings,
      iconClass: "icon-gear"
    },
    {
      title: "Adaptive Follow-Up Engine", 
      description: "Leads, clients, and internal tasks are followed up with at the perfect time. This system sends smart reminders and updates based on behavior, timing, and workflow stage—so nothing ever slips through.",
      icon: RefreshCw,
      iconClass: "icon-refresh"
    },
    {
      title: "Effortless Scheduling System",
      description: "Meetings book themselves. Clients choose from real-time availability, confirmations are sent instantly, and your calendar stays updated—no coordination needed.",
      icon: Calendar,
      iconClass: "icon-calendar"
    },
    {
      title: "Connected Workflows",
      description: "Your tools finally talk to each other. From form submissions to Slack pings to dashboard updates—everything is synced, so your team and clients are always aligned.",
      icon: Link,
      iconClass: "icon-link"
    },
    {
      title: "Auto Insights & Alerts",
      description: "Your business metrics, delivered before you ask. Get clean, AI-generated reports and real-time alerts when something changes—so you can stay ahead, not reactive.",
      icon: BarChart3,
      iconClass: "icon-chart"
    },
    {
      title: "Long-Term Client Automator",
      description: "Turn every customer into a repeat client. This flow handles check-ins, feedback, upsells, and re-engagements automatically—building loyalty while you focus on growth.",
      icon: Users,
      iconClass: "icon-users"
    }
  ];

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

      {/* Solutions Section - Clean Cards with Icon Animations */}
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

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={solution.title}
                  className="solution-card-2025-clean h-full group"
                >
                  {/* Icon with specific animation */}
                  <div className="mb-6 flex justify-center relative">
                    <IconComponent 
                      className={solution.iconClass} 
                      size={32} 
                    />
                  </div>
                  
                  <h3 className="solution-title-2025 text-center">
                    {solution.title}
                  </h3>
                  <p className="solution-description-2025 text-center">
                    {solution.description}
                  </p>
                </div>
              );
            })}
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
