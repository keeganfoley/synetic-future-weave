import { forwardRef, memo } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionProps } from '@/types/section.types';
import { CaseStudy } from '@/types/components';
import SectionHeader from './ui/SectionHeader';
import CaseStudyCard from './CaseStudyCard';
import './CaseStudies.css';

const caseStudies: CaseStudy[] = [
  {
    id: "northslope",
    title: "0 to 5 Properties + $25,000/Month Revenue Using AI",
    subtitle: "We built AI tools that scale their property analysis and streamline portfolio management.",
    company: "North Slope Real Estate",
    overview: "North Slope Real Estate is a short-term rental investment and property management firm specializing in high-performing Airbnb listings. As they expanded their portfolio, they recognized the need for more sophisticated tools to maintain their edge in a competitive market.",
    challenge: "North Slope was successfully managing their properties but knew they could do better. Their data lived in multiple platforms, and while their manual analysis worked, it was becoming time-intensive as they scaled. They wanted to make faster, more informed decisions to accelerate their growth.",
    solution: [
      "We partnered with North Slope to build automation tools that enhanced their existing processes:",
      "Market Intelligence Engine: Automated their market research by scanning rental data, pricing trends, and occupancy rates to surface the best opportunities faster\n\nInvestment Dashboard: Consolidated their analysis tools into one platform, making it easier to compare properties and project ROI\n\nOperations Hub: Unified their booking data, reviews, and financials into a single dashboard for clearer portfolio oversight\n\nPerformance Tracking: Added automated reporting to spot trends and opportunities they might have missed manually"
    ],
    results: [
      "North Slope added $25,000+ in monthly revenue within a year by making faster, data-backed decisions. What used to take days of analysis now happens in minutes. They've grown from their initial properties to five profitable listings, with systems ready to handle their continued expansion. We remain their technology partner, evolving their tools as their portfolio grows."
    ],
    images: ["placeholder3.jpg"]
  },
  {
    id: "toybuster",
    title: "$3,000 to $60,000/Month Revenue (2,000% Growth)",
    subtitle: "We automated their e-commerce workflows to unlock their growth potential.",
    company: "Toybuster",
    overview: "Toybuster is an e-commerce company specializing in wholesale and retail arbitrage across major online marketplaces. They had built a profitable business but recognized that manual processes were limiting their ability to scale.",
    challenge: "Toybuster's team was spending most of their time on operational tasks—sourcing products, managing inventory, and coordinating with suppliers. While their business model was solid, these manual processes meant they couldn't pursue all the opportunities they identified.",
    solution: [
      "We worked with Toybuster to automate their core operations without disrupting what was already working:",
      "Product Discovery System: Enhanced their sourcing by automatically scanning marketplaces for products that match their proven criteria\n\nSupplier Coordination: Streamlined their existing vendor relationships with automated outreach and follow-up workflows\n\nInventory Intelligence: Built on their tracking methods to add predictive restocking and demand forecasting\n\nPerformance Analytics: Created dashboards that give them deeper insights into margins and opportunities"
    ],
    results: [
      "Toybuster grew from $3,000 to $60,000 in monthly revenue by focusing on strategy instead of spreadsheets. Our automation freed up 95% of their time previously spent on repetitive tasks, allowing them to pursue more opportunities. They now operate with the efficiency of a much larger team while maintaining the agility that made them successful. We continue to refine their systems as they discover new growth avenues."
    ],
    images: ["placeholder1.jpg"]
  }
];

const CaseStudies = forwardRef<HTMLElement, SectionProps>(({ className }, ref) => {
  useScrollReveal();

  return (
    <section ref={ref} id="case-studies" className={`py-40 relative overflow-hidden ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-8">
        <SectionHeader 
          title="Case Studies"
          subtitle="See how we've transformed businesses with AI-powered automation"
          titleClassName="text-cosmic-white"
          className="mb-20"
        />

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

CaseStudies.displayName = 'CaseStudies';

export default memo(CaseStudies);