import React, { useState } from 'react';
import {
  RiBriefcaseLine,
  RiMapPinLine,
  RiCalendarLine,
  RiCheckLine,
  RiExternalLinkLine,
} from 'react-icons/ri';

const experiences = [
  {
    role: 'Artificial Intelligence Engineer',
    company: 'Heuro AI',
    location: 'Jaipur, India',
    period: 'Feb 2026 — Present',
    type: 'Full-Time',
    current: true,
    color: 'var(--accent-cyan)',
    highlights: [
      'Built and deployed backend systems for autonomous AI agents using LangGraph, CrewAI, OpenClaw, and n8n.',
      'Designed multi-agent orchestration pipelines for complex task execution and decision workflows.',
      'Developed scalable FastAPI/Django REST APIs enabling integration of AI agents with external tools and mobile clients.',
      'Contributed to R&D in AI automation and emerging agentic technologies to improve system reliability and reduce latency.',
    ],
    stack: ['LangGraph', 'CrewAI', 'FastAPI', 'Django', 'n8n', 'Python'],
  },
  {
    role: 'Co-Founder',
    company: 'Cognitek Solutions',
    location: 'Kota, India',
    period: 'Sep 2024 — Sep 2025',
    type: 'Founder',
    current: false,
    color: 'var(--accent-violet)',
    highlights: [
      'Founded and managed an IT and digital marketing services company, overseeing product development and business strategy.',
      'Led cross-functional teams to deliver technology projects on time, ensuring high-quality solutions tailored to client needs.',
      'Built strong client relationships through effective communication, project management, and stakeholder engagement.',
    ],
    stack: ['Leadership', 'Product Strategy', 'Team Building', 'Client Management'],
  },
  {
    role: 'AI Automation Intern',
    company: 'Gosotek Technology Pvt. Ltd.',
    location: 'Jaipur, India',
    period: 'May 2024 — Nov 2024',
    type: 'Internship',
    current: false,
    color: 'var(--accent-emerald)',
    highlights: [
      'Built automation pipelines integrating AI models into enterprise workflows via FastAPI endpoints.',
      'Developed Python-based automation solutions to enhance workflow efficiency and operational processes.',
      'Researched and identified new libraries and tools to continuously improve automation systems.',
    ],
    stack: ['FastAPI', 'Python', 'Automation', 'AI Integration'],
  },
  {
    role: 'AI Intern',
    company: 'Clickzy Creative Technologies',
    location: 'Kota, India',
    period: 'Jun 2023 — Jul 2023',
    type: 'Internship',
    current: false,
    color: 'var(--accent-amber)',
    highlights: [
      'Developed OCR and image classification models using TensorFlow and PyTorch.',
      'Performed data preprocessing and model optimization for improved accuracy.',
      'Worked on computer vision workflows involving audio and image processing and intelligent automation.',
    ],
    stack: ['TensorFlow', 'PyTorch', 'OpenCV', 'Computer Vision', 'OCR'],
  },
];

export default function Experience() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={sectionLabelStyle} className="reveal">
          <span style={labelLineStyle} />
          <span style={labelTextStyle}>EXPERIENCE</span>
        </div>

        <div style={headerRowStyle} className="reveal">
          <h2 style={headingStyle}>
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p style={subStyle}>
            From internships to founding companies — a track record of impact across AI, software, and product.
          </p>
        </div>

        <div style={layoutStyle}>
          {/* Tab sidebar */}
          <div style={tabListStyle}>
            {experiences.map((exp, i) => (
              <button
                key={exp.company}
                onClick={() => setActiveIdx(i)}
                style={tabBtnStyle(activeIdx === i, exp.color)}
              >
                <div style={tabDotStyle(activeIdx === i, exp.color)} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', color: activeIdx === i ? 'var(--text-primary)' : 'var(--text-secondary)', marginBottom: '2px' }}>
                    {exp.company}
                  </div>
                  <div style={{ fontSize: '12px', color: activeIdx === i ? exp.color : 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {exp.type}
                  </div>
                </div>
                {exp.current && (
                  <span style={currentBadgeStyle}>NOW</span>
                )}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div style={detailPanelStyle} key={activeIdx}>
            <ExperienceDetail exp={experiences[activeIdx]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceDetail({ exp }) {
  return (
    <div style={detailStyle}>
      {/* Header */}
      <div style={detailHeaderStyle}>
        <div>
          <div style={rolePillStyle(exp.color)}>
            <RiBriefcaseLine size={14} />
            <span>{exp.type}</span>
          </div>
          <h3 style={roleHeadingStyle}>{exp.role}</h3>
          <div style={companyRowStyle}>
            <span style={{ color: exp.color, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px' }}>
              {exp.company}
            </span>
          </div>
        </div>

        <div style={metaColStyle}>
          <div style={metaItemStyle}>
            <RiCalendarLine size={14} style={{ color: 'var(--text-muted)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-secondary)' }}>
              {exp.period}
            </span>
          </div>
          <div style={metaItemStyle}>
            <RiMapPinLine size={14} style={{ color: 'var(--text-muted)' }} />
            <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{exp.location}</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={dividerStyle(exp.color)} />

      {/* Highlights */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {exp.highlights.map((h, i) => (
          <div key={i} style={highlightRowStyle}>
            <div style={checkIconStyle(exp.color)}>
              <RiCheckLine size={13} />
            </div>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{h}</p>
          </div>
        ))}
      </div>

      {/* Stack */}
      <div style={{ marginTop: '28px' }}>
        <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', marginBottom: '12px' }}>
          TECHNOLOGIES USED
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {exp.stack.map(tech => (
            <span key={tech} style={techTagStyle(exp.color)}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

const sectionLabelStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '40px',
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
const headerRowStyle = {
  marginBottom: '60px',
};
const headingStyle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 800,
  fontSize: 'clamp(32px, 4vw, 52px)',
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
  marginBottom: '16px',
};
const subStyle = {
  color: 'var(--text-secondary)',
  fontSize: '16px',
  maxWidth: '500px',
  fontWeight: 300,
};
const layoutStyle = {
  display: 'grid',
  gridTemplateColumns: '280px 1fr',
  gap: '32px',
  alignItems: 'start',
};
const tabListStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  position: 'sticky',
  top: '100px',
};
const tabBtnStyle = (active, color) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  padding: '16px 20px',
  background: active ? 'var(--bg-card-hover)' : 'transparent',
  border: `1px solid ${active ? color : 'transparent'}`,
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'all 0.25s',
  textAlign: 'left',
  position: 'relative',
  overflow: 'hidden',
});
const tabDotStyle = (active, color) => ({
  width: '8px',
  height: '8px',
  minWidth: '8px',
  borderRadius: '50%',
  background: active ? color : 'var(--text-muted)',
  boxShadow: active ? `0 0 8px ${color}` : 'none',
  transition: 'all 0.25s',
});
const currentBadgeStyle = {
  marginLeft: 'auto',
  padding: '2px 8px',
  background: 'var(--accent-emerald-dim)',
  border: '1px solid var(--accent-emerald)',
  borderRadius: '4px',
  color: 'var(--accent-emerald)',
  fontFamily: 'var(--font-mono)',
  fontSize: '10px',
  letterSpacing: '0.1em',
};
const detailPanelStyle = {
  animation: 'fadeInUp 0.4s ease',
};
const detailStyle = {
  padding: '40px',
  background: 'var(--bg-card)',
  border: '1px solid var(--border-subtle)',
  borderRadius: '20px',
};
const detailHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '20px',
  marginBottom: '28px',
  flexWrap: 'wrap',
};
const rolePillStyle = (color) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '4px 12px',
  background: `${color}18`,
  border: `1px solid ${color}40`,
  borderRadius: '100px',
  color: color,
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
  letterSpacing: '0.05em',
  marginBottom: '12px',
});
const roleHeadingStyle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 800,
  fontSize: 'clamp(22px, 3vw, 32px)',
  color: 'var(--text-primary)',
  lineHeight: 1.15,
  marginBottom: '8px',
};
const companyRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};
const metaColStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  alignItems: 'flex-end',
};
const metaItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};
const dividerStyle = (color) => ({
  height: '1px',
  background: `linear-gradient(90deg, ${color}40 0%, transparent 100%)`,
  marginBottom: '28px',
});
const highlightRowStyle = {
  display: 'flex',
  gap: '14px',
  alignItems: 'flex-start',
};
const checkIconStyle = (color) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  minWidth: '24px',
  background: `${color}18`,
  border: `1px solid ${color}40`,
  borderRadius: '6px',
  color: color,
  marginTop: '2px',
});
const techTagStyle = (color) => ({
  padding: '5px 14px',
  background: `${color}10`,
  border: `1px solid ${color}30`,
  borderRadius: '6px',
  color: color,
  fontSize: '12px',
  fontFamily: 'var(--font-mono)',
  letterSpacing: '0.03em',
});
