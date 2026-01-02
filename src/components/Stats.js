import React from 'react';
import { FaUsers, FaProjectDiagram, FaGlobeAmericas, FaTrophy } from 'react-icons/fa';
import './Stats.css';

const Stats = () => {
  const stats = [
    {
      id: 1,
      icon: <FaUsers />,
      number: "500+",
      label: "Happy Clients",
      description: "Trusted by businesses worldwide"
    },
    {
      id: 2,
      icon: <FaProjectDiagram />,
      number: "1000+",
      label: "Projects Delivered",
      description: "Successfully completed solutions"
    },
    {
      id: 3,
      icon: <FaGlobeAmericas />,
      number: "50+",
      label: "Countries Served",
      description: "Global digital presence"
    },
    {
      id: 4,
      icon: <FaTrophy />,
      number: "98%",
      label: "Client Satisfaction",
      description: "Excellence in service delivery"
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={stat.id} className={`stat-card animate-stat delay-${index}`}>
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-number" data-target={stat.number}>
                {stat.number}
              </div>
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
