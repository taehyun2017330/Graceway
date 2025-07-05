import ReactGA from 'react-ga4';

// Track custom events
export const trackEvent = (category, action, label = null, value = null) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

// Track page views
export const trackPageView = (page) => {
  ReactGA.send({ hitType: 'pageview', page });
};

// Track button clicks
export const trackButtonClick = (buttonName, page = window.location.pathname) => {
  trackEvent('Button Click', buttonName, page);
};

// Track form submissions
export const trackFormSubmission = (formName, page = window.location.pathname) => {
  trackEvent('Form Submission', formName, page);
};

// Track external link clicks
export const trackExternalLink = (linkUrl, linkText, page = window.location.pathname) => {
  trackEvent('External Link', linkText, `${page} -> ${linkUrl}`);
};

// Track scroll depth
export const trackScrollDepth = (depth) => {
  trackEvent('Scroll Depth', 'Page Scroll', `${depth}%`);
};

// Track language changes
export const trackLanguageChange = (language) => {
  trackEvent('Language Change', 'Language Switched', language);
}; 