import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Sparkles, 
  Briefcase, 
  Building2, 
  FolderKanban, 
  ShoppingBag, 
  Layers, 
  FileCode2, 
  Cpu, 
  Webhook, 
  RefreshCw, 
  Search 
} from 'lucide-react';
import './WebHero.css';

export default function WebHero() {
  const webOfferings = [
    { title: 'Business Websites', icon: <Briefcase className="w-4 h-4 text-terracotta" /> },
    { title: 'Corporate Websites', icon: <Building2 className="w-4 h-4 text-terracotta" /> },
    { title: 'Portfolio Websites', icon: <FolderKanban className="w-4 h-4 text-terracotta" /> },
    { title: 'E-commerce Websites', icon: <ShoppingBag className="w-4 h-4 text-terracotta" /> },
    { title: 'Landing Pages', icon: <Layers className="w-4 h-4 text-terracotta" /> },
    { title: 'CMS Websites', icon: <FileCode2 className="w-4 h-4 text-terracotta" /> },
    { title: 'Custom Web Applications', icon: <Cpu className="w-4 h-4 text-terracotta" /> },
    { title: 'API Integrations', icon: <Webhook className="w-4 h-4 text-terracotta" /> },
    { title: 'Website Redesigns', icon: <RefreshCw className="w-4 h-4 text-terracotta" /> },
    { title: 'SEO-Friendly Websites', icon: <Search className="w-4 h-4 text-terracotta" /> }
  ];

  return (
    <section className="web-hero-wrap" aria-label="Website Design and Development Services">
      <div className="web-hero-glow" aria-hidden="true" />

      <div className="web-hero-container">
        
        {/* Top Hero Block */}
        <div className="web-hero-content">
          <div className="web-hero-badge">
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            <span>Digital Architecture &amp; Engineering</span>
          </div>

          <h1 className="web-hero-h1">Website Design &amp; Development</h1>

          <p className="web-hero-headline">
            Websites Built to <span className="web-hero-accent">Represent Your Business.</span>
          </p>

          <p className="web-hero-desc">
            We design and develop modern, responsive and conversion-focused websites that combine beautiful UI/UX with reliable technology.
          </p>

          <div className="web-hero-actions">
            <Link to="/contact?service=website-development" className="web-hero-btn primary">
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* What We Build Shelf */}
        <div className="web-hero-shelf">
          <div className="web-shelf-header">
            <span className="web-shelf-tag">Core Capabilities</span>
            <h2 className="web-shelf-title">What We Build</h2>
          </div>

          <div className="web-offerings-grid">
            {webOfferings.map((item, index) => (
              <div key={index} className="web-offering-card">
                <div className="web-offering-icon-box">
                  {item.icon}
                </div>
                <span className="web-offering-name">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}