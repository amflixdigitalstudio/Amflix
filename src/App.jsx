import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Core Pages
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import CaseStudy from './pages/CaseStudy';
import Industries from './pages/Industries';
import Bangalore from './pages/Bangalore';
import Insights from './pages/Insights';
import BlogPost from './pages/BlogPost';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Separate Legal Pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

// Service Pages
import Pricing from './pages/services/Pricing';
import Branding from './pages/services/Branding';
import SocialMedia from "./pages/services/SocialMedia.jsx";
import DigitalMarketing from './pages/services/DigitalMarketing';
import WebsiteDev from './pages/services/WebsiteDev';
import MobileAppDev from './pages/services/MobileAppDev';
import DesignVideo from './pages/services/DesignVideo';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#080808] text-[#FFF8F5] flex flex-col justify-between">
        {/* Navigation Bar */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/locations/bangalore" element={<Bangalore />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<BlogPost />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />

            {/* Separate Legal Routes */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />

            {/* Service Routes */}
            <Route path="/ServicePricing" element={<Pricing />} />
            <Route path="/services/branding" element={<Branding />} />
            <Route path="/services/social-media-management" element={<SocialMedia />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/website-design-development" element={<WebsiteDev />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDev />} />
            <Route path="/services/design-video" element={<DesignVideo />} />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Desktop/Tablet Only Footer */}
        <Footer />
      </div>
    </Router>
  );
}