import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-links-footer">
            <a href="https://www.linkedin.com/in/il-cheul-yang-6a03b6373/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedinIn />
            </a>
          </div>
          
          <div className="company-info">
            <p className="company-details">
              Graceway Co., Ltd. | Representative: Ilcheul Yang | Business Registration Number: 573-87-03302 | Address: 4th Floor, 40, Dongil-ro 60-gil, Gwangjin-gu, Seoul, Republic of Korea | Phone: +86 150-0055-1309 | Email: gracewayhelp16@gmail.com
            </p>
            <p className="spam-policy">
              Graceway strictly prohibits the sending of spam emails. Any suspicious activity may result in service suspension or access being blocked.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 