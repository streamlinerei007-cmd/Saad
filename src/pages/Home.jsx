import { Link } from 'react-router-dom';
import './Home.css';

import heroBanner from '../assets/hero-banner.png';

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '150+', label: 'Happy Clients' },
  { number: '8+', label: 'Years Experience' },
  { number: '99%', label: 'Client Satisfaction' },
];

const features = [
  {
    icon: '🚀',
    title: 'Lightning Fast',
    desc: 'Blazing performance optimized for every device and connection speed.',
  },
  {
    icon: '🎨',
    title: 'Premium Design',
    desc: 'Stunning visuals crafted by world-class designers to captivate audiences.',
  },
  {
    icon: '🔒',
    title: 'Rock Solid Security',
    desc: 'Enterprise-grade security protecting your business and your users.',
  },
  {
    icon: '📱',
    title: 'Fully Responsive',
    desc: 'Perfect experience across all screen sizes and platforms.',
  },
  {
    icon: '🤖',
    title: 'AI Powered',
    desc: 'Smart automation and AI features built into every solution.',
  },
  {
    icon: '💬',
    title: '24/7 Support',
    desc: 'Round-the-clock expert support whenever you need it.',
  },
];

const services = [
  { slug: 'web-design', icon: '🎨', title: 'Web Design', desc: 'Stunning, conversion-focused designs.' },
  { slug: 'development', icon: '💻', title: 'Development', desc: 'Scalable, modern web applications.' },
  { slug: 'branding', icon: '✨', title: 'Branding', desc: 'Memorable brand identity systems.' },
];

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content animate-fade-up">
            <span className="section-tag">🌟 Award Winning Agency</span>
            <h1 className="hero-title">
              We Build <span>Digital</span><br />Experiences That<br />
              <span>Matter</span>
            </h1>
            <p className="hero-desc">
              From concept to launch — we design and develop world-class websites,
              apps, and brands that drive real business growth.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="btn btn-primary">Explore Services &rarr;</Link>
              <Link to="/about" className="btn btn-outline">Learn About Us</Link>
            </div>
          </div>
          <div className="hero-visual">
            <img 
              src={heroBanner} 
              alt="Digital Experience Banner" 
              className="hero-banner-img animate-zoom-float"
            />
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div className="stat-item" key={i}>
                <h2 className="stat-number">{s.number}</h2>
                <p className="stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">Built for <span>Excellence</span></h2>
            <p className="section-subtitle">
              Every feature is carefully crafted to give you the competitive edge you need.
            </p>
          </div>
          <div className="grid-3">
            {features.map((f, i) => (
              <div className="card feature-card" key={i}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="section services-preview">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">Our Core <span>Services</span></h2>
            <p className="section-subtitle">Comprehensive digital solutions tailored to your business goals.</p>
          </div>
          <div className="grid-3">
            {services.map((s, i) => (
              <Link to={`/services/${s.slug}`} className="service-preview-card" key={i}>
                <div className="sp-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="sp-link">Learn More →</span>
              </Link>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '48px' }}>
            <Link to="/services" className="btn btn-primary">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container">
          <div className="cta-box">
            <span className="section-tag">Let's Work Together</span>
            <h2 className="section-title">Ready to Build Something <span>Amazing?</span></h2>
            <p className="section-subtitle" style={{ marginBottom: '36px' }}>
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '16px 40px' }}>
              Start Your Project →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
