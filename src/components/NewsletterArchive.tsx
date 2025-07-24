import { useState, memo, forwardRef } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionProps } from '@/types/section.types';
import SectionHeader from './ui/SectionHeader';
import { cn } from '@/lib/utils';
import './NewsletterArchive.css';

interface Newsletter {
  id: number;
  date: string;
  highlights: string[];
  pdfLink: string;
}

const newsletters: Newsletter[] = [
  {
    id: 1,
    date: "Friday, June 27, 2025",
    highlights: [
      "Claude AI democratizes app creation, allowing anyone to build AI-powered applications with ease.",
      "Empathetic AI now rivals human emotional intelligence, reshaping customer service paradigms.",
      "Generative AI is breaking boundaries, producing creative content that rivals human artistry.",
      "Facetune's playful AI beard filter—experiment with new looks effortlessly!",
      "40% of small businesses integrate AI, marking a significant leap in adoption and innovation."
    ],
    pdfLink: "https://lnkd.in/e426cBfR"
  },
  {
    id: 2,
    date: "Thursday, July 3, 2025",
    highlights: [
      "MIT's AI elevates robots to jump 41% higher, revolutionizing efficiency in warehouses.",
      "AI speeds up cancer drug discovery, promising faster, life-saving treatments.",
      "Language models streamline chemical research, unleashing rapid scientific progress.",
      "Have fun with Looking Glass Liteforms: create engaging 3D AI characters for your business!",
      "OpenAI's Custom GPTs empower SMBs to craft personalized AI solutions without tech expertise."
    ],
    pdfLink: "https://lnkd.in/gEe3QPDU"
  },
  {
    id: 3,
    date: "Thursday, July 10, 2025",
    highlights: [
      "AI mimics human decision-making in trials, accelerating drug discovery and enabling safer treatment development.",
      "Generative AI like DiffDock speeds up drug design, transforming how fast new treatments hit the market.",
      "Companies like Medtronic use AI for faster, more accurate healthcare diagnostics, revolutionizing patient outcomes.",
      "Meet Songscription, a wizard that converts music recordings into instant sheet music—game-changing for creatives!",
      "Microsoft Copilot boosts SMB productivity by automating tedious tasks, letting you focus on growth."
    ],
    pdfLink: "https://lnkd.in/g2X4SF5y"
  },
  {
    id: 4,
    date: "Thursday, July 17, 2025",
    highlights: [
      "DeepSeek R1's novel architecture accelerates AI development, slashing resources and boosting precision in sectors like finance and healthcare.",
      "AI advances are mimicking neurological functions, paving the way for groundbreaking brain research and new therapeutics.",
      "Generative AI speeds up qualitative data analysis, offering SMBs rapid insights into market trends for swift decision-making.",
      "Amazon's AI Agent Marketplace delivers automated workflows, boosting SMB efficiency and cutting costs.",
      "63% of small businesses report daily AI use, saving over 20 hours monthly—stay competitive with these evolving tools."
    ],
    pdfLink: "https://lnkd.in/ew6wByPb"
  },
  {
    id: 5,
    date: "Thursday, July 24, 2025",
    highlights: [
      "A groundbreaking AI model has hit a major milestone in general intelligence, moving us closer to human-like AI capabilities.",
      "Cognizant's 59th U.S. Patent heralds cutting-edge tech that boosts productivity and trims costs.",
      "Meet Manus AI, the game-changing autonomous agent freeing businesses from tedious tasks.",
      "Say hello to Spellai, the fun AI art app that turns text prompts into stunning visuals!",
      "SMBs: Dive into AI-powered video generation for killer social media content."
    ],
    pdfLink: "https://lnkd.in/em3CqhiE"
  }
];

interface NewsletterCardProps {
  newsletter: Newsletter;
  index: number;
}

const NewsletterCard = memo(({ newsletter, index }: NewsletterCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={cn(
        "newsletter-card bg-cosmic-charcoal/50 backdrop-blur-sm",
        "border border-cosmic-gold/10 rounded-lg overflow-hidden",
        "transition-all duration-300 hover:translate-y-[-2px]",
        "hover:border-cosmic-gold/30 hover:shadow-[0_10px_40px_rgba(184,153,93,0.1)]",
        `scroll-fade-in stagger-${index + 1}`
      )}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 flex items-center justify-between group text-left"
        aria-expanded={isExpanded}
      >
        <h3 className="text-xl md:text-2xl font-heading font-light text-cosmic-gold group-hover:text-cosmic-white transition-colors duration-300">
          Newsletter {newsletter.id} - {newsletter.date}
        </h3>
        <ChevronDown 
          className={cn(
            "w-6 h-6 text-cosmic-gold transition-all duration-300 flex-shrink-0 ml-4",
            isExpanded && "rotate-180"
          )} 
        />
      </button>

      <div 
        className={cn(
          "newsletter-content overflow-hidden transition-all duration-500 ease-in-out",
          isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 pb-6">
          <p className="text-cosmic-white mb-4 font-medium">
            This week's ⭐️ AI newsletter highlights:
          </p>
          
          <ul className="space-y-3 mb-6">
            {newsletter.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-cosmic-gold mr-3 mt-1 flex-shrink-0">◆</span>
                <span className="text-slate-300 leading-relaxed text-sm">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={newsletter.pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 
                     bg-cosmic-gold/10 hover:bg-cosmic-gold/20 
                     border border-cosmic-gold/30 hover:border-cosmic-gold/50
                     text-cosmic-gold rounded-lg transition-all duration-300
                     group font-medium newsletter-link"
          >
            <span>Read Full Newsletter</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
});

NewsletterCard.displayName = 'NewsletterCard';

const NewsletterArchive = forwardRef<HTMLElement, SectionProps>(({ className }, ref) => {
  useScrollReveal();

  return (
    <section ref={ref} id="newsletter-archive" className={`py-40 relative overflow-hidden ${className || ''}`}>
      <div className="max-w-5xl mx-auto px-8">
        <SectionHeader 
          title="Newsletter Archive"
          subtitle="Catch up on our weekly AI insights and industry transformations"
          titleClassName="text-cosmic-white"
          className="mb-16"
        />

        <div className="space-y-6">
          {[...newsletters].reverse().map((newsletter, index) => (
            <NewsletterCard
              key={newsletter.id}
              newsletter={newsletter}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-cosmic-white/60 text-sm">
            New newsletters every Thursday • Stay ahead of the AI curve
          </p>
        </div>
      </div>
    </section>
  );
});

NewsletterArchive.displayName = 'NewsletterArchive';

export default memo(NewsletterArchive);