/**
 * Common component prop types used across the application
 */

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface FormSubmissionData {
  timestamp: string;
  source: string;
  url: string;
  user_agent: string;
  request_id: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  company: string;
  overview?: string;
  challenge: string;
  solution: string[];
  results: string[];
  images: string[];
}