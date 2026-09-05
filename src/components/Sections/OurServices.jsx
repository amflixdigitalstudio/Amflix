import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Palette, 
  Share2, 
  Megaphone, 
  Laptop, 
  Smartphone, 
  Video, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import './OurServices.css';

export default function OurServices() {
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    {
      id: 'branding',
      title: 'Branding',
      price: 'Starts From ₹20,000',
      period: 'One-Time',
      description: 'Build a memorable brand with professional strategy, identity and visual direction.',
      icon: <Palette className="w-5 h-5 text-terracotta" />,
      linkText: 'View Branding Packages',
      linkUrl: '/services/branding',
      customNote: null
    },
    {
      id: 'social-media',
      title: 'Social Media Management',
      price: 'Starts From ₹20,000',
      period: '/ Month',
      description: 'Build a consistent and engaging social media presence with strategy, content and management.',
      icon: <Share2 className="w-5 h-5 text-terracotta" />,
      linkText: 'View Social Media Packages',
      linkUrl: '/services/social-media-management',
      customNote: null
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      price: 'Starts From ₹15,000',
      period: '/ Month',
      description: 'Grow your online visibility with SEO, paid advertising, lead generation and performance marketing.',
      icon: <Megaphone className="w-5 h-5 text-terracotta" />,
      linkText: 'View Digital Marketing Packages',
      linkUrl: '/services/digital-marketing',
      customNote: 'Large-scale campaigns: Contact us for custom pricing.'
    },
    {
      id: 'website-development',
      title: 'Website Development',
      price: 'Starts From ₹20,000',
      period: 'One-Time',
      description: 'Professional, responsive websites designed around your business and customers.',
      icon: <Laptop className="w-5 h-5 text-terracotta" />,
      linkText: 'View Website Packages',
      linkUrl: '/services/website-design-development',
      customNote: 'Large-scale websites & advanced features: Contact us for custom pricing.'
    },
    {
      id: 'mobile-app-development',
      title: 'Mobile App Development',
      price: 'Starts From ₹80,000',
      period: 'One-Time',
      description: 'Turn your idea into a functional mobile application with modern UX/UI and development.',
      icon: <Smartphone className="w-5 h-5 text-terracotta" />,
      linkText: 'View App Packages',
      linkUrl: '/services/mobile-app-development',
      customNote: 'Large-scale applications & advanced features: Contact us for custom pricing.'
    },
    {
      id: 'design-video-editing',
      title: 'Design & Video Editing',
      price: 'Starts From ₹10,000',
      period: '/ Month',
      description: 'Professional graphic design and video editing for social media, advertising and brand communication.',
      icon: <Video className="w-5 h-5 text-terracotta" />,
      linkText: 'View Creative Packages',
      linkUrl: '/services/design-video',
      customNote: null
    }
  ];

  const handleNext = useCallback(() => {
    setActiveMobileIdx((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  }, [services.length]);

  const handlePrev = useCallback(() => {
    setActiveMobileIdx((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  }, [services.length]);

  // 5-Second Auto-Scroll Interval
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  return (
    <section className="our-services-section" aria-label="Our Services & Starting Prices">
      <div className="our-services-container">
        
        {/* Header */}
        <div className="our-services-header">
          <span className="our-services-sub-badge">Explore Our Services</span>
          <h2 className="our-services-title">Our Services &amp; Starting Prices</h2>
        </div>

        {/* Desktop & Tablet 3-Column Grid */}
        <div className="our-services-grid desktop-only">
          {services.map((item) => (
            <div key={item.id} className="service-pricing-card">
              <div className="card-top">
                <div className="service-icon-wrap">{item.icon}</div>
                <h3 className="service-title">{item.title}</h3>
                <div className="service-price-wrap">
                  <span className="service-price">{item.price}</span>
                  {item.period && item.period !== 'One-Time' && (
                    <span className="service-period">{item.period}</span>
                  )}
                </div>
                <p className="service-desc">{item.description}</p>
              </div>

              <div className="card-bottom">
                {item.customNote && (
                  <p className="service-custom-note">{item.customNote}</p>
                )}
                <Link to={item.linkUrl} className="service-package-btn">
                  <span>{item.linkText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Single Card Slider (5-second auto scroll with pause on interaction) */}
        <div 
          className="mobile-slider-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="mobile-card-stage">
            {(() => {
              const currentItem = services[activeMobileIdx];
              return (
                <div key={currentItem.id} className="service-pricing-card mobile-card-active">
                  <div className="card-top">
                    <div className="service-icon-wrap">{currentItem.icon}</div>
                    <h3 className="service-title">{currentItem.title}</h3>
                    <div className="service-price-wrap">
                      <span className="service-price">{currentItem.price}</span>
                      {currentItem.period && currentItem.period !== 'One-Time' && (
                        <span className="service-period">{currentItem.period}</span>
                      )}
                    </div>
                    <p className="service-desc">{currentItem.description}</p>
                  </div>

                  <div className="card-bottom">
                    {currentItem.customNote && (
                      <p className="service-custom-note">{currentItem.customNote}</p>
                    )}
                    <Link to={currentItem.linkUrl} className="service-package-btn">
                      <span>{currentItem.linkText}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Navigation Controls */}
          <div className="mobile-slider-controls">
            <button 
              type="button" 
              className="slider-arrow-btn" 
              onClick={handlePrev}
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5 text-terracotta" />
            </button>

            <span className="slider-counter">
              {activeMobileIdx + 1} / {services.length}
            </span>

            <button 
              type="button" 
              className="slider-arrow-btn" 
              onClick={handleNext}
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5 text-terracotta" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}