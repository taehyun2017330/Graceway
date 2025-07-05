import React, { useState, useEffect } from 'react';

const PageNavigation = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', label: 'Home' },
    { id: 'about', label: 'Our Current Digital Challenge' },
    { id: 'services', label: 'Solutions & Services' },
    { id: 'about-me', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector('.main-nav')?.offsetHeight || 60;
      const targetPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="page-nav">
      {sections.map((section) => (
        <button
          key={section.id}
          className={`nav-dot ${activeSection === section.id ? 'active' : ''}`}
          onClick={() => scrollToSection(section.id)}
          aria-label={`Navigate to ${section.label}`}
        >
          <span className="nav-dot-text">{section.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default PageNavigation; 