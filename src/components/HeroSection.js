import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const heroImageRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroImage = heroImageRef.current;
      
      if (heroImage) {
        // Create parallax effect - move image slower than scroll
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dark overlay style to reduce brightness
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.2)', // Dark overlay to reduce brightness
    zIndex: 1
  };

  return (
    <section id="intro" className="hero-section">
      <div className="hero-background">
        <img 
          ref={heroImageRef}
          src="/background.jpg" 
          alt="Retail Business Transformation" 
          className="hero-image" 
        />
        <div className="hero-overlay" style={overlayStyle}></div>
      </div>
      <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container">
          <h1 className="hero-title">{t('hero.title')}</h1>
          <h3 className="hero-subtitle">{t('hero.subtitle')}</h3>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;