import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const AboutMeSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleRecentExperienceClick = () => {
    navigate('/projects');
  };

  return (
    <section id="about-me" className="about-me-section">
      <div className="container">
        {/* Header with title and subtitle only */}
        <div className="section-header">
          <h2>{t('aboutMe.title')}</h2>
          
        </div>
        
        {/* Main content with image and text side by side */}
        <div className="about-main-content">
          <div className="about-content">
            <div className="about-text">
              <div className="about-intro">
                <h3>{t('aboutMe.name')}</h3>
                <p className="founder-title">{t('aboutMe.position')}</p>
                <p>{t('aboutMe.intro')}</p>
              </div>
              
              <div className="experience-highlights">
                <h4>{t('aboutMe.experienceTitle')}</h4>
                {t('aboutMe.experience', { returnObjects: true }).map((exp, index) => (
                  <div 
                    key={index} 
                    className={`experience-item ${index === 0 ? 'recent-experience' : ''}`}
                    onClick={index === 0 ? handleRecentExperienceClick : undefined}
                    style={index === 0 ? { cursor: 'pointer' } : {}}
                  >
                    <strong>{exp.title}</strong> - {exp.company} ({exp.period})
                    {index === 0 && <span className="click-hint"> {t('aboutMe.viewProjects')}</span>}
                  </div>
                ))}
              </div>
              
           
            </div>
          </div>
          
          <div className="about-image">
            <div className="founder-photo">
              <img
                src="ilcheul-caleb-yang.jpg"
                alt={t('aboutMe.name')}
                className="founder-photo-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback placeholder if image fails to load */}
              <div className="photo-placeholder" style={{ display: 'none' }}>
                <span>{t('aboutMe.name')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;