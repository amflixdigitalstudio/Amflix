import React from 'react';
import { Mail, Phone, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';
import './ContactChannels.css';

export default function ContactChannels() {
  const contactPoints = [
    {
      icon: <Mail className="channel-icon" />,
      label: 'Email',
      value: 'amflixdigitalstudio@gmail.com',
      href: 'mailto:amflixdigitalstudio@gmail.com',
      external: false
    },
    {
      icon: <Phone className="channel-icon" />,
      label: 'Phone',
      value: '+91 6361484770',
      href: 'tel:+916361484770',
      external: false
    },
    {
      icon: <MessageCircle className="channel-icon" />,
      label: 'WhatsApp',
      value: '+91 8050393869',
      href: 'https://wa.me/918050393869?text=Hi%20AMFlix,%20I%20would%20like%20to%20discuss%20a%20project.',
      external: true
    },
    {
      icon: <MapPin className="channel-icon" />,
      label: 'City',
      value: 'Bangalore, Karnataka, India',
      href: 'https://maps.google.com/?q=Bangalore,Karnataka,India',
      external: true
    }
  ];

  return (
    <section className="contact-channels-section" aria-label="Direct Studio Contact">
      <div className="contact-channels-container">
        
        {/* Left Side: Brand Logo & Studio Identity */}
        <div className="contact-brand-col">
          <div className="contact-logo-frame">
            <img
              src="/SquareLogo.png"
              alt="AMFlix Digital Studio Logo"
              className="contact-company-logo"
            />
          </div>

          <div className="contact-brand-copy">
            <span className="contact-studio-label">Direct Communication</span>
            <h2 className="contact-brand-name">AMFlix Digital Studio</h2>
            <p className="contact-brand-tagline">
              Partnering with visionary brands worldwide from Bangalore. Reach out across any channel to get started.
            </p>
          </div>
        </div>

        {/* Right Side: Clean Icon List */}
        <div className="contact-details-col">
          {contactPoints.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.external ? '_blank' : '_self'}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="contact-channel-row"
            >
              <div className="channel-left">
                <div className="channel-icon-pill">{item.icon}</div>
                <div className="channel-text">
                  <span className="channel-label">{item.label}</span>
                  <span className="channel-value">{item.value}</span>
                </div>
              </div>

              <div className="channel-action-trigger">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}