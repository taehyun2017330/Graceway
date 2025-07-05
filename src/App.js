import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n'; // Import i18n configuration
import './App.css';
import Navigation from './components/Navigation';
import MobileOverlay from './components/MobileOverlay';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import useScrollToTop from './hooks/useScrollToTop';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <Router basename={process.env.NODE_ENV === 'production' ? '/Graceway' : '/'}>
      <ScrollToTop />
      <div className="App">
        <MobileOverlay isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
        <Navigation toggleMobileMenu={toggleMobileMenu} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
