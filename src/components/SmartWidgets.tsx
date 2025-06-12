
import { useState, useEffect } from 'react';

export const WorkflowConnectWidget = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleToggle = () => {
    setIsConnected(!isConnected);
  };

  return (
    <div 
      className={`widget-connect-panel ${isConnected ? 'widget-connected' : 'widget-disconnected'}`}
      onClick={handleToggle}
    >
      <div className="widget-status-indicator"></div>
      <span className="widget-text">
        {isConnected ? '✓ Workflow Connected' : '🔌 Connect Workflow'}
      </span>
      <div className="widget-pulse-effect"></div>
    </div>
  );
};

export const DataStreamPanel = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [stats, setStats] = useState({ running: 32, paused: 4, synced: 17 });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        running: prev.running + Math.floor(Math.random() * 3) - 1,
        paused: Math.max(0, prev.paused + Math.floor(Math.random() * 3) - 1),
        synced: prev.synced + Math.floor(Math.random() * 2)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="data-stream-widget">
      <div 
        className="stream-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="stream-pulse-dot"></div>
        <span className="stream-title">Live Automation Activity</span>
      </div>
      
      <div className="stream-stats">
        <span className="stat-item running">{stats.running} automations running</span>
        <span className="stat-divider">|</span>
        <span className="stat-item paused">{stats.paused} paused</span>
        <span className="stat-divider">|</span>
        <span className="stat-item synced">{stats.synced} synced</span>
      </div>

      {isExpanded && (
        <div className="stream-expanded">
          <div className="dashboard-preview">
            <div className="preview-line">AI Agent: Processing 847 leads</div>
            <div className="preview-line">CRM Sync: 99.7% uptime</div>
            <div className="preview-line">Workflow Engine: Optimal</div>
          </div>
        </div>
      )}
    </div>
  );
};

export const InteractiveGlobeModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  const zones = [
    { id: 'ny', name: 'New York', status: 'CRM Bots Active', x: 25, y: 40 },
    { id: 'london', name: 'London', status: 'ChatOps Deployed', x: 50, y: 30 },
    { id: 'tokyo', name: 'Tokyo', status: 'Workflows Scaling', x: 75, y: 45 }
  ];

  if (!isOpen) return null;

  return (
    <div className="globe-modal-overlay" onClick={onClose}>
      <div className="globe-modal-content" onClick={e => e.stopPropagation()}>
        <div className="globe-modal-header">
          <h3>Global Automation Network</h3>
          <button onClick={onClose} className="modal-close-btn">×</button>
        </div>
        
        <div className="globe-map-container">
          <div className="world-map-silhouette"></div>
          {zones.map(zone => (
            <div
              key={zone.id}
              className="automation-node"
              style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
              onMouseEnter={() => setHoveredZone(zone.id)}
              onMouseLeave={() => setHoveredZone(null)}
            >
              <div className="node-pulse"></div>
              {hoveredZone === zone.id && (
                <div className="node-tooltip">
                  <div className="tooltip-title">{zone.name}</div>
                  <div className="tooltip-status">{zone.status}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SimulationButton = ({ type, label, result }: { type: string; label: string; result: string }) => {
  const [isActive, setIsActive] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => {
      setShowResult(true);
      setTimeout(() => {
        setIsActive(false);
        setShowResult(false);
      }, 2000);
    }, 800);
  };

  return (
    <div className="simulation-widget">
      <button 
        className={`simulation-btn ${isActive ? 'btn-active' : ''}`}
        onClick={handleClick}
        disabled={isActive}
      >
        {isActive ? (
          <div className="processing-animation">
            <div className="processing-dots"></div>
            Processing...
          </div>
        ) : (
          label
        )}
      </button>
      
      {showResult && (
        <div className="simulation-result">
          ✓ {result}
        </div>
      )}
    </div>
  );
};
