import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tradient.css';

const Tradient: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tradient-detail-page">
      <button className="back-button" onClick={() => navigate('/projects')}>
        ← Back to Projects
      </button>

      <div className="tradient-detail-content">
        <div className="header-row">
          <div>
            <h1 className="project-name">Tradient - Full-Stack Trading Platform</h1>
          </div>

          <div className="project-links-top">
            <a
              href="https://github.com/sunami09/frontend-tradient"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="GitHub Repository"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>

            <a
              href="https://tradient-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="Live Demo"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* YOUTUBE VIDEO */}
      <div className="video-container" style={{ marginTop: '2.5rem', marginBottom: '2rem' }}>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/mCqjmIDYbeQ"
          title="Tradient Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '8px' }}
        ></iframe>
      </div>

      {/* SUMMARY - Now outside the box like VideoStreaming */}
      <div className="subsection" style={{ marginTop: '2.5rem', marginLeft: '0.5rem' }}>
        <h3 className="subsection-title">Summary:</h3>
        <p className="experience-text">
          This project is a trading application that lets users look up financial assets, view 
          price charts, place trades through a broker, and interact with other users through a 
          small community section. The app handles authentication, shows market data, and lets 
          people make posts, comment, and react to content. Everything is built from scratch 
          and connected through a custom backend system.
        </p>
      </div>

      {/* SYSTEM ARCHITECTURE OVERVIEW */}
      <div className="project-section">
        <h4 className="project-title">System Architecture Overview</h4>
        
        <div className="subsection">
          <h5 className="subsection-title">Architectural Design:</h5>

          <img 
            src="/tradient/tradient.png" 
            alt="Video Transcription Pipeline Diagram" 
            className="video-streaming-diagram" 
            style={{ width: '100%', maxWidth: 900, margin: '0 auto', display: 'block' }} 
          />
          
          <p className="experience-text">
            The system is split into several parts. The architecture 
            follows a <strong>microservices pattern</strong> with a <strong>proxy server</strong> acting 
            as the gateway between the frontend and backend services.
          </p>
        </div>
        <div className="subsection">
          <h5 className="subsection-title">Technology Stack:</h5>
          <ul className="solutions-list">
            <li><strong>Frontend:</strong> React + TypeScript</li>
            <li><strong>Authentication:</strong> Firebase Authentication</li>
            <li><strong>Proxy Server:</strong> Node.js/Express gateway for API routing and security</li>
            <li><strong>Backend Services:</strong> Microservices architecture for scalability</li>
            <li><strong>Caching:</strong> Redis for caching</li>
            <li><strong>Market Data:</strong> Financial Modeling Grep Data Broker</li>
            <li><strong>Stock Broker:</strong> Alpaca API</li>
          </ul>
        </div>
      </div>

      {/* FRONTEND ARCHITECTURE */}
      <div className="project-section">
        <h4 className="project-title">Frontend Architecture</h4>
        
        <div className="subsection">
          <h5 className="subsection-title">Core Components:</h5>
          <p className="experience-text">
            This is the website users see. Built with <strong>React + TypeScript + Tailwind</strong>, 
            it provides a modern, responsive interface for trading and community interaction.
          </p>
        </div>

        <div className="subsection">
          <h5 className="subsection-title">Key Features Implementation:</h5>
          <ul className="solutions-list">
            <li><strong>Login and Account Handling:</strong> Integrated with Firebase Authentication for secure user management</li>
            <li><strong>Search Bar:</strong> Real-time stock lookup with autocomplete functionality</li>
            <li><strong>Asset Page:</strong> Interactive charts using Chart.js, real-time prices via WebSocket, and detailed company information</li>
            <li><strong>Buy/Sell Order Panel:</strong> Direct connection to broker API for order execution with real-time validation</li>
            <li><strong>Community Feed:</strong> Social features where users can post, comment, and like content</li>
            <li>
              <strong>Security Note:</strong> The frontend never talks directly to the backend microservices. 
              Instead, everything goes through the proxy server to keep things cleaner and more secure
            </li>
          </ul>
        </div>
      </div>

      {/* PROXY SERVER & API GATEWAY */}
      <div className="project-section">
        <h4 className="project-title">Proxy Server & API Gateway</h4>
        
        <div className="subsection">
          <h5 className="subsection-title">Architecture Purpose:</h5>
          <p className="experience-text">
            The proxy server acts as a <strong>single entry point</strong> for all frontend requests, 
            providing security, routing, and protocol translation between the frontend and backend services.
          </p>
        </div>

        <div className="subsection">
          <h5 className="subsection-title">Core Responsibilities:</h5>
          <ul className="solutions-list">
            <li><strong>Authentication Verification:</strong> Validates users before routing requests to backend services</li>
            <li><strong>Request Routing:</strong> Intelligently routes requests to appropriate microservices based on endpoint patterns</li>
            <li><strong>Rate Limiting:</strong> Implements per-user rate limiting to prevent API abuse</li>
            <li><strong>Response Caching:</strong> Caches frequently requested data like stock quotes in Redis</li>
            <li><strong>Error Handling:</strong> Provides consistent error responses and logging across all services</li>
          </ul>
        </div>
      </div>

      {/* BACKEND MICROSERVICES */}
      <div className="project-section">
        <h4 className="project-title">Backend Microservices Architecture</h4>
        
        <div className="subsection">
          <h5 className="subsection-title">Service Breakdown:</h5>
          <ul className="solutions-list">
            <li>
              <strong>Market Data Service:</strong> Fetches real-time stock prices, historical data, 
              and company information from external APIs. Implements caching strategies to reduce API costs
            </li>
            <li>
              <strong>Trading Service:</strong> Handles order placement, portfolio management, and trade history. 
              Integrates with Alpaca APIs for actual trade execution
            </li>
            
            <li>
              <strong>Community Service:</strong> Powers the social features including posts, comments, 
              likes, and user interactions. Implements content moderation and spam prevention
            </li>
            <li>
              <strong>Notification Service:</strong> Sends price alerts, order confirmations, and 
              community notifications via email and push notifications
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tradient;