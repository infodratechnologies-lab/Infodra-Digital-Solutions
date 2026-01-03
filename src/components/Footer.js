import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <h3 className="footer-tagline">
          Your Trusted Technology Partner in Digital Solutions, Software Engineering, Cloud Computing, AI Development, and IT Consulting Services
        </h3>
        <div className="footer-keywords">
          <p className="footer-services-list">
            <strong>Services:</strong> Web Development | Mobile App Development | Digital Transformation | 
            Cloud Migration | AI & Machine Learning | Workflow Automation | DevOps | API Integration | 
            Database Management | Cyber Security | Software Testing | UI/UX Design | eCommerce Solutions | 
            CRM & ERP Integration | Business Intelligence | Digital Marketing | SEO Services | 
            IT Consulting | Technical Support | Agile Development
          </p>
        </div>
        <nav className="footer-nav" aria-label="Footer Navigation">
          <a href="https://www.infodratechnologies.com" title="Home - Infodra Technologies Digital Solutions">Home</a>
        </nav>
        <div className="footer-info">
          <p>&copy; 2025 Infodra Technologies Private Limited. All rights reserved.</p>
          <p className="footer-description">
            Leading provider of digital transformation services, custom software development, and enterprise technology solutions 
            serving startups, SMEs, and Enterprise Worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
