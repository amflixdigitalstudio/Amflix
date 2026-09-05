import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  MapPin, 
  Globe, 
  ChevronDown, 
  Laptop, 
  Smartphone, 
  Palette, 
  Share2, 
  Megaphone, 
  Video,
  Building2,
} from 'lucide-react';
import { portfolioData } from '../../data/PortfolioData';
import './BangaloreStudio.css';

export default function BangaloreStudio() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeWorkFilter, setActiveWorkFilter] = useState('all');

  // SEO & Schema Setup
  useEffect(() => {
    document.title = 'Digital Studio in Bangalore | Branding, Marketing, Web & Apps | AMFlix';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'AMFlix is a digital studio in Bangalore offering branding, social media management, digital marketing, website development, mobile apps, design and video editing.';

    // Inject LocalBusiness & Breadcrumb Structured Schema
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'bangalore-studio-schema';
    schemaScript.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': 'https://amflix.studio/#localbusiness',
          'name': 'AMFlix Digital Studio',
          'url': 'https://amflix.studio/locations/bangalore',
          'telephone': '+916361484770',
          'email': 'amflixdigitalstudio@gmail.com',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Bangalore',
            'addressRegion': 'Karnataka',
            'addressCountry': 'IN'
          },
          'priceRange': '₹₹',
          'description':
            'Digital studio in Bangalore providing branding, website development, digital marketing, social media, mobile apps, and creative video editing.',
          'areaServed': ['Bangalore', 'Karnataka', 'India']
        },
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://amflix.studio/'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Locations',
              'item': 'https://amflix.studio/locations/bangalore'
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': 'Bangalore Studio',
              'item': 'https://amflix.studio/locations/bangalore'
            }
          ]
        }
      ]
    });

    const existingSchema = document.getElementById('bangalore-studio-schema');
    if (existingSchema) existingSchema.remove();
    document.head.appendChild(schemaScript);

    return () => {
      const el = document.getElementById('bangalore-studio-schema');
      if (el) el.remove();
    };
  }, []);

  // Filter Genuine Projects for Section 8
  const filteredWork = portfolioData.projects
    .filter((item) => activeWorkFilter === 'all' || item.category === activeWorkFilter)
    .slice(0, 6);

  const servicesList = [
    {
      title: 'Branding',
      desc: 'Build a distinctive and memorable brand with strategy, logo design, visual identity and brand guidelines.',
      link: '/services/branding',
      icon: <Palette className="w-5 h-5 text-terracotta" />
    },
    {
      title: 'Social Media Management',
      desc: 'Build a consistent social presence through content strategy, creative design, Reels, posts, community management and social media marketing.',
      link: '/services/social-media-management',
      icon: <Share2 className="w-5 h-5 text-terracotta" />
    },
    {
      title: 'Digital Marketing',
      desc: 'Reach your target audience and generate business opportunities through SEO, Meta Ads, Google Ads, lead generation and performance marketing.',
      link: '/services/digital-marketing',
      icon: <Megaphone className="w-5 h-5 text-terracotta" />
    },
    {
      title: 'Website Development',
      desc: 'Design and develop modern, responsive websites focused on user experience, performance and business goals.',
      link: '/services/website-design-development',
      icon: <Laptop className="w-5 h-5 text-terracotta" />
    },
    {
      title: 'Mobile App Development',
      desc: 'Turn your app idea into a functional digital product through UX/UI design, development, testing and deployment.',
      link: '/services/mobile-app-development',
      icon: <Smartphone className="w-5 h-5 text-terracotta" />
    },
    {
      title: 'Design & Video Editing',
      desc: 'Create professional graphics, social media creatives, advertisements, Reels, promotional videos and other visual content.',
      link: '/services/design-video',
      icon: <Video className="w-5 h-5 text-terracotta" />
    }
  ];

  const clientTypes = [
    { title: 'Startups', desc: 'Build your brand and digital product from the ground up.' },
    { title: 'Small Businesses', desc: 'Create a professional digital presence and reach more customers.' },
    { title: 'Growing Brands', desc: 'Strengthen branding, social media and digital marketing.' },
    { title: 'E-commerce Businesses', desc: 'Build stronger online stores, creative content and marketing systems.' },
    { title: 'Real Estate & Construction', desc: 'Build trust through branding, websites, content and lead generation.' },
    { title: 'Fashion & Beauty Brands', desc: 'Create visually strong identities and social media experiences.' },
    { title: 'Restaurants & Hospitality', desc: 'Build memorable brands and digital experiences that attract customers.' },
    { title: 'Technology Businesses', desc: 'Turn complex products into clear brands and digital experiences.' }
  ];

  const packages = [
    { title: 'Branding', price: '₹15,000', cadence: 'one-time starting' },
    { title: 'Social Media Management', price: '₹12,000', cadence: '/month starting' },
    { title: 'Digital Marketing', price: '₹15,000', cadence: '/month starting' },
    { title: 'Website Development', price: '₹25,000', cadence: 'one-time starting' },
    { title: 'Mobile App Development', price: '₹75,000', cadence: 'one-time starting' },
    { title: 'Design & Video Editing', price: '₹10,000', cadence: '/month starting' }
  ];

  const faqs = [
    {
      q: 'What does AMFlix do in Bangalore?',
      a: 'AMFlix provides branding, social media management, digital marketing, website development, mobile app development, graphic design and video editing services.'
    },
    {
      q: 'Is AMFlix a digital marketing agency in Bangalore?',
      a: 'AMFlix is a digital studio offering digital marketing along with branding, social media, web, mobile app and creative services.'
    },
    {
      q: 'Does AMFlix provide website development in Bangalore?',
      a: 'Yes. AMFlix provides website strategy, UI/UX design and website development for businesses.'
    },
    {
      q: 'Does AMFlix provide mobile app development in Bangalore?',
      a: 'Yes. AMFlix provides mobile app UX/UI design and development based on project requirements.'
    },
    {
      q: 'Does AMFlix provide branding services in Bangalore?',
      a: 'Yes. Branding services can include brand strategy, logo design, visual identity, brand guidelines and other brand assets.'
    },
    {
      q: "Can AMFlix manage my company's social media?",
      a: 'Yes. Social media management can include strategy, content planning, creative design, Reels, posts, publishing, community management and reporting depending on the selected package.'
    },
    {
      q: 'Does AMFlix provide SEO services in Bangalore?',
      a: "Yes. SEO can be provided as part of AMFlix's digital marketing services."
    },
    {
      q: 'Does AMFlix run Google Ads and Meta Ads?',
      a: 'Yes. AMFlix can manage Google Ads and Meta Ads campaigns. Advertising spend is separate from the management fee.'
    },
    {
      q: 'Does AMFlix work with startups in Bangalore?',
      a: 'Yes. AMFlix can support startups with branding, digital presence, websites, apps, creative content and marketing.'
    },
    {
      q: 'Can businesses outside Bangalore work with AMFlix?',
      a: 'Yes, where remote collaboration is suitable for the project.'
    },
    {
      q: 'How much does a digital studio in Bangalore cost?',
      a: 'Pricing depends on the service and scope. AMFlix packages start from ₹10,000/month for selected recurring creative services, while one-time projects start from ₹15,000 for branding and ₹25,000 for website development.'
    },
    {
      q: 'How can I start a project with AMFlix?',
      a: 'Contact AMFlix through the project enquiry form and share your business requirements, preferred service, timeline and project details.'
    }
  ];

  return (
    <article className="bgl-page-wrapper" aria-label="AMFlix Digital Studio Bangalore">
      
      {/* SECTION 1: HERO */}
      <section className="bgl-hero-sec">
        <div className="bgl-hero-glow" aria-hidden="true" />
        <div className="bgl-container bgl-hero-inner">
          <div className="bgl-badge-pill">
            <MapPin className="w-3.5 h-3.5 text-terracotta" />
            <span>Bangalore, Karnataka, India</span>
          </div>

          <h1 className="bgl-h1">
            AMFlix — <span className="bgl-accent">Digital Studio in Bangalore</span>
          </h1>

          <p className="bgl-hero-subheading">
            Building Brands, Digital Experiences &amp; Growth in Bangalore
          </p>

          <p className="bgl-hero-content">
            AMFlix is a digital studio in Bangalore offering branding, social media management,
            digital marketing, website development, mobile app development, graphic design and
            video editing services. We help startups, small businesses and growing brands build a
            stronger digital presence through strategy, creativity and technology.
          </p>

          <div className="bgl-hero-actions">
            <Link to="/contact" className="bgl-btn primary">
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a href="#services" className="bgl-btn secondary">
              <span>Explore Our Services</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT AMFLIX BANGALORE */}
      <section className="bgl-section bgl-border-top">
        <div className="bgl-container">
          <div className="bgl-split-grid">
            <div>
              <span className="bgl-sub-badge">Studio Foundations</span>
              <h2 className="bgl-h2">A Digital Studio Built for Modern Businesses</h2>
            </div>
            <div className="bgl-split-copy">
              <p>
                Bangalore is home to startups, technology companies, growing businesses and ambitious
                brands. AMFlix helps these businesses turn ideas into strong brands and digital experiences.
              </p>
              <p>
                From creating a brand identity to developing a website, managing social media,
                running digital marketing campaigns or building a mobile application, our team
                brings strategy, design and technology together.
              </p>
            </div>
          </div>

          <div className="bgl-combines-ribbon">
            <span className="bgl-ribbon-label">AMFlix Combines:</span>
            <div className="bgl-pill-cluster">
              {[
                'Strategy',
                'Branding',
                'Creative Design',
                'Marketing',
                'Technology',
                'Content',
                'Digital Experiences'
              ].map((pill, i) => (
                <span key={i} className="bgl-cluster-pill">
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES IN BANGALORE */}
      <section className="bgl-section bgl-border-top" id="services">
        <div className="bgl-container">
          <div className="bgl-sec-header">
            <span className="bgl-sub-badge">Core Disciplines</span>
            <h2 className="bgl-h2">Everything Your Brand Needs Under One Studio</h2>
          </div>

          <div className="bgl-services-grid">
            {servicesList.map((srv, idx) => (
              <div key={idx} className="bgl-service-card">
                <div className="bgl-card-icon-wrap">{srv.icon}</div>
                <h3 className="bgl-srv-title">{srv.title}</h3>
                <p className="bgl-srv-desc">{srv.desc}</p>
                <Link to={srv.link} className="bgl-card-link">
                  <span>Explore {srv.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHO WE WORK WITH */}
      <section className="bgl-section bgl-border-top">
        <div className="bgl-container">
          <div className="bgl-sec-header">
            <span className="bgl-sub-badge">Client Ecosystem</span>
            <h2 className="bgl-h2">Helping Businesses Across Bangalore</h2>
          </div>

          <div className="bgl-who-grid">
            {clientTypes.map((item, idx) => (
              <div key={idx} className="bgl-who-item">
                <span className="bgl-who-num">0{idx + 1}</span>
                <h3 className="bgl-who-title">{item.title}</h3>
                <p className="bgl-who-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE AMFLIX IN BANGALORE */}
      <section className="bgl-section bgl-border-top">
        <div className="bgl-container">
          <div className="bgl-sec-header">
            <span className="bgl-sub-badge">Strategic Advantage</span>
            <h2 className="bgl-h2">Strategy Meets Creativity &amp; Technology</h2>
          </div>

          <div className="bgl-why-grid">
            <div className="bgl-why-card">
              <h3>One Studio, Multiple Capabilities</h3>
              <p>
                Instead of coordinating multiple agencies, businesses can work with one team across
                branding, marketing, design and technology.
              </p>
            </div>
            <div className="bgl-why-card">
              <h3>Business-Focused Approach</h3>
              <p>
                We don't create simply for aesthetics. Every project starts with understanding the
                business objective.
              </p>
            </div>
            <div className="bgl-why-card">
              <h3>Creative Thinking</h3>
              <p>
                We create visual identities and digital experiences designed to make businesses
                stand out in competitive sectors.
              </p>
            </div>
            <div className="bgl-why-card">
              <h3>Technology-Driven</h3>
              <p>
                From websites to mobile apps, we turn ideas into functional, clean, and scalable
                digital products.
              </p>
            </div>
            <div className="bgl-why-card full">
              <h3>Long-Term Partnership</h3>
              <p>
                Our recurring services allow businesses to continue working with AMFlix after their
                initial project is completed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR PROCESS */}
      <section className="bgl-section bgl-border-top">
        <div className="bgl-container">
          <div className="bgl-sec-header">
            <span className="bgl-sub-badge">Framework</span>
            <h2 className="bgl-h2">From Idea to Execution</h2>
          </div>

          <div className="bgl-process-grid">
            {[
              {
                step: '01',
                title: 'Discover',
                desc: 'We understand your business, audience, challenges and objectives.'
              },
              {
                step: '02',
                title: 'Strategize',
                desc: 'We create the right strategy and define the direction of the project.'
              },
              {
                step: '03',
                title: 'Create',
                desc: 'Our designers, marketers and developers turn the strategy into creative and digital solutions.'
              },
              {
                step: '04',
                title: 'Launch',
                desc: 'We test, refine and launch the final product or campaign.'
              },
              {
                step: '05',
                title: 'Grow',
                desc: 'For ongoing services, we continuously monitor performance and optimize the strategy.'
              }
            ].map((p, idx) => (
              <div key={idx} className="bgl-process-card">
                <span className="bgl-process-step">{p.step}</span>
                <h3 className="bgl-process-title">{p.title}</h3>
                <p className="bgl-process-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: LOCAL + REMOTE */}
      <section className="bgl-section bgl-border-top">
        <div className="bgl-container">
          <div className="bgl-sec-header">
            <span className="bgl-sub-badge">Delivery Model</span>
            <h2 className="bgl-h2">Bangalore-Based. Built for Anywhere.</h2>
            <p className="bgl-sec-lead">
              AMFlix is based in Bangalore and can work with businesses locally as well as clients in
              other locations through digital collaboration.
            </p>
          </div>

          <div className="bgl-split-grid-equal">
            <div className="bgl-model-card">
              <div className="bgl-model-header">
                <Building2 className="w-5 h-5 text-terracotta" />
                <h3>Local Projects</h3>
              </div>
              <ul className="bgl-model-list">
                <li>In-person discussions when applicable</li>
                <li>Local business understanding</li>
                <li>Brand and marketing support</li>
                <li>Website and app development</li>
              </ul>
            </div>

            <div className="bgl-model-card">
              <div className="bgl-model-header">
                <Globe className="w-5 h-5 text-terracotta" />
                <h3>Remote Projects</h3>
              </div>
              <ul className="bgl-model-list">
                <li>Online consultations</li>
                <li>Digital collaboration</li>
                <li>Remote project management</li>
                <li>Online delivery and support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: OUR WORK */}
      <section className="bgl-section bgl-border-top">
        <div className="bgl-container">
          <div className="bgl-sec-header">
            <span className="bgl-sub-badge">Track Record</span>
            <h2 className="bgl-h2">Work That Speaks for the Brand</h2>
          </div>

          <div className="bgl-work-tabs">
            {[
              { id: 'all', label: 'All' },
              { id: 'branding', label: 'Branding' },
              { id: 'social-media-management', label: 'Social Media' },
              { id: 'digital-marketing', label: 'Marketing' },
              { id: 'website-development', label: 'Websites' },
              { id: 'mobile-app-development', label: 'Apps' },
              { id: 'design-video-editing', label: 'Design & Video' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`bgl-tab-btn ${activeWorkFilter === tab.id ? 'active' : ''}`}
                onClick={() => setActiveWorkFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bgl-work-grid">
            {filteredWork.map((project) => (
              <div key={project.id} className="bgl-work-card">
                <div className="bgl-work-media">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="bgl-work-content">
                  <span className="bgl-work-cat">{project.category}</span>
                  <h3 className="bgl-work-name">{project.title}</h3>
                  <p className="bgl-work-tagline">{project.tagline}</p>
                  <Link to="/work" className="bgl-work-link">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="bgl-center-action">
            <Link to="/work" className="bgl-btn primary">
              <span>Explore All Our Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9: INDUSTRIES WE SERVE */}
      <section className="bgl-section bgl-border-top">
        <div className="bgl-container">
          <div className="bgl-sec-header">
            <span className="bgl-sub-badge">Sectors</span>
            <h2 className="bgl-h2">Digital Solutions for Different Industries</h2>
          </div>

          <div className="bgl-industries-cluster">
            {[
              'Fashion',
              'Beauty',
              'Real Estate',
              'Construction',
              'Restaurants & Hospitality',
              'Healthcare',
              'Technology',
              'Startups',
              'E-commerce',
              'Professional Services'
            ].map((ind, i) => (
              <Link to="/industries" key={i} className="bgl-industry-pill">
                <span>{ind}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>

          <div className="bgl-center-action">
            <Link to="/industries" className="bgl-btn secondary">
              <span>Explore Industries</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10: BANGALORE DIGITAL SERVICES */}
      <section className="bgl-section bgl-border-top">
        <div className="bgl-container">
          <div className="bgl-banner-box">
            <span className="bgl-sub-badge">Full-Service Studio Partner</span>
            <h2 className="bgl-h2">Looking for a Digital Partner in Bangalore?</h2>
            <p className="bgl-banner-p">
              Whether you are searching for a branding agency, social media agency, digital marketing
              agency, website development company, mobile app development company or creative
              design studio in Bangalore, AMFlix brings these capabilities together under one digital studio.
            </p>
            <p className="bgl-banner-p">
              We work with businesses at different stages — from launching a new brand to improving
              an existing digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 11: PACKAGES & PRICING */}
      <section className="bgl-section bgl-border-top">
        <div className="bgl-container">
          <div className="bgl-sec-header">
            <span className="bgl-sub-badge">Clear Investment</span>
            <h2 className="bgl-h2">Solutions for Every Stage of Business</h2>
          </div>

          <div className="bgl-pricing-grid">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bgl-pricing-card">
                <span className="bgl-pkg-title">{pkg.title}</span>
                <div className="bgl-pkg-pricing">
                  <span className="bgl-pkg-val">Starting from {pkg.price}</span>
                  <span className="bgl-pkg-cadence">{pkg.cadence}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bgl-center-action">
            <Link to="/ServicePricing" className="bgl-btn primary">
              <span>View All Packages &amp; Pricing</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 12: BANGALORE FAQ */}
      <section className="bgl-section bgl-border-top">
        <div className="bgl-container">
          <div className="bgl-sec-header">
            <span className="bgl-sub-badge">Clear Inquiries</span>
            <h2 className="bgl-h2">Frequently Asked Questions</h2>
          </div>

          <div className="bgl-faq-stack">
            {faqs.map((f, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`bgl-faq-item ${isOpen ? 'open' : ''}`}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <div className="bgl-faq-question">
                    <h3>{f.q}</h3>
                    <ChevronDown className="bgl-faq-icon" />
                  </div>
                  {isOpen && (
                    <div className="bgl-faq-answer">
                      <p>{f.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 13: FINAL CTA */}
      <section className="bgl-section bgl-border-top">
        <div className="bgl-container">
          <div className="bgl-final-cta-card">
            <div className="bgl-final-cta-copy">
              <span className="bgl-sub-badge">Let's Partner</span>
              <h2 className="bgl-h2">Let's Build Something Great in Bangalore.</h2>
              <p className="bgl-final-lead">
                Have an idea, business or brand that needs to grow digitally? Let's turn it into
                something people notice, remember and trust.
              </p>
            </div>
            <div className="bgl-final-actions">
              <Link to="/contact" className="bgl-btn primary">
                <span>Start Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="bgl-btn secondary">
                <span>Get a Custom Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
}