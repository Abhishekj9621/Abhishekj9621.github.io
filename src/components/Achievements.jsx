import React from 'react';
import {
  RiTrophyLine,
  RiMedalLine,
  RiTeamLine,
  RiRocketLine,
  RiStarLine,
} from 'react-icons/ri';

const achievements = [
  {
    icon: <RiTrophyLine size={28} />,
    title: 'Hackathon Winner',
    org: 'Thapar University',
    desc: 'Won first place for developing an edge-based LLM inference system — achieving real-time AI reasoning on constrained hardware.',
    color: '#F59E0B',
    year: '2024',
    type: '🏆 Winner',
  },
  {
    icon: <RiMedalLine size={28} />,
    title: 'Top 5 Finalist',
    org: 'INAE × IIT Jodhpur Hackathon',
    desc: 'Selected as one of the top 5 teams from hundreds of applicants at a prestigious national-level engineering hackathon.',
    color: '#00D4FF',
    year: '2024',
    type: '🥈 Finalist',
  },
  {
    icon: <RiTeamLine size={28} />,
    title: 'Council Chairperson',
    org: 'Student Activity Center, RTU',
    desc: 'Led and organized large-scale technical and cultural events across Rajasthan Technical University (2023–2024).',
    color: '#7C3AFF',
    year: '2023–24',
    type: '🎓 Leadership',
  },
  {
    icon: <RiRocketLine size={28} />,
    title: 'YC Startup School',
    org: 'Y Combinator',
    desc: 'Completed the YC Startup School entrepreneurship program, gaining deep knowledge of product, growth, and startups.',
    color: '#00E5A0',
    year: '2025',
    type: '🚀 Alumni',
  },
  {
    icon: <RiStarLine size={28} />,
    title: 'AI Engineer at Heuro AI',
    org: 'Heuro AI, Jaipur',
    desc: 'Hired as a full-time AI engineer to architect autonomous multi-agent systems and production AI backends.',
    color: '#FF6B9D',
    year: '2026',
    type: '💼 Current Role',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div style={sectionLabelStyle} className="reveal">
          <span style={labelLineStyle} />
          <span style={labelTextStyle}>ACHIEVEMENTS</span>
        </div>

        <div style={headerRowStyle} className="reveal">
          <h2 style={headingStyle}>
            Recognition &{' '}
            <span className="gradient-text">Milestones</span>
          </h2>
          <p style={subStyle}>
            Competitive wins, leadership positions, and career milestones that define my journey.
          </p>
        </div>

        {/* Timeline */}
        <div style={timelineStyle}>
          {achievements.map((a, i) => (
            <AchievementCard key={a.title} achievement={a} index={i} isLast={i === achievements.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementCard({ achievement: a, index, isLast }) {
  const [hovered, setHovered] = React.useState(false);
  const isRight = index % 2 === 1;

  return (
    <div
      className="reveal"
      style={timelineItemStyle(isRight)}
    >
      {/* Card */}
      <div
        style={cardStyle(hovered, a.color, isRight)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Type badge */}
        <div style={typeBadgeStyle(a.color)}>{a.type}</div>

        {/* Year */}
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>
          {a.year}
        </div>

        {/* Icon + title */}
        <div style={cardHeaderStyle}>
          <div style={iconBoxStyle(a.color)}>
            <span style={{ color: a.color }}>{a.icon}</span>
          </div>
          <div>
            <h3 style={cardTitleStyle}>{a.title}</h3>
            <div style={orgStyle(a.color)}>{a.org}</div>
          </div>
        </div>

        {/* Description */}
        <p style={descStyle}>{a.desc}</p>

        {/* Bottom accent */}
        {hovered && <div style={bottomAccentStyle(a.color)} />}
      </div>

      {/* Timeline dot */}
      <div style={dotContainerStyle}>
        <div style={dotStyle(a.color)}>
          <div style={dotInnerStyle(a.color)} />
        </div>
        {!isLast && <div style={lineStyle(a.color)} />}
      </div>

      {/* Spacer for alternating layout */}
      <div style={{ flex: 1 }} />
    </div>
  );
}

const sectionLabelStyle = { display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' };
const labelLineStyle = { display: 'block', width: '40px', height: '2px', background: 'var(--accent-cyan)' };
const labelTextStyle = { fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-cyan)', letterSpacing: '0.2em' };
const headerRowStyle = { marginBottom: '60px' };
const headingStyle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 800,
  fontSize: 'clamp(32px, 4vw, 52px)',
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
  marginBottom: '16px',
};
const subStyle = { color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '500px', fontWeight: 300 };
const timelineStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  position: 'relative',
  maxWidth: '900px',
};
const timelineItemStyle = (isRight) => ({
  display: 'grid',
  gridTemplateColumns: isRight ? '1fr 48px 1fr' : '1fr 48px 1fr',
  gap: '24px',
  alignItems: 'flex-start',
  marginBottom: '0',
});
const cardStyle = (hovered, color, isRight) => ({
  position: 'relative',
  padding: '28px',
  background: hovered ? 'var(--bg-card-hover)' : 'var(--bg-card)',
  border: `1px solid ${hovered ? color + '50' : 'var(--border-subtle)'}`,
  borderRadius: '18px',
  transition: 'all 0.3s',
  transform: hovered ? 'scale(1.01)' : 'scale(1)',
  overflow: 'hidden',
  gridColumn: isRight ? '3' : '1',
  gridRow: '1',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  cursor: 'default',
});
const dotContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gridColumn: '2',
  paddingTop: '28px',
};
const dotStyle = (color) => ({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  border: `2px solid ${color}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'var(--bg-primary)',
  boxShadow: `0 0 12px ${color}60`,
  zIndex: 1,
  flexShrink: 0,
});
const dotInnerStyle = (color) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  background: color,
});
const lineStyle = (color) => ({
  width: '2px',
  flex: 1,
  minHeight: '40px',
  background: `linear-gradient(${color}40, transparent)`,
  marginTop: '4px',
});
const typeBadgeStyle = (color) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 12px',
  background: `${color}15`,
  border: `1px solid ${color}30`,
  borderRadius: '100px',
  fontSize: '12px',
  color: color,
  fontWeight: 600,
  width: 'fit-content',
});
const cardHeaderStyle = {
  display: 'flex',
  gap: '14px',
  alignItems: 'flex-start',
};
const iconBoxStyle = (color) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '52px',
  height: '52px',
  minWidth: '52px',
  background: `${color}12`,
  border: `1px solid ${color}30`,
  borderRadius: '12px',
});
const cardTitleStyle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 800,
  fontSize: '18px',
  color: 'var(--text-primary)',
  lineHeight: 1.25,
  marginBottom: '4px',
};
const orgStyle = (color) => ({
  fontSize: '13px',
  color: color,
  fontWeight: 600,
  fontFamily: 'var(--font-mono)',
});
const descStyle = {
  fontSize: '14px',
  color: 'var(--text-secondary)',
  lineHeight: 1.75,
  fontWeight: 300,
};
const bottomAccentStyle = (color) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '2px',
  background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
  borderRadius: '0 0 18px 18px',
});
