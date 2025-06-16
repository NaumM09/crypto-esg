import React, { useState, useEffect } from 'react';
import { TrendingUp, Shield, Globe, Leaf, Heart, ArrowRight, Play, Users, DollarSign, Award, ChevronDown, Menu, X, AlertCircle, BookOpen, Cpu } from 'lucide-react';
import '../styles/Home.css';
import ESGTokensPage from "../components/Token";
import HowItsPossiblePage from "../components/Terms";

const EcoVestHomepage = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMenuOpen(false);
  };

  const FloatingCube = ({ delay = 0, size = 'medium' }) => (
    <div
      className={`floating-cube ${size}`}
      style={{
        animationDelay: `${delay}s`,
        transform: `translateY(${scrollY * 0.1}px)`,
        left: `${20 + delay * 30}%`,
        top: `${20 + delay * 20}%`,
      }}
    />
  );

  const TokenOrb = ({ color, delay = 0 }) => (
    <div
      className={`token-orb ${color}`}
      style={{
        animationDelay: `${delay}s`,
        transform: `translateY(${scrollY * 0.05}px)`,
        right: `${10 + delay * 25}%`,
        top: `${30 + delay * 15}%`,
      }}
    />
  );

  return (
    <div className="homepage">
      {/* Legal Disclaimer Banner */}
      <div className="disclaimer-banner">
        <div className="disclaimer-content">
          <AlertCircle className="disclaimer-icon" />
          <span className="disclaimer-text">
            CONCEPTUAL DEMONSTRATION ONLY - Not actual investment platform or financial advice
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo-section">
              <button 
                onClick={() => handleNavigation('home')}
                className="logo-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              >
                <div className="logo-icon">
                  <Leaf className="leaf-icon" />
                </div>
                <span className="logo-text">EcoToken</span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="nav-links desktop-nav">
              <button 
                onClick={() => handleNavigation('home')}
                className="nav-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Home
              </button>
              <a href="#tokens" className="nav-link">Demo Tokens</a>
              <a href="#impact" className="nav-link">Impact</a>
              <button 
                onClick={() => handleNavigation('technology')}
                className="nav-link tech-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              >
                <Cpu className="tech-icon" />
                Tech Deep Dive
              </button>
              <button 
                onClick={() => handleNavigation('technology')}
                className="cta-button"
              >
                Explore Tech
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              <button 
                onClick={() => handleNavigation('home')}
                className="mobile-nav-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left' }}
              >
                Home
              </button>
              <a 
                href="#tokens" 
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Demo Tokens
              </a>
              <a 
                href="#impact" 
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Impact
              </a>
              <button 
                onClick={() => handleNavigation('technology')}
                className="mobile-nav-link tech-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center' }}
              >
                <Cpu className="tech-icon" />
                Tech Deep Dive
              </button>
              <button 
                onClick={() => handleNavigation('technology')}
                className="mobile-cta-button"
              >
                Explore Tech
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        {/* Animated Background Elements */}
        <div className="hero-background">
          <FloatingCube delay={0} size="medium" />
          <FloatingCube delay={1} size="small" />
          <FloatingCube delay={2} size="large" />
          
          <TokenOrb color="green" delay={0} />
          <TokenOrb color="yellow" delay={1} />
          <TokenOrb color="amber" delay={2} />
          
          <div className="grid-pattern" />
          <div className="glow-line-1" />
          <div className="glow-line-2" />
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-inner">
            {/* Status Badge */}
            <div className="status-badge">
              <div className="status-dot" />
              <span className="status-text">Conceptual Demo • Educational Purpose Only</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              Explore the Future of<br />
              <span className="hero-title-accent">ESG Tokenization</span><br />
              Concepts
            </h1>

            <p className="hero-description">
              Discover how blockchain technology could potentially revolutionize ESG investing through 
              tokenized assets that fund renewable energy, healthcare, and sustainable development projects.
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <button className="primary-button">
                <span>Explore Demo</span>
                <ArrowRight className="button-icon" />
              </button>
              <button 
                onClick={() => handleNavigation('technology')}
                className="secondary-button"
              >
                <Cpu className="button-icon" />
                <span>View Technology</span>
              </button>
            </div>

            {/* Conceptual Stats */}
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">$127M+</div>
                <div className="stat-label">Potential Market Size</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">23.7%</div>
                <div className="stat-label">Theoretical APY Range</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">2.3M</div>
                <div className="stat-label">Estimated Lives Impacted</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">Demo</div>
                <div className="stat-label">Framework Only</div>
              </div>
            </div>

            {/* Additional Disclaimer */}
            <div className="hero-disclaimer">
              <AlertCircle className="disclaimer-icon-small" />
              <span className="disclaimer-text-small">
                This is a conceptual demonstration. All figures are hypothetical and for educational purposes only.
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <ChevronDown className="scroll-icon" />
        </div>
      </section>

      <ESGTokensPage/>

      {/* Problem Section */}
      <section id="problem" className="problem-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Current Investment <span className="text-red">Challenges</span>
            </h2>
            <p className="section-description">
              Exploring theoretical limitations in traditional investment approaches regarding 
              environmental and social impact measurement and transparency.
            </p>
          </div>

          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon red">
                <TrendingUp className="icon" />
              </div>
              <h3 className="problem-title">Limited Impact Tracking</h3>
              <p className="problem-text">Traditional systems may lack comprehensive mechanisms to measure real-world ESG impact</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon red">
                <Shield className="icon" />
              </div>
              <h3 className="problem-title">Complex Incentive Structures</h3>
              <p className="problem-text">Current frameworks might not optimize for both financial returns and social benefits</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon red">
                <Globe className="icon" />
              </div>
              <h3 className="problem-title">Transparency Gaps</h3>
              <p className="problem-text">Investors may have limited visibility into specific project outcomes and fund allocation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Conceptual <span className="gradient-text">Solutions</span> Framework
            </h2>
            <p className="section-description">
              This demonstration explores how blockchain technology could theoretically address 
              ESG investment challenges through tokenization and transparent impact tracking.
            </p>
          </div>

          <div className="solution-grid">
            <div className="solution-card green">
              <div className="solution-icon green">
                <Leaf className="icon" />
              </div>
              <h3 className="solution-title">Measurable Impact Tracking</h3>
              <p className="solution-text">Theoretical framework for funding renewable energy and environmental projects with blockchain-verified metrics</p>
            </div>

            <div className="solution-card yellow">
              <div className="solution-icon yellow">
                <DollarSign className="icon" />
              </div>
              <h3 className="solution-title">Optimized Incentive Models</h3>
              <p className="solution-text">Conceptual structure combining potential financial benefits with ESG investment frameworks</p>
            </div>

            <div className="solution-card amber">
              <div className="solution-icon amber">
                <Award className="icon" />
              </div>
              <h3 className="solution-title">Enhanced Transparency</h3>
              <p className="solution-text">Theoretical blockchain-based system for tracking fund allocation and project impact in real-time</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Conceptual Framework Overview</h2>
            <p className="section-description">
              Three theoretical steps demonstrating how ESG tokenization could potentially work
            </p>
          </div>

          <div className="steps-container">
            <div className="connection-line line-1" />
            <div className="connection-line line-2" />

            <div className="step-item">
              <div className="step-number">1</div>
              <h3 className="step-title">Explore ESG Concepts</h3>
              <p className="step-text">Review theoretical tokenized ESG projects focused on environmental, social, and governance outcomes</p>
            </div>

            <div className="step-item">
              <div className="step-number">2</div>
              <h3 className="step-title">Understand Mechanisms</h3>
              <p className="step-text">Learn how tokenization could theoretically enable funding of real-world ESG initiatives</p>
            </div>

            <div className="step-item">
              <div className="step-number">3</div>
              <h3 className="step-title">Track Conceptual Impact</h3>
              <p className="step-text">See how blockchain could potentially provide transparency in ESG project outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Tokens Preview */}
      <section id="tokens" className="tokens-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Demo ESG Token Concepts</h2>
            <p className="section-description">
              Theoretical examples of how ESG projects could be tokenized (for educational purposes only)
            </p>
          </div>

          <div className="tokens-grid">
            <div className="token-card green">
              <div className="token-header">
                <div className="token-info">
                  <div className="token-icon green">
                    <Leaf className="icon" />
                  </div>
                  <div className="token-details">
                    <h3 className="token-name">GreenImpact Demo</h3>
                    <p className="token-symbol">DEMO-GRNI</p>
                  </div>
                </div>
                <div className="token-price">
                  <p className="price-value">Conceptual</p>
                  <p className="price-change demo">Demo Only</p>
                </div>
              </div>
              
              <p className="token-description">Theoretical model for funding renewable energy projects in developing regions</p>
              
              <div className="token-stats">
                <div className="stat-row">
                  <span className="stat-label">Theoretical APY</span>
                  <span className="stat-value green">8.4%*</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Example Projects</span>
                  <span className="stat-value">42</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Potential CO2 Impact</span>
                  <span className="stat-value">2.3M tons</span>
                </div>
              </div>
              
              <button className="token-button green">View Concept</button>
            </div>

            <div className="token-card red">
              <div className="token-header">
                <div className="token-info">
                  <div className="token-icon red">
                    <Heart className="icon" />
                  </div>
                  <div className="token-details">
                    <h3 className="token-name">SocialImpact Demo</h3>
                    <p className="token-symbol">DEMO-SCLI</p>
                  </div>
                </div>
                <div className="token-price">
                  <p className="price-value">Conceptual</p>
                  <p className="price-change demo">Demo Only</p>
                </div>
              </div>
              
              <p className="token-description">Theoretical framework for healthcare and education initiatives</p>
              
              <div className="token-stats">
                <div className="stat-row">
                  <span className="stat-label">Theoretical APY</span>
                  <span className="stat-value red">6.2%*</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Potential Impact</span>
                  <span className="stat-value">850K lives</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Example Centers</span>
                  <span className="stat-value">245</span>
                </div>
              </div>
              
              <button className="token-button yellow">View Concept</button>
            </div>

            <div className="token-card blue">
              <div className="token-header">
                <div className="token-info">
                  <div className="token-icon blue">
                    <Shield className="icon" />
                  </div>
                  <div className="token-details">
                    <h3 className="token-name">Governance Demo</h3>
                    <p className="token-symbol">DEMO-GOVN</p>
                  </div>
                </div>
                <div className="token-price">
                  <p className="price-value">Conceptual</p>
                  <p className="price-change demo">Demo Only</p>
                </div>
              </div>
              
              <p className="token-description">Theoretical transparency and corporate accountability framework</p>
              
              <div className="token-stats">
                <div className="stat-row">
                  <span className="stat-label">Theoretical APY</span>
                  <span className="stat-value blue">9.1%*</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Transparency Goal</span>
                  <span className="stat-value">94%</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Example Audits</span>
                  <span className="stat-value">127</span>
                </div>
              </div>
              
              <button className="token-button amber">View Concept</button>
            </div>
          </div>

          {/* Demo Disclaimer */}
          <div className="demo-disclaimer">
            <AlertCircle className="disclaimer-icon" />
            <p className="disclaimer-text">
              *All APY figures are hypothetical examples for demonstration purposes only. 
              This is not investment advice or a recommendation to purchase any financial product.
            </p>
          </div>
        </div>
      </section>

      <HowItsPossiblePage/>

      {/* Final Legal Notice */}
      <section className="legal-notice-section">
        <div className="section-container">
          <div className="legal-notice-content">
            <h3 className="legal-notice-title">Important Notice</h3>
            <p className="legal-notice-text">
              This platform is a conceptual demonstration created for educational and research purposes only. 
              It does not constitute investment advice, financial guidance, or an offer to sell securities. 
              All figures, returns, and projects shown are hypothetical examples designed to illustrate 
              potential blockchain and ESG tokenization concepts. No actual investments, tokens, or financial 
              products are being offered through this demonstration.
            </p>
            <p className="legal-notice-text">
              Before making any investment decisions, please consult with qualified financial advisors and 
              conduct thorough due diligence. Cryptocurrency and tokenized investments carry significant risks 
              and may not be suitable for all investors.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcoVestHomepage;