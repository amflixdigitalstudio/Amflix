import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import './ContactSection.css';

// PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE:
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyYbeRBjh3k-Tc8r7oEpVEVPBrTMIyKpBcAXjNdhIrGwlRU8FjHuJ6z1So6C9bWUI3d/exec";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    service: 'Branding',
    timeline: 'Within 1 month',
    message: ''
  });

  const [websiteError, setWebsiteError] = useState('');

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });

  // Regex allows both full URLs and clean domains (e.g., araamane.in, divinehouse.in, www.site.com)
  const isValidDomainOrUrl = (val) => {
    if (!val || val.trim() === '') return true; // Optional field
    const pattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/i;
    return pattern.test(val.trim());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'website') {
      if (value.trim() !== '' && !isValidDomainOrUrl(value)) {
        setWebsiteError('Please enter a valid domain or URL');
      } else {
        setWebsiteError('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check website validation before sending
    if (formData.website.trim() !== '' && !isValidDomainOrUrl(formData.website)) {
      setWebsiteError('Please enter a valid domain (e.g. araamane.in, divinehouse.in)');
      return;
    }

    setStatus({ submitting: true, success: false, error: false, message: '' });

    // Format clean domain with https:// if omitted by user
    let formattedWebsite = formData.website.trim();
    if (formattedWebsite && !/^https?:\/\//i.test(formattedWebsite)) {
      formattedWebsite = `https://${formattedWebsite}`;
    }

    const payload = {
      ...formData,
      website: formattedWebsite
    };

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      setStatus({
        submitting: false,
        success: true,
        error: false,
        message: 'Thank you! Your enquiry has been sent successfully. We will be in touch within 24 hours.'
      });

      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        website: '',
        service: 'Branding',
        timeline: 'Within 1 month',
        message: ''
      });
      setWebsiteError('');
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Something went wrong. Please try again.'
      });
    }
  };

  return (
    <section className="contact-section-wrapper" id="contact-form">
      <div className="contact-container">
        
        {/* Header */}
        <div className="contact-header">
          <span className="contact-badge">Start A Project</span>
          <h2 className="contact-title">Let’s Create Something Great</h2>
          <p className="contact-desc">
            Tell us about your brand, goals, and timeline. We'll get back within 24 hours.
          </p>
        </div>

        {/* Form Card */}
        <div className="contact-card">
          <form onSubmit={handleSubmit} className="contact-form">
            
            <div className="contact-form-grid">
              {/* 1. Name */}
              <div className="contact-field">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* 2. Company */}
              <div className="contact-field">
                <label htmlFor="company">Company / Brand Name *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  placeholder="e.g. Acme Studio or Venture Labs"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              {/* 3. Email */}
              <div className="contact-field">
                <label htmlFor="email">Work Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* 4. Phone */}
              <div className="contact-field">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="+91 6361484770"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* 5. Website (Accepts regular domains like divinehouse.in) */}
              <div className="contact-field full-width">
                <label htmlFor="website">Current Website (Optional)</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  placeholder="yourwebsite.com or https://yourwebsite.com"
                  value={formData.website}
                  onChange={handleChange}
                  className={websiteError ? 'input-error' : ''}
                />
                {websiteError && (
                  <span className="field-error-text">{websiteError}</span>
                )}
              </div>

              {/* 6. Service */}
              <div className="contact-field">
                <label htmlFor="service">Primary Service *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="Branding">Branding</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Design & Video Editing">Design & Video Editing</option>
                </select>
              </div>

              {/* 7. Timeline */}
              <div className="contact-field">
                <label htmlFor="timeline">Expected Timeline *</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                >
                  <option value="Immediately (Under 2 weeks)">Immediately (Under 2 weeks)</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="1 - 3 months">1 - 3 months</option>
                  <option value="Planning / Exploring stages">Planning / Exploring stages</option>
                </select>
              </div>
            </div>

            {/* 8. Project Details */}
            <div className="contact-field full-width">
              <label htmlFor="message">Project Details *</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell us about your business, the core challenge, deliverables, or objectives..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {/* Submit Enquiry */}
            <button
              type="submit"
              disabled={status.submitting}
              className="contact-submit-btn"
            >
              {status.submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Submitting Enquiry...
                </>
              ) : (
                <>
                  <span>Submit Enquiry</span>
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </button>

            {/* Feedback Notifications */}
            {status.success && (
              <div className="contact-status-box success">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>{status.message}</span>
              </div>
            )}

            {status.error && (
              <div className="contact-status-box error">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>{status.message}</span>
              </div>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}