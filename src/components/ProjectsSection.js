import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const ProjectsSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const projects = t('projects.projects', { returnObjects: true });

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2>{t('projects.title')}</h2>
          <p className="section-subtitle">{t('projects.subtitle')}</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>
              
              <div className="project-details">
                <p className="project-description">{project.description}</p>
                
                <div className="project-metrics">
                  <div className="metric">
                    <span className="metric-label">Duration</span>
                    <span className="metric-value">{project.duration}</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Impact</span>
                    <span className="metric-value">{project.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <p>{t('projects.ctaText')}</p>
          <button 
            onClick={() => navigate('/contact')}
            className="cta-button"
          >
            {t('projects.ctaButton')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 