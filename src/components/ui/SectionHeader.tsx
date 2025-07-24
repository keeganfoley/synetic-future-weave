import { FC, memo } from 'react';
import { SectionHeaderProps } from '@/types/section.types';
import { cn } from '@/lib/utils';

const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  animated = true,
}) => {
  const defaultTitleClasses = 'text-4xl md:text-6xl font-heading font-light mb-6 text-cosmic-gold text-glow-premium scroll-fade-in';
  const defaultSubtitleClasses = 'text-xl text-cosmic-white/80 font-light scroll-fade-in stagger-1';
  
  const animationClass = animated ? 'typing-animation-enhanced' : '';

  return (
    <div className={cn('text-center mb-16', className)}>
      <h2 className={cn(
        defaultTitleClasses,
        animationClass,
        titleClassName
      )}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={cn(
          defaultSubtitleClasses,
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default memo(SectionHeader);