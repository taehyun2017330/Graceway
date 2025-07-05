import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    // Replace 'G-XXXXXXXXXX' with your actual Google Analytics 4 Measurement ID
    ReactGA.initialize('G-TZP8Y7B3XQ');
    
    // Send a test event to verify GA is working
    ReactGA.event({
      category: 'App',
      action: 'App Loaded',
      label: 'Initial Load',
    });
  }, []);

  useEffect(() => {
    // Track page views when location changes
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics; 