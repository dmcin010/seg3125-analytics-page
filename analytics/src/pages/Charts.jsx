import ChartPreview from '../components/ChartPreview.jsx';
import mcdonaldsLogo from '../assets/mcdonalds_logo.png';
import earthImage from '../assets/earth.png';
import generic from '../assets/genericChart.png';
import { Link } from 'react-router-dom';
import './Charts.css';

export default function Charts() {
  return (
    <div className="chart-page">
      {/* 🔙 Floating top-left button */}
      <div className="chart-top-button">
        <Link to="/" className="view-back-button">← Back</Link>
      </div>

      <h2 className="mb-4 text-center">Explore Our Charts</h2>

      <div className="chart-grid">
        <ChartPreview
          to="/charts/mcdonalds"
          image={mcdonaldsLogo}
          title="McDonald's Revenue Chart"
        />
        <ChartPreview
          to="/charts/global-temperature"
          image={earthImage}
          title="Global Temperature Chart"
        />
        {/* Extra preview cards */}
        <ChartPreview to="#" image={generic} title="Coming Soon" />
        <ChartPreview to="#" image={generic} title="Coming Soon" />
        <ChartPreview to="#" image={generic} title="Coming Soon" />
        <ChartPreview to="#" image={generic} title="Coming Soon" />
        <ChartPreview to="#" image={generic} title="Coming Soon" />
        <ChartPreview to="#" image={generic} title="Coming Soon" />
        <ChartPreview to="#" image={generic} title="Coming Soon" />
      </div>
    </div>
  );
}
