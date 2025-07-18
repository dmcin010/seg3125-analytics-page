import ChartPreview from '../components/ChartPreview.jsx';
import mcdonaldsLogo from '../assets/mcdonalds_logo.png';

export default function Charts() {
  return (
    <div className="text-center">
      <h2 className="mb-4">Explore Our Charts</h2>

      <div className="d-flex justify-content-center gap-4 flex-wrap">
        <ChartPreview
          to="/charts/mcdonalds"
          image={mcdonaldsLogo}
          title="McDonald's Revenue Chart"
        />
        {/* Add more ChartPreview components here */}
      </div>
    </div>
  );
}
