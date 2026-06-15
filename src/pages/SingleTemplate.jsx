import { useParams, Link } from 'react-router-dom';
import { templatesData } from '../data/templates';
import './Shop.css';

export default function SingleTemplate() {
  const { id } = useParams();
  const template = templatesData.find(t => t.id === id);

  if (!template) {
    return (
      <main>
        <section className="page-hero">
          <div className="container text-center">
            <h1 className="section-title">Template <span>Not Found</span></h1>
            <Link to="/shop" className="btn btn-primary" style={{ marginTop: '20px' }}>← Back to Shop</Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* Product Hero */}
      <section className="st-hero">
        <div className="container">
          <Link to="/shop" className="st-back">← Back to Templates</Link>
          <div className="st-grid">
            <div className="st-image-wrap">
              <img src={template.image} alt={template.name} className="st-main-image" />
            </div>
            
            <div className="st-info">
              <div className="st-meta-top">
                <span className="st-category">{template.category}</span>
                <span className="st-rating">⭐ {template.rating} ({template.sales} sales)</span>
              </div>
              <h1 className="st-title">{template.name}</h1>
              <p className="st-desc">{template.description}</p>
              
              <div className="st-price-box">
                <span className="st-price">${template.price}</span>
                <span className="st-license">Standard License</span>
              </div>

              <div className="st-actions">
                <button className="btn btn-primary st-buy-btn">Add to Cart 🛒</button>
                <a href={template.previewUrl} target="_blank" rel="noreferrer" className="btn btn-outline st-preview-btn">Live Preview 👁️</a>
              </div>

              <div className="st-features">
                <h3>Template Features</h3>
                <ul>
                  {template.features.map((f, i) => (
                    <li key={i}><span className="st-check">✓</span> {f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
