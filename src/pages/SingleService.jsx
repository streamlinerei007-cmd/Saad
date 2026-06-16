import { useParams, Link } from 'react-router-dom';
import './Home.css';

const servicesData = {
  'ui-ux': {
    icon: '🎨',
    title: 'UI/UX Design',
    subtitle: 'Human-centered UI and UX for happier users',
    description:
      'White Solutions creates beautiful, intuitive interfaces that keep users engaged and help your business convert more visitors into customers.',
    features: [
      { icon: '🧠', title: 'User Research', desc: 'Understand your audience before designing anything.' },
      { icon: '📐', title: 'Wireframing', desc: 'Clear structure and navigation before visual design begins.' },
      { icon: '🎛️', title: 'Prototyping', desc: 'Interactive prototypes to validate your product early.' },
      { icon: '🎯', title: 'Design Systems', desc: 'Reusable components that keep your experience consistent.' },
    ],
    price: 'Starting at $2,000',
    timeline: '2–4 weeks',
    gradient: 'linear-gradient(135deg, #6c63ff 0%, #ff6584 100%)',
  },
  'wordpress': {
    icon: '🧩',
    title: 'WordPress Development',
    subtitle: 'Custom WordPress sites and plugin solutions',
    description:
      'From custom themes to WooCommerce stores, we build WordPress solutions tailored to your brand and business goals.',
    features: [
      { icon: '🛠️', title: 'Custom Themes', desc: 'Beautiful themes built exactly how you need them.' },
      { icon: '🔌', title: 'Plugin Integration', desc: 'Seamless third-party and custom plugin support.' },
      { icon: '🛒', title: 'WooCommerce', desc: 'Powerful online stores that are easy to manage.' },
      { icon: '🧾', title: 'Maintenance', desc: 'Ongoing support, updates, and performance tuning.' },
    ],
    price: 'Starting at $3,000',
    timeline: '3–8 weeks',
    gradient: 'linear-gradient(135deg, #ffb347 0%, #ffcc33 100%)',
  },
  'salesforce': {
    icon: '☁️',
    title: 'Salesforce Development',
    subtitle: 'CRM automation, custom apps, and integrations',
    description:
      'Our Salesforce team builds custom Salesforce solutions that automate sales, service, and marketing workflows for better efficiency.',
    features: [
      { icon: '⚡', title: 'Apex & Lightning', desc: 'Custom development for Salesforce Lightning experiences.' },
      { icon: '🔗', title: 'Integrations', desc: 'Connect Salesforce with other systems and tools.' },
      { icon: '🤖', title: 'Automation', desc: 'Automate complex business processes and workflows.' },
      { icon: '📊', title: 'Dashboards', desc: 'Actionable reports that help you make smarter decisions.' },
    ],
    price: 'Starting at $4,500',
    timeline: '4–10 weeks',
    gradient: 'linear-gradient(135deg, #00a1e0 0%, #0072c6 100%)',
  },
  'ghl': {
    icon: '🔧',
    title: 'GHL Development',
    subtitle: 'GoHighLevel funnels, automations, and growth systems',
    description:
      'We build high-converting funnels and marketing automation inside GoHighLevel so you can capture more leads and close more sales.',
    features: [
      { icon: '🧩', title: 'Funnel Design', desc: 'Landing pages and funnels optimized for conversion.' },
      { icon: '🤝', title: 'CRM Automation', desc: 'Automated workflows for follow-ups and lead nurturing.' },
      { icon: '📚', title: 'Membership Sites', desc: 'Secure member areas for courses and exclusive content.' },
      { icon: '✉️', title: 'Campaigns', desc: 'Email and SMS campaigns designed to convert.' },
    ],
    price: 'Starting at $2,800',
    timeline: '3–6 weeks',
    gradient: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
  },
  'development': {
    icon: '💻',
    title: 'Web Development',
    subtitle: 'Scalable, high-performance web applications',
    description:
      'We build blazing-fast, scalable web applications using modern technologies. From simple landing pages to complex enterprise systems, we deliver code that is clean, maintainable, and performant.',
    features: [
      { icon: '⚛️', title: 'React / Next.js', desc: 'Modern front-end frameworks for exceptional performance.' },
      { icon: '🔌', title: 'Node.js / APIs', desc: 'Robust back-end services and RESTful API development.' },
      { icon: '🛒', title: 'E-Commerce', desc: 'Powerful online stores that convert visitors into customers.' },
      { icon: '📦', title: 'CMS Integration', desc: 'Headless CMS setups for effortless content management.' },
    ],
    price: 'Starting at $5,000',
    timeline: '4–12 weeks',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  'branding': {
    icon: '✨',
    title: 'Branding & Identity',
    subtitle: 'Build a brand that people remember',
    description:
      'Your brand is your promise. We create comprehensive brand identities that tell your unique story, evoke the right emotions, and create lasting connections with your audience.',
    features: [
      { icon: '🏷️', title: 'Logo Design', desc: 'Timeless logos that instantly communicate your brand values.' },
      { icon: '📘', title: 'Brand Guidelines', desc: 'Complete style guides ensuring brand consistency everywhere.' },
      { icon: '🎨', title: 'Color Palette', desc: 'Psychologically informed color systems for your brand.' },
      { icon: '🔤', title: 'Typography', desc: 'Font selections that reflect your brand personality perfectly.' },
    ],
    price: 'Starting at $1,500',
    timeline: '1–3 weeks',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  'seo': {
    icon: '📈',
    title: 'SEO & Marketing',
    subtitle: 'Grow your organic traffic and revenue',
    description:
      'Data-driven SEO strategies that put your business in front of the right people at the right time. We focus on sustainable, long-term growth that keeps delivering results.',
    features: [
      { icon: '🔧', title: 'Technical SEO', desc: 'Site speed, structured data, and crawlability optimization.' },
      { icon: '📝', title: 'Content Strategy', desc: 'High-value content that ranks and converts.' },
      { icon: '🔗', title: 'Link Building', desc: 'Authority-building backlink campaigns done ethically.' },
      { icon: '📊', title: 'Analytics', desc: 'Clear reporting so you always know what\'s working.' },
    ],
    price: 'Starting at $800/mo',
    timeline: 'Ongoing',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  'mobile-apps': {
    icon: '📱',
    title: 'Mobile Apps',
    subtitle: 'Native and cross-platform mobile excellence',
    description:
      'We design and develop stunning mobile applications for iOS and Android. Using React Native and native technologies, we deliver apps that feel natural on every platform.',
    features: [
      { icon: '🍎', title: 'iOS Development', desc: 'Swift and Objective-C native iOS applications.' },
      { icon: '🤖', title: 'Android Dev', desc: 'Kotlin and Java native Android applications.' },
      { icon: '⚛️', title: 'React Native', desc: 'One codebase, two platforms, zero compromise.' },
      { icon: '🚀', title: 'App Store Launch', desc: 'Full submission and approval process handled for you.' },
    ],
    price: 'Starting at $8,000',
    timeline: '8–16 weeks',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  },
  'cloud-solutions': {
    icon: '☁️',
    title: 'Cloud Solutions',
    subtitle: 'Scalable infrastructure for the modern web',
    description:
      'Future-proof your business with cloud infrastructure that scales on demand. We architect, migrate, and manage cloud environments that are reliable, secure, and cost-efficient.',
    features: [
      { icon: '🌐', title: 'AWS / Azure', desc: 'Expert cloud architecture on leading platforms.' },
      { icon: '🔄', title: 'DevOps / CI-CD', desc: 'Automated pipelines for faster, safer deployments.' },
      { icon: '⬆️', title: 'Cloud Migration', desc: 'Seamless migration from on-premise to the cloud.' },
      { icon: '👁️', title: '24/7 Monitoring', desc: 'Round-the-clock observability and incident response.' },
    ],
    price: 'Starting at $3,000',
    timeline: '2–8 weeks',
    gradient: 'linear-gradient(135deg, #0fd850 0%, #f9f047 100%)',
  },
};

export default function SingleService() {
  const { slug } = useParams();
  const service = servicesData[slug];

  if (!service) {
    return (
      <main>
        <section className="page-hero">
          <div className="container text-center">
            <div style={{ fontSize: '5rem', marginBottom: '24px' }}>🔍</div>
            <h1 className="section-title">Service <span>Not Found</span></h1>
            <p className="section-subtitle" style={{ marginBottom: '32px' }}>
              The service you're looking for doesn't exist.
            </p>
            <Link to="/services" className="btn btn-primary">← Back to Services</Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="single-service-hero" style={{ '--svc-gradient': service.gradient }}>
        <div className="container">
          <Link to="/services" className="back-link">← Back to Services</Link>
          <div className="ss-hero-inner">
            <div className="ss-icon">{service.icon}</div>
            <span className="section-tag">Our Services</span>
            <h1 className="section-title">{service.title}</h1>
            <p className="ss-subtitle">{service.subtitle}</p>
            <div className="ss-meta">
              <div className="ss-meta-item">
                <span className="ss-meta-label">💰 Pricing</span>
                <span className="ss-meta-val">{service.price}</span>
              </div>
              <div className="ss-meta-item">
                <span className="ss-meta-label">⏱️ Timeline</span>
                <span className="ss-meta-val">{service.timeline}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section">
        <div className="container">
          <div className="ss-desc-grid">
            <div>
              <span className="section-tag">Overview</span>
              <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2rem' }}>
                What's <span>Included</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 2 }}>{service.description}</p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '28px' }}>
                Get a Free Quote →
              </Link>
            </div>
            <div className="ss-features-grid">
              {service.features.map((f, i) => (
                <div className="card ss-feature-card" key={i}>
                  <div className="ss-feat-icon">{f.icon}</div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section" style={{ background: 'var(--dark-2)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="section-tag">Explore More</span>
            <h2 className="section-title">Other <span>Services</span></h2>
          </div>
          <div className="grid-3">
            {Object.entries(servicesData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, s]) => (
                <Link to={`/services/${key}`} className="service-preview-card" key={key}>
                  <div className="sp-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.subtitle}</p>
                  <span className="sp-link">Learn More →</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
