import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const SolutionsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const { t } = useTranslation();

  const solutions = t('challenge.solutions', { returnObjects: true });
  const whyGracewayPoints = t('challenge.whyGracewayPoints', { returnObjects: true });

  // Custom styles to reduce gap and font size
  const listItemStyle = {
    padding: '8px 0', // Further reduced from 12px
    fontSize: '1rem',
    lineHeight: '1.4',
    letterSpacing: '-0.2px',
    wordSpacing: '-1px',
    fontWeight: '400'
  };

  const titleStyle = {
    fontSize: '1.8rem',
    marginBottom: '0.5rem', // Reduced from 1rem
    marginTop: '0.5rem', // Add small top margin
    letterSpacing: '-0.3px',
    color: '#ffffff', // Ensure white color
    fontWeight: '600', // Make it slightly bolder
    textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)', // Add subtle shadow for better contrast
    lineHeight: '1.2' // Tighter line height for titles
  };

  const sectionStyle = {
    padding: '40px 0', // Reduced from 100px
    height: 'auto',
    position: 'relative',
    color: 'white'
  };

  const columnStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem', // Reduced from 4rem
    padding: '1rem 0', // Reduced from 2rem
    textAlign: 'left'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.4)', // Darker overlay
    zIndex: 1 // Changed from -1 to 1 to ensure it's above the image
  };

  return (
    <section id="services" className="solutions-section" style={sectionStyle}>
      <div className="solutions-background">
        <img 
          src="/background2.jpg" 
          alt="Retail Solutions" 
          className="solutions-image" 
        />
        <div style={overlayStyle}></div>
      </div>
      <div className="solutions-content" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container">
          <div className={`solutions-grid ${inView ? 'animate-in' : ''}`} ref={ref}>
            <div className="solutions-column" style={columnStyle}>
              <h2 className="section-title" style={titleStyle}>{t('challenge.solutionTitle')}</h2>
              <ul className="solutions-list">
                {solutions.map((item, index) => (
                  <li key={index} style={listItemStyle}>
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>

              <h2 className="section-title" style={titleStyle}>{t('challenge.whyGracewayTitle')}</h2>
              <ul className="solutions-list">
                {whyGracewayPoints.map((item, index) => (
                  <li key={index} style={listItemStyle}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;