import { Link } from 'react-router-dom';
import './Home.css';

const services = [
  {
    slug: 'ui-ux',
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Human-centered design that delivers beautiful, usable experiences.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    slug: 'wordpress',
    icon: '🧩',
    title: 'WordPress Development',
    desc: 'Custom WordPress sites, themes, and plugins for any business need.',
    features: ['Custom Themes', 'Plugin Integration', 'WooCommerce', 'Site Maintenance'],
  },
  {
    slug: 'salesforce',
    icon: '☁️',
    title: 'Salesforce Development',
    desc: 'Salesforce customizations, automation, and integrations to streamline operations.',
    features: ['Apex & Lightning', 'Process Automation', 'CRM Integrations', 'Dashboards'],
  },
  {
    slug: 'ghl',
    icon: '🔧',
    title: 'GHL Development',
    desc: 'GoHighLevel funnels, automations and membership sites built for conversion.',
    features: ['Funnels & Landing Pages', 'CRM Automation', 'Membership Systems', 'Email/SMS Campaigns'],
  },
  {
    slug: 'development',
    icon: '💻',
    title: 'Web Development',
    desc: 'Modern web applications built for performance and scale.',
    features: ['React / Next.js', 'Node.js / APIs', 'E-Commerce', 'CMS Integration'],
  },
  {
    slug: 'web-design',
    icon: '✨',
    title: 'Creative Design',
    desc: 'Brand and product design that makes your business stand out.',
    features: ['Brand Strategy', 'Visual Design', 'Responsive Layouts', 'UI Systems'],
  },
];

export default function Services() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">What We Offer</span>
          <h1 className="section-title">Our <span>Services</span></h1>
          <p className="section-subtitle">
            End-to-end digital solutions designed to transform your vision into reality.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {services.map((s, i) => (
              <div className="card service-card" key={i}>
                <div className="sc-icon">{s.icon}</div>
                <h3 className="sc-title">{s.title}</h3>
                <p className="sc-desc">{s.desc}</p>
                <ul className="sc-features">
                  {s.features.map((f, j) => (
                    <li key={j}><span className="sc-check">✓</span> {f}</li>
                  ))}
                </ul>
                <Link to={`/services/${s.slug}`} className="sc-cta">
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: 'var(--dark-2)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span className="section-tag">How We Work</span>
            <h2 className="section-title">Our <span>Process</span></h2>
            <p className="section-subtitle">A proven 4-step process to deliver outstanding results.</p>
          </div>
          <div className="process-grid">
            {['Discovery', 'Strategy', 'Execution', 'Launch'].map((step, i) => (
              <div className="process-step" key={i}>
                <div className="process-number">0{i + 1}</div>
                <h3>{step}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  {[
                    'We dive deep into your goals, audience, and competition.',
                    'Crafting a tailored roadmap for success and growth.',
                    'Building with precision, creativity, and attention to detail.',
                    'Deploying, testing, and ensuring everything runs perfectly.',
                  ][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <span className="section-tag">Get Started</span>
          <h2 className="section-title">Need a Custom <span>Solution?</span></h2>
          <p className="section-subtitle" style={{ marginBottom: '32px' }}>
            Tell us what you need and we'll build the perfect solution for you.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.05rem' }}>
            Contact Us Today →
          </Link>
        </div>
      </section>
    </main>
  );
}
