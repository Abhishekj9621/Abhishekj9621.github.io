import React from 'react';
import {
  RiMapPinLine,
  RiGraduationCapLine,
  RiLightbulbLine,
  RiRocketLine,
  RiTeamLine,
  RiAwardLine,
  RiExternalLinkLine,
  RiGithubLine,
  RiLinkedinLine,
  RiGlobalLine,
} from 'react-icons/ri';

const highlights = [
  {
    icon: <RiBrainIcon />,
    label: 'AI-First Mindset',
    desc: 'Designing agentic systems, LLM pipelines, and RAG architectures for real production use.',
  },
  {
    icon: <RiRocketLine size={22} />,
    label: 'Founder DNA',
    desc: 'Co-founded Cognitek Solutions — shipped end-to-end products and led cross-functional teams.',
  },
  {
    icon: <RiTeamLine size={22} />,
    label: 'Full-Stack Depth',
    desc: 'From React Native mobile apps to FastAPI backends and Docker/GCP deployments.',
  },
  {
    icon: <RiAwardLine size={22} />,
    label: 'Proven Impact',
    desc: 'Hackathon winner, IIT Jodhpur finalist, and student council leader at RTU.',
  },
];

function RiBrainIcon() {
  return <RiLightbulbLine size={22} />;
}

export default function About() {
  return (
    <section id="about" className="section">
      {/* Section label */}
      <div className="container">
        <div style={sectionLabelStyle} className="reveal">
          <span style={labelLineStyle} />
          <span style={labelTextStyle}>ABOUT ME</span>
        </div>

        <div style={gridStyle}>
          {/* Left: Text */}
          <div style={leftColStyle}>
            <h2 style={headingStyle} className="reveal">
              Building the future
              <br />
              <span className="gradient-text">at the intersection</span>
              <br />
              of AI & Software
            </h2>

            <div style={bodyTextStyle} className="reveal">
              <p>
                I'm a <strong style={{ color: 'var(--text-primary)' }}>Full-Stack & AI Engineer</strong> based
                in Jaipur, India, currently working at{' '}
                <span style={{ color: 'var(--accent-cyan)' }}>Heuro AI</span> where I architect autonomous
                AI agent systems and scalable backend infrastructures.
              </p>
              <p>
                My journey spans founding a startup, building production mobile apps for Android & iOS,
                developing multi-agent orchestration frameworks with LangGraph and CrewAI, and winning
                competitive hackathons — including at Thapar University with an edge-based LLM system.
              </p>
              <p>
                I care deeply about <strong style={{ color: 'var(--text-primary)' }}>engineering quality</strong>,
                {' '}<strong style={{ color: 'var(--text-primary)' }}>product thinking</strong>, and the
                impact technology can have at scale. Whether building a computer vision pipeline or a
                cross-platform app, I bring the same commitment to craft and performance.
              </p>
            </div>

            {/* Info chips */}
            <div style={infoChipsStyle} className="reveal">
              {[
                { icon: <RiMapPinLine size={15} />, text: 'Jaipur, Rajasthan, India' },
                { icon: <RiGraduationCapLine size={15} />, text: 'B.Tech CS — RTU Kota, 2025' },
                { icon: <RiRocketLine size={15} />, text: 'YC Startup School Alumni' },
              ].map(chip => (
                <div key={chip.text} style={chipStyle}>
                  <span style={{ color: 'var(--accent-cyan)' }}>{chip.icon}</span>
                  <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{chip.text}</span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={socialRowStyle} className="reveal">
              {[
                { icon: <RiGithubLine size={18} />, href: 'https://github.com/Abhishekj9621', label: 'GitHub' },
                { icon: <RiLinkedinLine size={18} />, href: 'https://www.linkedin.com/in/abhishek-jaiswal-82571a272/', label: 'LinkedIn' },
                { icon: <RiGlobalLine size={18} />, href: 'https://gotme.lovable.app/', label: 'Portfolio' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--accent-cyan)';
                    e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                    e.currentTarget.style.background = 'var(--accent-cyan-dim)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {s.icon}
                  <span>{s.label}</span>
                  <RiExternalLinkLine size={12} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div style={rightColStyle}>
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className="reveal"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <HighlightCard {...h} />
              </div>
            ))}

            {/* Quote card */}
            <div style={quoteCardStyle} className="reveal">
              <div style={quoteDividerStyle} />
              <p style={quoteTextStyle}>
                "I don't just write code — I architect systems, ship products, and obsess
                over the craft of building things that matter."
              </p>
              <span style={quoteAuthorStyle}>— Abhishek Jaiswal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightCard({ icon, label, desc }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      style={cardStyle(hovered)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={iconBoxStyle(hovered)}>{icon}</div>
      <div>
        <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px', color: 'var(--text-primary)', marginBottom: '6px' }}>
          {label}
        </h4>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{desc}</p>
      </div>
    </div>
  );
}

const sectionLabelStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '60px',
};

const labelLineStyle = {
  display: 'block',
  width: '40px',
  height: '2px',
  background: 'var(--accent-cyan)',
};

const labelTextStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '12px',
  color: 'var(--accent-cyan)',
  letterSpacing: '0.2em',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '80px',
  alignItems: 'start',
};

const leftColStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '28px',
};

const headingStyle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 800,
  fontSize: 'clamp(32px, 4vw, 52px)',
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
};

const bodyTextStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  color: 'var(--text-secondary)',
  lineHeight: 1.8,
  fontSize: '15px',
  fontWeight: 300,
};

const infoChipsStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const chipStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  padding: '8px 16px',
  background: 'var(--bg-card)',
  border: '1px solid var(--border-subtle)',
  borderRadius: '8px',
  width: 'fit-content',
};

const socialRowStyle = {
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
};

const socialLinkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '10px 18px',
  border: '1px solid var(--border-subtle)',
  borderRadius: '8px',
  color: 'var(--text-secondary)',
  fontSize: '13px',
  fontWeight: 500,
  background: 'transparent',
  transition: 'all 0.25s',
  textDecoration: 'none',
};

const rightColStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

const cardStyle = (hovered) => ({
  display: 'flex',
  gap: '16px',
  alignItems: 'flex-start',
  padding: '24px',
  background: hovered ? 'var(--bg-card-hover)' : 'var(--bg-card)',
  border: `1px solid ${hovered ? 'var(--border-glow)' : 'var(--border-subtle)'}`,
  borderRadius: '16px',
  transition: 'all 0.3s',
  transform: hovered ? 'translateX(6px)' : 'translateX(0)',
  cursor: 'default',
});

const iconBoxStyle = (hovered) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '44px',
  height: '44px',
  minWidth: '44px',
  background: hovered ? 'var(--accent-cyan-dim)' : 'rgba(0, 212, 255, 0.06)',
  border: `1px solid ${hovered ? 'var(--border-glow)' : 'var(--border-subtle)'}`,
  borderRadius: '10px',
  color: 'var(--accent-cyan)',
  transition: 'all 0.3s',
});

const quoteCardStyle = {
  padding: '28px',
  background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, rgba(124, 58, 255, 0.05) 100%)',
  border: '1px solid var(--border-glow)',
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginTop: '8px',
};

const quoteDividerStyle = {
  width: '40px',
  height: '3px',
  background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-violet))',
  borderRadius: '2px',
};

const quoteTextStyle = {
  fontSize: '15px',
  color: 'var(--text-secondary)',
  lineHeight: 1.75,
  fontStyle: 'italic',
  fontWeight: 300,
};

const quoteAuthorStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '12px',
  color: 'var(--accent-cyan)',
  letterSpacing: '0.05em',
};
