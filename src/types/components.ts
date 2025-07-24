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