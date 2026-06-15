import { useState } from 'react';
import './Home.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const info = [
    { icon: '📧', label: 'Email Us', value: 'hello@nexastudio.com' },
    { icon: '📞', label: 'Call Us', value: '+1 (234) 567-890' },
    { icon: '📍', label: 'Our Office', value: '123 Digital Ave, NY 10001' },
    { icon: '🕐', label: 'Working Hours', value: 'Mon–Fri, 9am – 6pm' },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Say Hello</span>
          <h1 className="section-title">Contact <span>Us</span></h1>
          <p className="section-subtitle">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Info Cards */}
            <div className="contact-info">
              <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2rem', marginBottom: '12px' }}>
                Let's <span>Talk</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '36px', lineHeight: 1.8 }}>
                Whether you have a question, a project, or just want to say hi — we're all ears!
              </p>
              <div className="info-cards">
                {info.map((item, i) => (
                  <div className="info-card" key={i}>
                    <div className="info-icon">{item.icon}</div>
                    <div>
                      <p className="info-label">{item.label}</p>
                      <p className="info-value">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-wrap">
              {sent && (
                <div className="success-banner">
                  🎉 Message sent! We'll get back to you shortly.
                </div>
              )}
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message 🚀
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
