import { useState } from 'react';
import { Link } from 'react-router-dom';
import { templatesData } from '../data/templates';
import './Shop.css';

export default function Shop() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(templatesData.map(t => t.category))];

  const filteredTemplates = filter === 'All' 
    ? templatesData 
    : templatesData.filter(t => t.category === filter);

  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Premium Templates</span>
          <h1 className="section-title">Template <span>Shop</span></h1>
          <p className="section-subtitle">
            Accelerate your next project with our collection of pixel-perfect, highly optimized website templates.
          </p>
        </div>
      </section>

      {/* Shop Section */}
      <section className="section shop-section">
        <div className="container">
          
          {/* Filters */}
          <div className="shop-filters">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="shop-grid">
            {filteredTemplates.map(template => (
              <div className="shop-card" key={template.id}>
                <div className="sc-image-wrapper">
                  <img src={template.image} alt={template.name} className="sc-image" />
                  {template.badge && <span className="sc-badge">{template.badge}</span>}
                  <div className="sc-overlay">
                    <Link to={`/shop/${template.id}`} className="btn btn-primary">View Details</Link>
                  </div>
                </div>
                <div className="sc-content">
                  <div className="sc-header">
                    <span className="sc-category">{template.category}</span>
                    <div className="sc-rating">⭐ {template.rating}</div>
                  </div>
                  <h3 className="sc-title">
                    <Link to={`/shop/${template.id}`}>{template.name}</Link>
                  </h3>
                  <div className="sc-footer">
                    <span className="sc-price">${template.price}</span>
                    <span className="sc-sales">{template.sales} sales</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
