import { useEffect, useState, lazy, Suspense } from 'react';

const ReactCountUp = lazy(() => import('react-countup'));

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function CountUp({ end, duration = 4, prefix = '', suffix = '', className }: CountUpProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <span className={className}>
      {mounted ? (
        <Suspense fallback={<span>{prefix}{end}{suffix}</span>}>
          <ReactCountUp
            end={end}
            duration={duration}
            prefix={prefix}
            suffix={suffix}
            enableScrollSpy
            scrollSpyOnce
          />
        </Suspense>
      ) : (
        <span>{prefix}{end}{suffix}</span>
      )}
    </span>
  );
}
