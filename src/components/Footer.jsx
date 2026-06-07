import React from 'react';
import {
  RiGithubLine,
  RiLinkedinLine,
  RiGlobalLine,
  RiMailLine,
  RiCodeSSlashLine,
  RiHeartFill,
  RiArrowUpLine,
} from 'react-icons/ri';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: <RiGithubLine size={18} />, href: 'https://github.com/Abhishekj9621', label: 'GitHub' },
  { icon: <RiLinkedinLine size={18} />, href: 'https://www.linkedin.com/in/abhishek-jaiswal-82571a272/', label: 'LinkedIn' },
  { icon: <RiGlobalLine size={18} />, href: 'https://gotme.lovable.app/', label: 'Portfolio' },
  { icon: <RiMailLine size={18} />, href: 'mailto:abhishek.j9621@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={footerStyle}>
      {/* Top divider */}
      <div style={topDividerStyle} />

      <div className="container">
        <div style={innerStyle}>
          {/* Brand col */}
          <div style={brandColStyle}>
            <div style={logoStyle}>
              <RiCodeSSlashLine size={20} style={{ color: 'var(--accent-cyan)' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px' }}>
                Abhishek Jaiswal
              </span>
            </div>
            <p style={taglineStyle}>
              AI & Full-Stack Engineer · Jaipur, India
            </p>
            <p style={descStyle}>
              Building intelligent systems at the intersection of AI, automation, and production engineering.
            </p>
            <div style={socialRowStyle}>
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={socialLinkStyle}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--accent-cyan)';
                    e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                    e.currentTarget.style.background = 'var(--accent-cyan-dim)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav col */}
          <div style={navColStyle}>
            <div style={colLabelStyle}>NAVIGATION</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {navLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={e => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={footerLinkStyle}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-cyan)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div style={navColStyle}>
            <div style={colLabelStyle}>GET IN TOUCH</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Email', value: 'abhishek.j9621@gmail.com', href: 'mailto:abhishek.j9621@gmail.com' },
                { label: 'Phone', value: '+91-9621436603', href: 'tel:+919621436603' },
                { label: 'Location', value: 'Jaipur, Rajasthan', href: null },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', marginBottom: '2px' }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={contactValStyle}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-cyan)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={contactValStyle}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div style={availBadgeStyle}>
              <span style={availDotStyle} />
              <span style={{ fontSize: '12px', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                Open to Opportunities
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={bottomBarStyle}>
          <span style={copyrightStyle}>
            © {new Date().getFullYear()} Abhishek Jaiswal · Built with{' '}
            <RiHeartFill size={12} style={{ color: '#FF6B9D', display: 'inline', verticalAlign: 'middle' }} />
            {' '}& React
          </span>

          <div style={bottomLinksStyle}>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              AI · Full-Stack · Mobile
            </span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            style={backTopStyle}
            aria-label="Back to top"
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--accent-cyan)';
              e.currentTarget.style.color = 'var(--bg-primary)';
              e.currentTarget.style.borderColor = 'var(--accent-cyan)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
            }}
          >
            <RiArrowUpLine size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

const footerStyle = {
  background: 'var(--bg-primary)',
  borderTop: '1px solid var(--border-subtle)',
  position: 'relative',
};

const topDividerStyle = {
  height: '1px',
  background: 'linear-gradient(90deg, transparent, var(--accent-cyan-glow), var(--accent-violet), transparent)',
  opacity: 0.4,
};

const innerStyle = {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1fr',
  gap: '64px',
  padding: '64px 0 48px',
};

const brandColStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  color: 'var(--text-primary)',
};

const taglineStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '12px',
  color: 'var(--accent-cyan)',
  letterSpacing: '0.08em',
};

const descStyle = {
  fontSize: '14px',
  color: 'var(--text-muted)',
  lineHeight: 1.75,
  maxWidth: '320px',
  fontWeight: 300,
};

const socialRowStyle = {
  display: 'flex',
  gap: '10px',
  marginTop: '4px',
};

const socialLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '38px',
  height: '38px',
  border: '1px solid var(--border-subtle)',
  borderRadius: '8px',
  color: 'var(--text-muted)',
  transition: 'all 0.25s',
  background: 'transparent',
};

const navColStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const colLabelStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
  color: 'var(--text-muted)',
  letterSpacing: '0.2em',
};

const footerLinkStyle = {
  fontSize: '14px',
  color: 'var(--text-muted)',
  transition: 'color 0.2s',
  textDecoration: 'none',
  display: 'block',
};

const contactValStyle = {
  fontSize: '14px',
  color: 'var(--text-secondary)',
  transition: 'color 0.2s',
  textDecoration: 'none',
  display: 'block',
};

const availBadgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '7px 14px',
  background: 'rgba(0, 229, 160, 0.06)',
  border: '1px solid rgba(0, 229, 160, 0.2)',
  borderRadius: '8px',
  width: 'fit-content',
  marginTop: '4px',
};

const availDotStyle = {
  width: '7px',
  height: '7px',
  borderRadius: '50%',
  background: 'var(--accent-emerald)',
  boxShadow: '0 0 6px var(--accent-emerald)',
  animation: 'pulse-glow 2s ease-in-out infinite',
  display: 'inline-block',
};

const bottomBarStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 0',
  borderTop: '1px solid var(--border-subtle)',
  gap: '16px',
  flexWrap: 'wrap',
};

const copyrightStyle = {
  fontSize: '13px',
  color: 'var(--text-muted)',
  fontFamily: 'var(--font-mono)',
};

const bottomLinksStyle = {
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
};

const backTopStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '36px',
  height: '36px',
  border: '1px solid var(--border-subtle)',
  borderRadius: '8px',
  color: 'var(--text-muted)',
  background: 'transparent',
  cursor: 'pointer',
  transition: 'all 0.25s',
};
