import React from 'react';
import { FaRocket, FaLightbulb, FaCogs, FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" role="banner">
      <div className="hero-background-animation">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
      <div className="hero-container">
        <div className="hero-badge animate-fade-in">
          <FaRocket className="badge-icon" />
          <span className="colorful-text">Infodra Technologies</span>
        </div>
        <h1 className="hero-title animate-slide-up">Digital Solutions & Transformation Services</h1>
        <h2 className="hero-subtitle animate-slide-up delay-1">Transforming Businesses with Cutting-Edge Technology & Innovation</h2>
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-description">
              At <strong>Infodra Technologies Private Limited</strong>, we deliver innovative <strong>digital transformation solutions</strong>
              {' '}that empower both <strong>global enterprises</strong> and emerging <strong>startups</strong>. From <strong>AI-driven systems</strong> and 
              <strong> machine learning solutions</strong> to custom <strong>website development</strong>, <strong>mobile app development</strong>, 
              <strong> cloud computing</strong>, and <strong>workflow automation</strong>, we help businesses of every scale grow
              smarter and faster — all within a reasonable and transparent price range. Our comprehensive services include 
              <strong> React development</strong>, <strong>eCommerce platforms</strong>, <strong>CRM integration</strong>, <strong>ERP solutions</strong>, 
              and <strong>digital marketing strategies</strong>.
            </p>
          </div>
        </div>
        
        <div className="hero-features">
          <div className="feature-item animate-fade-in delay-2">
            <FaLightbulb className="feature-icon" />
            <span>Innovation</span>
          </div>
          <div className="feature-item animate-fade-in delay-3">
            <FaCogs className="feature-icon" />
            <span>Automation</span>
          </div>
          <div className="feature-item animate-fade-in delay-4">
            <FaRocket className="feature-icon" />
            <span>Scalability</span>
          </div>
        </div>

        <div className="scroll-indicator animate-bounce">
          <FaArrowDown />
        </div>

        <div className="quote-sections">
          <div className="quote-card animate-fade-in delay-5">
            <p className="quote-text">
              "We blend <strong>engineering precision</strong> with <strong>digital innovation</strong> and <strong>software development expertise</strong>
              {' '}to build smarter, more connected businesses through <strong>agile methodologies</strong> and <strong>scalable architecture</strong>."
            </p>
          </div>
          
          <div className="quote-card animate-fade-in delay-6">
            <p className="quote-text">
              "From <strong>startups to global enterprises</strong>, we deliver comprehensive <strong>digital solutions</strong>
              {' '}that power <strong>innovation</strong>, <strong>operational efficiency</strong>, and <strong>business growth</strong> through 
              <strong> DevOps practices</strong> and <strong>cloud-native technologies</strong>."
            </p>
          </div>
          
          <div className="quote-card animate-fade-in delay-7">
            <p className="quote-text">
              "At Infodra Technologies, we combine <strong>artificial intelligence</strong>, <strong>UX/UI design</strong>,
              {' '}and <strong>full-stack development</strong> to transform ideas into scalable <strong>digital realities</strong> using modern 
              <strong> frameworks</strong> and <strong>best practices</strong>."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
