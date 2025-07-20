import ChartPreview from '../components/ChartPreview.jsx';
import mcdonaldsLogo from '../assets/mcdonalds_logo.png';
import earthImage from '../assets/earth.png';
import generic from '../assets/genericChart.png';
import { Link } from 'react-router-dom';
import './Charts.css';

import { useContext } from 'react';
import LanguageContext from '../LanguageContext.js';
import { translations } from '../utils/translations.js';

export default function Charts() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="chart-page">
      <div className="chart-top-button">
        <Link to="/" className="view-back-button">{t.back}</Link>
      </div>

      <h2 className="mb-4 text-center">{t.exploreCharts}</h2>

      <div className="chart-grid">
        <ChartPreview to="/charts/mcdonalds" image={mcdonaldsLogo} title={t.mcdRevenue} />
        <ChartPreview to="/charts/global-temperature" image={earthImage} title={t.globalTemp} />
        <ChartPreview to="#" image={generic} title={t.comingSoon} />
        <ChartPreview to="#" image={generic} title={t.comingSoon} />
        <ChartPreview to="#" image={generic} title={t.comingSoon} />
        <ChartPreview to="#" image={generic} title={t.comingSoon} />
        <ChartPreview to="#" image={generic} title={t.comingSoon} />
        <ChartPreview to="#" image={generic} title={t.comingSoon} />
        <ChartPreview to="#" image={generic} title={t.comingSoon} />
      </div>
    </div>
  );
}
