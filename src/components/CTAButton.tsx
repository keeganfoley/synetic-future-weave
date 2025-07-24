import { ReactNode, memo } from 'react';

interface CTAButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  variant?: 'glass' | 'hero';
  icon?: ReactNode;
}

const CTAButton = ({ onClick, children, className = '', variant = 'glass', icon }: CTAButtonProps) => {
  const baseClasses = variant === 'glass' 
    ? 'elite-cta-button-glass text-lg group relative button-click-effect luxury-focus-ring luxury-transition-all'
    : 'elite-cta-button-hero-mobile text-lg font-medium group relative min-w-[220px] h-16 px-12 md:px-16 button-click-effect luxury-focus-ring luxury-transition-all';

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      <span className="relative z-10 inline-flex items-center">
        {children}
        {icon && icon}
      </span>
      <div className={variant === 'glass' ? 'cta-sonar-pulse' : 'cta-sonar-rings'}></div>
    </button>
  );
};

export default memo(CTAButton);