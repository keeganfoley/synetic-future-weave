import { memo, FC } from 'react';

interface ProcessIconProps {
  type: 'discovery' | 'strategy' | 'implementation' | 'test' | 'leadership';
  index: number;
}

const ProcessIcon: FC<ProcessIconProps> = memo(({ type, index }) => {
  return (
    <div className="relative w-16 h-16 mx-auto mb-4">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id={`techGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c9a961" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#c9a961" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#c9a961" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id={`techRadial-${index}`}>
            <stop offset="0%" stopColor="#c9a961" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#c9a961" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Discovery: Concentric data rings that pulse */}
        {type === 'discovery' && (
          <g className="animate-pulse">
            <circle cx="50" cy="50" r="40" fill="none" 
                    stroke={`url(#techGradient-${index})`} strokeWidth="2" />
            <circle cx="50" cy="50" r="30" fill="none" 
                    stroke={`url(#techGradient-${index})`} strokeWidth="1.5" 
                    className="animate-pulse-slow" />
            <circle cx="50" cy="50" r="20" fill="none" 
                    stroke={`url(#techGradient-${index})`} strokeWidth="1" 
                    className="animate-pulse-slow-delayed" />
            <circle cx="50" cy="50" r="10" fill="none" 
                    stroke={`url(#techGradient-${index})`} strokeWidth="0.5" />
            <circle cx="50" cy="50" r="3" fill="#c9a961" opacity="0.8" />
          </g>
        )}

        {/* Strategy: Network nodes connecting */}
        {type === 'strategy' && (
          <g>
            {/* Central node */}
            <circle cx="50" cy="50" r="5" fill="#c9a961" opacity="0.8" />
            
            {/* Surrounding nodes with connections */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const x = 50 + 30 * Math.cos((angle * Math.PI) / 180);
              const y = 50 + 30 * Math.sin((angle * Math.PI) / 180);
              return (
                <g key={i}>
                  <line x1="50" y1="50" x2={x} y2={y} 
                        stroke={`url(#techGradient-${index})`} strokeWidth="1"
                        className="animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                  <circle cx={x} cy={y} r="3" fill="#c9a961" opacity="0.6"
                          className="animate-node-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                </g>
              );
            })}
          </g>
        )}

        {/* Implementation: Code matrix visualization */}
        {type === 'implementation' && (
          <g>
            {/* Matrix grid */}
            {[...Array(8)].map((_, i) => (
              <g key={i}>
                <line x1="10" y1={12.5 * i + 12.5} x2="90" y2={12.5 * i + 12.5} 
                      stroke={`url(#techGradient-${index})`} strokeWidth="0.5" 
                      opacity={0.3 + (i * 0.1)} />
                <line x1={12.5 * i + 12.5} y1="10" x2={12.5 * i + 12.5} y2="90" 
                      stroke={`url(#techGradient-${index})`} strokeWidth="0.5" 
                      opacity={0.3 + (i * 0.1)} />
              </g>
            ))}
            
            {/* Animated data points */}
            {[...Array(5)].map((_, i) => (
              <rect key={i} 
                    x={20 + i * 15} 
                    y="45" 
                    width="4" 
                    height="10" 
                    fill="#c9a961"
                    className="animate-data-flow" 
                    style={{ animationDelay: `${i * 0.3}s`, animationDuration: '3s' }} />
            ))}
          </g>
        )}

        {/* Test & Optimize: Performance graphs */}
        {type === 'test' && (
          <g>
            {/* Graph axes */}
            <line x1="20" y1="80" x2="80" y2="80" stroke="#c9a961" strokeWidth="2" opacity="0.5" />
            <line x1="20" y1="20" x2="20" y2="80" stroke="#c9a961" strokeWidth="2" opacity="0.5" />
            
            {/* Performance line */}
            <polyline
              points="20,70 35,65 50,45 65,30 80,25"
              fill="none"
              stroke={`url(#techGradient-${index})`}
              strokeWidth="2"
              className="animate-draw-line"
            />
            
            {/* Data points */}
            {[[20,70], [35,65], [50,45], [65,30], [80,25]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="3" fill="#c9a961" 
                      className="animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
            ))}
          </g>
        )}

        {/* Leadership: Global network visualization */}
        {type === 'leadership' && (
          <g>
            {/* Globe outline */}
            <circle cx="50" cy="50" r="40" fill="none" 
                    stroke={`url(#techGradient-${index})`} strokeWidth="1" />
            
            {/* Latitude lines */}
            <ellipse cx="50" cy="50" rx="40" ry="20" fill="none" 
                     stroke={`url(#techGradient-${index})`} strokeWidth="0.5" 
                     className="animate-pulse-slow" />
            <ellipse cx="50" cy="50" rx="40" ry="10" fill="none" 
                     stroke={`url(#techGradient-${index})`} strokeWidth="0.5" />
            
            {/* Longitude lines */}
            <ellipse cx="50" cy="50" rx="20" ry="40" fill="none" 
                     stroke={`url(#techGradient-${index})`} strokeWidth="0.5" 
                     className="animate-pulse-slow-delayed" />
            
            {/* Connection points */}
            {[[30,30], [70,30], [50,50], [30,70], [70,70]].map(([x, y], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="2" fill="#c9a961" 
                        className="animate-node-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                <circle cx={x} cy={y} r="8" fill="none" stroke="#c9a961" strokeWidth="0.5"
                        className="animate-ping" style={{ animationDelay: `${i * 0.3}s` }} />
              </g>
            ))}
          </g>
        )}
      </svg>
    </div>
  );
});

ProcessIcon.displayName = 'ProcessIcon';

export default ProcessIcon;