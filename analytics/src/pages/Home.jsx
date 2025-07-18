import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import dashboardImg from '../assets/graphs.png';
import chartsImg from '../assets/graphs2.png';
import historyImg from '../assets/graphs.png';
import speedImg from '../assets/graphs.png';
import focusImg from '../assets/graphs.png';

import './Home.css';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="home-page">
      <div className="content-box">
        <h1 className="dashboard-title">Welcome to My Dashboard</h1>

        <div className="hero-section">
          <img src={dashboardImg} alt="Dashboard preview" className="hero-image" />
          <div className="hero-text">
            <h2>Providing you the most accurate information with confidence since 2009</h2>
            <p>
              This dashboard brings together industry insights, historical data, and interactive charts
              so you can visualize trends and metrics effortlessly.
            </p>
          </div>
        </div>

        <h3 className="features-title">What My Dashboard Offers</h3>

        <div className="features-grid">
          <div className="feature-card fade-in">
            <img src={chartsImg} alt="Interactive Charts" />
            <div>
              <h4>1. Interactive Charts</h4>
              <p>Explore detailed visuals with dynamic labels, tooltips, and real-time responsiveness for each dataset.</p>
            </div>
          </div>

          <div className="feature-card fade-in">
            <img src={historyImg} alt="Historical Coverage" />
            <div>
              <h4>2. Accurate Information Coverage</h4>
              <p>Access data spanning nearly two decades to uncover long-term trends across industries and brands.</p>
            </div>
          </div>

          <div className="feature-card fade-in">
            <img src={speedImg} alt="Fast Load Times" />
            <div>
              <h4>3. Fast Load Times</h4>
              <p>Optimized with Vite + React, your dashboard loads instantly with smooth navigation and transitions.</p>
            </div>
          </div>

          <div className="feature-card fade-in">
            <img src={focusImg} alt="Purpose Driven" />
            <div>
              <h4>4. Purpose-Driven</h4>
              <p>Built to prioritize clarity and speed, the dashboard helps you make sense of metrics in seconds.</p>
            </div>
          </div>
        </div>

        <div className="button-container">
          <Link to="/charts" className="view-charts-button">
            View Charts →
          </Link>
        </div>
      </div>
    </div>
  );
}
