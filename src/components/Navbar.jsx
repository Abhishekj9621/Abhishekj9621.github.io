import React, { useState, useEffect } from 'react';
import { RiMenuLine, RiCloseLine, RiCodeSSlashLine } from 'react-icons/ri';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = navLinks.map(l => l.href.slice(1));
      let current = '';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav style={navStyle(scrolled)}>
        <div style={innerStyle}>
          {/* Logo */}
          <a href="#hero" onClick={() => handleNavClick('#hero')} style={logoStyle}>
            <RiCodeSSlashLine size={20} style={{ color: 'var(--accent-cyan)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px' }}>
              AJ
            </span>
          </a>

          {/* Desktop Links */}
          <ul style={linksStyle}>
            {navLinks.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  style={linkItemStyle(activeSection === link.href.slice(1))}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <span style={activeDotStyle} />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="mailto:abhishek.j9621@gmail.com"
            style={ctaStyle}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--accent-cyan)';
              e.currentTarget.style.color = 'var(--bg-primary)';
              e.currentTarget.style.boxShadow = '0 0 20px var(--accent-cyan-glow)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--accent-cyan)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Hire Me
          </a>

          {/* Mobile toggle */}
          <button
            style={menuBtnStyle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div style={mobileMenuStyle(menuOpen)}>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                style={mobileLinkStyle}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="mailto:abhishek.j9621@gmail.com" style={mobileCtaStyle}>
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

const navStyle = (scrolled) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  padding: scrolled ? '14px 0' : '22px 0',
  background: scrolled
    ? 'rgba(5, 10, 20, 0.92)'
    : 'transparent',
  backdropFilter: scrolled ? 'blur(20px)' : 'none',
  borderBottom: scrolled ? '1px solid var(--border-subtle)' : 'none',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
});

const innerStyle = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '32px',
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: 'var(--text-primary)',
  textDecoration: 'none',
  letterSpacing: '0.05em',
};

const linksStyle = {
  display: 'flex',
  listStyle: 'none',
  gap: '8px',
  alignItems: 'center',
  '@media (max-width: 768px)': { display: 'none' },
};

const linkItemStyle = (active) => ({
  position: 'relative',
  padding: '8px 16px',
  color: active ? 'var(--accent-cyan)' : 'var(--text-secondary)',
  fontFamily: 'var(--font-body)',
  fontSize: '14px',
  fontWeight: 500,
  letterSpacing: '0.03em',
  cursor: 'pointer',
  transition: 'color 0.2s',
  textDecoration: 'none',
  display: 'block',
});

const activeDotStyle = {
  position: 'absolute',
  bottom: '2px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '4px',
  height: '4px',
  borderRadius: '50%',
  background: 'var(--accent-cyan)',
  display: 'block',
};

const ctaStyle = {
  padding: '9px 22px',
  border: '1px solid var(--accent-cyan)',
  borderRadius: '6px',
  color: 'var(--accent-cyan)',
  fontSize: '13px',
  fontWeight: 600,
  fontFamily: 'var(--font-display)',
  letterSpacing: '0.05em',
  background: 'transparent',
  transition: 'all 0.25s',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
};

const menuBtnStyle = {
  display: 'none',
  color: 'var(--text-primary)',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '4px',
};

const mobileMenuStyle = (open) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(5, 10, 20, 0.98)',
  zIndex: 999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: open ? 1 : 0,
  pointerEvents: open ? 'all' : 'none',
  transition: 'opacity 0.3s ease',
  backdropFilter: 'blur(20px)',
});

const mobileLinkStyle = {
  display: 'block',
  padding: '16px 32px',
  fontSize: '28px',
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  color: 'var(--text-primary)',
  textAlign: 'center',
  letterSpacing: '0.02em',
};

const mobileCtaStyle = {
  display: 'block',
  marginTop: '16px',
  padding: '14px 48px',
  border: '2px solid var(--accent-cyan)',
  borderRadius: '8px',
  color: 'var(--accent-cyan)',
  fontSize: '20px',
  fontWeight: 700,
  fontFamily: 'var(--font-display)',
  textAlign: 'center',
};
