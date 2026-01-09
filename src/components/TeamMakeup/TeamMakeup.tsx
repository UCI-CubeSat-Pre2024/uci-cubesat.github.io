import { useMemo } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { CircularProgress } from './CircularProgress';
import './TeamMakeup.css';

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
      className={`team-makeup-container ${isVisible ? 'visible' : ''}`}
    >
      <div className="team-makeup-header">
        <h2 className="team-makeup-title">Team Composition</h2>
        <button
          type="button"
          className={`view-all-btn ${activeRole === 'All' ? 'active' : ''}`}
          onClick={() => onRoleChange('All')}
        >
          View All
        </button>
      </div>
      <div className="team-makeup-grid">
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
