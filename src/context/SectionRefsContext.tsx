import { createContext, useContext, ReactNode, RefObject, useRef, useCallback } from 'react';
import { SectionRefsContextValue, SectionRefs } from '@/types/section.types';

const SectionRefsContext = createContext<SectionRefsContextValue | undefined>(undefined);

export const useSectionRefs = () => {
  const context = useContext(SectionRefsContext);
  if (!context) {
    throw new Error('useSectionRefs must be used within a SectionRefsProvider');
  }
  return context;
};

interface SectionRefsProviderProps {
  children: ReactNode;
  refs: SectionRefs;
}

export const SectionRefsProvider = ({ children, refs }: SectionRefsProviderProps) => {
  const scrollToSection = useCallback((sectionId: string) => {
    const ref = refs[sectionId];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [refs]);

  return (
    <SectionRefsContext.Provider value={{ refs, scrollToSection }}>
      {children}
    </SectionRefsContext.Provider>
  );
};