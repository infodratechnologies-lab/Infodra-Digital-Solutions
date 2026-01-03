import React, { useState } from 'react';
import { FaCode, FaCogs, FaRobot, FaCloud, FaHeadset } from 'react-icons/fa';
import './Services.css';
import PricingModal from './PricingModal';

const Services = () => {
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handlePricingClick = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setIsPricingModalOpen(true);
  };

  const services = [
    {
      id: 1,
      icon: <FaCode />,
      title: "Web & Mobile Application Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
      description: [
        "Design and develop custom websites, eCommerce stores, and mobile applications using React, Angular, Vue.js, Node.js, and Flutter that reflect your brand identity and convert visitors into loyal customers through responsive web design and progressive web apps (PWA).",
        "Build scalable business platforms and enterprise applications for startups and established enterprises using modern frameworks, microservices architecture, RESTful APIs, GraphQL, and cloud-native technologies with full-stack development expertise and agile methodologies."
      ]
    },
    {
      id: 2,
      icon: <FaCogs />,
      title: "Workflow Automation & Business Process Management",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80",
      description: [
        "Automate repetitive business processes and seamlessly integrate tools like CRM systems (Salesforce, HubSpot), ERP platforms (SAP, Oracle), project management software (Jira, Asana), and marketing automation tools through RPA (Robotic Process Automation) and API integration.",
        "Ideal for corporate teams, SMEs, and growing businesses looking to boost operational efficiency, reduce manual effort, streamline workflows, enhance productivity, and achieve digital transformation through intelligent automation and business intelligence solutions."
      ]
    },
    {
      id: 3,
      icon: <FaRobot />,
      title: "Agentic AI Solutions & Machine Learning Services",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80",
      description: [
        "Deploy cutting-edge AI-driven virtual assistants, chatbots, conversational AI, autonomous agents, and intelligent automation systems powered by machine learning, natural language processing (NLP), deep learning, and neural networks that can manage tasks, customer queries, and business decisions intelligently.",
        "From AI-powered customer support bots and voice assistants to internal data intelligence systems, predictive analytics, computer vision, recommendation engines, and sentiment analysis, we help you adopt future-ready artificial intelligence solutions and leverage big data for competitive advantage."
      ]
    },
    {
      id: 4,
      icon: <FaCloud />,
      title: "Cloud Migration & Infrastructure Services",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop&q=80",
      description: [
        "Migrate your business infrastructure to the cloud securely with AWS (Amazon Web Services), Google Cloud Platform (GCP), Microsoft Azure, and implement cloud computing solutions including IaaS, PaaS, SaaS, containerization with Docker and Kubernetes, serverless architecture, and cloud security.",
        "Enable scalability, high availability, disaster recovery, data safety, cost optimization, and global accessibility for your digital platforms through DevOps practices, continuous integration/continuous deployment (CI/CD), infrastructure as code (IaC), and cloud-native application development."
      ]
    },
    {
      id: 5,
      icon: <FaHeadset />,
      title: "Ongoing Support & Maintenance Services",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&q=80",
      description: [
        "Continuous software updates, security patches, bug fixes, feature enhancements, 24/7 uptime monitoring, system health checks, performance optimization, load balancing, and proactive maintenance to ensure your applications run at peak efficiency.",
        "We ensure your digital assets — from websites and mobile apps to enterprise applications, databases, and cloud infrastructure — run reliably, securely, and efficiently with comprehensive technical support, SLA management, incident response, and regular quality assurance testing."
      ]
    }
  ];

  return (
    <section className="services" role="main">
      <div className="services-header">
        <h2 className="services-main-title">Our Comprehensive Digital Services</h2>
        <p className="services-subtitle">Expert technology solutions including software development, cloud computing, AI integration, and digital transformation tailored to accelerate your business growth and innovation</p>
      </div>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={service.id} className={`service-card ${index % 2 === 0 ? 'card-left' : 'card-right'}`}>
            <div className="service-image-wrapper">
              <div className="service-icon-overlay">
                <div className="service-icon-large">
                  {service.icon}
                </div>
              </div>
              <div className="service-image-container">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-image"
                />
              </div>
            </div>
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <div className="title-underline"></div>
              <ul className="service-description">
                {service.description.map((item, idx) => (
                  <li key={idx}>
                    <span className="bullet-icon">✦</span>
                    <span className="description-text">{item}</span>
                  </li>
                ))}
              </ul>
              <div 
                className="service-badge" 
                onClick={() => handlePricingClick(service.title)}
                style={{ cursor: 'pointer' }}
                title="Click to calculate investment & ROI"
              >
                Enterprise-Grade Service
              </div>
            </div>
          </div>
        ))}
      </div>

      <PricingModal 
        isOpen={isPricingModalOpen}
        onClose={() => setIsPricingModalOpen(false)}
        serviceTitle={selectedService}
      />
    </section>
  );
};

export default Services;
