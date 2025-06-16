import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Shield, 
  Database, 
  ArrowRight, 
  CheckCircle, 
  AlertCircle, 
  Code, 
  Layers, 
  ChevronDown, 
  Menu, 
  X,
  Server,
  Brain,
  Activity,
  GitBranch,
  FileCode,
  Smartphone,
  Home
} from 'lucide-react';
import "../styles/Tech.css";

const TechnologyPage = ({ onNavigate }) => {
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

  const TechOrb = ({ color, delay = 0, size = 'medium' }) => (
    <div
      className={`tech-orb ${color} ${size}`}
      style={{
        animationDelay: `${delay}s`,
        transform: `translateY(${scrollY * 0.03}px) rotate(${scrollY * 0.1}deg)`,
        right: `${5 + delay * 20}%`,
        top: `${15 + delay * 25}%`,
      }}
    />
  );

  const CodeBlock = ({ title, language, code }) => (
    <div className="code-block">
      <div className="code-header">
        <span className="code-title">{title}</span>
        <span className="code-language">{language}</span>
      </div>
      <pre className="code-content">
        <code>{code}</code>
      </pre>
    </div>
  );

  return (
    <div className="technology-page">
      {/* Legal Disclaimer Banner */}
      <div className="disclaimer-banner">
        <div className="disclaimer-content">
          <AlertCircle className="disclaimer-icon" />
          <span className="disclaimer-text">
            CONCEPTUAL DEMONSTRATION ONLY - Educational technology exploration, not actual implementation
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="tech-navbar">
        <div className="nav-container">
          <div className="nav-content">
            {/* Logo */}
            <button 
              onClick={() => handleNavigation('home')}
              className="logo-button"
            >
              <div className="logo-icon">
                <Shield className="leaf-icon" />
              </div>
              <span className="logo-text">EcoToken</span>
            </button>

            {/* Desktop Navigation */}
            <div className="desktop-nav">
              <button 
                onClick={() => handleNavigation('home')}
                className="nav-link home-link"
              >
                <Home className="nav-icon" />
                Home
              </button>
              <a href="#overview" className="nav-link">Overview</a>
              <a href="#architecture" className="nav-link">Architecture</a>
              <a href="#implementation" className="nav-link">Implementation</a>
              <button 
                onClick={() => handleNavigation('home')}
                className="cta-button"
              >
                Back to Demo
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
                className="mobile-nav-link home-link"
              >
                <Home className="nav-icon" />
                Home
              </button>
              <a 
                href="#overview" 
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Overview
              </a>
              <a 
                href="#architecture" 
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Architecture
              </a>
              <a 
                href="#implementation" 
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Implementation
              </a>
              <button 
                onClick={() => handleNavigation('home')}
                className="mobile-cta-button"
              >
                Back to Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="tech-hero">
        {/* Animated Background */}
        <div className="tech-background">
          <TechOrb color="blue" delay={0} size="medium" />
          <TechOrb color="purple" delay={1} size="small" />
          <TechOrb color="cyan" delay={2} size="large" />
          
          {/* Grid Pattern */}
          <div className="grid-overlay" />
        </div>

        <div className="hero-container">
          {/* Tech Badge */}
          <div className="tech-badge">
            <Cpu className="tech-badge-icon" />
            <span>Technical Deep Dive</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title">
            Technology Behind<br />
            <span className="title-gradient">
              ESG Tokenization
            </span>
          </h1>

          <p className="hero-subtitle">
            Explore the theoretical blockchain infrastructure, smart contracts, and AI systems 
            that could power transparent and measurable ESG impact investing.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <a href="#overview" className="primary-btn">
              <Code className="button-icon" />
              Explore Tech Stack
            </a>
            <a href="#implementation" className="secondary-btn">
              <ArrowRight className="button-icon" />
              Implementation Plan
            </a>
          </div>

          {/* Disclaimer */}
          <div className="hero-disclaimer">
            <AlertCircle className="disclaimer-icon-small" />
            <span>Conceptual framework for educational purposes - not actual implementation</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <ChevronDown className="scroll-icon" />
        </div>
      </section>

      {/* Tech Stack Overview */}
      <section id="overview" className="tech-overview">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Theoretical Technology Stack
            </h2>
            <p className="section-subtitle">
              A comprehensive conceptual framework combining blockchain, AI, and modern web technologies 
              to enable transparent ESG impact measurement and tokenized investing.
            </p>
          </div>

          <div className="tech-stack-grid">
            {/* Blockchain Infrastructure */}
            <div className="tech-card blockchain">
              <div className="card-icon blockchain">
                <Layers className="icon" />
              </div>
              <h3 className="card-title">Blockchain Layer</h3>
              <p className="card-description">
                Ethereum-based infrastructure with Layer 2 scaling solutions for efficient 
                ESG token transactions and impact verification.
              </p>
              <ul className="tech-features">
                <li>
                  <CheckCircle className="feature-icon" />
                  Smart Contract Architecture
                </li>
                <li>
                  <CheckCircle className="feature-icon" />
                  Layer 2 Scaling (Polygon/Arbitrum)
                </li>
                <li>
                  <CheckCircle className="feature-icon" />
                  IPFS for Metadata Storage
                </li>
                <li>
                  <CheckCircle className="feature-icon" />
                  Cross-chain Compatibility
                </li>
              </ul>
            </div>

            {/* AI & Analytics */}
            <div className="tech-card ai">
              <div className="card-icon ai">
                <Brain className="icon" />
              </div>
              <h3 className="card-title">AI & Analytics</h3>
              <p className="card-description">
                Machine learning systems for automated ESG impact measurement, 
                risk assessment, and real-time project monitoring.
              </p>
              <ul className="tech-features">
                <li>
                  <CheckCircle className="feature-icon" />
                  Impact Measurement ML
                </li>
                <li>
                  <CheckCircle className="feature-icon" />
                  Satellite Data Integration
                </li>
                <li>
                  <CheckCircle className="feature-icon" />
                  Predictive Risk Models
                </li>
                <li>
                  <CheckCircle className="feature-icon" />
                  Automated Reporting
                </li>
              </ul>
            </div>

            {/* Security & Compliance */}
            <div className="tech-card security">
              <div className="card-icon security">
                <Shield className="icon" />
              </div>
              <h3 className="card-title">Security & Compliance</h3>
              <p className="card-description">
                Enterprise-grade security with regulatory compliance frameworks 
                for institutional ESG investment requirements.
              </p>
              <ul className="tech-features">
                <li>
                  <CheckCircle className="feature-icon" />
                  Multi-sig Wallets
                </li>
                <li>
                  <CheckCircle className="feature-icon" />
                  KYC/AML Integration
                </li>
                <li>
                  <CheckCircle className="feature-icon" />
                  Regulatory Reporting
                </li>
                <li>
                  <CheckCircle className="feature-icon" />
                  Audit Trail System
                </li>
              </ul>
            </div>

            {/* Data Integration */}
            <div className="tech-card data">
              <div className="card-icon data">
                <Database className="icon" />
              </div>
              <h3 className="card-title">Data Integration</h3>
              <p className="card-description">
                Real-time data feeds from IoT sensors, satellite imagery, and 
                third-party ESG data providers for comprehensive impact tracking.
              </p>
              <ul className="tech-features">
                <li>
                  <CheckCircle className="feature-icon" />
                  IoT Sensor Networks
                </li>
                <li>
                  <CheckCircle className="feature-icon" />
                  Satellite Data APIs
                </li>
                <li>
                  <CheckCircle className="feature-icon" />
                  ESG Data Providers
                </li>
                <li>
                  <CheckCircle className="feature-icon" />
                  Real-time Analytics
                </li>
              </ul>
            </div>

            {/* Frontend Platform */}
            <div className="tech-card frontend">
              <div className="card-icon frontend">
                <Smartphone className="icon" />
              </div>
              <h3 className="card-title">User Interface</h3>
              <p className="card-description">
                Modern web and mobile applications providing intuitive access 
                to ESG investment opportunities and impact tracking.
              </p>
              <ul className="tech-features">
                <li>
                  <CheckCircle className="feature-icon" />
                  React/Next.js Frontend
                </li>
                <li>
                  <CheckCircle className="feature-icon" />
                  Mobile Apps (React Native)
                </li>
                <li>
                  <CheckCircle className="feature-icon" />
                  Real-time Dashboards
                </li>
                <li>
                  <CheckCircle className="feature-icon" />
                  Web3 Wallet Integration
                </li>
              </ul>
            </div>

            {/* API Infrastructure */}
            <div className="tech-card backend">
              <div className="card-icon backend">
                <Server className="icon" />
              </div>
              <h3 className="card-title">Backend Services</h3>
              <p className="card-description">
                Scalable microservices architecture handling token operations, 
                user management, and integration with external systems.
              </p>
              <ul className="tech-features">
                <li>
                  <CheckCircle className="feature-icon" />
                  Node.js/Python APIs
                </li>
                <li>
                  <CheckCircle className="feature-icon" />
                  GraphQL Federation
                </li>
                <li>
                  <CheckCircle className="feature-icon" />
                  Microservices Architecture
                </li>
                <li>
                  <CheckCircle className="feature-icon" />
                  Container Orchestration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Explore ESG Tokenization?
            </h2>
            <p className="cta-subtitle">
              This conceptual framework demonstrates the potential of blockchain technology 
              to revolutionize ESG investing through transparency and measurable impact.
            </p>
            <div className="cta-buttons">
              <button 
                onClick={() => handleNavigation('home')}
                className="cta-primary"
              >
                Explore Demo Platform
              </button>
              <a href="#overview" className="cta-secondary">
                Review Tech Stack
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;