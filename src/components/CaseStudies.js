import React from 'react';
import { FaCheckCircle, FaRocket, FaChartLine, FaAward } from 'react-icons/fa';
import './CaseStudies.css';

const CaseStudies = () => {
  const cases = [
    {
      id: 1,
      icon: <FaRocket />,
      company: "TechStart Inc.",
      industry: "SaaS Platform",
      title: "400% Growth in User Acquisition",
      description: "Developed a scalable cloud-native platform using React and AWS, implementing microservices architecture that handled 10M+ monthly active users.",
      technologies: ["React", "Node.js", "AWS", "MongoDB"],
      results: ["400% user growth", "99.9% uptime", "50% cost reduction"]
    },
    {
      id: 2,
      icon: <FaChartLine />,
      company: "Global Retail Corp",
      industry: "E-Commerce",
      title: "3x Revenue Through Digital Transformation",
      description: "Built an omnichannel eCommerce platform with AI-powered recommendations, mobile apps, and real-time inventory management across 500+ stores.",
      technologies: ["React Native", "AI/ML", "Kubernetes", "PostgreSQL"],
      results: ["3x revenue increase", "2M+ app downloads", "85% customer retention"]
    },
    {
      id: 3,
      icon: <FaAward />,
      company: "HealthTech Solutions",
      industry: "Healthcare",
      title: "HIPAA-Compliant Patient Management System",
      description: "Created secure healthcare platform with telemedicine, EHR integration, and AI-driven diagnostics serving 100K+ patients.",
      technologies: ["Angular", "Python", "Azure", "FHIR API"],
      results: ["100K+ patients", "HIPAA certified", "40% efficiency gain"]
    }
  ];

  return (
    <section className="case-studies">
      <div className="case-studies-container">
        <div className="section-header">
          <span className="section-badge">Success Stories</span>
          <h2 className="section-title">Transforming Businesses Worldwide</h2>
          <p className="section-description">
            Real results from companies that trusted us with their digital transformation journey
          </p>
        </div>

        <div className="cases-grid">
          {cases.map((caseStudy, index) => (
            <div key={caseStudy.id} className={`case-card animate-fade-in delay-${index}`}>
              <div className="case-icon-wrapper">
                {caseStudy.icon}
              </div>
              <div className="case-header">
                <span className="case-industry">{caseStudy.industry}</span>
                <h3 className="case-company">{caseStudy.company}</h3>
              </div>
              <h4 className="case-title">{caseStudy.title}</h4>
              <p className="case-description">{caseStudy.description}</p>
              
              <div className="case-technologies">
                {caseStudy.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="case-results">
                {caseStudy.results.map((result, idx) => (
                  <div key={idx} className="result-item">
                    <FaCheckCircle className="check-icon" />
                    <span>{result}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
