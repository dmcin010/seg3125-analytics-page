import { Link } from 'react-router-dom';

export default function Charts() {
  return (
    <div className="text-center">
      <h2 className="mb-4">Explore Our Charts</h2>

      <div className="d-flex justify-content-center gap-4">
        <Link to="/charts/mcdonalds" className="btn btn-outline-primary">
          McDonald's Revenue Chart
        </Link>
        {/* Add more chart links here */}
      </div>
    </div>
  );
}
