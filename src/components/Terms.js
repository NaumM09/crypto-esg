import React, { useState } from 'react';
import { Shield, Zap, Globe, Users, TrendingUp, ArrowRight, CheckCircle, AlertCircle, FileText, Lock, Gavel, Map, Building, Lightbulb, Target, ChevronDown, ChevronRight } from 'lucide-react';
import '../styles/Terms.css';

const HowItsPossiblePage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const regulatoryFrameworks = [
    {
      region: 'United Arab Emirates',
      status: 'Leading',
      frameworks: ['VARA Framework', 'SCA Security Tokens', 'DIFC Digital Assets Law', 'ADGM Tokenization Rules'],
      details: 'World-class comprehensive regulatory ecosystem across multiple jurisdictions. Clear frameworks for security tokens, asset tokenization, and ESG compliance. VAT exemption for crypto transactions since 2024.',
      compliance: 99
    },
    {
      region: 'United States',
      status: 'Established',
      frameworks: ['SEC Securities Framework', 'CFTC Commodities Regulation', 'FinCEN AML/KYC'],
      details: 'Security tokens regulated under existing securities laws. Clear guidance for ESG investments through SEC sustainability disclosure rules.',
      compliance: 95
    },
    {
      region: 'European Union',
      status: 'Progressive',
      frameworks: ['MiCA Regulation', 'SFDR ESG Disclosure', 'EU Taxonomy Regulation'],
      details: 'Markets in Crypto-Assets (MiCA) provides comprehensive framework. Strong ESG regulatory support through SFDR and EU Taxonomy.',
      compliance: 98
    },
    {
      region: 'African Markets',
      status: 'Emerging',
      frameworks: ['South Africa FSCA', 'Nigeria SEC Guidelines', 'Kenya CMA Framework'],
      details: 'Rapidly developing regulatory landscape. Kenya and Nigeria leading with progressive crypto and tokenization guidelines.',
      compliance: 75
    },
    {
      region: 'Asia Pacific',
      status: 'Mixed',
      frameworks: ['Singapore MAS', 'Japan FSA', 'Hong Kong SFC'],
      details: 'Singapore and Japan offer clear frameworks for security tokens. Strong support for green finance initiatives.',
      compliance: 88
    }
  ];

  const technologyStack = [
    {
      layer: 'Blockchain Infrastructure',
      technologies: ['Ethereum', 'Polygon', 'Hyperledger Fabric'],
      purpose: 'Immutable transaction records, smart contract execution, and decentralized governance',
      maturity: 'Production Ready'
    },
    {
      layer: 'Smart Contracts',
      technologies: ['Solidity', 'OpenZeppelin', 'Chainlink Oracles'],
      purpose: 'Automated ESG compliance, dividend distribution, and impact metric verification',
      maturity: 'Battle Tested'
    },
    {
      layer: 'Identity & Compliance',
      technologies: ['KYC/AML APIs', 'Zero-Knowledge Proofs', 'Digital Identity'],
      purpose: 'Regulatory compliance, investor verification, and privacy protection',
      maturity: 'Enterprise Grade'
    },
    {
      layer: 'Impact Tracking',
      technologies: ['IoT Sensors', 'Satellite Data', 'AI Analytics'],
      purpose: 'Real-time project monitoring, impact verification, and transparent reporting',
      maturity: 'Innovative'
    }
  ];

  const implementationPhases = [
    {
      phase: 'Phase 1: Foundation',
      duration: '3-6 months',
      focus: 'Regulatory compliance, technology setup, initial token design',
      deliverables: ['Legal framework', 'Smart contracts', 'MVP platform'],
      investment: '$500K - $1M'
    },
    {
      phase: 'Phase 2: Pilot Projects',
      duration: '6-12 months',
      focus: 'Launch first ESG projects, token sales, community building',
      deliverables: ['First tokenized projects', 'Investor onboarding', 'Impact tracking'],
      investment: '$2M - $5M'
    },
    {
      phase: 'Phase 3: Scaling',
      duration: '12-24 months',
      focus: 'Multi-vertical expansion, cross-border operations, ecosystem growth',
      deliverables: ['Portfolio diversification', 'International expansion', 'Platform maturity'],
      investment: '$10M - $25M'
    }
  ];

  return (
    <div className="how-possible-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <Lightbulb className="badge-icon" />
            <span>Conceptual Framework & Future Vision</span>
          </div>
          
          <h1 className="hero-title">
            How ESG Tokenization <span className="gradient-text">Could Work</span>
          </h1>
          
          <p className="hero-description">
            A conceptual framework exploring how asset-backed, impact-driven tokenization could be implemented 
            using existing technology and regulatory pathways. This is a demonstration of possibilities, not financial advice.
          </p>
          
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="stat-number">$2.3T</div>
              <div className="stat-label">Addressable ESG Market</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">150+</div>
              <div className="stat-label">Countries Developing Frameworks</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">Demo</div>
              <div className="stat-label">Conceptual Platform</div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Landscape */}
      <section className="regulatory-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Potential Regulatory Pathways</h2>
            <p className="section-subtitle">
              Existing legal frameworks that could enable compliant ESG tokenization implementation
            </p>
          </div>

          <div className="regulatory-grid">
            {regulatoryFrameworks.map((framework, index) => (
              <div key={index} className="regulatory-card">
                <div className="regulatory-header">
                  <div className="region-info">
                    <h3 className="region-name">{framework.region}</h3>
                    <span className={`status-badge ${framework.status.toLowerCase()}`}>
                      {framework.status}
                    </span>
                  </div>
                  <div className="compliance-potential">
                    <div className="potential-circle">
                      <span className="potential-label">Potential</span>
                    </div>
                  </div>
                </div>

                <p className="regulatory-details">{framework.details}</p>

                <div className="frameworks-list">
                  <h4 className="frameworks-title">Relevant Frameworks:</h4>
                  <ul className="frameworks-items">
                    {framework.frameworks.map((fw, idx) => (
                      <li key={idx} className="framework-item">
                        <CheckCircle className="check-icon" />
                        <span>{fw}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="technology-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Proposed Technology Infrastructure</h2>
            <p className="section-subtitle">
              Existing technologies that could power secure, transparent, and scalable ESG tokenization
            </p>
          </div>

          <div className="technology-stack">
            {technologyStack.map((layer, index) => (
              <div key={index} className="tech-layer">
                <div className="layer-header">
                  <div className="layer-info">
                    <h3 className="layer-name">{layer.layer}</h3>
                    <span className={`maturity-badge ${layer.maturity.toLowerCase().replace(' ', '-')}`}>
                      {layer.maturity}
                    </span>
                  </div>
                  <button 
                    className="expand-button"
                    onClick={() => toggleSection(`tech-${index}`)}
                  >
                    {expandedSection === `tech-${index}` ? 
                      <ChevronDown className="expand-icon" /> : 
                      <ChevronRight className="expand-icon" />
                    }
                  </button>
                </div>

                <p className="layer-purpose">{layer.purpose}</p>

                {expandedSection === `tech-${index}` && (
                  <div className="layer-details">
                    <h4 className="tech-title">Technologies:</h4>
                    <div className="tech-tags">
                      {layer.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* African Market Focus */}
      <section className="african-focus-section">
        <div className="section-container">
          <div className="focus-grid">
            <div className="focus-content">
              <h2 className="focus-title">African Market Opportunities</h2>
              <p className="focus-description">
                Africa presents unique opportunities for ESG tokenization with rapidly developing 
                regulatory frameworks and massive infrastructure needs.
              </p>

              <div className="opportunity-list">
                <div className="opportunity-item">
                  <div className="opportunity-icon green">
                    <Zap className="icon" />
                  </div>
                  <div className="opportunity-content">
                    <h4 className="opportunity-title">Energy Access Gap</h4>
                    <p className="opportunity-text">600M+ people lack electricity access, creating $90B annual investment opportunity</p>
                  </div>
                </div>

                <div className="opportunity-item">
                  <div className="opportunity-icon blue">
                    <Users className="icon" />
                  </div>
                  <div className="opportunity-content">
                    <h4 className="opportunity-title">Growing Tech Adoption</h4>
                    <p className="opportunity-text">Mobile penetration >80%, blockchain startups growing 40% annually</p>
                  </div>
                </div>

                <div className="opportunity-item">
                  <div className="opportunity-icon yellow">
                    <Building className="icon" />
                  </div>
                  <div className="opportunity-content">
                    <h4 className="opportunity-title">Infrastructure Deficit</h4>
                    <p className="opportunity-text">$68B annual infrastructure financing gap creates tokenization opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="regulatory-status">
              <h3 className="status-title">Regulatory Progress</h3>
              
              <div className="status-item">
                <div className="status-header">
                  <span className="country-name">Nigeria</span>
                  <span className="status-indicator positive">Progressive</span>
                </div>
                <p className="status-detail">SEC guidelines for digital assets, central bank digital currency pilot</p>
              </div>

              <div className="status-item">
                <div className="status-header">
                  <span className="country-name">Kenya</span>
                  <span className="status-indicator positive">Leading</span>
                </div>
                <p className="status-detail">Capital Markets Authority framework for blockchain securities</p>
              </div>

              <div className="status-item">
                <div className="status-header">
                  <span className="country-name">South Africa</span>
                  <span className="status-indicator established">Established</span>
                </div>
                <p className="status-detail">FSCA crypto asset regulatory framework, tax clarity provided</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="implementation-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Proposed Implementation Roadmap</h2>
            <p className="section-subtitle">
              Conceptual phased approach for launching a compliant ESG tokenization platform
            </p>
          </div>

          <div className="roadmap-timeline">
            {implementationPhases.map((phase, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <span className="phase-number">{index + 1}</span>
                </div>
                
                <div className="timeline-content">
                  <div className="phase-header">
                    <h3 className="phase-title">{phase.phase}</h3>
                    <span className="phase-duration">{phase.duration}</span>
                  </div>
                  
                  <p className="phase-focus">{phase.focus}</p>
                  
                  <div className="phase-details">
                    <div className="deliverables">
                      <h4 className="details-title">Key Deliverables:</h4>
                      <ul className="deliverables-list">
                        {phase.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="deliverable-item">
                            <CheckCircle className="deliverable-icon" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="investment-range">
                      <span className="investment-label">Investment Range:</span>
                      <span className="investment-amount">{phase.investment}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Success Factors */}
      <section className="success-factors-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Critical Success Factors</h2>
            <p className="section-subtitle">
              Essential elements that would be required for successful ESG tokenization implementation
            </p>
          </div>

          <div className="factors-grid">
            <div className="factor-card">
              <div className="factor-icon regulatory">
                <Gavel className="icon" />
              </div>
              <h3 className="factor-title">Regulatory Compliance</h3>
              <p className="factor-description">
                Early engagement with regulators, comprehensive legal framework, and ongoing compliance monitoring
              </p>
              <ul className="factor-points">
                <li>Securities law compliance</li>
                <li>AML/KYC implementation</li>
                <li>Cross-border coordination</li>
              </ul>
            </div>

            <div className="factor-card">
              <div className="factor-icon technical">
                <Lock className="icon" />
              </div>
              <h3 className="factor-title">Technical Security</h3>
              <p className="factor-description">
                Enterprise-grade security, smart contract audits, and robust infrastructure scaling
              </p>
              <ul className="factor-points">
                <li>Multi-signature wallets</li>
                <li>Smart contract audits</li>
                <li>Infrastructure scaling</li>
              </ul>
            </div>

            <div className="factor-card">
              <div className="factor-icon community">
                <Users className="icon" />
              </div>
              <h3 className="factor-title">Community Building</h3>
              <p className="factor-description">
                Strong stakeholder alignment, transparent communication, and sustainable token economics
              </p>
              <ul className="factor-points">
                <li>Stakeholder alignment</li>
                <li>Transparent governance</li>
                <li>Sustainable economics</li>
              </ul>
            </div>

            <div className="factor-card">
              <div className="factor-icon impact">
                <Target className="icon" />
              </div>
              <h3 className="factor-title">Impact Verification</h3>
              <p className="factor-description">
                Measurable impact metrics, third-party verification, and real-time monitoring systems
              </p>
              <ul className="factor-points">
                <li>Impact measurement</li>
                <li>Third-party audits</li>
                <li>Real-time tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Interested in Exploring This Concept Further?</h2>
          <p className="cta-description">
            This platform demonstrates a potential approach to ESG tokenization. Connect with our team to discuss 
            the conceptual framework and explore how similar principles might apply to your specific use case.
          </p>
          
          <div className="cta-buttons">
            <button className="cta-primary">
              <span>Discuss Concept</span>
              <ArrowRight className="btn-icon" />
            </button>
            <button className="cta-secondary">
              <FileText className="btn-icon" />
              <span>View Concept Paper</span>
            </button>
          </div>

          <div className="cta-note">
            <AlertCircle className="note-icon" />
            <span>This is a conceptual demonstration - not investment advice or financial services</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItsPossiblePage;