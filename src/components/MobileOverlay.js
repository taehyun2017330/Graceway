import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const MobileOverlay = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className={`mobile-overlay ${isOpen ? 'active' : ''}`}>
      <div className="mobile-overlay-content">
        <button className="mobile-close" onClick={onClose}>
          <span>×</span>
        </button>
        <nav className="mobile-nav">
          <div className="mobile-language-switcher">
            <LanguageSwitcher />
          </div>
          <Link to="/" className={`mobile-nav-item ${location.pathname === '/' ? 'active' : ''}`} onClick={onClose}>
            {t('nav.home')}
          </Link>
          <Link to="/about" className={`mobile-nav-item ${location.pathname === '/about' ? 'active' : ''}`} onClick={onClose}>
            {t('nav.aboutMe')}
          </Link>
          <Link to="/projects" className={`mobile-nav-item ${location.pathname === '/projects' ? 'active' : ''}`} onClick={onClose}>
            {t('nav.projects')}
          </Link>
          <Link to="/contact" className={`mobile-nav-item ${location.pathname === '/contact' ? 'active' : ''}`} onClick={onClose}>
            {t('nav.contact')}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileOverlay; 