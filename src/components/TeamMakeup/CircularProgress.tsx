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
      className={`group flex flex-col items-center gap-3.5 py-5 px-[15px] bg-transparent border-none rounded-xl cursor-pointer opacity-0 animate-fade-in-up-sm transition-[outline] duration-200 flex-1 hover:outline hover:outline-1 hover:outline-earth max-nav:flex-[0_0_auto] max-nav:min-w-[100px] max-sm:py-[15px] max-sm:px-2.5 max-xs:py-3 max-xs:px-2 max-xs:min-w-0`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <div className="relative w-[90px] h-[90px] max-sm:w-[75px] max-sm:h-[75px] max-xs:w-[60px] max-xs:h-[60px]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id={`progressGradient-${label}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2F80ED" />
              <stop offset="100%" stopColor="#56CCF2" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            strokeWidth="5"
            className="stroke-white/[0.06]"
          />
          <circle
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
            style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[17px] font-semibold text-primary max-sm:text-[15px] max-xs:text-[13px]">
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
      <span className={`text-xs font-medium py-1.5 px-3.5 rounded-[20px] transition-colors whitespace-nowrap max-sm:text-[11px] max-sm:py-[5px] max-sm:px-2.5 max-xs:text-[9px] max-xs:py-1 max-xs:px-2 group-hover:text-primary ${isActive ? 'text-earth' : 'text-dust'}`}>
        {label}
      </span>
    </button>
  );
}
