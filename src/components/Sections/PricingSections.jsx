import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Briefcase, 
  Repeat, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  Cpu, 
  Rocket, 
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import './PricingSections.css';

export default function PricingSections() {
  const oneTimeProjects = [
    { title: 'Branding', price: 'Starts from ₹20,000', link: '/services/branding' },
    { title: 'Website Development', price: 'Starts from ₹20,000', link: '/services/website-design-development' },
    { title: 'Mobile App Development', price: 'Starts from ₹80,000', link: '/services/mobile-app-development' },
  ];

  const ongoingPartnerships = [
    { title: 'Social Media Management', price: 'Starts from ₹20,000/month', link: '/services/social-media-management' },
    { title: 'Digital Marketing', price: 'Starts from ₹15,000/month', link: '/services/digital-marketing' },
    { title: 'Design & Video Editing', price: 'Starts from ₹10,000/month', link: '/services/design-video' },
  ];

  const customFeatures = [
    'Complete digital transformation',
    'Large-scale branding',
    'Multi-platform marketing',
    'Advanced websites',
    'E-commerce platforms',
    'Custom web applications',
    'Advanced mobile applications',
    'Large-scale creative production',
    'Integrated marketing campaigns'
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'We understand your business, audience and goals.',
      icon: <Compass className="w-5 h-5 text-terracotta" />
    },
    {
      num: '02',
      title: 'Plan',
      desc: 'We create the right strategy and project direction.',
      icon: <Briefcase className="w-5 h-5 text-terracotta" />
    },
    {
      num: '03',
      title: 'Create',
      desc: 'Our creative and technical team brings the idea to life.',
      icon: <Cpu className="w-5 h-5 text-terracotta" />
    },
    {
      num: '04',
      title: 'Launch',
      desc: 'We deliver, test and launch the final solution.',
      icon: <Rocket className="w-5 h-5 text-terracotta" />
    },
    {
      num: '05',
      title: 'Grow',
      desc: 'For ongoing services, we continuously monitor and optimize.',
      icon: <TrendingUp className="w-5 h-5 text-terracotta" />
    }
  ];

  return (
    <div className="pricing-sections-wrap">

      {/* SECTION 3: CHOOSE HOW YOU WORK WITH US */}
      <section className="ps-section">
        <div className="ps-container">
          <div className="ps-header">
            <span className="ps-tag">Engagement Models</span>
            <h2 className="ps-title">Choose How You Work With Us</h2>
          </div>

          <div className="ps-work-grid">
            {/* One-Time Projects */}
            <div className="ps-work-card">
              <div className="ps-card-badge">
                <Briefcase className="w-4 h-4 text-terracotta" />
                <span>Fixed Scope</span>
              </div>
              <h3 className="ps-work-heading">One-Time Projects</h3>
              <p className="ps-work-desc">Perfect for businesses that need a specific project completed.</p>
              
              <div className="ps-service-list">
                {oneTimeProjects.map((item, idx) => (
                  <Link to={item.link} key={idx} className="ps-service-row">
                    <span className="ps-service-name">{item.title}</span>
                    <span className="ps-service-price">{item.price}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Ongoing Partnerships */}
            <div className="ps-work-card">
              <div className="ps-card-badge">
                <Repeat className="w-4 h-4 text-terracotta" />
                <span>Monthly Retainers</span>
              </div>
              <h3 className="ps-work-heading">Ongoing Partnerships</h3>
              <p className="ps-work-desc">For businesses that need continuous creative and marketing support.</p>
              
              <div className="ps-service-list">
                {ongoingPartnerships.map((item, idx) => (
                  <Link to={item.link} key={idx} className="ps-service-row">
                    <span className="ps-service-name">{item.title}</span>
                    <span className="ps-service-price">{item.price}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CUSTOM SOLUTIONS */}
      <section className="ps-section">
        <div className="ps-container">
          <div className="ps-custom-card">
            <div className="ps-custom-content">
              <span className="ps-tag">Tailored Architecture</span>
              <h2 className="ps-title">Don't See What You Need?</h2>
              <p className="ps-custom-p">
                Every business has different requirements. If you need multiple services, advanced functionality, 
                large-scale campaigns or a completely customized solution, we'll create a package around your requirements.
              </p>
              <Link to="/contact?type=custom-pricing" className="ps-btn primary">
                <span>Request Custom Pricing</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="ps-custom-list-wrap">
              <h3 className="ps-custom-list-title">Custom Projects Can Include</h3>
              <ul className="ps-custom-items">
                {customFeatures.map((feat, idx) => (
                  <li key={idx} className="ps-custom-item">
                    <CheckCircle2 className="w-4 h-4 text-terracotta flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHAT'S INCLUDED? */}
      <section className="ps-section">
        <div className="ps-container">
          <div className="ps-header">
            <span className="ps-tag">Methodology</span>
            <h2 className="ps-title">Every AMFlix Project Starts With Strategy</h2>
            <p className="ps-lead">Regardless of the service you choose, our execution follows a systematic process:</p>
          </div>

          <div className="ps-process-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="ps-process-card">
                <div className="ps-step-top">
                  <span className="ps-step-num">{step.num}</span>
                  <div className="ps-step-icon">{step.icon}</div>
                </div>
                <h3 className="ps-step-title">{step.title}</h3>
                <p className="ps-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: PRICING NOTES */}
      <section className="ps-section">
        <div className="ps-container">
          <div className="ps-header">
            <span className="ps-tag">Transparency</span>
            <h2 className="ps-title">Before You Get Started</h2>
          </div>

          <div className="ps-notes-grid">
            <div className="ps-note-card">
              <span className="ps-note-term">One-Time Services</span>
              <p>Branding, Website Development and Mobile App Development are generally project-based with fixed milestones.</p>
            </div>

            <div className="ps-note-card">
              <span className="ps-note-term">Monthly Services</span>
              <p>Social Media Management, Digital Marketing and Design &amp; Video Editing operate as flexible, recurring monthly plans.</p>
            </div>

            <div className="ps-note-card">
              <span className="ps-note-term">Custom Pricing</span>
              <p>Large-scale projects and requirements outside standard package deliverables are scoped and quoted individually.</p>
            </div>

            <div className="ps-note-card full">
              <div className="ps-note-alert">
                <AlertCircle className="w-5 h-5 text-terracotta flex-shrink-0" />
                <div>
                  <span className="ps-note-term">Third-Party Costs</span>
                  <p>Domain, hosting, advertising spend, premium software, APIs, plugins, third-party subscriptions and similar costs are separate unless specifically included in your proposal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}