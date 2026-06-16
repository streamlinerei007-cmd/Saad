import './Home.css';

export default function About() {
  const team = [
    { name: 'Sarah Johnson', role: 'CEO & Founder', emoji: '👩‍💼' },
    { name: 'Mike Chen', role: 'Lead Developer', emoji: '👨‍💻' },
    { name: 'Aisha Patel', role: 'Head of Design', emoji: '👩‍🎨' },
    { name: 'Carlos Rivera', role: 'Marketing Director', emoji: '📣' },
  ];

  const values = [
    { icon: '💡', title: 'Innovation', desc: 'We constantly push the boundaries of what is possible in digital.' },
    { icon: '🤝', title: 'Partnership', desc: 'Your success is our success. We work as an extension of your team.' },
    { icon: '⭐', title: 'Quality', desc: 'We never compromise on quality. Every pixel and line of code matters.' },
    { icon: '🌍', title: 'Impact', desc: 'We build solutions that create meaningful impact in the real world.' },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Our Story</span>
          <h1 className="section-title">About <span>WP Developer</span></h1>
          <p className="section-subtitle">
            A software house of designers, developers, and strategists crafting exceptional digital solutions for businesses.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="about-mission">
            <div className="mission-text">
              <span className="section-tag">Our Mission</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
                Empowering Brands to<br /><span>Thrive Digitally</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 2, marginBottom: '20px' }}>
                Founded in 2016, WP Developer was born from a simple belief: every business
                deserves powerful digital tools. We combine cutting-edge technology with
                thoughtful design to deliver solutions that help companies grow and succeed.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 2 }}>
                Over the years we have partnered with startups and Fortune 500 companies
                alike, delivering over 500 projects across 30+ countries.
              </p>
            </div>
            <div className="mission-visual">
              <div className="mission-card">
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🌟</div>
                <h3>Award Winning</h3>
                <p>Recognized globally for design and innovation excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--dark-2)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span className="section-tag">What Drives Us</span>
            <h2 className="section-title">Our Core <span>Values</span></h2>
          </div>
          <div className="grid-2" style={{ gap: '24px' }}>
            {values.map((v, i) => (
              <div className="card" key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div className="feature-icon" style={{ flexShrink: 0 }}>{v.icon}</div>
                <div>
                  <h3 style={{ marginBottom: '8px' }}>{v.title}</h3>
                  <p style={{ color: 'var(--text-muted)' }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span className="section-tag">The People</span>
            <h2 className="section-title">Meet Our <span>Team</span></h2>
            <p className="section-subtitle">Talented individuals united by a passion for great work.</p>
          </div>
          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(4,1fr)', gap: '24px' }}>
            {team.map((t, i) => (
              <div className="card team-card text-center" key={i}>
                <div className="team-avatar">{t.emoji}</div>
                <h3>{t.name}</h3>
                <p style={{ color: 'var(--primary-light)', fontWeight: 600, fontSize: '0.9rem' }}>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
