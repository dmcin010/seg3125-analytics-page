import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import LanguageContext from '../LanguageContext.js';
import { translations } from '../utils/translations.js';

import dashboardImg from '../assets/graphs.png';
import chartsImg from '../assets/graphs2.png';
import historyImg from '../assets/graphs.png';
import speedImg from '../assets/graphs2.png';
import focusImg from '../assets/graphs.png';
import './Home.css';

export default function Home() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

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
      <h1 className="dashboard-title">{t.homeHeadline}</h1>

      <div className="hero-section">
        <img src={dashboardImg} alt="Dashboard preview" className="hero-image" />
        <div className="hero-text">
          <h2>{t.homeIntro}</h2>
          <p>{t.homeDetails}</p>
        </div>
      </div>

      <h3 className="features-title">{t.homeOffers}</h3>

      <div className="features-grid">
        <FeatureCard
          img={chartsImg}
          title={t.featureCharts}
          description={t.featureChartsDesc}
        />
        <FeatureCard
          img={historyImg}
          title={t.featureAccuracy}
          description={t.featureAccuracyDesc}
        />
        <FeatureCard
          img={speedImg}
          title={t.featureSpeed}
          description={t.featureSpeedDesc}
        />
        <FeatureCard
          img={focusImg}
          title={t.featureSimplicity}
          description={t.featureSimplicityDesc}
        />
      </div>

      <div className="button-outside">
        <Link to="/charts" className="view-charts-button">{t.viewCharts}</Link>
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
