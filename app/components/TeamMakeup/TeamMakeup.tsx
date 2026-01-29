import { useMemo } from 'react';
import { useScrollAnimation } from '~/hooks/useScrollAnimation';
import { CircularProgress } from './CircularProgress';

interface TeamMember {
  name: string;
  role: string;
  position: string;
  image: string;
}

interface TeamMakeupProps {
  teamMembers: TeamMember[];
  activeRole: string;
  onRoleChange: (role: string) => void;
}

const ROLE_ORDER = [
  'Executive',
  'Advisory',
  'Avionics',
  'Communications',
  'Power',
  'Structures',
  'Systems'
];

export function TeamMakeup({ teamMembers, activeRole, onRoleChange }: TeamMakeupProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const teamStats = useMemo(() => {
    const roleCount: Record<string, number> = {};
    teamMembers.forEach(member => {
      roleCount[member.role] = (roleCount[member.role] || 0) + 1;
    });

    const total = teamMembers.length;
    return ROLE_ORDER
      .filter(role => roleCount[role])
      .map(role => ({
        role,
        count: roleCount[role],
        percentage: Math.round((roleCount[role] / total) * 100)
      }));
  }, [teamMembers]);

  return (
    <div
      ref={ref}
      className={`w-full max-w-[1200px] mx-auto mb-[50px] px-6 transition-all duration-[600ms] ease-out max-sm:mb-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      <div className="flex justify-between items-center mb-[35px] max-sm:flex-col max-sm:gap-[15px] max-sm:mb-[25px]">
        <h2 className="text-2xl font-semibold m-0 text-primary max-sm:text-xl">Team Composition</h2>
        <button
          type="button"
          className={`text-sm font-medium bg-transparent border-none py-2 px-5 rounded-[20px] cursor-pointer transition-colors ${activeRole === 'All' ? 'text-earth' : 'text-dust hover:text-primary'}`}
          onClick={() => onRoleChange('All')}
        >
          View All
        </button>
      </div>
      <div className="flex justify-between gap-[15px] max-nav:flex-wrap max-nav:justify-center max-sm:gap-2.5 max-xs:grid max-xs:grid-cols-3 max-xs:gap-2">
        {teamStats.map((stat, index) => (
          <CircularProgress
            key={stat.role}
            percentage={stat.percentage}
            label={stat.role}
            isVisible={isVisible}
            isActive={activeRole === stat.role}
            onClick={() => onRoleChange(stat.role)}
            delay={index * 80}
          />
        ))}
      </div>
    </div>
  );
}
