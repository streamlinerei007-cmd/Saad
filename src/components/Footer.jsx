import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo">
              <span className="brand-text">WP Developer</span>
            </div>
            <p>We are a software house delivering UI/UX, WordPress, Salesforce, GHL, and full-stack development solutions.</p>
          </div>
          <div className="footer-col">
            <h4>Pages</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services/web-design">Web Design</Link></li>
              <li><Link to="/services/development">Development</Link></li>
              <li><Link to="/services/branding">Branding</Link></li>
              <li><Link to="/services/seo">SEO & Marketing</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:saidali2847@gmail.com">saidali2847@gmail.com</a></li>
              <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
              <li><a href="#">Twitter / X</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} WP Developer. All rights reserved.</p>
          <p>Built with ❤️ using React</p>
        </div>
      </div>
    </footer>
  );
}
