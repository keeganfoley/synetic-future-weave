
import { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { 
  Settings, 
  RefreshCw, 
  Calendar, 
  Link, 
  BarChart3, 
  Users 
} from 'lucide-react';

const MainSections = () => {
  const visibleElements = useScrollReveal();
  const [revealedTexts, setRevealedTexts] = useState<number[]>([]);

  useEffect(() => {
    const scrollElements = document.querySelectorAll('.scroll-fade-in, .scroll-slide-left, .scroll-slide-right');
    scrollElements.forEach(el => {
      if (!el.classList.contains('visible')) {
        el.classList.add('scroll-fade-in');
      }
    });

    // Optimized scroll effects
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      const movingGrid = document.querySelector('.moving-grid-background');
      const visionGrid = document.querySelector('.vision-grid-background');
      
      if (movingGrid) {
        (movingGrid as HTMLElement).style.transform = `translateY(${scrollY * 0.05}px)`;
      }
      if (visionGrid) {
        (visionGrid as HTMLElement).style.transform = `translateY(${scrollY * 0.03}px)`;
      }

      // Text reveal on scroll
      const visionSection = document.getElementById('vision');
      if (visionSection) {
        const rect = visionSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.7) {
          setRevealedTexts([0]);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    {
      title: "Seamless Operations Hub",
      description: "Everything in your business just flows. We connect your calendars, CRMs, forms, emails, and task systems so updates happen everywhere automatically—no double entry, no missed steps.",
      icon: Settings,
      delay: "stagger-1"
    },
    {
      title: "Adaptive Follow-Up Engine", 
      description: "Leads, clients, and internal tasks are followed up with at the perfect time. This system sends smart reminders and updates based on behavior, timing, and workflow stage—so nothing ever slips through.",
      icon: RefreshCw,
      delay: "stagger-2"
    },
    {
      title: "Effortless Scheduling System",
      description: "Meetings book themselves. Clients choose from real-time availability, confirmations are sent instantly, and your calendar stays updated—no coordination needed.",
      icon: Calendar,
      delay: "stagger-3"
    },
    {
      title: "Connected Workflows",
      description: "Your tools finally talk to each other. From form submissions to Slack pings to dashboard updates—everything is synced, so your team and clients are always aligned.",
      icon: Link,
      delay: "stagger-4"
    },
    {
      title: "Auto Insights & Alerts",
      description: "Your business metrics, delivered before you ask. Get clean, AI-generated reports and real-time alerts when something changes—so you can stay ahead, not reactive.",
      icon: BarChart3,
      delay: "stagger-5"
    },
    {
      title: "Long-Term Client Automator",
      description: "Turn every customer into a repeat client. This flow handles check-ins, feedback, upsells, and re-engagements automatically—building loyalty while you focus on growth.",
      icon: Users,
      delay: "stagger-6"
    }
  ];

  return (
    <div className="relative">
      {/* Combined Vision Section */}
      <section id="vision" className="min-h-screen flex items-center py-16 px-8 relative vision-section-2025">
        <div className="vision-grid-background"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="scroll-fade-in vision-title text-cosmic-gold mb-12">
              Our Vision
            </h2>
            <div className={`kinetic-text mb-16 ${revealedTexts.includes(0) ? 'revealed' : ''}`}>
              <p className="combined-vision-text">
                Systems that evolve, adapt, and operate at the speed of thought—eliminating friction with adaptive, self-governing intelligence that transforms your business into an unstoppable force.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="min-h-screen flex items-center py-20 px-8 relative solutions-section-2025">
        <div className="moving-grid-background"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="scroll-fade-in section-title-2025 text-cosmic-gold mb-12">
              Engineered Intelligence
            </h2>
            <p className="scroll-slide-right stagger-2 section-subtitle-2025">
              Real-time infrastructure that adapts and performs without lag.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={solution.title}
                  className={`scroll-fade-in ${solution.delay} group solution-card-2025-optimized`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="solution-card-inner-2025-optimized h-full group transition-all duration-500">
                    {/* Optimized Icon */}
                    <div className="mb-6 flex justify-center relative">
                      <IconComponent className="solution-icon-2025-optimized" size={32} />
                    </div>
                    
                    <h3 className="solution-title-2025 mb-4 text-center">
                      {solution.title}
                    </h3>
                    <p className="solution-description-2025 text-center">
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
      <section id="contact" className="min-h-screen flex items-center py-20 px-8 relative cta-section-2025">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="scroll-fade-in">
            <h2 className="cta-title-2025 text-cosmic-gold mb-8">
              Work With Intelligence
            </h2>
            
            <p className="scroll-slide-left stagger-2 cta-subtitle-2025 mb-16">
              Ready to transform your business with intelligent automation?
              <br />
              <span className="text-cosmic-gold">Let's unlock your next evolution.</span>
            </p>
            
            <div className="scroll-fade-in stagger-3 space-y-8">
              <button className="cta-button-enhanced-optimized group relative">
                <span className="relative z-10 inline-flex items-center">
                  Explore Solutions
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
              <div className="text-cosmic-steel/80 text-base font-light">
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
