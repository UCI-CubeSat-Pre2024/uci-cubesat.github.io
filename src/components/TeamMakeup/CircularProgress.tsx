import CountUp from 'react-countup';

interface CircularProgressProps {
  percentage: number;
  label: string;
  isVisible: boolean;
  isActive: boolean;
  onClick: () => void;
  delay?: number;
}

export function CircularProgress({
  percentage,
  label,
  isVisible,
  isActive,
  onClick,
  delay = 0
}: CircularProgressProps) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = isVisible
    ? circumference * (1 - percentage / 100)
    : circumference;

  return (
    <button
      type="button"
      className={`circular-progress-item ${isActive ? 'active' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <div className="circular-progress-ring">
        <svg viewBox="0 0 100 100">
          <defs>
            <linearGradient id={`progressGradient-${label}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2F80ED" />
              <stop offset="100%" stopColor="#56CCF2" />
            </linearGradient>
          </defs>
          <circle
            className="progress-track"
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            strokeWidth="5"
          />
          <circle
            className="progress-fill"
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            stroke={`url(#progressGradient-${label})`}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="progress-value">
          {isVisible ? (
            <CountUp
              end={percentage}
              duration={1.5}
              delay={delay / 1000}
              suffix="%"
            />
          ) : (
            '0%'
          )}
        </div>
      </div>
      <span className="progress-label">{label}</span>
    </button>
  );
}
