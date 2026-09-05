import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';
import './PrivacyPolicycontents.css';

export default function PrivacyPolicycontents() {
  useEffect(() => {
    document.title = 'Privacy Policy | AMFlix Digital Studio';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Understand how AMFlix collects, uses, and safeguards client and visitor information across our digital platforms, services, and communications.';
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="policy-wrapper" aria-label="AMFlix Privacy Policy">
      <div className="policy-glow" aria-hidden="true" />

      <div className="policy-container">
        
        {/* Header */}
        <header className="policy-header">
          <div className="policy-badge">
            <ShieldCheck className="w-3.5 h-3.5 text-terracotta" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="policy-title">Privacy Policy</h1>
          <p className="policy-date-tag">Last Updated: September 2026</p>
          <div className="policy-disclaimer-box">
            <p>
              <strong>Notice:</strong> This policy outlines the practices of AMFlix regarding the collection,
              handling, and protection of information across our website, enquiries, and digital studio services.
            </p>
          </div>
        </header>

        {/* Content Body */}
        <div className="policy-body">
          
          {/* Section 1 */}
          <section className="policy-section">
            <h2>1. Introduction</h2>
            <p>Welcome to AMFlix.</p>
            <p>
              AMFlix respects your privacy and is committed to protecting the personal information you
              provide when you visit our website, contact us, request a service, submit an enquiry, or
              otherwise interact with our digital platforms.
            </p>
            <p>
              This Privacy Policy explains what information we collect, how we use it, how we protect it,
              and the choices available to you. By using the AMFlix website, you agree to the practices
              described in this Privacy Policy.
            </p>
          </section>

          {/* Section 2 */}
          <section className="policy-section">
            <h2>2. About AMFlix</h2>
            <div className="policy-meta-grid">
              <div className="meta-card">
                <span className="meta-label">Studio Entity</span>
                <span className="meta-val">AMFlix Digital Studio</span>
              </div>
              <div className="meta-card">
                <span className="meta-label">Primary Email</span>
                <span className="meta-val">amflixdigitalstudio@gmail.com</span>
              </div>
              <div className="meta-card">
                <span className="meta-label">Contact Line</span>
                <span className="meta-val">+91 6361484770</span>
              </div>
              <div className="meta-card">
                <span className="meta-label">Headquarters</span>
                <span className="meta-val">Bangalore, Karnataka, India</span>
              </div>
            </div>
            <p className="mt-sm">
              For privacy-related questions, you can contact us using the details listed above.
            </p>
          </section>

          {/* Section 3 */}
          <section className="policy-section">
            <h2>3. Information We Collect</h2>
            <p>
              We may collect information that you voluntarily provide to us when you interact with AMFlix.
            </p>
            <h3>Information you may provide:</h3>
            <ul className="policy-list">
              <li>Name and job title</li>
              <li>Work email address</li>
              <li>Phone number</li>
              <li>Company / brand name</li>
              <li>Current website URL or domain</li>
              <li>Service requirements and deliverables</li>
              <li>Project briefs and objectives</li>
              <li>Expected timeline</li>
              <li>Direct messages, questions, and communication history</li>
              <li>Information provided during strategy consultations</li>
            </ul>
            <p className="policy-note">
              Please do not submit sensitive personal information through forms unless specifically requested and necessary.
            </p>
          </section>

          {/* Section 4 */}
          <section className="policy-section">
            <h2>4. Information Collected Automatically</h2>
            <p>
              When you browse our website, certain technical information may be collected automatically by
              servers and performance tools:
            </p>
            <ul className="policy-list">
              <li>IP address and approximate geographic location</li>
              <li>Browser type and version</li>
              <li>Device model and operating system</li>
              <li>Pages viewed, time spent per section, and navigation pathways</li>
              <li>Referring website URLs and inbound links</li>
              <li>Interaction data, scroll depths, and bounce statistics</li>
              <li>Diagnostic, error, and performance metrics</li>
            </ul>
            <p>
              This technical information is used exclusively to evaluate site performance, optimize device
              compatibility, and protect our infrastructure from automated security threats.
            </p>
          </section>

          {/* Section 5 */}
          <section className="policy-section">
            <h2>5. How We Use Your Information</h2>
            <p>AMFlix uses collected information solely for legitimate operational purposes, including:</p>
            <ul className="policy-list">
              <li>Responding to project enquiries and scheduling consultations</li>
              <li>Scoping project requirements and preparing formal proposals or quotations</li>
              <li>Delivering contracted services across Branding, Web, Marketing, and Video</li>
              <li>Communicating milestones, design previews, and technical handoffs</li>
              <li>Providing post-launch maintenance, troubleshooting, and support</li>
              <li>Evaluating website traffic trends to refine user experience</li>
              <li>Detecting, preventing, and addressing fraud, abuse, or security anomalies</li>
              <li>Complying with applicable legal, fiscal, and regulatory duties</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="policy-section">
            <h2>6. Communication Practices</h2>
            <p>
              If you reach out via our enquiry forms, email, phone, or WhatsApp, we use your supplied
              details to reply directly to your query.
            </p>
            <p>When you partner with AMFlix as a client, we contact you concerning:</p>
            <ul className="policy-list">
              <li>Project updates, creative proofs, and sprint deliverables</li>
              <li>Approvals, revisions, and production feedback</li>
              <li>Invoicing, payment processing, and milestone receipts</li>
              <li>Hosting, domain, or deployment maintenance notices</li>
            </ul>
            <p>We do not sell, rent, or distribute your email for unsolicited third-party marketing.</p>
          </section>

          {/* Section 7 & 8 */}
          <section className="policy-section">
            <h2>7. Cookies &amp; Analytics</h2>
            <p>
              Our website may utilize standard session cookies and performance telemetry to improve navigation,
              remember interface preferences, and monitor loading speeds across different regions.
            </p>
            <p>
              We use analytics tools to observe aggregate visitor traffic patterns (such as popular case
              studies or frequently accessed guides). You can disable cookies at any time via your browser settings,
              though certain dynamic interactive features may experience minor layout delays as a result.
            </p>
          </section>

          {/* Section 9 */}
          <section className="policy-section">
            <h2>8. Advertising &amp; Marketing Platforms</h2>
            <p>
              Where AMFlix runs campaigns on networks such as Meta Ads or Google Ads, these platforms may set
              tracking pixels or cookies subject to their independent privacy standards.
            </p>
            <p>
              We monitor campaign conversions, engagement rates, and custom audience cohorts purely to assess
              the efficiency of our own advertising spend.
            </p>
          </section>

          {/* Section 10 & 11 */}
          <section className="policy-section">
            <h2>9. Data Sharing &amp; Payment Processing</h2>
            <p>
              <strong>AMFlix does not sell personal information.</strong> We only share information with trusted
              sub-processors when strictly required to run our daily operations:
            </p>
            <ul className="policy-list">
              <li>Cloud hosting, server environments, and database storage providers</li>
              <li>Email service providers and internal CRM/lead tracking utilities</li>
              <li>Authorised payment processors (e.g., Razorpay, Stripe, or direct NEFT/UPI banking rails)</li>
              <li>Legal advisors or regulatory authorities when formally required by law</li>
            </ul>
            <p>
              AMFlix does not process, store, or hold raw payment card or CVV details on its own servers. All
              financial transactions are handled directly by PCI-DSS certified gateway providers.
            </p>
          </section>

          {/* Section 12 & 13 */}
          <section className="policy-section">
            <h2>10. Data Security &amp; Retention</h2>
            <p>
              We implement industry-standard administrative, technical, and physical precautions to safeguard
              your data against unauthorized modification, loss, or access. However, no internet transmission or
              digital storage vault can be guaranteed to be 100% impenetrable.
            </p>
            <p>
              We retain personal client records only as long as necessary to fulfill the service scope, honor
              ongoing warranties, settle administrative taxes, and resolve contractual obligations.
            </p>
          </section>

          {/* Section 14 */}
          <section className="policy-section">
            <h2>11. Your Privacy Rights</h2>
            <p>Under applicable Indian and international privacy regulations, you are entitled to:</p>
            <ul className="policy-list">
              <li>Request verification and access to the personal data we hold about you</li>
              <li>Request immediate corrections to outdated or incomplete details</li>
              <li>Request the erasure of your personal data where retention is no longer mandatory</li>
              <li>Withdraw consent previously provided for communication or data processing</li>
            </ul>
            <p>
              To exercise any of these privileges, email us directly at{' '}
              <a href="mailto:amflixdigitalstudio@gmail.com" className="policy-inline-link">
                amflixdigitalstudio@gmail.com
              </a>.
            </p>
          </section>

          {/* Section 15, 16, 17, 18 */}
          <section className="policy-section">
            <h2>12. Additional Provisions</h2>
            <p>
              <strong>Third-Party Websites:</strong> Our site contains links to external portfolios, case studies,
              and partner tools. We bear no liability for the content or privacy standards maintained by those third-party sites.
            </p>
            <p>
              <strong>Children’s Information:</strong> Our services are structured for commercial businesses and
              professionals. We do not deliberately solicit or gather details from minors.
            </p>
            <p>
              <strong>International Operations:</strong> If you engage AMFlix from outside India, your information
              will be routed and processed across secure infrastructure in accordance with this policy.
            </p>
            <p>
              <strong>Policy Revisions:</strong> We reserve the right to revise this policy to mirror changes in our
              operations or legal requirements. Updated versions will always be timestamped at the top of this document.
            </p>
          </section>

          {/* Section 19: Contact Block */}
          <section className="policy-contact-box">
            <span className="contact-box-label">Have a Privacy Question?</span>
            <h3>Connect with our Privacy Representative</h3>
            <p>
              If you have queries regarding this Privacy Policy or how AMFlix handles project information,
              our team is accessible via verified channels:
            </p>
            
            <div className="policy-contact-links">
              <a href="mailto:amflixdigitalstudio@gmail.com" className="policy-channel-chip">
                <Mail className="w-4 h-4 text-terracotta" />
                <span>amflixdigitalstudio@gmail.com</span>
              </a>
              <a href="tel:+916361484770" className="policy-channel-chip">
                <Phone className="w-4 h-4 text-terracotta" />
                <span>+91 6361484770</span>
              </a>
              <a href="https://wa.me/918050393869" target="_blank" rel="noopener noreferrer" className="policy-channel-chip">
                <MessageCircle className="w-4 h-4 text-terracotta" />
                <span>+91 8050393869</span>
              </a>
              <div className="policy-channel-chip static">
                <MapPin className="w-4 h-4 text-terracotta" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>

            <div className="policy-box-cta">
              <Link to="/contact" className="policy-cta-btn">
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