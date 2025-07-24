import { useState, memo, FC } from 'react';
import { ChevronDown } from 'lucide-react';
import { CaseStudy } from '@/types/components';
import { cn } from '@/lib/utils';
import './CaseStudies.css';

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

const CaseStudyCard: FC<CaseStudyCardProps> = memo(({ study, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={cn(
        "case-study-card luxury-glass-card",
        "bg-cosmic-black/30 backdrop-blur-xl",
        "border border-cosmic-gold/20 rounded-2xl overflow-hidden",
        "transition-all duration-500 hover:translate-y-[-6px] hover:scale-[1.02]",
        "hover:border-cosmic-gold/40",
        `scroll-fade-in stagger-${index + 1}`
      )}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-8 flex items-center justify-between group text-left"
      >
        <h3 className="text-2xl md:text-3xl font-bold font-heading luxury-heading-text transition-all duration-500">
          <span className="metric-highlight luxury-metallic-text">{study.title}</span>
        </h3>
        <div className="chevron-luxury-wrapper">
          <ChevronDown 
            className={cn(
              "w-6 h-6 luxury-chevron transition-all duration-500 flex-shrink-0 ml-4",
              isExpanded && "rotate-180"
            )} 
          />
        </div>
      </button>

      <div 
        className={cn(
          "case-study-content overflow-hidden transition-all duration-500 ease-in-out",
          isExpanded ? "max-h-[1500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-8 pb-8">
          <p className="text-lg text-cosmic-white/90 mb-6 leading-relaxed luxury-content-text">
            <span className="font-bold luxury-accent-text">{study.company}</span>: {study.subtitle}
          </p>

          {study.overview && (
            <div className="mb-8">
              <h4 className="text-xl font-heading font-bold luxury-section-heading mb-4">Overview</h4>
              <p className="text-slate-300/90 leading-relaxed text-base luxury-body-text">{study.overview}</p>
            </div>
          )}

          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-heading font-bold luxury-section-heading mb-4">The Challenge</h4>
              <p className="text-slate-300/90 leading-relaxed text-base luxury-body-text">{study.challenge}</p>
            </div>

            <div>
              <h4 className="text-xl font-heading font-bold luxury-section-heading mb-4">How Synetic AI Helped</h4>
              <div className="space-y-4">
                {study.solution.map((paragraph, idx) => {
                  // Check if this paragraph contains labeled sections
                  if (paragraph.includes('\n\n') && paragraph.includes(':')) {
                    const [intro, ...sections] = paragraph.split('\n\n');
                    return (
                      <div key={idx} className="space-y-4">
                        <p className="text-slate-300/90 leading-relaxed text-base luxury-body-text">{intro}</p>
                        <div className="space-y-3 ml-4">
                          {sections.map((section, sectionIdx) => {
                            const [label, ...content] = section.split(': ');
                            return (
                              <div key={sectionIdx} className="space-y-1">
                                <p className="luxury-accent-text font-medium">{label}:</p>
                                <p className="text-slate-300/90 leading-relaxed ml-4 luxury-body-text">
                                  {content.join(': ')}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }
                  return (
                    <p key={idx} className="text-slate-300/90 leading-relaxed text-base luxury-body-text">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-heading font-bold luxury-section-heading mb-4">Results</h4>
              <div className="space-y-4">
                {study.results.map((paragraph, idx) => {
                  // Check if this paragraph contains bullet points
                  if (paragraph.includes('•')) {
                    const [intro, ...bullets] = paragraph.split('\n');
                    return (
                      <div key={idx} className="space-y-2">
                        {intro && <p className="text-slate-300/90 leading-relaxed text-base mb-3 luxury-body-text">{intro}</p>}
                        <ul className="space-y-2 ml-4">
                          {bullets.map((bullet, bulletIdx) => {
                            const bulletText = bullet.replace('•', '').trim();
                            if (bulletText) {
                              return (
                                <li key={bulletIdx} className="flex items-start luxury-list-item">
                                  <span className="luxury-bullet-icon mr-2 mt-1">→</span>
                                  <span className="text-slate-300/90 leading-relaxed">{bulletText}</span>
                                </li>
                              );
                            }
                            return null;
                          })}
                        </ul>
                      </div>
                    );
                  }
                  return (
                    <p key={idx} className="text-slate-300/90 leading-relaxed text-base luxury-body-text">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
});

CaseStudyCard.displayName = 'CaseStudyCard';

export default CaseStudyCard;