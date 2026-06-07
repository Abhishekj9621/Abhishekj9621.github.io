import React, { useState } from 'react';
import {
  RiCodeSSlashLine,
  RiSmartphoneLine,
  RiBrainLine,
  RiServerLine,
  RiDatabase2Line,
  RiCloudLine,
  RiToolsLine,
} from 'react-icons/ri';

const skillGroups = [
  {
    icon: <RiCodeSSlashLine size={20} />,
    label: 'Languages',
    color: '#00D4FF',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Bash'],
  },
  {
    icon: <RiSmartphoneLine size={20} />,
    label: 'Mobile',
    color: '#7C3AFF',
    skills: ['React Native', 'Expo', 'React Navigation', 'Push Notifications', 'Deep Linking', 'Animated API'],
  },
  {
    icon: <RiCodeSSlashLine size={20} />,
    label: 'Frontend',
    color: '#00E5A0',
    skills: ['React.js', 'TypeScript', 'HTML/CSS', 'REST API Integration'],
  },
  {
    icon: <RiServerLine size={20} />,
    label: 'Backend',
    color: '#F59E0B',
    skills: ['Django', 'FastAPI', 'Flask', 'Node.js', 'Express.js', 'GraphQL', 'WebSockets', 'Celery', 'JWT/OAuth2', 'RBAC', 'Microservices'],
  },
  {
    icon: <RiBrainLine size={20} />,
    label: 'AI / ML',
    color: '#FF6B9D',
    skills: ['LLMs', 'Generative AI', 'Multi-Agent Systems', 'RAG', 'LangChain', 'LangGraph', 'CrewAI', 'OpenAI API', 'Anthropic API', 'Hugging Face', 'NLP', 'OCR', 'Computer Vision'],
  },
  {
    icon: <RiBrainLine size={20} />,
    label: 'ML Frameworks',
    color: '#FF8C42',
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'scikit-learn', 'OpenCV'],
  },
  {
    icon: <RiDatabase2Line size={20} />,
    label: 'Databases',
    color: '#4ECDC4',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Pinecone', 'ChromaDB'],
  },
  {
    icon: <RiCloudLine size={20} />,
    label: 'Cloud & DevOps',
    color: '#A8E6CF',
    skills: ['GCP', 'Docker', 'Docker Compose', 'Kubernetes', 'Nginx', 'CI/CD', 'GitHub Actions'],
  },
  {
    icon: <RiToolsLine size={20} />,
    label: 'Tools',
    color: '#FFD93D',
    skills: ['Git', 'GitHub', 'Linux', 'Postman', 'Swagger', 'Jupyter', 'VS Code', 'Streamlit', 'Gradio', 'n8n'],
  },
];

const proficiencyData = [
  { label: 'Python / AI Engineering', pct: 95, color: '#00D4FF' },
  { label: 'React Native / Mobile', pct: 88, color: '#7C3AFF' },
  { label: 'FastAPI / Django (Backend)', pct: 92, color: '#F59E0B' },
  { label: 'LLM / Multi-Agent Systems', pct: 90, color: '#FF6B9D' },
  { label: 'Cloud & DevOps', pct: 75, color: '#00E5A0' },
  { label: 'Computer Vision / ML', pct: 82, color: '#FF8C42' },
];

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState(null);

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={sectionLabelStyle} className="reveal">
          <span style={labelLineStyle} />
          <span style={labelTextStyle}>SKILLS</span>
        </div>

        <div style={headerRowStyle} className="reveal">
          <h2 style={headingStyle}>
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p style={subStyle}>
            A battle-tested toolkit built across AI, mobile, backend, and infrastructure engineering.
          </p>
        </div>

        <div style={mainLayoutStyle}>
          {/* Left: Skill Groups */}
          <div style={groupsColStyle}>
            {skillGroups.map((group, i) => (
              <SkillGroupCard
                key={group.label}
                group={group}
                active={activeGroup === group.label}
                onClick={() => setActiveGroup(activeGroup === group.label ? null : group.label)}
                index={i}
              />
            ))}
          </div>

          {/* Right: Proficiency bars */}
          <div style={barsColStyle}>
            <div style={barsSectionStyle} className="reveal">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.15em', marginBottom: '28px' }}>
                PROFICIENCY OVERVIEW
              </div>
              {proficiencyData.map((item, i) => (
                <ProficiencyBar key={item.label} {...item} delay={i * 0.15} />
              ))}
            </div>

            {/* Mindset card */}
            <div style={mindsetCardStyle} className="reveal">
              <div style={mindsetTopStyle}>
                <div style={mindsetDotStyle} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', letterSpacing: '0.1em' }}>
                  ENGINEERING PHILOSOPHY
                </span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.8, fontWeight: 300 }}>
                I prioritize{' '}
                <strong style={{ color: 'var(--text-primary)' }}>production-first thinking</strong> — 
                building systems that are not just functional, but scalable, maintainable, and observable 
                from day one. Every decision is a trade-off; I make them deliberately.
              </p>
              <div style={mindsetTagsStyle}>
                {['Clean Architecture', 'API-First', 'Performance', 'Observability', 'DX-Focused'].map(t => (
                  <span key={t} style={mindsetTagStyle}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillGroupCard({ group, active, onClick, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="reveal"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div
        style={groupCardStyle(active || hovered, group.color)}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={groupHeaderStyle}>
          <div style={groupIconStyle(group.color, active)}>
            <span style={{ color: group.color }}>{group.icon}</span>
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', color: (active || hovered) ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
            {group.label}
          </span>
          <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '11px', color: group.color }}>
            {group.skills.length}
          </span>
        </div>
        {active && (
          <div style={skillsListStyle}>
            {group.skills.map(s => (
              <span key={s} style={skillTagStyle(group.color)}>{s}</span>
            ))}
          </div>
        )}
        {!active && (
          <div style={skillsPreviewStyle}>
            {group.skills.slice(0, 3).join(', ')}
            {group.skills.length > 3 && ` +${group.skills.length - 3} more`}
          </div>
        )}
      </div>
    </div>
  );
}

function ProficiencyBar({ label, pct, color, delay }) {
  const [visible, setVisible] = useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => setVisible(true), delay * 1000);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <span style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 500 }}>{label}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: color, fontWeight: 600 }}>{pct}%</span>
      </div>
      <div style={barTrackStyle}>
        <div
          style={{
            height: '100%',
            width: visible ? `${pct}%` : '0%',
            background: `linear-gradient(90deg, ${color} 0%, ${color}88 100%)`,
            borderRadius: '4px',
            transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: `0 0 12px ${color}50`,
            position: 'relative',
          }}
        >
          {visible && (
            <div style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: color,
              boxShadow: `0 0 8px ${color}`,
            }} />
          )}
        </div>
      </div>
    </div>
  );
}

// Styles
const sectionLabelStyle = { display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' };
const labelLineStyle = { display: 'block', width: '40px', height: '2px', background: 'var(--accent-cyan)' };
const labelTextStyle = { fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-cyan)', letterSpacing: '0.2em' };
const headerRowStyle = { marginBottom: '60px' };
const headingStyle = { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '16px' };
const subStyle = { color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '500px', fontWeight: 300 };
const mainLayoutStyle = { display: 'grid', gridTemplateColumns: '1fr 420px', gap: '48px', alignItems: 'start' };
const groupsColStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' };
const groupCardStyle = (active, color) => ({
  padding: '18px',
  background: active ? 'var(--bg-card-hover)' : 'var(--bg-card)',
  border: `1px solid ${active ? color + '50' : 'var(--border-subtle)'}`,
  borderRadius: '14px',
  cursor: 'pointer',
  transition: 'all 0.25s',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});
const groupHeaderStyle = { display: 'flex', alignItems: 'center', gap: '10px' };
const groupIconStyle = (color, active) => ({
  width: '36px',
  height: '36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `${color}${active ? '20' : '10'}`,
  border: `1px solid ${color}${active ? '50' : '20'}`,
  borderRadius: '8px',
  transition: 'all 0.25s',
});
const skillsPreviewStyle = {
  fontSize: '12px',
  color: 'var(--text-muted)',
  lineHeight: 1.5,
  fontFamily: 'var(--font-mono)',
};
const skillsListStyle = { display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' };
const skillTagStyle = (color) => ({
  padding: '3px 10px',
  background: `${color}12`,
  border: `1px solid ${color}30`,
  borderRadius: '4px',
  color: color,
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
});
const barsColStyle = { display: 'flex', flexDirection: 'column', gap: '24px', position: 'sticky', top: '100px' };
const barsSectionStyle = {
  padding: '32px',
  background: 'var(--bg-card)',
  border: '1px solid var(--border-subtle)',
  borderRadius: '20px',
};
const barTrackStyle = {
  height: '6px',
  background: 'rgba(255,255,255,0.06)',
  borderRadius: '4px',
  overflow: 'hidden',
};
const mindsetCardStyle = {
  padding: '28px',
  background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, rgba(124, 58, 255, 0.05) 100%)',
  border: '1px solid var(--border-glow)',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
};
const mindsetTopStyle = { display: 'flex', alignItems: 'center', gap: '10px' };
const mindsetDotStyle = {
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  background: 'var(--accent-cyan)',
  boxShadow: '0 0 8px var(--accent-cyan)',
};
const mindsetTagsStyle = { display: 'flex', flexWrap: 'wrap', gap: '8px' };
const mindsetTagStyle = {
  padding: '4px 12px',
  background: 'rgba(0, 212, 255, 0.08)',
  border: '1px solid rgba(0, 212, 255, 0.2)',
  borderRadius: '100px',
  color: 'var(--accent-cyan)',
  fontSize: '12px',
  fontFamily: 'var(--font-mono)',
};
