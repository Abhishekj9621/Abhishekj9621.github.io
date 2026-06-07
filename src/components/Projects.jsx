import React, { useState } from 'react';
import {
  RiGithubLine,
  RiExternalLinkLine,
  RiCodeSSlashLine,
  RiBrainLine,
  RiSmartphoneLine,
  RiRobot2Line,
  RiEyeLine,
  RiFileTextLine,
  RiArrowRightLine,
} from 'react-icons/ri';

const projects = [
  {
    id: 1,
    title: 'Cross-Platform E-Commerce App',
    category: 'Mobile + Backend',
    icon: <RiSmartphoneLine size={24} />,
    color: '#00D4FF',
    description:
      'A full-featured e-commerce platform built in React Native for Android & iOS, backed by a production-grade FastAPI API with real-time order tracking.',
    longDesc:
      'Architected a complete e-commerce ecosystem — from polished React Native UI with smooth animations and deep linking to a robust FastAPI backend with JWT auth, RBAC, and WebSocket-powered real-time notifications. Deployed on GCP with PostgreSQL.',
    stack: ['React Native', 'FastAPI', 'PostgreSQL', 'JWT', 'WebSockets', 'GCP', 'Docker'],
    highlights: [
      'Real-time order tracking via WebSockets',
      'JWT + OAuth2 auth with RBAC access control',
      'Push notifications & deep linking on iOS & Android',
      'Smooth 60fps animations using React Native Animated API',
    ],
    github: 'https://github.com/Abhishekj9621',
    featured: true,
  },
  {
    id: 2,
    title: 'LLM-Powered Travel Assistant',
    category: 'AI + Mobile',
    icon: <RiBrainLine size={24} />,
    color: '#7C3AFF',
    description:
      'A conversational mobile app that generates personalized travel plans using LangChain-powered LLM reasoning and contextual memory.',
    longDesc:
      'Combines React Native UI with a Node.js/Express backend that leverages LangChain memory and tool integrations. The system maintains conversation context across sessions and generates dynamic, location-aware itineraries.',
    stack: ['React Native', 'Node.js', 'LangChain', 'OpenAI API', 'Express.js', 'MongoDB'],
    highlights: [
      'LangChain conversational memory for context-aware responses',
      'Dynamic itinerary generation with real-time API integrations',
      'Cross-platform mobile UI with smooth chat UX',
      'Personalized recommendations using LLM reasoning chains',
    ],
    github: 'https://github.com/Abhishekj9621/TripAdvisor',
    featured: true,
  },
  {
    id: 3,
    title: 'CrowdSense — Crowd Analysis System',
    category: 'Computer Vision',
    icon: <RiEyeLine size={24} />,
    color: '#00E5A0',
    description:
      'An AI-driven crowd analysis system using deep learning and real-time video processing for crowd density estimation and intelligent monitoring.',
    longDesc:
      'Built with OpenCV and PyTorch deep learning models, CrowdSense processes live video streams to estimate crowd density and detect anomalies. Results are served via FastAPI for integration with mobile dashboards.',
    stack: ['Python', 'OpenCV', 'PyTorch', 'FastAPI', 'Deep Learning', 'Docker'],
    highlights: [
      'Real-time video stream processing with OpenCV',
      'Deep learning crowd density estimation model',
      'Scalable REST API exposure via FastAPI',
      'Mobile dashboard integration for live monitoring',
    ],
    github: 'https://github.com/Abhishekj9621/CrowdSense',
    featured: true,
  },
  {
    id: 4,
    title: 'Multi-Agent Business Advisor',
    category: 'AI Agents',
    icon: <RiRobot2Line size={24} />,
    color: '#F59E0B',
    description:
      'Collaborative AI agents for market analysis, financial insights, and business strategy generation — orchestrated via CrewAI and exposed as REST endpoints.',
    longDesc:
      'Designed a team of specialized AI agents using CrewAI — each handling market analysis, financial forecasting, or strategic planning. Agents collaborate to produce comprehensive business intelligence reports, served via FastAPI.',
    stack: ['CrewAI', 'FastAPI', 'Django', 'Python', 'OpenAI', 'LangGraph'],
    highlights: [
      'CrewAI multi-agent orchestration with specialized roles',
      'Market analysis, financial insights & strategy generation',
      'REST API endpoints consumable by web and mobile frontends',
      'Scalable backend pipelines for intelligent business automation',
    ],
    github: 'https://github.com/Abhishekj9621',
    featured: false,
  },
  {
    id: 5,
    title: 'AI-Powered OCR & Document Intelligence',
    category: 'Computer Vision + NLP',
    icon: <RiFileTextLine size={24} />,
    color: '#FF6B6B',
    description:
      'An intelligent document extraction pipeline using OCR, deep learning classification, and real-time analysis served via REST API.',
    longDesc:
      'Built an end-to-end document intelligence system — from text detection with OpenCV to classification and extraction using TensorFlow. Optimized inference pipelines serve results in real time via FastAPI.',
    stack: ['OpenCV', 'TensorFlow', 'FastAPI', 'Python', 'OCR', 'Deep Learning'],
    highlights: [
      'OCR pipeline with OpenCV text detection',
      'Deep learning-based document classification',
      'Preprocessing & normalization workflows for accuracy',
      'Real-time inference API for instant document analysis',
    ],
    github: 'https://github.com/Abhishekj9621',
    featured: false,
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Mobile + Backend', 'AI + Mobile', 'Computer Vision', 'AI Agents', 'Computer Vision + NLP'];
  const visible = ['All', 'Featured'].includes(filter)
    ? projects.filter(p => filter === 'All' || p.featured)
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div style={sectionLabelStyle} className="reveal">
          <span style={labelLineStyle} />
          <span style={labelTextStyle}>PROJECTS</span>
        </div>

        <div style={headerRowStyle} className="reveal">
          <h2 style={headingStyle}>
            Featured <span className="gradient-text">Case Studies</span>
          </h2>
          <p style={subStyle}>
            Each project is a story of a problem identified, a solution engineered, and a product shipped.
          </p>
        </div>

        {/* Filter chips */}
        <div style={filterRowStyle} className="reveal">
          {['All', 'Featured'].concat(categories.slice(1)).filter((v, i, a) => a.indexOf(v) === i).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={filterBtnStyle(filter === f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div style={gridStyle}>
          {visible.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}

function ProjectCard({ project, index, onOpen }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="reveal"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        style={cardStyle(hovered, project.color)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Top bar */}
        <div style={cardTopStyle}>
          <div style={iconWrapStyle(project.color)}>
            <span style={{ color: project.color }}>{project.icon}</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            {project.featured && (
              <span style={featuredBadgeStyle}>FEATURED</span>
            )}
            <span style={categoryBadgeStyle(project.color)}>{project.category}</span>
          </div>
        </div>

        {/* Title & desc */}
        <div style={{ flex: 1 }}>
          <h3 style={cardTitleStyle}>{project.title}</h3>
          <p style={cardDescStyle}>{project.description}</p>
        </div>

        {/* Stack tags */}
        <div style={stackRowStyle}>
          {project.stack.slice(0, 4).map(t => (
            <span key={t} style={stackTagStyle}>{t}</span>
          ))}
          {project.stack.length > 4 && (
            <span style={{ ...stackTagStyle, color: 'var(--text-muted)' }}>+{project.stack.length - 4}</span>
          )}
        </div>

        {/* Actions */}
        <div style={actionsStyle}>
          <button
            onClick={onOpen}
            style={viewBtnStyle(project.color)}
          >
            <RiCodeSSlashLine size={15} />
            View Case Study
            <RiArrowRightLine size={15} />
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={iconActionStyle}
            aria-label="GitHub"
          >
            <RiGithubLine size={18} />
          </a>
        </div>

        {/* Hover glow */}
        {hovered && (
          <div style={hoverGlowStyle(project.color)} />
        )}
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div style={modalHeaderStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ ...iconWrapStyle(project.color), width: '52px', height: '52px' }}>
              <span style={{ color: project.color }}>{project.icon}</span>
            </div>
            <div>
              <span style={categoryBadgeStyle(project.color)}>{project.category}</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '24px', marginTop: '6px' }}>
                {project.title}
              </h3>
            </div>
          </div>
          <button onClick={onClose} style={closeBtnStyle}>✕</button>
        </div>

        <div style={{ height: '1px', background: 'var(--border-subtle)', margin: '24px 0' }} />

        {/* Long desc */}
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '15px', marginBottom: '28px' }}>
          {project.longDesc}
        </p>

        {/* Highlights */}
        <div style={{ marginBottom: '28px' }}>
          <div style={modalSectionLabel}>KEY FEATURES</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {project.highlights.map((h, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ width: '6px', height: '6px', minWidth: '6px', borderRadius: '50%', background: project.color, marginTop: '8px' }} />
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{h}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stack */}
        <div style={{ marginBottom: '28px' }}>
          <div style={modalSectionLabel}>TECH STACK</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.stack.map(t => (
              <span key={t} style={techTagStyle(project.color)}>{t}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={modalGhBtnStyle}
          >
            <RiGithubLine size={18} />
            View on GitHub
            <RiExternalLinkLine size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

// Styles
const sectionLabelStyle = { display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' };
const labelLineStyle = { display: 'block', width: '40px', height: '2px', background: 'var(--accent-cyan)' };
const labelTextStyle = { fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-cyan)', letterSpacing: '0.2em' };
const headerRowStyle = { marginBottom: '40px' };
const headingStyle = { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '16px' };
const subStyle = { color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '500px', fontWeight: 300 };
const filterRowStyle = { display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '48px' };
const filterBtnStyle = (active) => ({
  padding: '8px 18px',
  background: active ? 'var(--accent-cyan)' : 'transparent',
  color: active ? 'var(--bg-primary)' : 'var(--text-secondary)',
  border: `1px solid ${active ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
  borderRadius: '100px',
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  fontSize: '13px',
  cursor: 'pointer',
  transition: 'all 0.2s',
  letterSpacing: '0.02em',
});
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' };
const cardStyle = (hovered, color) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '28px',
  background: hovered ? 'var(--bg-card-hover)' : 'var(--bg-card)',
  border: `1px solid ${hovered ? color + '50' : 'var(--border-subtle)'}`,
  borderRadius: '20px',
  transition: 'all 0.35s',
  transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
  overflow: 'hidden',
  cursor: 'default',
  height: '100%',
  boxSizing: 'border-box',
});
const cardTopStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const iconWrapStyle = (color) => ({
  width: '48px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `${color}12`,
  border: `1px solid ${color}30`,
  borderRadius: '12px',
});
const featuredBadgeStyle = {
  padding: '3px 8px',
  background: 'rgba(0, 212, 255, 0.1)',
  border: '1px solid rgba(0, 212, 255, 0.3)',
  borderRadius: '4px',
  color: 'var(--accent-cyan)',
  fontFamily: 'var(--font-mono)',
  fontSize: '10px',
  letterSpacing: '0.1em',
};
const categoryBadgeStyle = (color) => ({
  padding: '3px 10px',
  background: `${color}12`,
  border: `1px solid ${color}30`,
  borderRadius: '4px',
  color: color,
  fontFamily: 'var(--font-mono)',
  fontSize: '10px',
  letterSpacing: '0.06em',
});
const cardTitleStyle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: '20px',
  color: 'var(--text-primary)',
  lineHeight: 1.3,
  marginBottom: '10px',
};
const cardDescStyle = {
  fontSize: '14px',
  color: 'var(--text-secondary)',
  lineHeight: 1.7,
};
const stackRowStyle = { display: 'flex', flexWrap: 'wrap', gap: '6px' };
const stackTagStyle = {
  padding: '4px 10px',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid var(--border-subtle)',
  borderRadius: '5px',
  color: 'var(--text-muted)',
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
};
const actionsStyle = { display: 'flex', gap: '10px', alignItems: 'center', marginTop: 'auto' };
const viewBtnStyle = (color) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '10px 18px',
  background: `${color}15`,
  border: `1px solid ${color}40`,
  borderRadius: '8px',
  color: color,
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  fontSize: '13px',
  cursor: 'pointer',
  transition: 'all 0.2s',
  flex: 1,
  justifyContent: 'center',
});
const iconActionStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  border: '1px solid var(--border-subtle)',
  borderRadius: '8px',
  color: 'var(--text-secondary)',
  transition: 'all 0.2s',
};
const hoverGlowStyle = (color) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '3px',
  background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
  borderRadius: '0 0 20px 20px',
});
const overlayStyle = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(5, 10, 20, 0.85)',
  backdropFilter: 'blur(12px)',
  zIndex: 2000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  animation: 'fadeIn 0.2s ease',
};
const modalStyle = {
  background: 'var(--bg-card)',
  border: '1px solid var(--border-subtle)',
  borderRadius: '24px',
  padding: '40px',
  maxWidth: '680px',
  width: '100%',
  maxHeight: '90vh',
  overflowY: 'auto',
  animation: 'fadeInUp 0.3s ease',
};
const modalHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '16px',
};
const closeBtnStyle = {
  background: 'transparent',
  border: '1px solid var(--border-subtle)',
  borderRadius: '8px',
  color: 'var(--text-muted)',
  fontSize: '16px',
  cursor: 'pointer',
  padding: '8px 12px',
  transition: 'all 0.2s',
};
const modalSectionLabel = {
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
  color: 'var(--text-muted)',
  letterSpacing: '0.15em',
  marginBottom: '12px',
};
const techTagStyle = (color) => ({
  padding: '5px 14px',
  background: `${color}10`,
  border: `1px solid ${color}30`,
  borderRadius: '6px',
  color: color,
  fontSize: '12px',
  fontFamily: 'var(--font-mono)',
});
const modalGhBtnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '12px 24px',
  background: 'var(--bg-card-hover)',
  border: '1px solid var(--border-subtle)',
  borderRadius: '10px',
  color: 'var(--text-primary)',
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  fontSize: '14px',
  transition: 'all 0.2s',
  textDecoration: 'none',
};
