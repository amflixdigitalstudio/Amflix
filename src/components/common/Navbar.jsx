import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BadgePercent, 
  FolderGit2, 
  User, 
  Send, 
  X, 
  ChevronDown,
  ArrowUpRight 
} from 'lucide-react';
import { navbarData } from '../../data/Navbar';
import './Navbar.css';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [drawerServicesOpen, setDrawerServicesOpen] = useState(false);
  const location = useLocation();

  const isServicesActive = location.pathname.startsWith('/services');

  const getNavIcon = (name) => {
    switch (name) {
      case 'Home': return <Home className="w-4 h-4" />;
      case 'Pricing': return <BadgePercent className="w-4 h-4" />;
      case 'Work': return <FolderGit2 className="w-4 h-4" />;
      case 'About': return <User className="w-4 h-4" />;
      case 'Contact': return <Send className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <>
      {/* 1. DESKTOP FLOATING PILL NAVBAR (> 700px) */}
      <div className="desktop-nav-wrapper">
        <nav className="floating-nav">
          {navbarData.desktopNavLinks.map((item) => {
            if (item.hasDropdown) {
              return (
                <div 
                  key={item.name} 
                  className="dropdown-container"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <NavLink
                    to={item.path}
                    className={`nav-link-item ${isServicesActive ? 'active' : ''}`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-primary' : ''}`} />
                  </NavLink>

                  {/* 6 Services Dropdown Menu */}
                  <div className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                    {item.subServices.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="dropdown-item"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <span className="dropdown-item-title">{sub.name}</span>
                        <span className="dropdown-item-desc">{sub.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `nav-link-item ${isActive ? 'active' : ''}`
                }
              >
                {item.name}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* 2. MOBILE TOP HEADER (<= 700px) */}
      <header className="mobile-top-header">
        <Link to={navbarData.logo.path} className="mobile-logo-link">
          <img 
            src={navbarData.logo.src} 
            alt={navbarData.logo.alt} 
            className="mobile-header-logo" 
          />
        </Link>

        {/* Unique Animated Hamburger Trigger */}
        <button 
          onClick={() => setDrawerOpen(!drawerOpen)}
          className={`unique-hamburger-btn ${drawerOpen ? 'open' : ''}`}
          aria-label="Toggle All Pages Menu"
        >
          <span className="hamburger-line line-1"></span>
          <span className="hamburger-line line-2"></span>
          <span className="hamburger-line line-3"></span>
        </button>
      </header>

      {/* 3. MOBILE BOTTOM DOCK (<= 700px) */}
      <nav className="mobile-bottom-nav">
        {navbarData.mobileBottomLinks.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => 
              `mobile-nav-item ${isActive ? 'active' : ''}`
            }
          >
            {getNavIcon(item.name)}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* 4. SLIDE-OUT DRAWER OVERLAY & MENU */}
      <div 
        className={`mobile-drawer-overlay ${drawerOpen ? 'active' : ''}`}
        onClick={() => setDrawerOpen(false)}
      />

      <aside className={`mobile-drawer ${drawerOpen ? 'active' : ''}`}>
        <div>
          {/* Drawer Header */}
          <div className="drawer-header">
            <Link 
              to="/" 
              onClick={() => setDrawerOpen(false)}
              className="drawer-logo-link"
            >
              <img 
                src={navbarData.logo.src} 
                alt={navbarData.logo.alt} 
                className="drawer-header-logo" 
              />
            </Link>
            <button 
              className="drawer-close-btn" 
              onClick={() => setDrawerOpen(false)}
              aria-label="Close Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Clean Flat Navigation List */}
          <div className="drawer-links-container">
            {/* Top Main Pages */}
            {navbarData.drawerMenu.topPages.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setDrawerOpen(false)}
                className={({ isActive }) => 
                  `drawer-link ${isActive ? 'active font-bold' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="drawer-divider" />

            {/* Services with Toggle & Indented Sub-Services */}
            <div>
              <div className="drawer-services-toggle">
                <NavLink
                  to={navbarData.drawerMenu.servicesMain.path}
                  onClick={() => setDrawerOpen(false)}
                  className={({ isActive }) => 
                    `drawer-link ${isActive ? 'active font-bold' : ''}`
                  }
                  style={{ flexGrow: 1 }}
                >
                  {navbarData.drawerMenu.servicesMain.name}
                </NavLink>
                <button
                  type="button"
                  onClick={() => setDrawerServicesOpen(!drawerServicesOpen)}
                  className="p-2 text-primary focus:outline-none"
                  aria-label="Toggle subservices"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${drawerServicesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* 1 Tab Space Indented Sub-Services */}
              {drawerServicesOpen && (
                <div className="drawer-subservices-list">
                  {navbarData.drawerMenu.subServices.map((sub) => (
                    <NavLink
                      key={sub.name}
                      to={sub.path}
                      onClick={() => setDrawerOpen(false)}
                      className={({ isActive }) => 
                        `drawer-sub-link ${isActive ? 'active font-semibold' : ''}`
                      }
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <div className="drawer-divider" />

            {/* Separate Legal Pages */}
            {navbarData.drawerMenu.legalPages.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setDrawerOpen(false)}
                className={({ isActive }) => 
                  `drawer-link ${isActive ? 'active font-bold' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Drawer Bottom CTA */}
        <div className="pt-4 border-t border-surface">
          <Link
            to={navbarData.cta.path}
            onClick={() => setDrawerOpen(false)}
            className="drawer-cta-btn"
          >
            {navbarData.cta.text}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </aside>
    </>
  );
}