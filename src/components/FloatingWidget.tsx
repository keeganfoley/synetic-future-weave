
import { useState, memo, useCallback } from 'react';
import { Brain } from 'lucide-react';
import { BaseComponentProps } from '@/types';

type FloatingWidgetProps = BaseComponentProps;

const FloatingWidget = memo<FloatingWidgetProps>(() => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="floating-widget">
      <div 
        className={`glass-card p-4 cursor-pointer transition-all duration-500 ${
          isExpanded ? 'w-64' : 'w-16'
        }`}
        onClick={useCallback(() => setIsExpanded(prev => !prev), [])}
      >
        <div className="flex items-center">
          <div className="text-cosmic-gold">
            <Brain size={32} strokeWidth={1} />
          </div>
          {isExpanded && (
            <div className="ml-4 opacity-0 animate-fade-in">
              <h4 className="text-cosmic-gold font-medium text-sm">Neural CRM</h4>
              <p className="text-cosmic-white/70 text-xs mt-1">
                AI-powered insights that predict and convert
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

FloatingWidget.displayName = 'FloatingWidget';

export default FloatingWidget;
