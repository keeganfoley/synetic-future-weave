import { ComponentType, RefObject } from 'react';

export interface SectionData {
  id: string;
  title: string;
  subtitle?: string;
  component: ComponentType<SectionProps>;
  navLabel: string;
}

export interface BaseComponentProps {
  className?: string;
  id?: string;
}

export interface SectionProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
}

export interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  animated?: boolean;
}

export interface SectionRefs {
  [key: string]: RefObject<HTMLElement>;
}

export interface SectionRefsContextValue {
  refs: SectionRefs;
  scrollToSection: (sectionId: string) => void;
}