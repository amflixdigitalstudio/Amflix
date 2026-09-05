import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import { footerData } from '../../data/Footer';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Brand Info */}
          <div>
            <Link to="/">
              <img 
                src={footerData.brand.logoSrc} 
                alt={footerData.brand.alt} 
                className="footer-logo" 
              />
            </Link>
            <p className="footer-tagline">
              {footerData.brand.tagline}
            </p>
            <div className="footer-meta">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" />
                {footerData.brand.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-primary" />
                <a href={`mailto:${footerData.brand.email}`}>{footerData.brand.email}</a>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+916361484770">{footerData.brand.phone}</a>
              </span>
              <span className="flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4 text-primary" />
                <a href="https://wa.me/918050393869" target="_blank" rel="noopener noreferrer">
                  {footerData.brand.whatsapp}
                </a>
              </span>
            </div>
          </div>

          {/* Services Navigation */}
          <div>
            <h3 className="footer-heading">Services</h3>
            <div className="footer-links-list">
              {footerData.services.map((item) => (
                <Link key={item.name} to={item.path} className="footer-link">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Studio Navigation */}
          <div>
            <h3 className="footer-heading">Studio</h3>
            <div className="footer-links-list">
              {footerData.company.map((item) => (
                <Link key={item.name} to={item.path} className="footer-link">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials / Connect */}
          <div>
            <h3 className="footer-heading">Connect</h3>
            <div className="footer-links-list">
              {footerData.socials.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            {footerData.copyright}
          </p>

          <div className="footer-legal-links">
            {footerData.legal.map((item) => (
              <Link key={item.name} to={item.path} className="footer-legal-link">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}