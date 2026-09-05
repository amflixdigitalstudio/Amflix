import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  Share2, 
  TrendingUp, 
  Monitor, 
  Smartphone, 
  Video, 
  ArrowUpRight 
} from 'lucide-react';
import { servicesSectionData } from '../../data/ServicesSection';
import './ServicesSection.css';

export default function ServicesSection() {
  const renderIcon = (iconName) => {
    const props = { className: "w-5 h-5 transition-transform duration-300 group-hover:scale-110" };
    switch (iconName) {
      case 'Palette': return <Palette {...props} />;
      case 'Share2': return <Share2 {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'Monitor': return <Monitor {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'Video': return <Video {...props} />;
      default: return <ArrowUpRight {...props} />;
    }
  };

  return (
    <section className="services-section-wrapper" aria-labelledby="services-heading">
      <div className="services-container">
        
        {/* Header Content */}
        <div className="services-header">
          <span className="services-badge">
            {servicesSectionData.badge}
          </span>
          <h2 id="services-heading" className="services-main-tagline">
            One Studio. <span>Everything Your Brand Needs.</span>
          </h2>
          <p className="services-main-desc">
            {servicesSectionData.description}
          </p>
        </div>

        {/* 6 Core Services Cards Grid */}
        <div className="services-cards-grid">
          {servicesSectionData.services.map((service) => (
            <Link
              key={service.id}
              to={service.path}
              className="service-card group"
            >
              <div>
                <div className="service-card-top">
                  <div className="service-icon-box">
                    {renderIcon(service.icon)}
                  </div>
                  <span className="service-number">{service.number}</span>
                </div>

                <h3 className="service-title">{service.name}</h3>
                <p className="service-desc">{service.description}</p>
              </div>

              <div className="service-card-footer">
                <span>Explore Service</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}