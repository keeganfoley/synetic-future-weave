import { useScrollReveal } from '../hooks/useScrollReveal';
import PurposeSection from './PurposeSection';
import ProcessSection from './ProcessSection';
import ContactSection from './ContactSection';
import NewsletterSection from './NewsletterSection';

const MainSections = () => {
  useScrollReveal();

  return <>
      <PurposeSection />
      <ProcessSection />
      <ContactSection />
      <NewsletterSection />
    </>;
};

export default MainSections;