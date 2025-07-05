import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = ({ toggleMobileMenu }) => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="nav-left">
          <LanguageSwitcher />
        </div>
        
        <div className="nav-center">
          <Link to="/" className="brand">
            <img src="graceway-logo.png" alt="Graceway Logo" className="brand-logo" />
          </Link>
        </div>
        
        <div className="nav-right">
          <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            {t('nav.home')}
          </Link>
          <Link to="/about" className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
            {t('nav.aboutMe')}
          </Link>
          <Link to="/projects" className={`nav-item ${location.pathname === '/projects' ? 'active' : ''}`}>
            {t('nav.projects')}
          </Link>
          <Link to="/contact" className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            {t('nav.contact')}
          </Link>
        </div>
        
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation; 