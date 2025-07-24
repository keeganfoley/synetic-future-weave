import { SectionData } from '@/types/section.types';
import PurposeSection from '@/components/PurposeSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import NewsletterSection from '@/components/NewsletterSection';

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
];