import React, { useState, useEffect } from 'react';
import { FaTimes, FaCalculator, FaChartLine, FaClock, FaGem, FaDownload, FaEnvelope } from 'react-icons/fa';
import './PricingModal.css';

const PricingModal = ({ isOpen, onClose, serviceTitle }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: '',
    companySize: '',
    projectScope: [],
    timeline: '',
    monthlyOperationalCost: '',
    usersOrLocations: '',
    contactName: '',
    contactEmail: '',
    contactPhone: ''
  });
  const [results, setResults] = useState(null);

  // Industry data with base costs (in Lakhs INR) and efficiency gains
  const industryData = {
    automotive: {
      name: 'Automotive',
      icon: '🚗',
      baseCost: 25,
      efficiencyGain: 0.35,
      savingsMultiplier: 2.8,
      benefits: ['30-45% manufacturing efficiency', '40-60% downtime reduction', '25-35% faster delivery']
    },
    ecommerce: {
      name: 'E-Commerce & Retail',
      icon: '🛒',
      baseCost: 15,
      efficiencyGain: 0.45,
      savingsMultiplier: 3.5,
      benefits: ['45-80% conversion increase', '30-50% cart recovery', '40-60% cost reduction']
    },
    healthcare: {
      name: 'Healthcare & Pharmaceuticals',
      icon: '🏥',
      baseCost: 30,
      efficiencyGain: 0.40,
      savingsMultiplier: 2.5,
      benefits: ['50-70% faster workflows', '35-50% admin cost reduction', '40-60% error reduction']
    },
    manufacturing: {
      name: 'Manufacturing & Industrial',
      icon: '🏭',
      baseCost: 20,
      efficiencyGain: 0.42,
      savingsMultiplier: 3.0,
      benefits: ['35-55% output increase', '50-70% downtime reduction', '30-45% inventory reduction']
    },
    financial: {
      name: 'Financial Services & Banking',
      icon: '💰',
      baseCost: 35,
      efficiencyGain: 0.55,
      savingsMultiplier: 4.5,
      benefits: ['60-80% processing cost reduction', '70-85% fraud reduction', '55-75% faster onboarding']
    },
    logistics: {
      name: 'Logistics & Supply Chain',
      icon: '📦',
      baseCost: 18,
      efficiencyGain: 0.38,
      savingsMultiplier: 3.2,
      benefits: ['25-40% fuel savings', '45-65% warehouse efficiency', '30-45% inventory reduction']
    },
    education: {
      name: 'Education & EdTech',
      icon: '🎓',
      baseCost: 12,
      efficiencyGain: 0.35,
      savingsMultiplier: 2.8,
      benefits: ['40-60% admin cost reduction', '100-300% capacity increase', '50-70% infrastructure savings']
    },
    hospitality: {
      name: 'Hospitality & Tourism',
      icon: '🏨',
      baseCost: 15,
      efficiencyGain: 0.42,
      savingsMultiplier: 3.5,
      benefits: ['25-40% occupancy increase', '30-50% revenue per room', '35-50% cost reduction']
    }
  };

  const projectScopeOptions = [
    { id: 'web_mobile', label: 'Web/Mobile Development', multiplier: 1.0 },
    { id: 'ai_ml', label: 'AI/ML Integration', multiplier: 1.5 },
    { id: 'cloud', label: 'Cloud Migration', multiplier: 1.3 },
    { id: 'automation', label: 'Workflow Automation', multiplier: 1.2 },
    { id: 'analytics', label: 'Data Analytics', multiplier: 1.4 },
    { id: 'iot', label: 'IoT Integration', multiplier: 1.6 }
  ];

  const sizeMultipliers = {
    startup: { multiplier: 1.0, label: 'Startup (1-50 employees)' },
    sme: { multiplier: 1.8, label: 'SME (51-500 employees)' },
    enterprise: { multiplier: 3.5, label: 'Enterprise (500+ employees)' }
  };

  const timelineMultipliers = {
    urgent: { multiplier: 1.3, label: 'Urgent (1-3 months)' },
    standard: { multiplier: 1.0, label: 'Standard (3-6 months)' },
    strategic: { multiplier: 0.85, label: 'Strategic (6-12 months)' }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        projectScope: checked 
          ? [...prev.projectScope, value]
          : prev.projectScope.filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const calculateInvestment = () => {
    if (!formData.industry || !formData.companySize || !formData.timeline || formData.projectScope.length === 0) {
      alert('Please fill in all required fields');
      return;
    }

    const industry = industryData[formData.industry];
    const baseCost = industry.baseCost;
    
    // Calculate scope multiplier
    const scopeMultiplier = formData.projectScope.reduce((acc, scopeId) => {
      const scope = projectScopeOptions.find(s => s.id === scopeId);
      return acc + scope.multiplier;
    }, 0);
    
    // Calculate investment
    const investment = baseCost * 
                      sizeMultipliers[formData.companySize].multiplier * 
                      scopeMultiplier * 
                      timelineMultipliers[formData.timeline].multiplier;
    
    const investmentLow = Math.round(investment);
    const investmentHigh = Math.round(investment * 1.35);
    
    // Calculate savings if operational cost provided
    let annualSavings = 0;
    let threeYearSavings = 0;
    let roi = 0;
    let paybackMonths = 0;
    
    if (formData.monthlyOperationalCost && formData.monthlyOperationalCost > 0) {
      const monthlyCost = parseFloat(formData.monthlyOperationalCost);
      annualSavings = Math.round(monthlyCost * 12 * industry.efficiencyGain);
      threeYearSavings = annualSavings * 3;
      roi = Math.round((threeYearSavings / investment) * 100);
      paybackMonths = Math.round(investment / (annualSavings / 12));
    } else {
      // Use industry average if not provided
      annualSavings = Math.round(investment * industry.savingsMultiplier);
      threeYearSavings = annualSavings * 3;
      roi = Math.round((threeYearSavings / investment) * 100);
      paybackMonths = Math.round(investment / (annualSavings / 12));
    }

    setResults({
      investmentLow,
      investmentHigh,
      annualSavings,
      threeYearSavings,
      roi,
      paybackMonths,
      efficiencyGain: Math.round(industry.efficiencyGain * 100),
      benefits: industry.benefits
    });
    
    setStep(3);
  };

  const formatCurrency = (amount) => {
    if (amount >= 100) {
      return `₹${(amount / 100).toFixed(2)}Cr`;
    }
    return `₹${amount}L`;
  };

  const downloadPDF = () => {
    alert('PDF download functionality will be implemented. Results will be formatted as a professional proposal document.');
  };

  const emailResults = () => {
    const subject = encodeURIComponent(`Investment & ROI Analysis - ${industryData[formData.industry].name}`);
    const body = encodeURIComponent(
      `Hello ${formData.contactName},\n\n` +
      `Thank you for using our Investment & ROI Calculator!\n\n` +
      `Your Personalized Analysis:\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `Industry: ${industryData[formData.industry].name}\n` +
      `Company Size: ${sizeMultipliers[formData.companySize].label}\n` +
      `Timeline: ${timelineMultipliers[formData.timeline].label}\n\n` +
      `💰 Estimated Investment: ${formatCurrency(results.investmentLow)} - ${formatCurrency(results.investmentHigh)}\n` +
      `📈 Annual Savings: ${formatCurrency(results.annualSavings)}/year\n` +
      `⏱️ ROI Timeline: Payback in ${results.paybackMonths} months\n` +
      `💎 3-Year Value: ${formatCurrency(results.threeYearSavings)} (${results.roi}% ROI)\n\n` +
      `Key Benefits:\n${results.benefits.map(b => `✓ ${b}`).join('\n')}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `Ready to transform your business?\n\n` +
      `📞 Call us: +91 98840 53540\n` +
      `📧 Email: business@infodratechnologies.com\n\n` +
      `Schedule your free consultation today!\n\n` +
      `Best regards,\n` +
      `InfoDra Technologies Team`
    );
    
    // Send to user
    window.open(`mailto:${formData.contactEmail}?subject=${subject}&body=${body}`, '_blank');
    
    // Also notify business
    const businessSubject = encodeURIComponent(`New Lead - ${industryData[formData.industry].name} - ${formData.contactName}`);
    const businessBody = encodeURIComponent(
      `New Lead from Investment Calculator!\n\n` +
      `Contact Information:\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `Name: ${formData.contactName}\n` +
      `Email: ${formData.contactEmail}\n` +
      `Phone: ${formData.contactPhone || 'Not provided'}\n\n` +
      `Project Details:\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `Industry: ${industryData[formData.industry].name}\n` +
      `Company Size: ${sizeMultipliers[formData.companySize].label}\n` +
      `Timeline: ${timelineMultipliers[formData.timeline].label}\n` +
      `Scope: ${formData.projectScope.map(id => projectScopeOptions.find(s => s.id === id).label).join(', ')}\n` +
      `Monthly Operational Cost: ${formData.monthlyOperationalCost ? '₹' + formData.monthlyOperationalCost + 'L' : 'Not provided'}\n` +
      `Users/Locations: ${formData.usersOrLocations || 'Not provided'}\n\n` +
      `Calculated Results:\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `Investment: ${formatCurrency(results.investmentLow)} - ${formatCurrency(results.investmentHigh)}\n` +
      `Annual Savings: ${formatCurrency(results.annualSavings)}/year\n` +
      `Payback: ${results.paybackMonths} months\n` +
      `3-Year ROI: ${results.roi}%\n` +
      `3-Year Value: ${formatCurrency(results.threeYearSavings)}\n\n` +
      `Follow up with this lead!`
    );
    
    setTimeout(() => {
      window.open(`mailto:business@infodratechnologies.com?subject=${businessSubject}&body=${businessBody}`, '_blank');
    }, 500);
  };

  const resetCalculator = () => {
    setFormData({
      industry: '',
      companySize: '',
      projectScope: [],
      timeline: '',
      monthlyOperationalCost: '',
      usersOrLocations: '',
      contactName: '',
      contactEmail: '',
      contactPhone: ''
    });
    setResults(null);
    setStep(1);
  };

  if (!isOpen) return null;

  return (
    <div className="pricing-modal-overlay" onClick={onClose}>
      <div className="pricing-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="pricing-modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="pricing-modal-header">
          <FaCalculator className="header-icon" />
          <h2>Investment & ROI Calculator</h2>
          <p>Discover your potential investment and savings with {serviceTitle}</p>
        </div>

        <div className="pricing-modal-steps">
          <div className={`step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
            <span className="step-number">1</span>
            <span className="step-label">Industry & Scope</span>
          </div>
          <div className={`step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
            <span className="step-number">2</span>
            <span className="step-label">Business Details</span>
          </div>
          <div className={`step ${step >= 3 ? 'active' : ''}`}>
            <span className="step-number">3</span>
            <span className="step-label">Results</span>
          </div>
        </div>

        <div className="pricing-modal-body">
          {step === 1 && (
            <div className="form-step">
              <h3>Select Your Industry</h3>
              <div className="industry-grid">
                {Object.entries(industryData).map(([key, data]) => (
                  <div
                    key={key}
                    className={`industry-card ${formData.industry === key ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, industry: key })}
                  >
                    <span className="industry-icon">{data.icon}</span>
                    <span className="industry-name">{data.name}</span>
                  </div>
                ))}
              </div>

              {formData.industry && (
                <>
                  <h3>Project Scope (Select all that apply)</h3>
                  <div className="scope-checkboxes">
                    {projectScopeOptions.map(scope => (
                      <label key={scope.id} className="checkbox-label">
                        <input
                          type="checkbox"
                          value={scope.id}
                          checked={formData.projectScope.includes(scope.id)}
                          onChange={handleInputChange}
                        />
                        <span>{scope.label}</span>
                      </label>
                    ))}
                  </div>

                  <h3>Company Size</h3>
                  <div className="radio-group">
                    {Object.entries(sizeMultipliers).map(([key, data]) => (
                      <label key={key} className="radio-label">
                        <input
                          type="radio"
                          name="companySize"
                          value={key}
                          checked={formData.companySize === key}
                          onChange={handleInputChange}
                        />
                        <span>{data.label}</span>
                      </label>
                    ))}
                  </div>

                  <h3>Timeline</h3>
                  <div className="radio-group">
                    {Object.entries(timelineMultipliers).map(([key, data]) => (
                      <label key={key} className="radio-label">
                        <input
                          type="radio"
                          name="timeline"
                          value={key}
                          checked={formData.timeline === key}
                          onChange={handleInputChange}
                        />
                        <span>{data.label}</span>
                      </label>
                    ))}
                  </div>

                  <button 
                    className="btn-next"
                    onClick={() => {
                      if (formData.companySize && formData.timeline && formData.projectScope.length > 0) {
                        setStep(2);
                      } else {
                        alert('Please complete all selections');
                      }
                    }}
                  >
                    Continue to Business Details
                  </button>
                </>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="form-step">
              <h3>Business & Contact Information</h3>
              <p className="step-description">Help us provide more accurate savings estimates</p>

              <div className="form-group">
                <label>Current Monthly Operational Cost (₹ Lakhs) *Optional</label>
                <input
                  type="number"
                  name="monthlyOperationalCost"
                  placeholder="e.g., 25"
                  value={formData.monthlyOperationalCost}
                  onChange={handleInputChange}
                  className="form-input"
                />
                <small>This helps calculate more accurate ROI. Leave blank for industry average.</small>
              </div>

              <div className="form-group">
                <label>Number of Users/Locations</label>
                <input
                  type="number"
                  name="usersOrLocations"
                  placeholder="e.g., 100"
                  value={formData.usersOrLocations}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  name="contactName"
                  placeholder="Full Name"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="contactEmail"
                  placeholder="your@email.com"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="contactPhone"
                  placeholder="+91 98765 43210"
                  value={formData.contactPhone}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-actions">
                <button className="btn-back" onClick={() => setStep(1)}>
                  Back
                </button>
                <button 
                  className="btn-calculate"
                  onClick={calculateInvestment}
                  disabled={!formData.contactName || !formData.contactEmail}
                >
                  <FaCalculator /> Calculate Investment & ROI
                </button>
              </div>
            </div>
          )}

          {step === 3 && results && (
            <div className="results-step">
              <div className="results-header">
                <h3>Your Personalized Investment Analysis</h3>
                <p>Based on {industryData[formData.industry].name} • {sizeMultipliers[formData.companySize].label}</p>
              </div>

              <div className="results-grid">
                <div className="result-card primary">
                  <div className="result-icon">💰</div>
                  <div className="result-content">
                    <h4>Estimated Project Investment</h4>
                    <div className="result-value">
                      {formatCurrency(results.investmentLow)} - {formatCurrency(results.investmentHigh)}
                    </div>
                    <p className="result-detail">Based on your selected scope and timeline</p>
                  </div>
                </div>

                <div className="result-card success">
                  <div className="result-icon"><FaChartLine /></div>
                  <div className="result-content">
                    <h4>Projected Annual Savings</h4>
                    <div className="result-value">{formatCurrency(results.annualSavings)}/year</div>
                    <p className="result-detail">{results.efficiencyGain}% operational efficiency improvement</p>
                  </div>
                </div>

                <div className="result-card info">
                  <div className="result-icon"><FaClock /></div>
                  <div className="result-content">
                    <h4>ROI Timeline</h4>
                    <div className="result-value">Payback in {results.paybackMonths} months</div>
                    <p className="result-detail">{results.roi}% return on investment over 3 years</p>
                  </div>
                </div>

                <div className="result-card highlight">
                  <div className="result-icon"><FaGem /></div>
                  <div className="result-content">
                    <h4>3-Year Value Creation</h4>
                    <div className="result-value">{formatCurrency(results.threeYearSavings)}</div>
                    <p className="result-detail">Total cumulative savings and value generated</p>
                  </div>
                </div>
              </div>

              <div className="benefits-section">
                <h4>Key Benefits You'll Achieve:</h4>
                <ul className="benefits-list">
                  {results.benefits.map((benefit, idx) => (
                    <li key={idx}>✓ {benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="cta-section">
                <h4>Ready to Transform Your Business?</h4>
                <p>Get a detailed proposal tailored to your requirements</p>
                <div className="cta-buttons">
                  <button className="btn-primary" onClick={emailResults}>
                    <FaEnvelope /> Email Me the Results
                  </button>
                  <button className="btn-secondary" onClick={downloadPDF}>
                    <FaDownload /> Download PDF Report
                  </button>
                </div>
                <button 
                  className="btn-consultation"
                  onClick={() => window.open('mailto:business@infodratechnologies.com?subject=Schedule Free Consultation&body=Hello,%0D%0A%0D%0AI would like to schedule a free consultation.%0D%0A%0D%0AName: ' + encodeURIComponent(formData.contactName) + '%0D%0APhone: ' + encodeURIComponent(formData.contactPhone || '+91 98840 53540') + '%0D%0AEmail: ' + encodeURIComponent(formData.contactEmail) + '%0D%0AIndustry: ' + encodeURIComponent(industryData[formData.industry].name) + '%0D%0A%0D%0APlease contact me to discuss the project.%0D%0A%0D%0AThank you!', '_blank')}
                >
                  Schedule Free Consultation Call
                </button>
                <div className="contact-info">
                  <p><strong>📞 Call us:</strong> +91 98840 53540</p>
                  <p><strong>📧 Email:</strong> business@infodratechnologies.com</p>
                </div>
                <button className="btn-text" onClick={resetCalculator}>
                  Calculate for Different Scenario
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingModal;
