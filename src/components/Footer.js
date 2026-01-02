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
          <a href="/" title="Home - Infodra Technologies Digital Solutions">Home</a>
          <a href="/services" title="Technology Services & Solutions">Services</a>
          <a href="/about" title="About Infodra Technologies">About Us</a>
          <a href="/digital-solutions" title="Digital Transformation Solutions">Digital Solutions</a>
          <a href="/contact" title="Contact Us for IT Consulting">Contact Us</a>
        </nav>
        <div className="footer-info">
          <p>&copy; 2025 Infodra Technologies Private Limited. All rights reserved.</p>
          <p className="footer-description">
            Leading provider of digital transformation services, custom software development, and enterprise technology solutions 
            serving startups, SMEs, and Fortune 500 companies worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
