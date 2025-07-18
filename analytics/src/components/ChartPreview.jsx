import { Link } from 'react-router-dom';
import './ChartPreview.css';

export default function ChartPreview({ to, image, title }) {
  return (
    <Link to={to} className="chart-preview-link">
      <div className="chart-preview">
        <img src={image} alt={title} className="chart-image" />
        <div className="chart-title">{title}</div>
      </div>
    </Link>
  );
}
