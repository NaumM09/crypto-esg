import React, { useState } from 'react';
import { TrendingUp, Leaf, Heart, Shield, DollarSign, Users, MapPin, Calendar, Target, Zap, Award, ChevronRight, Play } from 'lucide-react';
import '../styles/Token.css';

const ESGTokensPage = () => {
  const [selectedToken, setSelectedToken] = useState('green');
  const [selectedTimeframe, setSelectedTimeframe] = useState('1Y');

  const tokens = {
    green: {
      id: 'green',
      name: 'GreenImpact',
      symbol: 'GRNI',
      price: 45.23,
      change: 12.5,
      apy: 8.4,
      category: 'Environmental',
      description: 'Funding renewable energy projects across developing nations to combat climate change and provide sustainable energy access.',
      icon: <Leaf className="token-detail-icon" />,
      color: 'green',
      marketCap: '127.5M',
      volume24h: '2.4M',
      totalSupply: '100M',
      circulatingSupply: '65M',
      projects: [
        {
          id: 1,
          name: 'Solar Farm Kenya',
          location: 'Nairobi, Kenya',
          type: 'Solar Energy',
          capacity: '50MW',
          progress: 85,
          funded: 2400000,
          totalCost: 3200000,
          beneficiaries: 45000,
          co2Saved: '32,000 tons/year',
          status: 'Active',
          image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400',
        },
        {
          id: 2,
          name: 'Wind Power Brazil',
          location: 'Bahia, Brazil',
          type: 'Wind Energy',
          capacity: '75MW',
          progress: 60,
          funded: 1800000,
          totalCost: 4500000,
          beneficiaries: 68000,
          co2Saved: '48,000 tons/year',
          status: 'In Progress',
          image: 'https://images.unsplash.com/photo-1466629437334-b4f6603563c5?w=400',
        }
      ],
      impactMetrics: {
        co2Reduced: '2.3M tons',
        projectsFunded: 42,
        beneficiaries: '1.2M people',
        energyGenerated: '850 GWh'
      }
    },
    social: {
      id: 'social',
      name: 'HumanityFirst',
      symbol: 'HMNF',
      price: 32.89,
      change: 8.7,
      apy: 6.2,
      category: 'Social',
      description: 'Healthcare and education initiatives in underserved communities worldwide.',
      icon: <Heart className="token-detail-icon" />,
      color: 'red',
      marketCap: '89.2M',
      volume24h: '1.8M',
      totalSupply: '150M',
      circulatingSupply: '98M',
      projects: [
        {
          id: 3,
          name: 'Rural Health Clinics',
          location: 'Tamil Nadu, India',
          type: 'Healthcare',
          capacity: '12 Clinics',
          progress: 75,
          funded: 950000,
          totalCost: 1400000,
          beneficiaries: 125000,
          impact: '24/7 Medical Care',
          status: 'Active',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400',
        },
        {
          id: 4,
          name: 'Education Centers',
          location: 'Lagos, Nigeria',
          type: 'Education',
          capacity: '8 Schools',
          progress: 90,
          funded: 1200000,
          totalCost: 1600000,
          beneficiaries: 3200,
          impact: 'Primary Education',
          status: 'Near Complete',
          image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400',
        }
      ],
      impactMetrics: {
        livesImpacted: '850K people',
        schoolsBuilt: 156,
        healthCenters: 89,
        teachers: '2,400'
      }
    },
    governance: {
      id: 'governance',
      name: 'EthicalGov',
      symbol: 'ETHG',
      price: 78.45,
      change: 15.2,
      apy: 9.1,
      category: 'Governance',
      description: 'Transparent governance and corporate accountability solutions.',
      icon: <Shield className="token-detail-icon" />,
      color: 'blue',
      marketCap: '156.8M',
      volume24h: '3.1M',
      totalSupply: '75M',
      circulatingSupply: '52M',
      projects: [
        {
          id: 5,
          name: 'Supply Chain Transparency',
          location: 'Global',
          type: 'Transparency',
          capacity: '200 Companies',
          progress: 70,
          funded: 2800000,
          totalCost: 4200000,
          beneficiaries: 500000,
          impact: 'Full Traceability',
          status: 'Scaling',
          image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400',
        }
      ],
      impactMetrics: {
        transparencyScore: '94%',
        auditsCompleted: 127,
        complianceRate: '98.7%',
        companiesTracked: '200+'
      }
    }
  };

  const currentToken = tokens[selectedToken];
  const timeframes = ['1D', '1W', '1M', '3M', '1Y', 'ALL'];

  return (
    <div className="tokens-page">
      {/* Header */}
      <header className="tokens-header">
        <div className="header-container">
          <h1 className="page-title">ESG Token Portfolio</h1>
        </div>
      </header>

      {/* Token Selector */}
      <section className="token-selector-section">
        <div className="section-container">
          <div className="token-tabs">
            <button 
              className={`token-tab ${selectedToken === 'green' ? 'active green' : ''}`}
              onClick={() => setSelectedToken('green')}
            >
              <Leaf className="tab-icon" />
              <div className="tab-content">
                <span className="tab-name">GreenImpact</span>
                <span className="tab-symbol">GRNI</span>
              </div>
              <span className="tab-price">$45.23</span>
            </button>

            <button 
              className={`token-tab ${selectedToken === 'social' ? 'active red' : ''}`}
              onClick={() => setSelectedToken('social')}
            >
              <Heart className="tab-icon" />
              <div className="tab-content">
                <span className="tab-name">HumanityFirst</span>
                <span className="tab-symbol">HMNF</span>
              </div>
              <span className="tab-price">$32.89</span>
            </button>

            <button 
              className={`token-tab ${selectedToken === 'governance' ? 'active blue' : ''}`}
              onClick={() => setSelectedToken('governance')}
            >
              <Shield className="tab-icon" />
              <div className="tab-content">
                <span className="tab-name">EthicalGov</span>
                <span className="tab-symbol">ETHG</span>
              </div>
              <span className="tab-price">$78.45</span>
            </button>
          </div>
        </div>
      </section>

      {/* Token Overview */}
      <section className="token-overview">
        <div className="section-container">
          <div className="overview-grid">
            {/* Left Column - Token Info */}
            <div className="token-info-card">
              <div className="token-header">
                <div className="token-main-info">
                  <div className={`token-icon-large ${currentToken.color}`}>
                    {currentToken.icon}
                  </div>
                  <div className="token-title-section">
                    <h2 className="token-title">{currentToken.name}</h2>
                    <p className="token-subtitle">{currentToken.symbol} • {currentToken.category}</p>
                    <p className="token-description">{currentToken.description}</p>
                  </div>
                </div>
                
                <div className="token-price-section">
                  <div className="current-price">${currentToken.price}</div>
                  <div className="price-change positive">
                    <TrendingUp className="change-icon" />
                    +{currentToken.change}% (24h)
                  </div>
                  <div className="apy-badge">
                    {currentToken.apy}% APY
                  </div>
                </div>
              </div>

              {/* Token Stats */}
              <div className="token-stats-grid">
                <div className="stat-item">
                  <span className="stat-label">Market Cap</span>
                  <span className="stat-value">${currentToken.marketCap}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">24h Volume</span>
                  <span className="stat-value">${currentToken.volume24h}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Total Supply</span>
                  <span className="stat-value">{currentToken.totalSupply}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Circulating</span>
                  <span className="stat-value">{currentToken.circulatingSupply}</span>
                </div>
              </div>
            </div>

            {/* Right Column - Price Chart */}
            <div className="price-chart-card">
              <div className="chart-header">
                <h3 className="chart-title">Price Chart</h3>
                <div className="timeframe-selector">
                  {timeframes.map(timeframe => (
                    <button
                      key={timeframe}
                      className={`timeframe-btn ${selectedTimeframe === timeframe ? 'active' : ''}`}
                      onClick={() => setSelectedTimeframe(timeframe)}
                    >
                      {timeframe}
                    </button>
                  ))}
                </div>
              </div>
              <div className="chart-container">
                <div className="chart-placeholder">
                  <TrendingUp className="chart-icon" />
                  <p>Interactive price chart would be here</p>
                  <p className="chart-note">({selectedTimeframe} timeframe)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="impact-metrics-section">
        <div className="section-container">
          <h3 className="section-title">Real-World Impact</h3>
          <div className="impact-grid">
            {Object.entries(currentToken.impactMetrics).map(([key, value]) => (
              <div key={key} className="impact-card">
                <div className="impact-value">{value}</div>
                <div className="impact-label">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funded Projects */}
      <section className="projects-section">
        <div className="section-container">
          <div className="projects-header">
            <h3 className="section-title">Funded Projects</h3>
            <p className="section-subtitle">See exactly where your investment is making an impact</p>
          </div>
          
          <div className="projects-grid">
            {currentToken.projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.name} />
                  <div className="project-status">
                    <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="project-content">
                  <div className="project-header">
                    <h4 className="project-name">{project.name}</h4>
                    <div className="project-location">
                      <MapPin className="location-icon" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  
                  <div className="project-details">
                    <div className="detail-row">
                      <Target className="detail-icon" />
                      <span>{project.type} • {project.capacity}</span>
                    </div>
                    <div className="detail-row">
                      <Users className="detail-icon" />
                      <span>{project.beneficiaries.toLocaleString()} beneficiaries</span>
                    </div>
                    <div className="detail-row">
                      <Zap className="detail-icon" />
                      <span>{project.co2Saved || project.impact}</span>
                    </div>
                  </div>
                  
                  <div className="funding-progress">
                    <div className="progress-header">
                      <span className="progress-label">Funding Progress</span>
                      <span className="progress-percentage">{project.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <div className="funding-amounts">
                      <span>${(project.funded / 1000000).toFixed(1)}M raised</span>
                      <span>${(project.totalCost / 1000000).toFixed(1)}M goal</span>
                    </div>
                  </div>
                  
                  <button className="project-details-btn">
                    <span>View Details</span>
                    <ChevronRight className="btn-icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Actions */}
      <section className="investment-actions">
        <div className="section-container">
          <div className="action-card">
            <div className="action-content">
              <div className="action-info">
                <h3 className="action-title">Ready to invest in {currentToken.name}?</h3>
                <p className="action-description">
                  Start earning {currentToken.apy}% APY while funding {currentToken.category.toLowerCase()} projects that make a real difference.
                </p>
                <div className="action-features">
                  <div className="feature-item">
                    <Award className="feature-icon" />
                    <span>SEC Compliant</span>
                  </div>
                  <div className="feature-item">
                    <Shield className="feature-icon" />
                    <span>Fully Insured</span>
                  </div>
                  <div className="feature-item">
                    <TrendingUp className="feature-icon" />
                    <span>Real-time Tracking</span>
                  </div>
                </div>
              </div>
              
              <div className="action-buttons">
                <button className="invest-button primary">
                  <DollarSign className="btn-icon" />
                  <span>Invest Now</span>
                </button>
                <button className="demo-button secondary">
                  <Play className="btn-icon" />
                  <span>See Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ESGTokensPage;