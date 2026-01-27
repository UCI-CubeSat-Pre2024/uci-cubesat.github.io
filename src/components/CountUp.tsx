import ReactCountUp from 'react-countup';

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function CountUp({ end, duration = 4, prefix = '', suffix = '', className }: CountUpProps) {
  return (
    <span className={className}>
      <ReactCountUp
        end={end}
        duration={duration}
        prefix={prefix}
        suffix={suffix}
        enableScrollSpy
        scrollSpyOnce
      />
    </span>
  );
}
