import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const ChallengeSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const { t } = useTranslation();

  const challenges = t('challenge.opportunityContent', { returnObjects: true });
  const emphasizedMessage = t('challenge.emphasizedMessage');

  return (
    <section id="about" className="challenge-section">
      <div className="container">
        <div className={`section-content ${inView ? 'animate-in' : ''}`} ref={ref}>
          <h2 className="section-title">{t('challenge.title')}</h2>
          <div className="text-content">
            <p>{t('challenge.challengeText1')}</p>
          </div>

          <h2 className="section-title">{t('challenge.opportunityTitle')}</h2>
          <ul className="text-content">
            {challenges.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>

          <p className="emphasized-message">{emphasizedMessage}</p>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
