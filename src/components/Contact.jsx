import React, { useState } from 'react';
import {
  RiMailLine,
  RiMapPinLine,
  RiGithubLine,
  RiLinkedinLine,
  RiGlobalLine,
  RiSendPlaneLine,
  RiCheckLine,
  RiUserLine,
  RiMessage2Line,
} from 'react-icons/ri';

const contactLinks = [
  {
    icon: <RiMailLine size={20} />,
    label: 'Email',
    value: 'abhishek.j9621@gmail.com',
    href: 'mailto:abhishek.j9621@gmail.com',
    color: '#00D4FF',
  },
  {
    icon: <RiGithubLine size={20} />,
    label: 'GitHub',
    value: 'github.com/Abhishekj9621',
    href: 'https://github.com/Abhishekj9621',
    color: '#7C3AFF',
  },
  {
    icon: <RiLinkedinLine size={20} />,
    label: 'LinkedIn',
    value: 'in/abhishek-jaiswal-82571a272',
    href: 'https://www.linkedin.com/in/abhishek-jaiswal-82571a272/',
    color: '#00E5A0',
  },
  {
    icon: <RiGlobalLine size={20} />,
    label: 'Portfolio',
    value: 'gotme.lovable.app',
    href: 'https://gotme.lovable.app/',
    color: '#F59E0B',
  },
  {
    icon: <RiMapPinLine size={20} />,
    label: 'Location',
    value: 'Jaipur, Rajasthan, India',
    href: null,
    color: '#FF6B9D',
  },
];

const ctaCards = [
  {
    label: 'Open to Full-Time Roles',
    desc: 'AI Engineer, Full-Stack, or Founding Engineer positions.',
    color: '#00D4FF',
    emoji: '💼',
  },
  {
    label: 'Available for Freelance',
    desc: 'AI systems, mobile apps, and backend APIs.',
    color: '#7C3AFF',
    emoji: '🚀',
  },
  {
    label: 'Research Collaboration',
    desc: 'LLMs, multi-agent systems, and applied ML.',
    color: '#00E5A0',
    emoji: '🧠',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    // Simulate send
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      {/* Background orbs */}
      <div style={orb1Style} />
      <div style={orb2Style} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={sectionLabelStyle} className="reveal">
          <span style={labelLineStyle} />
          <span style={labelTextStyle}>CONTACT</span>
        </div>

        <div style={headerRowStyle} className="reveal">
          <h2 style={headingStyle}>
            Let's Build Something{' '}
            <span className="gradient-text">Remarkable</span>
          </h2>
          <p style={subStyle}>
            Whether you're a recruiter, founder, client, or collaborator — I'm always open
            to meaningful conversations about great opportunities.
          </p>
        </div>

        {/* CTA cards */}
        <div style={ctaRowStyle} className="reveal">
          {ctaCards.map(card => (
            <div key={card.label} style={ctaCardStyle(card.color)}>
              <span style={{ fontSize: '24px' }}>{card.emoji}</span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {card.label}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{card.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={mainGridStyle}>
          {/* Left: Contact links */}
          <div style={linksColStyle}>
            <div style={infoCardStyle} className="reveal">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.15em', marginBottom: '24px' }}>
                REACH ME AT
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {contactLinks.map(link => (
                  <ContactLink key={link.label} {...link} />
                ))}
              </div>
            </div>

            {/* Response time */}
            <div style={responseCardStyle} className="reveal">
              <div style={responseDotStyle} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', color: 'var(--text-primary)', marginBottom: '4px' }}>
                  Fast Response Time
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                  I typically reply within 24 hours. Let's talk!
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal">
            <div style={formCardStyle}>
              <div style={formHeaderStyle}>
                <h3 style={formTitleStyle}>Send a Message</h3>
                <p style={formSubStyle}>I'll get back to you as soon as possible.</p>
              </div>

              {submitted ? (
                <div style={successStyle}>
                  <div style={successIconStyle}>
                    <RiCheckLine size={28} style={{ color: 'var(--accent-emerald)' }} />
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', color: 'var(--text-primary)' }}>
                    Message Sent!
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                    Thanks for reaching out. I'll reply to{' '}
                    <strong style={{ color: 'var(--accent-cyan)' }}>{formData.email}</strong>{' '}
                    soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={formStyle}>
                  <div style={fieldGroupStyle}>
                    <FormField
                      icon={<RiUserLine size={16} />}
                      label="Your Name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <FormField
                      icon={<RiMailLine size={16} />}
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <FormTextarea
                    icon={<RiMessage2Line size={16} />}
                    label="Your Message"
                    name="message"
                    placeholder="Tell me about your project, role, or idea..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <button type="submit" style={submitBtnStyle(loading)} disabled={loading}>
                    {loading ? (
                      <>
                        <span style={spinnerStyle} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <RiSendPlaneLine size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ icon, label, value, href, color }) {
  const [hovered, setHovered] = useState(false);
  const inner = (
    <div
      style={contactLinkStyle(hovered, color)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={contactIconStyle(color, hovered)}>
        <span style={{ color: color }}>{icon}</span>
      </div>
      <div>
        <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', marginBottom: '2px' }}>
          {label}
        </div>
        <div style={{ fontSize: '14px', color: hovered ? color : 'var(--text-primary)', fontWeight: 500, transition: 'color 0.2s', wordBreak: 'break-all' }}>
          {value}
        </div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>{inner}</a> : inner;
}

function FormField({ icon, label, name, type, placeholder, value, onChange }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={labelStyle}>{label}</label>
      <div style={inputWrapStyle(focused)}>
        <span style={{ color: focused ? 'var(--accent-cyan)' : 'var(--text-muted)', transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}>
          {icon}
        </span>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required
          style={inputStyle}
        />
      </div>
    </div>
  );
}

function FormTextarea({ icon, label, name, placeholder, value, onChange }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={labelStyle}>{label}</label>
      <div style={{ ...inputWrapStyle(focused), alignItems: 'flex-start', padding: '14px 16px' }}>
        <span style={{ color: focused ? 'var(--accent-cyan)' : 'var(--text-muted)', transition: 'color 0.2s', display: 'flex', alignItems: 'center', paddingTop: '2px' }}>
          {icon}
        </span>
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required
          rows={5}
          style={{ ...inputStyle, resize: 'none', lineHeight: 1.7 }}
        />
      </div>
    </div>
  );
}

// Styles
const orb1Style = {
  position: 'absolute', top: '-15%', right: '-10%',
  width: '500px', height: '500px', borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(0, 212, 255, 0.06) 0%, transparent 70%)',
  filter: 'blur(60px)', pointerEvents: 'none',
};
const orb2Style = {
  position: 'absolute', bottom: '-10%', left: '-5%',
  width: '400px', height: '400px', borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(124, 58, 255, 0.07) 0%, transparent 70%)',
  filter: 'blur(60px)', pointerEvents: 'none',
};
const sectionLabelStyle = { display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' };
const labelLineStyle = { display: 'block', width: '40px', height: '2px', background: 'var(--accent-cyan)' };
const labelTextStyle = { fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-cyan)', letterSpacing: '0.2em' };
const headerRowStyle = { marginBottom: '48px' };
const headingStyle = { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '16px' };
const subStyle = { color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '560px', fontWeight: 300, lineHeight: 1.7 };
const ctaRowStyle = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '60px' };
const ctaCardStyle = (color) => ({
  display: 'flex', gap: '14px', alignItems: 'flex-start',
  padding: '20px 24px',
  background: `${color}08`,
  border: `1px solid ${color}25`,
  borderRadius: '14px',
});
const mainGridStyle = { display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '40px', alignItems: 'start' };
const linksColStyle = { display: 'flex', flexDirection: 'column', gap: '20px' };
const infoCardStyle = {
  padding: '32px',
  background: 'var(--bg-card)',
  border: '1px solid var(--border-subtle)',
  borderRadius: '20px',
};
const contactLinkStyle = (hovered, color) => ({
  display: 'flex', gap: '14px', alignItems: 'center',
  padding: '14px 16px',
  background: hovered ? `${color}08` : 'transparent',
  border: `1px solid ${hovered ? color + '30' : 'var(--border-subtle)'}`,
  borderRadius: '12px',
  transition: 'all 0.25s',
  cursor: 'pointer',
});
const contactIconStyle = (color, hovered) => ({
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  width: '40px', height: '40px', minWidth: '40px',
  background: hovered ? `${color}18` : `${color}10`,
  border: `1px solid ${color}25`,
  borderRadius: '10px',
  transition: 'all 0.25s',
});
const responseCardStyle = {
  display: 'flex', gap: '14px', alignItems: 'center',
  padding: '20px 24px',
  background: 'rgba(0, 229, 160, 0.06)',
  border: '1px solid rgba(0, 229, 160, 0.2)',
  borderRadius: '14px',
};
const responseDotStyle = {
  width: '10px', height: '10px', minWidth: '10px',
  borderRadius: '50%',
  background: 'var(--accent-emerald)',
  boxShadow: '0 0 10px var(--accent-emerald)',
  animation: 'pulse-glow 2s ease-in-out infinite',
};
const formCardStyle = {
  padding: '40px',
  background: 'var(--bg-card)',
  border: '1px solid var(--border-subtle)',
  borderRadius: '24px',
};
const formHeaderStyle = { marginBottom: '32px' };
const formTitleStyle = { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '24px', color: 'var(--text-primary)', marginBottom: '8px' };
const formSubStyle = { fontSize: '14px', color: 'var(--text-secondary)' };
const formStyle = { display: 'flex', flexDirection: 'column', gap: '20px' };
const fieldGroupStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' };
const labelStyle = { fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '0.02em' };
const inputWrapStyle = (focused) => ({
  display: 'flex', alignItems: 'center', gap: '12px',
  padding: '12px 16px',
  background: focused ? 'rgba(0, 212, 255, 0.04)' : 'var(--bg-secondary)',
  border: `1px solid ${focused ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
  borderRadius: '10px',
  transition: 'all 0.2s',
  boxShadow: focused ? '0 0 0 3px rgba(0, 212, 255, 0.08)' : 'none',
});
const inputStyle = {
  flex: 1, background: 'transparent', border: 'none', outline: 'none',
  color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: '14px',
  width: '100%',
};
const submitBtnStyle = (loading) => ({
  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
  padding: '16px 32px',
  background: loading
    ? 'rgba(0, 212, 255, 0.3)'
    : 'linear-gradient(135deg, var(--accent-cyan) 0%, #0099CC 100%)',
  color: 'var(--bg-primary)',
  border: 'none', borderRadius: '12px',
  fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px',
  cursor: loading ? 'not-allowed' : 'pointer',
  transition: 'all 0.25s',
  boxShadow: loading ? 'none' : '0 0 24px rgba(0, 212, 255, 0.2)',
  letterSpacing: '0.03em',
  width: '100%',
});
const spinnerStyle = {
  display: 'inline-block', width: '16px', height: '16px',
  border: '2px solid var(--bg-primary)', borderTopColor: 'transparent',
  borderRadius: '50%', animation: 'spin-slow 0.7s linear infinite',
};
const successStyle = {
  display: 'flex', flexDirection: 'column', alignItems: 'center',
  gap: '16px', padding: '40px', textAlign: 'center',
};
const successIconStyle = {
  width: '64px', height: '64px',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  background: 'var(--accent-emerald-dim)',
  border: '1px solid var(--accent-emerald)',
  borderRadius: '50%',
  boxShadow: '0 0 24px rgba(0, 229, 160, 0.3)',
};
