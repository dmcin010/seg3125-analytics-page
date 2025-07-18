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

    const cards = document.querySelectorAll('.fade-in');
    cards.forEach(card => observer.observe(card));

    return () => cards.forEach(card => observer.unobserve(card));
  }, []);

  return (
    <div className="home-page">
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
        <FeatureCard
          img={chartsImg}
          title="Interactive Charts"
          description="Visualize trends with tooltips, axis labels, and responsive layouts."
        />
        <FeatureCard
          img={historyImg}
          title="Historical Accuracy"
          description="Dive into nearly 20 years of trusted, brand-specific data."
        />
        <FeatureCard
          img={speedImg}
          title="Fast Performance"
          description="Built with Vite and React to ensure ultra-responsive speed."
        />
        <FeatureCard
          img={focusImg}
          title="Purpose-Driven Simplicity"
          description="No clutter—just straightforward access to the metrics you need."
        />
      </div>

      <div className="button-outside">
        <Link to="/charts" className="view-charts-button">View Charts →</Link>
      </div>
    </div>
  );
}

function FeatureCard({ img, title, description }) {
  return (
    <div className="feature-card fade-in">
      <div className="feature-text">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <img src={img} alt={title} className="feature-image" />
    </div>
  );
}
