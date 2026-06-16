import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          <span className="brand-text">WP Developer</span>
        </NavLink>
        
        <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </div>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>About</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>Services</NavLink></li>
          <li><NavLink to="/shop" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>Shop</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>Contact</NavLink></li>
          <li><NavLink to="/shop" className="nav-cta" onClick={() => setIsOpen(false)}>Buy Templates</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
