import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Sparkles,
} from 'lucide-react';
import './AppHero.css';

export default function AppHero() {
  const appOfferings = [
    { title: 'Business Apps', icon: <Smartphone className="w-4 h-4 text-terracotta" /> },
    { title: 'E-commerce Apps', icon: <ShoppingBag className="w-4 h-4 text-terracotta" /> },
    { title: 'Service Apps', icon: <Wrench className="w-4 h-4 text-terracotta" /> },
    { title: 'Booking Apps', icon: <CalendarCheck className="w-4 h-4 text-terracotta" /> },
    { title: 'Marketplace Apps', icon: <Store className="w-4 h-4 text-terracotta" /> },
    { title: 'Customer Apps', icon: <Users className="w-4 h-4 text-terracotta" /> },
    { title: 'MVPs', icon: <Rocket className="w-4 h-4 text-terracotta" /> },
    { title: 'Android Apps', icon: <Smartphone className="w-4 h-4 text-terracotta" /> },
    { title: 'iOS Apps', icon: <Smartphone className="w-4 h-4 text-terracotta" /> },
    { title: 'Backend Systems', icon: <Server className="w-4 h-4 text-terracotta" /> },
    { title: 'Admin Panels', icon: <LayoutDashboard className="w-4 h-4 text-terracotta" /> },
    { title: 'API Integrations', icon: <Webhook className="w-4 h-4 text-terracotta" /> }
  ];

  return (
    <section className="app-hero-wrap" aria-label="Mobile App Development Services">
      <div className="app-glow" aria-hidden="true" />

      <div className="app-hero-container">
        
        {/* Top Hero Block */}
        <div className="app-hero-content">
          <div className="app-badge">
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            <span>Product Engineering &amp; Mobile UI/UX</span>
          </div>

          <h1 className="app-h1">Mobile App Development</h1>

          <p className="app-headline">
            Turn Your App Idea Into a <span className="app-accent">Digital Product.</span>
          </p>

          <p className="app-desc">
            From MVPs to feature-rich applications, AMFlix combines product strategy, UX/UI and development to build mobile experiences.
          </p>

          <div className="app-actions">
            <Link to="/contact?service=app-development" className="app-btn primary">
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* What We Build Shelf */}
        <div className="app-services-shelf">
          <div className="app-shelf-header">
            <span className="app-shelf-tag">Core Capabilities</span>
            <h2 className="app-shelf-title">What We Build</h2>
          </div>

          <div className="app-offerings-grid">
            {appOfferings.map((item, index) => (
              <div key={index} className="app-offering-card">
                <div className="app-icon-box">
                  {item.icon}
                </div>
                <span className="app-offering-name">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}