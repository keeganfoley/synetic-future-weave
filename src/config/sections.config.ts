import { SectionData } from '@/types/section.types';
import PurposeSection from '@/components/PurposeSection';
import ProcessSection from '@/components/ProcessSection';
import CaseStudies from '@/components/CaseStudies';
import ContactSection from '@/components/ContactSection';
import NewsletterSection from '@/components/NewsletterSection';
import NewsletterArchive from '@/components/NewsletterArchive';

export const sectionConfig: SectionData[] = [
  {
    id: 'purpose',
    title: 'Our Purpose',
    component: PurposeSection,
    navLabel: 'Purpose',
  },
  {
    id: 'process',
    title: 'Our Process',
    subtitle: 'Ready to transform your business? Here\'s how we make it happen.',
    component: ProcessSection,
    navLabel: 'Process',
  },
  {
    id: 'caseStudies',
    title: 'Case Studies',
    subtitle: 'See how we\'ve transformed businesses with AI-powered automation',
    component: CaseStudies,
    navLabel: 'Case Studies',
  },
  {
    id: 'contact',
    title: 'Work Less. Earn More.',
    component: ContactSection,
    navLabel: 'Contact',
  },
  {
    id: 'newsletter',
    title: 'Join Our AI Newsletter',
    subtitle: 'Discover useful AI updates, breakthrough tools to try, practical use cases, and strategies that actually work.',
    component: NewsletterSection,
    navLabel: 'Newsletter',
  },
  {
    id: 'newsletterArchive',
    title: 'Newsletter Archive',
    subtitle: 'Catch up on our weekly AI insights and industry transformations',
    component: NewsletterArchive,
    navLabel: 'Archive',
  },
];