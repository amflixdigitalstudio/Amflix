import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scale, Mail, Phone, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';
import './TermsConditionsContents.css';

export default function TermsConditionsContents() {
  useEffect(() => {
    document.title = 'Terms & Conditions | AMFlix Digital Studio';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Read the Terms & Conditions governing creative deliverables, project scopes, payments, intellectual property, and service agreements with AMFlix Digital Studio.';

    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="terms-wrapper" aria-label="AMFlix Terms & Conditions">
      <div className="terms-glow" aria-hidden="true" />

      <div className="terms-container">
        
        {/* Header */}
        <header className="terms-header">
          <div className="terms-badge">
            <Scale className="w-3.5 h-3.5 text-terracotta" />
            <span>Service Agreement</span>
          </div>
          <h1 className="terms-title">Terms &amp; Conditions</h1>
          <p className="terms-date-tag">Last Updated: September 2026</p>
          <div className="terms-disclaimer-box">
            <p>
              <strong>Notice:</strong> This document outlines the standard operational terms, project scopes,
              payment structures, and mutual obligations governing work engaged with AMFlix Digital Studio.
            </p>
          </div>
        </header>

        {/* Content Body */}
        <div className="terms-body">

          {/* 1. Introduction */}
          <section className="terms-section">
            <h2>1. Introduction</h2>
            <p>Welcome to AMFlix.</p>
            <p>
              These Terms &amp; Conditions govern your use of the AMFlix website and the services provided by AMFlix.
              By accessing our website, submitting an enquiry, requesting a proposal, purchasing a service, or engaging
              AMFlix for a project, you agree to these Terms &amp; Conditions.
            </p>
            <p>
              If you do not agree with these terms, please do not use our website or engage our services.
            </p>
          </section>

          {/* 2. About AMFlix */}
          <section className="terms-section">
            <h2>2. About AMFlix</h2>
            <div className="terms-meta-grid">
              <div className="terms-meta-card">
                <span className="terms-meta-label">Business Name</span>
                <span className="terms-meta-val">AMFlix Digital Studio</span>
              </div>
              <div className="terms-meta-card">
                <span className="terms-meta-label">Official Email</span>
                <span className="terms-meta-val">amflixdigitalstudio@gmail.com</span>
              </div>
              <div className="terms-meta-card">
                <span className="terms-meta-label">Contact Line</span>
                <span className="terms-meta-val">+91 6361484770</span>
              </div>
              <div className="terms-meta-card">
                <span className="terms-meta-label">Studio Location</span>
                <span className="terms-meta-val">Bangalore, Karnataka, India</span>
              </div>
            </div>
            <p className="mt-sm">AMFlix provides digital and creative disciplines including:</p>
            <ul className="terms-list">
              <li>Complete Branding Services</li>
              <li>Social Media Management &amp; Marketing</li>
              <li>Digital Marketing &amp; Performance Advertising</li>
              <li>Website Design &amp; Development</li>
              <li>Mobile App Design &amp; Development</li>
              <li>Graphic Design &amp; Visual Identity</li>
              <li>Video Production &amp; Post-Editing</li>
            </ul>
          </section>

          {/* 3. Services */}
          <section className="terms-section">
            <h2>3. Services</h2>
            <p>
              AMFlix provides services according to the scope, deliverables, timeline, and terms agreed upon with
              the client. The exact services included in a project will be specified in the relevant proposal,
              quotation, or written statement of work.
            </p>
            <ul className="terms-list">
              <li><strong>Branding:</strong> Brand strategy, logo design, visual identity systems, typography guidelines, and brand books.</li>
              <li><strong>Social Media Management:</strong> Content calendars, creative design, Reels, short-form video editing, publishing, and community engagement.</li>
              <li><strong>Digital Marketing:</strong> SEO foundations, Meta Ads, Google Ads, lead generation pipelines, and performance optimization.</li>
              <li><strong>Website Development:</strong> UI/UX architecture, responsive frontend engineering, custom integrations, testing, and deployment.</li>
              <li><strong>Mobile App Development:</strong> Product roadmapping, UX flows, native/hybrid development, API integrations, and store submissions.</li>
              <li><strong>Design &amp; Video:</strong> Commercial collateral, ad creatives, presentations, brand films, and motion graphics.</li>
            </ul>
          </section>

          {/* 4. Project Scope */}
          <section className="terms-section">
            <h2>4. Project Scope</h2>
            <p>
              Before beginning any work, AMFlix and the client define the project scope. This includes required
              deliverables, screen/page counts, creative volume, functional requirements, revision caps, timelines,
              and payment milestones.
            </p>
            <p className="terms-note">
              Work requested outside the agreed scope constitutes an out-of-scope addition and may require a separate quotation and timeline extension.
            </p>
          </section>

          {/* 5 & 6. Pricing & Payment Terms */}
          <section className="terms-section">
            <h2>5. Pricing &amp; Payment Terms</h2>
            <p>
              AMFlix provides both fixed project pricing (Branding, Websites, Mobile Apps) and recurring service
              retainers (Social Media, Marketing, Video Editing). Published packages represent starting estimates
              for stated scopes.
            </p>
            <ul className="terms-list">
              <li>Projects require advance milestone deposits prior to commencement as outlined in the proposal.</li>
              <li>Final codebases, raw vector assets, and deployment access are released upon settlement of final invoices.</li>
              <li>Recurring monthly retainers are billed in advance of the service cycle.</li>
              <li>AMFlix reserves the right to pause active production or campaign management if an agreed invoice is overdue.</li>
            </ul>
          </section>

          {/* 7 & 8. Recurring Services & Yearly Plans */}
          <section className="terms-section">
            <h2>6. Retainers &amp; Yearly Commitments</h2>
            <p>
              For monthly and yearly packages, production begins after receipt of payment and required onboarding materials.
              Deliverables follow the monthly schedule specified in the agreement; unused monthly assets do not roll over
              automatically unless agreed in writing.
            </p>
            <p>
              Yearly plans receive discounted rates in exchange for commitment terms. Package adjustments take effect at
              the start of the subsequent billing cycle.
            </p>
          </section>

          {/* 9. Revisions */}
          <section className="terms-section">
            <h2>7. Revisions &amp; Scope Adjustments</h2>
            <p>
              The number of included revision rounds corresponds to the chosen package. A revision represents minor adjustments
              to typography, phrasing, spacing, or visual balancing within an approved concept.
            </p>
            <p>
              Requests for completely new creative directions, redesigned concepts, or restructured architecture after approval
              are treated as additional work billed at standard studio rates.
            </p>
          </section>

          {/* 10 & 11. Client Responsibilities & Approvals */}
          <section className="terms-section">
            <h2>8. Client Responsibilities &amp; Approvals</h2>
            <p>
              Timely delivery depends directly on prompt client collaboration. The client agrees to provide required brand
              assets, copy, image references, credentials, and structural approvals without extended delay.
            </p>
            <p>
              AMFlix is not liable for launch delays stemming from postponed client reviews, missing assets, or stalled approvals.
              Once a deliverable is signed off, subsequent modifications may incur additional production fees.
            </p>
          </section>

          {/* 12, 13, 14. Third-Party Costs, Ad Spend & Marketing Results */}
          <section className="terms-section">
            <h2>9. Third Parties, Ad Spend &amp; Campaign Results</h2>
            <p>
              Third-party costs (domains, web hosting, paid plug-ins, premium fonts, API keys, and app store fees) are billed
              directly to the client and are not included in studio service fees.
            </p>
            <ul className="terms-list">
              <li><strong>Ad Budgets:</strong> Media spend paid directly to Meta, Google, or other ad platforms is completely separate from AMFlix management fees.</li>
              <li><strong>No Speculative Guarantees:</strong> While we apply proven creative, technical, and analytical practices, AMFlix does not promise specific ranking positions, exact follower counts, click-through volumes, or guaranteed revenue figures.</li>
              <li>Market dynamics, consumer demand, platform algorithm changes, and competitor actions remain outside studio control.</li>
            </ul>
          </section>

          {/* 15 & 16. Web & Mobile Development Terms */}
          <section className="terms-section">
            <h2>10. Website &amp; Mobile App Development</h2>
            <p>
              Development deliverables are engineered according to agreed technical specifications. The client is responsible
              for supplying accurate product data, pricing, company policies, and legal text.
            </p>
            <p>
              App Store (Apple) and Google Play review approvals are governed by their respective independent guidelines. AMFlix
              builds adhering to platform standards, but cannot guarantee third-party app approval.
            </p>
          </section>

          {/* 17, 18, 19, 20. Intellectual Property & Assets */}
          <section className="terms-section">
            <h2>11. Intellectual Property &amp; Portfolio Rights</h2>
            <p>
              Upon receipt of final payments, ownership rights for final client-specific deliverables (custom logos, website code,
              tailored graphics) transfer to the client as specified in the project agreement.
            </p>
            <p>
              AMFlix retains all rights to its foundational templates, development boilerplates, proprietary workflows, design systems,
              and rejected preliminary concepts.
            </p>
            <p>
              Unless an explicit Non-Disclosure Agreement (NDA) specifies otherwise, AMFlix reserves the right to exhibit completed
              work in our portfolio, case studies, and digital studio marketing channels.
            </p>
          </section>

          {/* 21, 22, 23, 24, 25. Confidentiality, Delays & Cancellation */}
          <section className="terms-section">
            <h2>12. Confidentiality, Delays &amp; Cancellations</h2>
            <p>
              Both parties agree to protect proprietary business strategies, credentials, financial details, and unreleased
              concepts shared during collaboration.
            </p>
            <ul className="terms-list">
              <li><strong>Cancellations:</strong> Either party may request project termination with written notice. Compensation for completed milestones, reserved sprint hours, or committed costs remains due and non-refundable.</li>
              <li><strong>Suspension:</strong> AMFlix may pause or discontinue services if accounts remain delinquent, required assets are withheld, or requested content breaches ethical or legal boundaries.</li>
            </ul>
          </section>

          {/* 26, 27, 28, 29, 30. Acceptable Use & Liability */}
          <section className="terms-section">
            <h2>13. Acceptable Use &amp; Limitation of Liability</h2>
            <p>
              Clients must not request materials that promote unlawful activities, defamation, copyright infringement, or deceptive
              practices. AMFlix reserves the right to refuse work violating applicable laws.
            </p>
            <p>
              To the fullest extent permitted by Indian law, AMFlix’s cumulative financial liability for any claim arising from
              our services is strictly limited to the total fees paid by the client for the specific deliverable in dispute.
            </p>
          </section>

          {/* 31, 32, 33, 34. Force Majeure & Governing Law */}
          <section className="terms-section">
            <h2>14. Force Majeure &amp; Governing Law</h2>
            <p>
              AMFlix is not liable for performance delays caused by events beyond reasonable control, including infrastructure
              outages, platform disruptions, natural emergencies, or government mandates.
            </p>
            <p>
              These Terms &amp; Conditions are governed by and construed in accordance with the laws of India, with jurisdiction
              vested exclusively in the competent courts of Bengaluru, Karnataka.
            </p>
          </section>

          {/* 35. Contact Us Box */}
          <section className="terms-contact-box">
            <span className="terms-box-label">Questions About Our Terms?</span>
            <h3>Connect with our Operations Team</h3>
            <p>
              If you require clarification on any clause, custom engagement terms, or an enterprise service agreement,
              reach out directly:
            </p>
            
            <div className="terms-contact-links">
              <a href="mailto:amflixdigitalstudio@gmail.com" className="terms-channel-chip">
                <Mail className="w-4 h-4 text-terracotta" />
                <span>amflixdigitalstudio@gmail.com</span>
              </a>
              <a href="tel:+916361484770" className="terms-channel-chip">
                <Phone className="w-4 h-4 text-terracotta" />
                <span>+91 6361484770</span>
              </a>
              <a href="https://wa.me/918050393869" target="_blank" rel="noopener noreferrer" className="terms-channel-chip">
                <MessageCircle className="w-4 h-4 text-terracotta" />
                <span>+91 8050393869</span>
              </a>
              <div className="terms-channel-chip static">
                <MapPin className="w-4 h-4 text-terracotta" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>

            <div className="terms-box-cta">
              <Link to="/contact" className="terms-cta-btn">
                <span>Contact AMFlix</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

        </div>

      </div>
    </article>
  );
}