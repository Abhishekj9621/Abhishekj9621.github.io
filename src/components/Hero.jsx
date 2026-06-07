import React, { useEffect, useRef, useState } from 'react';
import {
  RiGithubLine,
  RiLinkedinLine,
  RiArrowDownLine,
  RiBrainLine,
  RiCodeSSlashLine,
  RiRocketLine,
} from 'react-icons/ri';

const ROLES = [
  'AI Engineer',
  'Full-Stack Developer',
  'Multi-Agent Systems Builder',
  'React Native Specialist',
  'LLM Pipeline Architect',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIdx];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIdx((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIdx]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrame;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach(q => {
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.05 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" style={heroStyle}>
      {/* Canvas background */}
      <canvas ref={canvasRef} style={canvasStyle} />

      {/* Gradient orbs */}
      <div style={orb1Style} />
      <div style={orb2Style} />
      <div style={orb3Style} />

      {/* Grid overlay */}
      <div style={gridStyle} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={contentStyle}>
          {/* Status badge */}
          <div style={badgeStyle} className="reveal">
            <span style={badgeDotStyle} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-emerald)', letterSpacing: '0.08em' }}>
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>

          {/* Main heading */}
          <h1 style={headingStyle} className="reveal" data-delay="0.1">
            <span style={{ display: 'block', color: 'var(--text-secondary)', fontWeight: 400, fontSize: 'clamp(18px, 3vw, 24px)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', marginBottom: '12px' }}>
              HI, I'M
            </span>
            <span style={{ display: 'block', lineHeight: 1.05 }}>
              <span style={{ color: 'var(--text-primary)' }}>Abhishek</span>
              {' '}
              <span className="gradient-text">Jaiswal</span>
            </span>
          </h1>

          {/* Typewriter role */}
          <div style={roleStyle} className="reveal">
            <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '14px' }}>
              {'// '}
            </span>
            <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: 'clamp(16px, 2.5vw, 22px)', fontWeight: 500 }}>
              {displayText}
            </span>
            <span style={{ color: 'var(--accent-cyan)', animation: 'blink 1s infinite', fontFamily: 'var(--font-mono)', fontSize: 'clamp(16px, 2.5vw, 22px)' }}>
              |
            </span>
          </div>

          {/* Description */}
          <p style={descStyle} className="reveal">
            Building intelligent systems that bridge cutting-edge AI with production-grade engineering.
            From <strong style={{ color: 'var(--text-primary)' }}>multi-agent LLM frameworks</strong> to{' '}
            <strong style={{ color: 'var(--text-primary)' }}>cross-platform mobile apps</strong> — I ship
            products that make a real-world impact.
          </p>

          {/* Stat pills */}
          <div style={statsRow} className="reveal">
            {[
              { icon: <RiBrainLine size={16} />, label: 'AI/ML Projects', value: '10+' },
              { icon: <RiCodeSSlashLine size={16} />, label: 'Tech Stack', value: '30+' },
              { icon: <RiRocketLine size={16} />, label: 'Production Apps', value: '5+' },
            ].map(stat => (
              <div key={stat.label} style={statPillStyle}>
                <span style={{ color: 'var(--accent-cyan)' }}>{stat.icon}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: 'var(--text-primary)' }}>{stat.value}</span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.03em' }}>{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={ctaRowStyle} className="reveal">
            <a
              href="#projects"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={primaryBtnStyle}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 30px var(--accent-cyan-glow)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.15)';
              }}
            >
              View My Work
              <RiArrowDownLine size={18} />
            </a>
            <a
              href="mailto:abhishek.j9621@gmail.com"
              style={secondaryBtnStyle}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--accent-cyan-dim)';
                e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get In Touch
            </a>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginLeft: '8px' }}>
              {[
                { icon: <RiGithubLine size={20} />, href: 'https://github.com/Abhishekj9621', label: 'GitHub' },
                { icon: <RiLinkedinLine size={20} />, href: 'https://www.linkedin.com/in/abhishek-jaiswal-82571a272/', label: 'LinkedIn' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={socialIconStyle}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--accent-cyan)';
                    e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <button onClick={scrollToAbout} style={scrollBtnStyle} aria-label="Scroll down">
            <div style={scrollInnerStyle}>
              <RiArrowDownLine size={16} style={{ animation: 'float 2s ease-in-out infinite' }} />
            </div>
          </button>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={bottomFadeStyle} />
    </section>
  );
}

const heroStyle = {
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  paddingTop: '90px',
};

const canvasStyle = {
  position: 'absolute',
  top: 0, left: 0, right: 0, bottom: 0,
  zIndex: 0,
};

const orb1Style = {
  position: 'absolute',
  top: '-10%',
  right: '-5%',
  width: '600px',
  height: '600px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%)',
  filter: 'blur(40px)',
  animation: 'pulse-glow 6s ease-in-out infinite',
};

const orb2Style = {
  position: 'absolute',
  bottom: '5%',
  left: '-10%',
  width: '500px',
  height: '500px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(124, 58, 255, 0.1) 0%, transparent 70%)',
  filter: 'blur(50px)',
  animation: 'pulse-glow 8s ease-in-out infinite 2s',
};

const orb3Style = {
  position: 'absolute',
  top: '40%',
  left: '30%',
  width: '300px',
  height: '300px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(0, 229, 160, 0.05) 0%, transparent 70%)',
  filter: 'blur(30px)',
};

const gridStyle = {
  position: 'absolute',
  inset: 0,
  backgroundImage: `
    linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
  `,
  backgroundSize: '60px 60px',
  zIndex: 1,
};

const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '28px',
  maxWidth: '800px',
  paddingTop: '20px',
  paddingBottom: '80px',
};

const badgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px 16px',
  background: 'rgba(0, 229, 160, 0.08)',
  border: '1px solid rgba(0, 229, 160, 0.25)',
  borderRadius: '100px',
  width: 'fit-content',
};

const badgeDotStyle = {
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  background: 'var(--accent-emerald)',
  boxShadow: '0 0 8px var(--accent-emerald)',
  animation: 'pulse-glow 2s ease-in-out infinite',
  display: 'inline-block',
};

const headingStyle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 800,
  fontSize: 'clamp(48px, 8vw, 88px)',
  lineHeight: 1.0,
  letterSpacing: '-0.02em',
};

const roleStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  minHeight: '36px',
};

const descStyle = {
  fontSize: 'clamp(15px, 1.8vw, 18px)',
  color: 'var(--text-secondary)',
  maxWidth: '600px',
  lineHeight: 1.75,
  fontWeight: 300,
};

const statsRow = {
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap',
};

const statPillStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '12px 20px',
  background: 'var(--bg-card)',
  border: '1px solid var(--border-subtle)',
  borderRadius: '12px',
  backdropFilter: 'blur(10px)',
};

const ctaRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  flexWrap: 'wrap',
};

const primaryBtnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '14px 32px',
  background: 'linear-gradient(135deg, var(--accent-cyan) 0%, #0099CC 100%)',
  color: 'var(--bg-primary)',
  borderRadius: '10px',
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: '15px',
  letterSpacing: '0.03em',
  transition: 'all 0.25s',
  boxShadow: '0 0 20px rgba(0, 212, 255, 0.15)',
  textDecoration: 'none',
};

const secondaryBtnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '14px 32px',
  background: 'transparent',
  color: 'var(--text-primary)',
  borderRadius: '10px',
  border: '1px solid var(--border-subtle)',
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  fontSize: '15px',
  letterSpacing: '0.03em',
  transition: 'all 0.25s',
  textDecoration: 'none',
};

const socialIconStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '44px',
  height: '44px',
  border: '1px solid var(--border-subtle)',
  borderRadius: '10px',
  color: 'var(--text-secondary)',
  transition: 'all 0.25s',
};

const scrollBtnStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  alignSelf: 'flex-start',
};

const scrollInnerStyle = {
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid var(--border-subtle)',
  borderRadius: '50%',
  color: 'var(--text-muted)',
};

const bottomFadeStyle = {
  position: 'absolute',
  bottom: 0, left: 0, right: 0,
  height: '120px',
  background: 'linear-gradient(transparent, var(--bg-primary))',
  zIndex: 3,
};
