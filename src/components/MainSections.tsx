import { RefObject } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { sectionConfig } from '@/config/sections.config';
import { SectionRefs } from '@/types/section.types';

interface MainSectionsProps {
  refs: Omit<SectionRefs, 'hero'>;
}

const MainSections = ({ refs }: MainSectionsProps) => {
  useScrollReveal();

  return (
    <>
      {sectionConfig.map((section) => {
        const SectionComponent = section.component;
        const ref = refs[section.id as keyof typeof refs];
        
        return (
          <SectionComponent
            key={section.id}
            ref={ref}
            title={section.title}
            subtitle={section.subtitle}
          />
        );
      })}
    </>
  );
};

export default MainSections;