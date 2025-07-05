import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_ra7kstj'; // Your EmailJS service ID
  const EMAILJS_TEMPLATE_ID = 'template_404ro7l'; // Your EmailJS template ID
  const EMAILJS_PUBLIC_KEY = 'IAwYOJ7xnfXl0ItHl'; // Replace with your EmailJS public key

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          to_email: 'your-naver-email@naver.com', // Your Naver email
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);
      alert(t('contact.thankYouMessage'));
      
      // Reset form
      setFormData({ name: '', email: '', company: '', message: '' });
      
    } catch (error) {
      console.error('Email send failed:', error);
      alert(t('contact.errorMessage') || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h4>{t('contact.email')}</h4>
              <p>{t('contact.emailValue')}</p>
            </div>
            
            <div className="contact-item">
              <h4>{t('contact.wechat')}</h4>
              <p>{t('contact.wechatValue')}</p>
            </div>
            
            <div className="contact-item">
              <h4>{t('contact.location')}</h4>
              <p>{t('contact.locationValue')}<br />
              {t('contact.locationSubValue')}</p>
            </div>
            
            <div className="contact-item">
              <h4>{t('contact.consultingAreas')}</h4>
              <ul>
                {t('contact.consultingAreasList', { returnObjects: true }).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>{t('contact.formTitle')}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('contact.name')} *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">{t('contact.emailField')} *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">{t('contact.company')}</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">{t('contact.message')} *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  required
                  disabled={isSubmitting}
                  placeholder={t('contact.messagePlaceholder')}
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? t('contact.sending') || 'Sending...' : t('contact.submitButton')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;